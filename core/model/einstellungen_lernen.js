/* ===================================================================================
   ONDO CORE - Einstellungen des Grundmodells aus den Spielen lernen (Idee 17, 27.11.2026).
   Bisher waren die acht festen Zahlen des Grundmodells (poisson.js) von Hand gesetzt bzw. aus
   nur 8 Kandidaten gewaehlt (kandidaten.json, 14.11.2026). Hier sucht der Core sie selbst.

   Ablauf (vorab festgelegt, Versuch E-v1-einstellungen in ideen.json):
     1. Spielbestand OHNE Holdout und OHNE 'spaeter'; jedes Spiel ab dem Stichtag (versiegelt.json)
        fuehrt zum Abbruch.
     2. Anpassen: Nelder-Mead (fester Start = K6, feste Schrittzahl, kein Zufall) auf dem mittleren
        Log-Loss 1X2 der LERNsaisons. Jede Vorhersage entsteht vor dem Lernen aus dem Spiel.
     3. Messen: einmal auf den PRUEFsaisons, gelernte Zahlen gegen K6, dieselben Spiele,
        Standardfehler nach Spieltag, Huerde aus ideen.json (wie lagen_lauf.js).
   Aendert NICHTS am laufenden Modell (kandidaten.json, modell.json, bericht.json bleiben).
   Schreibt core/model/generated/einstellungen.json.
   Aufruf: node core/model/einstellungen_lernen.js [--nur-pruefen] [--schritte 260]
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('./lauf.js'), LA=require('./lagen.js'), LL=require('./lagen_lauf.js');

var NAMEN=['lernrate','saisonBehalt','dc','startNiveau','startHeim','lernrateLiga','stufenSprung','neuStart'];
var GRENZEN={ lernrate:[0.002,0.2], saisonBehalt:[0.2,1], dc:[-0.25,0.15], startNiveau:[-0.5,0.8], startHeim:[-0.2,0.6],
              lernrateLiga:[0,0.05], stufenSprung:[-0.5,1], neuStart:[-1,0.5] };
var SCHRITT={ lernrate:0.01, saisonBehalt:0.05, dc:0.03, startNiveau:0.05, startHeim:0.05, lernrateLiga:0.002, stufenSprung:0.05, neuStart:0.05 };

/* Nur erlaubte Spiele: lernen, pruefen, aus (Corona-Rest). Sperre am Stichtag. */
function bestandFuerWahl(bestand, stichtag){
  var jeLand={};
  Object.keys(bestand.jeLand).forEach(function(l){
    jeLand[l]=bestand.jeLand[l].filter(function(r){ return r.rolle==='lernen'||r.rolle==='pruefen'||r.rolle==='aus'; });
    jeLand[l].forEach(function(r){ if(r.datum>=stichtag) throw new Error('SPERRE: Spiel '+r.id+' ('+r.datum+') am oder nach dem Stichtag '+stichtag); });
  });
  return { jeLand:jeLand };
}
function parAus(fest, v){ var p=Object.assign({}, fest); NAMEN.forEach(function(n,i){ var g=GRENZEN[n]; p[n]=Math.max(g[0], Math.min(g[1], v[i])); }); return p; }
function verluste(b, par, rolle){
  var d=L.durchlauf(b, par, {}), aus=[], zeilen=[];
  d.zeilen.forEach(function(z){ if(z.rolle===rolle && !z.zusatz){ aus.push(-Math.log(Math.max(1e-12, z.p[z.e.m1x2]))); zeilen.push({ r:{ liga:z.liga, datum:z.datum } }); } });
  return { v:aus, zeilen:zeilen };
}
function mittel(a){ var s=0; a.forEach(function(x){ s+=x; }); return s/a.length; }

/* Nelder-Mead, deterministisch. */
function nelderMead(f, start, schritte, maxAuswertungen){
  var n=start.length, punkte=[start.slice()], auswertungen=0;
  for(var i=0;i<n;i++){ var p=start.slice(); p[i]+=schritte[i]; punkte.push(p); }
  var werte=punkte.map(function(p){ auswertungen++; return f(p); }), verlauf=[];
  function sortiere(){ var idx=werte.map(function(_,i){ return i; }).sort(function(a,b){ return werte[a]-werte[b]; }); punkte=idx.map(function(i){ return punkte[i]; }); werte=idx.map(function(i){ return werte[i]; }); }
  while(auswertungen<maxAuswertungen){
    sortiere(); verlauf.push(werte[0]);
    if(werte[n]-werte[0]<1e-7) break;
    var mitte=new Array(n).fill(0); for(var i=0;i<n;i++) for(var j=0;j<n;j++) mitte[j]+=punkte[i][j]/n;
    function weg(t){ return mitte.map(function(m,j){ return m+t*(punkte[n][j]-m); }); }
    var r=weg(-1), fr=f(r); auswertungen++;
    if(fr<werte[0]){ var e=weg(-2), fe=f(e); auswertungen++; if(fe<fr){ punkte[n]=e; werte[n]=fe; } else { punkte[n]=r; werte[n]=fr; } }
    else if(fr<werte[n-1]){ punkte[n]=r; werte[n]=fr; }
    else {
      var c=fr<werte[n]?weg(-0.5):weg(0.5), fc=f(c); auswertungen++;
      if(fc<Math.min(fr,werte[n])){ punkte[n]=c; werte[n]=fc; }
      else { for(var k=1;k<=n;k++){ punkte[k]=punkte[k].map(function(x,j){ return punkte[0][j]+0.5*(x-punkte[0][j]); }); werte[k]=f(punkte[k]); auswertungen++; } }
    }
  }
  sortiere();
  return { bester:punkte[0], wert:werte[0], auswertungen:auswertungen, verlauf:verlauf };
}

