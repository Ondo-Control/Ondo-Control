/* Tests D, E, F, G, H, I, J, K, L, M und P (Abschnitt 12): der ECHTE Prueflauf
   ergebnissePruefen() in der Testumgebung, mit abgefangenem Netz. Nachgebildet ist nur das
   Netz - jede Entscheidung trifft der Code aus beta.html selbst. */
var fs=require('fs'), u=require('./umgebung.js');

var ARCHIV = JSON.parse(fs.readFileSync(require('path').join(__dirname,'..')+'/daten/schiri-ergebnisse/2026-09.json','utf8'));
var ESPN   = JSON.parse(fs.readFileSync(require('path').join(__dirname,'..')+'/daten/espn-ergebnisse/2026-09.json','utf8'));

/* --- Netz-Attrappe. Zaehlt jeden Abruf, damit "Monatsdatei nur einmal laden" und die
       KI-Aufrufzahl gemessen statt behauptet werden. --- */
function netz(c, opt){
  opt=opt||{};
  var z={ fdArchiv:0, espnArchiv:0, espnLive:0, openliga:0, gemini:0, sonnet:0, andere:[] };
  c._netz=z;
  function json(o){ return Promise.resolve({ ok:true, status:200, json:function(){ return Promise.resolve(o); },
                                             text:function(){ return Promise.resolve(JSON.stringify(o)); } }); }
  c.fetch=function(url, o){
    url=String(url);
    if(url.indexOf('daten/schiri-ergebnisse/')>=0){ z.fdArchiv++; return json(opt.fdArchiv!==undefined?opt.fdArchiv:ARCHIV); }
    if(url.indexOf('daten/espn-ergebnisse/')>=0){ z.espnArchiv++; return json(opt.espnArchiv!==undefined?opt.espnArchiv:ESPN); }
    if(url.indexOf('site.web.api.espn.com')>=0){ z.espnLive++; return json({ events:[] }); }
    if(url.indexOf('api.openligadb.de')>=0){ z.openliga++; return json([]); }
    if(url.indexOf('generativelanguage')>=0){
      if(url.indexOf('/models?')>=0) return json({ models:[{name:'models/gemini-2.5-flash'}] });
      z.gemini++; return json(opt.gemini ? opt.gemini(o, z.gemini) : kiLeer());
    }
    if(url.indexOf('api.anthropic.com')>=0){ z.sonnet++; return json(opt.sonnet ? opt.sonnet(o, z.sonnet) : kiLeer()); }
    if(url.indexOf('version.json')>=0) return json({ version:c.CODE_VERSION });
    z.andere.push(url);
    return Promise.reject(new Error('unerwarteter Abruf: '+url));
  };
  return z;
}
function kiLeer(){
  return { candidates:[{ content:{ parts:[{ text:'{"ergebnisse":[]}' }] } }], modelVersion:'gemini-2.5-flash' };
}
/* Eine Gemini-Antwort mit echten Ergebnissen im erwarteten JSON-Format. */
function kiAntwort(ergebnisse){
  return { candidates:[{ content:{ parts:[{ text:JSON.stringify({ ergebnisse:ergebnisse }) }] } }],
           modelVersion:'gemini-2.5-flash' };
}
function sonnetAntwort(ergebnisse){
  return { content:[{ type:'text', text:JSON.stringify({ ergebnisse:ergebnisse }) }], model:'claude-sonnet-5' };
}

/* --- Eine App mit Ondos zehn echten Spielen vom 12.9.2026 im kiProtokoll --- */
var MESS = JSON.parse(fs.readFileSync(require('path').join(__dirname,'..')+'/ondo-control-messdaten-2026-09-17.json','utf8'));
function eintraege1209(){
  return MESS.kiProtokoll.filter(function(e){ return e.datum==='12.9.2026'; })
    .map(function(e){ return JSON.parse(JSON.stringify(e)); });
}
/* Eine gestartete App. save = ein bereits vorhandener Speicherstand (simulierter Reload).
   Es wird auf den Programmstart gewartet, damit load() genau einmal laeuft - danach erst
   werden Schluessel/Daten gesetzt, sonst ueberschriebe der Start sie wieder. */
