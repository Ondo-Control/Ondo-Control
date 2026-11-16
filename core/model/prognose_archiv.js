/* ===================================================================================
   ONDO CORE - Prognose-Archiv (Backlog-Punkt 94): die ECHTE Vorab-Messung (Teil C des Berichts).
   1. Jede Prognose wird EINMAL und unveraenderlich abgelegt, bevor das Spiel gespielt ist (nur wenn der
      Erstellungstag strikt vor dem Spieltag liegt, damit kein Anstoss am selben Tag vorweggenommen wird).
   2. Spaeter, wenn das Ergebnis im Spielbestand steht, wird der Eintrag bewertet. Bewertete Eintraege
      aendern sich nie mehr. Nur vorab abgelegte Tipps zaehlen in die laufende Log-Loss.
   Es ist die Messung des Produkts selbst, ohne Quote. Ein Vergleich mit der Quote folgt erst, wenn geprueft
   archivierte Quoten vorliegen. Reine Funktionen im Rechenteil, kein Netz, keine Uhr (--ab kommt vom Aufrufer).
   =================================================================================== */
var fs=require('fs'), path=require('path');
function ergebnisIndex(r){ return r.th>r.tg?0:(r.th===r.tg?1:2); }
function schluessel(e){ return e.liga+'|'+e.datum+'|'+e.schluessel.heim+'|'+e.schluessel.gast; }

/* archiv: { eintraege:{ key:{...} } }; prog: Datei prognose.json; stand: Datenstand-Text */
function aufnehmen(archiv, prog, stand){
  var neu=0;
  prog.spiele.forEach(function(s){
    if(!s.prognose || !s.schluessel) return;
    if(!(prog.ab<s.datum)) return;                       /* nur Spiele ab dem Folgetag */
    var k=schluessel(s); if(archiv.eintraege[k]) return;  /* nie ueberschreiben */
    archiv.eintraege[k]={ liga:s.liga, datum:s.datum, heim:s.heim, gast:s.gast, erstelltAm:prog.ab, modellStand:stand, lagenStand:(s.modell&&s.modell.lagenStand)||null,
      p:[s.prognose.heimsieg,s.prognose.remis,s.prognose.auswaertssieg], tipp:s.tipp }; neu++;
  });
  return neu;
}
/* bestand: Ergebniszeilen mit liga, datum, heimKey, gastKey, th, tg */
function bewerten(archiv, zeilen){
  var idx={}; zeilen.forEach(function(r){ if(typeof r.th==='number' && typeof r.tg==='number' && !r.zusatz) idx[r.liga+'|'+r.datum+'|'+r.heimKey+'|'+r.gastKey]=r; });
  var neu=0;
  Object.keys(archiv.eintraege).forEach(function(k){
    var e=archiv.eintraege[k]; if(e.ergebnis) return;
    var r=idx[k]; if(!r) return;
    var i=ergebnisIndex(r);
    e.ergebnis={ tore:r.th+':'+r.tg, ausgang:['Heimsieg','Remis','Auswaertssieg'][i], verlust:Math.round(-Math.log(Math.max(1e-12,e.p[i]))*10000)/10000, treffer:['Heimsieg','Remis','Auswaertssieg'][i]===e.tipp };
    neu++;
  });
  return neu;
}
function zusammenfassung(archiv){
  var alle=Object.keys(archiv.eintraege).map(function(k){ return archiv.eintraege[k]; }), b=alle.filter(function(e){ return e.ergebnis; });
  var n=b.length, vl=n?b.reduce(function(a,e){ return a+e.ergebnis.verlust; },0)/n:null, tr=n?b.filter(function(e){ return e.ergebnis.treffer; }).length/n:null;
  return { abgelegt:alle.length, bewertet:n, offen:alle.length-n, logLoss:vl===null?null:Math.round(vl*10000)/10000, trefferquote:tr===null?null:Math.round(tr*1000)/1000,
    vergleichZufall:1.0986, hinweis:'Nur vorab abgelegte Tipps. Ohne Quote kein Vergleich mit dem Markt; die Zahl ist erst mit vielen Spielen aussagekraeftig.' };
}
module.exports={ aufnehmen:aufnehmen, bewerten:bewerten, zusammenfassung:zusammenfassung };

if(require.main===module){
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var L=require('./lauf.js');
  var af=path.join(hier,'generated','prognose_archiv.json'), archiv=fs.existsSync(af)?lies(af):{ schema:1, eintraege:{} };
  var prog=lies(path.join(hier,'generated','prognose.json')), mod=lies(path.join(hier,'generated','modell.json'));
  var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), lies(path.join(hier,'..','data','aliases.json')));
  var zeilen=[]; Object.keys(bestand.jeLand).forEach(function(l){ bestand.jeLand[l].forEach(function(r){ zeilen.push(r); }); });
  var a=aufnehmen(archiv, prog, mod.stand), b=bewerten(archiv, zeilen);
  archiv.zusammenfassung=zusammenfassung(archiv);
  fs.writeFileSync(af, JSON.stringify(archiv,null,1)+'\n');
  console.log('Archiv: neu '+a+', neu bewertet '+b+', gesamt '+archiv.zusammenfassung.abgelegt+', bewertet '+archiv.zusammenfassung.bewertet+', Log-Loss '+archiv.zusammenfassung.logLoss);
}
