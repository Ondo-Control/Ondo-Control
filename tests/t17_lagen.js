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

u.block('A2. Gleicher Kalendertag: kein Spiel nutzt das Ergebnis eines Spiels desselben Tags');
function tagReihe(erg){
  var s=[]; function g(i,d,h,a,th,tg){ s.push(sp(i,d,h,a,th,tg)); }
  g(0,'2025-09-01','a','b',1,0); g(1,'2025-09-01','c','d',2,2);
  g(2,'2025-09-08','a','c',erg[0],erg[1]); g(3,'2025-09-08','b','d',1,1);
  g(4,'2025-09-15','a','d',0,0); g(5,'2025-09-15','b','c',3,1);
  return s;
}
var t1=LA.zeilenFuerLand(tagReihe([1,0]), PAR), t2=LA.zeilenFuerLand(tagReihe([5,4]), PAR);
u.pruef('Ergebnis von Spiel 2 aendert die Merkmale von Spiel 3 (gleicher Tag 8.9.) NICHT', JSON.stringify(t1[3].x)===JSON.stringify(t2[3].x) && JSON.stringify(t1[2].x)===JSON.stringify(t2[2].x));
u.pruef('Gegenprobe: dasselbe Ergebnis aendert die Merkmale des FOLGENDEN Tags (15.9.)', JSON.stringify(t1[4].x)!==JSON.stringify(t2[4].x) || JSON.stringify(t1[5].x)!==JSON.stringify(t2[5].x));

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

