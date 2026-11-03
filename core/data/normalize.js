'use strict';
const {STATUS}=require('./schema');

function scoreKey(r){ return r&&r.tore ? r.tore.heim+':'+r.tore.gast : ''; }
function sourceRank(q){ return q==='espn'?0:1; }
function dedupliziere(records){
  const gruppen=new Map();
  for(const r of records){
    const k=[r.liga,r.saison,r.spielId].join('|');
    if(!gruppen.has(k)) gruppen.set(k,[]);
    gruppen.get(k).push(r);
  }
  const out=[];
  for(const list of gruppen.values()){
    list.sort((a,b)=>sourceRank(a.quelle)-sourceRank(b.quelle));
    const normals=list.filter(r=>r.status===STATUS.NORMAL);
    let pick=list[0];
    if(normals.length){
      const scores=new Set(normals.map(scoreKey));
      pick=Object.assign({},normals[0]);
      if(scores.size>1){
        pick.status=STATUS.GEPARKT; pick.parkGrund='quellenkonflikt'; pick.tore=null; pick.halbzeit=null;
      }
    }
    const belege=[]; const seen=new Set();
    for(const r of list){
      for(const b of r.beleg||[]){
        const k=JSON.stringify(b); if(!seen.has(k)){seen.add(k);belege.push(b);}
      }
    }
    pick=Object.assign({},pick,{beleg:belege});
    out.push(pick);
  }
  return out.sort((a,b)=>a.datum.localeCompare(b.datum)||a.spielId.localeCompare(b.spielId));
}
module.exports={dedupliziere};
