/* Motivation: Tabelle nur aus Spielen VOR dem Spiel; Naehe zu Titel/Abstieg stimmt auf einem kleinen Beispiel; Zukunft aendert nichts. */
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js');
var par=JSON.parse(require('fs').readFileSync(__dirname+'/../core/model/generated/modell.json','utf8')).parameter;
function liga(ergebnisAm){
  var teams=['a','b','c','d','e','f','g','h','i','j'], sp=[], d=0;
  for(var runde=0;runde<12;runde++) for(var i=0;i<teams.length;i+=2){
    var h=teams[(i+runde)%10], g=teams[(i+1+runde*3)%10]; if(h===g) continue;
    d++; var th=(h<g)?2:0, tg=(h<g)?0:1;                         /* alphabetisch kleinere Mannschaft gewinnt zuhause */
    if(d>=ergebnisAm){ th=9; tg=0; }
    sp.push({ liga:'de.1', saison:'2025-26', datum:'2025-'+(8+Math.floor(d/28))+'-'+(1+(d%28)<10?'0':'')+(1+(d%28)), heimKey:h, gastKey:g, th:th, tg:tg, rolle:'lernen' });
  } return sp;
}
function z(sp){ return LA.zeilenFuerLand(sp.map(function(r){ var o={}; Object.keys(r).forEach(function(k){ o[k]=r[k]; }); o.heim=r.heimKey; o.gast=r.gastKey; return o; }), par, null); }
u.block('Gruppe vorhanden');
u.pruef('Gruppe motiv ist waehlbar', LA.GRUPPEN.indexOf('motiv')>=0 && LA.MERKMALE.motiv.length===3);
var a=z(liga(1e9)), b=z(liga(40));
u.pruef('Merkmale liegen in [-1,1] und sind endlich', a.every(function(r){ return ['dTitel','dEuropa','dAbstieg'].every(function(k){ return isFinite(r.x[k]) && Math.abs(r.x[k])<=1; }); }));
u.pruef('Gegenprobe: Ergebnisse ab Spiel 40 aendern die Merkmale der Spiele bis 40 NICHT', a.slice(0,38).every(function(r,i){ return r.x.dTitel===b[i].x.dTitel && r.x.dAbstieg===b[i].x.dAbstieg && r.x.dEuropa===b[i].x.dEuropa; }));
u.pruef('es gibt Spiele mit Unterschied (Merkmal ist nicht konstant 0)', a.some(function(r){ return r.x.dTitel!==0 || r.x.dAbstieg!==0; }));
process.exit(u.bilanz()?1:0);
