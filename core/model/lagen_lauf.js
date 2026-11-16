/* ===================================================================================
   ONDO CORE - Lauf "Lagen lernen" (Backlog-Punkt 94). Der Core waehlt selbst, welche
   Merkmalsgruppen helfen, und trainiert in Runden. Vorgaben stehen vorab hier und in
   versiegelt.json; dieser Lauf fuehrt sie nur aus.

   Ablauf:
     1. Zeilen mit Merkmalen bauen (nur Vergangenheit je Spiel).
     2. Sperre: lernen und pruefen duerfen kein Spiel ab dem Stichtag enthalten, sonst Abbruch.
     3. L0 = das alte Modell (K6). Ausgangswert auf den Pruefsaisons.
     4. Wahl der Gruppen, vorwaerts: Zu der bisherigen Wahl wird jede uebrige Gruppe einzeln
        probiert (jeder Versuch wird gezaehlt). Die beste kommt dazu, wenn ihr Vorsprung auf den
        Pruefsaisons mindestens HUERDE Standardfehler betraegt. Sonst ist Schluss.
     5. Bericht: Zaehler aller Versuche, Lernstand, Verlust je Runde (gekuerzt).
   Aufruf: node core/model/lagen_lauf.js [--nur-pruefen]
   Kein Netz, kein Schluessel, keine Uhr.
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('./lauf.js'), LA=require('./lagen.js'), NL=require('./nichtlinear.js');

/* Huerde: einseitiger Test, Alpha 5 % geteilt durch die Zahl ALLER geprueften Ideen in ideen.json
   (Bonferroni, strenger als Holm; jede Vorprobe zaehlt). Je mehr Ideen, desto hoeher die Huerde. */
function phi(x){ var t=1/(1+0.2316419*Math.abs(x)), d=0.3989423*Math.exp(-x*x/2),
  p=d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274)))); return x>0?1-p:p; }
function zFuer(alpha){ var lo=0, hi=10; for(var i=0;i<60;i++){ var m=(lo+hi)/2; if(1-phi(m)>alpha) lo=m; else hi=m; } return (lo+hi)/2; }
function anzahlIdeen(ordner){
  var d=JSON.parse(fs.readFileSync(path.join(ordner,'ideen.json'),'utf8'));
  return d.ideen.reduce(function(s,i){ return s+(i.namen||[]).length; },0);
}
var HUERDE = Math.round(zFuer(0.05/anzahlIdeen(__dirname))*100)/100;
var TRAINING = { maxRunden:400, geduld:15, lernrate:1, bremse:0.0001 };
var TRAINING_NL = { maxRunden:300, geduld:20, lernrate:0.02, bremse:0.0001, versteckt:16 };

function sperre(zeilenListen, stichtag){
  zeilenListen.forEach(function(liste){
    liste.forEach(function(z){
      if(z.r.datum>=stichtag) throw new Error('SPERRE: Spiel '+z.r.id+' ('+z.r.datum+') liegt am oder nach dem Stichtag '+stichtag+' und darf nicht zum Lernen oder Waehlen benutzt werden.');
    });
  });
}

/* Innerer Stopp-Split: Die letzten 15 % der Lernspiele (nach Datum) dienen NUR dem Abbruch des Trainings
   (welche Runde ist die beste). Die Gewichte lernen auf den uebrigen 85 %. Die Pruefsaisons dienen danach
   ausschliesslich dem Vergleich der Gruppen. So wird auf den Pruefsaisons nicht zugleich Runde und Gruppe gewaehlt. */
