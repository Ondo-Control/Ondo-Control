/* ===================================================================================
   ONDO CORE - Test der Quelle Bzzoiro Sports Data (BSD), Free-Tarif. NUR MESSUNG, kein Produktpfad.
   Laeuft nur mit Secret BSD_API_KEY. Schreibt NUR Zaehlwerte und Feldnamen nach generated/bsd_probe.json,
   keine Rohdaten (die Lizenz ist von uns noch nicht wortgetreu geprueft). Eigener UTC-Zeitstempel je Abruf.
   Frage des Tests: Liefert die Quelle VOR Anstoss eine bestaetigte Elf mit 11 Startern je Seite?
   =================================================================================== */
var fs=require('fs'), path=require('path'), https=require('https');
function get(pfad,key){ return new Promise(function(ok,nein){ https.get({ host:'sports.bzzoiro.com', path:pfad, headers:{ Authorization:'Token '+key, Accept:'application/json' } },function(r){ var d=''; r.on('data',function(c){ d+=c; }); r.on('end',function(){ var j=null; try{ j=JSON.parse(d); }catch(e){} ok({ status:r.statusCode, json:j, limit:r.headers['x-ratelimit-limit']||null }); }); }).on('error',nein); }); }
function iso(d){ return d.toISOString().replace(/\.\d+Z$/,'Z'); }
function feldnamen(o){ return o&&typeof o==='object'&&!Array.isArray(o)?Object.keys(o).sort():[]; }
/* sucht rekursiv Arrays; zaehlt Eintraege der ersten zwei Arrays mit "starter"-aehnlichem Namen */
function startzahlen(o,out,pfad){ if(!o||typeof o!=='object') return; if(Array.isArray(o)){ if(/start|xi|lineup|players/i.test(pfad)) out.push({ pfad:pfad, n:o.length }); return; } Object.keys(o).forEach(function(k){ startzahlen(o[k],out,pfad+'/'+k); }); }
(async function(){
  var key=process.env.BSD_API_KEY, ziel=path.join(__dirname,'generated','bsd_probe.json');
  if(!key){ console.log('BSD_API_KEY nicht gesetzt - kein Test.'); return; }
  var jetzt=new Date(), bis=new Date(jetzt.getTime()+3*86400000), ber={ schema:1, abgerufenUtc:iso(jetzt), hinweis:'Nur Zaehlwerte und Feldnamen, keine Rohdaten.', fehler:[] };
  try{
    var basis=null, antw=null;
    for(var b of ['/api/v2/events/','/api/events/']){ antw=await get(b+'?status=upcoming&date_from='+iso(jetzt).slice(0,10)+'&date_to='+iso(bis).slice(0,10),key); ber.statusEvents=ber.statusEvents||{}; ber.statusEvents[b]=antw.status; if(antw.status===200){ basis=b; break; } }
    ber.rateLimitKopf=antw&&antw.limit; if(!basis){ ber.fehler.push('Events nicht abrufbar'); throw new Error('stop'); }
    var liste=Array.isArray(antw.json)?antw.json:(antw.json&&(antw.json.results||antw.json.events))||[];
    ber.anzahlEvents=liste.length; ber.eventFelder=feldnamen(liste[0]);
    var stat={}, mitElf=0, vorAnstoss=0, geprueft=0, felder=null;
    for(var ev of liste.slice(0,15)){
      var r=await get(basis+ev.id+'/lineups/',key); geprueft++; var t=new Date();
      if(r.status!==200||!r.json){ stat['http'+r.status]=(stat['http'+r.status]||0)+1; continue; }
      felder=felder||feldnamen(r.json); var s=String(r.json.lineup_status||'unbekannt'); stat[s]=(stat[s]||0)+1;
      var zahlen=[]; startzahlen(r.json,zahlen,''); if(s==='confirmed' && zahlen.filter(function(z){ return z.n===11; }).length>=2){ mitElf++; var anstoss=Date.parse(ev.event_date||ev.start_time||ev.kickoff||ev.date||''); if(anstoss&&t.getTime()<anstoss) vorAnstoss++; }
    }
    ber.lineupsGeprueft=geprueft; ber.lineupStatus=stat; ber.lineupFelder=felder; ber.confirmedMitZweiMalElf=mitElf; ber.davonVorAnstossGesehen=vorAnstoss;
  }catch(e){ if(e.message!=='stop') ber.fehler.push(e.message); }
  fs.writeFileSync(ziel,JSON.stringify(ber,null,1)+'\n'); console.log(JSON.stringify(ber));
})();
