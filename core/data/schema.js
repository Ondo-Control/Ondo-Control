'use strict';

const SCHEMA_VERSION = 1;
const STATUS = Object.freeze({ NORMAL:'normal', OFFEN:'offen', GEPARKT:'geparkt' });

function istIsoDatum(v){ return /^\d{4}-\d{2}-\d{2}$/.test(String(v||'')); }
function istTor(v){ return Number.isInteger(v) && v>=0; }

function pruefeMatchRecord(r){
  const fehler=[];
  if(!r || typeof r!=='object') return ['record_kein_objekt'];
  if(r.schemaVersion!==SCHEMA_VERSION) fehler.push('schemaVersion');
  if(!/^fx[a-z0-9_]+$/.test(String(r.spielId||''))) fehler.push('spielId');
  if(!istIsoDatum(r.datum)) fehler.push('datum');
  if(!r.liga) fehler.push('liga');
  if(!/^\d{4}-\d{2}$/.test(String(r.saison||''))) fehler.push('saison');
  for(const k of ['heim','gast']){
    const t=r[k];
    if(!t || !t.name || !t.key) fehler.push(k);
  }
  if(!Object.values(STATUS).includes(r.status)) fehler.push('status');
  if(r.status===STATUS.NORMAL){
    if(!r.tore || !istTor(r.tore.heim) || !istTor(r.tore.gast)) fehler.push('tore');
  }
  if(r.halbzeit!==null && r.halbzeit!==undefined){
    if(!istTor(r.halbzeit.heim) || !istTor(r.halbzeit.gast)) fehler.push('halbzeit');
  }
  if(!r.quelle) fehler.push('quelle');
  if(!Array.isArray(r.beleg) || !r.beleg.length) fehler.push('beleg');
  return fehler;
}

module.exports={SCHEMA_VERSION,STATUS,pruefeMatchRecord};
