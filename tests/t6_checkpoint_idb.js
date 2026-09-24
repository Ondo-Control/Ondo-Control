/* Tests I1-I6 (v19.19.2, Auftrag Ondo 24.9.2026 "Kritischer Checkpoint darf localStorage-Fallback
   NICHT als Erfolg werten"). Beide Speicher sind vorhanden: die IndexedDB-Attrappe aus
   umgebung.js (mit einem bereits gespeicherten Stand A) und ein funktionierender localStorage.
   Gezielt scheitert NUR das IndexedDB-Schreiben. Gezaehlt wird jeder Netzabruf des echten
   Codes aus beta.html. Gegenprobe: ONDO_BETA=<beta.html von c189b61> node tests/t6_checkpoint_idb.js */
var fs=require('fs'), path=require('path'), u=require('./umgebung.js');
var R=path.join(__dirname,'..');
var ARCHIV=JSON.parse(fs.readFileSync(R+'/daten/schiri-ergebnisse/2026-09.json','utf8'));
var ESPN  =JSON.parse(fs.readFileSync(R+'/daten/espn-ergebnisse/2026-09.json','utf8'));
var MESS  =JSON.parse(fs.readFileSync(R+'/ondo-control-messdaten-2026-09-17.json','utf8'));
var KEY='ondo-control-v1';

