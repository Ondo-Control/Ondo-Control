'use strict';
var fs=require('fs'), path=require('path'), crypto=require('crypto'), cp=require('child_process');
var leaguesDoc=require('./leagues.json'), splitCfg=require('./splits.json');
var aliasMod=require('./aliases'), identity=require('./identity'), validator=require('./validate'), split=require('./split');
var ofAdapter=require('./adapters/openfootball'), espnAdapter=require('./adapters/espn'), normalize=require('./normalize');

var ROOT=path.join(__dirname,'..','..');
var OF=process.env.OPENFOOTBALL_DIR || process.argv[2];
if(!OF) throw new Error('OPENFOOTBALL_DIR fehlt');
var aliases=aliasMod.loadAliases(), aliasIndex=aliasMod.buildIndex(aliases);
var leagues=leaguesDoc.leagues;
var generated=path.join(__dirname,'generated');
fs.mkdirSync(generated,{recursive:true});

function readJson(p){ return JSON.parse(fs.readFileSync(p,'utf8')); }
function sha256File(p){ return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'); }
function seasonDirs(){ return fs.readdirSync(OF,{withFileTypes:true}).filter(function(d){return d.isDirectory()&&/^\d{4}-\d{2}$/.test(d.name);}).map(function(d){return d.name;}).sort(); }
function gitHead(dir){
  if(process.env.OPENFOOTBALL_COMMIT) return process.env.OPENFOOTBALL_COMMIT;
  try{return cp.execFileSync('git',['-C',dir,'rev-parse','HEAD'],{encoding:'utf8'}).trim();}catch(e){return 'unknown';}
}
function sameTokenSet(a,b){ return identity.fxGleich(identity.fxTokens(a),identity.fxTokens(b)); }
function uniq(a){ return Array.from(new Set(a)).sort(); }

var seasons=seasonDirs();
var coverage={
  schemaVersion:1,
  sources:{
    openfootball:{license:'CC0-1.0',repository:'openfootball/football.json',commit:gitHead(OF)},
    espn:{repositoryPath:'daten/espn-ergebnisse',files:[],totalGames:0,competitions:0,teamNames:0}
  },
  splitConfig:splitCfg,
  leagues:[],
  teamNameCoverage:[]
};

var allEspnRaw=[], espnCompetitions={}, espnTeams={};
var espnDir=path.join(ROOT,'daten','espn-ergebnisse');
fs.readdirSync(espnDir).filter(function(f){return f.endsWith('.json');}).sort().forEach(function(f){
  var p=path.join(espnDir,f), doc=readJson(p);
  coverage.sources.espn.files.push({file:f,sha256:sha256File(p),games:(doc.spiele||[]).length});
  (doc.spiele||[]).forEach(function(g){
    allEspnRaw.push({raw:g,file:f});
    espnCompetitions[g.providerCompetitionName||g.wettbewerb||'']=1;
    if(g.heim) espnTeams[g.heim]=1; if(g.gast) espnTeams[g.gast]=1;
  });
});
coverage.sources.espn.totalGames=allEspnRaw.length;
coverage.sources.espn.competitions=Object.keys(espnCompetitions).filter(Boolean).length;
coverage.sources.espn.teamNames=Object.keys(espnTeams).length;

var allOpen=[], byLeagueSeason={};
leagues.forEach(function(l){
  var lc={id:l.id,name:l.name,seasons:[],totals:{sourceFixtures:0,normalMatches:0,trainingMatches:0}};
  seasons.forEach(function(season){
    var p=path.join(OF,season,l.openfootballFile);
    if(!fs.existsSync(p)) return;
    var doc=readJson(p);
    var rec=ofAdapter.adaptSeason(doc,{league:l.id,season:season,aliasIndex:aliasIndex,sourcePath:season+'/'+l.openfootballFile});
    var running=String(season)>=String(splitCfg.runningOrFuture.fromSeason);
    var st=validator.seasonStats(rec,{running:running});
    st.season=season; st.split=split.bucketForSeason(season,splitCfg); st.trainingEligible=split.mayTrain(season,splitCfg,st.status); st.trainingMatches=st.trainingEligible?st.normalMatches:0;
    lc.seasons.push(st);
    lc.totals.sourceFixtures+=st.sourceFixtures; lc.totals.normalMatches+=st.normalMatches; lc.totals.trainingMatches+=st.trainingMatches;
    byLeagueSeason[l.id+'|'+season]=rec;
    allOpen=allOpen.concat(rec);
  });
  coverage.leagues.push(lc);
});

// ESPN nur fuer die konfigurierten Ziel-Ligen adaptieren; Roharchiv bleibt unberuehrt.
var espnRecords=[];
allEspnRaw.forEach(function(x){
  var r=espnAdapter.adaptMatch(x.raw,{leagues:leagues,aliasIndex:aliasIndex,sourcePath:'daten/espn-ergebnisse/'+x.file});
  if(r) espnRecords.push(r);
});

// Teamnamen-Coverage: aktuelles OpenFootball-Saisonroster gegen aktuelle ESPN-Namen je Liga.
var currentSeason=splitCfg.runningOrFuture.fromSeason;
leagues.forEach(function(l){
  var ofRecords=byLeagueSeason[l.id+'|'+currentSeason]||[];
  var ofNames=uniq(ofRecords.reduce(function(a,r){a.push(r.home,r.away);return a;},[]));
  var eRaw=allEspnRaw.filter(function(x){return (x.raw.providerCompetitionName||x.raw.wettbewerb)===l.espnCompetition;});
  var espnNames=uniq(eRaw.reduce(function(a,x){a.push(x.raw.heim,x.raw.gast);return a;},[]).filter(Boolean));
  var direct=0, alias=0, unresolved=[];
  espnNames.forEach(function(name){
    if(ofNames.some(function(o){return sameTokenSet(name,o);})){ direct++; return; }
    var canon=aliasMod.canonicalTeam(name,l.id,'espn',aliasIndex);
    if(canon!==name && ofNames.indexOf(canon)>=0){ alias++; return; }
    unresolved.push(name);
  });
  coverage.teamNameCoverage.push({league:l.id,season:currentSeason,espnNames:espnNames.length,openfootballNames:ofNames.length,directTokenMatches:direct,aliasMatches:alias,unresolvedCount:unresolved.length,unresolved:unresolved});
});

// Dedupe-Beweis/Statistik, ohne die Rohmatches in den Browser-State oder generated/ zu schreiben.
var alle=allOpen.concat(espnRecords), dateGroups={};
alle.forEach(function(r){ (dateGroups[r.id]=dateGroups[r.id]||[]).push(r.date); });
var dateDifferences=Object.keys(dateGroups).filter(function(k){ return new Set(dateGroups[k]).size>1; }).length;
var merged=normalize.dedupe(alle);
coverage.deduplication={openfootballRecords:allOpen.length,espnTargetLeagueRecords:espnRecords.length,mergedRecords:merged.length,sourceConflicts:merged.filter(function(r){return r.parkReason==='source_conflict';}).length,dateDifferencesAcrossSources:dateDifferences};

var coveragePath=path.join(generated,'coverage.json');
fs.writeFileSync(coveragePath,JSON.stringify(coverage,null,2)+'\n');
var manifest={
  schemaVersion:1,
  outputs:{'coverage.json':{bytes:fs.statSync(coveragePath).size,hardLimitBytes:250000}},
  invariants:{rawDataInState:false,footballDataCoUkUsed:false,llmCalls:false,oddsUsed:false,modelBuilt:false},
  sourceFingerprint:{openfootballCommit:coverage.sources.openfootball.commit,espnFiles:coverage.sources.espn.files.map(function(x){return {file:x.file,sha256:x.sha256};})}
};
var manifestPath=path.join(generated,'manifest.json');
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
if(fs.statSync(coveragePath).size>250000 || fs.statSync(manifestPath).size>250000) throw new Error('Generated-Datei ueber 250 KB');
console.log('coverage:',coveragePath,fs.statSync(coveragePath).size,'bytes');
console.log('manifest:',manifestPath,fs.statSync(manifestPath).size,'bytes');
console.log('ESPN:',coverage.sources.espn.totalGames,'Spiele,',coverage.sources.espn.competitions,'Wettbewerbe,',coverage.sources.espn.teamNames,'Teamnamen');
