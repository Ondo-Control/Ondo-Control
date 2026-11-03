'use strict';
const {STATUS,pruefeMatchRecord}=require('./schema');

function seasonStatus(records,opt){
  opt=opt||{};
  const heute=String(opt.heute||new Date().toISOString().slice(0,10));
  const teams=new Set(); const paare=new Set(); let duplicate=0,self=0,shape=0;
  let normal=0,offen=0,geparkt=0; let hatZukunft=false;
  for(const r of records){
    if(pruefeMatchRecord(r).length) shape++;
    if(r.heim&&r.heim.key) teams.add(r.heim.key); if(r.gast&&r.gast.key) teams.add(r.gast.key);
    const pk=(r.heim&&r.heim.key)+'>'+ (r.gast&&r.gast.key);
    if(r.heim&&r.gast&&r.heim.key===r.gast.key) self++;
    if(paare.has(pk)) duplicate++; else paare.add(pk);
    if(r.status===STATUS.NORMAL) normal++; else if(r.status===STATUS.OFFEN) offen++; else geparkt++;
    if(r.datum>=heute && r.status!==STATUS.NORMAL) hatZukunft=true;
  }
  const teamCount=teams.size;
  const expectedTeams=Number(opt.expectedTeams)||teamCount;
  const erwartet=expectedTeams>1?expectedTeams*(expectedTeams-1):0;
  let status='unvollstaendig';
  if(shape===0&&self===0&&duplicate===0&&teamCount===expectedTeams&&records.length===erwartet&&normal===erwartet&&offen===0&&geparkt===0) status='vollstaendig';
  else if(hatZukunft) status='laufend';
  return {status,spiele:records.length,normal,offen,geparkt,teams:teamCount,erwarteteTeams:expectedTeams,erwartet,duplicate,self,shapeFehler:shape,lernfaehig:status==='vollstaendig'};
}
module.exports={seasonStatus};
