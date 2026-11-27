/* ===================================================================================
   ONDO CORE - Markt-Kombination (Idee 18, 27.11.2026): die Pinnacle-Quote als zusaetzliche Eingabe.
   Regel fest vorab in markt_regel.json (nicht gelernt). Ohne Quote rechnet der Core allein weiter.
   1. entmargen(): Margenabzug nach der Potenz-Methode (findet k mit Summe (1/Quote)^k = 1).
   2. kombinieren(): logarithmisches Mischen von Markt und Core mit festen Gewichten.
   3. Messung an versiegelten Spielen (TipsAudit, CC BY 4.0; Rohdatei nur im Lauf, nie im Repo):
      Core (K6, vor jedem Spiel vorhergesagt) gegen Kombination gegen Pinnacle, dieselben Spiele,
      Standardfehler nach Spieltag. Ins Repo nur Summenzahlen (generated/markt_bericht.json).
   Aufruf: node core/model/markt_kombi.js --ta <tipsaudit-predictions.csv>
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('../data/identity.js'), LA=require('./lagen.js');

function entmargen(q){
  var a=[1/q[0],1/q[1],1/q[2]], lo=0.5, hi=3;
  for(var i=0;i<80;i++){ var k=(lo+hi)/2, s=Math.pow(a[0],k)+Math.pow(a[1],k)+Math.pow(a[2],k); if(s>1) lo=k; else hi=k; }
  var k2=(lo+hi)/2, p=a.map(function(x){ return Math.pow(x,k2); }), s2=p[0]+p[1]+p[2];
  return p.map(function(x){ return x/s2; });
}
function kombinieren(pCore, pMarkt, regel){
  var wm=regel.gewichtMarkt, wc=regel.gewichtCore, p=[0,1,2].map(function(i){ return Math.exp(wm*Math.log(Math.max(1e-12,pMarkt[i]))+wc*Math.log(Math.max(1e-12,pCore[i]))); }), s=p[0]+p[1]+p[2];
  return p.map(function(x){ return x/s; });
}
function ll(p,i){ return -Math.log(Math.max(1e-12,p[i])); }

/* TipsAudit-Ligen -> unsere Ligen */
var LIGA={ 'Germany|Bundesliga':'de.1','Germany|2. Bundesliga':'de.2','Germany|3. Liga':'de.3','England|Premier League':'en.1','England|Championship':'en.2','England|League One':'en.3','England|League Two':'en.4',
  'Spain|La Liga':'es.1','Spain|Segunda Division':'es.2','France|Ligue 1':'fr.1','France|Ligue 2':'fr.2','Italy|Serie A':'it.1','Italy|Serie B':'it.2','Netherlands|Eredivisie':'nl.1','Portugal|Primeira Liga':'pt.1' };
function csvLesen(text){
  var zeilen=[], z=[], f='', inQ=false;
  for(var i=0;i<text.length;i++){ var c=text[i];
    if(inQ){ if(c==='"'){ if(text[i+1]==='"'){ f+='"'; i++; } else inQ=false; } else f+=c; }
    else if(c==='"') inQ=true; else if(c===','){ z.push(f); f=''; } else if(c==='\n'){ z.push(f.replace(/\r$/,'')); zeilen.push(z); z=[]; f=''; } else f+=c; }
  if(f||z.length){ z.push(f); zeilen.push(z); }
  var kopf=zeilen.shift(); return zeilen.filter(function(r){ return r.length===kopf.length; }).map(function(r){ var o={}; kopf.forEach(function(k,j){ o[k]=r[j]; }); return o; });
}