function app(opt, save){
  var c=u.neueUmgebung(save?{save:save}:{});
  netz(c, opt||{});
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
    c.state.apiKey='sk-ant-testschluessel';
    if(!save){
      c.state.kiProtokoll=eintraege1209();
      c.state.bets=[];
      c.state.pruefListe=[]; c.state.pruefBilanz=null; c.state.pruefJobs={}; c.state.pruefRun=null;
    }
    return c;
  });
}
function gespeicherterStand(c){ return JSON.parse(c._speicher[c.KEY]); }
function knopf(){ return { disabled:false, textContent:'' }; }
/* Wartet, bis der Lauf wirklich zu Ende ist (der Lauf selbst gibt kein Promise zurueck). */
function fertig(c, msMax){
  msMax=msMax||8000;
  var t0=Date.now();
  return new Promise(function(res, rej){
    (function schau(){
      var r=c.state.pruefRun;
      if(r && r.status!=='laufend') return res(r);
      /* Kein Run angelegt: Der Klick hat gar nichts gestartet (z. B. "Nichts Offenes zu
         pruefen"). Das ist ein gueltiges Ergebnis, kein Haenger - nach einer kurzen Schonfrist
         wird mit null aufgeloest. */
      if(!r && Date.now()-t0>300) return res(null);
      if(Date.now()-t0>msMax) return rej(new Error('Lauf wurde nicht fertig: '+JSON.stringify(r)));
      setTimeout(schau, 5);
    })();
  });
}

var ablauf = Promise.resolve();
function schritt(f){ ablauf = ablauf.then(f); }

/* ═══ A/Leistung: der ganze Lauf, echte Orchestrierung, Zaehlungen ═══ */
var messD = {};
schritt(function(){
  u.block('Leistung + Kaskade: ganzer Prueflauf ueber die echten zehn Spiele');
  return app().then(function(c){
  var t0=Date.now();
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    messD.dauer=Date.now()-t0; messD.netz=c._netz;
    u.pruef('zehn Vorschlaege entstanden', c.state.pruefListe.length===10, c.state.pruefListe.length+' Vorschlaege');
    u.pruef('NULL KI-Aufrufe noetig', c._netz.gemini===0 && c._netz.sonnet===0,
            'gemini='+c._netz.gemini+' sonnet='+c._netz.sonnet);
    /* Zwei Runden, und das ist richtig: Je Runde werden hoechstens FUENF Spiele geprueft
       (unveraenderte Regel, nicht Teil dieses Auftrags). Zehn Spiele brauchen deshalb zwei
       Runden - entscheidend ist, dass es keine sechs praktisch identischen
       Wiederholungsrunden mehr sind und in beiden Runden kein einziges Modell laeuft. */
    u.pruef('zwei Runden fuer zehn Spiele (fuenf je Runde), keine Wiederholungsrunden',
            c.state.pruefBilanz.runden===2, c.state.pruefBilanz.runden+' Runden');
    u.pruef('football-data-Monatsdatei genau einmal geladen', c._netz.fdArchiv===1, c._netz.fdArchiv+' Abrufe');
    u.pruef('ESPN-Archiv-Monatsdatei genau einmal geladen', c._netz.espnArchiv===1, c._netz.espnArchiv+' Abrufe');
    u.pruef('Bilanz nennt die gemessene KI-Aufrufzahl', c.state.pruefBilanz.kiAufrufe===0,
            'kiAufrufe='+c.state.pruefBilanz.kiAufrufe);
    u.pruef('kein Ergebnis automatisch uebernommen',
            c.state.kiProtokoll.every(function(e){ return e.status==='offen' && e.ergebnisHeim===null; }),
            'alle zehn Spiele bleiben Vorschlag');
    console.log('     strukturierte Abrufe: ESPN-Archiv '+c._netz.espnArchiv+' · Live-ESPN '+c._netz.espnLive+
                ' · OpenLigaDB '+c._netz.openliga+' · football-data-Archiv '+c._netz.fdArchiv);
    console.log('     Laufzeit des ganzen Prueflaufs (ohne echtes Netz): '+messD.dauer+' ms');
  });
  });
});

