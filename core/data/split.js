'use strict';
function seasonCmp(a,b){ return String(a).localeCompare(String(b)); }
function splitFuerSaison(league,season,seasonStatus,config){
  if(seasonCmp(season,config.holdoutFromSeason)>=0) return 'holdout';
  const l=(config.leagues||{})[league]; if(!l) return 'nicht_verwendbar';
  if((l.pruefen||[]).includes(season)) return seasonStatus==='vollstaendig'?'pruefen':'nicht_verwendbar';
  if(seasonCmp(season,l.lernenThrough)<=0) return seasonStatus==='vollstaendig'?'lernen':'nicht_verwendbar';
  return 'nicht_verwendbar';
}
function darfLernen(split){ return split==='lernen'; }
module.exports={splitFuerSaison,darfLernen};
