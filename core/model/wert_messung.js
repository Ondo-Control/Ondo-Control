/* ===================================================================================
   ONDO CORE - Messung "Tipico gegen Pinnacle" (kostenlos). Frage: Gibt es dauerhaft Quoten bei einem weicheren Buchmacher (tipico_de),
   die ueber dem fairen Wert der Pinnacle-Quote liegen? Pinnacle gilt als beste oeffentliche Schaetzung (Profigeld fliesst ein).
   Der Core braucht dafuer KEINE eigene bessere Vorhersage.
   Daten: Rohquoten aus quoten_holen.js (nur im Lauf, Artefakt). Das PRIVATE Archiv (mit Quoten) liegt nur als Actions-Artefakt (AGB der Odds API:
   keine Weitergabe als Datei); ins Repo kommen nur Summenzahlen (wert_bericht.json), keine einzelne Quote.
   Wertmass = fairerPinnacleAnteil x Tipico-Quote (faire Anteile durch proportionale Margenbereinigung). Wert > 1 heisst: Tipico zahlt mehr als fair.
   Auswertung nur an abgeschlossenen Spielen: Gewinn bei Einsatz 1 auf das Ergebnis mit dem hoechsten Wert, wenn der Wert >= Schwelle ist
   (Schwellen 1,00 / 1,03 / 1,05), mit Quote des LETZTEN Abrufs vor Anstoss; dazu CLV: wie sich Pinnacles fairer Anteil vom ersten bis letzten Abruf bewegt hat.
   Aussage erst ab 300 gewerteten Wetten je Schwelle (sonst "noch keine Aussage").
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('../data/identity.js'), Q=require('./quoten.js');
var SCHWELLEN=[1.00,1.03,1.05], MIN_WETTEN=300, MAX_ABRUFE=8;
function r4(x){ return Math.round(x*10000)/10000; }

function dreiWege(ev, bmKey){
  var b=(ev.bookmakers||[]).filter(function(x){ return x.key===bmKey; })[0]; if(!b) return null;
  var m=(b.markets||[]).filter(function(x){ return x.key==='h2h'; })[0]; if(!m) return null;
  var o={}; (m.outcomes||[]).forEach(function(x){ o[x.name]=x.price; });
  var h=o[ev.home_team], g=o[ev.away_team], d=o['Draw'];
  if(!(h>1&&d>1&&g>1)) return null;
  return [h,d,g];
}
function fair(q){ var s=1/q[0]+1/q[1]+1/q[2]; return [1/q[0]/s,1/q[1]/s,1/q[2]/s]; }

/* Ein Abruf in das Archiv aufnehmen. roh = { liga:{ abgerufenUtc, ereignisse:[...] } }; zuordnen(liga, ev) -> { land, heimKey, gastKey } oder null */
function aufnehmen(archiv, roh, zuordnen){
  archiv=archiv||{ schema:1, ereignisse:{} }; var neu=0;
  Object.keys(roh).forEach(function(lg){
    var abg=roh[lg].abgerufenUtc;
    (roh[lg].ereignisse||[]).forEach(function(ev){
      if(!Q.istUtc(abg) || !Q.istUtc(ev.commence_time) || !(Date.parse(abg)<Date.parse(ev.commence_time))) return;   /* nur Abrufe VOR Anstoss */
      var P=dreiWege(ev,'pinnacle'), T=dreiWege(ev,'tipico_de'); if(!P||!T) return;
      var z=zuordnen(lg, ev); if(!z) return;
      var e=archiv.ereignisse[ev.id]||(archiv.ereignisse[ev.id]={ liga:lg, land:z.land, heimKey:z.heimKey, gastKey:z.gastKey, anstossUtc:ev.commence_time, abrufe:[] });
      if(e.abrufe.some(function(a){ return a.abgerufenUtc===abg; })) return;
      e.abrufe.push({ abgerufenUtc:abg, pinnacle:P, tipico:T }); neu++;
      e.abrufe.sort(function(a,b){ return a.abgerufenUtc<b.abgerufenUtc?-1:1; });
      while(e.abrufe.length>MAX_ABRUFE) e.abrufe.splice(1,1);           /* ersten Abruf behalten, aeltere Mitte streichen */
    });
  });
  archiv.neuAufgenommen=neu; return archiv;
}