/* ═══ D. Persistenz ueber einen simulierten Reload und einen ZWEITEN Prueflauf ═══ */
schritt(function(){
  u.block('D. Persistenz: Vorschlaege ueberleben Reload und einen neuen Prueflauf');
  return app().then(function(c){
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    var vorher=c.state.pruefListe.length;
    var gespeichert=gespeicherterStand(c);
    u.pruef('Vorschlaege sind im Speicher gelandet, nicht nur im Arbeitsspeicher',
            (gespeichert.pruefListe||[]).length===vorher, (gespeichert.pruefListe||[]).length+' gespeichert');
    /* Simulierter Reload: neue App, die genau diesen gespeicherten Zustand vorfindet. */
    return app({}, gespeichert).then(function(c2){
      u.pruef('nach Reload weiterhin alle Vorschlaege da', c2.state.pruefListe.length===vorher,
              c2.state.pruefListe.length+' von '+vorher);
      u.pruef('render() nach Reload loescht nichts', (c2.render(), c2.state.pruefListe.length===vorher));
      /* Ein ZWEITER Prueflauf darf sie nicht vernichten (das war Ondos Meldung vom 20.9.). */
      c2.ergebnissePruefen(knopf());
      var st=c2._elemente['pruefStatus'];
      u.pruef('zweiter Lauf findet nichts mehr zu tun und laesst alles stehen',
              c2.state.pruefListe.length===vorher, c2.state.pruefListe.length+' Vorschlaege · Status: "'+(st?st.textContent:'')+'"');
      u.pruef('  Grund: alle Spiele stehen als Job auf "vorschlag"',
              Object.keys(c2.state.pruefJobs).filter(function(k){ return c2.state.pruefJobs[k].zustand==='vorschlag'; }).length===vorher);
    });
  });
  });
});

/* ═══ E. Reiterwechsel/render() startet keinen zweiten Lauf ═══ */
schritt(function(){
  u.block('E. render()/Reiterwechsel waehrend eines Laufs');
  return app().then(function(c){
  c.ergebnissePruefen(knopf());
  u.pruef('Lauf ist als laufend vermerkt', c.pruefRunAktiv(), JSON.stringify(c.state.pruefRun&&c.state.pruefRun.status));
  var runId1=c.state.pruefRun.runId;
  c.go('wetten'); c.render();                     /* genau das, was ein Reiterwechsel tut */
  var b2=knopf();
  c.ergebnissePruefen(b2);                        /* der neu gerenderte Knopf */
  u.pruef('zweiter Klick startet KEINEN zweiten Lauf', c.state.pruefRun.runId===runId1,
          'runId unveraendert: '+(c.state.pruefRun.runId===runId1));
  u.pruef('zweiter Knopf bleibt bedienbar und meldet den Grund', b2.disabled===false &&
          c._elemente['pruefStatus'].textContent===c.t('pruefLaeuft'),
          '"'+c._elemente['pruefStatus'].textContent+'"');
  var htmlE=c.pruefBlock();
  u.pruef('Oberflaeche zeigt den laufenden Zustand', htmlE.indexOf(c.t('pruefLaeuft'))>=0);
  return fertig(c).then(function(){
    u.pruef('nach sauberem Abschluss ist die Sperre weg', !c.pruefRunAktiv() && c.state.pruefRun.status==='fertig',
            c.state.pruefRun.status);
    u.pruef('und es entstand trotz des zweiten Klicks nur EIN Satz Vorschlaege',
            c.state.pruefListe.length===10, c.state.pruefListe.length+' Vorschlaege');
  });
  });
});

