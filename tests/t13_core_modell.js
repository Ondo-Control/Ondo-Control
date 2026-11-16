/* ===================================================================================
   t13 - das eigene Rechenmodell des Ondo Core (Backlog-Punkt 94, Teil 2).
   A  Rechnen: Wahrscheinlichkeiten gegen eine unabhaengige zweite Rechnung.
   B  Lernen: Richtung der Anpassung, Saison- und Ligawechsel, neue Mannschaft.
   C  Kein Blick in die Zukunft: eine Vorhersage haengt nie von spaeteren Spielen und nie
      vom eigenen Ergebnis ab.
   D  Die Holdout-Saisons beeinflussen die Wahl des Kandidaten nicht.
   E  Kennzahlen, Vorsprung, Aussagen wie in der App.
   F  Erfundene Liga mit bekannter Wahrheit: das Modell findet die starke Mannschaft.
   G  Die im Repo liegenden Dateien: stimmen mit einer Neuberechnung ueberein, Beschluss
      erlaubt kein echtes Geld, solange keine Quoten geprueft sind.
   Laedt beta.html nicht.
   =================================================================================== */
var fs=require('fs'), path=require('path');
var u=require('./umgebung.js');
var P=require('../core/model/poisson.js'), L=require('../core/model/lauf.js');
var ident=require('../core/data/identity.js');
var REPO=path.join(__dirname,'..');
function nah(a,b,eps){ return Math.abs(a-b)<=(eps||1e-9); }
function gleich(a,b){ return JSON.stringify(a)===JSON.stringify(b); }
var PAR={ startNiveau:0.18, startHeim:0.25, lernrateLiga:0.002, stufenSprung:0.25, neuStart:-0.15,
          lernrate:0.05, saisonBehalt:0.8, dc:0 };
function sp(liga, saison, datum, h, g, th, tg, rolle){
  return { id:'fx'+datum.replace(/-/g,'')+'_'+h+'_'+g, liga:liga, saison:saison, datum:datum, heimKey:h, gastKey:g,
           th:th, tg:tg, rolle:rolle||'lernen', zusatz:false };
}

/* ═══ A. Rechnen ═══ */
u.block('A. Wahrscheinlichkeiten');
function zweiteRechnung(lh, la){                    /* bewusst anders geschrieben als poisson.js */
  function fak(n){ var f=1; for(var i=2;i<=n;i++) f*=i; return f; }
  function po(k,l){ return Math.pow(l,k)*Math.exp(-l)/fak(k); }
  var r={ h:0, d:0, a:0, o:0, b:0 };
  for(var x=0;x<=25;x++) for(var y=0;y<=25;y++){ var p=po(x,lh)*po(y,la);
    if(x>y) r.h+=p; else if(x===y) r.d+=p; else r.a+=p; if(x+y>=3) r.o+=p; if(x>=1&&y>=1) r.b+=p; }
  return r;
}
var abw=0;
[[1.5,1.1],[0.4,0.3],[2.8,0.6],[1,1],[3.5,2.5],[0.9,2.2]].forEach(function(l){
  var p=P.wahrscheinlichkeiten(l[0],l[1],0), z=zweiteRechnung(l[0],l[1]);
  if(!nah(p.sieg_heim,z.h,1e-5)||!nah(p.remis,z.d,1e-5)||!nah(p.sieg_gast,z.a,1e-5)||!nah(p.ueber,z.o,1e-5)||!nah(p.btts_ja,z.b,1e-5)) abw++;
});
u.pruef('sechs Torerwartungen stimmen mit der zweiten Rechnung ueberein', abw===0, abw+' Abweichungen');
var p0=P.wahrscheinlichkeiten(1.4,1.4,0), pd=P.wahrscheinlichkeiten(1.4,1.4,-0.06);
u.pruef('1X2, Ueber/Unter und Beide-treffen ergeben je 100 %', nah(p0.sieg_heim+p0.remis+p0.sieg_gast,1) && nah(p0.ueber+p0.unter,1) && nah(p0.btts_ja+p0.btts_nein,1));
u.pruef('gleiche Torerwartung → Heim- und Gastsieg gleich wahrscheinlich', nah(p0.sieg_heim,p0.sieg_gast));
u.pruef('Korrektur fuer torarme Spiele erhoeht das Remis', pd.remis>p0.remis+0.005);
u.pruef('Korrektur veraendert Ueber/Unter nicht', nah(pd.ueber,p0.ueber,1e-9));
u.pruef('mehr erwartete Heimtore → Heimsieg wahrscheinlicher', P.wahrscheinlichkeiten(2,1,0).sieg_heim>P.wahrscheinlichkeiten(1.5,1,0).sieg_heim);
u.pruef('unsinnige Eingaben werden begrenzt (keine NaN)', (function(){ var x=P.wahrscheinlichkeiten(0,99,0); return x.sieg_gast>0.9 && x.sieg_gast<=1 && !isNaN(x.remis); })());