function netzPruef(c){
  var z={ fdArchiv:0, espnArchiv:0, espnLive:0, openliga:0, gemini:0, sonnet:0 };
  c._netz=z;
  function json(o){ return Promise.resolve({ ok:true, status:200, json:function(){ return Promise.resolve(o); },
                                             text:function(){ return Promise.resolve(JSON.stringify(o)); } }); }
  c.fetch=function(url){
    url=String(url);
    if(url.indexOf('daten/schiri-ergebnisse/')>=0){ z.fdArchiv++; return json(ARCHIV); }
    if(url.indexOf('daten/espn-ergebnisse/')>=0){ z.espnArchiv++; return json(ESPN); }
    if(url.indexOf('site.web.api.espn.com')>=0){ z.espnLive++; return json({ events:[] }); }
    if(url.indexOf('api.openligadb.de')>=0){ z.openliga++; return json([]); }
    if(url.indexOf('generativelanguage')>=0){ if(url.indexOf('/models?')>=0) return json({ models:[] }); z.gemini++; return json({}); }
    if(url.indexOf('api.anthropic.com')>=0){ z.sonnet++; return json({}); }
    return json({});
  };
  return z;
}
function extern(z){ return z.fdArchiv+z.espnArchiv+z.espnLive+z.openliga+z.gemini+z.sonnet; }
function berlinPlus(min){
  var f=new Intl.DateTimeFormat('sv-SE',{ timeZone:'Europe/Berlin', hour:'2-digit', minute:'2-digit', hour12:false });
  var t=f.format(new Date()).split(':'); var g=Number(t[0])*60+Number(t[1])+min; g=((g%1440)+1440)%1440;
  return ('0'+Math.floor(g/60)).slice(-2)+':'+('0'+(g%60)).slice(-2);
}
function netzVorhersage(c, spiele, opt){
  opt=opt||{};
  var z={ liste:0, marktlage:0, flash:0, sonnet:0 };
  c._netz=z;
  function json(o){ return Promise.resolve({ ok:true, status:200, json:function(){ return Promise.resolve(o); } }); }
  function gem(t){ return { candidates:[{ content:{ parts:[{ text:t }] } }], modelVersion:'gemini-2.5-flash' }; }
  function ant(t){ return { content:[{ type:'text', text:t }], model:'claude-sonnet-4-6' }; }
  c.fetch=function(url, o){
    url=String(url);
    if(url.indexOf('/models?')>=0) return json({ models:[{name:'models/gemini-2.5-flash'}] });
    var text='';
    try{ text = url.indexOf('generativelanguage')>=0 ? JSON.parse(o.body).contents[0].parts[0].text
                                                    : JSON.parse(o.body).messages[0].content; }catch(e){}
    if(text.indexOf('Suche im Web AUSSCHLIESSLICH')>=0){ z.liste++; return json(gem(JSON.stringify({ spiele:spiele }))); }
    if(text.indexOf('Recherchiere per Websuche')>=0){ z.marktlage++;
      return json(ant(JSON.stringify({ lage: spiele.map(function(s){ return { match:s.match, hinweis:'Lage' }; }) }))); }
    if(text.indexOf('Fussball-Prognostiker')>=0){
      var fl=url.indexOf('generativelanguage')>=0; z[fl?'flash':'sonnet']++;
      if(opt.flashHaengt && fl) return new Promise(function(){});
      var v={ vorhersagen: spiele.map(function(s){ return { match:s.match, heim:2, gast:1, p1x2:58, pTore:62, pBtts:55, bttsWort:'ja', begruendung:'Test' }; }) };
      return json(fl?gem(JSON.stringify(v)):ant(JSON.stringify(v)));
    }
    return json({});
  };
  return z;
}
function eintraege1209(){
  return MESS.kiProtokoll.filter(function(e){ return e.datum==='12.9.2026'; })
    .map(function(e){ return JSON.parse(JSON.stringify(e)); });
}
function knopf(){ return { disabled:false, textContent:'' }; }
function pause(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
function warte(c, feld, msMax){
  msMax=msMax||8000; var t0=Date.now();
  return new Promise(function(res, rej){
    (function schau(){
      var r=c.state[feld];
      if(r && r.status!=='laufend') return res(r);
      if(Date.now()-t0>msMax) return rej(new Error(feld+' wurde nicht fertig'));
      setTimeout(schau, 5);
    })();
  });
}
function lsStand(c){ return c._speicher[KEY]===undefined ? null : c._speicher[KEY]; }
function schluessel(c){
  c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung'; c.state.apiKey='sk-ant-testschluessel';
}

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

/* ═══ I1. Pruefauf: IndexedDB hat Stand A, IndexedDB-Schreiben scheitert, localStorage heil ═══ */
schritt(function(){
  u.block('I1. Prueflauf: IndexedDB scheitert, localStorage funktioniert → Checkpoint rejected');
  var c=u.neueUmgebung();
  var z=netzPruef(c);
  var standA=null;
  return c.bereit.then(function(){
    schluessel(c);
    c.state.kiProtokoll=eintraege1209(); c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={};
    c.state.pruefRun=null; c.state.pruefBilanz=null;
    c.state.markeTest='Stand A';
    return c.checkpointSave();
  }).then(function(){
    standA=c._idb.daten[KEY];
    u.pruef('Aufbau: IndexedDB enthaelt Stand A', !!standA && JSON.parse(standA).markeTest==='Stand A');
    /* localStorage funktioniert nachweislich */
    c.localStorage.setItem('probe','ok');
    u.pruef('Aufbau: localStorage ist beschreibbar', c.localStorage.getItem('probe')==='ok');
    var lsVorher=lsStand(c);
    c._idb.schreibFehler=true;
    c.state.markeTest='Stand B';
    /* 1. Der Checkpoint selbst, direkt gemessen */
    return c.checkpointSave().then(function(){ return 'ERFOLG'; }, function(e){ return 'ABGELEHNT: '+e.message; }).then(function(r){
      u.pruef('I1: checkpointSave() rejected, obwohl localStorage funktioniert', /^ABGELEHNT/.test(r), r);
      u.pruef('I1: localStorage wurde fuer den kritischen Checkpoint gar nicht erst beschrieben', lsStand(c)===lsVorher);
      /* 2. Der kritische Prueflauf */
      c.ergebnissePruefen(knopf());
      return warte(c,'pruefRun').then(function(){ return pause(50); });
    }).then(function(){
      u.pruef('I1: 0 ESPN-Abrufe', z.espnArchiv===0 && z.espnLive===0, 'archiv='+z.espnArchiv+' live='+z.espnLive);
      u.pruef('I1: 0 OpenLigaDB-Abrufe', z.openliga===0);
      u.pruef('I1: 0 football-data-Archiv-Abrufe', z.fdArchiv===0);
      u.pruef('I1: 0 Gemini- und 0 Sonnet-Aufrufe', z.gemini===0 && z.sonnet===0);
      u.pruef('I1: Lauf pausiert und fortsetzbar, keine Bilanz', c.state.pruefRun.status==='pausiert' && c.state.pruefBilanz===null,
              'status='+c.state.pruefRun.status);
      u.pruef('I1: Fehler sichtbar (Alarm + Hinweis)', c.speicherAlarm===true && c.pruefBlock().indexOf(c.t('saveFail'))>=0 &&
              c.speicherWarnBlock().indexOf(c.t('saveFailAlert'))>=0);
      u.pruef('I1: IndexedDB enthaelt weiterhin Stand A (zeichengleich)', c._idb.daten[KEY]===standA);
      u.pruef('I1: localStorage hat den Lauf NICHT weiterlaufen lassen', extern(z)===0 && lsStand(c)===lsVorher);
      /* 3. IndexedDB wieder heil → normaler Fortsetz-Klick */
      c._idb.schreibFehler=false;
      var runId=c.state.pruefRun.runId;
      c.ergebnissePruefen(knopf());
      return warte(c,'pruefRun');
    }).then(function(){
      u.pruef('I1: nach Wiederherstellung derselbe Lauf fortgesetzt', c.state.pruefRun.status==='fertig');
      u.pruef('I1: erst jetzt externe Abrufe', extern(z)>0, 'fd='+z.fdArchiv+' espnArchiv='+z.espnArchiv+' espnLive='+z.espnLive);
      u.pruef('I1: 10 von 10, 0 KI', c.state.pruefBilanz.gef===10 && c.state.pruefBilanz.gesamt===10 && z.gemini===0 && z.sonnet===0,
              c.state.pruefBilanz.gef+' von '+c.state.pruefBilanz.gesamt);
      var jetzt=JSON.parse(c._idb.daten[KEY]);
      u.pruef('I1: der neue Stand steht jetzt in IndexedDB', jetzt.markeTest==='Stand B' && jetzt.pruefListe.length===10);
    });
  });
});

/* ═══ I2. Vorhersage: Checkpoint vor dem Gehirnaufruf, IndexedDB scheitert, localStorage heil ═══ */
schritt(function(){
  u.block('I2. Vorhersage: IndexedDB scheitert vor dem Gehirnaufruf → 0 Modellaufrufe');
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) },
              { match:'Gamma FC - Delta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) }];
  var c=u.neueUmgebung();
  var z=netzVorhersage(c, spiele);
  var listeN=0, idbVorher=null;
  return c.bereit.then(function(){
    schluessel(c); c.state.kiProtokoll=[]; c.state.bets=[]; c.state.vorhersageRun=null;
    return c.checkpointSave();
  }).then(function(){
    /* IndexedDB scheitert genau beim Checkpoint unmittelbar vor dem Gehirnaufruf */
    c._idb.schreibFehler=function(txt){ return /"schritte":\{[^}]*"status":"laufend"/.test(txt); };
    c.vorhersagen(knopf());
    return warte(c,'vorhersageRun').then(function(){ return pause(50); });
  }).then(function(){
    listeN=z.liste;
    idbVorher=c._idb.daten[KEY];
    u.pruef('I2: Spielliste und Marktlage liefen (deren Checkpoints gelangen)', z.liste>0 && z.marktlage===1,
            'liste='+z.liste+' marktlage='+z.marktlage);
    u.pruef('I2: 0 Sonnet-Aufrufe fuer den nicht gestarteten Schritt', z.sonnet===0, 'sonnet='+z.sonnet);
    u.pruef('I2: 0 Flash-Aufrufe fuer den nicht gestarteten Schritt', z.flash===0, 'flash='+z.flash);
    u.pruef('I2: Lauf pausiert, keine Eintraege', c.state.vorhersageRun.status==='pausiert' && c.state.kiProtokoll.length===0);
    u.pruef('I2: Fehler sichtbar', c.speicherAlarm===true && String(c._elemente['ladeFehler'].textContent).length>0,
            '"'+c._elemente['ladeFehler'].textContent+'"');
    u.pruef('I2: IndexedDB traegt KEINEN Stand mit gestartetem Gehirn-Schritt',
            !/"schritte":\{[^}]*"status":"laufend"/.test(idbVorher));
    c._idb.schreibFehler=false;
    c.vorhersagen(knopf());
    return warte(c,'vorhersageRun');
  }).then(function(){
    u.pruef('I2: nach Wiederherstellung je Gehirn genau EIN Aufruf', z.sonnet===1 && z.flash===1, 'sonnet='+z.sonnet+' flash='+z.flash);
    u.pruef('I2: Spielliste und Marktlage NICHT erneut bezahlt', z.liste===listeN && z.marktlage===1);
    u.pruef('I2: sauber abgeschlossen, 4 Eintraege', c.state.vorhersageRun.status==='fertig' && c.state.kiProtokoll.length===4);
  });
});