/* ═══ F. Unterbrechung + Fortsetzen, G. keine Dubletten ═══ */
schritt(function(){
  u.block('F./G. Unterbrechung nach einem Schritt, Fortsetzen ohne Dubletten');
  /* Erster Lauf: das football-data-Archiv liefert nur DREI der zehn Spiele. Der Lauf endet
     also mit drei Vorschlaegen und sieben offenen Spielen - genau die Lage nach einer
     Unterbrechung. */
  var dreiSpiele = { spiele: ARCHIV.spiele.filter(function(m){
      return ['SS Lazio','1. FC Köln','Athletic Club'].indexOf(m.heim)>=0; }) };
  return app({ fdArchiv:dreiSpiele }).then(function(c){
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    var gefunden1=c.state.pruefListe.length;
    var offen1=c.state.pruefBilanz.fehlt.length;
    console.log('     erster Lauf (Archiv unvollstaendig): '+gefunden1+' gefunden, '+offen1+' offen');
    u.pruef('erster Lauf findet einen Teil und laesst den Rest offen', gefunden1===3 && offen1>0,
            gefunden1+' gefunden, '+offen1+' offen');
    var gespeichert=gespeicherterStand(c);
    /* Zweiter Lauf nach "Reload", jetzt mit vollstaendigem Archiv. */
    return app({}, gespeichert).then(function(c2){
      var rohVorher=c2.state.kiProtokoll.reduce(function(n,e){ return n+((e.refRoh||[]).length)+((e.espnRoh||[]).length); },0);
      u.pruef('F: nach dem Reload sind die drei Vorschlaege noch da', c2.state.pruefListe.length===3,
              c2.state.pruefListe.length+' Vorschlaege');
      c2.ergebnissePruefen(knopf());
      return fertig(c2).then(function(){
        u.pruef('F: Fortsetzen holt genau die noch offenen Spiele nach',
                c2.state.pruefListe.length===10, c2.state.pruefListe.length+' Vorschlaege gesamt');
        u.pruef('F: die drei bereits geloesten Spiele wurden NICHT erneut gesucht',
                c2.state.pruefBilanz.gesamt===(10-3),
                'zweiter Lauf nahm '+c2.state.pruefBilanz.gesamt+' Spiele (10 minus 3 bereits geloeste)');
        /* G: keine doppelten Vorschlaege und keine doppelte Evidence */
        var ids={}, dopp=0;
        c2.state.pruefListe.forEach(function(v){ if(ids[v.fixtureId]) dopp++; ids[v.fixtureId]=true; });
        u.pruef('G: kein Spiel zweimal in der Vorschlagsliste', dopp===0, dopp+' Dubletten');
        var rohNachher=c2.state.kiProtokoll.reduce(function(n,e){ return n+((e.refRoh||[]).length)+((e.espnRoh||[]).length); },0);
        u.pruef('G: keine bestehende Evidence geloescht', rohNachher>=rohVorher,
                'refRoh/espnRoh vorher '+rohVorher+', nachher '+rohNachher);
        var belegDopp=0;
        c2.state.kiProtokoll.forEach(function(e){
          var sig={};
          (e.espnRoh||[]).forEach(function(r){ var k=JSON.stringify(r); if(sig[k]) belegDopp++; sig[k]=true; });
        });
        u.pruef('G: keine identische espnRoh-Evidence doppelt angehaengt', belegDopp===0, belegDopp+' Dubletten');
      });
    });
  });
  });
});

/* ═══ H. Uebernehmen ═══ */
schritt(function(){
  u.block('H. Uebernehmen: Endstand, Halbzeit, Quelle, Markturteile');
  return app().then(function(c){
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    var v=c.state.pruefListe.filter(function(x){ return x.match==='Lazio Rom - AC Mailand'; })[0];
    u.pruef('Vorschlag fuer Lazio - Mailand vorhanden', !!v);
    if(!v) return;
    var betroffen=v.eintraege.slice();
    c.pruefAnwenden(v.id);
    var e=c.state.kiProtokoll.filter(function(x){ return betroffen.indexOf(x.id)>=0; });
    u.pruef('Endstand uebernommen', e.every(function(x){ return x.ergebnisHeim===2 && x.ergebnisGast===2; }),
            e.map(function(x){ return x.ergebnisHeim+':'+x.ergebnisGast; }).join(' / '));
    /* Das Feld heisst am uebernommenen Eintrag ergebnisHalbzeit - e.halbzeit gibt es dort
       nicht (e.heim/e.gast sind die VORHERSAGE, ergebnis* das eingetragene Ergebnis). */
    u.pruef('Halbzeit uebernommen', e.every(function(x){ return x.ergebnisHalbzeit==='2:0'; }),
            e.map(function(x){ return x.ergebnisHalbzeit; }).join(' / '));
    u.pruef('Quelle festgehalten', e.every(function(x){ return !!x.ergebnisQuelle; }),
            e[0] && e[0].ergebnisQuelle);
    u.pruef('Markturteile gerechnet (nicht mehr offen)',
            e.every(function(x){ return (x.maerkte||[]).every(function(m){ return m.status!=='offen'; }); }),
            e[0] ? (e[0].maerkte||[]).map(function(m){ return m.code+'='+m.status; }).join(' ') : '');
    u.pruef('Verlaengerungsfeld korrekt leer (kein Pokalspiel)',
            e.every(function(x){ return x.ergebnisVerl===undefined; }));
    u.pruef('Job steht jetzt auf "uebernommen"', (c.jobHolen(v.fixtureId)||{}).zustand==='uebernommen',
            JSON.stringify((c.jobHolen(v.fixtureId)||{}).zustand));
    u.pruef('Vorschlag ist aus der aktiven Liste verschwunden',
            !c.state.pruefListe.some(function(x){ return x.id===v.id; }));
  });
  });
});

