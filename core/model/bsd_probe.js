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
/* Struktur einer Antwort: Pfad -> Typ, Arrays mit Laenge; Werte NICHT (keine Rohdaten) */
function struktur(o,pfad,out,tiefe){ if(tiefe>6) return; if(Array.isArray(o)){ out[pfad||'/']='array['+o.length+']'; if(o.length&&typeof o[0]==='object') struktur(o[0],pfad+'[]',out,tiefe+1); return; }
  if(o&&typeof o==='object'){ Object.keys(o).sort().forEach(function(k){ struktur(o[k],pfad+'/'+k,out,tiefe+1); }); return; } out[pfad]=o===null?'null':typeof o; }
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
    ber.strukturEvent=(function(){ var o={}; struktur(liste[0],'',o,0); return o; })();
    var proben=[], stat={}, geprueft=0;
    for(var ev of liste.slice(0,15)){
      geprueft++; var t=new Date();
      var r=await get(basis+ev.id+'/lineups/',key), av=await get(basis+ev.id+'/availability/',key);
      var st=(r.json&&JSON.stringify(r.json).match(/"lineup_status":"([a-z]+)"/g))||[]; st.forEach(function(x){ stat[x]=(stat[x]||0)+1; });
      stat['lineups_http'+r.status]=(stat['lineups_http'+r.status]||0)+1; stat['availability_http'+av.status]=(stat['availability_http'+av.status]||0)+1;
      if(proben.length<2 && r.json){ var o={}; struktur(r.json,'',o,0); proben.push({ gesehenUtc:iso(t), strukturLineups:o }); }
      if(!ber.strukturAvailability && av.json){ var o2={}; struktur(av.json,'',o2,0); ber.strukturAvailability=o2; }
    }
    ber.lineupsGeprueft=geprueft; ber.statusZaehler=stat; ber.proben=proben;
    ber.hinweis2='Erster Lauf nur zur Feld-Erkennung. Erst wenn die Felder fuer Heim/Gast/Starter/Anstoss bekannt sind, wird gezaehlt (Zaehlung folgt in einem zweiten Schritt).';
  }catch(e){ if(e.message!=='stop') ber.fehler.push(e.message); }
  fs.writeFileSync(ziel,JSON.stringify(ber,null,1)+'\n'); console.log(JSON.stringify(ber));
})();
