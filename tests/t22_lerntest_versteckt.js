/* Lerntest mit bewusst eingebauter versteckter Regel (Anregung ChatGPT, 16.11.2026).
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
var lernen=menge(6000), stopp=menge(1500), pruefen=menge(3000), OPT=LL.TRAINING;
var optimal=mittel(pruefen.map(function(z){ return -Math.log(z.wahr[z.y]); }));
var l0=mittel(LA.verlusteAuf({ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} }, gewichte:[[1,0,0],[0,1,0],[0,0,1]] }, pruefen));
var m=LA.trainieren(lernen, stopp, ['staerke','form'], OPT), gelernt=mittel(LA.verlusteAuf(m, pruefen));
u.block('Versteckte Regel');
u.pruef('Start (L0) liegt deutlich ueber dem Optimum ('+l0.toFixed(4)+' vs '+optimal.toFixed(4)+')', l0-optimal>0.05);
u.pruef('Core lernt die Regel: Fehler auf nie gelernten Spielen fast am Optimum ('+gelernt.toFixed(4)+' vs '+optimal.toFixed(4)+')', gelernt-optimal<0.01);
u.pruef('Verbesserung durch wiederholte Runden belegt (Runden: '+m.runde+')', m.runde>=5 && gelernt<l0-0.05);
u.block('Kontrolle ohne Regel');
function mische(a){ var ys=a.map(function(z){ return z.y; }); for(var i=ys.length-1;i>0;i--){ var j=Math.floor(R()*(i+1)); var t=ys[i]; ys[i]=ys[j]; ys[j]=t; } return a.map(function(z,i){ return { x:z.x, y:ys[i], wahr:z.wahr, r:z.r }; }); }
var lk=mische(lernen), sk=mische(stopp), pk=mische(pruefen);
var m2=LA.trainieren(lk, sk, ['staerke','form'], OPT), g2=mittel(LA.verlusteAuf(m2, pk));
var mb=LA.trainieren(lk, sk, [], OPT), gb=mittel(LA.verlusteAuf(mb, pk));      /* nur Kalibrierung, gleiche Daten */
u.pruef('Gegenprobe: ohne Regel bringen die Merkmale nichts ('+g2.toFixed(4)+' mit Merkmalen vs '+gb.toFixed(4)+' nur kalibriert)', g2>=gb-0.003);
process.exit(u.bilanz()?1:0);
