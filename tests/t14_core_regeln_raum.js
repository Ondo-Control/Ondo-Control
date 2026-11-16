/* ===================================================================================
   t14 - Regeln als Textdatei und Trainingsraum des Ondo Core (Backlog-Punkt 94, K2 und K3).
   A  Regeldatei lesen: Ondos Datei wird verstanden, jede fehlerhafte Zeile bricht ab.
   B  Regeln durchsetzen: echtes Geld nur mit Ondos Regel UND belegtem Vorteil, Einsatzgrenze.
   C  Trainingsraum: eingefrorener Lernstand, Runden, voriger Lernstand, Pruefsumme.
   D  Die im Repo liegenden Dateien: raum.json = Neuberechnung, Ideen-Zaehler vollstaendig.
   Laedt beta.html nicht.
   =================================================================================== */
var fs=require('fs'), path=require('path');
var u=require('./umgebung.js');
var G=require('../core/regeln.js'), R=require('../core/model/raum.js'), M=require('../core/model/poisson.js'), L=require('../core/model/lauf.js');
var REPO=path.join(__dirname,'..');
function gleich(a,b){ return JSON.stringify(a)===JSON.stringify(b); }
function nah(a,b,e){ return Math.abs(a-b)<=(e||1e-12); }
var DATEI=fs.readFileSync(path.join(REPO,'core','REGELN.md'),'utf8');

/* ═══ A. Regeldatei lesen ═══ */
u.block('A. Regeldatei lesen');
var g=G.lesen(DATEI);
u.pruef('Ondos Datei wird fehlerfrei gelesen', g.ok, g.fehler.join(' | '));
u.pruef('die Werte der Datei sind die am 14.11.2026 festgelegten', gleich(g.werte, G.standard()));
u.pruef('jede Regel hat einen Wert', G.REGELN.every(function(r){ return g.werte[r.id]!==undefined; }));
function mit(alt, neu){ return DATEI.replace(alt, neu); }
function fehlerBei(text){ var x=G.lesen(text); return x.ok?null:x.fehler.join(' | '); }
u.pruef('Wert aendern wirkt', G.lesen(mit('Höchster Einsatz je Wette in Euro: 20','Höchster Einsatz je Wette in Euro: 35')).werte.maxEinsatz===35);
u.pruef('Komma, Euro-Zeichen und Prozent werden verstanden', (function(){
  var x=G.lesen(mit('Höchster Einsatz je Wette in Euro: 20','Höchster Einsatz je Wette in Euro: 12,5 €').replace('Prozent: 95','Prozent: 99 %'));
  return x.ok && x.werte.maxEinsatz===12.5 && x.werte.sicherheit===99; })());
