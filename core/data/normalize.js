'use strict';
var schema=require('./schema');

function sameScore(a,b){
  if(!a||!b) return a===b;
  return a.home===b.home && a.away===b.away;
}
function mergeGroup(group){
  var preferred=group.find(function(r){return r.source==='espn';})||group[0];
  var base=Object.assign({},preferred);
  var ev=[]; group.forEach(function(r){ (r.evidence||[]).forEach(function(e){ ev.push(e); }); });
  base.evidence=ev;
  var normals=group.filter(function(r){ return r.status===schema.MATCH_STATUS.NORMAL; });
  if(normals.length>1){
    var first=normals[0];
    if(!normals.every(function(r){ return sameScore(r.goals,first.goals); })){
      base.status=schema.MATCH_STATUS.PARKED; base.parkReason='source_conflict'; base.source='merged'; base.goals=null; base.halftime=null;
      return base;
    }
    base.goals=first.goals;
    base.halftime=first.halftime || normals.map(function(r){return r.halftime;}).find(Boolean) || null;
  }
  if(group.length>1) base.source='merged';
  return base;
}
function dedupe(records){
  var groups={};
  records.forEach(function(r){ (groups[r.id]=groups[r.id]||[]).push(r); });
  return Object.keys(groups).sort().map(function(k){ return mergeGroup(groups[k]); });
}
module.exports={sameScore:sameScore,mergeGroup:mergeGroup,dedupe:dedupe};
