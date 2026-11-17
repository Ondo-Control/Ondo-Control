/* ===================================================================================
   ONDO CORE - das eigene Rechenmodell (Backlog-Punkt 94, Teil 2), Teil "Lauf und Pruefung".
   Liest den geprueften Spielbestand (core/data/generated/), laesst das Modell Spiel fuer
   Spiel in zeitlicher Reihenfolge vorhersagen und lernen und prueft es gegen die Wirklichkeit.

   Ablauf - die Regeln stehen vorab in kandidaten.json und werden hier nur ausgefuehrt:
     1. WAHL: jeder Kandidat laeuft ueber den Bestand OHNE die Holdout-Saisons. Es gewinnt
        der kleinste Log-Loss im Markt 1X2 auf den Pruefsaisons.
     2. ABSCHLUSS: der gewaehlte Kandidat laeuft einmal ueber alles. Gemessen wird auf den
        Holdout-Saisons, gegen die Grundquote der Liga (wie oft Heimsieg/Remis/... dort
        bisher vorkam).
     3. SELBSTPRUEFUNG: aus den Zahlen folgt ein Beschluss - was ist belegt, was nicht,
        was laesst sich mangels Quoten gar nicht pruefen.
   Schreibt core/model/generated/modell.json (aktuelle Staerken) und bericht.json.
   Kein Netz, kein Schluessel, keine Uhr, kein echter Zufall (fester Startwert).

   Aufruf: node core/model/lauf.js [--nur-pruefen]
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('../data/identity.js'), schema=require('../data/schema.js');
var M=require('./poisson.js'), REGELN=require('../regeln.js'), RAUM=require('./raum.js');

var MAERKTE={ m1x2:['sieg_heim','remis','sieg_gast'], tore:['ueber','unter'], btts:['btts_ja','btts_nein'] };

/* Bestand laden: je Land eine zeitlich sortierte Spielliste. */
function bestandLaden(genOrdner, aliases){
  var katalog=JSON.parse(fs.readFileSync(path.join(genOrdner,'katalog.json'),'utf8'));
  var aufl=ident.aliasIndex(aliases), jeLand={}, namen={};
  katalog.dateien.forEach(function(k){
    var d=JSON.parse(fs.readFileSync(path.join(genOrdner,k.datei),'utf8'));
    var land=schema.liga(d.liga).land;
    jeLand[land]=jeLand[land]||[]; namen[land]=namen[land]||{};
    schema.entpacken(d, ident, aufl, land).forEach(function(r){
      r.rolle=k.rolle;
      jeLand[land].push(r);
      [[r.heimKey,r.heim],[r.gastKey,r.gast]].forEach(function(x){
        var alt=namen[land][x[0]];
        if(!alt || r.saison>=alt.saison) namen[land][x[0]]={ name:x[1], saison:r.saison };
      });
    });
  });
  Object.keys(jeLand).forEach(function(l){
    jeLand[l].sort(function(a,b){ return a.datum<b.datum?-1:a.datum>b.datum?1:(a.id<b.id?-1:a.id>b.id?1:0); });
  });
  var ef=path.join(genOrdner,'europa.json'), europa=fs.existsSync(ef)?JSON.parse(fs.readFileSync(ef,'utf8')).teams:null;
  var sf=path.join(genOrdner,'stadien.json'), stadien=fs.existsSync(sf)?JSON.parse(fs.readFileSync(sf,'utf8')).teams:null;
  return { jeLand:jeLand, namen:namen, heute:katalog.heute, europa:europa, stadien:stadien };
}

function ergebnis(r){
  return { m1x2: r.th>r.tg?'sieg_heim':r.th===r.tg?'remis':'sieg_gast',
           tore: (r.th+r.tg)>2.5?'ueber':'unter', btts: (r.th>0&&r.tg>0)?'btts_ja':'btts_nein' };
}

/* Grundquote: laufende Haeufigkeit je Liga, mit einem kleinen Startvorrat, damit die ersten
   Spiele einer Liga nicht bei 0 oder 100 Prozent landen. Haengt von keinem Kandidaten ab. */