/* ═══ I2b. Bereits in IndexedDB gesicherte Gehirnantwort wird nach einem Fehlschlag nicht
       erneut bezahlt ═══ */
schritt(function(){
  u.block('I2b. Gesicherte Sonnet-Antwort bleibt, Flash fehlt; IndexedDB scheitert, dann heil');
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) }];
  var c=u.neueUmgebung();
  netzVorhersage(c, spiele, { flashHaengt:true });
  return c.bereit.then(function(){
    schluessel(c); c.state.kiProtokoll=[]; c.state.bets=[]; c.state.vorhersageRun=null;
    c.vorhersagen(knopf());
    return pause(400);
  }).then(function(){
    var gesichert=c._idb.daten[KEY];
    u.pruef('Aufbau: Sonnets Antwort steht in IndexedDB', JSON.parse(gesichert).vorhersageRun.schritte.sonnet.status==='fertig');
    /* Neustart mit genau diesem IndexedDB-Stand; localStorage funktioniert, IndexedDB-Schreiben nicht */
    var c2=u.neueUmgebung({ idb:{ 'ondo-control-v1':gesichert } });
    var z2=netzVorhersage(c2, spiele);
    return c2.bereit.then(function(){
      u.pruef('Neustart liest den IndexedDB-Stand (Lauf fortsetzbar)', c2.state.vorhersageRun && c2.state.vorhersageRun.status==='pausiert');
      c2._idb.schreibFehler=true;
      c2.vorhersagen(knopf());
      return warte(c2,'vorhersageRun').then(function(){ return pause(50); });
    }).then(function(){
      u.pruef('I2b: Start-Checkpoint scheitert → 0 Aufrufe jeder Art', z2.liste===0 && z2.marktlage===0 && z2.sonnet===0 && z2.flash===0);
      u.pruef('I2b: IndexedDB unveraendert', c2._idb.daten[KEY]===gesichert);
      c2._idb.schreibFehler=false;
      c2.vorhersagen(knopf());
      return warte(c2,'vorhersageRun');
    }).then(function(){
      u.pruef('I2b: nur der fehlende Flash-Schritt laeuft, genau einmal', z2.flash===1 && z2.sonnet===0,
              'flash='+z2.flash+' sonnet='+z2.sonnet);
      u.pruef('I2b: gesicherte Sonnet-Antwort NICHT erneut bezahlt, 2 Eintraege', c2.state.kiProtokoll.length===2);
    });
  });
});

