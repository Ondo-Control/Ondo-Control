/* ===================================================================================
   ONDO CORE - Wetter am Spieltag (Backlog-Punkt 94). Quelle: NASA POWER (frei, ohne Schluessel, offene NASA-Daten), Tageswerte je Gitterzelle
   (0,5 Grad x 0,625 Grad): Niederschlag PRECTOTCORR (mm), Hoechsttemperatur T2M_MAX (Grad C), Wind in 10 m WS10M_MAX (m/s).
   Eingabe: stadien.json (Koordinaten je Mannschaft) und die Heimspiele aus dem Bestand. Ergebnis: core/data/generated/wetter.json =
   { teams:{ Mannschaftsschluessel:{ 'JJJJ-MM-TT':[mm, grad, windMs] } } } - nur Tageswerte der Heimspieltage am Heimstadion.
   Kein Wert fuer ein Spiel = Wetter unbekannt (Merkmal 0). Rechenteil (zelle, bauen) ohne Netz; Abruf nur im CLI.
   Aufruf: node core/data/wetter_bauen.js   (braucht Netz zu power.larc.nasa.gov; Pause zwischen Abrufen, Wiederholung bei Fehlern)
   =================================================================================== */
var fs=require('fs'), path=require('path');
function zelle(lat, lon){ return (Math.round(lat/0.5)*0.5).toFixed(1)+'|'+(Math.round(lon/0.625)*0.625).toFixed(3); }
/* serie: Antwort von POWER { PRECTOTCORR:{datum:wert}, ... }; datum JJJJMMTT. Fehlwerte (-999) -> weggelassen. */
function werte(serie, datum){
  var k=datum.replace(/-/g,''), p=serie.PRECTOTCORR&&serie.PRECTOTCORR[k], t=serie.T2M_MAX&&serie.T2M_MAX[k], w=serie.WS10M_MAX&&serie.WS10M_MAX[k];
  if(![p,t,w].every(function(x){ return typeof x==='number' && x>-900; })) return null;
  return [Math.round(p*10)/10, Math.round(t*10)/10, Math.round(w*10)/10];
}
/* stadien: {key:{lat,lon}}, heimTage: {key:[datum...]}, serieJeZelle: {zelle:serie} -> { teams, ohneWert } */
function bauen(stadien, heimTage, serieJeZelle){
  var teams={}, ohne=0, mit=0;
  Object.keys(heimTage).forEach(function(k){
    var s=stadien[k]; if(!s) return;
    var ser=serieJeZelle[zelle(s.lat,s.lon)]; if(!ser) { ohne+=heimTage[k].length; return; }
    heimTage[k].forEach(function(d){ var w=werte(ser,d); if(w){ (teams[k]=teams[k]||{})[d]=w; mit++; } else ohne++; });
  });
  return { teams:teams, mit:mit, ohne:ohne };
}
module.exports={ zelle:zelle, werte:werte, bauen:bauen };

if(require.main===module){
  var gen=path.join(__dirname,'generated'), L=require('../model/lauf.js');
  var aliases=JSON.parse(fs.readFileSync(path.join(__dirname,'aliases.json'),'utf8')), best=L.bestandLaden(gen, aliases);
  var stadien=JSON.parse(fs.readFileSync(path.join(gen,'stadien.json'),'utf8')).teams, heim={}, von={}, bis={};
  Object.keys(best.jeLand).forEach(function(l){ best.jeLand[l].forEach(function(r){
    if(!stadien[r.heimKey]) return; (heim[r.heimKey]=heim[r.heimKey]||{})[r.datum]=1;
    var z=zelle(stadien[r.heimKey].lat, stadien[r.heimKey].lon); if(!von[z]||r.datum<von[z]) von[z]=r.datum; if(!bis[z]||r.datum>bis[z]) bis[z]=r.datum; }); });
  var heimTage={}; Object.keys(heim).forEach(function(k){ heimTage[k]=Object.keys(heim[k]).sort(); });
  var zellen={}; Object.keys(heimTage).forEach(function(k){ var s=stadien[k], z=zelle(s.lat,s.lon); zellen[z]=zellen[z]||{ lat:s.lat, lon:s.lon }; });
  var heute=new Date(Date.now()-10*86400000).toISOString().slice(0,10);       /* neueste Tage liefert POWER noch nicht */
  var ids=Object.keys(zellen).sort(), serie={}, fehler=[], i=0;
  var schlaf=function(ms){ return new Promise(function(r){ setTimeout(r,ms); }); };
  (async function(){
    for(i=0;i<ids.length;i++){
      var z=ids[i], c=zellen[z], bis2=bis[z]>heute?heute:bis[z], ok=false;
      for(var v=0; v<4 && !ok; v++){
        try{
          var u='https://power.larc.nasa.gov/api/temporal/daily/point?parameters=PRECTOTCORR,T2M_MAX,WS10M_MAX&community=RE&longitude='+c.lon+'&latitude='+c.lat+'&start='+von[z].replace(/-/g,'')+'&end='+bis2.replace(/-/g,'')+'&format=JSON';
          var res=await fetch(u); if(!res.ok) throw new Error('HTTP '+res.status);
          serie[z]=(await res.json()).properties.parameter; ok=true;
        }catch(e){ await schlaf(2000*(v+1)); }
      }
      if(!ok) fehler.push(z);
      await schlaf(300);
    }
    var e=bauen(stadien, heimTage, serie);
    fs.writeFileSync(path.join(gen,'wetter.json'), JSON.stringify({ schema:1, quelle:'NASA POWER (offene NASA-Daten): PRECTOTCORR mm, T2M_MAX Grad C, WS10M_MAX m/s, Tageswerte je Gitterzelle 0,5 x 0,625 Grad', zellen:ids.length, zellenOhneAbruf:fehler.length, spielTageMitWert:e.mit, spielTageOhneWert:e.ohne, teams:e.teams })+'\n');
    console.log('Wetter: '+ids.length+' Zellen, '+fehler.length+' ohne Abruf, '+e.mit+' Heimspieltage mit Wert, '+e.ohne+' ohne');
  })();
}