var VORRAT={ sieg_heim:22.5, remis:13, sieg_gast:14.5, ueber:25, unter:25, btts_ja:25, btts_nein:25 };
function grundquote(zaehler){
  var p={};
  Object.keys(MAERKTE).forEach(function(m){
    var s=0; MAERKTE[m].forEach(function(k){ s+=zaehler[k]; });
    MAERKTE[m].forEach(function(k){ p[k]=zaehler[k]/s; });
  });
  return p;
}

/* Ein kompletter Durchlauf. opt.ohneHoldout: Holdout-Spiele werden uebersprungen, als gaebe
   es sie nicht. Rueckgabe: Zeilen (eine je vorhergesagtem Spiel) und Endzustaende je Land. */
function durchlauf(bestand, par, opt){
  opt=opt||{};
  var zeilen=[], zustand={};
  Object.keys(bestand.jeLand).sort().forEach(function(land){
    var z=zustand[land]=M.neuerZustand(), gq={};
    bestand.jeLand[land].forEach(function(r){
      if(opt.ohneHoldout && r.rolle==='holdout') return;
      gq[r.liga]=gq[r.liga]||Object.assign({}, VORRAT);
      var basis=grundquote(gq[r.liga]);
      var v=M.schritt(z, r, par, true);
      var e=ergebnis(r);
      zeilen.push({ liga:r.liga, saison:r.saison, rolle:r.rolle, datum:r.datum, zusatz:r.zusatz,
        e:e, p:v.p, basis:basis, bekannt:Math.min(v.heimSpiele, v.gastSpiele) });
      MAERKTE.m1x2.concat(MAERKTE.tore, MAERKTE.btts).forEach(function(k){
        if(e.m1x2===k||e.tore===k||e.btts===k) gq[r.liga][k]++; });
    });
  });
  return { zeilen:zeilen, zustand:zustand };
}

function ln(p){ return -Math.log(Math.max(1e-12, p)); }
function rund(x, n){ var f=Math.pow(10, n===undefined?4:n); return Math.round(x*f)/f; }

/* Kennzahlen eines Marktes ueber eine Zeilenmenge: Log-Loss und Brier, Modell und Grundquote. */
function kennzahlen(zeilen, markt){
  var n=0, llM=0, llB=0, brM=0, brB=0;
  zeilen.forEach(function(z){
    n++;
    llM+=ln(z.p[z.e[markt]]); llB+=ln(z.basis[z.e[markt]]);
    MAERKTE[markt].forEach(function(k){
      var o=(z.e[markt]===k)?1:0;
      brM+=Math.pow(z.p[k]-o,2); brB+=Math.pow(z.basis[k]-o,2);
    });
  });
  if(!n) return { n:0 };
  return { n:n, logLossModell:rund(llM/n), logLossGrundquote:rund(llB/n),
           brierModell:rund(brM/n), brierGrundquote:rund(brB/n) };
}

/* Fester Zufallsgenerator (immer dieselbe Folge) fuer das Ziehen mit Zuruecklegen. */
function zufall(start){ var s=start>>>0; return function(){ s=(Math.imul(s,1664525)+1013904223)>>>0; return s/4294967296; }; }

/* Wie sicher ist der Vorsprung? Gezogen werden ganze Spieltage (Liga + Datum), weil Spiele
   eines Tages nicht unabhaengig sind. Rueckgabe: mittlere Differenz (Grundquote minus Modell;
   positiv = Modell besser) und der Bereich mit der verlangten Sicherheit (Regel, ueblich 95 Prozent). */
function vorsprung(zeilen, markt, ziehungen, startwert, sicherheit){
  var sich=sicherheit||95;
  var gruppen={}, liste=[];
  zeilen.forEach(function(z){
    var k=z.liga+'|'+z.datum;
    if(!gruppen[k]){ gruppen[k]={ s:0, n:0 }; liste.push(gruppen[k]); }
    gruppen[k].s+=ln(z.basis[z.e[markt]])-ln(z.p[z.e[markt]]); gruppen[k].n++;
  });
  var S=0, N=0; liste.forEach(function(g){ S+=g.s; N+=g.n; });
  if(!N) return { n:0 };
  var rnd=zufall(startwert), werte=[];
  for(var b=0;b<ziehungen;b++){
    var s=0, n=0;
    for(var i=0;i<liste.length;i++){ var g=liste[Math.floor(rnd()*liste.length)]; s+=g.s; n+=g.n; }
    werte.push(s/n);
  }
  werte.sort(function(a,b){ return a-b; });
  return { n:N, spieltage:liste.length, differenz:rund(S/N), unten:rund(werte[Math.round(ziehungen*(100-sich)/200)]),
           oben:rund(werte[Math.min(ziehungen-1, Math.round(ziehungen*(100+sich)/200))]) };
}

