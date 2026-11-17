/* ===================================================================================
   ONDO CORE - Stadionorte (Backlog-Punkt 94). Quelle: Wikidata (CC0, frei, ohne Schluessel).
   Je Verein aus unseren sieben Laendern: Heimstadion (Eigenschaft P115) mit Koordinaten (P625) und, wenn vorhanden, Hoehe (P2044).
   Ergebnis: core/data/generated/stadien.json = { teams:{ Mannschaftsschluessel:{ lat, lon, ele|null } } } - nur Orte, keine Spiele.
   Zuordnung nur bei EINDEUTIGEM Treffer (gleicher normalisierter Name oder gleicher Mannschaftsschluessel; bei mehreren Treffern nur,
   wenn alle Stadien innerhalb 3 km liegen). Alles andere bleibt unzugeordnet und wird im Merkmal als "unbekannt" (0) gefuehrt.
   Abruf (je Land Q183 DE, Q145+Q25 GB/Wales, Q29 ES, Q142 FR, Q38 IT, Q55 NL, Q45 PT) ueber https://query.wikidata.org/sparql mit der Abfrage ABFRAGE;
   Rechenteil ohne Netz. Aufruf: node core/data/stadien_bauen.js --wd <Ordner mit wd_<land>.json>
   =================================================================================== */
var fs=require('fs'), path=require('path'), ident=require('./identity.js');
var LAENDER={ Q183:'de', Q145:'en', Q25:'en', Q29:'es', Q142:'fr', Q38:'it', Q55:'nl', Q45:'pt' };
var ABFRAGE="SELECT ?c ?lab ?alt ?v ?coord ?ele WHERE { ?c wdt:P31 wd:Q476028; wdt:P17 wd:<LAND>; wdt:P115 ?v. ?v wdt:P625 ?coord. OPTIONAL{?v wdt:P2044 ?ele.} ?c rdfs:label ?lab. FILTER(LANG(?lab) IN ('en','de','es','fr','it','nl','pt')) OPTIONAL{ ?c skos:altLabel ?alt. FILTER(LANG(?alt) IN ('en','de','es','fr','it','nl','pt')) } }";
function km(a,b){ var R=6371, rad=Math.PI/180, dLa=(b.lat-a.lat)*rad, dLo=(b.lon-a.lon)*rad, x=Math.sin(dLa/2)*Math.sin(dLa/2)+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dLo/2)*Math.sin(dLo/2); return 2*R*Math.asin(Math.sqrt(x)); }
/* bindings: Zeilen der Abfrage; mannschaften: [{ land, name, key }] -> { teams, nichtZugeordnet } */
function bauen(bindungenJeLand, mannschaften){
  var idx={}, idx2={};
  Object.keys(bindungenJeLand).forEach(function(land){
    var a=idx[land]=idx[land]||{}, b=idx2[land]=idx2[land]||{};
    bindungenJeLand[land].forEach(function(x){
      var m=/Point\(([-\d.]+) ([-\d.]+)\)/.exec(x.coord.value); if(!m) return;
      var info={ id:x.c.value, lon:+m[1], lat:+m[2], ele:x.ele&&isFinite(+x.ele.value)?Math.round(+x.ele.value):null };
      [x.lab&&x.lab.value, x.alt&&x.alt.value].forEach(function(n){ if(!n) return;
        var k=ident.fxNorm(n), k2=ident.teamSchluessel(n);
        (a[k]=a[k]||{})[info.id]=info; (b[k2]=b[k2]||{})[info.id]=info; });
    });
  });
  function eindeutig(treffer){
    var l=Object.keys(treffer||{}).map(function(k){ return treffer[k]; });
    if(!l.length) return null;
    if(l.every(function(o){ return km(o,l[0])<=3; })) return l.sort(function(p,q){ return p.id<q.id?-1:1; })[0];
    return null;
  }
  var teams={}, nicht=[];
  mannschaften.forEach(function(t){
    var o=eindeutig((idx[t.land]||{})[ident.fxNorm(t.name)]) || eindeutig((idx2[t.land]||{})[ident.teamSchluessel(t.name)]);
    if(o) teams[t.key]={ lat:Math.round(o.lat*10000)/10000, lon:Math.round(o.lon*10000)/10000, ele:o.ele };
    else nicht.push(t.land+': '+t.name);
  });
  return { teams:teams, nichtZugeordnet:nicht.sort() };
}
module.exports={ bauen:bauen, km:km, ABFRAGE:ABFRAGE, LAENDER:LAENDER };

if(require.main===module){
  var a=process.argv, wd=a[a.indexOf('--wd')+1]; if(!wd||wd==='--wd'){ console.error('Aufruf: node stadien_bauen.js --wd <Ordner>'); process.exit(1); }
  var gen=path.join(__dirname,'generated'), aliases=JSON.parse(fs.readFileSync(path.join(__dirname,'aliases.json'),'utf8')), aufl=ident.aliasIndex(aliases);
  var jeLand={}; fs.readdirSync(wd).filter(function(f){ return /^wd_.*\.json$/.test(f); }).forEach(function(f){
    var land=f.replace(/^wd_|\.json$/g,'').replace(/2$/,''); (jeLand[land]=jeLand[land]||[]).push.apply(jeLand[land], JSON.parse(fs.readFileSync(path.join(wd,f),'utf8')).results.bindings); });
  var kat=JSON.parse(fs.readFileSync(path.join(gen,'katalog.json'),'utf8')), seen={}, ms=[];
  kat.dateien.forEach(function(k){ var d=JSON.parse(fs.readFileSync(path.join(gen,k.datei),'utf8')), land=d.liga.split('.')[0];
    d.teams.forEach(function(n){ var key=aufl(land,n).schluessel, id=land+'|'+key; if(!seen[id]){ seen[id]=1; ms.push({ land:land, name:n, key:key }); } }); });
  var e=bauen(jeLand, ms), n=Object.keys(e.teams).length;
  fs.writeFileSync(path.join(gen,'stadien.json'), JSON.stringify({ schema:1, quelle:'Wikidata (CC0): Heimstadion P115, Koordinaten P625, Hoehe P2044', mannschaften:ms.length, zugeordnet:n, nichtZugeordnet:e.nichtZugeordnet, teams:e.teams })+'\n');
  console.log('Stadien: '+n+' von '+ms.length+' Mannschaften zugeordnet; unzugeordnet: '+e.nichtZugeordnet.length);
}