/* Auswertung. ergebnisVon(e) -> 0 Heim, 1 Remis, 2 Gast oder null (noch kein Ergebnis) */
function auswerten(archiv, ergebnisVon){
  var ev=Object.keys(archiv.ereignisse||{}).map(function(k){ return archiv.ereignisse[k]; });
  var rep={ schema:1, ereignisseImArchiv:ev.length, mitMindestensZweiAbrufen:0, abgeschlossen:0, margeTipicoMittel:null, margePinnacleMittel:null, schwellen:[], clv:null, hinweis:'Summenzahlen, keine einzelne Quote. Aussage erst ab '+MIN_WETTEN+' gewerteten Wetten je Schwelle.' };
  var mt=[], mp=[], clv=[];
  ev.forEach(function(e){ var l=e.abrufe[e.abrufe.length-1]; mt.push(1/l.tipico[0]+1/l.tipico[1]+1/l.tipico[2]-1); mp.push(1/l.pinnacle[0]+1/l.pinnacle[1]+1/l.pinnacle[2]-1); if(e.abrufe.length>=2) rep.mitMindestensZweiAbrufen++; });
  function mittel(a){ return a.length?r4(a.reduce(function(s,x){ return s+x; },0)/a.length):null; }
  rep.margeTipicoMittel=mittel(mt); rep.margePinnacleMittel=mittel(mp);
  SCHWELLEN.forEach(function(sw){
    var n=0, gew=0, treffer=0;
    ev.forEach(function(e){
      var y=ergebnisVon(e); if(y===null||y===undefined) return;
      var l=e.abrufe[e.abrufe.length-1], f=fair(l.pinnacle), best=-1, bi=-1;
      for(var i=0;i<3;i++){ var w=f[i]*l.tipico[i]; if(w>best){ best=w; bi=i; } }
      if(best<sw) return;
      n++; if(bi===y){ treffer++; gew+=l.tipico[bi]-1; } else gew-=1;
    });
    rep.schwellen.push({ schwelle:sw, wetten:n, treffer:treffer, gewinnJeEinsatz:n?r4(gew/n):null, aussage:n>=MIN_WETTEN?'belastbar genug zu pruefen':'noch keine Aussage' });
  });
  ev.forEach(function(e){ var y=ergebnisVon(e); if(y!==null&&y!==undefined) rep.abgeschlossen++; });
  /* CLV: Wert-Wetten des ersten Abrufs (Wert >= 1,03); hat sich Pinnacles fairer Anteil bis zum letzten Abruf in ihre Richtung bewegt? */
  ev.forEach(function(e){
    if(e.abrufe.length<2) return; var a=e.abrufe[0], l=e.abrufe[e.abrufe.length-1], f0=fair(a.pinnacle), f1=fair(l.pinnacle), best=-1, bi=-1;
    for(var i=0;i<3;i++){ var w=f0[i]*a.tipico[i]; if(w>best){ best=w; bi=i; } }
    if(best>=1.03) clv.push(f1[bi]/f0[bi]-1);
  });
  rep.clv={ wetten:clv.length, mittel:mittel(clv), hinweis:'positiv = die Profis haben sich nachtraeglich in diese Richtung bewegt' };
  return rep;
}
module.exports={ aufnehmen:aufnehmen, auswerten:auswerten, fair:fair, SCHWELLEN:SCHWELLEN, MIN_WETTEN:MIN_WETTEN };

if(require.main===module){
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var rohPfad=process.env.QUOTEN_ROH_PFAD, alt=process.env.WERT_ARCHIV_ALT, neu=process.env.WERT_ARCHIV_NEU;
  if(!rohPfad || !fs.existsSync(rohPfad)){ console.log('Keine Rohquoten dieses Laufs - Messung uebersprungen.'); process.exit(0); }
  var aliases=lies(path.join(hier,'..','data','aliases.json')), al=ident.aliasIndex(aliases);
  var archiv=(alt&&fs.existsSync(alt))?lies(alt):null;
  archiv=aufnehmen(archiv, lies(rohPfad), function(lg, ev){ var land=lg.split('.')[0]; return { land:land, heimKey:al(land,ev.home_team).schluessel, gastKey:al(land,ev.away_team).schluessel }; });
  var bestand=require('./lauf.js').bestandLaden(path.join(hier,'..','data','generated'), aliases), erg={};
  Object.keys(bestand.jeLand).forEach(function(l){ bestand.jeLand[l].forEach(function(r){ if(r.th!==undefined&&r.th!==null) erg[l+'|'+r.heimKey+'|'+r.gastKey+'|'+r.datum]=r.th>r.tg?0:r.th===r.tg?1:2; }); });
  function tag(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
  var bericht=auswerten(archiv, function(e){ var d=e.anstossUtc.slice(0,10); var y=erg[e.land+'|'+e.heimKey+'|'+e.gastKey+'|'+d]; if(y===undefined) y=erg[e.land+'|'+e.heimKey+'|'+e.gastKey+'|'+tag(d,-1)]; return y===undefined?null:y; });
  bericht.stand=archiv.neuAufgenommen+' neue Abrufe in diesem Lauf';
  fs.writeFileSync(path.join(hier,'generated','wert_bericht.json'), JSON.stringify(bericht,null,1)+'\n');
  if(neu) fs.writeFileSync(neu, JSON.stringify(archiv));
  console.log('Wert-Messung: '+bericht.ereignisseImArchiv+' Ereignisse im Archiv, '+bericht.abgeschlossen+' abgeschlossen, '+archiv.neuAufgenommen+' neue Abrufe');
}