/* Aussagen wie in der App: je Markt die wahrscheinlichste Option mit ihrer Prozentzahl.
   Daraus Trefferquote, Brier (wie calcBrierScore in beta.html) und die Kalibrierung:
   treffen Aussagen mit 60-69 Prozent auch in 60-69 Prozent der Faelle ein? */
function aussagen(zeilen){
  var stufen=[[0,50],[50,60],[60,70],[70,80],[80,101]], kal=stufen.map(function(s){
    return { von:s[0], bis:Math.min(100,s[1]), n:0, behauptet:0, eingetroffen:0 }; });
  var n=0, treffer=0, brier=0;
  zeilen.forEach(function(z){
    Object.keys(MAERKTE).forEach(function(m){
      var best=MAERKTE[m][0];
      MAERKTE[m].forEach(function(k){ if(z.p[k]>z.p[best]) best=k; });
      var p=z.p[best], ok=(z.e[m]===best)?1:0;
      n++; treffer+=ok; brier+=Math.pow(p-ok,2);
      for(var i=0;i<stufen.length;i++) if(p*100>=stufen[i][0] && p*100<stufen[i][1]){
        kal[i].n++; kal[i].behauptet+=p; kal[i].eingetroffen+=ok; break; }
    });
  });
  kal.forEach(function(k){ if(k.n){ k.behauptet=rund(100*k.behauptet/k.n,1); k.eingetroffen=rund(100*k.eingetroffen/k.n,1); } });
  return n ? { aussagen:n, trefferquote:rund(100*treffer/n,1), brier:rund(brier/n), kalibrierung:kal } : { aussagen:0 };
}

function auswerten(zeilen, regeln){
  var aus={ spiele:zeilen.length, maerkte:{}, vorsprung:{} };
  Object.keys(MAERKTE).forEach(function(m){
    aus.maerkte[m]=kennzahlen(zeilen, m);
    aus.vorsprung[m]=vorsprung(zeilen, m, regeln.bootstrapZiehungen, regeln.bootstrapStartwert, regeln.sicherheit);
  });
  aus.wieInDerApp=aussagen(zeilen);
  return aus;
}

/* Das Urteil der Selbstpruefung fuer einen Markt. "belegt" nur, wenn genug Spiele da sind UND
   selbst die vorsichtige untere Grenze des Vorsprungs ueber 0 liegt. */
var MINDEST_SPIELE_URTEIL = 1000;
function urteil(v, mindest){
  if(!v || !(v.n>=(mindest||MINDEST_SPIELE_URTEIL))) return 'zu_wenig_daten';
  return v.unten>0 ? 'belegt' : 'nicht_belegt';
}

/* Was der Trainingsraum (raum.js) von hier braucht - dieselben Funktionen wie im Lauf. */
function raumHilfen(){ return { vorsprung:vorsprung, urteil:urteil, ergebnis:ergebnis, grundquote:grundquote, VORRAT:VORRAT, MAERKTE:MAERKTE, rund:rund }; }

/* Der ganze Lauf: Wahl, Abschluss, Selbstpruefung. Rein rechnerisch, schreibt nichts.
   ondoRegeln = die Werte aus core/REGELN.md (Ondos Regeln). Fehlen sie, gelten die am
   14.11.2026 festgelegten Werte. */
