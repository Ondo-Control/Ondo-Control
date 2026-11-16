/* ===================================================================================
   ONDO CORE - Lagen lernen (Backlog-Punkt 94, Entwurf "Lagen lernen" vom 16.11.2026).
   Statt einer Staerke je Mannschaft bewertet der Core die LAGE eines Spiels aus Merkmalen,
   die keinen Namen tragen: Form, Heim-/Auswaertsform, Ruhetage, Saisonstand, Staerkeunterschied,
   Torniveau. Der Lernstand besteht nur aus Gewichten dieser Merkmale - keine Mannschaft, kein
   Einzelergebnis. Damit kann er den Spielbestand nicht auswendig lernen.

   Regeln (festgelegt am 16.11.2026, Stichtag 1.8.2026, Datei versiegelt.json):
     - Jedes Merkmal eines Spiels wird NUR aus Spielen VOR diesem Spiel berechnet.
     - Gewichte lernen nur Spiele der Rolle "lernen" vor dem Stichtag; gewaehlt wird auf "pruefen".
     - Spiele ab dem Stichtag sind versiegelt: sie dienen weder dem Lernen noch der Wahl.
     - Jeder Versuch (Merkmalsgruppe) wird gezaehlt; die Huerde steigt mit der Zahl der Versuche.
   Kein Netz, kein Schluessel, keine Uhr, kein Zufall. Laeuft in Node.
   =================================================================================== */
var M=require('./poisson.js');

var MERKMALE = {
  /* Basis: die drei Logarithmen der Wahrscheinlichkeiten des alten Modells (K6) */
  basis:  ['lnH','lnD','lnA'],
  form:   ['dPpg3','dPpg5','dPpg10','dGd5','dGd10'],
  ort:    ['dOrt'],
  ruhe:   ['dRuhe'],
  saison: ['dSaisonPpg','dSaisonGd'],
  staerke:['dElo'],
  tempo:  ['tempo10'],
  /* Aufstellung (aus aufstellung.json): nur fuer Spiele mit Daten; sonst Unterschied 0 */
  aufst:  ['dLnStart','dLnBest','dFehlt']
};
var GRUPPEN = ['form','ort','ruhe','saison','staerke','tempo'];   /* waehlbare Gruppen, alle Spiele */
var GRUPPEN_AUFST = GRUPPEN.concat(['aufst']);                  /* waehlbar nur auf Spielen mit Aufstellungsdaten */

var PRIOR_PPG = 1.4, PRIOR_N = 3, ELO_START = 1500, ELO_K = 20, ELO_HEIM = 60, ELO_STUFE = 80;
var LAENDER_MITTEL_TORE = 2.7;

function tage(a, b){ return Math.round((Date.parse(b+'T00:00:00Z')-Date.parse(a+'T00:00:00Z'))/86400000); }
function stufe(ligaId){ return Number(String(ligaId).split('.')[1])||1; }

/* Form ueber die letzten n Eintraege der Liste (neueste zuletzt). */
function formWert(liste, n){
  var s=liste.slice(-n), pts=0, gd=0;
  s.forEach(function(e){ pts+=e.pts; gd+=e.gf-e.ga; });
  return { ppg:(pts+PRIOR_PPG*PRIOR_N)/(s.length+PRIOR_N), gd:gd/(s.length+PRIOR_N), n:s.length };
}

/* Alle Spiele eines Landes in zeitlicher Reihenfolge: je Spiel eine Zeile mit Merkmalen.
   Zeile = { r (Spiel), x (Merkmale, Zahl je Name), y (0 Heim,1 Remis,2 Gast) }.
   Die Merkmale eines Spiels entstehen, BEVOR sein Ergebnis in irgendeinen Zaehler eingeht. */
