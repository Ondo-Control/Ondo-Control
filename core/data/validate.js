'use strict';
var schema=require('./schema');

function seasonStats(records,opt){
  opt=opt||{};
  var teams={}; records.forEach(function(r){ teams[r.home]=1; teams[r.away]=1; });
  var teamCount=Object.keys(teams).length;
  var expected=teamCount>1 ? teamCount*(teamCount-1) : 0;
  var ids={}, duplicateIds=0, invalid=0, normal=0, awarded=0, pending=0, cancelled=0, parkedOther=0;
  records.forEach(function(r){
    if(schema.validateShape(r).length) invalid++;
    if(ids[r.id]) duplicateIds++; else ids[r.id]=1;
    if(r.status===schema.MATCH_STATUS.NORMAL) normal++;
    else if(r.status===schema.MATCH_STATUS.PENDING) pending++;
    else if(r.parkReason==='source_status_awarded') awarded++;
    else if(/^source_status_cancel/.test(String(r.parkReason||''))) cancelled++;
    else parkedOther++;
  });
  var running=!!opt.running;
  var complete=!running && records.length===expected && normal===expected &&
    invalid===0 && duplicateIds===0 && pending===0 && awarded===0 && cancelled===0 && parkedOther===0;
  var status=running ? schema.SEASON_STATUS.RUNNING : (complete?schema.SEASON_STATUS.COMPLETE:schema.SEASON_STATUS.INCOMPLETE);
  var issues=[];
  if(records.length!==expected) issues.push('fixture_count');
  if(invalid) issues.push('invalid_record');
  if(duplicateIds) issues.push('duplicate_id');
  if(pending) issues.push('pending');
  if(awarded) issues.push('awarded');
  if(cancelled) issues.push('cancelled');
  if(parkedOther) issues.push('parked_other');
  if(normal!==expected) issues.push('normal_count');
  return {
    status:status,teamCount:teamCount,expectedFixtures:expected,sourceFixtures:records.length,
    normalMatches:normal,awardedParked:awarded,cancelledParked:cancelled,otherParked:parkedOther,
    pendingMatches:pending,duplicateIds:duplicateIds,invalidRecords:invalid,
    usableNormalMatches:complete?normal:0,issues:issues
  };
}

module.exports={seasonStats:seasonStats};
