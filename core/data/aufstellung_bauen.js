/* ===================================================================================
   ONDO CORE - Aufstellungs-Merkmale zuordnen (Backlog-Punkt 94).
   Eingabe: tm_features.json (aus tm_aufstellung.py: je Spiel Marktwert Startelf/beste Elf,
   mit Vereinsnamen). Ausgabe: core/data/generated/aufstellung.json = NUR unsere berechneten Zahlen
   je Core-Spiel (Schluessel = Spiel-ID), ohne Namen und ohne Rohdaten.
   Zuordnung: gleiche Liga, Datum +-1 Tag, Namensaehnlichkeit >= 0,7 beider Vereine; jedes
   Core-Spiel nur einmal. Nur 1. Ligen der Datenquelle: en.1 es.1 it.1 de.1 fr.1 nl.1 pt.1.
   Aufruf: node core/data/aufstellung_bauen.js <tm_features.json>
   =================================================================================== */
var fs=require('fs'), path=require('path');
var L=require('../model/lauf.js'), ident=require('./identity.js');
var LIGA={ GB1:'en.1', ES1:'es.1', IT1:'it.1', L1:'de.1', FR1:'fr.1', NL1:'nl.1', PO1:'pt.1' };
function lev(a,b){ var m=[],i,j; for(i=0;i<=a.length;i++){ m[i]=[i]; } for(j=1;j<=b.length;j++) m[0][j]=j;
  for(i=1;i<=a.length;i++) for(j=1;j<=b.length;j++) m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1)); return m[a.length][b.length]; }
function tokSim(a,b){ if(a===b) return 1; if(a.length>=4&&b.length>=4&&(a.indexOf(b.slice(0,4))===0||b.indexOf(a.slice(0,4))===0)) return 0.8;
  var r=1-lev(a,b)/Math.max(a.length,b.length); return r>=0.7?r*0.8:0; }
function nameSim(x,y){ var A=ident.fxTokens(x), B=ident.fxTokens(y); if(!A.length||!B.length) return 0; var s=0;
  A.forEach(function(a){ var m=0; B.forEach(function(b){ m=Math.max(m,tokSim(a,b)); }); s+=m; });
  var s2=0; B.forEach(function(b){ var m=0; A.forEach(function(a){ m=Math.max(m,tokSim(a,b)); }); s2+=m; });
  return Math.max(s/A.length, s2/B.length); }
function tag(d,n){ var x=new Date(d+'T12:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
function r4(x){ return Math.round(x*10000)/10000; }

function zuordnen(coreSpiele, tm){
  var idx={}, benutzt={}, out={}, gef=0, tot=0;
  coreSpiele.forEach(function(r){ var k=r.liga+'|'+r.datum; (idx[k]=idx[k]||[]).push(r); });
  tm.forEach(function(t){ var liga=LIGA[t.comp]; if(!liga) return; tot++;
    var best=null, bs=0;
    [0,-1,1].forEach(function(dd){ (idx[liga+'|'+tag(t.date,dd)]||[]).forEach(function(r){
      var s=Math.min(nameSim(t.home,r.heim), nameSim(t.away,r.gast)); if(s>bs){ bs=s; best=r; } }); });
    if(best && bs>=0.7 && !benutzt[best.id]){ benutzt[best.id]=1; gef++;
      var f=function(a,b){ return Math.log(a+1e6)-Math.log(b+1e6); };
      out[best.id]=[ r4(f(t.startH,t.startA)), r4(f(t.bestH,t.bestA)),
        r4((1-Math.min(1,t.startH/Math.max(1,t.bestH)))-(1-Math.min(1,t.startA/Math.max(1,t.bestA)))) ]; } });
  return { werte:out, tm:tot, zugeordnet:gef };
}
module.exports={ zuordnen:zuordnen, LIGA:LIGA };

if(require.main===module){
  var hier=__dirname, eingabe=process.argv[2];
  if(!eingabe){ console.error('Aufruf: node core/data/aufstellung_bauen.js <tm_features.json>'); process.exit(2); }
  var aliases=JSON.parse(fs.readFileSync(path.join(hier,'aliases.json'),'utf8'));
  var bestand=L.bestandLaden(path.join(hier,'generated'), aliases), alle=[];
  Object.keys(bestand.jeLand).forEach(function(l){ bestand.jeLand[l].forEach(function(r){ alle.push(r); }); });
  var e=zuordnen(alle, JSON.parse(fs.readFileSync(eingabe,'utf8')));
  var o={ hinweis:'Eigene berechnete Zahlen, keine Rohdaten. Je Core-Spiel: [dLnStart, dLnBest, dFehlt] = Unterschied (Heim minus Gast) des Log-Marktwerts der Startelf, des Log-Marktwerts der besten Elf, und des Anteils des Marktwerts der besten Elf, der nicht in der Startelf steht. Quelle: Transfermarkt-Datensatz (CC0), Stand 6.7.2026, wird nicht mehr gepflegt. Marktwert eines Spielers = letzter Eintrag streng vor dem Spieltag.',
          schema:1, spalten:['dLnStart','dLnBest','dFehlt'], quelleTm:e.tm, zugeordnet:e.zugeordnet, werte:e.werte };
  fs.writeFileSync(path.join(hier,'generated','aufstellung.json'), JSON.stringify(o)+'\n');
  console.log('TM-Spiele (7 Ligen) '+e.tm+' · zugeordnet '+e.zugeordnet+' · geschrieben');
}