function zeilenFuerLand(spiele, par){
  var z=M.neuerZustand(), hist={}, elo={}, ligaVon={}, saison={}, zeilen=[], nachher=[], tag=null;
  /* Alle Spiele EINES Kalendertags werden mit demselben Stand vom Vortag vorhergesagt; erst wenn der Tag zu Ende ist,
     gehen ihre Ergebnisse in Staerken, Form, Elo und Ligawerte ein (kein Spiel nutzt das Ergebnis eines Spiels desselben Tags). */
  function tagAbschliessen(){ nachher.forEach(function(f){ f(); }); nachher=[]; }
  spiele.forEach(function(r){
    if(r.datum!==tag){ tagAbschliessen(); tag=r.datum; }
    /* 1. Basis des alten Modells: nur vorhersagen; gelernt wird erst am Tagesende */
    var v=M.schritt(z, r, par, false);
    var H=r.heimKey, G=r.gastKey;
    hist[H]=hist[H]||[]; hist[G]=hist[G]||[];
    var hh=hist[H], hg=hist[G];
    /* Ligawechsel: Elo-Abschlag/Zuschlag, wie K6 es mit stufenSprung tut */
    [[H,r.liga],[G,r.liga]].forEach(function(p){
      var k=p[0], l=p[1];
      if(elo[k]===undefined){ elo[k]=ELO_START; ligaVon[k]=l; }
      else if(ligaVon[k]!==l){ elo[k]-=(stufe(ligaVon[k])-stufe(l))*ELO_STUFE; ligaVon[k]=l; }
    });
    var sH=saison[H+'|'+r.saison]||(saison[H+'|'+r.saison]=[]), sG=saison[G+'|'+r.saison]||(saison[G+'|'+r.saison]=[]);
    /* 2. Merkmale (nur Vergangenheit) */
    var f3=[formWert(hh,3),formWert(hg,3)], f5=[formWert(hh,5),formWert(hg,5)], f10=[formWert(hh,10),formWert(hg,10)];
    var heimSpiele=hh.filter(function(e){ return e.ort==='h'; }), gastSpiele=hg.filter(function(e){ return e.ort==='a'; });
    var oh=formWert(heimSpiele,5), og=formWert(gastSpiele,5);
    var ruheH=hh.length?Math.min(14,tage(hh[hh.length-1].datum, r.datum)):14;
    var ruheG=hg.length?Math.min(14,tage(hg[hg.length-1].datum, r.datum)):14;
    var sf=[formWert(sH,sH.length||1), formWert(sG,sG.length||1)];
    var t10h=hh.slice(-10), t10g=hg.slice(-10), tot=0, tn=0;
    t10h.concat(t10g).forEach(function(e){ tot+=e.gf+e.ga; tn++; });
    var x={
      lnH:Math.log(Math.max(1e-6,v.p.sieg_heim)), lnD:Math.log(Math.max(1e-6,v.p.remis)), lnA:Math.log(Math.max(1e-6,v.p.sieg_gast)),
      dPpg3:f3[0].ppg-f3[1].ppg, dPpg5:f5[0].ppg-f5[1].ppg, dPpg10:f10[0].ppg-f10[1].ppg,
      dGd5:f5[0].gd-f5[1].gd, dGd10:f10[0].gd-f10[1].gd,
      dOrt:oh.ppg-og.ppg,
      dRuhe:(ruheH-ruheG)/7,
      dSaisonPpg:sf[0].ppg-sf[1].ppg, dSaisonGd:sf[0].gd-sf[1].gd,
      dElo:((elo[H]+ELO_HEIM)-elo[G])/400,
      tempo10:(tn?tot/tn:LAENDER_MITTEL_TORE)-LAENDER_MITTEL_TORE
    };
    if(r.kommend){ zeilen.push({ r:r, x:x, y:-1, kommend:true }); return; }     /* kommendes Spiel: Merkmale ja, nichts einbuchen */
    var y=r.th>r.tg?0:r.th===r.tg?1:2;
    zeilen.push({ r:r, x:x, y:y });
    /* 3. erst am Ende des Kalendertags Ergebnis einbuchen und lernen */
    nachher.push(function(){
      M.schritt(z, r, par, true);
    var pH=r.th>r.tg?3:r.th===r.tg?1:0, pG=r.tg>r.th?3:r.th===r.tg?1:0;
    var eH={ datum:r.datum, ort:'h', gf:r.th, ga:r.tg, pts:pH }, eG={ datum:r.datum, ort:'a', gf:r.tg, ga:r.th, pts:pG };
    hh.push(eH); hg.push(eG); sH.push(eH); sG.push(eG);
    var erw=1/(1+Math.pow(10, -((elo[H]+ELO_HEIM)-elo[G])/400)), ist=r.th>r.tg?1:r.th===r.tg?0.5:0;
    var marge=Math.min(3, Math.abs(r.th-r.tg)), mult=marge<=1?1:marge===2?1.5:1.75;
    var dlt=ELO_K*mult*(ist-erw); elo[H]+=dlt; elo[G]-=dlt;
    });
  });
  tagAbschliessen();
  return zeilen;
}

