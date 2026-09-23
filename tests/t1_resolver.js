/* Tests A, B, C und Q (Abschnitt 12) - der Resolver gegen echte und gebaute Daten. */
var fs=require('fs'), u=require('./umgebung.js');
var c=u.neueUmgebung();
var t0=Date.now();

/* Fixtures im Schema der football-data-Archivdateien bauen (wettbewerb/datum/anpfiff).
   WICHTIG und im echten Datenbestand nachgeprueft: Die Archivdatei fuehrt die Anstosszeit in
   UTC (m.utcDate), Ondos Eintraege stehen in deutscher Zeit. Damit ein Test denselben Weg
   nimmt wie die echten Daten, wird hier eine BERLINER Zeit angegeben und vom Test selbst nach
   UTC zurueckgerechnet - der Code rechnet sie dann ueber Intl wieder nach Berlin. September
   2026 liegt in der Sommerzeit (MESZ = UTC+2); dass die Umrechnung wirklich ueber Intl laeuft
   und keine feste Verschiebung ist, belegt der eigene Datumswechsel-Test unten. */
function berlinNachUtc(hhmm){
  if(!hhmm) return '';
  var t=hhmm.split(':');
  var h=Number(t[0])-2;
  return (h<0?'':'')+('0'+((h+24)%24)).slice(-2)+':'+t[1];
}
function fix(o){
  return { heim:o.heim, gast:o.gast, torHeim:o.th, torGast:o.tg, halbzeit:o.hz||'',
           status:'FT', datum:o.datum, anpfiff:(o.utc!==undefined?o.utc:berlinNachUtc(o.zeit||'')),
           wettbewerb:o.wb||'', providerEventId:o.pid||null, verlaengerung:'' };
}
function posten(o){
  return { id:o.id, art:'log', match:o.match, datum:o.datum, anpfiff:o.zeit||'',
           wettbewerb:o.wb||'', eintraege:[] };
}

/* ═══ A. Historischer 10-Spiele-Fall 12.09.2026 ═══ */
u.block('A. 10 echte Spiele vom 12.9.2026 aus strukturierten Daten');
var archiv=JSON.parse(fs.readFileSync(require('path').join(__dirname,'..')+'/daten/schiri-ergebnisse/2026-09.json','utf8')).spiele;
var mess=JSON.parse(fs.readFileSync(require('path').join(__dirname,'..')+'/ondo-control-messdaten-2026-09-17.json','utf8'));
var gesehen={}, ziel=[];
mess.kiProtokoll.forEach(function(e){
  if(e.datum!=='12.9.2026') return;
  if(gesehen[e.match]){ gesehen[e.match].eintraege.push(e.id); return; }
  var p={ id:'S'+ziel.length, art:'log', match:e.match, datum:e.datum,
          anpfiff:e.anpfiff||'', wettbewerb:e.wettbewerb||'', eintraege:[e.id] };
  gesehen[e.match]=p; ziel.push(p);
});
var soll={
 'AFC Sunderland - FC Arsenal':[0,2,'0:0'], 'Fortuna Sittard - Ajax Amsterdam':[1,5,'0:1'],
 'Go Ahead Eagles - FC Groningen':[1,1,'0:1'], 'Tottenham Hotspur - FC Everton':[0,0,'0:0'],
 'RC Strasbourg - AS Monaco':[1,1,'0:0'], 'Athletic Bilbao - FC Elche':[1,1,'0:0'],
 'AJ Auxerre - OGC Nizza':[1,0,'0:0'], 'Lazio Rom - AC Mailand':[2,2,'2:0'],
 'Atalanta Bergamo - Cagliari Calcio':[1,2,'1:1'], '1. FC Köln - SV Werder Bremen':[1,1,'1:0']};
