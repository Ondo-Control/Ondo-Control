'use strict';
var fs=require('fs'), path=require('path');
var identity=require('./identity');

function loadAliases(file){
  var p=file||path.join(__dirname,'team-aliases.json');
  return JSON.parse(fs.readFileSync(p,'utf8'));
}
function buildIndex(data){
  var idx={};
  (data.aliases||[]).forEach(function(a){
    var k=[a.league,a.source,identity.fxNorm(a.name)].join('|');
    if(idx[k] && idx[k]!==a.canonical) throw new Error('Mehrdeutiger Alias: '+k);
    idx[k]=a.canonical;
  });
  return idx;
}
function canonicalTeam(name,league,source,index){
  var idx=index||buildIndex(loadAliases());
  var k=[league,source,identity.fxNorm(name)].join('|');
  return idx[k]||String(name||'').trim();
}
module.exports={loadAliases:loadAliases,buildIndex:buildIndex,canonicalTeam:canonicalTeam};