/* Merkmale fuer KOMMENDE Spiele (ohne Ergebnis): fixtures = [{ liga, saison, datum, heimKey, gastKey }].
   Sie werden hinter den abgeschlossenen Spielen ihres Landes eingereiht, mit dem Stand aller bisher gespielten Spiele vorhergesagt
   und NIE eingebucht. Ergebnis: Zeilen { r, x, kommend:true } nur fuer die Fixtures, in derselben Reihenfolge wie fixtures. */
function zeilenKommend(bestand, par, fixtures, schema){
  var jeLand={}; fixtures.forEach(function(f,i){ var land=String(f.liga).split('.')[0]; (jeLand[land]=jeLand[land]||[]).push({ liga:f.liga, saison:f.saison, datum:f.datum, heimKey:f.heimKey, gastKey:f.gastKey, kommend:true, id:'kommend-'+i, idx:i }); });
  var aus=new Array(fixtures.length);
  Object.keys(jeLand).forEach(function(land){
    var neu=jeLand[land].slice().sort(function(a,b){ return a.datum<b.datum?-1:a.datum>b.datum?1:a.idx-b.idx; });
    var spiele=(bestand.jeLand[land]||[]).concat(neu);
    zeilenFuerLand(spiele, par).forEach(function(z){ if(z.kommend) aus[z.r.idx]=z; });
  });
  return aus;
}

/* Alle Zeilen aller Laender. bestand = Ergebnis von lauf.bestandLaden. */
function zeilenBauen(bestand, par, aufst){
  var alle=[];
  Object.keys(bestand.jeLand).sort().forEach(function(land){
    zeilenFuerLand(bestand.jeLand[land], par).forEach(function(z){
      var a=aufst&&aufst.werte&&aufst.werte[z.r.id];
      z.mitAufst=!!a;
      MERKMALE.aufst.forEach(function(n,i){ z.x[n]=a?a[i]:0; });     /* fehlt: Unterschied 0 = neutral */
      alle.push(z);
    });
  });
  return alle;
}