/* ═══ I. Ignorieren ═══ */
schritt(function(){
  u.block('I. Ignorieren: verworfen, nachvollziehbar, nicht sofort wieder gesucht');
  return app().then(function(c){
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    var v=c.state.pruefListe[0];
    var fid=v.fixtureId, match=v.match;
    c.pruefIgnorieren(v.id);
    u.pruef('Vorschlag ist aus der aktiven Liste weg',
            !c.state.pruefListe.some(function(x){ return x.id===v.id; }));
    u.pruef('bleibt als bewusst verworfen nachvollziehbar', (c.jobHolen(fid)||{}).zustand==='ignoriert',
            JSON.stringify(c.jobHolen(fid)));
    u.pruef('kein kiProtokoll-Eintrag wurde dabei veraendert',
            c.state.kiProtokoll.every(function(e){ return e.status==='offen'; }));
    /* Neuer Lauf: das ignorierte Spiel darf nicht sofort identisch wieder erscheinen. */
    c.state.pruefRun=null;
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      u.pruef('neuer Lauf sucht es NICHT sofort erneut',
              !c.state.pruefListe.some(function(x){ return x.fixtureId===fid; }), match);
      var html=c.pruefBlock();
      u.pruef('es steht sichtbar unter den zurueckgestellten Spielen',
              html.indexOf(c.t('pruefErneutBtn'))>=0 && html.indexOf(fid)>=0);
      /* "Erneut pruefen" holt es zurueck. */
      c.pruefErneut(fid);
      u.pruef('"erneut pruefen" setzt den Job zurueck auf offen', (c.jobHolen(fid)||{}).zustand==='offen');
      c.state.pruefRun=null;
      c.ergebnissePruefen(knopf());
      return fertig(c).then(function(){
        u.pruef('und der naechste Lauf findet es wieder',
                c.state.pruefListe.some(function(x){ return x.fixtureId===fid; }), match);
      });
    });
  });
  });
});

