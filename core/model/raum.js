/* ===================================================================================
   ONDO CORE - der Trainingsraum (Backlog-Punkt 94, Ondos Vorgabe vom 14.11.2026).
   Ablauf in Runden:
     1. Der Core geht mit seinem Lernstand in den Raum und tippt ALLE Spiele der Runde.
        Der Lernstand ist dabei eingefroren: kein Ergebnis der Runde fliesst in einen Tipp.
     2. Danach lernt er aus den Ergebnissen der Runde. Das ergibt den naechsten Lernstand.
     3. Mit dem neuen Lernstand geht er in die naechste Runde - ohne Erinnerung an einzelne
        Spiele, nur mit dem, was er gelernt hat.
   Jeder Lernstand ist eine Version (L0, L1, L2, ...) mit einer Pruefsumme.
   Gemessen wird je Runde im Markt 1X2 (Log-Loss, kleiner ist besser):
     lernstand     der aktuelle Lernstand tippt die Runde
     voriger       der Lernstand eine Runde davor tippt dieselben Spiele
     laufend       zum Vergleich: Lernen nach jedem einzelnen Spiel (so rechnet modell.json)
     grundquote    die blosse Haeufigkeit der Liga, Stand Rundenbeginn
   Eine Runde = ganze Kalendermonate, bis die Mindestzahl Spiele erreicht ist (Regel).
   Kein Netz, kein Schluessel, keine Uhr. Rechnet nur, schreibt nichts.
   =================================================================================== */
var M=require('./poisson.js');

var EINLAUF_RUNDEN = 12;      /* die ersten Runden zaehlen nicht in die Zusammenfassung */

function klon(o){ return JSON.parse(JSON.stringify(o)); }

/* Kurze Pruefsumme eines Lernstands (FNV-1a ueber die gerundeten Staerken). Gleicher
   Lernstand = gleiche Pruefsumme. */
function pruefsumme(zustand){
  var teile=[];
  Object.keys(zustand).sort().forEach(function(land){
    var z=zustand[land];
    Object.keys(z.ligen).sort().forEach(function(l){ teile.push(l, z.ligen[l].niveau.toFixed(6), z.ligen[l].heim.toFixed(6)); });
    Object.keys(z.teams).sort().forEach(function(k){ teile.push(k, z.teams[k].a.toFixed(6), z.teams[k].d.toFixed(6)); });
  });
  var s=teile.join('|'), h=2166136261;
  for(var i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619)>>>0; }
  return ('0000000'+h.toString(16)).slice(-8);
}

/* Runden bilden: Monate der Reihe nach zusammenfassen, bis die Mindestzahl erreicht ist. */
function rundenBilden(bestand, mindest){
  var jeMonat={};
  Object.keys(bestand.jeLand).forEach(function(land){
    bestand.jeLand[land].forEach(function(r){ var m=r.datum.slice(0,7); jeMonat[m]=(jeMonat[m]||0)+1; });
  });
  var bloecke=[], akt=null;
  Object.keys(jeMonat).sort().forEach(function(m){
    if(!akt) akt={ von:m, bis:m, spiele:0 };
    akt.bis=m; akt.spiele+=jeMonat[m];
    if(akt.spiele>=mindest){ bloecke.push(akt); akt=null; }
  });
  if(akt) bloecke.push(akt);
  return bloecke;
}

function ln(p){ return -Math.log(Math.max(1e-12, p)); }

/* opt: { name, mindestSpieleRunde, mindestSpieleUrteil, sicherheit, ziehungen, startwert, ideen, mitZeilen }
   H: Hilfen aus lauf.js (vorsprung, urteil, ergebnis, grundquote, VORRAT, MAERKTE, rund). */
