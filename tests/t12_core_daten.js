/* Core Stufe 1, Teil 1 — Datenfundament (Backlog-Punkt 94).
   beta.html und t1–t11 bleiben unveraendert. Dieser Test prueft:
   - Paritaet der aus beta.html nachgebauten reinen Funktionen,
   - beide realen OpenFootball-Scoreformate,
   - Parken von Ausnahmen,
   - Saisonstatus/Split-Holdout,
   - Alias- und Dublettenlogik,
   - Groessengrenzen der Pages-tauglichen Ausgaben. */
'use strict';
var fs=require('fs'), path=require('path');
var u=require('./umgebung');
var id=require('../core/data/identity');
var market=require('../core/data/market-rules');
var schema=require('../core/data/schema');
var aliases=require('../core/data/aliases');
var ofa=require('../core/data/adapters/openfootball');
var ea=require('../core/data/adapters/espn');
var norm=require('../core/data/normalize');
var val=require('../core/data/validate');
var split=require('../core/data/split');
var splitCfg=require('../core/data/splits.json');

function eq(a,b){ return JSON.stringify(a)===JSON.stringify(b); }
function rec(i,opt){
  opt=opt||{};
  return schema.makeMatchRecord({id:'m'+i,date:'2022-01-'+('0'+(i+1)).slice(-2),league:'x.1',season:'2021-22',home:opt.home||('H'+i),away:opt.away||('A'+i),goals:opt.goals||{home:1,away:0},halftime:null,status:opt.status||'normal',parkReason:opt.parkReason||null,source:opt.source||'test',evidence:[]});
}