/* ═══ B. Lernen ═══ */
u.block('B. Lernen');
var z=P.neuerZustand();
var v1=P.schritt(z, sp('de.1','2020-21','2020-09-01','a','b',4,0), PAR);
u.pruef('erstes Spiel: beide bei 0, Heim leicht vorn', nah(v1.lh, Math.exp(0.43)) && nah(v1.la, Math.exp(0.18)) && v1.p.sieg_heim>v1.p.sieg_gast);
u.pruef('nach 4:0: Heim-Angriff und Heim-Abwehr steigen, Gast sinkt', z.teams.a.a>0 && z.teams.a.d>0 && z.teams.b.a<0 && z.teams.b.d<0);
u.pruef('Anpassung = Lernrate x (Tore - Erwartung)', nah(z.teams.a.a, 0.05*(4-Math.exp(0.43))) && nah(z.teams.b.d, -0.05*(4-Math.exp(0.43))));
var kopie=JSON.stringify(z);
P.schritt(z, sp('de.1','2020-21','2020-09-08','a','b',9,9), PAR, false);
u.pruef('lernen=false veraendert die Staerken nicht', (function(){ var j=JSON.parse(kopie); return nah(z.teams.a.a,j.teams.a.a) && nah(z.teams.b.d,j.teams.b.d) && z.teams.a.spiele===1; })());
var zD=P.neuerZustand(), zE=P.neuerZustand();
P.schritt(zD, sp('de.1','2020-21','2020-09-01','a','b',6,0), PAR); P.schritt(zE, sp('de.1','2020-21','2020-09-01','a','b',11,0), PAR);
u.pruef('Kantersieg zaehlt beim Lernen hoechstens als 6 Tore', nah(zD.teams.a.a, zE.teams.a.a));
var vorher=z.teams.a.a;
P.schritt(z, sp('de.1','2021-22','2021-08-15','a','c',1,1), PAR, false);
u.pruef('neue Saison zieht die Staerke zur Mitte (Faktor 0,8)', nah(z.teams.a.a, vorher*0.8));
u.pruef('spaeter dazukommende Mannschaft startet schwaecher (-0,15)', nah(z.teams.c.a,-0.15) && nah(z.teams.c.d,-0.15));
var bVor=z.teams.b.a;
P.schritt(z, sp('de.2','2021-22','2021-08-16','b','d',0,0), PAR, false);
u.pruef('Abstieg in eine tiefere Liga: Zuschlag 0,25 (nach Saisonfaktor)', nah(z.teams.b.a, (bVor+0.25)*0.8) && z.teams.b.liga==='de.2');
u.pruef('in einer fuer das Modell neuen Liga starten alle bei 0', nah(z.teams.d.a,0));

