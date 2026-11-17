/* Reise: Entfernung stimmt (Handrechnung), unbekanntes Stadion = 0, Zuordnung nur bei eindeutigem Treffer. */
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js'), S=require('../core/data/stadien_bauen.js');
u.block('Entfernung');
u.pruef('Muenchen (48.2188,11.6247) - Hamburg (53.5872,9.8986) ~ 612 km +-8', Math.abs(S.km({lat:48.2188,lon:11.6247},{lat:53.5872,lon:9.8986})-612)<8);
u.pruef('Gruppe reise ist waehlbar und hat ein Merkmal', LA.GRUPPEN.indexOf('reise')>=0 && LA.MERKMALE.reise.length===1);
function sp(h,g,d,th,tg){ return { liga:'de.1', saison:'2025-26', datum:d, heimKey:h, gastKey:g, heim:h, gast:g, th:th, tg:tg, rolle:'lernen' }; }
var par=JSON.parse(require('fs').readFileSync(__dirname+'/../core/model/generated/modell.json','utf8')).parameter;
var st={ a:{lat:48.2188,lon:11.6247,ele:null}, b:{lat:53.5872,lon:9.8986,ele:null} };
var z=LA.zeilenFuerLand([sp('a','b','2025-08-01',1,0), sp('a','c','2025-08-08',1,0)], par, null, st);
u.pruef('bekannte Stadien: reiseKm ~ 0,612', Math.abs(z[0].x.reiseKm-0.612)<0.008);
u.pruef('Gegenprobe: unbekanntes Stadion (c) -> 0', z[1].x.reiseKm===0);
u.pruef('Gegenprobe: ganz ohne Stadiendatei -> 0', LA.zeilenFuerLand([sp('a','b','2025-08-01',1,0)], par, null, null)[0].x.reiseKm===0);
u.block('Zuordnung');
function b(id,lab,lon,lat,ele){ return { c:{value:id}, lab:{value:lab}, coord:{value:'Point('+lon+' '+lat+')'}, v:{value:'v'+id}, ele:ele?{value:String(ele)}:undefined }; }
var e=S.bauen({ de:[ b('Q1','FC Beispiel',10,50), b('Q2','FC Beispiel',10.01,50.01), b('Q3','SV Zwei',9,51), b('Q4','SV Zwei',20,40) ] },
  [ {land:'de',name:'FC Beispiel',key:'k1'}, {land:'de',name:'SV Zwei',key:'k2'}, {land:'de',name:'Unbekannt',key:'k3'} ]);
u.pruef('zwei Eintraege desselben Vereins im selben Ort (< 3 km) werden zugeordnet', !!e.teams.k1);
u.pruef('Gegenprobe: zwei weit entfernte Treffer = mehrdeutig, NICHT zugeordnet', !e.teams.k2 && e.nichtZugeordnet.indexOf('de: SV Zwei')>=0);
u.pruef('Gegenprobe: ohne Treffer nicht zugeordnet', !e.teams.k3);
process.exit(u.bilanz()?1:0);
