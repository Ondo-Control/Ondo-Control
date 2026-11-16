/* Test Quote-Gatter: keine Position ohne geprueft Quote; auch mit Quote keine Wette ohne belegten Vorteil. */
var u=require('./umgebung.js'), Q=require('../core/model/quoten.js');
var gut=function(){ return { quelle:'the-odds-api', markt:'h2h', abgerufenUtc:'2026-11-20T10:00:00Z', anstossUtc:'2026-11-20T19:30:00Z', heim:2.0, remis:3.5, gast:4.0 }; };
var p=[0.6,0.25,0.15];
u.block('Gatter');
u.pruef('gueltige Quote ok', Q.quoteGeprueft(gut()).ok===true);
[['Quelle fehlt',function(q){ delete q.quelle; }],['2-Wege-Markt',function(q){ q.markt='h2h2'; }],['Zeit ohne Z',function(q){ q.abgerufenUtc='2026-11-20T10:00:00'; }],
 ['nach Anstoss',function(q){ q.abgerufenUtc='2026-11-20T20:00:00Z'; }],['gleichzeitig',function(q){ q.abgerufenUtc=q.anstossUtc; }],['Remis fehlt',function(q){ delete q.remis; }],['Quote 1.0',function(q){ q.gast=1; }],['Text statt Zahl',function(q){ q.heim='2.0'; }]
].forEach(function(c){ var q=gut(); c[1](q); u.pruef('Gegenprobe gesperrt: '+c[0], Q.quoteGeprueft(q).ok===false); });
u.pruef('keine Quote -> keine Wette', Q.position(p,null).empfehlung==='keine Wette');
u.pruef('geprueft aber Vorteil nicht belegt -> keine Wette', Q.position(p,gut()).empfehlung==='keine Wette');
u.pruef('nur mit vorteilBelegt eine Wette erwogen', /^Wette erwogen/.test(Q.position(p,gut(),{vorteilBelegt:true}).empfehlung));
u.pruef('mit Freigabe, aber p*Quote unter 1,05 -> keine Wette', /Nachmargen/.test(Q.position([0.5,0.29,0.21],gut(),{vorteilBelegt:true}).grund));
u.pruef('mit Freigabe und p*Quote ueber 1,05 -> Wette erwogen mit Quote', /Heimsieg, Quote 2|Heimsieg/.test(Q.position([0.6,0.25,0.15],gut(),{vorteilBelegt:true}).empfehlung));
var f=Q.fair(gut()); u.pruef('faire Wahrscheinlichkeiten summieren auf 1', Math.abs(f[0]+f[1]+f[2]-1)<1e-12);
u.block('Messung');
var m=Q.messen([{p:p,q:gut(),ergebnis:0},{p:p,q:gut(),ergebnis:2},{p:p,q:{},ergebnis:1}]);
u.pruef('Messung zaehlt nur Spiele mit geprueften Quoten', m.spiele===2);
u.pruef('Messung ohne Quoten liefert keine Zahl', Q.messen([]).spiele===0);
process.exit(u.bilanz()?1:0);
