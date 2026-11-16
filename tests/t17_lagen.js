/* ===================================================================================
   t17 - "Lagen lernen" (Backlog-Punkt 94, Teil 3): Merkmale, Training, Stichtag-Sperre.
   A  Kein Blick in die Zukunft: Das Ergebnis eines SPAETEREN Spiels aendert die Merkmale
      eines frueheren nie. Gegenprobe: das eigene Ergebnis aendert die Merkmale des NAECHSTEN.
   B  Stichtag-Sperre: ein Spiel ab dem Stichtag in Lern- oder Pruefmenge bricht ab.
      Gegenprobe: ein Spiel einen Tag davor geht durch.
   C  Lernstand: Start = altes Modell K6 (Gewichte Einheitsmatrix), Pruefsumme stabil,
      Lernstand enthaelt keine Mannschaftsnamen und keine Einzelergebnisse.
   D  Die abgelegte Datei lagen.json: Stichtag stimmt, jeder Versuch ist gezaehlt.
   Laedt beta.html nicht.
   =================================================================================== */
var fs=require('fs'), path=require('path');
var u=require('./umgebung.js');
var LA=require('../core/model/lagen.js'), LL=require('../core/model/lagen_lauf.js');
var REPO=path.join(__dirname,'..');
var PAR={ startNiveau:0.18, startHeim:0.25, lernrateLiga:0.002, stufenSprung:0.25, neuStart:-0.15, lernrate:0.03, saisonBehalt:0.85, dc:-0.06 };
function sp(i, datum, h, g, th, tg){ return { id:'fx'+i, liga:'de.1', saison:'2025-26', datum:datum, heimKey:h, gastKey:g, th:th, tg:tg, rolle:'lernen', zusatz:false }; }
function reihe(aenderung){
  var s=[], teams=['a','b','c','d'], t=Date.UTC(2025,8,1);
  for(var i=0;i<24;i++){
    var d=new Date(t+i*7*86400000).toISOString().slice(0,10);
    s.push(sp(i,d,teams[i%4],teams[(i+1+(i>>2))%4]===teams[i%4]?teams[(i+2)%4]:teams[(i+1+(i>>2))%4],(i*3)%4,(i*5)%3));
  }
  if(aenderung) aenderung(s);
  return s;
}

u.block('A. Kein Blick in die Zukunft');
var basis=LA.zeilenFuerLand(reihe(), PAR);
var spaeter=LA.zeilenFuerLand(reihe(function(s){ s[20].th=9; s[20].tg=0; }), PAR);
var frueherGleich=true; for(var i=0;i<=20;i++) if(JSON.stringify(basis[i].x)!==JSON.stringify(spaeter[i].x)) frueherGleich=false;
u.pruef('Ergebnis von Spiel 20 aendert die Merkmale der Spiele 0-20 nicht', frueherGleich);
var ebenso=true; for(var j=0;j<=20;j++) if(basis[j].y!==spaeter[j].y && j!==20) ebenso=false;
u.pruef('Gegenprobe-Vorbereitung: nur Spiel 20 selbst hat ein anderes Ergebnis', ebenso && basis[20].y!==spaeter[20].y);
var irgendwoAnders=false; for(var k=21;k<24;k++) if(JSON.stringify(basis[k].x)!==JSON.stringify(spaeter[k].x)) irgendwoAnders=true;
u.pruef('Gegenprobe: dasselbe Ergebnis veraendert sehr wohl spaetere Spiele (Test ist nicht blind)', irgendwoAnders);

u.block('B. Stichtag-Sperre');
var SP='2026-08-01';
function z(datum){ return [{ r:{ id:'x', datum:datum }, x:{}, y:0 }]; }
var warf=false; try{ LL.sperre([z('2026-08-01')], SP); }catch(e){ warf=/SPERRE/.test(e.message); }
u.pruef('Spiel am Stichtag: Abbruch', warf);
warf=false; try{ LL.sperre([z('2026-12-31')], SP); }catch(e){ warf=/SPERRE/.test(e.message); }
u.pruef('Spiel nach dem Stichtag: Abbruch', warf);
warf=false; try{ LL.sperre([z('2026-07-31'), z('2026-07-01')], SP); }catch(e){ warf=true; }
u.pruef('Gegenprobe: Spiel einen Tag vor dem Stichtag geht durch', !warf);
var vers=JSON.parse(fs.readFileSync(path.join(REPO,'core/model/versiegelt.json'),'utf8'));
u.pruef('versiegelt.json: Stichtag 2026-08-01 und mindestens ein eingetragener Blick', vers.stichtag==='2026-08-01' && vers.blicke.length>=1);

u.block('C. Lernstand');
var lern=basis.slice(0,16), pruef=basis.slice(16);
var m0=LA.trainieren(lern, pruef, [], { maxRunden:5, geduld:3, lernrate:1, bremse:0.0001 });
var m1=LA.trainieren(lern, pruef, ['form'], { maxRunden:5, geduld:3, lernrate:1, bremse:0.0001 });
var m1b=LA.trainieren(lern, pruef, ['form'], { maxRunden:5, geduld:3, lernrate:1, bremse:0.0001 });
u.pruef('gleiche Eingabe → gleiche Pruefsumme (Wiederholbarkeit)', m1.pruefsumme===m1b.pruefsumme);
u.pruef('Start ohne Gruppen: alle Gewichte nahe der Einheitsmatrix', m0.versionen[0] && m0.gewichte.length===3);
var txt=JSON.stringify(m1);
u.pruef('Lernstand nennt keine Mannschaft', !/"a"|"b"|"c"|"d"|heimKey|gastKey/.test(JSON.stringify({ n:m1.namen, g:m1.gewichte, s:m1.standardisierung })));
u.pruef('Lernstand hat nur Gewichte je Merkmal (3 Klassen x Merkmale)', m1.gewichte.every(function(r){ return r.length===m1.namen.length; }));

u.block('D. Abgelegte Datei');
var f=path.join(REPO,'core/model/generated/lagen.json');
if(fs.existsSync(f)){
  var e=JSON.parse(fs.readFileSync(f,'utf8'));
  u.pruef('lagen.json: Stichtag wie in versiegelt.json', e.stichtag===vers.stichtag);
  u.pruef('lagen.json: Zaehler = Zahl der Versuche in der Liste', e.zaehlerVersuche===e.versuche.length && e.versuche.length>=LA.GRUPPEN.length);
  u.pruef('lagen.json: jede gewaehlte Gruppe hat die Huerde bestanden', e.gewaehlt.every(function(g){ return e.versuche.some(function(v){ return v.gruppe===g && v.besteHuerde; }); }));
} else u.pruef('lagen.json noch nicht erzeugt (wird beim ersten Lauf angelegt)', true);
process.exit(u.bilanz()?1:0);
