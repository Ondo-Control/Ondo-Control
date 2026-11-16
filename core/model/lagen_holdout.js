/* ===================================================================================
   ONDO CORE - Einmal-Blick auf die Holdout-Saisons fuer "Lagen lernen" (Backlog-Punkt 94).
   Voraussetzung laut versiegelt.json (vorabfestlegung): Lernstand und Wahl stehen, Commit eingefroren.
   Misst K6 gegen den gewaehlten Lernstand auf IDENTISCHEN Holdout-Spielen mit Aufstellungsdaten.
   Laeuft hoechstens EINMAL je Eintrag 'gehoert_zu': der Blick wird in versiegelt.json eingetragen,
   ein zweiter Lauf bricht ab. Nur sekundaerer, rueckblickender Test (Experiment a).
   Aufruf: node core/model/lagen_holdout.js
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('./lauf.js'), LA=require('./lagen.js'), LL=require('./lagen_lauf.js');
var KENNUNG='aufst-holdout-2';   /* Pipeline v2; der Blick 1 (Pipeline v1) steht in versiegelt.json */
var hier=__dirname;
var vpfad=path.join(hier,'versiegelt.json'), vers=JSON.parse(fs.readFileSync(vpfad,'utf8'));
if(vers.blicke.some(function(b){ return b.gehoert_zu===KENNUNG; })){ console.error('ABBRUCH: Dieser Blick ist schon eingetragen ('+KENNUNG+'). Ein zweiter Blick waere ein neuer Test.'); process.exit(3); }
var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
var modell=JSON.parse(fs.readFileSync(path.join(hier,'generated','modell.json'),'utf8'));
var aufst=JSON.parse(fs.readFileSync(path.join(hier,'..','data','generated','aufstellung.json'),'utf8'));
var lagen=JSON.parse(fs.readFileSync(path.join(hier,'generated','lagen.json'),'utf8'));
var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), aliases);
var zeilen=LA.zeilenBauen(bestand, modell.parameter, aufst), ST=vers.stichtag;
var lernen=zeilen.filter(function(z){ return z.mitAufst && z.r.rolle==='lernen' && !z.r.zusatz && z.r.datum<ST; });
var pruefen=zeilen.filter(function(z){ return z.mitAufst && z.r.rolle==='pruefen' && !z.r.zusatz && z.r.datum<ST; });
var holdout=zeilen.filter(function(z){ return z.mitAufst && z.r.rolle==='holdout' && !z.r.zusatz && z.r.datum<ST; });
var menge=lagen.mengen.filter(function(m){ return m.menge==='mitAufstellung'; })[0];
if(!menge || !menge.gewaehlt.length) throw new Error('Kein gewaehlter Lernstand fuer die Menge mitAufstellung.');
var sp=LL.teile(lernen), m=LA.trainieren(sp.training, sp.stopp, menge.gewaehlt, LL.TRAINING);
if(m.pruefsumme!==menge.lernstand.pruefsumme) throw new Error('Lernstand stimmt nicht mit lagen.json ueberein ('+m.pruefsumme+' gegen '+menge.lernstand.pruefsumme+') - Blick abgebrochen, nichts eingetragen.');
var l0={ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} }, gewichte:[[1,0,0],[0,1,0],[0,0,1]] };
var vK6=LA.verlusteAuf(l0, holdout), vNeu=LA.verlusteAuf(m, holdout), vgl=LA.vergleich(holdout, vK6, vNeu);
function avg(a){ var s=0; a.forEach(function(x){ s+=x; }); return s/a.length; }
var r={ spiele:holdout.length, spieltage:vgl.spieltage, logLossK6:+avg(vK6).toFixed(4), logLossNeu:+avg(vNeu).toFixed(4),
        vorsprung:+vgl.differenz.toFixed(5), standardfehler:+vgl.standardfehler.toFixed(5), z:+(vgl.differenz/vgl.standardfehler).toFixed(2), gruppen:menge.gewaehlt };
console.log(JSON.stringify(r));
vers.blicke.push({ wann:'2026-11-16', was:'Einmal-Blick Holdout-Saisons (Spiele mit Aufstellungsdaten), K6 gegen Lernstand mit '+menge.gewaehlt.join('+')+'. Pipeline v2, ZWEITER Blick auf dieselbe schon gesehene Holdout-Saison (nur Hinweis, nicht jungfraeulich). Sekundaerer rueckblickender Test (Experiment a), kein Markt-Anspruch. '+
  r.spiele+' Spiele, Log-Loss K6 '+r.logLossK6+' gegen '+r.logLossNeu+', Vorsprung '+r.vorsprung+' (SE '+r.standardfehler+', z '+r.z+').', gehoert_zu:KENNUNG, einfrierung:process.argv[2]||'Commit-Hash fehlt' });
fs.writeFileSync(vpfad, JSON.stringify(vers,null,1)+'\n');
console.log('Blick eingetragen.');