u.pruef('Gross/Klein und Umlaute im Regelnamen sind egal', G.lesen(mit('Höchster Einsatz je Wette in Euro: 20','HOECHSTER EINSATZ JE WETTE IN EURO: 20')).ok);
u.pruef('Zeilen ohne Spiegelstrich sind nur Erklaerung', G.lesen(DATEI+'\nEchtes Geld erlaubt: ja\n').werte.echtesGeld===false);
u.pruef('FEHLER: unbekannte Regel', /unbekannte Regel/.test(fehlerBei(DATEI+'\n- Erfundene Regel: 5\n')||''));
u.pruef('FEHLER: Regel doppelt', /doppelt/.test(fehlerBei(DATEI+'\n- Echtes Geld erlaubt: nein\n')||''));
u.pruef('FEHLER: Regel fehlt', /Regel fehlt/.test(fehlerBei(DATEI.replace(/- Echtes Geld erlaubt: nein\n/,''))||''));
u.pruef('FEHLER: kein Doppelpunkt', /kein Doppelpunkt/.test(fehlerBei(mit('- Echtes Geld erlaubt: nein','- Echtes Geld erlaubt nein'))||''));
u.pruef('FEHLER: ja/nein mit anderem Wort', /ja" oder "nein/.test(fehlerBei(mit('Echtes Geld erlaubt: nein','Echtes Geld erlaubt: vielleicht'))||''));
u.pruef('FEHLER: Text statt Zahl', /erwartet eine Zahl/.test(fehlerBei(mit('Euro: 20','Euro: viel'))||''));
u.pruef('FEHLER: Zahl ausserhalb des Bereichs', fehlerBei(mit('Euro: 20','Euro: 5000'))!==null && fehlerBei(mit('Euro: 20','Euro: -1'))!==null);
u.pruef('FEHLER: Kommazahl wo eine ganze Zahl gilt', /ganze Zahl/.test(fehlerBei(mit('Urteil: 1000','Urteil: 1000,5'))||''));
u.pruef('FEHLER: Sicherheit nur 90, 95 oder 99', /erlaubt sind/.test(fehlerBei(mit('Prozent: 95','Prozent: 80'))||''));
u.pruef('Fehler brechen ab: es gibt keinen stillen Ersatzwert', (function(){ var x=G.lesen(mit('Euro: 20','Euro: viel')); return x.ok===false && x.werte.maxEinsatz===undefined; })());
u.pruef('Uebersicht ohne Aenderung: nichts geaendert, kein Hinweis', (function(){ var o=G.uebersicht(g.werte); return o.geaendert.length===0 && !o.hinweis; })());
u.pruef('Uebersicht: geaenderte Pruefregel wird vermerkt', (function(){
  var w=Object.assign({}, g.werte, { sicherheit:90 }), o=G.uebersicht(w);
  return o.geaendert.length===1 && o.geaendert[0].pruefregel===true && !!o.hinweis; })());
u.pruef('Uebersicht: geaenderter Einsatz ist keine Pruefregel, kein Hinweis', (function(){
  var o=G.uebersicht(Object.assign({}, g.werte, { maxEinsatz:50 })); return o.geaendert.length===1 && !o.hinweis; })());

/* ═══ B. Regeln durchsetzen ═══ */
u.block('B. Regeln durchsetzen');
var ja=Object.assign({}, g.werte, { echtesGeld:true }), nein=Object.assign({}, g.werte, { echtesGeld:false });
u.pruef('Ondos Regel "ja" allein erlaubt kein echtes Geld', G.echtesGeldErlaubt(ja,'nicht_pruefbar')===false && G.echtesGeldErlaubt(ja,'nicht_belegt')===false);
u.pruef('belegter Vorteil allein erlaubt kein echtes Geld', G.echtesGeldErlaubt(nein,'belegt')===false);
u.pruef('nur beide zusammen erlauben echtes Geld', G.echtesGeldErlaubt(ja,'belegt')===true);
u.pruef('Einsatz wird auf Ondos Grenze gekappt', G.einsatzBegrenzen(g.werte,100)===20 && G.einsatzBegrenzen(g.werte,5)===5 && G.einsatzBegrenzen(g.werte,20)===20);
u.pruef('Einsatz null, negativ oder Unsinn ergibt 0', G.einsatzBegrenzen(g.werte,0)===0 && G.einsatzBegrenzen(g.werte,-3)===0 && G.einsatzBegrenzen(g.werte,'x')===0 && G.einsatzBegrenzen(g.werte,NaN)===0);
u.pruef('Einsatzgrenze folgt der Datei', G.einsatzBegrenzen(Object.assign({}, g.werte, { maxEinsatz:7 }),100)===7);

