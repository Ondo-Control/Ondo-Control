/* ===================================================================================
   ONDO CORE - Bericht "Lagen lernen" in drei Teilen (A, B, C), mit Blockbootstrap.
   (A) Entwicklungs-/Pruefsaisons (alle Versuche inventarisiert, Auswahl-Optimismus moeglich)
   (B) retrospektiver Holdout-Test (Experiment a, EIN Blick, Eintrag in versiegelt.json)
   (C) prospektive, handelbare Validierung: offen - keine Aussage
   Rechnet nur NEUE Kennzahlen (Blockbootstrap) auf denselben Spielen und denselben Lernstaenden; kein neuer Blick
   auf andere Spiele. Spiele ab dem Stichtag werden nicht gelesen.
   Aufruf: node core/model/lagen_bericht.js
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('./lauf.js'), LA=require('./lagen.js'), LL=require('./lagen_lauf.js');
var hier=__dirname, ZIEH=2000, START=20261116;
var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
var modell=JSON.parse(fs.readFileSync(path.join(hier,'generated','modell.json'),'utf8'));
var vers=JSON.parse(fs.readFileSync(path.join(hier,'versiegelt.json'),'utf8'));
var aufst=JSON.parse(fs.readFileSync(path.join(hier,'..','data','generated','aufstellung.json'),'utf8'));
var lagen=JSON.parse(fs.readFileSync(path.join(hier,'generated','lagen.json'),'utf8'));
var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), aliases), ST=vers.stichtag;
var zeilen=LA.zeilenBauen(bestand, modell.parameter, aufst);
function menge(rolle, nurAuf){ return zeilen.filter(function(z){ return (!nurAuf||z.mitAufst) && z.r.rolle===rolle && !z.r.zusatz && z.r.datum<ST; }); }
var m=lagen.mengen.filter(function(x){ return x.menge==='mitAufstellung'; })[0];
var lernen=menge('lernen',true), pruefen=menge('pruefen',true), holdout=menge('holdout',true);
var sp=LL.teile(lernen), lernstand=LA.trainieren(sp.training, sp.stopp, m.gewaehlt, LL.TRAINING);
if(lernstand.pruefsumme!==m.lernstand.pruefsumme) throw new Error('Lernstand stimmt nicht mit lagen.json ueberein.');
var l0={ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} }, gewichte:[[1,0,0],[0,1,0],[0,0,1]] };
function teil(zl){ var a=LA.verlusteAuf(l0,zl), b=LA.verlusteAuf(lernstand,zl), v=LA.vergleich(zl,a,b), bb=LA.blockBootstrap(zl,a,b,ZIEH,START);
  function r(x){ return Math.round(x*1e5)/1e5; }
  return { spiele:zl.length, vorsprung:r(v.differenz), standardfehlerSpieltag:r(v.standardfehler), blockbootstrap:{ mittel:r(bb.mittel), bereich95:[r(bb.unten),r(bb.oben)], pEinseitig:Math.round(bb.p*1e4)/1e4, wochenBloecke:bb.bloecke, ziehungen:ZIEH } }; }
var frei=LL.holdoutFreigabe(vers, 'aufst-holdout-2', lernstand.pruefsumme);
var bericht={ schema:1, stichtag:ST, gruppen:m.gewaehlt, lernstand:m.lernstand.name, pruefsumme:lernstand.pruefsumme, versuchteIdeen:LL.anzahlIdeen(hier), huerdeAuswahl:LL.HUERDE,
  A_entwicklung:Object.assign({ was:'Pruefsaisons, Spiele mit Aufstellungsdaten; nach Sichtung gewaehlt, Auswahl-Optimismus moeglich' }, teil(pruefen)),
  B_retrospektiv:!frei.ok ? { was:'Holdout NICHT neu gerechnet', stand:frei.grund+'. Es gilt der protokollierte Blick in versiegelt.json; ein neuer Blick waere ein weiterer Test auf schon gesehenen Spielen.' } : Object.assign({ was:'Holdout-Saisons, Spiele mit Aufstellungsdaten; zwei Blicke auf dieselbe Saison (Pipeline v1 und v2, beide in versiegelt.json), Experiment a: Aufstellung als bekannt vorausgesetzt' }, teil(holdout)),
  C_prospektiv:{ was:'handelbare Vorab-Validierung', stand:'OFFEN - keine fuer ONDO verifizierte, legale, kostenlose Quelle mit Zeitstempel; keine Aussage' },
  grenzen:'Kein Vergleich mit dem Markt auf diesen Spielen (keine Quoten fuer die Zeitraeume). Kein Anspruch auf Wettvorteil.' };
fs.writeFileSync(path.join(hier,'generated','lagen_bericht.json'), JSON.stringify(bericht,null,1)+'\n');
console.log(JSON.stringify({ A:bericht.A_entwicklung, B:bericht.B_retrospektiv, freigabe:frei }));