function raum(bestand, par, opt, H){
  var laender=Object.keys(bestand.jeLand).sort(), bloecke=rundenBilden(bestand, opt.mindestSpieleRunde);
  var zustand={}, zeiger={}, gq={}, vorher=null, runden=[], zeilen=[];
  laender.forEach(function(l){ zustand[l]=M.neuerZustand(); zeiger[l]=0; });
  var alleOptionen=H.MAERKTE.m1x2.concat(H.MAERKTE.tore, H.MAERKTE.btts);
  var heuteMonat=String(bestand.heute||'').slice(0,7), letzterStand=null;

  bloecke.forEach(function(b, i){
    var start=klon(zustand);                       /* Lernstand L<i>, eingefroren */
    var tipA=klon(start), tipB=vorher?klon(vorher):null, gqStart=klon(gq);
    var s={ n:0, a:0, b:0, c:0, g:0 };
    laender.forEach(function(land){
      var liste=bestand.jeLand[land];
      while(zeiger[land]<liste.length && liste[zeiger[land]].datum.slice(0,7)<=b.bis){
        var r=liste[zeiger[land]++], e=H.ergebnis(r);
        var basis=H.grundquote(gqStart[r.liga]||H.VORRAT);
        var pA=M.schritt(tipA[land], r, par, false).p;                 /* tippen, eingefroren */
        var pB=tipB ? M.schritt(tipB[land], r, par, false).p : null;   /* voriger Lernstand */
        var pC=M.schritt(zustand[land], r, par, true).p;               /* lernen (Spiel fuer Spiel) */
        gq[r.liga]=gq[r.liga]||Object.assign({}, H.VORRAT);
        alleOptionen.forEach(function(k){ if(e.m1x2===k||e.tore===k||e.btts===k) gq[r.liga][k]++; });
        if(r.zusatz) continue;
        s.n++; s.a+=ln(pA[e.m1x2]); s.c+=ln(pC[e.m1x2]); s.g+=ln(basis[e.m1x2]);
        if(pB) s.b+=ln(pB[e.m1x2]);
        zeilen.push({ runde:i+1, liga:r.liga, datum:r.datum, id:r.id, e:e, pA:pA, pB:pB, pC:pC, basis:basis });
      }
    });
    var offen=(i===bloecke.length-1) && (b.spiele<opt.mindestSpieleRunde || b.bis>=heuteMonat);
    var eintrag={ nr:i+1, lernstand:'L'+i, pruefsumme:pruefsumme(start), von:b.von, bis:b.bis, spiele:s.n,
      logLoss1x2:{ lernstand:s.n?H.rund(s.a/s.n):null, voriger:(s.n&&tipB)?H.rund(s.b/s.n):null,
                   laufend:s.n?H.rund(s.c/s.n):null, grundquote:s.n?H.rund(s.g/s.n):null } };
    if(offen) eintrag.laeuftNoch=true;
    runden.push(eintrag);
    letzterStand={ name:'L'+i, pruefsumme:eintrag.pruefsumme, giltAb:b.von };
    vorher=start;
  });

  /* Zusammenfassung ueber alle Runden nach der Einlaufzeit */
  var wert=zeilen.filter(function(z){ return z.runde>EINLAUF_RUNDEN && z.pB; });
  function vergleich(neu, alt, markt){
    var v=H.vorsprung(wert.map(function(z){ return { liga:z.liga, datum:z.datum, e:z.e, p:z[neu], basis:z[alt] }; }),
                      markt, opt.ziehungen, opt.startwert, opt.sicherheit);
    return { spiele:v.n||0, differenz:v.differenz, unten:v.unten, oben:v.oben, urteil:H.urteil(v, opt.mindestSpieleUrteil) };
  }
  var gegenGrundquote={};
  Object.keys(H.MAERKTE).forEach(function(m){ gegenGrundquote[m]=vergleich('pA','basis',m); });
  var fertig=runden.filter(function(r){ return !r.laeuftNoch && r.nr>EINLAUF_RUNDEN && r.logLoss1x2.voriger!==null; });
  var letzte=fertig.slice(-12), besser=letzte.filter(function(r){ return r.logLoss1x2.lernstand<r.logLoss1x2.voriger; }).length;
  var namen={}; (opt.ideen||[]).forEach(function(x){ (x.namen||[]).forEach(function(n){ namen[n]=1; }); });

  var aus={ schema:1, stand:bestand.heute, kandidat:opt.name,
    regel:{ mindestSpieleRunde:opt.mindestSpieleRunde, einlaufRunden:EINLAUF_RUNDEN,
            text:'Eine Runde = ganze Kalendermonate, bis die Mindestzahl Spiele erreicht ist. Getippt wird mit eingefrorenem Lernstand, gelernt erst danach.' },
    gepruefteIdeen:Object.keys(namen).length,
    lernstand:letzterStand,
    zusammenfassung:{
      hinweis:'Markt 1X2, alle Runden nach der Einlaufzeit. Differenz positiv = der erstgenannte ist besser.',
      spiele:wert.length,
      lernenHilft:Object.assign({ frage:'Tippt der aktuelle Lernstand besser als der eine Runde aeltere?' }, vergleich('pA','pB','m1x2')),
      gegenGrundquote:gegenGrundquote,
      laufendGegenEingefroren:Object.assign({ frage:'Was bringt Lernen nach jedem einzelnen Spiel gegenueber Lernen je Runde?' }, vergleich('pC','pA','m1x2')),
      letzteZwoelfRunden:{ runden:letzte.length, davonBesserAlsVoriger:besser }
    },
    runden:runden };
  if(opt.mitZeilen) aus.zeilen=zeilen;
  return aus;
}

module.exports={ raum:raum, rundenBilden:rundenBilden, pruefsumme:pruefsumme, EINLAUF_RUNDEN:EINLAUF_RUNDEN };