/* ═══ C. Trainingsraum ═══ */
u.block('C. Trainingsraum');
var PAR={ startNiveau:0.18, startHeim:0.25, lernrateLiga:0.002, stufenSprung:0.25, neuStart:-0.15, lernrate:0.05, saisonBehalt:0.8, dc:0 };
var T=['t0','t1','t2','t3','t4','t5','t6','t7'];
function bestandBauen(aenderung){
  var a=[], n=0;
  for(var jahr=2020;jahr<=2021;jahr++) for(var mo=1;mo<=12;mo++) for(var k=0;k<20;k++){
    var h=T[(n*3+mo)%8], gg=T[(n*5+k+1)%8]; if(h===gg) gg=T[(n+4)%8];
    var r={ id:'r'+n, liga:'de.1', saison:(mo>=8?jahr:jahr-1)+'-'+String((mo>=8?jahr+1:jahr)).slice(2),
      datum:jahr+'-'+('0'+mo).slice(-2)+'-'+('0'+(1+k)).slice(-2), heimKey:h, gastKey:gg, th:(n*7)%4, tg:(n*3)%3, rolle:'lernen', zusatz:false };
    if(aenderung) aenderung(r); a.push(r); n++; }
  return { jeLand:{ de:a }, namen:{ de:{} }, heute:'2022-03-01' };
}
var OPT={ name:'T', mindestSpieleRunde:100, mindestSpieleUrteil:100, sicherheit:95, ziehungen:100, startwert:5, ideen:[] };
var H=L.raumHilfen();
var b0=bestandBauen(), r0=R.raum(b0, PAR, OPT, H);
var bl=R.rundenBilden(b0, 100);
u.pruef('Runden = ganze Monate, jede (ausser der letzten) mit mindestens 100 Spielen', bl.length>0 && bl.slice(0,-1).every(function(b){ return b.spiele>=100; }) && bl.reduce(function(s,b){ return s+b.spiele; },0)===480);
u.pruef('240 Spiele je Jahr, 20 je Monat → 5 Monate je Runde', bl[0].von==='2020-01' && bl[0].bis==='2020-05' && bl[0].spiele===100);
u.pruef('Runden folgen lueckenlos aufeinander', bl.every(function(b,i){ return i===0 || b.von>bl[i-1].bis; }));
u.pruef('Lernstaende heissen L0, L1, L2 … mit Pruefsumme', r0.runden.every(function(r,i){ return r.lernstand==='L'+i && /^[0-9a-f]{8}$/.test(r.pruefsumme); }));
u.pruef('erste Runde: leerer Lernstand, kein voriger Lernstand', r0.runden[0].logLoss1x2.voriger===null && r0.runden[1].logLoss1x2.voriger!==null);
u.pruef('jeder Lernstand hat eine andere Pruefsumme', (function(){ var s={}; r0.runden.forEach(function(r){ s[r.pruefsumme]=1; }); return Object.keys(s).length===r0.runden.length; })());
u.pruef('Pruefsumme: gleicher Zustand gleich, kleine Aenderung anders', (function(){
  var z=M.neuerZustand(); M.schritt(z, b0.jeLand.de[0], PAR, true); var a=R.pruefsumme({de:z}), c=R.pruefsumme({de:JSON.parse(JSON.stringify(z))});
  z.teams[Object.keys(z.teams)[0]].a+=0.001; return a===c && a!==R.pruefsumme({de:z}); })());
u.pruef('zweimal derselbe Lauf → dasselbe Ergebnis', gleich(R.raum(bestandBauen(), PAR, OPT, H), r0));