function lauf(bestand, kand, ondoRegeln){
  var R=ondoRegeln||REGELN.standard();
  var regeln=Object.assign({}, kand.pruefregeln, { sicherheit:R.sicherheit, mindestSpieleBelastbar:R.mindestSpieleBelastbar });
  function par(k){ return Object.assign({}, kand.fest, { lernrate:k.lernrate, saisonBehalt:k.saisonBehalt, dc:k.dc }); }
  function gewertet(zeilen, rolle){ return zeilen.filter(function(z){ return z.rolle===rolle && !z.zusatz; }); }

  /* 1. Wahl - ohne Holdout */
  var wahl=kand.kandidaten.map(function(k){
    var d=durchlauf(bestand, par(k), { ohneHoldout:true });
    var kz=kennzahlen(gewertet(d.zeilen,'pruefen'), 'm1x2');
    return { name:k.name, lernrate:k.lernrate, saisonBehalt:k.saisonBehalt, dc:k.dc, spiele:kz.n, logLoss1x2:kz.logLossModell };
  });
  var sieger=wahl.slice().sort(function(a,b){ return a.logLoss1x2-b.logLoss1x2; })[0];
  var siegerK=kand.kandidaten.filter(function(k){ return k.name===sieger.name; })[0];

  /* 2. Abschluss - einmal ueber alles */
  var ende=durchlauf(bestand, par(siegerK), {});
  var holdout=gewertet(ende.zeilen,'holdout'), spaeter=gewertet(ende.zeilen,'spaeter');
  var aktuelleSaison=ident.saisonAusDatum(bestand.heute);
  var laufend=spaeter.filter(function(z){ return z.saison===aktuelleSaison; });
  var ergH=auswerten(holdout, regeln);
  var jeLiga={};
  holdout.forEach(function(z){ (jeLiga[z.liga]=jeLiga[z.liga]||[]).push(z); });
  Object.keys(jeLiga).forEach(function(l){
    var kz=kennzahlen(jeLiga[l],'m1x2');
    jeLiga[l]={ saison:jeLiga[l][0].saison, spiele:kz.n, logLossModell:kz.logLossModell, logLossGrundquote:kz.logLossGrundquote,
                differenz:rund(kz.logLossGrundquote-kz.logLossModell) };
  });

  /* 3. Selbstpruefung und Beschluss */
  var namen={ m1x2:'1X2', tore:'Ueber/Unter 2,5', btts:'Beide treffen' }, gegenGrundquote={};
  Object.keys(MAERKTE).forEach(function(m){
    var v=ergH.vorsprung[m];
    gegenGrundquote[m]={ markt:namen[m], spiele:v.n, differenz:v.differenz, unten:v.unten, oben:v.oben,
      urteil:urteil(v, R.mindestSpieleUrteil) };
  });
  var beschluss={
    gegenGrundquote:gegenGrundquote,
    gegenMarkt:{ urteil:'nicht_pruefbar', grund:regeln.gegenMarkt },
    echtesGeld:REGELN.echtesGeldErlaubt(R, 'nicht_pruefbar'),
    einsatz:'nur_virtuell',
    hoechsterEinsatz:R.maxEinsatz,
    satz:'Das Modell ' + (gegenGrundquote.m1x2.urteil==='belegt' ? 'weiss im Markt 1X2 nachweislich mehr als die blosse Grundquote der Liga' :
      'ist im Markt 1X2 nicht nachweislich besser als die blosse Grundquote der Liga') +
      '. Ob es besser ist als die Wettquoten, ist nicht geprueft, weil keine Quoten im Bestand sind. Deshalb: kein echtes Geld, nur virtuelle Probeeinsaetze.'
  };

  /* Modelldatei: aktuelle Staerken */
  var laender={};
  Object.keys(ende.zustand).sort().forEach(function(land){
    var z=ende.zustand[land], teams={}, ligen={};
    Object.keys(z.ligen).sort().forEach(function(l){ ligen[l]={ niveau:rund(z.ligen[l].niveau), heim:rund(z.ligen[l].heim), spiele:z.ligen[l].spiele }; });
    Object.keys(z.teams).sort().forEach(function(k){ var t=z.teams[k];
      teams[k]={ name:(bestand.namen[land][k]||{}).name||k, a:rund(t.a), d:rund(t.d), liga:t.liga, spiele:t.spiele, zuletzt:t.zuletzt }; });
    laender[land]={ ligen:ligen, teams:teams };
  });
  var modell={ schema:1, stand:bestand.heute, kandidat:sieger.name, parameter:par(siegerK),
               mindestSpiele:regeln.mindestSpieleBelastbar, laender:laender };
  var bericht={ schema:1, stand:bestand.heute, festgelegt:kand.festgelegt,
    wahl:{ regel:'kleinster Log-Loss 1X2 auf den Pruefsaisons, Holdout weggelassen', kandidaten:wahl, gewaehlt:sieger.name },
    abschluss:{ regel:regeln.haupttest, holdout:ergH, jeLiga:jeLiga },
    seitdem:{ hinweis:'Spiele nach dem Holdout (nur Beobachtung, kein Beschluss)', alle:auswerten(spaeter, regeln),
              laufendeSaison:{ saison:aktuelleSaison, werte:auswerten(laufend, regeln) } },
    regeln:REGELN.uebersicht(R),
    beschluss:beschluss };
  var raum=RAUM.raum(bestand, par(siegerK), { name:sieger.name, mindestSpieleRunde:R.mindestSpieleRunde, mindestSpieleUrteil:R.mindestSpieleUrteil,
    sicherheit:R.sicherheit, ziehungen:regeln.bootstrapZiehungen, startwert:regeln.bootstrapStartwert, ideen:kand.ideen||[] },
    raumHilfen());
  return { modell:modell, bericht:bericht, raum:raum };
}

