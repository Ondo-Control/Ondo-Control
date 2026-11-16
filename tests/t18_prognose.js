/* Test Prognose je Spiel: Wahrscheinlichkeiten, Position, keine Zukunftsdaten, Rueckfall. */
var fs=require('fs'), path=require('path'), u=require('./umgebung.js');
var REPO=path.join(__dirname,'..'), PG=require('../core/model/prognose.js');
u.block('Prognose-Hilfsfunktionen');
u.pruef('haeufigste Torfolge bei 3.9 : 0.8 ist 3:0', PG.haeufigstes(3.9,0.8)==='3:0');
u.pruef('haeufigste Torfolge bei 1.2 : 1.2 ist 1:1', PG.haeufigstes(1.2,1.2)==='1:1');
var f=path.join(REPO,'core/model/generated/prognose.json');
if(fs.existsSync(f)){
  u.block('Abgelegte Prognose');
  var e=JSON.parse(fs.readFileSync(f,'utf8'));
  u.pruef('Hinweis nennt, dass das Modell schlechter als Pinnacle ist', /Pinnacle/.test(e.hinweis));
  u.pruef('Anzahl stimmt', e.anzahl===e.spiele.length);
  u.pruef('alle Spiele liegen im Fenster ab..bis', e.spiele.every(function(s){ return s.datum>=e.ab && s.datum<=e.bis; }));
  var mit=e.spiele.filter(function(s){ return s.prognose; });
  u.pruef('Prozentzahlen summieren sich auf 1', mit.every(function(s){ var p=s.prognose; return Math.abs(p.heimsieg+p.remis+p.auswaertssieg-1)<0.0035; }));
  u.pruef('Tipp ist die groesste Wahrscheinlichkeit', mit.every(function(s){ var p=s.prognose, m=Math.max(p.heimsieg,p.remis,p.auswaertssieg); return (s.tipp==='Heimsieg'?p.heimsieg:s.tipp==='Remis'?p.remis:p.auswaertssieg)===m; }));
  u.pruef('Position ist ueberall "keine Wette" (keine Quote-Anbindung)', e.spiele.every(function(s){ return s.position.empfehlung==='keine Wette'; }));
  u.pruef('ohne Aufstellungsquelle: Rueckfall vermerkt', mit.every(function(s){ return /Rueckfall/.test(s.modell.quelle); }));
} else u.pruef('prognose.json noch nicht erzeugt', true);
process.exit(u.bilanz()?1:0);
