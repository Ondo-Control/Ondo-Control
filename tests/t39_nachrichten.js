/* Nachrichtenlage (Idee 20) und alle Buchmacher (Idee 21), 27.11.2026.
   Gegenproben: Spieltag selbst zaehlt nicht, nur eine Seite bekannt = 0, zu frueh in der Reihe = 0, Pinnacle und Boersen nicht im Konsens. */
var fs=require('fs'), u=require('./umgebung.js'), NA=require('../core/model/nachrichten_merkmale.js'), NH=require('../core/data/nachrichten_holen.js'), W=require('../core/model/wert_messung.js'), LA=require('../core/model/lagen.js');
function tag(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }

u.block('Suchbegriffe (keine Personen)');
u.pruef('Bayern: deutsch und englisch', NH.suchbegriff('FC Bayern München')==='("Bayern München" OR "Bayern Munich" OR "Bayern Munchen") (football OR soccer)');
u.pruef('Gegenprobe: zweite Mannschaft wird nicht gesucht', NH.suchbegriff('VfB Stuttgart II')===null);
u.pruef('Zeitreihe GDELT -> Tage', JSON.stringify(NH.reihe({ timeline:[{ data:[{ date:'20240105T000000Z', value:3 },{ date:'20240106T000000Z', value:0 }] }] }))==='{"2024-01-05":3,"2024-01-06":0}');

u.block('Merkmale (Handrechnung)');
var d='2024-03-01', a={ tage:{} }, b={ tage:{} };
for(var i=8;i<=63;i++){ a.tage[tag(d,-i)]=[2,0,0]; b.tage[tag(d,-i)]=[2,0,0]; }
a.tage[tag(d,-2)]=[20,-5,6]; a.tage[d]=[100,-9,50]; b.tage[tag(d,-3)]=[2,1,0];
var L=NA.lage(a,d);
u.pruef('Ton: -5/5 = -1 (nur Tage davor)', Math.abs(L.ton+1)<1e-9);
u.pruef('Spitze: ln(21/(1+112/8))', Math.abs(L.spitze-Math.log(21/(1+112/8)))<1e-9);
u.pruef('Unruhe: ln(7/1)', Math.abs(L.unruhe-Math.log(7))<1e-9);
u.pruef('Gegenprobe: Artikel am Spieltag selbst zaehlen nicht', NA.lage({ tage:(function(){ var t={}; t[d]=[100,-9,50]; return t; })() }, d).spitze===0);
var m=NA.merkmale({ x:a, y:b }, 'x', 'y', d);
u.pruef('Heim minus Gast', Math.abs(m.dNaTon-(-1-0.2))<1e-9);
u.pruef('Gegenprobe: nur eine Seite bekannt -> 0', NA.merkmale({ x:a }, 'x', 'y', d).dNaTon===0);
u.pruef('Gegenprobe: vor 9 Wochen nach Reihenbeginn -> 0', NA.lage(a,'2017-02-01')===null);
u.pruef('Gruppe nachrichten in GRUPPEN, drei Merkmale', LA.GRUPPEN.indexOf('nachrichten')>=0 && LA.MERKMALE.nachrichten.length===3);

u.block('Alle Buchmacher');
function bm(k,h,dr,g){ return { key:k, markets:[{ key:'h2h', outcomes:[{ name:'A', price:h },{ name:'Draw', price:dr },{ name:'B', price:g }] }] }; }
var ev={ home_team:'A', away_team:'B', bookmakers:[ bm('pinnacle',2,3.5,4), bm('tipico_de',1.9,3.4,4.2), bm('unibet_eu',2.1,3.3,3.8), bm('betfair_ex_eu',2.2,3.6,4.4) ] };
var ab=W.alleBuchmacher(ev);
u.pruef('Konsens aus 2 Buchmachern (ohne Pinnacle und Boerse), Summe 1', ab.anzahl===2 && Math.abs(ab.konsens[0]+ab.konsens[1]+ab.konsens[2]-1)<1e-9);
u.pruef('beste Quote alle (Boerse inkl.) und in Deutschland (nur tipico_de)', ab.beste[0]===2.2 && ab.besteDe[2]===4.2 && ab.besteDe[0]===1.9);
var i20=JSON.parse(fs.readFileSync(__dirname+'/../core/model/ideen.json','utf8')).ideen.filter(function(x){ return x.nr===20||x.nr===21; });
u.pruef('Ideen 20 und 21 vorab eingetragen', i20.length===2 && i20.every(function(x){ return x.versuche===x.namen.length; }));
process.exit(u.bilanz()?1:0);
