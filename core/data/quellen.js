/* ===================================================================================
   ONDO CORE - Datenfundament (Backlog-Punkt 94), Teil "Quellen-Adapter".
   Zwei Leser, die fremde Formate in eine gemeinsame Rohform bringen. Kein Netz: beide
   lesen nur bereits vorhandene Dateien.
     OpenFootball  https://github.com/openfootball/football.json (CC0 1.0), als Ordner
                   <wurzel>/<Saison>/<Liga>.json
     ESPN-Archiv   daten/espn-ergebnisse/JJJJ-MM.json dieses Repos (eigener Sammler,
                   Backlog-Punkt 84)
   Rohform: { liga, saison, datum, heim, gast, th, tg, hz, quelle, beleg, hatErgebnis }
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('./identity.js'), schema=require('./schema.js');

function zahlPaar(a){
  return (Array.isArray(a) && a.length===2 && typeof a[0]==='number' && typeof a[1]==='number') ? [a[0],a[1]] : null;
}

/* Alle Saisons einer Liga aus dem OpenFootball-Ordner. Nur Ordner der Form JJJJ-JJ. */
function openfootballSaisons(wurzel, ligaId){
  if(!fs.existsSync(wurzel)) return [];
  return fs.readdirSync(wurzel).filter(function(d){
    return /^\d{4}-\d{2}$/.test(d) && fs.existsSync(path.join(wurzel, d, ligaId+'.json'));
  }).sort();
}
function openfootballLesen(wurzel, ligaId, saison){
  var datei=JSON.parse(fs.readFileSync(path.join(wurzel, saison, ligaId+'.json'),'utf8'));
  return (datei.matches||[]).map(function(m){
    var ft=zahlPaar(m.score && m.score.ft), ht=zahlPaar(m.score && m.score.ht);
    return { liga:ligaId, saison:saison, datum:String(m.date||''), heim:String(m.team1||''),
             gast:String(m.team2||''), th:ft?ft[0]:null, tg:ft?ft[1]:null, hz:ft?ht:null,
             quelle:'of', beleg:saison+'/'+ligaId+'.json', hatErgebnis:!!ft };
  });
}

/* Positivregel wie in beta.html (Backlog-Punkt 92): nur ein belegter normaler Abschluss
   zaehlt. Ligaspiele enden nach 90 Minuten - Verlaengerung/Elfmeterschiessen waere hier
   selbst eine Auffaelligkeit und wird deshalb ebenfalls geparkt. */
function espnNormalBeendet(v){
  return !!(v && v.status==='FT' && v.beleg && v.beleg.completed===true &&
            v.beleg.statusTyp==='STATUS_FULL_TIME' && !v.verlaengerungGespielt &&
            typeof v.torHeim==='number' && typeof v.torGast==='number');
}
/* Rueckgabe: { spiele:[Rohform], geparkt:n, ohneLiga:{slug:n} } */
function espnLesen(archivOrdner){
  var aus={ spiele:[], geparkt:0, ohneLiga:{}, dateien:[] };
  if(!fs.existsSync(archivOrdner)) return aus;
  fs.readdirSync(archivOrdner).filter(function(n){ return /^\d{4}-\d{2}\.json$/.test(n); }).sort()
    .forEach(function(n){
      aus.dateien.push(n);
      var d=JSON.parse(fs.readFileSync(path.join(archivOrdner,n),'utf8'));
      (d.spiele||[]).forEach(function(v){
        var l=schema.ligaAusEspn(v.providerCompetitionSlug);
        if(!l){ aus.ohneLiga[v.providerCompetitionSlug]=(aus.ohneLiga[v.providerCompetitionSlug]||0)+1; return; }
        if(!espnNormalBeendet(v)){ aus.geparkt++; return; }
        var b=v.kickoffUtc ? ident.fxBerlin(v.kickoffUtc) : null;
        var datum=b ? b.datum : String(v.datum||'');
        var hz=null, m=String(v.halbzeit||'').match(/^(\d+):(\d+)$/);
        if(m) hz=[Number(m[1]),Number(m[2])];
        aus.spiele.push({ liga:l.id, saison:ident.saisonAusDatum(datum), datum:datum,
          heim:String(v.heim||''), gast:String(v.gast||''), th:v.torHeim, tg:v.torGast, hz:hz,
          quelle:'espn', beleg:String(v.providerEventId||''), hatErgebnis:true });
      });
    });
  return aus;
}

module.exports={ openfootballSaisons:openfootballSaisons, openfootballLesen:openfootballLesen,
                 espnLesen:espnLesen, espnNormalBeendet:espnNormalBeendet };
