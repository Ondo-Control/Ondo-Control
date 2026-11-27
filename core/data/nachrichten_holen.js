/* ===================================================================================
   ONDO CORE - Nachrichtenlage je Verein (Idee 20, 27.11.2026). Quelle: GDELT DOC 2.0 API (frei, ohne Schluessel;
   Zeitreihen ab 1.1.2017). Es werden NUR Summenzahlen je Verein und Tag gespeichert: Anzahl Artikel, mittlerer Ton,
   Anzahl Artikel mit Unruhe-Themen (Festnahme, Skandal, Prozess, Krankheit/Medizin, Protest). KEINE Namen von Personen,
   keine Schlagzeilen, keine Inhalte - die persoenlichen Dinge einzelner Menschen bleiben draussen; der Core sieht nur,
   dass um einen Verein ungewoehnlich viel oder ungewoehnlich negativ berichtet wird.
   Hoeflich: eine Anfrage je 6 Sekunden (GDELT verlangt mindestens 5), erkennbarer User-Agent, bei 429 Warten.
   Ein Fehlschlag bricht nichts ab: der Verein bleibt dann unbekannt (Merkmal 0).
   Aufruf: node core/data/nachrichten_holen.js --aus <datei.json> [--von 20170101] [--nur <n Vereine, Probe>] [--teams <liste.json>]
   =================================================================================== */