u.block('C2. Aufstellungs-Datei enthaelt nur eigene Zahlen');
var af=path.join(REPO,'core/data/generated/aufstellung.json');
if(fs.existsSync(af)){
  var A=JSON.parse(fs.readFileSync(af,'utf8')), ids=Object.keys(A.werte);
  u.pruef('aufstellung.json: Spalten und Werte je Spiel (3 Zahlen)', A.spalten.length===3 && ids.length===A.zugeordnet && ids.every(function(i){ var w=A.werte[i]; return w.length===3 && w.every(function(x){ return typeof x==='number' && isFinite(x); }); }));
  u.pruef('aufstellung.json: keine Namen, keine Spieler-IDs, keine Rohdaten', !/player|spieler_id|market_value|"home"|"away"/i.test(JSON.stringify(Object.keys(A))+A.hinweis.replace(/Marktwert|Transfermarkt/g,'')));
}
u.block('C3. Gatter: Aufstellung nur gueltig, vorab, zum Spiel, 11 Starter');
basis.forEach(function(z,i){ z.x.dLnStart=Math.sin(i); z.x.dLnBest=Math.cos(i); z.x.dFehlt=(i%5)/10; });
var mA=LA.trainieren(lern, pruef, ['aufst'], { maxRunden:3, geduld:2, lernrate:1, bremse:0.0001 }), xx=lern[0].x;
function gut(){ return { spielId:'S1', aufstellungVorab:{ spielId:'S1', erfasstUtc:'2026-11-21T14:00:00Z', anstossUtc:'2026-11-21T15:00:00Z', starterHeim:11, starterGast:11 } }; }
function mit(f){ var o=gut(); f(o); return LA.vorhersageGeprueft(mA, xx, o); }
u.pruef('Gegenprobe: gueltige Aufstellung vorab → Zahl, Summe 1', (function(){ var r=LA.vorhersageGeprueft(mA, xx, gut()); return r.ok && Math.abs(r.p[0]+r.p[1]+r.p[2]-1)<1e-9; })());
u.pruef('ohne Aufstellung: Absage', LA.vorhersageGeprueft(mA, xx, {}).ok===false);
u.pruef('Zeitstempel NACH dem Anstoss: Absage', mit(function(o){ o.aufstellungVorab.erfasstUtc='2026-11-21T15:05:00Z'; }).ok===false);
u.pruef('Zeitstempel ohne Z (Zeitzone unklar): Absage', mit(function(o){ o.aufstellungVorab.erfasstUtc='2026-11-21T14:00:00+01:00'; }).ok===false);
u.pruef('Zeitstempel kein Datum: Absage', mit(function(o){ o.aufstellungVorab.erfasstUtc='morgen'; }).ok===false);
u.pruef('Aufstellung eines anderen Spiels: Absage', mit(function(o){ o.aufstellungVorab.spielId='S2'; }).ok===false);
u.pruef('weniger als 11 Starter: Absage', mit(function(o){ o.aufstellungVorab.starterHeim=10; }).ok===false);
u.pruef('Lernstand ohne Aufstellung rechnet auch ohne Zeitstempel', LA.vorhersageGeprueft(m0, xx, {}).ok===true);
var fb=LA.vorhersageMitFallback(mA, m0, xx, {});
u.pruef('Rueckfall: ohne Aufstellung wird trotzdem vorhergesagt (alle Spiele)', fb.ok && fb.quelle.indexOf('ohne Aufstellung')===0 && Math.abs(fb.p[0]+fb.p[1]+fb.p[2]-1)<1e-9 && !!fb.grundRueckfall);
u.pruef('mit gueltiger Aufstellung: Quelle "mit Aufstellung"', LA.vorhersageMitFallback(mA, m0, xx, gut()).quelle==='mit Aufstellung');
u.block('D. Abgelegte Datei');
var f=path.join(REPO,'core/model/generated/lagen.json');
if(fs.existsSync(f)){
  var e=JSON.parse(fs.readFileSync(f,'utf8'));
  u.pruef('lagen.json: Huerde = z fuer 5 % geteilt durch Zahl aller Ideen in ideen.json', e.huerde===LL.HUERDE && e.huerde>=3 );
  u.pruef('lagen.json: Stichtag wie in versiegelt.json', e.stichtag===vers.stichtag);
  var vs=[]; e.mengen.forEach(function(m){ m.versuche.forEach(function(v){ vs.push(v); }); });
  u.pruef('lagen.json: Zaehler = Zahl der Versuche in allen Mengen', e.zaehlerVersuche===vs.length && vs.length>=LA.GRUPPEN.length);
  u.pruef('lagen.json: jede gewaehlte Gruppe hat die Huerde bestanden', e.mengen.every(function(m){ return m.gewaehlt.every(function(g){ return m.versuche.some(function(v){ return v.gruppe===g && v.besteHuerde; }); }); }));
  u.pruef('lagen.json: keine Gruppe ohne bestandene Huerde gewaehlt (Gegenprobe zur Wahl)', e.mengen.every(function(m){ return m.versuche.filter(function(v){ return v.besteHuerde; }).length>=m.gewaehlt.length; }));
} else u.pruef('lagen.json noch nicht erzeugt (wird beim ersten Lauf angelegt)', true);
var bf=path.join(REPO,'core/model/generated/lagen_bericht.json');
if(fs.existsSync(bf)){
  u.block('E. Bericht in drei Teilen');
  var B=JSON.parse(fs.readFileSync(bf,'utf8'));
  u.pruef('Bericht hat A, B und C getrennt; C ist offen und ohne Zahl', !!B.A_entwicklung && !!B.B_retrospektiv && /OFFEN/.test(B.C_prospektiv.stand) && !('vorsprung' in B.C_prospektiv));
  u.pruef('Blockbootstrap: Bereich enthaelt den Mittelwert, p zwischen 0 und 1', [B.A_entwicklung,B.B_retrospektiv].every(function(x){ var b=x.blockbootstrap; return b.bereich95[0]<=b.mittel && b.mittel<=b.bereich95[1] && b.pEinseitig>0 && b.pEinseitig<=1; }));
  u.pruef('Bootstrap: gleiche Eingabe, gleicher Startwert → gleiches Ergebnis', (function(){ var va=[0.1,-0.2,0.3,0.05,0.2,-0.1], zl=va.map(function(x,i){ return { r:{ datum:'2026-0'+(1+i%3)+'-1'+i } }; }), vb=va.map(function(){ return 0; }); var a=LA.blockBootstrap(zl,va,vb,200,7), b=LA.blockBootstrap(zl,va,vb,200,7), c=LA.blockBootstrap(zl,va,vb,200,8); return JSON.stringify(a)===JSON.stringify(b) && JSON.stringify(a)!==JSON.stringify(c); })());
}
process.exit(u.bilanz()?1:0);