/* eingefroren: ein Ergebnis der Runde darf den Tipp derselben Runde nie beeinflussen */
var OPTZ=Object.assign({}, OPT, { mitZeilen:true });
var z0=R.raum(b0, PAR, OPTZ, H);
function tipps(o, runde){ return o.zeilen.filter(function(x){ return x.runde===runde; }).map(function(x){ return [x.id, x.pA, x.pB]; }); }
var letzte=r0.runden.length-1, vonLetzte=bl[letzte].von;
var z1=R.raum(bestandBauen(function(r){ if(r.datum.slice(0,7)>=vonLetzte){ r.th=9; r.tg=0; } }), PAR, OPTZ, H);
u.pruef('Ergebnisse der letzten Runde veraendert: Lernstaende und Tipps aller fruehen Runden bleiben gleich', gleich(r0.runden.slice(0,letzte).map(function(r){ return [r.pruefsumme, r.logLoss1x2]; }), z1.runden.slice(0,letzte).map(function(r){ return [r.pruefsumme, r.logLoss1x2]; })));
u.pruef('… auch der Lernstand der letzten Runde bleibt gleich', r0.runden[letzte].pruefsumme===z1.runden[letzte].pruefsumme);
u.pruef('… und die Tipps der letzten Runde (eingefroren, voriger Lernstand) bleiben Spiel fuer Spiel gleich', tipps(z0,letzte+1).length>0 && gleich(tipps(z0,letzte+1), tipps(z1,letzte+1)));
u.pruef('Gegenprobe: die Tipps des "laufenden" Lernens schauen dagegen mit, sie aendern sich', gleich(z0.zeilen.filter(function(x){ return x.runde===letzte+1; }).map(function(x){ return x.pC; }), z1.zeilen.filter(function(x){ return x.runde===letzte+1; }).map(function(x){ return x.pC; }))===false);
var mitte=2, vonMitte=bl[mitte].von;
var z2=R.raum(bestandBauen(function(r){ var m=r.datum.slice(0,7); if(m>=vonMitte && m<=bl[mitte].bis){ r.th=8; r.tg=0; } }), PAR, OPTZ, H);
u.pruef('Ergebnisse einer mittleren Runde veraendert: Lernstand der naechsten Runde aendert sich', r0.runden[mitte+1].pruefsumme!==z2.runden[mitte+1].pruefsumme);
u.pruef('… der Lernstand dieser Runde, ihre Tipps und alles davor nicht', gleich(r0.runden.slice(0,mitte+1).map(function(r){ return r.pruefsumme; }), z2.runden.slice(0,mitte+1).map(function(r){ return r.pruefsumme; })) && gleich(tipps(z0,mitte+1), tipps(z2,mitte+1)));

/* unabhaengige Neuberechnung von Runde 2: Lernen nur ueber Runde 1, danach eingefroren tippen */
(function(){
  var z=M.neuerZustand(), erste=b0.jeLand.de.filter(function(r){ return r.datum.slice(0,7)<=bl[0].bis; });
  erste.forEach(function(r){ M.schritt(z, r, PAR, true); });
  var zweite=b0.jeLand.de.filter(function(r){ var m=r.datum.slice(0,7); return m>=bl[1].von && m<=bl[1].bis; });
  var s=0; zweite.forEach(function(r){ var p=M.schritt(JSON.parse(JSON.stringify(z)), r, PAR, false).p, e=H.ergebnis(r); s+=-Math.log(Math.max(1e-12,p[e.m1x2])); });
  u.pruef('Runde 2 von Hand nachgerechnet: gleicher Log-Loss (4 Stellen)', nah(H.rund(s/zweite.length), r0.runden[1].logLoss1x2.lernstand, 1e-9), H.rund(s/zweite.length)+' gegen '+r0.runden[1].logLoss1x2.lernstand);
  u.pruef('… und die Pruefsumme von L1 stimmt mit dem Zustand nach Runde 1 ueberein', R.pruefsumme({de:z})===r0.runden[1].pruefsumme);
})();

u.pruef('letzte Runde ist als "laeuft noch" markiert, wenn der Monat noch nicht um ist', r0.runden[letzte].laeuftNoch===true);
u.pruef('Zusammenfassung zaehlt die Einlaufzeit nicht mit', r0.zusammenfassung.spiele===r0.runden.filter(function(r){ return r.nr>R.EINLAUF_RUNDEN; }).reduce(function(s,r){ return s+r.spiele; },0));
u.pruef('Nachweis: auf zufaelligen Daten hilft Lernen nicht (Urteil nicht "belegt")', (function(){
  var rnd=bestandBauen(function(r){ var x=(Number(r.id.slice(1))*2654435761)>>>0; r.th=x%4; r.tg=(x>>>3)%3; });
  var o=R.raum(rnd, PAR, Object.assign({}, OPT, { mindestSpieleRunde:20 }), H);
  return o.zusammenfassung.lernenHilft.urteil!=='belegt'; })());
