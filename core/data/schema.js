/* ===================================================================================
   ONDO CORE - Datenfundament (Backlog-Punkt 94), Teil "Schema".
   Das neutrale Format eines Spiels (MatchRecord). Bewusst NICHT das kiProtokoll-Schema der
   App: jenes ist auf Aussagen der Sprachmodelle zugeschnitten, dieses auf Ergebnisse.

   MatchRecord:
     id       stabile Spielidentitaet (fxId aus Datum + kanonischen Mannschaftsnamen)
     liga     Ligakennung wie in OpenFootball, z. B. "de.1"
     saison   "JJJJ-JJ"
     datum    "JJJJ-MM-TT"
     heim, gast      kanonische Anzeigenamen
     heimKey, gastKey  Mannschaftsschluessel (nach Alias-Aufloesung)
     th, tg   Tore Heim/Gast nach regulaerer Spielzeit (ganze Zahlen >= 0)
     hz       [heim, gast] zur Halbzeit oder null
     quellen  Liste aus "of" (OpenFootball) und "espn"
     beleg    { of: "<Saison>/<Liga>.json", espn: "<providerEventId>" } - nur Herkunft,
              keine Rohantworten
     zusatz   true, wenn das Spiel ueber die Doppelrunde hinausgeht (Relegation, Playoff)
   =================================================================================== */