/* ---------- Lernstand: Gewichte (3 Klassen x Merkmale), Mittel und Streuung je Merkmal ---------- */
function namenVon(gruppen){
  var n=MERKMALE.basis.slice();
  gruppen.forEach(function(g){ n=n.concat(MERKMALE[g]); });
  return n;
}
function standardisierung(zeilen, namen){
  var mw={}, sd={};
  namen.forEach(function(n){
    if(MERKMALE.basis.indexOf(n)>=0){ mw[n]=0; sd[n]=1; return; }   /* Basis bleibt unveraendert */
    var s=0, q=0, c=zeilen.length;
    zeilen.forEach(function(z){ s+=z.x[n]; });
    var m=s/c; zeilen.forEach(function(z){ q+=Math.pow(z.x[n]-m,2); });
    mw[n]=m; sd[n]=Math.sqrt(q/c)||1;
  });
  return { mittel:mw, streuung:sd };
}
function vektor(x, namen, st){ return namen.map(function(n){ return (x[n]-st.mittel[n])/st.streuung[n]; }); }
function anfangsGewichte(namen){
  /* L0: genau das alte Modell. Klasse k nimmt ln p_k mit Gewicht 1, alles andere 0. */
  var w=[[],[],[]];
  for(var k=0;k<3;k++) namen.forEach(function(n){ w[k].push((n==='lnH'&&k===0)||(n==='lnD'&&k===1)||(n==='lnA'&&k===2)?1:0); });
  return w;
}
function wahrsch(w, v){
  var l=[0,0,0], m=-Infinity, i, k;
  for(k=0;k<3;k++){ var s=0; for(i=0;i<v.length;i++) s+=w[k][i]*v[i]; l[k]=s; if(s>m) m=s; }
  var e=l.map(function(s){ return Math.exp(s-m); }), t=e[0]+e[1]+e[2];
  return [e[0]/t, e[1]/t, e[2]/t];
}
function verlust(w, daten){
  var s=0; daten.forEach(function(d){ s+=-Math.log(Math.max(1e-12, wahrsch(w,d.v)[d.y])); });
  return s/daten.length;
}
function verlusteJeSpiel(w, daten){
  return daten.map(function(d){ return -Math.log(Math.max(1e-12, wahrsch(w,d.v)[d.y])); });
}

/* Eine Trainingsrunde: alle Spiele der Runde tippen (Gewichte eingefroren), daraus lernen
   (ein Schritt gegen den Fehler, mit kleiner Gewichtsbremse zum Ausgangsmodell), neuer Lernstand.
   Die Schrittweite wird je Runde so gewaehlt, dass der Fehler auf den Rundenspielen nicht steigt
   (halbieren, bis es passt). Rein deterministisch. Rueckgabe: { w, schritt }. */
function runde(w, daten, opt){
  var F=daten[0].v.length, g=[new Array(F).fill(0),new Array(F).fill(0),new Array(F).fill(0)], n=daten.length;
  daten.forEach(function(d){
    var p=wahrsch(w,d.v);
    for(var k=0;k<3;k++){ var f=p[k]-(d.y===k?1:0); for(var i=0;i<F;i++) g[k][i]+=f*d.v[i]; }
  });
  var anker=opt.anker, alt=verlust(w,daten)+bremseKosten(w,anker,opt.bremse), schritt=opt.schritt;
  for(var versuch=0; versuch<12; versuch++){
    var neu=[[],[],[]];
    for(var k=0;k<3;k++) for(var i=0;i<F;i++){
      var br=opt.bremse*(w[k][i]-anker[k][i]);
      neu[k][i]=w[k][i]-schritt*(g[k][i]/n+br);
    }
    if(verlust(neu,daten)+bremseKosten(neu,anker,opt.bremse) <= alt) return { w:neu, schritt:schritt*1.5 };
    schritt/=2;
  }
  return { w:w, schritt:opt.schritt };
}
function bremseKosten(w, anker, b){
  var s=0; for(var k=0;k<3;k++) for(var i=0;i<w[k].length;i++) s+=Math.pow(w[k][i]-anker[k][i],2);
  return 0.5*b*s;
}

function pruefsumme(w){
  var s=JSON.stringify(w.map(function(r){ return r.map(function(x){ return x.toFixed(6); }); })), h=2166136261;
  for(var i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619)>>>0; }
  return ('0000000'+h.toString(16)).slice(-8);
}

/* Training fuer eine Gruppenwahl. lernen/pruefen: Zeilenlisten (schon gefiltert).
   Rueckgabe: Lernstand, Rundenprotokoll (Verlust je Runde auf lernen und pruefen). */