function teile(lernen){
  var d=lernen.map(function(z){ return z.r.datum; }).sort(), grenze=d[Math.floor(d.length*0.85)];
  return { training:lernen.filter(function(z){ return z.r.datum<grenze; }), stopp:lernen.filter(function(z){ return z.r.datum>=grenze; }), grenze:grenze };
}
/* Wahl der Gruppen, vorwaerts, auf EINER Spielmenge. Gibt Versuche, Wahl und Lernstand zurueck. */
function waehle(name, lernen, pruefen, kandidaten, opt){
  var sp=teile(lernen), tr=sp.training, stopp=sp.stopp;
  function trainiere(gr){ var m=LA.trainieren(tr, stopp, gr, opt), v=LA.verlusteAuf(m, pruefen); m.verlustPruefen=avg(v); return m; }
  var versuche=[], gewaehlt=[], aktuell=trainiere([]), basis=aktuell;
  var verluste=LA.verlusteAuf(aktuell, pruefen), stop=false;
  while(!stop){
    var rest=kandidaten.filter(function(g){ return gewaehlt.indexOf(g)<0; }), beste=null;
    if(!rest.length) break;
    rest.forEach(function(g){
      var m=trainiere(gewaehlt.concat([g]));
      var v=LA.vergleich(pruefen, verluste, LA.verlusteAuf(m, pruefen));     /* aktuell minus neu: positiv = besser */
      var z=v.standardfehler>0 ? v.differenz/v.standardfehler : 0;
      versuche.push({ menge:name, schritt:gewaehlt.length+1, gruppe:g, zu:gewaehlt.slice(), verlustPruefen:round(m.verlustPruefen), vorsprung:round(v.differenz,5), standardfehler:round(v.standardfehler,5), z:round(z,2), besteHuerde:z>=HUERDE });
      if(z>=HUERDE && (!beste || z>beste.z)) beste={ g:g, m:m, z:z };
    });
    if(beste){ gewaehlt.push(beste.g); aktuell=beste.m; verluste=LA.verlusteAuf(aktuell, pruefen); }
    else stop=true;
  }
  var l0={ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} }, gewichte:[[1,0,0],[0,1,0],[0,0,1]] };
  var vL0=LA.verlusteAuf(l0, pruefen), vEnde=LA.verlusteAuf(aktuell, pruefen), vgl=LA.vergleich(pruefen, vL0, vEnde);
  var kompakt=aktuell.versionen.filter(function(v,i){ return i===0 || i%25===0 || i===aktuell.versionen.length-1; });
  return {
    menge:name, spiele:{ lernen:lernen.length, training:tr.length, stopp:stopp.length, stoppAb:sp.grenze, pruefen:pruefen.length },
    versuche:versuche, gewaehlt:gewaehlt,
    pruefen:{ altesModellK6:round(avg(vL0)), nurBasisKalibriert:round(basis.verlustPruefen), ende:round(aktuell.verlustPruefen),
              vorsprungGegenK6:round(vgl.differenz,5), standardfehler:round(vgl.standardfehler,5), spiele:vgl.n, spieltage:vgl.spieltage },
    lernstand:{ name:'L'+aktuell.runde, runde:aktuell.runde, pruefsumme:aktuell.pruefsumme, gruppen:aktuell.gruppen, namen:aktuell.namen,
                standardisierung:rundeObj(aktuell.standardisierung), gewichte:aktuell.gewichte.map(function(r){ return r.map(function(x){ return round(x,5); }); }) },
    runden:kompakt.map(function(v){ return { lernstand:v.lernstand, verlustLernen:round(v.verlustLernen), verlustPruefen:round(v.verlustPruefen), pruefsumme:v.pruefsumme }; })
  };
}

/* Nichtlinearer Versuch je Menge (gezaehlt in ideen.json als NL-<menge>): kleines Netz auf ALLEN waehlbaren Gruppen gegen das
   gewaehlte lineare Modell, Pruefspiele wie bei der Wahl der Gruppen, gleiche Huerde. Uebernommen wird es nur bei bestandener Huerde. */
function nichtlinear(name, lernen, pruefen, kandidaten, gewaehlt, opt){
  var sp=teile(lernen), lin=LA.trainieren(sp.training, sp.stopp, gewaehlt, opt), vLin=LA.verlusteAuf(lin, pruefen);
  var voll=LA.trainieren(sp.training, sp.stopp, kandidaten, opt);                       /* nur fuer Namen und Standardisierung */
  var nl=NL.trainieren(sp.training, sp.stopp, voll.namen, voll.standardisierung, TRAINING_NL), vNl=nl.verlusteAuf(pruefen);
  var v=LA.vergleich(pruefen, vLin, vNl), z=v.standardfehler>0?v.differenz/v.standardfehler:0;
  return { versuch:'NL-'+name, gruppen:kandidaten, verlustPruefenLinear:round(avg(vLin)), verlustPruefenNichtlinear:round(avg(vNl)), vorsprung:round(v.differenz,5), standardfehler:round(v.standardfehler,5),
           z:round(z,2), besteHuerde:z>=HUERDE, runde:nl.runde, spiele:v.n, uebernommen:z>=HUERDE };
}

/* Zwei Mengen: 'alle' = alle Spiele mit den sechs Ergebnis-Gruppen; 'mitAufstellung' = nur Spiele, zu denen
   Aufstellungsdaten vorliegen, mit den sechs Gruppen plus 'aufst'. Spiele ohne Aufstellungsdaten fallen
   spaeter auf den Lernstand der Menge 'alle' zurueck. */
