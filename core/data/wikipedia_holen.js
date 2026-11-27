/* Holt Saison-Seiten der nationalen Pokale von der englischen Wikipedia (Parsoid-HTML ueber die REST-Schnittstelle) in einen Ordner.
   Nur fuer Land-Saisons, die OpenFootball NICHT belegt vollstaendig abdeckt (steht in core/data/generated/pokal.json -> abgedeckt).
   Hoeflich: erkennbarer User-Agent, Pause zwischen Abrufen, bei 429 Warten nach Retry-After, schon vorhandene Dateien werden nicht erneut geholt.
   Ein fehlgeschlagener Abruf bricht NICHTS ab; die Saison gilt dann einfach als nicht belegt (Merkmal 0, siehe pokal_bauen.js).
   Aufruf: node core/data/wikipedia_holen.js --aus <Ordner> [--von 2010] [--bis 2025] [--pause 1500] */
var fs=require('fs'), path=require('path');
var P=require('./pokal_bauen.js');
var UA='OndoControl-Pokalkalender/1.0 (https://github.com/Ondo-Control/Ondo-Control; nur lesend, wenige Abrufe)';

function auftraege(abgedeckt, von, bis){
  var liste=[];
  Object.keys(P.WP_WETTBEWERBE).sort().forEach(function(land){
    for(var j=von;j<=bis;j++){
      var saison=j+'-'+String((j+1)%100).padStart(2,'0');
      if(((abgedeckt||{})[land]||[]).indexOf(saison)>=0) continue;
      P.WP_WETTBEWERBE[land](j).forEach(function(w){
        liste.push({ land:land, saison:saison, wettbewerb:w, titel:P.wpTitel(saison,w), datei:P.wpDateiname(land,saison,w) });
      });
    }
  });
  return liste;
}
function warte(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
async function holen(titel){
  var url='https://en.wikipedia.org/api/rest_v1/page/html/'+encodeURIComponent(titel.replace(/ /g,'_'));
  for(var versuch=0;versuch<4;versuch++){
    var r=await fetch(url,{ headers:{ 'User-Agent':UA, 'Accept':'text/html' }, redirect:'follow' });
    if(r.status===429){ var w=Number(r.headers.get('retry-after'))||30; await warte(Math.min(w,120)*1000); continue; }
    if(!r.ok) return { fehler:'HTTP '+r.status };
    return { html:await r.text() };
  }
  return { fehler:'HTTP 429 (zu viele Abrufe)' };
}
async function main(){
  var a=process.argv.slice(2); function arg(n,d){ var i=a.indexOf(n); return i>=0?a[i+1]:d; }
  var aus=arg('--aus'); if(!aus){ console.error('--aus <Ordner> fehlt'); process.exit(2); }
  var von=Number(arg('--von','2010')), bis=Number(arg('--bis','2025')), pause=Number(arg('--pause','1500'));
  var pj=path.join(__dirname,'generated','pokal.json'), abgedeckt=fs.existsSync(pj)?JSON.parse(fs.readFileSync(pj,'utf8')).abgedeckt:{};
  fs.mkdirSync(aus,{recursive:true});
  var liste=auftraege(abgedeckt,von,bis), neu=0, da=0, fehl=[];
  for(var i=0;i<liste.length;i++){
    var o=liste[i], ziel=path.join(aus,o.datei);
    if(fs.existsSync(ziel)){ da++; continue; }
    var r=await holen(o.titel);
    if(r.html && r.html.length>2000){ fs.writeFileSync(ziel,r.html); neu++; } else fehl.push(o.titel+': '+(r.fehler||'leer'));
    await warte(pause);
  }
  console.log('Wikipedia-Seiten: '+liste.length+' gesucht, '+da+' schon da, '+neu+' neu geholt, '+fehl.length+' nicht erhalten');
  fehl.slice(0,40).forEach(function(f){ console.log('  - '+f); });
}
if(require.main===module) main().catch(function(e){ console.error(e); process.exit(0); });
module.exports={ auftraege:auftraege };