/* ═══ C. Kein Blick in die Zukunft ═══ */
u.block('C. Kein Blick in die Zukunft');
function liste(n){ var a=[], T=['t0','t1','t2','t3','t4','t5'];
  for(var i=0;i<n;i++){ var h=T[i%6], g=T[(i*5+1+Math.floor(i/6))%6]; if(h===g) g=T[(i+3)%6];
    a.push(sp('de.1', i<60?'2020-21':'2021-22', (i<60?'2020-':'2021-')+('0'+(1+Math.floor(i%60/6))).slice(-2)+'-'+('0'+(1+i%28)).slice(-2), h, g, (i*7)%4, (i*3)%3, i<60?'lernen':'holdout')); }
  return a.sort(function(x,y){ return x.datum<y.datum?-1:x.datum>y.datum?1:0; }); }
var voll=liste(120), kurz=voll.slice(0,70);
var dv=L.durchlauf({ jeLand:{ de:voll } }, PAR), dk=L.durchlauf({ jeLand:{ de:kurz } }, PAR);
u.pruef('die ersten 70 Vorhersagen sind gleich, ob 50 spaetere Spiele existieren oder nicht',
  gleich(dv.zeilen.slice(0,70).map(function(r){ return r.p; }), dk.zeilen.map(function(r){ return r.p; })));
var anders=JSON.parse(JSON.stringify(voll)); anders[69].th=9; anders[69].tg=0;
var da=L.durchlauf({ jeLand:{ de:anders } }, PAR);
u.pruef('das eigene Ergebnis aendert die eigene Vorhersage nicht', gleich(da.zeilen[69].p, dv.zeilen[69].p) && gleich(da.zeilen[69].basis, dv.zeilen[69].basis));
u.pruef('es aendert aber spaetere Vorhersagen (es wird wirklich gelernt)',
  !gleich(da.zeilen.slice(70).map(function(r){ return r.p; }), dv.zeilen.slice(70).map(function(r){ return r.p; })));
u.pruef('Grundquote des ersten Spiels = Startvorrat (45 / 26 / 29 %)', nah(dv.zeilen[0].basis.sieg_heim,0.45) && nah(dv.zeilen[0].basis.remis,0.26) && nah(dv.zeilen[0].basis.ueber,0.5));
u.pruef('ohneHoldout ueberspringt genau die Holdout-Spiele', L.durchlauf({ jeLand:{ de:voll } }, PAR, { ohneHoldout:true }).zeilen.length===60);

/* ═══ D. Holdout beeinflusst die Wahl nicht ═══ */
u.block('D. Wahl ohne Holdout');
var KAND={ festgelegt:'x', fest:{ startNiveau:0.18, startHeim:0.25, lernrateLiga:0.002, stufenSprung:0.25, neuStart:-0.15 },
  kandidaten:[{name:'A',lernrate:0.02,saisonBehalt:1,dc:0},{name:'B',lernrate:0.08,saisonBehalt:0.8,dc:0},{name:'C',lernrate:0.05,saisonBehalt:1,dc:-0.06}],
  pruefregeln:{ haupttest:'t', bootstrapZiehungen:200, bootstrapStartwert:7, mindestSpieleBelastbar:5, gegenMarkt:'keine Quoten' } };
function bestand3(holdoutTore){ var a=liste(180).map(function(r,i){ var x=Object.assign({},r);
    x.saison = i<60?'2020-21':i<120?'2021-22':'2022-23'; x.datum=(2020+Math.floor(i/60))+r.datum.slice(4);
    x.rolle = i<60?'lernen':i<120?'holdout':'pruefen';
    if(x.rolle==='holdout' && holdoutTore){ x.th=holdoutTore[0]; x.tg=holdoutTore[1]; }
    return x; }).sort(function(x,y){ return x.datum<y.datum?-1:x.datum>y.datum?1:0; });
  return { jeLand:{ de:a }, namen:{ de:{} }, heute:'2022-12-01' }; }