function lauf(bestand, kand, versiegelt, opt){
  opt=opt||{};
  var b=bestandFuerWahl(bestand, versiegelt.stichtag);
  var k6=kand.kandidaten.filter(function(k){ return k.name==='K6'; })[0];
  var parK6=Object.assign({}, kand.fest, { lernrate:k6.lernrate, saisonBehalt:k6.saisonBehalt, dc:k6.dc });
  var start=NAMEN.map(function(n){ return parK6[n]; });
  function ziel(v){ return mittel(verluste(b, parAus(kand.fest, v), 'lernen').v); }
  var nm=nelderMead(ziel, start, NAMEN.map(function(n){ return SCHRITT[n]; }), opt.maxAuswertungen||260);
  var parNeu=parAus(kand.fest, nm.bester);
  var lernK6=mittel(verluste(b, parK6, 'lernen').v), lernNeu=mittel(verluste(b, parNeu, 'lernen').v);
  var pA=verluste(b, parK6, 'pruefen'), pB=verluste(b, parNeu, 'pruefen');
  var v=LA.vergleich(pA.zeilen, pA.v, pB.v), z=v.standardfehler>0?v.differenz/v.standardfehler:0;
  var huerde=LL.HUERDE, r=function(x){ return Math.round(x*10000)/10000; };
  var einst={}; NAMEN.forEach(function(n){ einst[n]={ vorher:parK6[n], gelernt:r(parNeu[n]) }; });
  return { schema:1, idee:'E-v1-einstellungen', stichtag:versiegelt.stichtag,
    regel:'Anpassen nur auf den Lernsaisons (Vorhersage vor jedem Spiel), Messen einmal auf den Pruefsaisons gegen K6; Holdout, spaeter und versiegelte Spiele nicht benutzt',
    einstellungen:einst, suche:{ verfahren:'Nelder-Mead, Start K6, kein Zufall', auswertungen:nm.auswertungen },
    lernsaisons:{ spiele:pA.v.length?verluste(b, parK6, 'lernen').v.length:0, logLossK6:r(lernK6), logLossGelernt:r(lernNeu), hinweis:'auf diesen Spielen angepasst, darum kein Beleg' },
    pruefsaisons:{ spiele:v.n, spieltage:v.spieltage, logLossK6:r(mittel(pA.v)), logLossGelernt:r(mittel(pB.v)), vorsprung:r(v.differenz), standardfehler:r(v.standardfehler), z:Math.round(z*100)/100 },
    huerde:huerde, bestanden:z>=huerde,
    hinweis:'Aendert das laufende Modell nicht. Uebernahme waere eine Entscheidung (kandidaten.json; der Holdout waere fuer das neue Modell nicht mehr frisch).' };
}

if(require.main===module){
  var hier=__dirname, a=process.argv.slice(2), i=a.indexOf('--schritte');
  var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
  var kand=JSON.parse(fs.readFileSync(path.join(hier,'kandidaten.json'),'utf8'));
  var vs=JSON.parse(fs.readFileSync(path.join(hier,'versiegelt.json'),'utf8'));
  var e=lauf(L.bestandLaden(path.join(hier,'..','data','generated'), aliases), kand, vs, { maxAuswertungen:i>=0?Number(a[i+1]):260 });
  console.log(JSON.stringify(e.pruefsaisons), 'Huerde', e.huerde, e.bestanden?'BESTANDEN':'nicht bestanden');
  console.log(JSON.stringify(e.einstellungen));
  if(a.indexOf('--nur-pruefen')<0){ fs.writeFileSync(path.join(hier,'generated','einstellungen.json'), JSON.stringify(e,null,1)+'\n'); console.log('einstellungen.json geschrieben'); }
}
module.exports={ lauf:lauf, bestandFuerWahl:bestandFuerWahl, nelderMead:nelderMead, NAMEN:NAMEN, GRENZEN:GRENZEN };
