'use strict';
const {SCHEMA_VERSION,STATUS}=require('../schema');
const {fxId}=require('../identity');
const {resolveTeam,aliasIndex}=require('../aliases');

function numerischPaar(v){
  return Array.isArray(v)&&v.length>=2&&Number.isInteger(Number(v[0]))&&Number(v[0])>=0&&Number.isInteger(Number(v[1]))&&Number(v[1])>=0;
}
function scoreLesen(match){
  const s=match&&match.score;
  if(s===undefined||s===null) return {status:STATUS.OFFEN,tore:null,halbzeit:null,grund:null,art:'kein_score'};
  if(Array.isArray(s)){
    if(!numerischPaar(s)) return {status:STATUS.GEPARKT,tore:null,halbzeit:null,grund:'score_unlesbar',art:'array'};
    return {status:STATUS.NORMAL,tore:{heim:Number(s[0]),gast:Number(s[1])},halbzeit:null,grund:null,art:'array'};
  }
  if(typeof s==='object'){
    const sonder=Object.keys(s).filter(k=>k!=='ft'&&k!=='ht');
    if(sonder.length) return {status:STATUS.GEPARKT,tore:null,halbzeit:null,grund:'sonderformat_'+sonder.sort().join('_'),art:'objekt'};
    if(!numerischPaar(s.ft)) return {status:STATUS.OFFEN,tore:null,halbzeit:null,grund:null,art:'objekt_ohne_ft'};
    const ht=numerischPaar(s.ht)?{heim:Number(s.ht[0]),gast:Number(s.ht[1])}:null;
    return {status:STATUS.NORMAL,tore:{heim:Number(s.ft[0]),gast:Number(s.ft[1])},halbzeit:ht,grund:null,art:'ft'};
  }
  return {status:STATUS.GEPARKT,tore:null,halbzeit:null,grund:'score_unbekannt',art:typeof s};
}

function adaptMatch(match,ctx){
  const idx=ctx.aliasIndex||aliasIndex(ctx.aliases);
  const heim=resolveTeam('openfootball',ctx.league.id,match.team1,ctx.aliases,idx);
  const gast=resolveTeam('openfootball',ctx.league.id,match.team2,ctx.aliases,idx);
  const score=scoreLesen(match);
  const datum=String(match.date||'');
  let status=score.status, grund=score.grund;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(datum)){ status=STATUS.GEPARKT; grund='datum_unlesbar'; }
  if(!heim.key||!gast.key||heim.key===gast.key){ status=STATUS.GEPARKT; grund='teamidentitaet_unbrauchbar'; }
  const spielId=fxId(datum,heim.key,gast.key);
  return {
    schemaVersion:SCHEMA_VERSION,spielId,datum,liga:ctx.league.id,saison:ctx.season,
    heim,gast,tore:score.tore,halbzeit:score.halbzeit,status,parkGrund:grund,
    quelle:'openfootball',
    beleg:[{quelle:'openfootball',ref:ctx.sourcePath,index:ctx.index,round:match.round||'',scoreArt:score.art}]
  };
}
function adaptFile(json,ctx){
  const matches=(json&&Array.isArray(json.matches))?json.matches:[];
  const idx=aliasIndex(ctx.aliases);
  return matches.map((m,i)=>adaptMatch(m,Object.assign({},ctx,{index:i,aliasIndex:idx})));
}
module.exports={scoreLesen,adaptMatch,adaptFile};