/* ═══ J. KI-Notnagel + P. je Spiel ein eigener Auftragstext ═══ */
schritt(function(){
  u.block('J./P. KI-Notnagel: Drei-Laeufe-Regel, je Spiel ein eigener Auftragstext');
  /* Zwei Spiele, KEINE strukturierte Quelle liefert etwas. Gemini findet beide,
     Sonnet faellt aus -> nur zwei brauchbare Laeufe. */
  var prompts=[];
  var c=u.neueUmgebung();
  netz(c, {
    fdArchiv:{ spiele:[] }, espnArchiv:{ spiele:[] },
    /* Realistische Attrappe: Ein Modell, das einen Auftragstext mit GENAU EINEM Spiel bekommt,
       antwortet auch nur zu diesem Spiel. Die gefragte id wird deshalb aus dem Auftragstext
       gelesen, nicht fest vorgegeben. */
    gemini:function(o){
      var text=JSON.parse(o.body).contents[0].parts[0].text;
      prompts.push(text);
      var m=text.match(/\n(S\d+): /);
      var id=m?m[1]:'S0';
      return kiAntwort([{ id:id, status:'fertig', format:'2x45', halbzeit:'1:0', heim:2, gast:1,
                          verlaengerungGespielt:'nein', torlos:'nein', datum:'12.09.2026',
                          wettbewerb:'Testliga', quelle:'https://www.kicker.de/testspiel' }]);
    },
    sonnet:function(){ return { type:'error', error:{ message:'Suchlimit erreicht' } }; }
  });
  /* Der Zustand wird ERST nach dem Programmstart gesetzt: load() wuerde ihn sonst wieder
     ueberschreiben und brachte in einem frueheren Durchlauf die drei Beispiel-Wetten der
     Erstinstallation mit, die den Lauf verfaelschten (gemessen: 5 statt 2 ungeloeste Spiele). */
  return c.bereit.then(function(){
  c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
  c.state.apiKey='sk-ant-testschluessel';
  c.state.kiProtokoll=[
    { id:'t1', aera:'v19', datum:'12.9.2026', match:'Testheim FC - Testgast FC', wettbewerb:'Testliga',
      anpfiff:'20:00', herkunft:'sonnet', heim:2, gast:1, status:'offen', maerkte:[],
      ergebnisHeim:null, ergebnisGast:null },
    { id:'t2', aera:'v19', datum:'12.9.2026', match:'Zweitheim FC - Zweitgast FC', wettbewerb:'Testliga',
      anpfiff:'18:00', herkunft:'sonnet', heim:1, gast:1, status:'offen', maerkte:[],
      ergebnisHeim:null, ergebnisGast:null }
  ];
  c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
  c.ergebnissePruefen(knopf());
  return fertig(c, 15000).then(function(){
    u.pruef('P: je ungeloestem Spiel ein EIGENER Auftragstext mit genau einem Spiel',
            prompts.length>0 && prompts.every(function(p){
              return (p.match(/\nS\d: /g)||[]).length===1;
            }), prompts.length+' Auftragstexte, Spielzeilen je Text: '+
                prompts.map(function(p){ return (p.match(/\nS\d: /g)||[]).length; }).join(','));
    var verschieden={}; prompts.forEach(function(t){ verschieden[t]=true; });
    u.pruef('P: die Auftragstexte betreffen zwei VERSCHIEDENE Spiele',
            Object.keys(verschieden).length===2,
            Object.keys(verschieden).length+' verschiedene Texte aus '+prompts.length+' Aufrufen '+
            '(je Spiel zwei gleichlautende Gemini-Laeufe - das ist Ondos Drei-Laeufe-Regel)');
    var proSpiel = c._netz.gemini + c._netz.sonnet;
    console.log('     gezaehlte KI-Aufrufe: gemini='+c._netz.gemini+' sonnet='+c._netz.sonnet+
                ' → '+proSpiel+' Aufrufe fuer 2 ungeloeste Spiele in Runde 1 (= 3 je Spiel)');
    u.pruef('P: genau drei Laeufe je Spiel in der ersten Runde', c._netz.gemini===4 && c._netz.sonnet===2,
            'gemini='+c._netz.gemini+' (2 je Spiel), sonnet='+c._netz.sonnet+' (1 je Spiel)');
    u.pruef('J: zwei brauchbare Laeufe reichen NICHT zum Vorschlag',
            c.state.pruefListe.length===0, c.state.pruefListe.length+' Vorschlaege');
    u.pruef('J: die Drei-Laeufe-Schwelle ist unveraendert 3', c.REF_MIN_LAEUFE===3, 'REF_MIN_LAEUFE='+c.REF_MIN_LAEUFE);
    var jobs=c.state.pruefJobs;
    var unz=Object.keys(jobs).filter(function(k){ return jobs[k].zustand==='unzureichend'; });
    u.pruef('J: beide Spiele dauerhaft als "noch nicht ausreichend belegt" gespeichert',
            unz.length===2, unz.length+' Spiele · '+unz.map(function(k){ return jobs[k].match; }).join(' / '));
    u.pruef('J: KEIN Sturm von sechs Wiederholungsrunden', c.state.pruefBilanz.runden<=2,
            c.state.pruefBilanz.runden+' Runden (Obergrenze MAXR unveraendert 6)');
    u.pruef('J: die Evidence der beiden Laeufe ist erhalten, nicht verworfen',
            c.state.kiProtokoll.every(function(e){ return (e.refRoh||[]).length>0; }),
            c.state.kiProtokoll.map(function(e){ return (e.refRoh||[]).length; }).join('/')+' Roheintraege');
    u.pruef('J: ein gezielter erneuter Versuch bleibt moeglich',
            (c.pruefErneut(unz[0]), (c.jobHolen(unz[0])||{}).zustand==='offen'));
    u.pruef('J: Bilanz nennt die gemessene KI-Aufrufzahl', c.state.pruefBilanz.kiAufrufe===proSpiel,
            'kiAufrufe='+c.state.pruefBilanz.kiAufrufe);
  });
  });
});

