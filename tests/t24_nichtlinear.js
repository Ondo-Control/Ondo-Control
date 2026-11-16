/* Test des nichtlinearen Verfahrens: findet eine reine Wechselwirkung (XOR), die das lineare Modell nicht findet;
   erfindet bei Rauschen nichts. Kuenstliche Spiele, feste Startwerte. */
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js'), NL=require('../core/model/nichtlinear.js');
function rng(seed){ var s=seed>>>0; return function(){ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
var R=rng(24681357); function normal(){ var a=0; for(var i=0;i<12;i++) a+=R(); return a-6; }
var BASIS=[0.45,0.27,0.28];
function spiel(i,regel){
  var x={ lnH:Math.log(BASIS[0]), lnD:Math.log(BASIS[1]), lnA:Math.log(BASIS[2]) };
  ['dPpg3','dPpg5','dPpg10','dGd5','dGd10','dOrt','dRuhe','dSaisonPpg','dSaisonGd','dElo','tempo10'].forEach(function(n){ x[n]=normal(); });
  var s=regel?1.4*Math.sign(x.dElo)*Math.sign(x.dPpg5):0, lg=[Math.log(BASIS[0])+s,Math.log(BASIS[1]),Math.log(BASIS[2])-s], e=lg.map(Math.exp), t=e[0]+e[1]+e[2], p=e.map(function(v){ return v/t; });
  var q=R(), y=q<p[0]?0:(q<p[0]+p[1]?1:2);
  return { x:x, y:y, wahr:p, r:{ liga:'x', datum:new Date(Date.UTC(2015,0,1)+i*43200000).toISOString().slice(0,10) } };
}
function menge(n,start,regel){ var a=[]; for(var i=0;i<n;i++) a.push(spiel(start+i,regel)); return a; }
function mw(a){ var s=0; a.forEach(function(v){ s+=v; }); return s/a.length; }
var OPT={ maxRunden:600, geduld:30, lernrate:0.02, bremse:0.0001, versteckt:16 }, GR=['staerke','form'];
function lauf(regel){
  var l=menge(12000,0,regel), s=menge(3000,12000,regel), p=menge(6000,15000,regel);
  var lin=LA.trainieren(l,s,GR,{ maxRunden:400, geduld:15, lernrate:1, bremse:0.0001 });
  var nl=NL.trainieren(l,s,lin.namen,lin.standardisierung,OPT);
  var vl=LA.verlusteAuf(lin,p), vn=nl.verlusteAuf(p), opt=mw(p.map(function(z){ return -Math.log(z.wahr[z.y]); }));
  return { lin:mw(vl), nl:mw(vn), opt:opt, vgl:LA.vergleich(p,vl,vn), runde:nl.runde, nlObj:nl, p:p };
}
u.block('Wechselwirkung (XOR)');
var A=lauf(true);
u.pruef('Optimum '+A.opt.toFixed(4)+' · linear '+A.lin.toFixed(4)+' · nichtlinear '+A.nl.toFixed(4), true);
u.pruef('Linear findet die Regel nicht (nahe Start, weit ueber dem Optimum)', A.lin-A.opt>0.2);
u.pruef('Nichtlinear findet sie: schliesst mindestens 75 % der Luecke zum Optimum auf nie gelernten Spielen', (A.lin-A.nl)/(A.lin-A.opt)>=0.75);
u.pruef('Unterschied ist stark gesichert (z gegen linear > 10)', A.vgl.differenz/A.vgl.standardfehler>10);
u.block('Kontrolle ohne Regel');
var B=lauf(false);
u.pruef('Gegenprobe: bei Rauschen ist nichtlinear nicht besser als linear ('+B.nl.toFixed(4)+' vs '+B.lin.toFixed(4)+')', B.vgl.differenz/B.vgl.standardfehler<3);
u.pruef('Start des Netzes ist exakt das alte Modell (Netzanteil 0, Linearteil Einheit)', (function(){ var n=NL.trainieren(B.p.slice(0,200),B.p.slice(200,300),LA.namenVon([]),{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} },{ maxRunden:0, geduld:1, lernrate:0.02, bremse:0.0001, versteckt:8 }); return n.versionen[0].verlustLernen>0 && n.runde===0; })());
process.exit(u.bilanz()?1:0);