/* zeilen: Vorhersagezeilen des Core { liga, datum, heimKey, gastKey, p:[3], y } ; ta: TipsAudit-Zeilen ; aufl: aliasIndex */
function zuordnen(zeilen, ta, aufl, stichtag){
  var idx={}; zeilen.forEach(function(z){ idx[z.liga+'|'+z.datum+'|'+z.heimKey+'|'+z.gastKey]=z; });
  var paare=[], stat={ ta:0, unsereLigen:0, zugeordnet:0, ergebnisAbweichung:0 };
  function tag(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
  ta.forEach(function(r){
    stat.ta++; var liga=LIGA[r.country+'|'+r.league]; if(!liga || r.void_reason || r.teams_reversed_after_logging==='1') return;
    if(!(r.kickoff_utc.slice(0,10)>=stichtag)) return;
    stat.unsereLigen++;
    var land=liga.split('.')[0], hk=aufl(land,r.home).schluessel, gk=aufl(land,r.away).schluessel, d=r.kickoff_utc.slice(0,10);
    var z=idx[liga+'|'+d+'|'+hk+'|'+gk]||idx[liga+'|'+tag(d,-1)+'|'+hk+'|'+gk]||idx[liga+'|'+tag(d,1)+'|'+hk+'|'+gk]; if(!z) return;
    var o=[Number(r.pin_open_home),Number(r.pin_open_draw),Number(r.pin_open_away)], c=[Number(r.pin_close_home),Number(r.pin_close_draw),Number(r.pin_close_away)];
    if(!o.concat(c).every(function(x){ return x>1; })) return;
    var yTa={ '1':0, 'X':1, '2':2 }[r.result]; if(yTa!==undefined && yTa!==z.y) stat.ergebnisAbweichung++;
    stat.zugeordnet++; paare.push({ r:{ liga:z.liga, datum:z.datum }, y:z.y, core:z.p, offen:entmargen(o), schluss:entmargen(c) });
  });
  return { paare:paare, stat:stat };
}
function messen(paare, regel){
  function reihe(f){ return paare.map(function(x){ return ll(f(x), x.y); }); }
  var core=reihe(function(x){ return x.core; }), offen=reihe(function(x){ return x.offen; }), schluss=reihe(function(x){ return x.schluss; });
  var kOffen=reihe(function(x){ return kombinieren(x.core, x.offen, regel); }), kSchluss=reihe(function(x){ return kombinieren(x.core, x.schluss, regel); });
  function m(a){ return a.length?Math.round(a.reduce(function(s,v){ return s+v; },0)/a.length*10000)/10000:null; }
  function vgl(a,b){ var v=LA.vergleich(paare, a, b); return { vorsprung:Math.round(v.differenz*10000)/10000, standardfehler:Math.round(v.standardfehler*10000)/10000, z:v.standardfehler>0?Math.round(v.differenz/v.standardfehler*100)/100:0 }; }
  return { spiele:paare.length, logLoss:{ coreAllein:m(core), pinnacleEroeffnung:m(offen), pinnacleSchluss:m(schluss), kombiMitEroeffnung:m(kOffen), kombiMitSchluss:m(kSchluss) },
    kombiGegenCore:vgl(core,kOffen), kombiGegenPinnacleEroeffnung:vgl(offen,kOffen), kombiSchlussGegenPinnacleSchluss:vgl(schluss,kSchluss),
    hinweis:'vorsprung positiv = der zweitgenannte (Kombination) ist besser; Standardfehler nach Spieltag' };
}

/* Laufende Messung im taeglichen Lauf: privates Quoten-Archiv (wert_messung.js) mit den VORAB abgelegten Core-Tipps
   (prognose_archiv.json). Nur Spiele mit Ergebnis; Quote = letzter Pinnacle-Abruf vor Anstoss. Nur Summenzahlen. */
function laufendMessen(wertArchiv, progArchiv, ergebnisVon, regel){
  var idx=progArchiv&&progArchiv.eintraege||{}, paare=[];
  function tag(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
  Object.keys(wertArchiv&&wertArchiv.ereignisse||{}).forEach(function(k){
    var e=wertArchiv.ereignisse[k], y=ergebnisVon(e); if(y===null||y===undefined) return;
    var d=e.anstossUtc.slice(0,10), t=idx[e.liga+'|'+d+'|'+e.heimKey+'|'+e.gastKey]||idx[e.liga+'|'+tag(d,-1)+'|'+e.heimKey+'|'+e.gastKey];
    if(!t || !t.p) return;
    var l=e.abrufe[e.abrufe.length-1]; paare.push({ r:{ liga:e.liga, datum:d }, y:y, core:t.p, offen:entmargen(l.pinnacle), schluss:entmargen(l.pinnacle) });
  });
  var m=messen(paare, regel);
  return { quelle:'eigenes privates Quoten-Archiv (Odds API, Pinnacle letzter Abruf vor Anstoss) und vorab abgelegte Core-Tipps', spiele:m.spiele,
    logLoss:{ coreAllein:m.logLoss.coreAllein, pinnacle:m.logLoss.pinnacleEroeffnung, kombi:m.logLoss.kombiMitEroeffnung }, kombiGegenCore:m.kombiGegenCore, kombiGegenPinnacle:m.kombiGegenPinnacleEroeffnung,
    hinweis:'Prospektiv: Tipps und Regel standen vor dem Spiel fest. Aussage erst mit vielen Spielen.' };
}
/* Kombi-Tipps fuer kommende Spiele: prognose.json (Core) + Rohquoten dieses Laufs. Ergebnis nur PRIVAT (AGB der Odds API). */
function kommend(prog, roh, regel){
  var aus=[], mit=0;
  (prog.spiele||[]).forEach(function(s){
    if(!s.prognose) return;
    var pc=[s.prognose.heimsieg,s.prognose.remis,s.prognose.auswaertssieg], pm=null, abg=null;
    var pos=s.position||{}, r=roh&&roh[s.liga];
    if(r && pos.anbieterSpielId){ var ev=(r.ereignisse||[]).filter(function(x){ return x.id===pos.anbieterSpielId; })[0];
      var b=ev&&(ev.bookmakers||[]).filter(function(x){ return x.key==='pinnacle'; })[0], mk=b&&(b.markets||[]).filter(function(x){ return x.key==='h2h'; })[0];
      if(mk){ var o={}; mk.outcomes.forEach(function(x){ o[x.name]=x.price; }); var q=[o[ev.home_team],o['Draw'],o[ev.away_team]];
        if(q.every(function(x){ return x>1; }) && Date.parse(r.abgerufenUtc)<Date.parse(ev.commence_time)){ pm=entmargen(q); abg=r.abgerufenUtc; } } }
    var p=pm?kombinieren(pc,pm,regel):pc; if(pm) mit++;
    var i=p[0]>=p[1]&&p[0]>=p[2]?0:(p[2]>=p[1]?2:1);
    aus.push({ liga:s.liga, datum:s.datum, heim:s.heim, gast:s.gast, core:pc, markt:pm, kombi:p.map(function(x){ return Math.round(x*1000)/1000; }), tipp:['Heimsieg','Remis','Auswaertssieg'][i], grundlage:pm?'Core + Pinnacle (feste Regel)':'Core allein (keine Pinnacle-Quote)', quoteAbgerufenUtc:abg });
  });
  return { spiele:aus, mitQuote:mit, gesamt:aus.length };
}

if(require.main===module && process.argv.indexOf('--kommend')>=0){
  var hier0=__dirname, lies0=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); }, rp=process.env.QUOTEN_ROH_PFAD, ziel0=process.env.MARKT_PROGNOSE_PFAD;
  var regel0=lies0(path.join(hier0,'markt_regel.json')), bf=path.join(hier0,'generated','markt_bericht.json'), b0=fs.existsSync(bf)?lies0(bf):{ schema:1 };
  var k=kommend(lies0(path.join(hier0,'generated','prognose.json')), rp&&fs.existsSync(rp)?lies0(rp):null, regel0);
  if(ziel0) fs.writeFileSync(ziel0, JSON.stringify(k,null,1));
  b0.kommend={ spieleGesamt:k.gesamt, mitPinnacle:k.mitQuote, hinweis:'Die Kombi-Tipps je Spiel liegen nur im privaten Actions-Artefakt markt-prognose (AGB der Odds API); hier nur die Anzahl.' };
  fs.writeFileSync(bf, JSON.stringify(b0,null,1)+'\n');
  console.log('Kombi-Tipps: '+k.gesamt+' Spiele, davon '+k.mitQuote+' mit Pinnacle');
}
else if(require.main===module){
  var a=process.argv, i=a.indexOf('--ta'), taPfad=i>=0?a[i+1]:null, hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var regel=lies(path.join(hier,'markt_regel.json')), vs=lies(path.join(hier,'versiegelt.json')), ziel=path.join(hier,'generated','markt_bericht.json');
  var bericht=fs.existsSync(ziel)?lies(ziel):{ schema:1 };
  bericht.regel={ festgelegt:regel.festgelegt, gewichtMarkt:regel.gewichtMarkt, gewichtCore:regel.gewichtCore, entmargung:regel.entmargung };
  if(!taPfad || !fs.existsSync(taPfad)){ console.log('Keine TipsAudit-Datei - Messung an versiegelten Spielen uebersprungen.'); }
  else {
    var L=require('./lauf.js'), aliases=lies(path.join(hier,'..','data','aliases.json')), kand=lies(path.join(hier,'kandidaten.json'));
    var k6=kand.kandidaten.filter(function(k){ return k.name==='K6'; })[0], par=Object.assign({}, kand.fest, { lernrate:k6.lernrate, saisonBehalt:k6.saisonBehalt, dc:k6.dc });
    var d=L.durchlauf(L.bestandLaden(path.join(hier,'..','data','generated'), aliases), par, {});
    var zeilen=d.zeilen.filter(function(z){ return z.datum>=vs.stichtag && !z.zusatz; }).map(function(z){ return { liga:z.liga, datum:z.datum, heimKey:z.heimKey, gastKey:z.gastKey, p:[z.p.sieg_heim,z.p.remis,z.p.sieg_gast], y:{ sieg_heim:0, remis:1, sieg_gast:2 }[z.e.m1x2] }; });
    var zo=zuordnen(zeilen, csvLesen(fs.readFileSync(taPfad,'utf8')), ident.aliasIndex(aliases), vs.stichtag);
    bericht.versiegelt=Object.assign({ quelle:'TipsAudit (CC BY 4.0), nur Spiele ab dem Stichtag '+vs.stichtag, core:'K6, vor jedem Spiel vorhergesagt', zuordnung:zo.stat }, messen(zo.paare, regel));
    console.log(JSON.stringify(bericht.versiegelt,null,1));
  }
  fs.writeFileSync(ziel, JSON.stringify(bericht,null,1)+'\n');
}
module.exports={ laufendMessen:laufendMessen, kommend:kommend, entmargen:entmargen, kombinieren:kombinieren, csvLesen:csvLesen, zuordnen:zuordnen, messen:messen, LIGA:LIGA };
