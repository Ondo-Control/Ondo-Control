'use strict';
const {fxNorm,fxTokens}=require('./identity');

function aliasIndex(table){
  const idx={};
  for(const e of (table&&table.entries)||[]){
    for(const source of ['openfootball','espn']){
      for(const name of e[source]||[]){
        idx[source+'|'+e.league+'|'+fxNorm(name)]={key:e.canonicalKey,name:e.canonicalName};
      }
    }
  }
  return idx;
}
function standardKey(name){ return fxTokens(name).slice().sort().join('_'); }
function resolveTeam(source,league,name,table,index){
  index=index||aliasIndex(table);
  const found=index[source+'|'+league+'|'+fxNorm(name)];
  if(found) return {name:found.name,key:found.key,sourceName:String(name||''),alias:true};
  return {name:String(name||'').trim(),key:standardKey(name),sourceName:String(name||''),alias:false};
}
function sameTeam(a,b){ return !!(a&&b&&a.key&&a.key===b.key); }
module.exports={aliasIndex,standardKey,resolveTeam,sameTeam};