var fs=require('fs'), path=require('path');
var UA='OndoControl-Nachrichten/1.0 (https://github.com/Ondo-Control/Ondo-Control; nur Summenzahlen)';
var THEMEN='(theme:ARREST OR theme:SCANDAL OR theme:TRIAL OR theme:MEDICAL OR theme:PROTEST)';
var WEG=/^(fc|cf|afc|sc|sv|sbv|ud|cd|sd|rcd|ca|ss|us|ssc|calcio|1\.|tsv|spvgg|sg|bsc|fsv|ssv|ad|sad|cfc|aj)$/i;
var EXONYM={ 'München':'Munich', 'Köln':'Cologne', 'Nürnberg':'Nuremberg', 'Mönchengladbach':'Monchengladbach', 'Düsseldorf':'Dusseldorf', 'Fürth':'Furth' };
function ascii(t){ return t.normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
/* Suchbegriff: alle Schreibweisen als OR-Gruppe (Original, englischer Ortsname, ohne Akzente) */
function suchbegriff(name){ var s=suchname(name); if(!s) return null; var v=[s], e=s; Object.keys(EXONYM).forEach(function(k){ e=e.split(k).join(EXONYM[k]); }); [e, ascii(s), ascii(e)].forEach(function(x){ if(v.indexOf(x)<0) v.push(x); });
  return (v.length>1?'(':'')+v.map(function(x){ return '"'+x+'"'; }).join(' OR ')+(v.length>1?')':'')+' (football OR soccer)'; }
function suchname(name){
  if(/\b(II|B|U23|U21)$/.test(name.trim())) return null;                 /* zweite Mannschaften: unbekannt */
  var t=name.replace(/[.,]/g,function(c){ return c==='.'?'.':' '; }).split(/\s+/).filter(function(w){ return w && !WEG.test(w) && !/^\d+$/.test(w); });
  var s=t.join(' ').trim(); return s.length>=4?s:name.trim();
}
function warte(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
async function abfrage(q, modus, von){
  var url='https://api.gdeltproject.org/api/v2/doc/doc?query='+encodeURIComponent(q)+'&mode='+modus+'&format=json&startdatetime='+von+'000000';
  for(var v=0;v<4;v++){
    try{
      var r=await fetch(url,{ headers:{ 'User-Agent':UA } });
      if(r.status===429){ await warte(30000*(v+1)); continue; }
      var t=await r.text(); if(!r.ok) return { fehler:'HTTP '+r.status };
      try{ return { daten:JSON.parse(t) }; }catch(e){ return { fehler:'keine JSON-Antwort: '+t.slice(0,80) }; }
    }catch(e){ await warte(15000); }
  }
  return { fehler:'nicht erreichbar' };
}
/* GDELT-Zeitreihe -> { 'JJJJ-MM-TT': Wert } */
function reihe(d){
  var aus={}, tl=d&&d.timeline&&d.timeline[0]&&d.timeline[0].data||[];
  tl.forEach(function(p){ var m=/^(\d{4})(\d{2})(\d{2})/.exec(String(p.date)); if(m) aus[m[1]+'-'+m[2]+'-'+m[3]]=(aus[m[1]+'-'+m[2]+'-'+m[3]]||0)+Number(p.value||0); });
  return aus;
}
async function main(){
  var a=process.argv.slice(2); function arg(n,d){ var i=a.indexOf(n); return i>=0?a[i+1]:d; }
  var ziel=arg('--aus'), von=arg('--von','20170101'), nur=Number(arg('--nur','0')), tl=arg('--teams');
  if(!ziel){ console.error('--aus fehlt'); process.exit(2); }
  var hier=__dirname, gen=path.join(hier,'generated'), ident=require('./identity.js'), aufl=ident.aliasIndex(JSON.parse(fs.readFileSync(path.join(hier,'aliases.json'),'utf8')));
  var kat=JSON.parse(fs.readFileSync(path.join(gen,'katalog.json'),'utf8')), teams={};
  kat.dateien.forEach(function(k){ var d=JSON.parse(fs.readFileSync(path.join(gen,k.datei),'utf8')), land=d.liga.split('.')[0];
    d.teams.forEach(function(n){ var key=aufl(land,n).schluessel; if(!teams[key] || k.saison>teams[key].saison) teams[key]={ name:n, saison:k.saison }; }); });
  var liste=Object.keys(teams).sort(); if(tl) { var w=JSON.parse(fs.readFileSync(tl,'utf8')); liste=liste.filter(function(k){ return w.indexOf(k)>=0; }); }
  if(nur) liste=liste.slice(0,nur);
  var alt=fs.existsSync(ziel)?JSON.parse(fs.readFileSync(ziel,'utf8')):{ schema:1, teams:{} }, fehl=[], ok=0;
  for(var i=0;i<liste.length;i++){
    var key=liste[i], q=suchbegriff(teams[key].name), erg={}; if(!q) continue;
    var m=await abfrage(q,'timelinevolraw',von); await warte(6000);
    var t=await abfrage(q,'timelinetone',von); await warte(6000);
    var n=await abfrage(q+' '+THEMEN,'timelinevolraw',von); await warte(6000);
    if(m.fehler||t.fehler){ fehl.push(key+': '+(m.fehler||t.fehler)); continue; }
    var V=reihe(m.daten), T=reihe(t.daten), N=n.fehler?null:reihe(n.daten);
    Object.keys(V).forEach(function(d){ if(V[d]>0) erg[d]=[Math.round(V[d]), Math.round((T[d]||0)*100)/100, N?Math.round(N[d]||0):null]; });
    var e=alt.teams[key]=alt.teams[key]||{ suche:q, tage:{} }; e.suche=q; Object.keys(erg).forEach(function(d){ e.tage[d]=erg[d]; }); ok++;
    if(i%20===0) fs.writeFileSync(ziel, JSON.stringify(alt));
  }
  alt.quelle='GDELT DOC 2.0 API (frei, Nennung erbeten): je Verein und Tag Anzahl Artikel, mittlerer Ton, Artikel mit Unruhe-Themen; keine Personen, keine Inhalte';
  fs.writeFileSync(ziel, JSON.stringify(alt));
  console.log('Nachrichten: '+ok+' Vereine geholt, '+fehl.length+' Fehler'); fehl.slice(0,20).forEach(function(f){ console.log('  - '+f); });
}
if(require.main===module) main().catch(function(e){ console.error(e); process.exit(0); });
module.exports={ suchbegriff:suchbegriff, suchname:suchname, reihe:reihe, THEMEN:THEMEN };
