'use strict';

var MATCH_STATUS={ NORMAL:'normal', PARKED:'parked', PENDING:'pending' };
var SEASON_STATUS={ COMPLETE:'vollstaendig', INCOMPLETE:'unvollstaendig', RUNNING:'laufend' };

function scorePair(v){
  if(!Array.isArray(v) || v.length<2) return null;
  if(v[0]===null || v[0]===undefined || v[1]===null || v[1]===undefined) return null;
  if(String(v[0]).trim()==='' || String(v[1]).trim()==='') return null;
  var h=Number(v[0]), a=Number(v[1]);
  return Number.isInteger(h) && Number.isInteger(a) && h>=0 && a>=0 ? {home:h,away:a} : null;
}

function makeMatchRecord(x){
  var r={
    id:String(x.id||''), date:String(x.date||''), league:String(x.league||''), season:String(x.season||''),
    home:String(x.home||''), away:String(x.away||''),
    goals:x.goals||null, halftime:x.halftime||null,
    status:String(x.status||MATCH_STATUS.PENDING), parkReason:x.parkReason||null,
    source:String(x.source||''), evidence:Array.isArray(x.evidence)?x.evidence:[]
  };
  return r;
}

function validateShape(r){
  var errors=[];
  ['id','date','league','season','home','away','status','source'].forEach(function(k){ if(!r[k]) errors.push('missing:'+k); });
  if(r.home && r.away && r.home===r.away) errors.push('same_team');
  if(r.goals && (!Number.isInteger(r.goals.home)||!Number.isInteger(r.goals.away)||r.goals.home<0||r.goals.away<0)) errors.push('bad_goals');
  if(r.halftime && (!Number.isInteger(r.halftime.home)||!Number.isInteger(r.halftime.away)||r.halftime.home<0||r.halftime.away<0)) errors.push('bad_halftime');
  if([MATCH_STATUS.NORMAL,MATCH_STATUS.PARKED,MATCH_STATUS.PENDING].indexOf(r.status)<0) errors.push('bad_status');
  return errors;
}

module.exports={MATCH_STATUS:MATCH_STATUS,SEASON_STATUS:SEASON_STATUS,scorePair:scorePair,makeMatchRecord:makeMatchRecord,validateShape:validateShape};
