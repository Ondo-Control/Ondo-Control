/* ===================================================================================
   ONDO CORE - Datenfundament (Backlog-Punkt 94), Teil "Bauen".
   Fuehrt OpenFootball und das eigene ESPN-Archiv zu EINEM geprueften Bestand zusammen und
   schreibt kleine, abgeleitete Dateien nach core/data/generated/:
     spiele/<Liga>/<Saison>.json   die Spiele einer Liga-Saison (Format: schema.packen)
     katalog.json                  Verzeichnis aller Saisondateien mit Zustand und Rolle
     coverage.json                 Abdeckungsbericht: was da ist, was fehlt, was auffaellt
   Kein Modell, keine Quoten, keine Sprachmodelle, kein Netz, keine Uhrzeit: dieselben
   Eingaben ergeben dieselben Dateien. "Heute" ist das juengste Ergebnisdatum im Bestand.

   Aufruf:  node core/data/bauen.js --of <Ordner mit football.json>
            [--nur-pruefen]   nichts schreiben, nur rechnen und Fehler melden
   Ende mit Fehlercode 1, wenn ein Fehler gemeldet wird (dann wird nichts geschrieben).
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('./identity.js'), schema=require('./schema.js'),
    validate=require('./validate.js'), quellen=require('./quellen.js');

function tageAbstand(a,b){
  return Math.abs((new Date(a+'T00:00:00Z')-new Date(b+'T00:00:00Z'))/86400000);
}

/* opt: { ofWurzel, espnOrdner, aliases, splits } -> { fehler, coverage, katalog, dateien } */
function bauen(opt){
  var aufloesen=ident.aliasIndex(opt.aliases);
  var fehler=aufloesen.fehler.slice();
  var LIGEN=schema.LIGEN;

  /* --- 1. OpenFootball lesen, Anzeigenamen je Land und Schluessel festlegen --- */
  var C={};                       /* C[liga][saison] = { ans:[], konflikte:[], ofDatei:bool } */
  var nameJe={};                  /* nameJe[land][schluessel] = { name, saison } */
  var aliasZiel={};
  ((opt.aliases&&opt.aliases.aliases)||[]).forEach(function(a){
    aliasZiel[a.land+'|'+ident.teamSchluessel(a.nach)]=a.nach;
  });
  function merkeName(land, name, saison){
    var k=aufloesen(land,name).schluessel;
    nameJe[land]=nameJe[land]||{};
    var alt=nameJe[land][k];
    if(!alt || saison>alt.saison || (saison===alt.saison && name<alt.name)) nameJe[land][k]={ name:name, saison:saison };
    return k;
  }
  function anzeige(land, k){ return aliasZiel[land+'|'+k] || (nameJe[land][k] && nameJe[land][k].name) || k; }
  function saisonBox(liga, saison){
    C[liga]=C[liga]||{};
    if(!C[liga][saison]) C[liga][saison]={ ans:[], konflikte:[], ofDatei:false };
    return C[liga][saison];
  }
  LIGEN.forEach(function(l){
    quellen.openfootballSaisons(opt.ofWurzel, l.id).forEach(function(s){
      var box=saisonBox(l.id, s); box.ofDatei=true;
      quellen.openfootballLesen(opt.ofWurzel, l.id, s).forEach(function(r){
        box.ans.push({ heimKey:merkeName(l.land, r.heim, s), gastKey:merkeName(l.land, r.gast, s),
          datum:r.datum, th:r.th, tg:r.tg, hz:r.hz, hatErgebnis:r.hatErgebnis,
          quellen:r.hatErgebnis?['of']:[], beleg:{ of:r.beleg } });
      });
    });
  });

  /* --- 2. ESPN-Archiv einarbeiten: ergaenzen, bestaetigen oder Widerspruch melden --- */
  var e=quellen.espnLesen(opt.espnOrdner);
  var unaufgeloest={}, gesehenEspn={}, espnZaehler={ neu:0, gefuellt:0, bestaetigt:0, konflikt:0, doppelt:0, unaufgeloest:0 };
  e.spiele.forEach(function(r){
    if(r.beleg && gesehenEspn[r.beleg]){ espnZaehler.doppelt++; return; }
    gesehenEspn[r.beleg]=1;
    var l=schema.liga(r.liga), land=l.land;
    var hk=aufloesen(land, r.heim).schluessel, gk=aufloesen(land, r.gast).schluessel;
    var fehlt=[];
    if(!(nameJe[land]&&nameJe[land][hk])) fehlt.push(r.heim);
    if(!(nameJe[land]&&nameJe[land][gk])) fehlt.push(r.gast);
    if(fehlt.length){
      unaufgeloest[l.id]=unaufgeloest[l.id]||{};
      fehlt.forEach(function(n){ unaufgeloest[l.id][n]=(unaufgeloest[l.id][n]||0)+1; });
      espnZaehler.unaufgeloest++; return;
    }
    var box=saisonBox(r.liga, r.saison);
    var kand=box.ans.filter(function(a){ return a.heimKey===hk && a.gastKey===gk; });
    kand.sort(function(a,b){ return tageAbstand(a.datum,r.datum)-tageAbstand(b.datum,r.datum); });
    var ziel=kand[0];
    if(!ziel){
      box.ans.push({ heimKey:hk, gastKey:gk, datum:r.datum, th:r.th, tg:r.tg, hz:r.hz,
        hatErgebnis:true, quellen:['espn'], beleg:{ espn:r.beleg } });
      espnZaehler.neu++;
    } else if(!ziel.hatErgebnis){
      ziel.datum=r.datum; ziel.th=r.th; ziel.tg=r.tg; ziel.hz=r.hz; ziel.hatErgebnis=true;
      ziel.quellen=['espn']; ziel.beleg.espn=r.beleg;
      espnZaehler.gefuellt++;
    } else if(ziel.th===r.th && ziel.tg===r.tg){
      if(ziel.quellen.indexOf('espn')<0) ziel.quellen.push('espn');
      ziel.beleg.espn=r.beleg;
      if(!ziel.hz && r.hz) ziel.hz=r.hz;
      espnZaehler.bestaetigt++;
    } else {
      ziel.konflikt=true;
      box.konflikte.push({ datum:ziel.datum, heim:anzeige(land,hk), gast:anzeige(land,gk),
        of:ziel.th+':'+ziel.tg, espn:r.th+':'+r.tg, espnId:r.beleg });
      espnZaehler.konflikt++;
    }
  });

  /* --- 3. "Heute" = juengstes Ergebnisdatum im gesamten Bestand --- */
  var heute='';
  Object.keys(C).forEach(function(lg){ Object.keys(C[lg]).forEach(function(s){
    C[lg][s].ans.forEach(function(a){ if(a.hatErgebnis && a.datum>heute) heute=a.datum; }); }); });
  var aktuelleSaison=ident.saisonAusDatum(heute);

  /* --- 4. Je Liga-Saison: Zustand, Records, Rolle --- */
  var dateien={}, katalog=[], cov={ schema:schema.SCHEMA_VERSION, heute:heute, aktuelleSaison:aktuelleSaison,
    summen:{}, espn:{ dateien:e.dateien.length, geparkt:e.geparkt, ohneLiga:e.ohneLiga, verarbeitet:espnZaehler },
    aliasZeilen:aufloesen.anzahl, ligen:{} };
  var summen={ ligen:0, saisons:0, spiele:0, lernbestand:0, nachRolle:{}, nachStatus:{} };
  LIGEN.forEach(function(l){
    var boxen=C[l.id]||{}, zustand={}, proSaison={}, recJe={};
    Object.keys(boxen).sort().forEach(function(s){
      var box=boxen[s];
      var st=validate.saisonStatus(box.ans.map(function(a){
        return { heimKey:a.heimKey, gastKey:a.gastKey, datum:a.datum, hatErgebnis:a.hatErgebnis && !a.konflikt };
      }), s===aktuelleSaison);
      var recs=[], ids={}, dubletten=0, ungueltig=0, q={ of:0, espn:0, beide:0 };
      box.ans.forEach(function(a){
        if(!a.hatErgebnis || a.konflikt) return;
        var heim=anzeige(l.land,a.heimKey), gast=anzeige(l.land,a.gastKey);
        var r={ id:ident.fxId(a.datum, heim, gast), liga:l.id, saison:s, datum:a.datum,
          heim:heim, gast:gast, heimKey:a.heimKey, gastKey:a.gastKey, th:a.th, tg:a.tg,
          hz:(a.hz && a.hz[0]<=a.th && a.hz[1]<=a.tg)?a.hz:null,
          quellen:a.quellen.slice(), beleg:a.beleg, zusatz:false };
        var f=schema.pruefeRecord(r);
        if(f.length){ ungueltig++; fehler.push(l.id+' '+s+' '+heim+' - '+gast+' ('+a.datum+'): '+f.join(', ')); return; }
        if(ids[r.id]){ dubletten++; return; }
        ids[r.id]=1; recs.push(r);
        if(r.quellen.length===2) q.beide++; else q[r.quellen[0]]++;
      });
      if(dubletten && st.status==='vollstaendig'){ st.status='unvollstaendig'; st.grund=dubletten+' Dubletten'; }
      if(st.status==='vollstaendig') validate.zusatzMarkieren(recs);
      zustand[s]=st.status; recJe[s]=recs;
      proSaison[s]={ status:st.status, grund:st.grund, teams:st.teams, soll:st.soll, angesetzt:st.angesetzt,
        mitErgebnis:st.mitErgebnis, zusatz:st.zusatz, gespeichert:recs.length, quellen:q,
        ofDatei:box.ofDatei, dubletten:dubletten, konflikte:box.konflikte };
    });
    if(!Object.keys(boxen).length){ fehler.push(l.id+': keine Daten gefunden'); return; }
    var auf=validate.aufteilungPruefen(opt.splits && opt.splits.ligen && opt.splits.ligen[l.id], zustand);
    auf.fehler.forEach(function(x){ fehler.push(l.id+': '+x); });
    Object.keys(proSaison).forEach(function(s){
      var p=proSaison[s]; p.rolle=auf.rollen[s]||'aus';
      summen.saisons++; summen.spiele+=p.gespeichert;
      summen.nachRolle[p.rolle]=(summen.nachRolle[p.rolle]||0)+p.gespeichert;
      summen.nachStatus[p.status]=(summen.nachStatus[p.status]||0)+1;
      if(p.rolle==='lernen') summen.lernbestand+=p.gespeichert;
      if(!p.gespeichert) return;
      var pfad='spiele/'+l.id+'/'+s+'.json';
      dateien[pfad]=schema.packen({ liga:l.id, saison:s, status:p.status }, recJe[s]);
      katalog.push({ liga:l.id, saison:s, datei:pfad, spiele:p.gespeichert, status:p.status, rolle:p.rolle });
    });
    summen.ligen++;
    cov.ligen[l.id]={ name:l.name, land:l.land, espn:l.espn, saisons:proSaison,
      espnUnaufgeloest:unaufgeloest[l.id]||{} };
  });

  /* --- 5. Hinweis auf moegliche Alias-Luecken: eine Mannschaft taucht in der hoechsten Liga
         auf, ohne vorher irgendwo im Land gesehen worden zu sein, obwohl die Vorsaison der
         zweiten Liga vorliegt. Kein Fehler - nur eine Liste zum Nachsehen. --- */
  var erstmals={};
  LIGEN.forEach(function(l){
    if(!/\.1$/.test(l.id)) return;
    var zweite=l.id.replace(/\.1$/,'.2');
    var frueher={}, saisons=Object.keys(C[l.id]||{}).sort();
    saisons.forEach(function(s, i){
      var jetzt={};
      C[l.id][s].ans.forEach(function(a){ jetzt[a.heimKey]=1; jetzt[a.gastKey]=1; });
      var vor=saisons[i-1];
      if(i>0 && C[zweite] && C[zweite][vor]){
        var unten={};
        C[zweite][vor].ans.forEach(function(a){ unten[a.heimKey]=1; unten[a.gastKey]=1; });
        Object.keys(jetzt).forEach(function(k){
          if(!frueher[k] && !unten[k]){ erstmals[l.id]=erstmals[l.id]||[]; erstmals[l.id].push(s+': '+anzeige(l.land,k)); }
        });
      }
      Object.keys(jetzt).forEach(function(k){ frueher[k]=1; });
    });
  });
  cov.moeglicheAliasLuecken=erstmals;
  cov.summen=summen;
  katalog.sort(function(a,b){ return a.datei<b.datei?-1:1; });
  return { fehler:fehler, coverage:cov, katalog:{ schema:schema.SCHEMA_VERSION, heute:heute, summen:summen, dateien:katalog },
           dateien:dateien };
}