var tA=Date.now();
var erg=c.strukturAbgleich(ziel, archiv, 'test-archiv');
var dauerA=Date.now()-tA;
u.pruef('zehn offene Spiele erkannt', ziel.length===10, ziel.length+' Spiele');
var stufen={1:0,2:0,3:0}, korrekt=0;
ziel.forEach(function(p){
  var r=erg.filter(function(x){return x.id===p.id;})[0];
  var sv=soll[p.match];
  if(r && sv && r.heim===sv[0] && r.gast===sv[1] && (r.halbzeit||'')===sv[2]) korrekt++;
  if(r) stufen[r._stufe]=(stufen[r._stufe]||0)+1;
  console.log('     '+(r?('Stufe '+r._stufe+'  '+p.match+' → '+r.heim+':'+r.gast+' HZ '+(r.halbzeit||'—')):('KEINE ZUORDNUNG  '+p.match)));
});
u.pruef('10 von 10 zugeordnet', erg.length===10, erg.length+' zugeordnet');
u.pruef('10 von 10 Endstand UND Halbzeit korrekt', korrekt===10, korrekt+'/10');
u.pruef('kein mehrdeutiger Fall', erg.mehrdeutig.length===0, erg.mehrdeutig.length+' mehrdeutig');
u.pruef('Stufenverteilung ausgegeben', true, 'Stufe1='+stufen[1]+' Stufe2='+stufen[2]+' Stufe3='+stufen[3]);
u.pruef('rein strukturiert, also 0 KI-Aufrufe noetig', erg.length===ziel.length, 'alle Spiele ohne Modellaufruf geloest');
console.log('     Laufzeit dieses Abgleichs: '+dauerA+' ms');

/* ═══ B. Namensvarianten ═══ */
u.block('B. Namensvarianten');
var bPaare=[
  ['Athletic Bilbao','Athletic Club'], ['OGC Nizza','OGC Nice'], ['Lazio Rom','SS Lazio'],
  ['AC Mailand','AC Milan'], ['Atalanta Bergamo','Atalanta BC'], ['1. FC Köln','1. FC Köln'],
  ['SV Werder Bremen','SV Werder Bremen']
];
/* Gleiche Anstosszeit auf beiden Seiten, weil zwei dieser Paare (Nizza/Nice, Mailand/Milan)
   nach Abschnitt 8a nur ueber Stufe 3 loesbar sind und Stufe 3 die minutengenaue Zeit
   VORAUSSETZT. Der Fall "Stufe 1/2 mit abweichender Zeit" steht eigens in Q(k)/(l). */
bPaare.forEach(function(pp){
  var mein=posten({id:'B', match:pp[0]+' - Gegner XY', datum:'12.9.2026', zeit:'20:00', wb:'Testliga'});
  var f=[fix({heim:pp[1], gast:'Gegner XY', th:3, tg:1, hz:'1:0', datum:'2026-09-12', zeit:'20:00', wb:'Testliga'})];
  var r=c.strukturAbgleich([mein], f, 'test');
  u.pruef(pp[0]+' ≙ '+pp[1], r.length===1 && r[0].heim===3 && r[0].gast===1,
          r.length? ('Stufe '+r[0]._stufe) : 'keine Zuordnung');
});
/* Gegenprobe: "United" ist ausdruecklich KEIN Fuellwort (Abschnitt 8a) - es bleibt ein starkes
   Token und darf gerade deshalb nicht zwei verschiedene United-Vereine verschmelzen. Geprueft
   an einem realistischen Tagesbestand: Stehen mehrere United-Paarungen zur Wahl, ist die
   Paarung nicht eindeutig und es wird NICHT zugeordnet. */
var mU=posten({id:'BU', match:'Manchester United - Leeds United', datum:'12.9.2026', zeit:'20:00', wb:'Premier League'});
var fU=[fix({heim:'Newcastle United', gast:'Sheffield United', th:1, tg:0, datum:'2026-09-12', zeit:'17:30', wb:'Premier League'}),
        fix({heim:'West Ham United', gast:'Leeds United',      th:2, tg:2, datum:'2026-09-12', zeit:'15:00', wb:'Premier League'})];
var rU=c.strukturAbgleich([mU], fU, 'test');
u.pruef('"United" verschmilzt keine verschiedenen Vereine', rU.length===0, rU.length+' Treffer');
u.pruef('    und wird als mehrdeutig gefuehrt', rU.mehrdeutig.length===1,
        rU.mehrdeutig.length?(rU.mehrdeutig[0].kandidaten.length+' Kandidaten'):'—');
/* Gegenprobe zur Gegenprobe: derselbe Verein in einer anderen Schreibweise trifft sehr wohl. */
var fU2=fU.concat([fix({heim:'Manchester United FC', gast:'Leeds United', th:3, tg:0, datum:'2026-09-12', zeit:'20:00', wb:'Premier League'})]);
var rU2=c.strukturAbgleich([posten({id:'BU2', match:'Manchester United - Leeds United', datum:'12.9.2026', zeit:'20:00', wb:'Premier League'})], fU2, 'test');
u.pruef('    "Manchester United" ≙ "Manchester United FC" trifft trotzdem',
        rU2.length===1 && rU2[0].heim===3, rU2.length?('Stufe '+rU2[0]._stufe):'kein Treffer');
