'use strict';
var schema=require('../schema');
var identity=require('../identity');
var aliases=require('../aliases');

function scoreOf(raw){
  var s=raw && raw.score;
  if(Array.isArray(s)) return {ft:schema.scorePair(s),ht:null,format:'array'};
  if(s && typeof s==='object') return {ft:schema.scorePair(s.ft),ht:schema.scorePair(s.ht),format:'object'};
  return {ft:null,ht:null,format:'none'};
}

function adaptMatch(raw,ctx){
  ctx=ctx||{};
  var aliasIndex=ctx.aliasIndex||{};
  var home=aliases.canonicalTeam(raw.team1,ctx.league,'openfootball',aliasIndex);
  var away=aliases.canonicalTeam(raw.team2,ctx.league,'openfootball',aliasIndex);
  var sc=scoreOf(raw);
  var sourceStatus=String(raw.status||'').toLowerCase();
  var status=schema.MATCH_STATUS.PENDING, reason=null;
  if(sourceStatus==='cancelled'||sourceStatus==='canceled'||sourceStatus==='abandoned'||sourceStatus==='postponed'){
    status=schema.MATCH_STATUS.PARKED; reason='source_status_'+sourceStatus;
  }else if(sourceStatus==='awarded'){
    status=schema.MATCH_STATUS.PARKED; reason='source_status_awarded';
  }else if(sc.ft){
    status=schema.MATCH_STATUS.NORMAL;
  }
  return schema.makeMatchRecord({
    id:identity.coreMatchId(ctx.league,ctx.season,home,away), date:raw.date, league:ctx.league, season:ctx.season,
    home:home, away:away, goals:sc.ft, halftime:sc.ht, status:status, parkReason:reason,
    source:'openfootball', evidence:[{source:'openfootball',ref:(ctx.sourcePath||'')+(ctx.sourcePath?'#':'')+String(raw.round||'')}]
  });
}

function adaptSeason(doc,ctx){
  if(!doc || !Array.isArray(doc.matches)) throw new Error('OpenFootball: matches fehlt');
  return doc.matches.map(function(m){ return adaptMatch(m,ctx); });
}

module.exports={scoreOf:scoreOf,adaptMatch:adaptMatch,adaptSeason:adaptSeason};
