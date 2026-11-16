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
var L=require('./lauf.js'), LA=require('./lagen.js');

var HUERDE = 2.64;            /* Standardfehler; entspricht 95 % bei 6 gleichzeitigen Versuchen (Bonferroni) */
var TRAINING = { maxRunden:400, geduld:15, lernrate:1, bremse:0.0001 };

function sperre(zeilenListen, stichtag){
  zeilenListen.forEach(function(liste){
    liste.forEach(function(z){
      if(z.r.datum>=stichtag) throw new Error('SPERRE: Spiel '+z.r.id+' ('+z.r.datum+') liegt am oder nach dem Stichtag '+stichtag+' und darf nicht zum Lernen oder Waehlen benutzt werden.');
    });
  });
}

function lauf(bestand, par, stichtag, opt){
  opt=opt||TRAINING;
  var zeilen=LA.zeilenBauen(bestand, par);
  var lernen=zeilen.filter(function(z){ return z.r.rolle==='lernen' && !z.r.zusatz && z.r.datum<stichtag; });
  var pruefen=zeilen.filter(function(z){ return z.r.rolle==='pruefen' && !z.r.zusatz && z.r.datum<stichtag; });
  sperre([lernen, pruefen], stichtag);
  var versuche=[], gewaehlt=[], aktuell=LA.trainieren(lernen, pruefen, [], opt), l0=aktuell.versionen[0];
  var basisKalibriert=aktuell;
  var verlusteAktuell=LA.verlusteAuf(aktuell, pruefen), stop=false;
  while(!stop){
    var rest=LA.GRUPPEN.filter(function(g){ return gewaehlt.indexOf(g)<0; }), beste=null;
    rest.forEach(function(g){
      var m=LA.trainieren(lernen, pruefen, gewaehlt.concat([g]), opt);
      var v=LA.vergleich(pruefen, verlusteAktuell, LA.verlusteAuf(m, pruefen));     /* aktuell minus neu: positiv = besser */
      var z=v.differenz/v.standardfehler;
      versuche.push({ schritt:gewaehlt.length+1, gruppe:g, zu:gewaehlt.slice(), verlustPruefen:round(m.verlustPruefen), vorsprung:round(v.differenz,5), standardfehler:round(v.standardfehler,5), z:round(z,2), besteHuerde:z>=HUERDE });
      if(z>=HUERDE && (!beste || z>beste.z)) beste={ g:g, m:m, z:z };
    });
    if(beste){ gewaehlt.push(beste.g); aktuell=beste.m; verlusteAktuell=LA.verlusteAuf(aktuell, pruefen); }
    else stop=true;
    if(!rest.length) stop=true;
  }
  var ohne=LA.vergleich(pruefen, LA.verlusteAuf({ gewichte:null }, []), []) && null;   /* Platzhalter-frei: unten gerechnet */
  /* Vergleich Endstand gegen das alte Modell L0 auf den Pruefsaisons */
  var l0Modell={ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} },
                 gewichte:[[1,0,0],[0,1,0],[0,0,1]] };
  var vL0=LA.verlusteAuf(l0Modell, pruefen), vEnde=LA.verlusteAuf(aktuell, pruefen), vgl=LA.vergleich(pruefen, vL0, vEnde);
  var kompakt=aktuell.versionen.filter(function(v,i){ return i===0 || i%25===0 || i===aktuell.versionen.length-1; });
  return {
    schema:1, stichtag:stichtag,
    spiele:{ lernen:lernen.length, pruefen:pruefen.length },
    versuche:versuche, zaehlerVersuche:versuche.length, huerde:HUERDE, gewaehlt:gewaehlt,
    pruefen:{ altesModellK6:round(avg(vL0)), nurBasisKalibriert:round(basisKalibriert.verlustPruefen), ende:round(aktuell.verlustPruefen),
              vorsprungGegenK6:round(vgl.differenz,5), standardfehler:round(vgl.standardfehler,5), spiele:vgl.n, spieltage:vgl.spieltage },
    lernstand:{ name:'L'+aktuell.runde, runde:aktuell.runde, pruefsumme:aktuell.pruefsumme, gruppen:aktuell.gruppen, namen:aktuell.namen,
                standardisierung:rundeObj(aktuell.standardisierung), gewichte:aktuell.gewichte.map(function(r){ return r.map(function(x){ return round(x,5); }); }) },
    runden:kompakt.map(function(v){ return { lernstand:v.lernstand, verlustLernen:round(v.verlustLernen), verlustPruefen:round(v.verlustPruefen), pruefsumme:v.pruefsumme }; }),
    regeln:{ lernenAuf:'Rolle lernen, vor Stichtag', waehlenAuf:'Rolle pruefen, vor Stichtag', versiegelt:'alle Spiele ab Stichtag' }
  };
}
function avg(a){ var s=0; a.forEach(function(x){ s+=x; }); return s/a.length; }
function round(x,n){ var f=Math.pow(10,n===undefined?4:n); return Math.round(x*f)/f; }
function rundeObj(st){ var o={ mittel:{}, streuung:{} }; Object.keys(st.mittel).forEach(function(k){ o.mittel[k]=round(st.mittel[k],6); o.streuung[k]=round(st.streuung[k],6); }); return o; }

module.exports={ lauf:lauf, sperre:sperre, HUERDE:HUERDE, TRAINING:TRAINING };

if(require.main===module){
  var hier=__dirname, nurPruefen=process.argv.indexOf('--nur-pruefen')>=0;
  var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
  var modell=JSON.parse(fs.readFileSync(path.join(hier,'generated','modell.json'),'utf8'));
  var vers=JSON.parse(fs.readFileSync(path.join(hier,'versiegelt.json'),'utf8'));
  var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), aliases);
  var t0=Date.now(), e=lauf(bestand, modell.parameter, vers.stichtag);
  console.log('Stichtag '+e.stichtag+' · Lernspiele '+e.spiele.lernen+' · Pruefspiele '+e.spiele.pruefen+' · '+Math.round((Date.now()-t0)/1000)+' s');
  console.log('Pruefsaisons, Log-Loss: altes Modell K6 '+e.pruefen.altesModellK6+' · Basis neu kalibriert '+e.pruefen.nurBasisKalibriert+' · Ende '+e.pruefen.ende+' · Vorsprung gegen K6 '+e.pruefen.vorsprungGegenK6+' (SE '+e.pruefen.standardfehler+')');
  console.log('Versuche: '+e.zaehlerVersuche+' · gewaehlt: '+(e.gewaehlt.join(', ')||'keine'));
  e.versuche.forEach(function(v){ console.log('  Schritt '+v.schritt+' '+v.gruppe.padEnd(8)+' z='+v.z+(v.besteHuerde?'  <- Huerde bestanden':'')); });
  if(nurPruefen){ console.log('Nur geprueft, nichts geschrieben.'); process.exit(0); }
  fs.writeFileSync(path.join(hier,'generated','lagen.json'), JSON.stringify(e,null,1)+'\n');
  console.log('lagen.json geschrieben.');
}
