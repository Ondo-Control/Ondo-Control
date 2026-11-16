/* ===================================================================================
   ONDO CORE - Regeln als Daten (Architektur Abschnitt 5, Backlog-Punkt 94).
   Liest core/REGELN.md: eine Textdatei, die Ondo selbst aendert. Jede Regel ist eine Zeile
   "- Text: Wert". Der Core kennt jede Regel mit Namen, Art und erlaubtem Bereich. Eine
   unbekannte, doppelte, fehlende oder ungueltige Zeile ist ein Fehler - der Lauf bricht dann
   sichtbar ab, statt still mit einem anderen Wert zu rechnen.
   Kein Netz, kein Schluessel. Laeuft in Node und im Browser.
   =================================================================================== */
(function(wurzel, fabrik){
  if(typeof module==='object' && module.exports) module.exports=fabrik();
  else wurzel.OndoCoreRegeln=fabrik();
})(this, function(){
  /* std = der am 14.11.2026 festgelegte Wert. pruefregel = Aendern nach dem Abschlusstest
     macht das Urteil zu einem nachtraeglich eingestellten Test (wird im Bericht vermerkt). */
  var REGELN=[
    { id:'echtesGeld', text:'Echtes Geld erlaubt', art:'janein', std:false },
    { id:'maxEinsatz', text:'Höchster Einsatz je Wette in Euro', art:'zahl', min:0, max:1000, std:20 },
    { id:'mindestSpieleUrteil', text:'Mindestzahl Spiele für ein Urteil', art:'ganz', min:100, max:100000, std:1000, pruefregel:true },
    { id:'sicherheit', text:'Sicherheit für ein Urteil in Prozent', art:'wahl', werte:[90,95,99], std:95, pruefregel:true },
    { id:'mindestSpieleBelastbar', text:'Mindestzahl Spiele je Mannschaft für eine belastbare Einschätzung', art:'ganz', min:1, max:500, std:20 },
    { id:'mindestSpieleRunde', text:'Mindestzahl Spiele je Trainingsrunde', art:'ganz', min:50, max:5000, std:300 }
  ];

  /* Schreibweisen angleichen: Gross/Klein, Umlaute (ä = ae), mehrfache Leerzeichen. */
  function norm(s){
    return String(s).toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
      .replace(/\s+/g,' ').trim();
  }

  function wertLesen(r, roh){
    var t=String(roh).trim();
    if(r.art==='janein'){
      var j=norm(t);
      if(j==='ja') return { wert:true };
      if(j==='nein') return { wert:false };
      return { fehler:'erwartet "ja" oder "nein", gefunden "'+t+'"' };
    }
    var z=t.replace(/\s*(€|euro|%|prozent)\s*$/i,'').replace(',','.');
    if(!/^-?\d+(\.\d+)?$/.test(z)) return { fehler:'erwartet eine Zahl, gefunden "'+t+'"' };
    var n=Number(z);
    if(r.art==='ganz' && Math.floor(n)!==n) return { fehler:'erwartet eine ganze Zahl, gefunden "'+t+'"' };
    if(r.art==='wahl'){
      if(r.werte.indexOf(n)<0) return { fehler:'erlaubt sind '+r.werte.join(', ')+', gefunden "'+t+'"' };
      return { wert:n };
    }
    if(n<r.min || n>r.max) return { fehler:'erlaubt ist '+r.min+' bis '+r.max+', gefunden "'+t+'"' };
    return { wert:n };
  }

  /* Text der Regeldatei -> { ok, werte, fehler[] }. Nur Zeilen mit Spiegelstrich zaehlen. */
  function lesen(text){
    var werte={}, fehler=[], nachText={};
    REGELN.forEach(function(r){ nachText[norm(r.text)]=r; });
    String(text).split(/\r?\n/).forEach(function(zeile, i){
      var m=zeile.match(/^\s*[-*]\s+(.*)$/);
      if(!m) return;
      var pos=m[1].lastIndexOf(':');
      if(pos<0){ fehler.push('Zeile '+(i+1)+': kein Doppelpunkt in "'+m[1].trim()+'"'); return; }
      var name=m[1].slice(0,pos), r=nachText[norm(name)];
      if(!r){ fehler.push('Zeile '+(i+1)+': unbekannte Regel "'+name.trim()+'"'); return; }
      if(Object.prototype.hasOwnProperty.call(werte, r.id)){ fehler.push('Zeile '+(i+1)+': Regel "'+r.text+'" steht doppelt da'); return; }
      var w=wertLesen(r, m[1].slice(pos+1));
      if(w.fehler){ fehler.push('Zeile '+(i+1)+': "'+r.text+'" - '+w.fehler); return; }
      werte[r.id]=w.wert;
    });
    REGELN.forEach(function(r){
      if(!Object.prototype.hasOwnProperty.call(werte, r.id)) fehler.push('Regel fehlt: "'+r.text+'"');
    });
    return { ok:fehler.length===0, werte:werte, fehler:fehler };
  }

  function standard(){ var w={}; REGELN.forEach(function(r){ w[r.id]=r.std; }); return w; }

  /* Fuer den Bericht: jede Regel mit Text und Wert, dazu was vom festgelegten Wert abweicht. */
  function uebersicht(werte){
    var liste=REGELN.map(function(r){ return { id:r.id, text:r.text, wert:werte[r.id] }; });
    var geaendert=REGELN.filter(function(r){ return werte[r.id]!==r.std; }).map(function(r){
      return { id:r.id, text:r.text, festgelegt:r.std, jetzt:werte[r.id], pruefregel:!!r.pruefregel }; });
    var aus={ liste:liste, geaendert:geaendert };
    if(geaendert.some(function(g){ return g.pruefregel; }))
      aus.hinweis='Eine Pruefregel wurde nach dem Abschlusstest geaendert. Die Urteile folgen der neuen Regel und sind damit kein vorab festgelegter Test mehr.';
    return aus;
  }

  /* Die eine Stelle, an der ueber echtes Geld entschieden wird. Beide Bedingungen muessen
     gelten: Ondos Regel erlaubt es UND ein Vorteil gegen die Wettquote ist belegt. */
  function echtesGeldErlaubt(werte, urteilGegenMarkt){
    return werte.echtesGeld===true && urteilGegenMarkt==='belegt';
  }

  /* Einsatz nie ueber Ondos Grenze, nie unter 0. */
  function einsatzBegrenzen(werte, einsatz){
    var e=Number(einsatz);
    if(!(e>0)) return 0;
    return Math.min(e, werte.maxEinsatz);
  }

  return { REGELN:REGELN, lesen:lesen, standard:standard, uebersicht:uebersicht,
           echtesGeldErlaubt:echtesGeldErlaubt, einsatzBegrenzen:einsatzBegrenzen };
});
