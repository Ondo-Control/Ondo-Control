/* Fehleranalyse: ein eingepflanzter Fehler wird gefunden, ohne Fehler wird nichts gefunden, ein Fehler nur in einer Haelfte zaehlt nicht. */
var u=require('./umgebung.js'), F=require('../core/model/fehleranalyse.js');
var seed=12345; function zuf(){ seed=(seed*1103515245+12345)%2147483648; return seed/2147483648; }
var P=[0.45,0.27,0.28];
function ziehe(p){ var r=zuf(); return r<p[0]?0:r<p[0]+p[1]?1:2; }
function bauen(n, fehler){
  var z=[]; for(var i=0;i<n;i++){
    var tag=1+(i%360), monat=1+Math.floor(tag/30.5), jahr=i<n/2?2020:2021;
    var datum=jahr+'-'+(monat<10?'0':'')+monat+'-'+(1+(tag%28)<10?'0':'')+(1+(tag%28));
    var f=zuf()*10, wahr=fehler&&fehler(f,datum)?[0.45,0.27+0.12,0.28-0.12]:P;     /* eingepflanzt: bei hohem f mehr Remis */
    z.push({ r:{ datum:datum, liga:'de.1', saison:String(jahr), rolle:'pruefen' }, x:{ f:f, g:zuf() }, y:ziehe(wahr) });
  } return z;
}
var vf=function(){ return P; };
u.block('Eingepflanzter Fehler');
var A=F.analysieren(bauen(6000, function(f){ return f>=8; }), null, { vorhersage:vf });
u.pruef('der Fehler (mehr Remis bei hohem f) wird gefunden', A.funde.some(function(x){ return x.dimension==='f' && x.ergebnis==='Remis' && x.abweichungProzentpunkte>5; }));
u.pruef('Bonferroni-Huerde zaehlt alle Schnitte (>= 60 Pruefungen)', A.geprueft>=60 && A.huerdeZweiseitig>3);
u.block('Gegenproben');
var B=F.analysieren(bauen(6000, null), null, { vorhersage:vf });
u.pruef('ohne Fehler: kein bestaetigter Fund', B.funde.length===0);
var C=F.analysieren(bauen(6000, function(f,d){ return f>=8 && d.slice(0,4)==='2020'; }), null, { vorhersage:vf });
u.pruef('Fehler nur in einer Haelfte: kein bestaetigter Fund (Wiederholung fehlt)', C.funde.filter(function(x){ return x.dimension==='f'; }).length===0);
u.pruef('Bericht enthaelt keine einzelnen Spiele', !/"datum"|"y"/.test(JSON.stringify(A)));
process.exit(u.bilanz()?1:0);
