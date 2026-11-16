/* ===================================================================================
   ONDO CORE - Produktionspfad der Lagen-Stufe (Backlog-Punkt 94). Aendert versiegelt.json NICHT.
   Die Merkmalsgruppen werden aus generated/lagen.json uebernommen (Wahl des Messpfads, KEINE neue Wahl,
   der Versuchszaehler waechst nicht). Nur die GEWICHTE werden taeglich neu trainiert, mit allen
   abgeschlossenen Spielen bis zum Datenstand (auch nach dem Stichtag). Der Messpfad bleibt davon unberuehrt.
   Ausgewiesen wird: Zahl der Trainingsspiele, Pruefsumme, Zuwachs gegenueber dem letzten Lauf.
   Eine Menge ohne gewaehlte Gruppe wird als "kein Merkmalsgewinn" gekennzeichnet (nur Kalibrierung).
   Qualitaet wird NICHT hier gemessen, sondern nur am Vorab-Archiv (prognose_archiv.js).
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('./lauf.js'), LA=require('./lagen.js'), LL=require('./lagen_lauf.js');
function rund(x){ return Math.round(x*1e5)/1e5; }
/* zeilen: alle Spielzeilen; gewaehlt: { menge:[gruppen] }; opt: Trainingsparameter */
function produktion(zeilen, lagen, heute, opt){
  var alle=zeilen.filter(function(z){ return !z.r.zusatz && z.r.datum<=heute; });
  var ergebnis=[];
  lagen.mengen.forEach(function(m){
    var gr=m.gewaehlt, menge=m.menge==='mitAufstellung'?alle.filter(function(z){ return z.mitAufst; }):alle;
    if(!menge.length) return;
    var sp=LL.teile(menge), mod=LA.trainieren(sp.training, sp.stopp, gr, opt||LL.TRAINING);
    ergebnis.push({ menge:m.menge, gruppen:gr, trainingsspiele:menge.length, bis:heute,
      pruefsumme:mod.pruefsumme, runde:mod.runde,
      merkmalsgewinn:gr.length>0, hinweis:gr.length?'Gruppen aus dem Messpfad uebernommen, Gewichte neu trainiert':'Keine Gruppe gewaehlt: nur Kalibrierung, KEIN Merkmalsgewinn',
      gewichte:mod.gewichte.map(function(r){ return r.map(rund); }), standardisierung:mod.standardisierung });
  });
  return ergebnis;
}
module.exports={ produktion:produktion };

if(require.main===module){
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var par=lies(path.join(hier,'generated','modell.json')).parameter, lagen=lies(path.join(hier,'generated','lagen.json'));
  var af=path.join(hier,'..','data','generated','aufstellung.json'), aufst=fs.existsSync(af)?lies(af):null;
  var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), lies(path.join(hier,'..','data','aliases.json')));
  var zeilen=LA.zeilenBauen(bestand, par, aufst), t0=Date.now();
  var out=produktion(zeilen, lagen, bestand.heute), pf=path.join(hier,'generated','lagen_produktion.json');
  var alt=fs.existsSync(pf)?lies(pf):{ verlauf:[] }, verlauf=alt.verlauf||[];
  out.forEach(function(o){ var v=verlauf.filter(function(x){ return x.menge===o.menge; }); var letzt=v[v.length-1];
    if(!letzt || letzt.bis!==o.bis) verlauf.push({ menge:o.menge, bis:o.bis, trainingsspiele:o.trainingsspiele, zuwachs:letzt?o.trainingsspiele-letzt.trainingsspiele:null, pruefsumme:o.pruefsumme }); });
  fs.writeFileSync(pf, JSON.stringify({ schema:1, hinweis:'Produktionspfad, aendert versiegelt.json nicht; Qualitaet nur am Vorab-Archiv gemessen.', mengen:out, verlauf:verlauf },null,1)+'\n');
  out.forEach(function(o){ console.log(o.menge+': '+o.trainingsspiele+' Spiele bis '+o.bis+', Pruefsumme '+o.pruefsumme+(o.merkmalsgewinn?'':' (kein Merkmalsgewinn)')); });
  console.log('Dauer '+Math.round((Date.now()-t0)/1000)+' s');
}