u.pruef('Nachweis: bei Mannschaften mit echter Staerke hilft Lernen (Urteil "belegt")', (function(){
  var st={t0:3,t1:2,t2:1,t3:0,t4:0,t5:-1,t6:-2,t7:-3}, bb=bestandBauen(function(r){ var d=st[r.heimKey]-st[r.gastKey]; r.th=d>1?3:d>-1?1:0; r.tg=d>1?0:d>-1?1:2; });
  var o=R.raum(bb, PAR, Object.assign({}, OPT, { mindestSpieleRunde:20, mindestSpieleUrteil:100 }), H);
  return o.zusammenfassung.lernenHilft.differenz>0; })());

/* ═══ D. Die Dateien im Repo ═══ */
u.block('D. Die im Repo liegenden Dateien');
var GEN=path.join(REPO,'core','model','generated');
var raum=JSON.parse(fs.readFileSync(path.join(GEN,'raum.json'),'utf8')), bericht=JSON.parse(fs.readFileSync(path.join(GEN,'bericht.json'),'utf8'));
var kand=JSON.parse(fs.readFileSync(path.join(REPO,'core','model','kandidaten.json'),'utf8'));
var ideenDatei=JSON.parse(fs.readFileSync(path.join(REPO,'core','model','ideen.json'),'utf8'));
var aliases=JSON.parse(fs.readFileSync(path.join(REPO,'core','data','aliases.json'),'utf8'));
kand.ideen=ideenDatei.ideen;
var neu=L.lauf(L.bestandLaden(path.join(REPO,'core','data','generated'), aliases), kand, g.werte);
u.pruef('raum.json = Neuberechnung aus dem Bestand', gleich(neu.raum, raum));
u.pruef('bericht.json zeigt dieselben Regeln wie REGELN.md', gleich(bericht.regeln, G.uebersicht(g.werte)));
u.pruef('Bericht: Hoechsteinsatz aus der Regeldatei', bericht.beschluss.hoechsterEinsatz===g.werte.maxEinsatz);
u.pruef('Beschluss: echtes Geld bleibt aus', bericht.beschluss.echtesGeld===false);
u.pruef('Runde im Repo nutzt die Regel "Mindestzahl Spiele je Trainingsrunde"', raum.regel.mindestSpieleRunde===g.werte.mindestSpieleRunde && raum.runden.slice(0,-1).every(function(r){ return r.spiele>0; }));
u.pruef('Lernstand im Repo = Pruefsumme der letzten Runde', raum.lernstand.pruefsumme===raum.runden[raum.runden.length-1].pruefsumme);
u.pruef('Ideen-Zaehler: jede gepruefte Variante steht in ideen.json', kand.kandidaten.every(function(k){ return ideenDatei.ideen.some(function(i){ return (i.namen||[]).indexOf(k.name)>=0; }); }));
u.pruef('Ideen-Zaehler: Zahl im Bericht = Zahl der Namen in ideen.json', raum.gepruefteIdeen===ideenDatei.ideen.reduce(function(s,i){ return s+(i.namen||[]).length; },0));
u.pruef('Ideen-Zaehler: Nummern lueckenlos', ideenDatei.ideen.every(function(i,k){ return i.nr===k+1; }));
u.pruef('Gegenprobe: eine Variante fehlt im Zaehler → der Test erkennt es', !kand.kandidaten.concat([{name:'K99'}]).every(function(k){ return ideenDatei.ideen.some(function(i){ return (i.namen||[]).indexOf(k.name)>=0; }); }));
u.pruef('raum.json unter 100 KB', fs.statSync(path.join(GEN,'raum.json')).size<100*1024);

process.exit(u.bilanz()?1:0);
