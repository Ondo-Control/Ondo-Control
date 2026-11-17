/* Messung Tipico gegen Pinnacle: Aufnahme nur vor Anstoss und nur mit beiden Buchmachern, Auswertung mit Handrechnung, Gegenproben. */
var u=require('./umgebung.js'), W=require('../core/model/wert_messung.js');
function ev(id, anst, pin, tip){ return { id:id, commence_time:anst, home_team:'A', away_team:'B', bookmakers:[
  { key:'pinnacle', markets:[{ key:'h2h', outcomes:[{name:'A',price:pin[0]},{name:'Draw',price:pin[1]},{name:'B',price:pin[2]}] }] },
  { key:'tipico_de', markets:[{ key:'h2h', outcomes:[{name:'A',price:tip[0]},{name:'Draw',price:tip[1]},{name:'B',price:tip[2]}] }] } ] }; }
var zu=function(){ return { land:'de', heimKey:'a', gastKey:'b' }; };
u.block('Aufnahme');
var roh1={ 'de.1':{ abgerufenUtc:'2026-11-17T06:00:00Z', ereignisse:[ ev('e1','2026-11-20T19:30:00Z',[2.0,3.6,4.2],[2.3,3.4,3.6]) ] } };
var roh2={ 'de.1':{ abgerufenUtc:'2026-11-20T17:00:00Z', ereignisse:[ ev('e1','2026-11-20T19:30:00Z',[2.1,3.5,3.8],[2.3,3.4,3.6]) ] } };
var a=W.aufnehmen(null, roh1, zu); a=W.aufnehmen(a, roh2, zu);
u.pruef('zwei Abrufe desselben Spiels liegen unter einer Spiel-ID', Object.keys(a.ereignisse).length===1 && a.ereignisse.e1.abrufe.length===2);
u.pruef('derselbe Abruf zweimal wird nicht doppelt aufgenommen', W.aufnehmen(a, roh2, zu).ereignisse.e1.abrufe.length===2);
u.pruef('Gegenprobe: Abruf NACH Anstoss wird nicht aufgenommen', Object.keys(W.aufnehmen(null,{ 'de.1':{ abgerufenUtc:'2026-11-20T21:00:00Z', ereignisse:[ev('e2','2026-11-20T19:30:00Z',[2,3.6,4],[2,3.6,4])] } },zu).ereignisse).length===0);
u.pruef('Gegenprobe: ohne Tipico-Quote keine Aufnahme', (function(){ var e=ev('e3','2026-11-20T19:30:00Z',[2,3.6,4],[2,3.6,4]); e.bookmakers.pop(); return Object.keys(W.aufnehmen(null,{ 'de.1':{ abgerufenUtc:'2026-11-17T06:00:00Z', ereignisse:[e] } },zu).ereignisse).length===0; })());
u.pruef('Gegenprobe: Zeitstempel ohne Z wird abgelehnt', Object.keys(W.aufnehmen(null,{ 'de.1':{ abgerufenUtc:'2026-11-17 06:00:00', ereignisse:[ev('e4','2026-11-20T19:30:00Z',[2,3.6,4],[2,3.6,4])] } },zu).ereignisse).length===0);
u.block('Auswertung (Handrechnung)');
/* letzter Abruf: Pinnacle 2.1/3.5/3.8 -> Summe 1/q = 0.47619+0.28571+0.26316=1.02506; fair Heim = 0.46454. Tipico Heim 2.3 -> Wert 1.0684 */
var f=W.fair([2.1,3.5,3.8]); u.pruef('fairer Anteil Heim = 0,4645', Math.abs(f[0]-0.46454)<1e-4);
var r=W.auswerten(a, function(){ return 0; });
var s103=r.schwellen.filter(function(x){ return x.schwelle===1.03; })[0], s105=r.schwellen.filter(function(x){ return x.schwelle===1.05; })[0];
u.pruef('Wert 1,068 >= 1,05: eine Wette, Heimsieg trifft, Gewinn 2,3-1 = 1,3', s105.wetten===1 && s105.treffer===1 && Math.abs(s105.gewinnJeEinsatz-1.3)<1e-9);
var r2=W.auswerten(a, function(){ return 2; });
u.pruef('Gegenprobe: bei Gastsieg verliert die Wette (-1)', r2.schwellen.filter(function(x){ return x.schwelle===1.05; })[0].gewinnJeEinsatz===-1);
u.pruef('ohne Ergebnis wird nichts gewertet', W.auswerten(a, function(){ return null; }).schwellen.every(function(x){ return x.wetten===0; }));
u.pruef('wenige Wetten: "noch keine Aussage"', s105.aussage==='noch keine Aussage');
/* CLV: erster Abruf Pinnacle 2.0/3.6/4.2 -> fair Heim = 0.5/(0.5+0.27778+0.2381)=0.49219; Tipico 2.3 -> Wert 1.132 >= 1.03; letzter fair 0.46454 -> -5.6 % */
u.pruef('CLV: die Profis haben sich hier GEGEN die Wette bewegt (negativ)', r.clv.wetten===1 && r.clv.mittel<0);
u.pruef('Bericht enthaelt keine einzelne Quote', !/"tipico"|"pinnacle"|2\.3/.test(JSON.stringify(r)));
process.exit(u.bilanz()?1:0);