function trainieren(lernen, pruefen, gruppen, opt){
  var namen=namenVon(gruppen), st=standardisierung(lernen, namen);
  var dl=lernen.map(function(z){ return { v:vektor(z.x,namen,st), y:z.y }; });
  var dp=pruefen.map(function(z){ return { v:vektor(z.x,namen,st), y:z.y }; });
  var w=anfangsGewichte(namen), anker=anfangsGewichte(namen), versionen=[], beste=null, ohneBesserung=0, schritt=opt.lernrate;
  for(var r=0;r<=opt.maxRunden;r++){
    var vl=verlust(w,dl), vp=verlust(w,dp);
    versionen.push({ runde:r, lernstand:'L'+r, verlustLernen:vl, verlustPruefen:vp, pruefsumme:pruefsumme(w) });
    if(!beste || vp<beste.vp-1e-7){ beste={ vp:vp, vl:vl, runde:r, w:w.map(function(x){return x.slice();}) }; ohneBesserung=0; }
    else if(++ohneBesserung>=opt.geduld) break;
    var rr=runde(w, dl, { schritt:schritt, bremse:opt.bremse, anker:anker }); w=rr.w; schritt=rr.schritt;
  }
  return { gruppen:gruppen, namen:namen, standardisierung:st, gewichte:beste.w, runde:beste.runde,
           verlustLernen:beste.vl, verlustPruefen:beste.vp, versionen:versionen, pruefsumme:pruefsumme(beste.w) };
}

function vorhersage(lernstand, x){
  return wahrsch(lernstand.gewichte, vektor(x, lernstand.namen, lernstand.standardisierung));
}

/* Hartes Gatter: Ein Lernstand mit Aufstellungs-Merkmalen darf nur rechnen, wenn fuer genau DIESES Spiel eine
   gueltige Aufstellung mit Vorab-Zeitstempel vorliegt:
   - erfasstUtc und anstossUtc sind echte UTC-Zeitpunkte (ISO 8601 mit 'Z'), erfasst STRENG vor Anstoss
   - spielId der Aufstellung = spielId der Vorhersage
   - je Mannschaft genau 11 bestaetigte Starter
   Sonst kommt eine Absage mit Grund, keine Zahl. opt = { spielId, aufstellungVorab:{ spielId, erfasstUtc, anstossUtc, starterHeim, starterGast } } */