/* ═══ I3. IndexedDB komplett nicht verfuegbar, localStorage funktioniert ═══ */
schritt(function(){
  u.block('I3. IndexedDB gar nicht vorhanden → kritischer Checkpoint scheitert absichtlich');
  var c=u.neueUmgebung({ ohneIdb:true });
  var z=netzPruef(c);
  return c.bereit.then(function(){
    schluessel(c);
    c.state.kiProtokoll=eintraege1209(); c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
    c.ergebnissePruefen(knopf());
    return warte(c,'pruefRun').then(function(){ return pause(20); });
  }).then(function(){
    u.pruef('I3: 0 externe Abrufe', extern(z)===0);
    u.pruef('I3: Lauf pausiert, Fehler sichtbar', c.state.pruefRun.status==='pausiert' && c.speicherAlarm===true);
    /* normales save() funktioniert dort weiterhin ueber localStorage */
    c.state.markeTest='ohne IDB gespeichert';
    c.save();
    return pause(20).then(function(){
      u.pruef('I3: normales save() faellt weiterhin auf localStorage zurueck',
              lsStand(c) && JSON.parse(lsStand(c)).markeTest==='ohne IDB gespeichert');
    });
  });
});

/* ═══ I4. Normales save(): IndexedDB scheitert, localStorage funktioniert ═══ */
schritt(function(){
  u.block('I4. Normales save() behaelt seinen localStorage-Rueckfall (Best-Effort)');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var lsVorher=lsStand(c);
    c._idb.schreibFehler=true;
    c.state.markeTest='save-Stand';
    c.save();
    return pause(30).then(function(){
      u.pruef('I4: localStorage erhaelt den neuen Stand', lsStand(c)!==lsVorher && JSON.parse(lsStand(c)).markeTest==='save-Stand');
      u.pruef('I4: save() meldet Erfolg wie bisher (kein Alarm)', c.speicherAlarm===false &&
              c._elemente['saveNote'].textContent===c.t('saved'), '"'+c._elemente['saveNote'].textContent+'"');
      var r=null;
      return c.speicherSchreiben(KEY, { probe:1 }).then(function(){ r='ERFOLG'; }, function(){ r='ABGELEHNT'; }).then(function(){
        u.pruef('I4: speicherSchreiben() (Best-Effort-Weg) gilt bei gelungenem Rueckfall als Erfolg', r==='ERFOLG');
      });
    });
  });
});