var l1=L.lauf(bestand3(null), KAND), l2=L.lauf(bestand3([7,0]), KAND);
u.pruef('Wahltabelle identisch, obwohl alle Holdout-Ergebnisse veraendert wurden', gleich(l1.bericht.wahl, l2.bericht.wahl));
u.pruef('der Abschluss dagegen aendert sich (Holdout wird dort wirklich gemessen)', !gleich(l1.bericht.abschluss.holdout.maerkte, l2.bericht.abschluss.holdout.maerkte));
u.pruef('gewaehlt ist der Kandidat mit dem kleinsten Log-Loss der Tabelle', (function(){ var t=l1.bericht.wahl.kandidaten.slice().sort(function(a,b){ return a.logLoss1x2-b.logLoss1x2; }); return t[0].name===l1.bericht.wahl.gewaehlt; })());
u.pruef('zweimal derselbe Lauf → dasselbe Ergebnis', gleich(L.lauf(bestand3(null), KAND), l1));
u.pruef('ohne Quoten: gegen den Markt nicht pruefbar, kein echtes Geld',
  l1.bericht.beschluss.gegenMarkt.urteil==='nicht_pruefbar' && l1.bericht.beschluss.echtesGeld===false && l1.bericht.beschluss.einsatz==='nur_virtuell');
u.pruef('zu wenige Holdout-Spiele → Urteil "zu_wenig_daten", nie "belegt"', l1.bericht.beschluss.gegenGrundquote.m1x2.urteil==='zu_wenig_daten');

/* ═══ E. Kennzahlen ═══ */
u.block('E. Kennzahlen');
function zeile(pH, e, datum){ return { liga:'de.1', datum:datum||'2024-01-01', e:{ m1x2:e, tore:'ueber', btts:'btts_ja' },
  p:{ sieg_heim:pH, remis:(1-pH)/2, sieg_gast:(1-pH)/2, ueber:0.6, unter:0.4, btts_ja:0.5, btts_nein:0.5 },
  basis:{ sieg_heim:0.45, remis:0.26, sieg_gast:0.29, ueber:0.5, unter:0.5, btts_ja:0.5, btts_nein:0.5 } }; }
var kz=L.kennzahlen([zeile(0.8,'sieg_heim'),zeile(0.8,'remis')],'m1x2');
u.pruef('Log-Loss von Hand nachgerechnet', nah(kz.logLossModell, Math.round((-Math.log(0.8)-Math.log(0.1))/2*1e4)/1e4) && nah(kz.logLossGrundquote, Math.round((-Math.log(0.45)-Math.log(0.26))/2*1e4)/1e4));
u.pruef('Brier von Hand nachgerechnet', nah(kz.brierModell, Math.round(((0.04+0.01+0.01)+(0.64+0.81+0.01))/2*1e4)/1e4));
var gut=[], schlecht=[];
for(var i=0;i<400;i++){ var d='2024-'+('0'+(1+i%12)).slice(-2)+'-'+('0'+(1+i%28)).slice(-2);
  gut.push(zeile(0.7, i%10<7?'sieg_heim':'remis', d)); schlecht.push(zeile(0.9, i%10<3?'sieg_heim':'remis', d)); }
var vg=L.vorsprung(gut,'m1x2',300,1), vs=L.vorsprung(schlecht,'m1x2',300,1);
u.pruef('gutes Modell: Vorsprung positiv, untere Grenze ueber 0', vg.differenz>0 && vg.unten>0 && vg.unten<=vg.differenz && vg.differenz<=vg.oben);
u.pruef('ueberhebliches Modell: Vorsprung negativ, obere Grenze unter 0', vs.differenz<0 && vs.oben<0);
u.pruef('Vorsprung ist wiederholbar (fester Startwert)', gleich(vg, L.vorsprung(gut,'m1x2',300,1)));
u.pruef('gezogen werden Spieltage, nicht einzelne Spiele', vg.spieltage<vg.n && vg.spieltage===84);
u.pruef('Urteil: belegt nur bei genug Spielen UND unterer Grenze ueber 0',
  L.urteil({n:1000,differenz:0.05,unten:0.01,oben:0.09})==='belegt' &&
  L.urteil({n:5000,differenz:0.05,unten:0,oben:0.09})==='nicht_belegt' &&
  L.urteil({n:5000,differenz:0.01,unten:-0.002,oben:0.03})==='nicht_belegt' &&
  L.urteil({n:999,differenz:0.2,unten:0.1,oben:0.3})==='zu_wenig_daten' &&
  L.urteil({n:0})==='zu_wenig_daten' && L.urteil(null)==='zu_wenig_daten');