function utcMs(t){ if(typeof t!=='string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?Z$/.test(t)) return NaN; return Date.parse(t); }
function vorhersageGeprueft(lernstand, x, opt){
  var braucht=MERKMALE.aufst.some(function(n){ return lernstand.namen.indexOf(n)>=0; });
  if(braucht){
    var a=opt&&opt.aufstellungVorab, grund=null;
    if(!a) grund='keine Aufstellung vorhanden';
    else if(!(utcMs(a.erfasstUtc)<utcMs(a.anstossUtc))) grund='Zeitstempel ungueltig oder nicht vor dem Anstoss (UTC mit Z erforderlich)';
    else if(!opt.spielId || a.spielId!==opt.spielId) grund='Aufstellung gehoert nicht zu diesem Spiel';
    else if(a.starterHeim!==11 || a.starterGast!==11) grund='keine 11 bestaetigten Starter je Mannschaft';
    if(grund) return { ok:false, grund:'Aufstellung nicht verwendbar: '+grund };
  }
  return { ok:true, p:vorhersage(lernstand, x) };
}
/* Alle Spiele werden vorhergesagt: Ist die Aufstellung nicht verwendbar, rechnet der Lernstand OHNE Aufstellung. */
function vorhersageMitFallback(lernstandMit, lernstandOhne, x, opt){
  var r=vorhersageGeprueft(lernstandMit, x, opt);
  if(r.ok) return { ok:true, p:r.p, quelle:'mit Aufstellung' };
  var o=vorhersageGeprueft(lernstandOhne, x, opt);
  return { ok:o.ok, p:o.p, quelle:'ohne Aufstellung (Rueckfall)', grundRueckfall:r.grund };
}

/* Gepaarter Blockbootstrap: Unterschied je Spiel (va minus vb, positiv = vb besser), gezogen wird nach WOCHEN-Bloecken
   (ISO-Woche ueber alle Ligen, damit gleichzeitige Spiele zusammenbleiben). Fester Startwert, keine Uhr.
   Gibt Mittel, 95-%-Bereich und einseitigen p-Wert (Anteil der Ziehungen mit Mittel <= 0). */
function wocheVon(datum){ var d=new Date(datum+'T12:00:00Z'), t=Date.UTC(d.getUTCFullYear(),0,1); return d.getUTCFullYear()+'-'+Math.floor((d-t)/604800000); }
function blockBootstrap(zeilen, va, vb, ziehungen, startwert){
  var bl={}, ks=[];
  zeilen.forEach(function(z,i){ var k=wocheVon(z.r.datum); if(!bl[k]){ bl[k]={ s:0, n:0 }; ks.push(k); } bl[k].s+=va[i]-vb[i]; bl[k].n++; });
  var a=startwert>>>0, N=ks.length, mw=[], gesS=0, gesN=0;
  ks.forEach(function(k){ gesS+=bl[k].s; gesN+=bl[k].n; });
  function zufall(){ a=(a+0x6D2B79F5)>>>0; var t=a; t=Math.imul(t^(t>>>15), t|1); t^=t+Math.imul(t^(t>>>7), t|61); return ((t^(t>>>14))>>>0)/4294967296; }
  for(var r=0;r<ziehungen;r++){ var s=0, n=0; for(var j=0;j<N;j++){ var b=bl[ks[Math.floor(zufall()*N)]]; s+=b.s; n+=b.n; } mw.push(s/n); }
  mw.sort(function(x,y){ return x-y; });
  var nul=0; mw.forEach(function(x){ if(x<=0) nul++; });
  return { mittel:gesS/gesN, unten:mw[Math.floor(0.025*ziehungen)], oben:mw[Math.floor(0.975*ziehungen)], p:(nul+1)/(ziehungen+1), bloecke:N, spiele:gesN };
}

/* Hilfen fuer Wahl: Verluste je Spiel eines Lernstands auf einer Zeilenliste */
function verlusteAuf(lernstand, zeilen){
  var d=zeilen.map(function(z){ return { v:vektor(z.x, lernstand.namen, lernstand.standardisierung), y:z.y }; });
  return verlusteJeSpiel(lernstand.gewichte, d);
}

/* Unterschied zweier Verlustlisten (a minus b): Mittel und Standardfehler, gruppiert nach Spieltag. */
function vergleich(zeilen, va, vb){
  var gr={}, ls=[];
  zeilen.forEach(function(z,i){
    var k=z.r.liga+'|'+z.r.datum;
    if(!gr[k]){ gr[k]={ s:0, n:0 }; ls.push(gr[k]); }
    gr[k].s+=va[i]-vb[i]; gr[k].n++;
  });
  var S=0, N=0; ls.forEach(function(g){ S+=g.s; N+=g.n; });
  var m=S/N, q=0; ls.forEach(function(g){ q+=Math.pow(g.s-m*g.n,2); });
  var se=Math.sqrt(q)/N;     /* Standardfehler des Mittels bei ganzen Spieltagen als Einheit */
  return { n:N, spieltage:ls.length, differenz:m, standardfehler:se };
}

module.exports={ zeilenKommend:zeilenKommend, vorhersageMitFallback:vorhersageMitFallback, blockBootstrap:blockBootstrap, vorhersageGeprueft:vorhersageGeprueft, GRUPPEN_AUFST:GRUPPEN_AUFST, MERKMALE:MERKMALE, GRUPPEN:GRUPPEN, zeilenFuerLand:zeilenFuerLand, zeilenBauen:zeilenBauen,
  namenVon:namenVon, trainieren:trainieren, vorhersage:vorhersage, verlusteAuf:verlusteAuf, vergleich:vergleich,
  pruefsumme:pruefsumme, wahrsch:wahrsch };