/* ═══ I5. Queue-Erholung mit dem strikten Weg ═══ */
schritt(function(){
  u.block('I5. Strikter Checkpoint scheitert an IndexedDB, danach gelingt der naechste');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c._idb.schreibFehler=true;
    c.state.markeTest='erster Versuch';
    var extern1=false;
    return c.checkpointSave().then(function(){ extern1=true; }, function(){}).then(function(){
      u.pruef('I5: nach dem Fehlschlag startet kein externer Schritt', extern1===false);
      var kette=null;
      return c.speicherKette.then(function(){ kette='erfuellt'; }, function(){ kette='abgelehnt'; }).then(function(){
        u.pruef('I5: speicherKette ist NICHT dauerhaft rejected', kette==='erfuellt', kette);
        c._idb.schreibFehler=false;
        c.state.markeTest='zweiter Versuch';
        var extern2=false;
        return c.checkpointSave().then(function(){ extern2=true; }, function(){}).then(function(){
          u.pruef('I5: der zweite Checkpoint schreibt korrekt nach IndexedDB', JSON.parse(c._idb.daten[KEY]).markeTest==='zweiter Versuch');
          u.pruef('I5: danach darf der externe Schritt starten', extern2===true);
          u.pruef('I5: Alarm wieder aufgehoben', c.speicherAlarm===false);
        });
      });
    });
  });
});

/* ═══ I6. speicherLesen(): Prioritaet IndexedDB zuerst unveraendert ═══ */
schritt(function(){
  u.block('I6. Lesereihenfolge unveraendert: IndexedDB vor localStorage');
  var c=u.neueUmgebung({ idb:{ 'ondo-control-v1':{ seedV:10, markeTest:'IDB-Stand A' } },
                         save:{ seedV:10, markeTest:'localStorage-Stand B' } });
  return c.bereit.then(function(){
    u.pruef('I6: load() liest den IndexedDB-Stand, nicht den localStorage-Stand', c.state.markeTest==='IDB-Stand A', c.state.markeTest);
  });
});

ablauf.then(function(){
  console.log('');
  process.exit(u.bilanz()?1:0);
}).catch(function(e){
  console.log('\n✗ ABBRUCH: '+(e&&e.stack||e));
  process.exit(1);
});