if(require.main===module){
  var hier=__dirname, nurPruefen=process.argv.indexOf('--nur-pruefen')>=0;
  var aliases=JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8'));
  var kand=JSON.parse(fs.readFileSync(path.join(hier,'kandidaten.json'),'utf8'));
  kand.ideen=JSON.parse(fs.readFileSync(path.join(hier,'ideen.json'),'utf8')).ideen;
  var gelesen=REGELN.lesen(fs.readFileSync(path.join(hier,'..','REGELN.md'),'utf8'));
  if(!gelesen.ok){
    console.error('FEHLER in core/REGELN.md - der Lauf bricht ab, nichts wird geschrieben:');
    gelesen.fehler.forEach(function(x){ console.error('  '+x); });
    process.exit(1);
  }
  var erg=lauf(bestandLaden(path.join(hier,'..','data','generated'), aliases), kand, gelesen.werte);
  var b=erg.bericht, h=b.abschluss.holdout;
  console.log('Stand '+b.stand+' · gewaehlt: '+b.wahl.gewaehlt+' · Holdout: '+h.spiele+' Spiele');
  Object.keys(h.maerkte).forEach(function(m){
    var k=h.maerkte[m], v=h.vorsprung[m];
    console.log('  '+m+': Log-Loss Modell '+k.logLossModell+' · Grundquote '+k.logLossGrundquote+
      ' · Vorsprung '+v.differenz+' ['+v.unten+' bis '+v.oben+'] → '+b.beschluss.gegenGrundquote[m].urteil);
  });
  console.log('  wie in der App: Trefferquote '+h.wieInDerApp.trefferquote+' % · Brier '+h.wieInDerApp.brier);
  console.log('Beschluss: '+b.beschluss.satz);
  var rz=erg.raum.zusammenfassung;
  console.log('Trainingsraum: '+erg.raum.runden.length+' Runden · aktueller Lernstand '+erg.raum.lernstand.name+' · Lernen hilft: '+rz.lernenHilft.urteil+' ('+rz.lernenHilft.differenz+')');
  if(nurPruefen){ console.log('Nur geprueft, nichts geschrieben.'); process.exit(0); }
  var ziel=path.join(hier,'generated'); fs.mkdirSync(ziel,{ recursive:true });
  fs.writeFileSync(path.join(ziel,'modell.json'), JSON.stringify(erg.modell,null,1)+'\n');
  fs.writeFileSync(path.join(ziel,'bericht.json'), JSON.stringify(erg.bericht,null,1)+'\n');
  fs.writeFileSync(path.join(ziel,'raum.json'), JSON.stringify(erg.raum,null,1)+'\n');
  console.log('modell.json, bericht.json und raum.json geschrieben nach core/model/generated/');
}

module.exports={ bestandLaden:bestandLaden, durchlauf:durchlauf, lauf:lauf, kennzahlen:kennzahlen,
                 vorsprung:vorsprung, urteil:urteil, aussagen:aussagen, grundquote:grundquote, MAERKTE:MAERKTE,
                 raumHilfen:raumHilfen };
