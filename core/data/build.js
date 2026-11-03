#!/usr/bin/env node
'use strict';
const fs=require('fs'), path=require('path');
const leaguesCfg=require('./leagues.json');
const aliases=require('./team-aliases.json');
const splits=require('./splits.json');
const {adaptFile}=require('./adapters/openfootball');
const {adaptArchive}=require('./adapters/espn');
const {dedupliziere}=require('./normalize');
const {seasonStatus}=require('./validate');
const {splitFuerSaison}=require('./split');
const {resolveTeam,aliasIndex}=require('./aliases');

function argsLesen(argv){
  const out={};
  for(let i=2;i<argv.length;i++){
    const a=argv[i]; if(!a.startsWith('--')) continue;
    const k=a.slice(2); const v=argv[i+1]&&!argv[i+1].startsWith('--')?argv[++i]:true; out[k]=v;
  }
  return out;
}
function jsonLesen(p){ return JSON.parse(fs.readFileSync(p,'utf8')); }
function mkdir(p){ fs.mkdirSync(p,{recursive:true}); }
function writeJson(p,obj,limit){
  const s=JSON.stringify(obj,null,2)+'\n'; const n=Buffer.byteLength(s);
  if(limit&&n>limit) throw new Error(`${p}: ${n} Bytes > Grenze ${limit}`);
  mkdir(path.dirname(p)); fs.writeFileSync(p,s); return n;
}
function seasonDirs(root){
  if(!fs.existsSync(root)) return [];
  return fs.readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory()&&/^\d{4}-\d{2}$/.test(d.name)).map(d=>d.name).sort();
}
function espnFiles(root){
  if(!fs.existsSync(root)) return [];
  return fs.readdirSync(root).filter(n=>/^\d{4}-\d{2}\.json$/.test(n)).sort().map(n=>path.join(root,n));
}
function sourceTeamCoverage(ofRecords,espnRecords,league){
  const idx=aliasIndex(aliases), byOf=new Map(), byEspn=new Map();
  for(const r of ofRecords){ byOf.set(r.heim.sourceName,resolveTeam('openfootball',league,r.heim.sourceName,aliases,idx)); byOf.set(r.gast.sourceName,resolveTeam('openfootball',league,r.gast.sourceName,aliases,idx)); }
  for(const r of espnRecords){ byEspn.set(r.heim.sourceName,resolveTeam('espn',league,r.heim.sourceName,aliases,idx)); byEspn.set(r.gast.sourceName,resolveTeam('espn',league,r.gast.sourceName,aliases,idx)); }
  let standard=0,alias=0; const unresolved=[];
  for(const [name,t] of [...byOf.entries()].sort((a,b)=>a[0].localeCompare(b[0]))){
    const hits=[...byEspn.values()].filter(e=>e.key===t.key);
    if(!hits.length){unresolved.push(name);continue;}
    if(t.alias||hits.some(h=>h.alias)) alias++; else standard++;
  }
  return {openfootballTeams:byOf.size,espnTeams:byEspn.size,matchedStandard:standard,matchedAlias:alias,unresolved:unresolved.length,unresolvedNames:unresolved};
}
function expectedTeamsFor(league,season){
  let n=Number(league.expectedTeams)||0;
  for(const c of (league.teamCountChanges||[]).slice().sort((a,b)=>String(a.from).localeCompare(String(b.from)))){
    if(String(season)>=String(c.from)) n=Number(c.count)||n;
  }
  return n||undefined;
}
function uniqueArchiveStats(files){
  let games=0; const comps=new Set(),teams=new Set();
  for(const p of files){
    const j=jsonLesen(p); const arr=Array.isArray(j)?j:(j.spiele||[]); games+=arr.length;
    for(const g of arr){
      if(g.providerCompetitionSlug) comps.add(g.providerCompetitionSlug);
      if(g.heim) teams.add(g.heim); if(g.gast) teams.add(g.gast);
    }
  }
  return {spiele:games,wettbewerbe:comps.size,teamnamen:teams.size};
}
function build(opt){
  const ofRoot=path.resolve(opt.openfootball||'');
  const espnRoot=path.resolve(opt.espn||path.join(process.cwd(),'daten/espn-ergebnisse'));
  const outRoot=path.resolve(opt.out||path.join(__dirname,'generated'));
  const heute=String(opt.today||new Date().toISOString().slice(0,10));
  const ofCommit=String(opt['openfootball-commit']||'unbekannt');
  if(!fs.existsSync(ofRoot)) throw new Error('OpenFootball-Pfad fehlt: '+ofRoot);
  if(!fs.existsSync(espnRoot)) throw new Error('ESPN-Pfad fehlt: '+espnRoot);
  fs.rmSync(outRoot,{recursive:true,force:true}); mkdir(outRoot);

  const espnPaths=espnFiles(espnRoot); const archiveStats=uniqueArchiveStats(espnPaths);
  const coverage={schemaVersion:1,openfootball:{repository:'openfootball/football.json',license:'CC0-1.0',commit:ofCommit},espn:archiveStats,leagues:{}};
  const manifest={schemaVersion:1,source:{openfootballCommit:ofCommit},splitConfigVersion:splits.version,leagueConfigVersion:leaguesCfg.version,aliasVersion:aliases.version,seasons:[]};

  for(const league of leaguesCfg.leagues){
    const allOfBySeason=new Map(); const allEspnBySeason=new Map(); const seasonRows=[];
    let ofNormalTotal=0;
    for(const season of seasonDirs(ofRoot)){
      const src=path.join(ofRoot,season,league.openfootball+'.json'); if(!fs.existsSync(src)) continue;
      const j=jsonLesen(src);
      const records=adaptFile(j,{league,season,sourcePath:`${season}/${league.openfootball}.json`,aliases});
      allOfBySeason.set(season,records);
      ofNormalTotal+=records.filter(r=>r.status==='normal').length;
    }
    for(const p of espnPaths){
      const j=jsonLesen(p); const records=adaptArchive(j,{league,aliases});
      for(const r of records){
        if(!allEspnBySeason.has(r.saison)) allEspnBySeason.set(r.saison,[]);
        allEspnBySeason.get(r.saison).push(r);
      }
    }
    const seasons=[...new Set([...allOfBySeason.keys(),...allEspnBySeason.keys()])].sort();
    for(const season of seasons){
      const ofr=allOfBySeason.get(season)||[], er=allEspnBySeason.get(season)||[];
      const stat=ofr.length?seasonStatus(ofr,{heute,expectedTeams:expectedTeamsFor(league,season)}):{status:'ohne_openfootball_basis',spiele:0,normal:0,offen:0,geparkt:0,teams:0,erwarteteTeams:expectedTeamsFor(league,season)||0,erwartet:0,duplicate:0,self:0,shapeFehler:0,lernfaehig:false};
      const split=splitFuerSaison(league.id,season,stat.status,splits);
      const merged=dedupliziere(ofr.concat(er));
      manifest.seasons.push({liga:league.id,saison:season,status:stat.status,split,openfootball:ofr.length,espn:er.length,merged:merged.length});
      seasonRows.push({saison:season,status:stat.status,split,openfootball:stat,espn:er.length,merged:merged.length});
    }
    const overlapSeason=[...allEspnBySeason.keys()].filter(s=>allOfBySeason.has(s)).sort().slice(-1)[0]||null;
    const teamCoverage=overlapSeason?sourceTeamCoverage(allOfBySeason.get(overlapSeason),allEspnBySeason.get(overlapSeason)||[],league.id):{openfootballTeams:0,espnTeams:0,matchedStandard:0,matchedAlias:0,unresolved:0,unresolvedNames:[]};
    coverage.leagues[league.id]={name:league.name,openfootballId:league.openfootball,openfootballErgebnisse:ofNormalTotal,espnErgebnisse:[...allEspnBySeason.values()].reduce((a,v)=>a+v.length,0),teamIdentitySeason:overlapSeason,teamIdentity:teamCoverage,seasons:seasonRows};
  }
  writeJson(path.join(outRoot,'coverage.json'),coverage,250000);
  writeJson(path.join(outRoot,'manifest.json'),manifest,100000);
  return {coverage,manifest};
}

if(require.main===module){
  try{ const opt=argsLesen(process.argv); const r=build(opt); console.log(`Core-Daten gebaut: ${r.manifest.seasons.length} Saison-Pruefungen, ${Object.keys(r.coverage.leagues).length} Ligen.`); }
  catch(e){ console.error(e&&e.stack||e); process.exit(1); }
}
module.exports={build,argsLesen,sourceTeamCoverage,uniqueArchiveStats,expectedTeamsFor};
