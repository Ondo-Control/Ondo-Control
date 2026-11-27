/* Markt-Kombination (Idee 18, 27.11.2026): Margenabzug, Mischen, Zuordnung, laufende Messung, Kombi-Tipps.
   Gegenproben: ohne Quote bleibt der Core-Wert, vertauschte Mannschaften und Spiele vor dem Stichtag zaehlen nicht, Quote nach Anstoss wird verworfen. */
var fs=require('fs'), u=require('./umgebung.js'), M=require('../core/model/markt_kombi.js');
var regel=JSON.parse(fs.readFileSync(__dirname+'/../core/model/markt_regel.json','utf8'));

u.block('Margenabzug und Mischen');
var p=M.entmargen([2.0,3.5,4.0]);
u.pruef('Potenz-Methode: Summe 1, Reihenfolge bleibt', Math.abs(p[0]+p[1]+p[2]-1)<1e-9 && p[0]>p[1] && p[1]>p[2]);
var fair=M.entmargen([2,4,4]); u.pruef('Quote ohne Marge (2/4/4) bleibt 0,5/0,25/0,25', Math.abs(fair[0]-0.5)<1e-6 && Math.abs(fair[1]-0.25)<1e-6);
var k=M.kombinieren([0.2,0.3,0.5],[0.5,0.25,0.25],regel);
u.pruef('Kombination liegt nahe am Markt (Gewicht 0,95) und ist normiert', Math.abs(k[0]+k[1]+k[2]-1)<1e-9 && k[0]>0.45 && k[0]<0.5);
u.pruef('Gegenprobe: gleiche Eingaben -> gleiche Wahrscheinlichkeiten', M.kombinieren([0.4,0.3,0.3],[0.4,0.3,0.3],regel).every(function(x,i){ return Math.abs(x-[0.4,0.3,0.3][i])<1e-9; }));
u.pruef('Regel fest vorab: 0,95 / 0,05, Potenz, 27.11.2026', regel.gewichtMarkt===0.95 && regel.gewichtCore===0.05 && regel.entmargung==='power' && regel.festgelegt==='2026-11-27');

u.block('Zuordnung TipsAudit');
var csv='id,kickoff_utc,league,country,home,away,result,void_reason,pin_open_home,pin_open_draw,pin_open_away,pin_close_home,pin_close_draw,pin_close_away,teams_reversed_after_logging\n'+
 '1,2026-09-01T18:00:00+00:00,Bundesliga,Germany,"Team A","Team B",1,,2.0,3.5,4.0,1.9,3.6,4.2,0\n'+
 '2,2026-07-01T18:00:00+00:00,Bundesliga,Germany,"Team A","Team B",1,,2.0,3.5,4.0,1.9,3.6,4.2,0\n'+
 '3,2026-09-02T18:00:00+00:00,Bundesliga,Germany,"Team C","Team D",X,,2.0,3.5,4.0,1.9,3.6,4.2,1\n'+
 '4,2026-09-03T18:00:00+00:00,Allsvenskan,Sweden,"Team A","Team B",1,,2.0,3.5,4.0,1.9,3.6,4.2,0\n';
var ta=M.csvLesen(csv), aufl=function(l,n){ return { schluessel:n.replace(/^Team /,'').toLowerCase()+'team' }; };
var zeilen=[{ liga:'de.1', datum:'2026-09-01', heimKey:'ateam', gastKey:'bteam', p:[0.4,0.3,0.3], y:0 }, { liga:'de.1', datum:'2026-09-02', heimKey:'cteam', gastKey:'dteam', p:[0.4,0.3,0.3], y:1 }];
var zo=M.zuordnen(zeilen, ta, aufl, '2026-08-01');
u.pruef('genau 1 Spiel zugeordnet', zo.paare.length===1 && zo.paare[0].y===0);
u.pruef('Gegenprobe: Spiel vor dem Stichtag, vertauschte Mannschaften und fremde Liga zaehlen nicht', zo.stat.unsereLigen===1);

u.block('Kombi-Tipps und laufende Messung');
var prog={ spiele:[ { liga:'de.1', datum:'2026-12-01', heim:'A', gast:'B', prognose:{ heimsieg:0.3, remis:0.3, auswaertssieg:0.4 }, position:{ anbieterSpielId:'e1' } },
  { liga:'de.1', datum:'2026-12-01', heim:'C', gast:'D', prognose:{ heimsieg:0.5, remis:0.3, auswaertssieg:0.2 }, position:{} },
  { liga:'de.1', datum:'2026-12-01', heim:'E', gast:'F', prognose:{ heimsieg:0.5, remis:0.3, auswaertssieg:0.2 }, position:{ anbieterSpielId:'e2' } } ] };
var ev=function(id,zeit){ return { id:id, home_team:'A', away_team:'B', commence_time:zeit, bookmakers:[{ key:'pinnacle', markets:[{ key:'h2h', outcomes:[{ name:'A', price:1.5 },{ name:'Draw', price:4.2 },{ name:'B', price:7 }] }] }] }; };
var roh={ 'de.1':{ abgerufenUtc:'2026-11-30T19:00:00Z', ereignisse:[ ev('e1','2026-12-01T19:30:00Z'), ev('e2','2026-11-30T18:00:00Z') ] } };
var km=M.kommend(prog, roh, regel);
u.pruef('mit Pinnacle: Tipp folgt dem Markt (Heimsieg)', km.spiele[0].markt && km.spiele[0].tipp==='Heimsieg');
u.pruef('ohne Quote: Core allein, Spiel bleibt bewertet', km.spiele[1].markt===null && km.spiele[1].grundlage.indexOf('Core allein')===0 && km.gesamt===3);
u.pruef('Gegenprobe: Quote nach Anstoss abgerufen -> verworfen', km.spiele[2].markt===null && km.mitQuote===1);
var wa={ ereignisse:{ x:{ liga:'de.1', land:'de', heimKey:'ateam', gastKey:'bteam', anstossUtc:'2026-12-01T19:30:00Z', abrufe:[{ pinnacle:[1.5,4.2,7] }] } } };
var pa={ eintraege:{ 'de.1|2026-12-01|ateam|bteam':{ p:[0.3,0.3,0.4] } } };
var lm=M.laufendMessen(wa, pa, function(){ return 0; }, regel);
u.pruef('laufende Messung: 1 Spiel, Kombi besser als Core bei Heimsieg', lm.spiele===1 && lm.logLoss.kombi<lm.logLoss.coreAllein);
u.pruef('Gegenprobe: ohne Ergebnis wird nichts gemessen', M.laufendMessen(wa, pa, function(){ return null; }, regel).spiele===0);

u.block('Bericht und Zaehler');
var b=JSON.parse(fs.readFileSync(__dirname+'/../core/model/generated/markt_bericht.json','utf8')), v=b.versiegelt;
u.pruef('Bericht an versiegelten Spielen vorhanden, nur Summenzahlen (keine Einzelspiele)', v && v.spiele>500 && !v.paare && JSON.stringify(b).indexOf('pin_open')<0);
var ideen=JSON.parse(fs.readFileSync(__dirname+'/../core/model/ideen.json','utf8')).ideen, i18=ideen.filter(function(i){ return i.nr===18; })[0];
var vs=JSON.parse(fs.readFileSync(__dirname+'/../core/model/versiegelt.json','utf8'));
u.pruef('Idee 18 vorab gezaehlt und Blick eingetragen', !!i18 && i18.versuche===i18.namen.length && vs.blicke.some(function(x){ return x.gehoert_zu==='M-v1'; }));
process.exit(u.bilanz()?1:0);
