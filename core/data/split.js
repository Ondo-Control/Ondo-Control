'use strict';
function seasonCmp(a,b){ return String(a).localeCompare(String(b)); }
function bucketForSeason(season,cfg){
  if((cfg.finalHoldout.seasons||[]).indexOf(season)>=0) return 'holdout';
  if((cfg.validation.seasons||[]).indexOf(season)>=0) return 'validation';
  if(seasonCmp(season,cfg.learning.throughSeason)<=0) return 'learning';
  if(cfg.postHoldout && seasonCmp(season,cfg.postHoldout.fromSeason)>=0 && seasonCmp(season,cfg.postHoldout.throughSeason)<=0) return 'post_holdout';
  if(seasonCmp(season,cfg.runningOrFuture.fromSeason)>=0) return 'running_or_future';
  return 'unassigned';
}
function mayTrain(season,cfg,seasonStatus){
  return seasonStatus==='vollstaendig' && bucketForSeason(season,cfg)==='learning';
}
module.exports={bucketForSeason:bucketForSeason,mayTrain:mayTrain};