var au=L.aussagen(gut);
u.pruef('Aussagen wie in der App: drei je Spiel, Trefferquote und Brier stimmen',
  au.aussagen===1200 && nah(au.trefferquote, Math.round((280+400+400)/1200*1000)/10) &&
  nah(au.brier, Math.round(((280*0.09+120*0.49)+400*0.16+400*0.25)/1200*1e4)/1e4));
u.pruef('Kalibrierung: 70-Prozent-Aussagen in der Stufe 70-80, 70 % eingetroffen',
  au.kalibrierung[3].n===400 && nah(au.kalibrierung[3].behauptet,70) && nah(au.kalibrierung[3].eingetroffen,70));

/* ═══ F. Erfundene Liga mit bekannter Wahrheit ═══ */
u.block('F. Erfundene Liga: findet das Modell die Wahrheit?');
(function(){
  var s=12345; function rnd(){ s=(Math.imul(s,1664525)+1013904223)>>>0; return s/4294967296; }
  function tore(l){ var Lx=Math.exp(-l), k=0, p=1; do{ k++; p*=rnd(); }while(p>Lx); return k-1; }
  var wahr={ stark:0.5, gut:0.2, m1:0, m2:0, m3:-0.1, schwach:-0.5 }, T=Object.keys(wahr), sp2=[];
  for(var saison=0; saison<8; saison++) for(var r=0;r<2;r++) T.forEach(function(h, i){ T.forEach(function(g, j){ if(h===g) return;
    var tag=1+((i*6+j+r*17)%28), mon=('0'+(1+((i+j+r*5)%10))).slice(-2);
    sp2.push(sp('de.1', (2010+saison)+'-'+String(11+saison), (2010+saison+(Number(mon)<7?1:0))+'-'+mon+'-'+('0'+tag).slice(-2), h, g,
      tore(Math.exp(0.15+0.25+wahr[h]-wahr[g])), tore(Math.exp(0.15+wahr[g]-wahr[h])), saison<5?'lernen':saison<6?'pruefen':'holdout')); }); });
  sp2.sort(function(a,b){ return a.datum<b.datum?-1:a.datum>b.datum?1:(a.id<b.id?-1:1); });
  var d=L.durchlauf({ jeLand:{ de:sp2 } }, Object.assign({},PAR,{ lernrate:0.03, saisonBehalt:1 }));
  var t=d.zustand.de.teams, rang=T.slice().sort(function(a,b){ return (t[b].a+t[b].d)-(t[a].a+t[a].d); });
  u.pruef('staerkste und schwaechste Mannschaft werden erkannt', rang[0]==='stark' && rang[5]==='schwach', rang.join(' > '));
  var hz=d.zeilen.filter(function(x){ return x.rolle==='holdout'; }), kzF=L.kennzahlen(hz,'m1x2');
  u.pruef('auf ungesehenen Spielen besser als die Grundquote', kzF.logLossModell<kzF.logLossGrundquote-0.02, kzF.logLossModell+' gegen '+kzF.logLossGrundquote);
  u.pruef('Heimvorteil wird gelernt (bleibt deutlich positiv)', d.zustand.de.ligen['de.1'].heim>0.1);
  var ohne=L.durchlauf({ jeLand:{ de:sp2 } }, Object.assign({},PAR,{ lernrate:0 }));
  var kz0=L.kennzahlen(ohne.zeilen.filter(function(x){ return x.rolle==='holdout'; }),'m1x2');
  u.pruef('Gegenprobe: ohne Lernen (Lernrate 0) ist der Vorsprung weg', kz0.logLossModell>kzF.logLossModell+0.02, String(kz0.logLossModell));
})();