/* Dass die Zeitumrechnung wirklich ueber Intl/Europe-Berlin laeuft: ein Fixture um 22:30 UTC
   am 12.9. gehoert in Berlin bereits zum 13.9. und darf am 12.9. NICHT gefunden werden. */
var rTZ=c.strukturAbgleich([posten({id:'TZ', match:'Testheim FC - Testgast FC', datum:'12.9.2026', zeit:'00:30', wb:'Testliga'})],
        [fix({heim:'Testheim FC', gast:'Testgast FC', th:1, tg:0, datum:'2026-09-12', utc:'22:30', wb:'Testliga'})], 'test');
u.pruef('Zeitumrechnung Europe/Berlin verschiebt auch das Datum', rTZ.length===0,
        rTZ.length+' Treffer am 12.9. (das Spiel gehoert zum 13.9.)');
var rTZ2=c.strukturAbgleich([posten({id:'TZ2', match:'Testheim FC - Testgast FC', datum:'13.9.2026', zeit:'00:30', wb:'Testliga'})],
        [fix({heim:'Testheim FC', gast:'Testgast FC', th:1, tg:0, datum:'2026-09-12', utc:'22:30', wb:'Testliga'})], 'test');
u.pruef('    und findet es am richtigen Berliner Datum', rTZ2.length===1, rTZ2.length+' Treffer am 13.9.');

/* ═══ C. Mehrdeutiger Kandidat ═══ */
u.block('C. Mehrdeutiger Kandidat');
var mC=posten({id:'C1', match:'FC Barcelona - Real Madrid', datum:'12.9.2026', zeit:'', wb:'LaLiga'});
var fC=[ fix({heim:'FC Barcelona', gast:'Real Madrid', th:1, tg:0, datum:'2026-09-12', zeit:'18:00', wb:'LaLiga'}),
         fix({heim:'FC Barcelona', gast:'Real Madrid', th:2, tg:2, datum:'2026-09-12', zeit:'21:00', wb:'LaLiga'}) ];
var rC=c.strukturAbgleich([mC], fC, 'test');
u.pruef('zwei gleiche Paarungen ohne Zeit → keine automatische Zuordnung', rC.length===0, rC.length+' Treffer');
u.pruef('Fall erscheint als "mehrdeutig"', rC.mehrdeutig.length===1 && rC.mehrdeutig[0].kandidaten.length===2,
        JSON.stringify(rC.mehrdeutig.map(function(m){return m.kandidaten.length;})));
var mC2=posten({id:'C2', match:'FC Barcelona - Real Madrid', datum:'12.9.2026', zeit:'21:00', wb:'LaLiga'});
var rC2=c.strukturAbgleich([mC2], fC, 'test');
u.pruef('dieselben zwei MIT eindeutiger Zeit → genau ein Treffer', rC2.length===1 && rC2[0].heim===2 && rC2[0].gast===2,
        rC2.length?('→ '+rC2[0].heim+':'+rC2[0].gast):'kein Treffer');

/* ═══ Q. Stufe-3-Grenzen ═══ */
u.block('Q. Stufe-3-Grenzen');
/* Grundaufbau: Anker "Auxerre" stimmt, Gegner heisst auf beiden Seiten anders. */
function q(mein, fixtures, alleOffenen){
  return c.strukturAbgleich(alleOffenen||[mein], fixtures, 'test');
}
/* (a) Stufe 3 ohne Anstosszeit → keine Zuordnung */
var qa=q(posten({id:'Qa', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'', wb:'Ligue 1'}),
         [fix({heim:'AJ Auxerre', gast:'OGC Nice', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})]);
