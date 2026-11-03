'use strict';
var schema=require('../schema');
var identity=require('../identity');
var aliases=require('../aliases');

function seasonFromDate(date){
  var m=String(date||'').match(/^(\d{4})-(\d{2})-/);
  if(!m) return '';
  var y=Number(m[1]), mo=Number(m[2]), a=mo>=7?y:y-1, b=(a+1)%100;
  return String(a)+'-'+('0'+b).slice(-2);
}
function leagueFor(raw,leagues){
  var n=String(raw.providerCompetitionName||raw.wettbewerb||'');
  var f=(leagues||[]).find(function(l){ return l.espnCompetition===n; });
  return f ? f.id : '';
}
function adaptMatch(raw,ctx){
  ctx=ctx||{};
  var league=ctx.league||leagueFor(raw,ctx.leagues);
  if(!league) return null;
  var b=raw.kickoffUtc ? identity.fxBerlin(raw.kickoffUtc) : null;
  var date=(b&&b.datum)||String(raw.datum||'');
  var season=ctx.season||seasonFromDate(date);
  var aliasIndex=ctx.aliasIndex||{};
  var home=aliases.canonicalTeam(raw.heim,league,'espn',aliasIndex);
  var away=aliases.canonicalTeam(raw.gast,league,'espn',aliasIndex);
  var ft=(Number.isFinite(Number(raw.torHeim))&&Number.isFinite(Number(raw.torGast)))
    ? {home:Number(raw.torHeim),away:Number(raw.torGast)} : null;
  var ht=schema.scorePair(raw.halbzeit);
  var sourceStatus=String(raw.status||'');
  var status=schema.MATCH_STATUS.PENDING, reason=null;
  if(sourceStatus==='FT' && raw.verlaengerungGespielt===true){
    status=schema.MATCH_STATUS.PARKED; reason='extra_time';
  }else if(sourceStatus==='FT' && ft){
    status=schema.MATCH_STATUS.NORMAL;
  }else if(sourceStatus && sourceStatus!=='FT'){
    status=schema.MATCH_STATUS.PARKED; reason='source_status_'+sourceStatus.toLowerCase();
  }
  return schema.makeMatchRecord({
    id:identity.coreMatchId(league,season,home,away), date:date, league:league, season:season,
    home:home, away:away, goals:ft, halftime:ht, status:status, parkReason:reason,
    source:'espn', evidence:[{source:'espn',ref:String(raw.providerEventId||''),url:String(raw.beleg||''),file:String(ctx.sourcePath||'')}]
  });
}
function adaptArchive(doc,ctx){
  if(!doc || !Array.isArray(doc.spiele)) throw new Error('ESPN: spiele fehlt');
  return doc.spiele.map(function(m){ return adaptMatch(m,ctx); }).filter(Boolean);
}
module.exports={seasonFromDate:seasonFromDate,leagueFor:leagueFor,adaptMatch:adaptMatch,adaptArchive:adaptArchive};