function lauf(bestand, par, stichtag, opt, aufst){
  opt=opt||TRAINING;
  var zeilen=LA.zeilenBauen(bestand, par, aufst);
  var lernen=zeilen.filter(function(z){ return z.r.rolle==='lernen' && !z.r.zusatz && z.r.datum<stichtag; });
  var pruefen=zeilen.filter(function(z){ return z.r.rolle==='pruefen' && !z.r.zusatz && z.r.datum<stichtag; });
  sperre([lernen, pruefen], stichtag);
  var mengen=[ waehle('alle', lernen, pruefen, LA.GRUPPEN, opt) ];
  mengen[0].nichtlinear=nichtlinear('alle', lernen, pruefen, LA.GRUPPEN, mengen[0].gewaehlt, opt);
  if(aufst){
    var la=lernen.filter(function(z){ return z.mitAufst; }), pa=pruefen.filter(function(z){ return z.mitAufst; });
    if(la.length && pa.length){ var ma=waehle('mitAufstellung', la, pa, LA.GRUPPEN_AUFST, opt); ma.nichtlinear=nichtlinear('mitAufstellung', la, pa, LA.GRUPPEN_AUFST, ma.gewaehlt, opt); mengen.push(ma); }
  }
  var versuche=[]; mengen.forEach(function(m){ m.versuche.forEach(function(v){ versuche.push(v); }); });
  return { schema:2, stichtag:stichtag, huerde:HUERDE, zaehlerVersuche:versuche.length, mengen:mengen,
           regeln:{ lernenAuf:'Rolle lernen, vor Stichtag', waehlenAuf:'Rolle pruefen, vor Stichtag', versiegelt:'alle Spiele ab Stichtag, Holdout-Saisons ebenfalls nicht angesehen' } };
}
function avg(a){ var s=0; a.forEach(function(x){ s+=x; }); return s/a.length; }
function round(x,n){ var f=Math.pow(10,n===undefined?4:n); return Math.round(x*f)/f; }
function rundeObj(st){ var o={ mittel:{}, streuung:{} }; Object.keys(st.mittel).forEach(function(k){ o.mittel[k]=round(st.mittel[k],6); o.streuung[k]=round(st.streuung[k],6); }); return o; }

/* Der Holdout wird nur dann erneut ausgewertet (Bootstrap im Bericht), wenn der aktuelle Lernstand GENAU der ist, der beim
   protokollierten Blick benutzt wurde. Sonst waere es ein weiterer, unprotokollierter Blick auf dieselben Spiele. */
function holdoutFreigabe(vers, kennung, pruefsumme){
  var b=(vers.blicke||[]).filter(function(x){ return x.gehoert_zu===kennung; })[0];
  if(!b) return { ok:false, grund:'kein protokollierter Blick' };
  if(!b.pruefsumme) return { ok:false, grund:'Blick ohne Pruefsumme protokolliert' };
  if(b.pruefsumme!==pruefsumme) return { ok:false, grund:'Lernstand hat sich seit dem protokollierten Blick geaendert (Pruefsumme '+pruefsumme+' statt '+b.pruefsumme+')' };
  return { ok:true };
}
module.exports={ holdoutFreigabe:holdoutFreigabe, teile:teile, zFuer:zFuer, anzahlIdeen:anzahlIdeen, lauf:lauf, waehle:waehle, sperre:sperre, HUERDE:HUERDE, TRAINING:TRAINING, TRAINING_NL:TRAINING_NL };

if(require.main===module){
  var hier=__dirname, nurPruefen=process.argv.indexOf('--nur-pruefen')>=0;
  var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
  var modell=JSON.parse(fs.readFileSync(path.join(hier,'generated','modell.json'),'utf8'));
  var vers=JSON.parse(fs.readFileSync(path.join(hier,'versiegelt.json'),'utf8'));
  var af=path.join(hier,'..','data','generated','aufstellung.json');
  var aufst=fs.existsSync(af)?JSON.parse(fs.readFileSync(af,'utf8')):null;
  var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), aliases);
  var t0=Date.now(), e=lauf(bestand, modell.parameter, vers.stichtag, TRAINING, aufst);
  console.log('Stichtag '+e.stichtag+' · '+Math.round((Date.now()-t0)/1000)+' s · Versuche gesamt '+e.zaehlerVersuche);
  e.mengen.forEach(function(m){
    console.log('Menge '+m.menge+': Lernspiele '+m.spiele.lernen+' · Pruefspiele '+m.spiele.pruefen+' · gewaehlt: '+(m.gewaehlt.join(', ')||'keine'));
    console.log('  Log-Loss Pruefsaisons: altes Modell K6 '+m.pruefen.altesModellK6+' · Ende '+m.pruefen.ende+' · Vorsprung gegen K6 '+m.pruefen.vorsprungGegenK6+' (SE '+m.pruefen.standardfehler+')');
    if(m.nichtlinear){ var n=m.nichtlinear; console.log('  Nichtlinear '+n.versuch+': linear '+n.verlustPruefenLinear+' · Netz '+n.verlustPruefenNichtlinear+' · Vorsprung '+n.vorsprung+' (SE '+n.standardfehler+') z='+n.z+(n.besteHuerde?'  <- Huerde bestanden':'  (Huerde nicht bestanden)')); }
    m.versuche.forEach(function(v){ console.log('  Schritt '+v.schritt+' '+v.gruppe.padEnd(8)+' z='+v.z+(v.besteHuerde?'  <- Huerde bestanden':'')); });
  });
  if(nurPruefen){ console.log('Nur geprueft, nichts geschrieben.'); process.exit(0); }
  fs.writeFileSync(path.join(hier,'generated','lagen.json'), JSON.stringify(e,null,1)+'\n');
  console.log('lagen.json geschrieben.');
}