u.pruef('(a) Stufe 3 ohne Anstosszeit → keine Zuordnung', qa.length===0, qa.length+' Treffer');
/* Gegenprobe: mit Zeit greift Stufe 3 */
var qa2=q(posten({id:'Qa2', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
          [fix({heim:'AJ Auxerre', gast:'OGC Nice', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})]);
u.pruef('    Gegenprobe: mit passender Zeit greift Stufe 3', qa2.length===1 && qa2[0]._stufe===3,
        qa2.length?('Stufe '+qa2[0]._stufe):'kein Treffer');
/* (b) zwei Kandidaten mit demselben Anker-Team am selben Tag */
var qb=q(posten({id:'Qb', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
         [fix({heim:'AJ Auxerre', gast:'OGC Nice', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'}),
          fix({heim:'AJ Auxerre', gast:'Paris SG', th:0, tg:3, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})]);
u.pruef('(b) zwei Kandidaten mit demselben Anker → keine Zuordnung', qb.length===0, qb.length+' Treffer');
/* (c) Gegnername der Quelle passt zu einem ANDEREN offenen Spiel desselben Datums */
var pC1=posten({id:'Qc1', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'});
var pC2=posten({id:'Qc2', match:'Paris SG - Stade Rennes', datum:'12.9.2026', zeit:'17:00', wb:'Ligue 1'});
var qc=q(pC1,[fix({heim:'AJ Auxerre', gast:'Paris SG', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})],[pC1,pC2]);
u.pruef('(c) Quellen-Gegner gehoert zu einem anderen offenen Spiel → keine Zuordnung',
        qc.filter(function(x){return x.id==='Qc1';}).length===0, qc.length+' Treffer gesamt');
/* (d) vertauschte Orientierung */
var qd=q(posten({id:'Qd', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
         [fix({heim:'OGC Nice', gast:'AJ Auxerre', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})]);
u.pruef('(d) vertauschte Heim/Gast-Orientierung → keine Zuordnung', qd.length===0, qd.length+' Treffer');
/* (e) Stufe-3-Vorschlag zeigt BEIDE vollstaendigen Paarungen */
u.pruef('(e) Stufe-3-Treffer traegt beide Paarungen im Wortlaut',
        qa2.length===1 && qa2[0]._zuordnung.meins==='AJ Auxerre - OGC Nizza' &&
        qa2[0]._zuordnung.quelle==='AJ Auxerre - OGC Nice',
        qa2.length?(qa2[0]._zuordnung.meins+'  ||  '+qa2[0]._zuordnung.quelle):'—');
/* sichtbar in der Oberflaeche? pruefBlock() mit genau diesem Vorschlag rendern. */
c.state.pruefListe=[{ id:'X1', art:'log', match:'AJ Auxerre - OGC Nizza', heim:1, gast:0,
  halbzeit:'0:0', urteile:[], eintraege:[], fixtureId:'fxtest', stufe:3,
  zuordnung:{ stufe:3, meins:'AJ Auxerre - OGC Nizza', quelle:'AJ Auxerre - OGC Nice',
              zeitMeins:'21:05', zeitQuelle:'21:05', zeitAbweichung:false } }];
var htmlQ=c.pruefBlock();
u.pruef('(e) Oberflaeche zeigt den Stufe-3-Hinweis', htmlQ.indexOf(c.t('zuordnungStufe3'))>=0);
u.pruef('(e) Oberflaeche zeigt die Paarung der Quelle', htmlQ.indexOf('AJ Auxerre - OGC Nice')>=0);
c.state.pruefListe=[];
/* (f)(g)(h) Provider-ID-Bindung */
c.state.pruefJobs={};
var qf=q(posten({id:'Qf', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
         [fix({heim:'AJ Auxerre', gast:'OGC Nice', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1', pid:'EV-777'})]);
var fidQ=qf[0]._zuordnung.fixtureId;
u.pruef('(f) Stufe-3-Kandidat traegt die Provider-ID nur am Vorschlag',
        qf[0]._zuordnung.providerEventId==='EV-777');
u.pruef('(f) VOR Uebernehmen ist nichts dauerhaft gebunden',
        !c.jobHolen(fidQ) || !(c.jobHolen(fidQ).providerIds||{})['test-quelle'],
        'Jobs: '+JSON.stringify(c.state.pruefJobs));
c.providerIdBinden(fidQ,'test-quelle','EV-777');            /* = das, was pruefAnwenden() tut */
c.providerIdBinden(fidQ,'test-quelle','EV-999');            /* zweiter Versuch, andere ID */
u.pruef('(g) nach Uebernehmen genau einmal gebunden',
        c.jobHolen(fidQ).providerIds['test-quelle']==='EV-777',
        JSON.stringify(c.jobHolen(fidQ).providerIds));
c.state.pruefJobs={};
c.state.pruefListe=[{ id:'X2', art:'log', match:'AJ Auxerre - OGC Nizza', heim:1, gast:0,
  fixtureId:fidQ, datum:'12.9.2026', urteile:[], eintraege:[],
  zuordnung:{ stufe:3, providerEventId:'EV-777', anbieter:'test-quelle' } }];
c.pruefIgnorieren('X2');
u.pruef('(h) Ignorieren bindet keine Provider-ID',
        !(c.jobHolen(fidQ).providerIds||{})['test-quelle'],
        JSON.stringify(c.jobHolen(fidQ)));
u.pruef('(h) Ignorieren wird dauerhaft vermerkt', c.jobHolen(fidQ).zustand==='ignoriert');
c.state.pruefJobs={}; c.state.pruefListe=[];
/* (i) richtiger Anker, gleiche Zeit, INKOMPATIBLER Wettbewerb */
var qi=q(posten({id:'Qi', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
         [fix({heim:'AJ Auxerre', gast:'Paris SG', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Coupe de France'})]);
u.pruef('(i) inkompatibler Wettbewerb → keine Stufe-3-Zuordnung', qi.length===0, qi.length+' Treffer');
/* (j) richtiger Anker, GLEICHER Wettbewerb, falsche Paarung */
var qj=q(posten({id:'Qj', match:'AJ Auxerre - OGC Nizza', datum:'12.9.2026', zeit:'21:05', wb:'Ligue 1'}),
         [fix({heim:'AJ Auxerre', gast:'Paris SG', th:1, tg:0, datum:'2026-09-12', zeit:'21:05', wb:'Ligue 1'})]);
console.log('     (j) Verhalten dokumentiert: '+(qj.length? ('EIN Vorschlag, Stufe '+qj[0]._stufe+
  ', Quelle "'+qj[0]._zuordnung.quelle+'", Provider-ID nur am Vorschlag') : 'KEIN Vorschlag'));
u.pruef('(j) falls ein Vorschlag entsteht, ist er als Stufe 3 gekennzeichnet',
        qj.length===0 || qj[0]._stufe===3, qj.length?('Stufe '+qj[0]._stufe):'kein Vorschlag');
u.pruef('(j) und bindet von sich aus nichts', Object.keys(c.state.pruefJobs).length===0,
        JSON.stringify(c.state.pruefJobs));
/* (k) Stufe 1/2 mit abweichender Zeit, aber eindeutiger Paarung am Tag */
var qk=q(posten({id:'Qk', match:'1. FC Köln - SV Werder Bremen', datum:'12.9.2026', zeit:'20:30', wb:'Bundesliga'}),
         [fix({heim:'1. FC Köln', gast:'SV Werder Bremen', th:1, tg:1, hz:'1:0', datum:'2026-09-12', zeit:'18:30', wb:'Bundesliga'})]);
u.pruef('(k) abweichende Zeit blockiert Stufe 1/2 nicht', qk.length===1 && qk[0]._stufe===1,
        qk.length?('Stufe '+qk[0]._stufe):'kein Treffer');
u.pruef('(k) Zeit-Hinweis ist gesetzt', qk.length===1 && qk[0]._zeitAbweichung===true);
c.state.pruefListe=[{ id:'X3', art:'log', match:'1. FC Köln - SV Werder Bremen', heim:1, gast:1,
  urteile:[], eintraege:[], fixtureId:'fxk', zuordnung:qk[0]._zuordnung }];
var htmlK=c.pruefBlock();
u.pruef('(k) Zeit-Hinweis ist in der Oberflaeche sichtbar', htmlK.indexOf(c.t('zuordnungZeit'))>=0);
u.pruef('(k) kein faelschlicher Stufe-3-Hinweis', htmlK.indexOf(c.t('zuordnungStufe3'))<0);
c.state.pruefListe=[];
/* (l) Stufe 1/2 mit abweichender Zeit UND zwei moeglichen Fixtures derselben Paarung */
var ql=q(posten({id:'Ql', match:'1. FC Köln - SV Werder Bremen', datum:'12.9.2026', zeit:'20:30', wb:'Bundesliga'}),
         [fix({heim:'1. FC Köln', gast:'SV Werder Bremen', th:1, tg:1, datum:'2026-09-12', zeit:'15:30', wb:'Bundesliga'}),
          fix({heim:'1. FC Köln', gast:'SV Werder Bremen', th:0, tg:2, datum:'2026-09-12', zeit:'18:30', wb:'Bundesliga'})]);
u.pruef('(l) zwei Fixtures derselben Paarung, Zeit loest nicht auf → keine Zuordnung',
        ql.length===0, ql.length+' Treffer');
u.pruef('(l) Fall erscheint als mehrdeutig', ql.mehrdeutig.length===1);

console.log('\n  Gesamtlaufzeit dieser Testdatei: '+(Date.now()-t0)+' ms');
process.exit(u.bilanz()?1:0);