(function(root, factory){
  if(typeof module==='object' && module.exports) module.exports=factory();
  else root.OndoCoreSchema=factory();
})(this, function(){

  var SCHEMA_VERSION = 1;

  /* Die Ligen des ersten Datenbestands. "land" ist der Geltungsbereich der Alias-Tabelle,
     "espn" der Wettbewerbs-Slug im eigenen ESPN-Archiv (null = dort nicht gesammelt). */
  var LIGEN = [
    { id:'de.1', land:'de', espn:'ger.1', name:'Bundesliga' },
    { id:'de.2', land:'de', espn:'ger.2', name:'2. Bundesliga' },
    { id:'de.3', land:'de', espn:null,    name:'3. Liga' },
    { id:'en.1', land:'en', espn:'eng.1', name:'Premier League' },
    { id:'en.2', land:'en', espn:'eng.2', name:'Championship' },
    { id:'en.3', land:'en', espn:null,    name:'League One' },
    { id:'en.4', land:'en', espn:null,    name:'League Two' },
    { id:'es.1', land:'es', espn:'esp.1', name:'La Liga' },
    { id:'es.2', land:'es', espn:'esp.2', name:'La Liga 2' },
    { id:'fr.1', land:'fr', espn:'fra.1', name:'Ligue 1' },
    { id:'fr.2', land:'fr', espn:'fra.2', name:'Ligue 2' },
    { id:'it.1', land:'it', espn:'ita.1', name:'Serie A' },
    { id:'it.2', land:'it', espn:'ita.2', name:'Serie B' },
    { id:'nl.1', land:'nl', espn:'ned.1', name:'Eredivisie' },
    { id:'pt.1', land:'pt', espn:'por.1', name:'Primeira Liga' }
  ];
  function liga(id){ for(var i=0;i<LIGEN.length;i++) if(LIGEN[i].id===id) return LIGEN[i]; return null; }
  function ligaAusEspn(slug){ for(var i=0;i<LIGEN.length;i++) if(LIGEN[i].espn===slug) return LIGEN[i]; return null; }

  function istTor(n){ return typeof n==='number' && isFinite(n) && n>=0 && n<=30 && Math.floor(n)===n; }

  /* Prueft EINEN MatchRecord. Rueckgabe: Liste der Fehler (leer = in Ordnung). */
  function pruefeRecord(r){
    var f=[];
    if(!r || typeof r!=='object') return ['kein Objekt'];
    if(!/^fx[a-z0-9_]+$/.test(String(r.id||''))) f.push('id fehlt oder ungueltig');
    if(!liga(r.liga)) f.push('liga unbekannt: '+r.liga);
    if(!/^\d{4}-\d{2}$/.test(String(r.saison||''))) f.push('saison ungueltig');
    var d=String(r.datum||'');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(d) || isNaN(new Date(d+'T00:00:00Z').getTime())) f.push('datum ungueltig');
    if(!r.heim || !r.gast) f.push('Mannschaftsname fehlt');
    if(!r.heimKey || !r.gastKey) f.push('Mannschaftsschluessel fehlt');
    if(r.heimKey && r.heimKey===r.gastKey) f.push('Mannschaft spielt gegen sich selbst');
    if(!istTor(r.th) || !istTor(r.tg)) f.push('Tore ungueltig');
    if(r.hz!==null && r.hz!==undefined){
      if(!Array.isArray(r.hz) || r.hz.length!==2 || !istTor(r.hz[0]) || !istTor(r.hz[1])) f.push('Halbzeit ungueltig');
      else if(istTor(r.th) && istTor(r.tg) && (r.hz[0]>r.th || r.hz[1]>r.tg)) f.push('Halbzeit hoeher als Endstand');
    }
    if(!Array.isArray(r.quellen) || !r.quellen.length ||
       r.quellen.some(function(q){ return q!=='of' && q!=='espn'; })) f.push('quellen ungueltig');
    return f;
  }

  /* Eine Liga-Saison platzsparend ablegen: Mannschaftsnamen einmal, Spiele als Zahlenzeilen.
     Zeile: [datum, heimIndex, gastIndex, th, tg, hzHeim, hzGast, quelle, zusatz]
       hzHeim/hzGast = -1, wenn keine Halbzeit bekannt · quelle 1=of 2=espn 3=beide ·
       zusatz 1 = Spiel ausserhalb der Doppelrunde. */
  function packen(kopf, records){
    var teams=[], pos={};
    function ix(name){ if(!(name in pos)){ pos[name]=teams.length; teams.push(name); } return pos[name]; }
    var sort=records.slice().sort(function(a,b){
      return a.datum<b.datum?-1:a.datum>b.datum?1:(a.id<b.id?-1:a.id>b.id?1:0); });
    sort.map(function(r){ return r.heim; }).concat(sort.map(function(r){ return r.gast; }))
        .sort().forEach(ix);
    return {
      schema:SCHEMA_VERSION, liga:kopf.liga, saison:kopf.saison, status:kopf.status,
      teams:teams,
      spiele:sort.map(function(r){
        var q=(r.quellen.indexOf('of')>=0?1:0)+(r.quellen.indexOf('espn')>=0?2:0);
        return [r.datum, ix(r.heim), ix(r.gast), r.th, r.tg,
                r.hz?r.hz[0]:-1, r.hz?r.hz[1]:-1, q, r.zusatz?1:0];
      })
    };
  }
  /* Umkehrung von packen(). "aufloesen" ist die Funktion aus identity.aliasIndex(),
     "fxId"/"teamSchluessel" kommen aus identity.js - so bleibt diese Datei ohne Abhaengigkeit. */
  function entpacken(datei, ident, aufloesen, land){
    return (datei.spiele||[]).map(function(z){
      var heim=datei.teams[z[1]], gast=datei.teams[z[2]];
      var q=[]; if(z[7]&1) q.push('of'); if(z[7]&2) q.push('espn');
      return { id:ident.fxId(z[0], heim, gast), liga:datei.liga, saison:datei.saison, datum:z[0],
               heim:heim, gast:gast,
               heimKey:aufloesen(land, heim).schluessel, gastKey:aufloesen(land, gast).schluessel,
               th:z[3], tg:z[4], hz:(z[5]>=0&&z[6]>=0)?[z[5],z[6]]:null,
               quellen:q, zusatz:!!z[8] };
    });
  }

  return { SCHEMA_VERSION:SCHEMA_VERSION, LIGEN:LIGEN, liga:liga, ligaAusEspn:ligaAusEspn,
           pruefeRecord:pruefeRecord, packen:packen, entpacken:entpacken };
});