/* Saisondatei gut lesbar und diff-freundlich schreiben: ein Spiel je Zeile. */
function shardText(d){
  return '{"schema":'+d.schema+',"liga":'+JSON.stringify(d.liga)+',"saison":'+JSON.stringify(d.saison)+
    ',"status":'+JSON.stringify(d.status)+',\n"teams":'+JSON.stringify(d.teams)+',\n"spiele":[\n'+
    d.spiele.map(function(z){ return JSON.stringify(z); }).join(',\n')+'\n]}\n';
}
function loeschen(ordner){
  if(!fs.existsSync(ordner)) return;
  fs.readdirSync(ordner).forEach(function(n){
    var p=path.join(ordner,n);
    if(fs.statSync(p).isDirectory()){ loeschen(p); fs.rmdirSync(p); } else fs.unlinkSync(p);
  });
}

if(require.main===module){
  var arg=process.argv.slice(2), of=null, nurPruefen=false;
  for(var i=0;i<arg.length;i++){ if(arg[i]==='--of') of=arg[++i]; else if(arg[i]==='--nur-pruefen') nurPruefen=true; }
  if(!of){ console.error('Aufruf: node core/data/bauen.js --of <Ordner mit football.json> [--nur-pruefen]'); process.exit(2); }
  var hier=__dirname, repo=path.join(hier,'..','..');
  var erg=bauen({ ofWurzel:of, espnOrdner:path.join(repo,'daten','espn-ergebnisse'),
    aliases:JSON.parse(fs.readFileSync(path.join(hier,'aliases.json'),'utf8')),
    splits:JSON.parse(fs.readFileSync(path.join(hier,'splits.json'),'utf8')) });
  var s=erg.coverage.summen;
  console.log('Stand der Daten: '+erg.coverage.heute+' · '+s.ligen+' Ligen · '+s.saisons+' Saisons · '+
    s.spiele+' Spiele · Lernbestand '+s.lernbestand);
  console.log('Saisons nach Zustand: '+JSON.stringify(s.nachStatus)+' · Spiele nach Rolle: '+JSON.stringify(s.nachRolle));
  console.log('ESPN: '+JSON.stringify(erg.coverage.espn.verarbeitet)+' · geparkt '+erg.coverage.espn.geparkt);
  if(erg.fehler.length){
    console.error('\nFEHLER ('+erg.fehler.length+') - es wird NICHTS geschrieben:');
    erg.fehler.slice(0,40).forEach(function(x){ console.error('  - '+x); });
    process.exit(1);
  }
  if(nurPruefen){ console.log('Nur geprueft, nichts geschrieben.'); process.exit(0); }
  var ziel=path.join(hier,'generated');
  loeschen(path.join(ziel,'spiele'));
  Object.keys(erg.dateien).forEach(function(p){
    var voll=path.join(ziel,p);
    fs.mkdirSync(path.dirname(voll),{ recursive:true });
    fs.writeFileSync(voll, shardText(erg.dateien[p]));
  });
  fs.writeFileSync(path.join(ziel,'katalog.json'), JSON.stringify(erg.katalog,null,1)+'\n');
  fs.writeFileSync(path.join(ziel,'coverage.json'), JSON.stringify(erg.coverage,null,1)+'\n');
  console.log(Object.keys(erg.dateien).length+' Saisondateien geschrieben nach core/data/generated/');
}

module.exports={ bauen:bauen, shardText:shardText };
