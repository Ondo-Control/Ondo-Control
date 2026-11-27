/* Trainerwechsel (Idee 19, 27.11.2026): Zuordnung aus Wikidata, Amtszeit am Spieltag, Merkmale (Handrechnung), neutral ohne Daten.
   Gegenproben: mehrdeutiger Verein wird nicht zugeordnet, Amtszeit ohne Beginn zaehlt nicht, nur eine Seite bekannt = 0, kein Spiel faellt weg. */
var fs=require('fs'), u=require('./umgebung.js'), T=require('../core/data/trainer_bauen.js'), LA=require('../core/model/lagen.js');
function b(id,lab,coach,s,e){ var o={ c:{ value:id }, lab:{ value:lab }, coach:{ value:coach } }; if(s) o.start={ value:s+'T00:00:00Z' }; if(e) o.end={ value:e+'T00:00:00Z' }; return o; }

u.block('Zuordnung und Amtszeit');
var bind={ de:[ b('Q1','Team A','C1','2020-07-01','2024-08-20'), b('Q1','Team A','C2','2024-08-21',null), b('Q2','Team B','C3','2019-01-01',null), b('Q2','Team B','C4',null,null),
  b('Q3','Team X','C5','2020-01-01',null), b('Q4','Team X','C6','2021-01-01',null) ] };
var e=T.bauen(bind, [{ land:'de', name:'Team A', key:'ateam' }, { land:'de', name:'Team B', key:'bteam' }, { land:'de', name:'Team X', key:'xteam' }]);
u.pruef('Team A: zwei Amtszeiten, nach Beginn sortiert', e.teams.ateam.length===2 && e.teams.ateam[1][0]==='2024-08-21' && e.teams.ateam[1][1]===null);
u.pruef('Gegenprobe: Amtszeit ohne Beginn verworfen', e.teams.bteam.length===1);
u.pruef('Gegenprobe: zwei Vereine mit gleichem Namen -> nicht zugeordnet', !e.teams.xteam && e.nichtZugeordnet.indexOf('de: Team X')>=0);
u.pruef('Amtszeit am Tag: Wechsel am 21.08.2024', T.amtszeit(e.teams.ateam,'2024-08-20')[0]==='2020-07-01' && T.amtszeit(e.teams.ateam,'2024-08-21')[0]==='2024-08-21');
u.pruef('Gegenprobe: vor der ersten Amtszeit unbekannt', T.amtszeit(e.teams.ateam,'2019-05-01')===null);

u.block('Merkmale (Handrechnung)');
var par=JSON.parse(fs.readFileSync(__dirname+'/../core/model/generated/modell.json','utf8')).parameter;
function sp(h,g,d){ return { liga:'de.1', saison:'2024-25', datum:d, heimKey:h, gastKey:g, heim:h, gast:g, th:1, tg:0, rolle:'lernen' }; }
var z=LA.zeilenFuerLand([sp('ateam','bteam','2024-09-01')], par, null, null, null, null, e.teams)[0];
u.pruef('Heim neuer Trainer (11 Tage), Gast nicht: dTrNeu = 1', z.x.dTrNeu===1);
u.pruef('Amtsdauer: (ln 12 - ln(1+2070))/7', Math.abs(z.x.dTrDauer-(Math.log(12)-Math.log(1+2070))/7)<1e-9);
var z2=LA.zeilenFuerLand([sp('ateam','cteam','2024-09-01')], par, null, null, null, null, e.teams)[0];
u.pruef('Gegenprobe: nur eine Seite bekannt -> beide Merkmale 0', z2.x.dTrNeu===0 && z2.x.dTrDauer===0);
var z3=LA.zeilenFuerLand([sp('ateam','bteam','2024-09-01')], par, null, null, null, null, null)[0];
u.pruef('ohne trainer.json: 0, Basis unveraendert', z3.x.dTrNeu===0 && z3.x.dTrDauer===0 && z3.x.lnH===z.x.lnH);
u.pruef('Gruppe trainer steht in GRUPPEN (gilt fuer alle Spiele)', LA.GRUPPEN.indexOf('trainer')>=0 && LA.MERKMALE.trainer.length===2);

u.block('Daten und Zaehler');
var tj=JSON.parse(fs.readFileSync(__dirname+'/../core/data/generated/trainer.json','utf8'));
u.pruef('trainer.json: Quelle Wikidata, mehr als 300 Mannschaften', /Wikidata/.test(tj.quelle) && tj.zugeordnet>300);
var i19=JSON.parse(fs.readFileSync(__dirname+'/../core/model/ideen.json','utf8')).ideen.filter(function(i){ return i.nr===19; })[0];
u.pruef('Idee 19 vorab eingetragen', !!i19 && i19.namen.indexOf('L-v9-alle-trainer')>=0 && i19.versuche===i19.namen.length);
process.exit(u.bilanz()?1:0);