/* ═══ G. Die Dateien im Repo ═══ */
u.block('G. Die im Repo liegenden Dateien');
var GEN=path.join(REPO,'core','model','generated');
var modell=JSON.parse(fs.readFileSync(path.join(GEN,'modell.json'),'utf8')), bericht=JSON.parse(fs.readFileSync(path.join(GEN,'bericht.json'),'utf8'));
var kand=JSON.parse(fs.readFileSync(path.join(REPO,'core','model','kandidaten.json'),'utf8'));
var aliases=JSON.parse(fs.readFileSync(path.join(REPO,'core','data','aliases.json'),'utf8'));
/* Seit 15.11.2026 liest der Lauf Ondos Regeln aus core/REGELN.md (Test dazu: t14). */
var ondoRegeln=require('../core/regeln.js').lesen(fs.readFileSync(path.join(REPO,'core','REGELN.md'),'utf8')).werte;
kand.ideen=JSON.parse(fs.readFileSync(path.join(REPO,'core','model','ideen.json'),'utf8')).ideen;
var neu=L.lauf(L.bestandLaden(path.join(REPO,'core','data','generated'), aliases), kand, ondoRegeln);
u.pruef('bericht.json = Neuberechnung aus dem Bestand', gleich(neu.bericht, bericht));
u.pruef('modell.json = Neuberechnung aus dem Bestand', gleich(neu.modell, modell));
u.pruef('gewaehlter Kandidat steht in der vorab festgelegten Liste', kand.kandidaten.some(function(k){ return k.name===bericht.wahl.gewaehlt; }) && bericht.wahl.kandidaten.length===kand.kandidaten.length);
u.pruef('Holdout mit mindestens 5000 Spielen gemessen', bericht.abschluss.holdout.spiele>=5000, String(bericht.abschluss.holdout.spiele));
u.pruef('Beschluss: gegen den Markt nicht pruefbar, kein echtes Geld', bericht.beschluss.gegenMarkt.urteil==='nicht_pruefbar' && bericht.beschluss.echtesGeld===false);
u.pruef('jedes Urteil gegen die Grundquote folgt der Regel (untere Grenze > 0 bei genug Spielen)', Object.keys(bericht.beschluss.gegenGrundquote).every(function(m){
  var g=bericht.beschluss.gegenGrundquote[m]; return g.urteil===L.urteil({ n:g.spiele, unten:g.unten }, ondoRegeln.mindestSpieleUrteil); }));
var bay=ident.teamSchluessel('FC Bayern München'), koe=ident.teamSchluessel('1. FC Köln');
var vv=P.vorhersage(modell,'de.1',bay,koe);
u.pruef('Vorhersage aus der Modelldatei: gueltig und ergibt 100 %', vv.ok && nah(vv.p.sieg_heim+vv.p.remis+vv.p.sieg_gast,1,1e-9) && vv.lh>0 && vv.la>0);
u.pruef('unbekannte Mannschaft → ehrliche Absage statt Zahl', P.vorhersage(modell,'de.1','gibtsnicht',koe).ok===false && P.vorhersage(modell,'xx.1',bay,koe).ok===false);
u.pruef('Modelldatei unter 250 KB', fs.statSync(path.join(GEN,'modell.json')).size<250*1024);
u.pruef('Modell kennt alle 15 Ligen', Object.keys(modell.laender).reduce(function(s,l){ return s+Object.keys(modell.laender[l].ligen).length; },0)===15);

process.exit(u.bilanz()?1:0);
