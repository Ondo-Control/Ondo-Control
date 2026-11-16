/* (t23) Merkmalswahl auf kuenstlichen Spielen. Vorlage t22: Lerntest mit bewusst eingebauter versteckter Regel (Anregung ChatGPT, 16.11.2026).
   Kuenstliche Spiele: das Ergebnis haengt nach einer FESTEN Regel von dElo und dPpg5 ab. Die Regel kennt der Core nicht.
   Frage: Findet trainieren() sie durch wiederholte Runden und uebertraegt sie auf Spiele, die nie zum Lernen dienten?
   Kontrolle: bei gemischten Ergebnissen (keine Regel) darf KEIN Fortschritt auf den Pruefspielen entstehen. */
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js'), LL=require('../core/model/lagen_lauf.js');
function rng(seed){ var s=seed>>>0; return function(){ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
function normal(r){ var a=0; for(var i=0;i<12;i++) a+=r(); return a-6; }
var R=rng(20261116), SCHRITT=function(){ return normal(R); };
var BASIS=[0.45,0.27,0.28];
function spiel(){
  var x={ lnH:Math.log(BASIS[0]), lnD:Math.log(BASIS[1]), lnA:Math.log(BASIS[2]) };
  ['dPpg3','dPpg5','dPpg10','dGd5','dGd10','dOrt','dRuhe','dSaisonPpg','dSaisonGd','dElo','tempo10'].forEach(function(n){ x[n]=SCHRITT(); });
  var s=1.1*x.dElo+0.6*x.dPpg5, lg=[Math.log(BASIS[0])+s, Math.log(BASIS[1]), Math.log(BASIS[2])-s], e=lg.map(Math.exp), t=e[0]+e[1]+e[2], p=e.map(function(v){ return v/t; });
  var u1=R(), y=u1<p[0]?0:(u1<p[0]+p[1]?1:2);
  return { x:x, y:y, wahr:p, r:{ datum:'2020-01-01' } };
}
function menge(n){ var a=[]; for(var i=0;i<n;i++) a.push(spiel()); return a; }
function mittel(a){ var s=0; a.forEach(function(v){ s+=v; }); return s/a.length; }

function datiere(a,start){ return a.map(function(z,i){ var d=new Date(Date.UTC(2015,0,1)+(start+i)*86400000*0.5); z.r={ datum:d.toISOString().slice(0,10), rolle:'x' }; return z; }); }
var lernen=datiere(menge(8000),0), pruefen=datiere(menge(4000),8000);
var OPT=LL.TRAINING;
var w=LL.waehle('kuenstlich', lernen, pruefen, LA.GRUPPEN, OPT);
u.block('Merkmalswahl ohne Vorgabe (alle sechs Gruppen stehen zur Wahl)');
u.pruef('Wahl enthaelt "staerke" (dElo steckt in der Regel): '+JSON.stringify(w.gewaehlt), w.gewaehlt.indexOf('staerke')>=0);
u.pruef('Wahl enthaelt "form" (dPpg5 steckt in der Regel)', w.gewaehlt.indexOf('form')>=0);
u.pruef('Gegenprobe: reine Rauschgruppen (ort, ruhe, saison, tempo) werden NICHT gewaehlt', ['ort','ruhe','saison','tempo'].every(function(g){ return w.gewaehlt.indexOf(g)<0; }));
u.pruef('Hat auf nie gelernten Spielen fast das Optimum erreicht', w.pruefen.ende-mittel(pruefen.map(function(z){ return -Math.log(z.wahr[z.y]); }))<0.02);
process.exit(u.bilanz()?1:0);
