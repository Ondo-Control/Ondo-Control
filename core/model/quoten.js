/* ===================================================================================
   ONDO CORE - Quote-Gatter und Quotenmessung (Backlog-Punkt 94). Kostenlos (Odds API Gratis-Tarif,
   AGB erlauben Speichern und ML-Training, verbieten Weitergabe als Datei: Rohquoten kommen NIE ins Repo).
   Reine Funktionen im Rechenteil, kein Netz, keine Uhr. Der Abruf steht in quoten_holen.js.
   Gatter: eine Position setzt eine Quote mit Quelle, Zeitstempel VOR Anstoss (UTC mit Z) und 3-Wege-Markt voraus.
   Selbst dann bleibt die Position "keine Wette", solange "vorteilBelegt" nicht gesetzt ist (heute nie).
   =================================================================================== */
function istUtc(s){ return typeof s==='string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(s) && !isNaN(Date.parse(s)); }

/* q: { quelle, abgerufenUtc, anstossUtc, markt, heim, remis, gast } (Dezimalquoten) */
function quoteGeprueft(q){
  if(!q || typeof q!=='object') return { ok:false, grund:'keine Quote' };
  if(!q.quelle || typeof q.quelle!=='string') return { ok:false, grund:'Quelle fehlt' };
  if(q.markt!=='h2h' && q.markt!=='1x2') return { ok:false, grund:'kein 3-Wege-Markt' };
  if(!istUtc(q.abgerufenUtc) || !istUtc(q.anstossUtc)) return { ok:false, grund:'Zeitstempel fehlt oder ist nicht UTC mit Z' };
  if(!(Date.parse(q.abgerufenUtc)<Date.parse(q.anstossUtc))) return { ok:false, grund:'Quote nicht vor Anstoss abgerufen' };
  var o=[q.heim,q.remis,q.gast];
  if(!o.every(function(x){ return typeof x==='number' && isFinite(x) && x>1; })) return { ok:false, grund:'Quote unvollstaendig (Heim, Remis und Gast noetig)' };
  return { ok:true };
}
/* faire Wahrscheinlichkeiten: Kehrwerte, auf Summe 1 normiert (proportionaler Margenabzug) */
function fair(q){ var a=[1/q.heim,1/q.remis,1/q.gast], s=a[0]+a[1]+a[2]; return [a[0]/s,a[1]/s,a[2]/s]; }
function logLoss(p,i){ return -Math.log(Math.max(1e-12,p[i])); }

/* Position fuer ein Spiel. p=[heim,remis,gast] des Modells.
   Selbst bei belegtem Vorteil (nur aus dokumentierter Freigabe) muss die konkrete Quote nach Marge
   p*Quote >= 1+PUFFER erfuellen, sonst bleibt es bei "keine Wette". */
var PUFFER=0.05;
function position(p, q, opt){
  var g=quoteGeprueft(q);
  if(!g.ok) return { empfehlung:'keine Wette', grund:'Quote nicht pruefbar: '+g.grund };
  var o=[q.heim,q.remis,q.gast], w=[p[0]*o[0],p[1]*o[1],p[2]*o[2]];
  var i=w.indexOf(Math.max(w[0],w[1],w[2]));
  if(!(opt && opt.vorteilBelegt===true)) return { empfehlung:'keine Wette', grund:'Vorteil gegen die Quote nicht belegt', quoteGeprueft:true };
  if(!(w[i]>=1+PUFFER)) return { empfehlung:'keine Wette', grund:'kein Nachmargen-Vorteil: Wahrscheinlichkeit mal Quote unter '+(1+PUFFER), quoteGeprueft:true };
  return { empfehlung:'Wette erwogen: '+['Heimsieg','Remis','Auswaertssieg'][i], grund:'belegter Vorteil, Quote '+o[i], quoteGeprueft:true };
}

/* Messung: Paare { p:[..], q:{..}, ergebnis:0|1|2 } nur mit geprueften Quoten. Eigene Zahlen, keine Rohquoten. */
function messen(paare){
  var n=0, a=0, b=0, anz=0;
  paare.forEach(function(x){
    if(x.ergebnis===undefined || !quoteGeprueft(x.q).ok) return;
    var f=fair(x.q); n++; a+=logLoss(x.p,x.ergebnis); b+=logLoss(f,x.ergebnis);
  });
  return n?{ spiele:n, logLossCore:Math.round(a/n*10000)/10000, logLossQuote:Math.round(b/n*10000)/10000, vorsprungCore:Math.round((b-a)/n*10000)/10000 }:{ spiele:0 };
}
module.exports={ quoteGeprueft:quoteGeprueft, fair:fair, position:position, PUFFER:PUFFER, messen:messen, istUtc:istUtc };
