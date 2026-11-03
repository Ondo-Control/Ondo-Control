/* Core Stufe 1 / Teil 1 — Datenfundament. Kein Netz, kein Modell, kein beta-Umbau. */
'use strict';
const fs=require('fs'), path=require('path');
const u=require('./umgebung');
const identity=require('../core/data/identity');
const {marktUrteil}=require('../core/data/market-rules');
const schema=require('../core/data/schema');
const aliases=require('../core/data/team-aliases.json');
const aliasLib=require('../core/data/aliases');
const of=require('../core/data/adapters/openfootball');
const espn=require('../core/data/adapters/espn');
const {dedupliziere}=require('../core/data/normalize');
const {seasonStatus}=require('../core/data/validate');
const splitCfg=require('../core/data/splits.json');
const {splitFuerSaison,darfLernen}=require('../core/data/split');

let ok=0,fail=0;
function block(s){console.log('\n── '+s);}
function check(s,v,d){if(v){ok++;console.log('  ✓ '+s);}else{fail++;console.log('  ✗ FEHL: '+s+(d!==undefined?' ['+JSON.stringify(d)+']':''));}}
function same(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function directRecord(date,h,g,status='normal'){
  const heim={name:h,key:identity.fxTokens(h).slice().sort().join('_'),sourceName:h,alias:false};
  const gast={name:g,key:identity.fxTokens(g).slice().sort().join('_'),sourceName:g,alias:false};
  return {schemaVersion:1,spielId:identity.fxId(date,heim.key,gast.key),datum:date,liga:'test.1',saison:'2024-25',heim,gast,
    tore:status==='normal'?{heim:1,gast:0}:null,halbzeit:null,status,parkGrund:null,quelle:'test',beleg:[{quelle:'test',ref:'x'}]};
}
async function main(){
  block('P1: Paritaet zum echten beta.html');
  const c=u.neueUmgebung(); await c.bereit;
  const normCases=['Bayern Munich','1. FC Köln','RCD Espanyol de Barcelona','A&B / C'];
  for(const x of normCases) check('normName '+x,identity.normName(x)===c.normName(x),[identity.normName(x),c.normName(x)]);
  const fxCases=['FC Bayern München','Bayern Munich','RCD Espanyol de Barcelona','Olympique de Marseille','ACF Fiorentina'];
  for(const x of fxCases){
    check('fxNorm '+x,identity.fxNorm(x)===c.fxNorm(x));
    check('fxTokens '+x,same(identity.fxTokens(x),Array.from(c.fxTokens(x))));
  }
  const ids=[['2026-11-01','FC Bayern München','Bayer 04 Leverkusen'],['2026-09-12','SS Lazio','AC Milan']];
  for(const a of ids) check('fxId '+a.join(' / '),identity.fxId(...a)===c.fxId(...a));
  const raw=[{status:'FT',heim:'SS Lazio',gast:'AC Milan',providerCompetitionName:'Italian Serie A',kickoffUtc:'2026-09-12T18:45:00Z'}];
  const p={id:'p1',datum:'12.09.2026',match:'SS Lazio - AC Milan',anpfiff:'20:45',wettbewerb:'Italian Serie A'};
  const a1=identity.fxAufloesen(p,raw.map(identity.fxFixtureLesen),[p]);
  const a2=c.fxAufloesen(p,raw.map(x=>c.fxFixtureLesen(x)),[p]);
  check('fxAufloesen Stufe',a1&&a2&&a1.stufe===a2.stufe,a1&&a2?[a1.stufe,a2.stufe]:[a1,a2]);
  check('fxAufloesen Zeitabweichung',a1&&a2&&a1.zeitAbweichung===a2.zeitAbweichung);
  for(const [code,h,g] of [['sieg_heim',2,1],['sieg_gast',0,1],['remis',1,1],['ueber',2,1],['unter',1,1],['btts_ja',1,2],['btts_nein',0,2]]){
    check('marktUrteil '+code,marktUrteil(code,h,g)===c.marktUrteil(code,h,g));
  }

  block('P2: Alias-Tabelle und quellenuebergreifende Identitaet');
  const ix=aliasLib.aliasIndex(aliases);
  const aliasPairs=[
    ['ger.1','FC Bayern München','Bayern Munich'],['ger.1','1. FC Köln','FC Cologne'],
    ['esp.1','RCD Espanyol de Barcelona','Espanyol'],['esp.1','RC Deportivo La Coruña','Deportivo'],
    ['ita.1','FC Internazionale Milano','Internazionale'],['fra.1','Olympique Lyonnais','Lyon'],['fra.1','Olympique de Marseille','Marseille']
  ];
  for(const [lg,a,b] of aliasPairs){
    const x=aliasLib.resolveTeam('openfootball',lg,a,aliases,ix), y=aliasLib.resolveTeam('espn',lg,b,aliases,ix);
    check('Alias '+a+' = '+b,x.key===y.key,[x.key,y.key]);
  }
  const seen=new Set(); let dups=0;
  for(const e of aliases.entries) for(const src of ['openfootball','espn']) for(const n of e[src]||[]){const k=src+'|'+e.league+'|'+identity.fxNorm(n);if(seen.has(k))dups++;seen.add(k);}
  check('Alias-Tabelle ohne doppelte Source-Schluessel',dups===0,dups);

  block('P3: Adapter — nur normal belegter Abschluss, Ausnahmen geparkt');
  const lg={id:'ger.1',espn:'ger.1'};
  let r=of.adaptMatch({date:'2026-01-02',team1:'FC Bayern München',team2:'Bayer 04 Leverkusen',score:{ft:[2,1],ht:[1,0]}},{league:lg,season:'2025-26',sourcePath:'2025-26/de.1.json',index:0,aliases});
  check('OpenFootball FT normal',r.status==='normal'&&r.tore.heim===2&&r.halbzeit.heim===1,r);
  check('OpenFootball Schema gueltig',schema.pruefeMatchRecord(r).length===0,schema.pruefeMatchRecord(r));
  r=of.adaptMatch({date:'2026-01-03',team1:'A',team2:'B'},{league:lg,season:'2025-26',sourcePath:'x',index:1,aliases});
  check('OpenFootball ohne Ergebnis offen',r.status==='offen',r.status);
  r=of.adaptMatch({date:'2026-01-03',team1:'A',team2:'B',score:{ft:[1,1],et:[2,1]}},{league:lg,season:'2025-26',sourcePath:'x',index:2,aliases});
  check('OpenFootball Sonderformat geparkt',r.status==='geparkt'&&/^sonderformat_/.test(r.parkGrund||''),r);
  const ebase={providerCompetitionSlug:'ger.1',providerEventId:'1',datum:'2026-10-01',heim:'Bayern Munich',gast:'Bayer Leverkusen',torHeim:2,torGast:1,status:'FT',verlaengerungGespielt:false,beleg:{completed:true,statusTyp:'STATUS_FULL_TIME'},halbzeit:'1:0'};
  r=espn.adaptMatch(ebase,{league:lg,aliases});
  check('ESPN FULL_TIME normal',r.status==='normal'&&r.tore.heim===2,r);
  r=espn.adaptMatch(Object.assign({},ebase,{providerEventId:'2',verlaengerungGespielt:true}),{league:lg,aliases});
  check('ESPN Verlaengerung geparkt',r.status==='geparkt'&&r.parkGrund==='verlaengerung',r);

  block('P4: Dubletten und Quellenkonflikt');
  const oa=of.adaptMatch({date:'2026-10-01',team1:'FC Bayern München',team2:'Bayer 04 Leverkusen',score:{ft:[2,1]}},{league:lg,season:'2026-27',sourcePath:'x',index:0,aliases});
  const ea=espn.adaptMatch(ebase,{league:lg,aliases});
  let merged=dedupliziere([oa,ea]);
  check('Alias-Dublette wird genau ein Spiel',merged.length===1,merged.length);
  check('Dublettenbelege beider Quellen bleiben',merged[0].beleg.length===2,merged[0].beleg);
  const ek=espn.adaptMatch(Object.assign({},ebase,{torGast:2}),{league:lg,aliases});
  merged=dedupliziere([oa,ek]);
  check('Quellenkonflikt wird geparkt',merged.length===1&&merged[0].status==='geparkt'&&merged[0].parkGrund==='quellenkonflikt',merged[0]);

  block('P5: Saisonstatus — Gegenproben');
  const teams=['A','B','C','D']; const full=[]; let day=1;
  for(const h of teams) for(const g of teams) if(h!==g) full.push(directRecord('2024-08-'+String(day++).padStart(2,'0'),h,g));
  let st=seasonStatus(full,{heute:'2025-06-01'});
  check('vollstaendige Doppelrunde erkannt',st.status==='vollstaendig'&&st.lernfaehig&&st.spiele===12&&st.erwartet===12,st);
  const future=full.map(x=>JSON.parse(JSON.stringify(x))); future[0].status='offen';future[0].tore=null;future[0].datum='2026-12-01';
  st=seasonStatus(future,{heute:'2026-11-03'});
  check('fehlendes Zukunftsergebnis = laufend',st.status==='laufend'&&!st.lernfaehig,st);
  const past=full.map(x=>JSON.parse(JSON.stringify(x))); past[0].status='offen';past[0].tore=null;
  st=seasonStatus(past,{heute:'2026-11-03'});
  check('fehlendes vergangenes Ergebnis = unvollstaendig',st.status==='unvollstaendig'&&!st.lernfaehig,st);
  const nurDrei=full.filter(r=>r.heim.key!=='d'&&r.gast.key!=='d');
  st=seasonStatus(nurDrei,{heute:'2026-11-03',expectedTeams:4});
  check('fehlende ganze Mannschaft kann nicht faelschlich vollstaendig sein',st.status==='unvollstaendig'&&!st.lernfaehig&&st.teams===3&&st.erwarteteTeams===4,st);

  block('P6: vorab eingefrorene zeitliche Trennung');
  check('England 2023-24 lernen',splitFuerSaison('eng.1','2023-24','vollstaendig',splitCfg)==='lernen');
  check('England 2024-25 pruefen',splitFuerSaison('eng.1','2024-25','vollstaendig',splitCfg)==='pruefen');
  check('Spanien 2023-24 pruefen',splitFuerSaison('esp.1','2023-24','vollstaendig',splitCfg)==='pruefen');
  check('unvollstaendige Pruefsaison nicht verwendbar',splitFuerSaison('eng.1','2024-25','unvollstaendig',splitCfg)==='nicht_verwendbar');
  for(const lgid of Object.keys(splitCfg.leagues)){
    const sp=splitFuerSaison(lgid,'2025-26','vollstaendig',splitCfg);
    check('Holdout '+lgid+' nie Lernen',sp==='holdout'&&!darfLernen(sp),sp);
  }

  block('P7: erzeugte reale Coverage und Dateigrenzen');
  const gen=path.join(__dirname,'..','core','data','generated');
  const cov=JSON.parse(fs.readFileSync(path.join(gen,'coverage.json'),'utf8'));
  const man=JSON.parse(fs.readFileSync(path.join(gen,'manifest.json'),'utf8'));
  check('Coverage hat genau 5 konfigurierte Ligen',Object.keys(cov.leagues).length===5,Object.keys(cov.leagues));
  check('ESPN-Archiv wird als nichtleere Quelle erfasst',cov.espn.spiele>0&&cov.espn.wettbewerbe>0&&cov.espn.teamnamen>0,cov.espn);
  for(const [lgid,v] of Object.entries(cov.leagues)){
    check('keine unaufgeloesten aktuellen Teamnamen '+lgid,v.teamIdentity.unresolved===0,v.teamIdentity);
    check('OpenFootball-Ergebnisse vorhanden '+lgid,v.openfootballErgebnisse>0,v.openfootballErgebnisse);
    for(const s of v.seasons){
      if(s.split==='lernen'||s.split==='pruefen') check('nur vollstaendige Saison in '+s.split+' '+lgid+' '+s.saison,s.status==='vollstaendig',s);
      if(s.split==='holdout') check('Holdout nicht lernfaehig '+lgid+' '+s.saison,!darfLernen(s.split));
    }
  }
  check('coverage.json <= 250 KB',fs.statSync(path.join(gen,'coverage.json')).size<=250000,fs.statSync(path.join(gen,'coverage.json')).size);
  check('manifest.json <= 100 KB',fs.statSync(path.join(gen,'manifest.json')).size<=100000,fs.statSync(path.join(gen,'manifest.json')).size);
  check('Manifest enthaelt Saisonpruefungen statt Rohdaten',man.seasons.length>0&&!('records' in man),man.seasons.length);
  const generatedFiles=fs.readdirSync(gen).sort();
  check('Generated enthaelt nur kleine Ableitungen',same(generatedFiles,['coverage.json','manifest.json']),generatedFiles);

  console.log('\n════════════════════════════════════════════════════════════════');
  console.log(`  ${ok} Pruefungen bestanden, ${fail} fehlgeschlagen`);
  console.log('════════════════════════════════════════════════════════════════');
  if(fail) process.exit(1);
}
main().catch(e=>{console.error(e&&e.stack||e);process.exit(1);});