/* ═══ K. Strukturkonflikt ═══ */
schritt(function(){
  u.block('K. Zwei Strukturquellen, verschiedene Ergebnisse');
  /* Dasselbe Spiel steht im ESPN-Archiv 2:1 und im football-data-Archiv 0:0. */
  var c=u.neueUmgebung();
  var espnEins={ spiele:[{ heim:'Testheim FC', gast:'Testgast FC', torHeim:2, torGast:1, halbzeit:'1:0',
      status:'FT', datum:'2026-09-12', anpfiff:'18:00', providerCompetitionName:'Testliga',
      providerEventId:'ESPN-1', verlaengerung:'' }] };
  var fdEins={ spiele:[{ heim:'Testheim FC', gast:'Testgast FC', torHeim:0, torGast:0, halbzeit:'0:0',
      status:'FT', datum:'2026-09-12', anpfiff:'18:00', wettbewerb:'Testliga',
      providerEventId:'FD-1', verlaengerung:'' }] };
  netz(c, { espnArchiv:espnEins, fdArchiv:fdEins });
  return c.bereit.then(function(){
  c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
  c.state.apiKey='sk-ant-testschluessel';
  c.state.kiProtokoll=[{ id:'k1', aera:'v19', datum:'12.9.2026', match:'Testheim FC - Testgast FC',
    wettbewerb:'Testliga', anpfiff:'20:00', herkunft:'sonnet', heim:1, gast:0, status:'offen',
    maerkte:[], ergebnisHeim:null, ergebnisGast:null }];
  c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    u.pruef('K: das Spiel erreicht die zweite Quelle gar nicht mehr (baulich, nicht per Absprache)',
            c._netz.fdArchiv===0, 'football-data-Abrufe: '+c._netz.fdArchiv);
    u.pruef('K: genau EIN Vorschlag, und zwar der der primaeren Quelle',
            c.state.pruefListe.length===1 && c.state.pruefListe[0].heim===2 && c.state.pruefListe[0].gast===1,
            c.state.pruefListe.length?(c.state.pruefListe[0].heim+':'+c.state.pruefListe[0].gast):'kein Vorschlag');
    u.pruef('K: nichts automatisch uebernommen', c.state.kiProtokoll[0].status==='offen' &&
            c.state.kiProtokoll[0].ergebnisHeim===null);
    console.log('     Anmerkung: Ondos Prioritaet (ESPN primaer) ist hier baulich umgesetzt -');
    console.log('     ein geloestes Spiel wird keiner weiteren Quelle mehr geschickt, es kann also');
    console.log('     gar kein stilles "eine Quelle gewinnt" zwischen beiden Archiven geben.');
  });
  });
});