(async function(){
  var c=u.neueUmgebung(); await c.bereit;

  u.block('P1. Paritaet beta.html -> reine Node-Module');
  ['FC Köln','Bayern München','Paris Saint-Germain','RCD Espanyol de Barcelona',''].forEach(function(x){
    u.pruef('normName '+x, id.normName(x)===c.normName(x), id.normName(x));
    u.pruef('fxNorm '+x, id.fxNorm(x)===c.fxNorm(x), id.fxNorm(x));
    u.pruef('fxTokens '+x, eq(id.fxTokens(x),c.fxTokens(x)), JSON.stringify(id.fxTokens(x)));
  });
  ['Team A - Team B','Real Madrid – Barcelona','A-B'].forEach(function(x){
    u.pruef('teamsAus '+x, eq(id.teamsAus(x),c.teamsAus(x)),JSON.stringify(id.teamsAus(x)));
  });
  ['1.9.2026','01.09.2026','2026-09-01',''].forEach(function(x){
    u.pruef('datumIso '+x, id.datumIso(x)===c.datumIso(x),id.datumIso(x));
  });
  var ids=[
    ['2026-09-01','FC Bayern München','RB Leipzig'],
    ['2026-10-30','Olympique de Marseille','Lille OSC']
  ];
  ids.forEach(function(x){ u.pruef('fxId '+x.join('|'),id.fxId.apply(null,x)===c.fxId.apply(null,x),id.fxId.apply(null,x)); });
  u.pruef('fxGleich gleiche Tokenmenge',id.fxGleich(['real','madrid'],['madrid','real'])===c.fxGleich(['real','madrid'],['madrid','real']));
  u.pruef('fxGleich ungleich',id.fxGleich(['real'],['real','madrid'])===c.fxGleich(['real'],['real','madrid']));

  var raw={heim:'FC Bayern München',gast:'RB Leipzig',providerCompetitionName:'German Bundesliga',kickoffUtc:'2026-09-01T18:30:00Z',status:'FT'};
  var fb=c.fxFixtureLesen(raw), fn=id.fxFixtureLesen(raw);
  var post={id:'p1',match:'Bayern Munich - RB Leipzig',datum:'1.9.2026',anpfiff:'20:30',wettbewerb:'German Bundesliga'};
  var rb=c.fxAufloesen(post,[fb],[post]), rn=id.fxAufloesen(post,[fn],[post]);
  u.pruef('fxAufloesen gleiche Stufe',rn&&rb&&rn.stufe===rb.stufe,rn&&rn.stufe);
  u.pruef('fxAufloesen gleiche Fixture',rn&&rb&&rn.fixture.heim===rb.fixture.heim&&rn.fixture.gast===rb.fixture.gast);
  u.pruef('fxAufloesen gleiche Zeitabweichung',rn&&rb&&rn.zeitAbweichung===rb.zeitAbweichung,String(rn&&rn.zeitAbweichung));

  ['sieg_heim','sieg_gast','remis','ueber','unter','btts_ja','btts_nein','unbekannt'].forEach(function(code){
    u.pruef('marktUrteil '+code, market.marktUrteil(code,2,1)===c.marktUrteil(code,2,1),String(market.marktUrteil(code,2,1)));
  });

  u.block('P2. OpenFootball-Adapter — beide echten Scoreformate und Ausnahmen');
  var aidx=aliases.buildIndex(aliases.loadAliases());
  var ctx={league:'en.1',season:'2025-26',aliasIndex:aidx,sourcePath:'2025-26/en.1.json'};
  var arr=ofa.adaptMatch({date:'2025-08-16',team1:'Aston Villa FC',team2:'Newcastle United FC',score:[0,0]},ctx);
  u.pruef('score:[0,0] ist ein belegtes Ergebnis, nicht pending',arr.status==='normal'&&arr.goals.home===0&&arr.goals.away===0,JSON.stringify(arr));
  var obj=ofa.adaptMatch({date:'2025-08-15',team1:'Liverpool FC',team2:'AFC Bournemouth',score:{ft:[4,2],ht:[1,0]}},ctx);
  u.pruef('score.ft wird gelesen',obj.status==='normal'&&obj.goals.home===4&&obj.goals.away===2);
  u.pruef('Halbzeit wird nur bei vorhandenem ht uebernommen',obj.halftime.home===1&&obj.halftime.away===0);
  var awarded=ofa.adaptMatch({date:'2025-08-17',team1:'A',team2:'B',score:{ft:[3,0]},status:'awarded'},ctx);
  u.pruef('awarded wird geparkt',awarded.status==='parked'&&awarded.parkReason==='source_status_awarded');
  var canceled=ofa.adaptMatch({date:'2025-08-18',team1:'A',team2:'C',status:'canceled'},ctx);
  u.pruef('canceled wird geparkt',canceled.status==='parked'&&canceled.parkReason==='source_status_canceled');
  var pending=ofa.adaptMatch({date:'2025-08-19',team1:'B',team2:'C'},ctx);
  u.pruef('fehlendes Ergebnis bleibt pending',pending.status==='pending');
  var nullScore=ofa.adaptMatch({date:'2025-08-20',team1:'C',team2:'D',score:[null,null]},ctx);
  u.pruef('score:[null,null] darf NICHT als 0:0 gelten',nullScore.status==='pending'&&nullScore.goals===null,JSON.stringify(nullScore));

  u.block('P3. ESPN-Adapter — normaler Abschluss vs. Ausnahmespiel');
  var leagueCfg=require('../core/data/leagues.json').leagues;
  var e1=ea.adaptMatch({providerCompetitionName:'German Bundesliga',kickoffUtc:'2026-09-12T13:30:00Z',heim:'Bayern Munich',gast:'RB Leipzig',torHeim:2,torGast:1,status:'FT',verlaengerungGespielt:false,providerEventId:'1'}, {leagues:leagueCfg,aliasIndex:aidx});
  u.pruef('ESPN FT normal zaehlt',e1.status==='normal'&&e1.league==='de.1'&&e1.home==='FC Bayern München',JSON.stringify(e1));
  var e2=ea.adaptMatch({providerCompetitionName:'German Bundesliga',kickoffUtc:'2026-09-12T13:30:00Z',heim:'Bayern Munich',gast:'RB Leipzig',torHeim:2,torGast:2,status:'FT',verlaengerungGespielt:true,providerEventId:'2'}, {leagues:leagueCfg,aliasIndex:aidx});
  u.pruef('ESPN Verlaengerung wird geparkt',e2.status==='parked'&&e2.parkReason==='extra_time');

  u.block('P4. Stable Core-ID und Alias-Tabelle');
  u.pruef('FC Cologne Alias ist explizit',aliases.canonicalTeam('FC Cologne','de.1','espn',aidx)==='1. FC Köln');
  u.pruef('Lyon Alias ist explizit',aliases.canonicalTeam('Lyon','fr.1','espn',aidx)==='Olympique Lyonnais');
  var cid1=id.coreMatchId('de.1','2026-27','1. FC Köln','Hamburger SV');
  var cid2=id.coreMatchId('de.1','2026-27',aliases.canonicalTeam('FC Cologne','de.1','espn',aidx),aliases.canonicalTeam('Hamburg SV','de.1','espn',aidx));
  u.pruef('Core-ID ist nach Alias quellenstabil',cid1===cid2,cid1);
  u.pruef('Core-ID enthaelt bewusst kein Datum',cid1.indexOf('2026')>=0 && cid1.indexOf('202611')<0,cid1);

  u.block('P5. Saisonvalidator');
  var complete=[
    rec(1,{home:'A',away:'B'}),rec(2,{home:'B',away:'A'}),
    rec(3,{home:'A',away:'C'}),rec(4,{home:'C',away:'A'}),
    rec(5,{home:'B',away:'C'}),rec(6,{home:'C',away:'B'})
  ];
  var st=val.seasonStats(complete,{running:false});
  u.pruef('3 Teams Doppelrunde = 6 -> vollstaendig',st.status==='vollstaendig'&&st.expectedFixtures===6,JSON.stringify(st));
  var inc=val.seasonStats(complete.slice(0,5),{running:false});
  u.pruef('fehlendes Fixture -> unvollstaendig',inc.status==='unvollstaendig'&&inc.issues.indexOf('fixture_count')>=0,JSON.stringify(inc));
  var run=val.seasonStats(complete.slice(0,5),{running:true});
  u.pruef('laufende Saison bleibt laufend',run.status==='laufend');
  var withCanceled=complete.slice(); withCanceled[0]=rec(7,{home:'A',away:'B',status:'parked',parkReason:'source_status_canceled',goals:null});
  var sc=val.seasonStats(withCanceled,{running:false});
  u.pruef('cancelled macht Saison unvollstaendig',sc.status==='unvollstaendig'&&sc.cancelledParked===1,JSON.stringify(sc));
  var withAwarded=complete.slice(); withAwarded[0]=rec(8,{home:'A',away:'B',status:'parked',parkReason:'source_status_awarded',goals:{home:3,away:0}});
  var sa=val.seasonStats(withAwarded,{running:false});
  u.pruef('awarded verhindert vollstaendige Lernsaison',sa.status==='unvollstaendig'&&sa.awardedParked===1&&sa.normalMatches===5&&sa.issues.indexOf('awarded')>=0,JSON.stringify(sa));

  u.block('P6. Fester chronologischer Split / finaler Holdout');
  u.pruef('2021-22 -> learning',split.bucketForSeason('2021-22',splitCfg)==='learning');
  u.pruef('2022-23 -> validation',split.bucketForSeason('2022-23',splitCfg)==='validation');
  u.pruef('2023-24 -> finaler Holdout',split.bucketForSeason('2023-24',splitCfg)==='holdout');
  u.pruef('2024-25/2025-26 -> post-Holdout, kein Training',split.bucketForSeason('2024-25',splitCfg)==='post_holdout'&&split.bucketForSeason('2025-26',splitCfg)==='post_holdout');
  u.pruef('2026-27 -> running/future',split.bucketForSeason('2026-27',splitCfg)==='running_or_future');
  u.pruef('Holdout darf NIE trainieren',split.mayTrain('2023-24',splitCfg,'vollstaendig')===false);
  u.pruef('post-Holdout darf NIE trainieren',split.mayTrain('2024-25',splitCfg,'vollstaendig')===false);
  u.pruef('Learning darf nur bei vollstaendiger Saison trainieren',split.mayTrain('2021-22',splitCfg,'vollstaendig')===true && split.mayTrain('2021-22',splitCfg,'unvollstaendig')===false);

  u.block('P7. Quellen-Dubletten');
  var x1=schema.makeMatchRecord({id:'same',date:'2026-10-01',league:'de.1',season:'2026-27',home:'A',away:'B',goals:{home:1,away:0},status:'normal',source:'openfootball',evidence:[{source:'openfootball'}]});
  var x2=schema.makeMatchRecord({id:'same',date:'2026-10-02',league:'de.1',season:'2026-27',home:'A',away:'B',goals:{home:1,away:0},status:'normal',source:'espn',evidence:[{source:'espn'}]});
  var m1=norm.dedupe([x1,x2]);
  u.pruef('gleiche Paarung/Saison ueber Quellen wird eins',m1.length===1&&m1[0].source==='merged',JSON.stringify(m1));
  u.pruef('bei Terminverschiebung gewinnt ESPN-Datum ohne neue ID',m1[0].date==='2026-10-02',m1[0].date);
  var x3=Object.assign({},x2,{goals:{home:0,away:1}});
  var m2=norm.dedupe([x1,x3]);
  u.pruef('widersprechende Endstaende werden geparkt',m2[0].status==='parked'&&m2[0].parkReason==='source_conflict');

  u.block('P8. Generierte kleine Pages-Dateien / harte Grenzen');
  var gp=path.join(__dirname,'..','core','data','generated','coverage.json');
  var mp=path.join(__dirname,'..','core','data','generated','manifest.json');
  var cov=JSON.parse(fs.readFileSync(gp,'utf8')), man=JSON.parse(fs.readFileSync(mp,'utf8'));
  u.pruef('coverage.json < 250 KB',fs.statSync(gp).size<250000,fs.statSync(gp).size);
  u.pruef('manifest.json < 250 KB',fs.statSync(mp).size<250000,fs.statSync(mp).size);
  u.pruef('Coverage markiert jede Saison mit erlaubtem Status',cov.leagues.every(function(l){return l.seasons.every(function(s){return ['vollstaendig','unvollstaendig','laufend'].indexOf(s.status)>=0;});}));
  u.pruef('Coverage enthaelt unaufgeloeste Teamnamen je Liga',cov.teamNameCoverage.every(function(x){return Number.isInteger(x.unresolvedCount)&&Array.isArray(x.unresolved);}));
  u.pruef('Manifest belegt Scope: keine Quoten/LLM/Modelle',man.invariants.footballDataCoUkUsed===false&&man.invariants.llmCalls===false&&man.invariants.oddsUsed===false&&man.invariants.modelBuilt===false);

  process.exitCode=u.bilanz()?1:0;
})().catch(function(e){ console.error(e&&e.stack||e); process.exitCode=1; });
