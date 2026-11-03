'use strict';
const {SCHEMA_VERSION,STATUS}=require('../schema');
const {fxId}=require('../identity');
const {resolveTeam,aliasIndex}=require('../aliases');

function halbzeitLesen(v){
  const m=String(v||'').match(/^\s*(\d+)\s*:\s*(\d+)\s*$/);
  return m?{heim:Number(m[1]),gast:Number(m[2])}:null;
}
function saisonAusDatum(datum){
  const m=String(datum||'').match(/^(\d{4})-(\d{2})-/); if(!m)return '';
  const y=Number(m[1]), mon=Number(m[2]);
  const start=mon>=7?y:y-1;
  return String(start)+'-'+String((start+1)%100).padStart(2,'0');
}
function adaptMatch(match,ctx){
  const idx=ctx.aliasIndex||aliasIndex(ctx.aliases);
  const heim=resolveTeam('espn',ctx.league.id,match.heim,ctx.aliases,idx);
  const gast=resolveTeam('espn',ctx.league.id,match.gast,ctx.aliases,idx);
  const datum=String(match.datum||'');
  const saison=saisonAusDatum(datum);
  const normal=String(match.status||'')==='FT' && match.beleg && match.beleg.completed===true &&
    String(match.beleg.statusTyp||'')==='STATUS_FULL_TIME' && match.verlaengerungGespielt!==true;
  let status,grund=null,tore=null;
  if(normal && Number.isInteger(Number(match.torHeim)) && Number(match.torHeim)>=0 && Number.isInteger(Number(match.torGast)) && Number(match.torGast)>=0){
    status=STATUS.NORMAL; tore={heim:Number(match.torHeim),gast:Number(match.torGast)};
  }else if(String(match.status||'')!=='FT' || !(match.beleg&&match.beleg.completed===true)){
    status=STATUS.OFFEN;
  }else{
    status=STATUS.GEPARKT;
    grund=match.verlaengerungGespielt===true?'verlaengerung':'abschluss_nicht_normal_belegt';
  }
  if(!/^\d{4}-\d{2}-\d{2}$/.test(datum)){ status=STATUS.GEPARKT; grund='datum_unlesbar'; }
  if(!heim.key||!gast.key||heim.key===gast.key){ status=STATUS.GEPARKT; grund='teamidentitaet_unbrauchbar'; }
  return {
    schemaVersion:SCHEMA_VERSION,spielId:fxId(datum,heim.key,gast.key),datum,liga:ctx.league.id,saison,
    heim,gast,tore,halbzeit:halbzeitLesen(match.halbzeit),status,parkGrund:grund,
    quelle:'espn',
    beleg:[{quelle:'espn',ref:String(match.providerEventId||''),competition:String(match.providerCompetitionSlug||''),
      statusTyp:String(match.beleg&&match.beleg.statusTyp||''),fetchedAt:String(match.fetchedAt||'')}]
  };
}
function adaptArchive(json,ctx){
  const games=(json&&Array.isArray(json.spiele))?json.spiele:[];
  const idx=aliasIndex(ctx.aliases);
  return games.filter(g=>String(g.providerCompetitionSlug||'')===ctx.league.espn)
    .map(g=>adaptMatch(g,Object.assign({},ctx,{aliasIndex:idx})));
}
module.exports={halbzeitLesen,saisonAusDatum,adaptMatch,adaptArchive};
