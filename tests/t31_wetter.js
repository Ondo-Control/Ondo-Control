/* Wetter: Werte nur vom Spieltag am Heimstadion, unbekannt = 0, Fehlwerte (-999) zaehlen nicht, Zuordnung ueber Gitterzelle. */
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js'), W=require('../core/data/wetter_bauen.js');
var par=JSON.parse(require('fs').readFileSync(__dirname+'/../core/model/generated/modell.json','utf8')).parameter;
u.block('Rechenteil');
u.pruef('Gitterzelle: gleiche Stadt -> gleiche Zelle, weit entfernt -> andere', W.zelle(48.21,11.62)===W.zelle(48.15,11.70) && W.zelle(48.21,11.62)!==W.zelle(53.58,9.90));
var ser={ PRECTOTCORR:{'20250801':12.34,'20250802':-999}, T2M_MAX:{'20250801':21.06,'20250802':20}, WS10M_MAX:{'20250801':5.55,'20250802':4} };
u.pruef('Werte gerundet: [12.3, 21.1, 5.6]', JSON.stringify(W.werte(ser,'2025-08-01'))==='[12.3,21.1,5.6]');
u.pruef('Gegenprobe: Fehlwert -999 -> kein Wert', W.werte(ser,'2025-08-02')===null);
u.pruef('Gegenprobe: Tag fehlt -> kein Wert', W.werte(ser,'2025-08-03')===null);
var st={ a:{lat:48.21,lon:11.62}, b:{lat:53.58,lon:9.9} };
var e=W.bauen(st, { a:['2025-08-01','2025-08-02'], b:['2025-08-01'] }, (function(){ var o={}; o[W.zelle(48.21,11.62)]=ser; return o; })());
u.pruef('Zuordnung: a bekommt nur den Tag mit Wert, b (andere Zelle ohne Abruf) nichts', Object.keys(e.teams).join()==='a' && Object.keys(e.teams.a).join()==='2025-08-01' && e.mit===1 && e.ohne===2);
u.block('Merkmal');
function sp(h,g,d){ return { liga:'de.1', saison:'2025-26', datum:d, heimKey:h, gastKey:g, heim:h, gast:g, th:1, tg:0, rolle:'lernen' }; }
var w={ a:{ '2025-08-01':[12.3,21.1,5.6] } };
var z=LA.zeilenFuerLand([sp('a','b','2025-08-01'), sp('b','a','2025-08-08')], par, null, null, w);
u.pruef('Heimspiel von a am 1.8.: regen 1,23, wind 0,56, temp 0,61', Math.abs(z[0].x.regen-1.23)<1e-9 && Math.abs(z[0].x.wind-0.56)<1e-9 && Math.abs(z[0].x.temp-0.61)<1e-9);
u.pruef('Gegenprobe: Heimspiel von b (kein Wetter, Wetter von a gilt nicht fuer Auswaertsspiel) -> 0', z[1].x.regen===0 && z[1].x.wind===0 && z[1].x.temp===0);
u.pruef('Gegenprobe: ohne Wetterdatei -> 0', LA.zeilenFuerLand([sp('a','b','2025-08-01')], par, null, null, null)[0].x.regen===0);
u.pruef('Gruppe wetter ist waehlbar (3 Merkmale)', LA.GRUPPEN.indexOf('wetter')>=0 && LA.MERKMALE.wetter.length===3);
process.exit(u.bilanz()?1:0);