/* ═══ L. Alte Saves / Migration ═══ */
schritt(function(){
  u.block('L. Migration eines alten Speicherstands');
  var altesSave = {
    seedV: 8,
    bets: [{ id:900001, datum:'4.7.2026', match:'Kanada – Marokko', tipp:'x', quote:1.9, einsatz:7, status:'verloren' }],
    kiProtokoll: eintraege1209(),
    pruefListe: [
      { id:'S0', art:'log', match:'Lazio Rom - AC Mailand', datum:'12.9.2026', heim:2, gast:2,
        halbzeit:'2:0', urteile:[], eintraege:['alt1'], quelle:'https://alt' },
      { id:'S1', art:'log', match:'1. FC Köln - SV Werder Bremen', datum:'12.9.2026', heim:1, gast:1,
        halbzeit:'1:0', urteile:[], eintraege:['alt2'], quelle:'https://alt' }
    ],
    pruefBilanz: { gesamt:2, gef:2, laeuft:[], geparkt:[], fehlt:[], runden:3 },
    regeln: { maxEinsatz:20 }
  };
  return app({}, altesSave).then(function(c){
    u.pruef('alte Vorschlaege sind nach der Migration noch da', c.state.pruefListe.length===2,
            c.state.pruefListe.length+' Vorschlaege');
    u.pruef('alte Bilanz ist unveraendert erhalten', c.state.pruefBilanz && c.state.pruefBilanz.gef===2);
    u.pruef('jeder alte Vorschlag hat jetzt eine fixtureId',
            c.state.pruefListe.every(function(v){ return !!v.fixtureId; }),
            c.state.pruefListe.map(function(v){ return v.fixtureId; }).join(' · '));
    u.pruef('und einen Job im Zustand "vorschlag"',
            c.state.pruefListe.every(function(v){ return (c.jobHolen(v.fixtureId)||{}).zustand==='vorschlag'; }));
    u.pruef('Wetten unveraendert', c.state.bets.length===1 && c.state.bets[0].id===900001);
    u.pruef('kiProtokoll unveraendert lang', c.state.kiProtokoll.length===eintraege1209().length);
    /* Idempotenz: ein zweiter Start auf demselben migrierten Stand darf nichts verdoppeln. */
    var nachher1=gespeicherterStand(c);
    return app({}, nachher1).then(function(c2){
      u.pruef('Migration ist idempotent (zweiter Lauf aendert nichts mehr)',
              c2.state.pruefListe.length===2 && Object.keys(c2.state.pruefJobs).length===Object.keys(c.state.pruefJobs).length,
              Object.keys(c2.state.pruefJobs).length+' Jobs');
    });
  });
});

/* ═══ M. Messdaten bleiben unveraendert ═══ */
schritt(function(){
  u.block('M. Bestehende bewertete Messdaten');
  return app().then(function(c){
  /* Bereits BEWERTETE Eintraege dazu - genau die, die der Auftrag schuetzt. */
  var bewertet = MESS.kiProtokoll.filter(function(e){ return e.status==='bewertet'; }).slice(0,8)
    .map(function(e){ return JSON.parse(JSON.stringify(e)); });
  u.pruef('es gibt bewertete Bestandsdaten zum Pruefen', bewertet.length>0, bewertet.length+' Eintraege');
  c.state.kiProtokoll = bewertet.concat(eintraege1209());
  var vorher = JSON.stringify(bewertet);
  c.ergebnissePruefen(knopf());
  return fertig(c).then(function(){
    var nachher = JSON.stringify(c.state.kiProtokoll.filter(function(e){ return e.status==='bewertet'; })
      .slice(0,bewertet.length));
    u.pruef('bewertete Eintraege sind Zeichen fuer Zeichen unveraendert', nachher===vorher,
            nachher===vorher ? (vorher.length+' Zeichen identisch') : 'ABWEICHUNG');
    var bw=c.state.kiProtokoll.filter(function(e){ return e.status==='bewertet'; });
    u.pruef('kein bewerteter Markt zurueckgesetzt',
            bw.every(function(e){ return (e.maerkte||[]).every(function(m){ return m.status!=='offen'; }); }));
    /* Und der Gegentest: die fixtureId ist additiv - sie kommt an NEUE Eintraege, nicht
       rueckwirkend an die bewerteten. */
    u.pruef('keine rueckwirkende fixtureId an bewerteten Eintraegen',
            bw.every(function(e){ return e.fixtureId===undefined; }));
  });
  });
});

ablauf.then(function(){
  console.log('');
  process.exit(u.bilanz()?1:0);
}).catch(function(e){
  console.log('\n✗ ABBRUCH: '+(e&&e.stack||e));
  process.exit(1);
});
