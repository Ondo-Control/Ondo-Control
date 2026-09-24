/* Tests CPS1-CPS5 (v19.19.1, Nachbesserung zu Backlog-Punkt 86, Auftrag Ondo 24.9.2026,
   Abschnitt 7-10): checkpointSave() als HARTE Speicherbarriere.
   Der Speicherfehler wird so erzeugt, wie er im Browser entsteht: Das Schreiben selbst wirft
   (localStorage.setItem - IndexedDB fehlt in der Testumgebung, speicherSchreiben() faellt
   dokumentiert auf localStorage zurueck). Nichts an checkpointSave() oder den Laeufen ist
   nachgebaut; gezaehlt wird jeder Netzabruf, den der echte Code ausloest. */
var fs=require('fs'), path=require('path'), u=require('./umgebung.js');
var R=path.join(__dirname,'..');
var ARCHIV=JSON.parse(fs.readFileSync(R+'/daten/schiri-ergebnisse/2026-09.json','utf8'));
var ESPN  =JSON.parse(fs.readFileSync(R+'/daten/espn-ergebnisse/2026-09.json','utf8'));
var MESS  =JSON.parse(fs.readFileSync(R+'/ondo-control-messdaten-2026-09-17.json','utf8'));

/* --- Speicher, der sich gezielt kaputt machen laesst --- */
function speicherSteuern(c){
  var echt=c.localStorage.setItem;
  var s={ defekt:false, bedingung:null, fehlschlaege:0, versuche:0 };
  c.localStorage.setItem=function(k, v){
    s.versuche++;
    if(s.defekt || (s.bedingung && s.bedingung(String(v)))){
      s.fehlschlaege++;
      var e=new Error('QuotaExceededError (Test): Speicher voll'); e.name='QuotaExceededError';
      throw e;
    }
    return echt(k, v);
  };
  c._sp=s;
  return s;
}

/* --- Netz fuer den Prueflauf (wie t2) --- */
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
function eintraege1209(){
  return MESS.kiProtokoll.filter(function(e){ return e.datum==='12.9.2026'; })
    .map(function(e){ return JSON.parse(JSON.stringify(e)); });
}
function knopf(){ return { disabled:false, textContent:'' }; }
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
function pause(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

/* --- Netz fuer den Vorhersage-Lauf (wie t3) --- */
function berlinPlus(min){
  var f=new Intl.DateTimeFormat('sv-SE',{ timeZone:'Europe/Berlin', hour:'2-digit', minute:'2-digit', hour12:false });
  var t=f.format(new Date()).split(':'); var g=Number(t[0])*60+Number(t[1])+min; g=((g%1440)+1440)%1440;
  return ('0'+Math.floor(g/60)).slice(-2)+':'+('0'+(g%60)).slice(-2);
}
function netzVorhersage(c, spiele){
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
      var v={ vorhersagen: spiele.map(function(s){ return { match:s.match, heim:2, gast:1, p1x2:58, pTore:62, pBtts:55, bttsWort:'ja', begruendung:'Test' }; }) };
      return json(fl?gem(JSON.stringify(v)):ant(JSON.stringify(v)));
    }
    return json({});
  };
  return z;
}

/* Die fixtureId so, wie der Prueflauf sie seit v19.19.0 bildet - bewusst NUR aus Funktionen,
   die es auch in v19.19.0 schon gab, damit die Gegenprobe gegen den alten Stand laeuft. */
function fidVon(c, match, datum){ var t=c.teamsAus(match); return c.fxId(c.datumIso(datum), t.heim, t.gast); }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

/* ═══ CPS1 + CPS2: Ergebnis-Prueflauf, erster Checkpoint schlaegt fehl, dann wieder Speicher ═══ */
schritt(function(){
  u.block('CPS1. Prueflauf: der Start-Checkpoint scheitert → kein einziger externer Abruf');
  var c=u.neueUmgebung();
  var z=netzPruef(c);
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung'; c.state.apiKey='sk-ant-testschluessel';
    c.state.kiProtokoll=eintraege1209(); c.state.bets=[]; c.state.pruefJobs={}; c.state.pruefRun=null; c.state.pruefBilanz=null;
    /* Ein bereits vorhandener Vorschlag eines ANDEREN Spiels, plus einer fuer ein Spiel, das
       dieser Lauf erneut prueft (Job 'offen' nach "erneut pruefen"). Beide duerfen den
       gescheiterten Start nicht verlieren. */
    var fidK=fidVon(c,'1. FC Köln - SV Werder Bremen','12.9.2026');
    c.state.pruefListe=[
      { id:'ALT1', art:'log', fixtureId:'fx20260911_alt_spiel', match:'Alt FC - Spiel FC', heim:1, gast:0, eintraege:[], urteile:[] },
      { id:'ALT2', art:'log', fixtureId:fidK, match:'1. FC Köln - SV Werder Bremen', heim:1, gast:1, eintraege:[], urteile:[] } ];
    c.state.pruefJobs['fx20260911_alt_spiel']={ fixtureId:'fx20260911_alt_spiel', zustand:'vorschlag', vorschlagId:'ALT1', providerIds:{} };
    c.state.pruefJobs[fidK]={ fixtureId:fidK, zustand:'offen', providerIds:{} };
    c.checkpointSave();
    return pause(20);
  }).then(function(){
    var gespeichertVorher=c._speicher[c.KEY];
    var listeVorher=JSON.stringify(c.state.pruefListe);
    var sp=speicherSteuern(c); sp.defekt=true;
    var alarmeVorher=c._protokoll.alerts.length;
    c.ergebnissePruefen(knopf());
    return warte(c,'pruefRun').then(function(){
      u.pruef('CPS1: 0 ESPN-Abrufe (Archiv und Live)', z.espnArchiv===0 && z.espnLive===0);
      u.pruef('CPS1: 0 OpenLigaDB-Abrufe', z.openliga===0);
      u.pruef('CPS1: 0 football-data-Archiv-Abrufe', z.fdArchiv===0);
      u.pruef('CPS1: 0 Gemini- und 0 Sonnet-Aufrufe', z.gemini===0 && z.sonnet===0);
      u.pruef('CPS1: Lauf NICHT als abgeschlossen verbucht', c.state.pruefRun.status==='pausiert' && c.state.pruefBilanz===null,
              'status='+c.state.pruefRun.status+' bilanz='+JSON.stringify(c.state.pruefBilanz));
      u.pruef('CPS1: Fehler sichtbar (Alarm, Hinweis am Knopf und in der Anzeige)',
              c.speicherAlarm===true && c._protokoll.alerts.length===alarmeVorher+1 &&
              c.pruefBlock().indexOf(c.t('saveFail'))>=0 && c.speicherWarnBlock().indexOf(c.t('saveFailAlert'))>=0);
      u.pruef('CPS1: kein vorhandener Vorschlag verloren (auch nicht der des erneut zu pruefenden Spiels)',
              JSON.stringify(c.state.pruefListe)===listeVorher);
      u.pruef('CPS1: der gespeicherte Stand ist unveraendert (CPS5 im Lauf)', c._speicher[c.KEY]===gespeichertVorher);
      u.pruef('CPS1: kein Aufrufsturm - genau zwei Schreibversuche (Barriere + ein stiller Pausenversuch)',
              sp.versuche===2, sp.versuche+' Versuche');
      /* CPS2 */
      u.block('CPS2. Speicher wieder da → derselbe Lauf setzt fort, erst jetzt extern');
      var runId=c.state.pruefRun.runId;
      sp.defekt=false;
      c.ergebnissePruefen(knopf());
      return warte(c,'pruefRun').then(function(){
        u.pruef('CPS2: derselbe Lauf (runId) wurde fortgesetzt', c.state.pruefRun.runId===runId, runId);
        u.pruef('CPS2: jetzt fanden externe Abrufe statt', extern(z)>0,
                'fd='+z.fdArchiv+' espnArchiv='+z.espnArchiv+' espnLive='+z.espnLive);
        var neu=c.state.pruefListe.filter(function(v){ return v.id!=='ALT1'; });
        u.pruef('CPS2: normaler 10-Spiele-Fall weiterhin 10 von 10', c.state.pruefBilanz.gef===10 && c.state.pruefBilanz.gesamt===10 && neu.length===10,
                c.state.pruefBilanz.gef+' von '+c.state.pruefBilanz.gesamt);
        u.pruef('CPS2: 0 KI-Aufrufe', z.gemini===0 && z.sonnet===0 && c.state.pruefBilanz.kiAufrufe===0);
        u.pruef('CPS2: Lauf sauber abgeschlossen, Alarm aufgehoben', c.state.pruefRun.status==='fertig' && c.speicherAlarm===false);
        u.pruef('CPS2: der fremde Vorschlag ist weiterhin da', c.state.pruefListe.some(function(v){ return v.id==='ALT1'; }));
        u.pruef('CPS2: jetzt ist der neue Stand auch gespeichert', JSON.parse(c._speicher[c.KEY]).pruefListe.length===11);
      });
    });
  });
});

/* ═══ CPS1b: der Checkpoint am Rundenende scheitert → keine zweite Runde ═══ */
schritt(function(){
  u.block('CPS1b. Prueflauf: Checkpoint nach Runde 1 scheitert → Runde 2 beginnt nicht');
  var c=u.neueUmgebung();
  var z=netzPruef(c);
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung'; c.state.apiKey='sk-ant-testschluessel';
    c.state.kiProtokoll=eintraege1209(); c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
    var sp=speicherSteuern(c);
    /* Kaputt, sobald der erste Vorschlag im zu schreibenden Stand steht. */
    sp.bedingung=function(txt){ return txt.indexOf('"pruefListe":[{')>=0; };
    c.ergebnissePruefen(knopf());
    return warte(c,'pruefRun').then(function(){
      var nachRunde1={ fd:z.fdArchiv, espnLive:z.espnLive, espnArchiv:z.espnArchiv };
      u.pruef('CPS1b: Runde 1 lief (Barriere davor war intakt)', c.state.pruefListe.length===5, c.state.pruefListe.length+' Vorschlaege');
      u.pruef('CPS1b: Runde 2 hat NICHT begonnen', c.state.pruefRun.runde===1 && z.espnLive<=4,
              'runde='+c.state.pruefRun.runde+' espnLive='+z.espnLive);
      u.pruef('CPS1b: Lauf pausiert, keine Bilanz, fortsetzbar', c.state.pruefRun.status==='pausiert' && c.state.pruefBilanz===null);
      return pause(100).then(function(){
        u.pruef('CPS1b: auch spaeter kein weiterer externer Abruf (kein Selbststart)',
                z.fdArchiv===nachRunde1.fd && z.espnLive===nachRunde1.espnLive && z.espnArchiv===nachRunde1.espnArchiv);
        sp.bedingung=null;
        c.ergebnissePruefen(knopf());
        return warte(c,'pruefRun');
      }).then(function(){
        u.pruef('CPS1b: Fortsetzen holt die restlichen 5, ohne die ersten 5 erneut zu suchen',
                c.state.pruefListe.length===10 && c.state.pruefBilanz.gesamt===5, c.state.pruefListe.length+' Vorschlaege, zweiter Teil pruefte '+c.state.pruefBilanz.gesamt);
        u.pruef('CPS1b: 0 KI-Aufrufe', z.gemini===0 && z.sonnet===0);
      });
    });
  });
});

/* ═══ CPS3: Vorhersage-Gehirn - Checkpoint unmittelbar vor dem Gehirnaufruf scheitert ═══ */
schritt(function(){
  u.block('CPS3. Vorhersage: Checkpoint vor dem Gehirnaufruf scheitert → 0 Modellaufrufe');
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) },
              { match:'Gamma FC - Delta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) }];
  var c=u.neueUmgebung();
  var z=netzVorhersage(c, spiele);
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung'; c.state.apiKey='sk-ant-testschluessel';
    c.state.kiProtokoll=[]; c.state.bets=[]; c.state.vorhersageRun=null;
    var sp=speicherSteuern(c);
    /* Kaputt genau dann, wenn ein Gehirn-Schritt als 'laufend' geschrieben werden soll - also
       beim Checkpoint unmittelbar VOR dem Modellaufruf. */
    sp.bedingung=function(txt){ return /"schritte":\{[^}]*"status":"laufend"/.test(txt); };
    c.vorhersagen(knopf());
    return warte(c,'vorhersageRun').then(function(){
      var listeAbrufe=z.liste;   /* spielListeHolen() fragt regulaer in mehreren Suchdurchgaengen */
      u.pruef('CPS3: Spielliste und Marktlage liefen noch (ihre Checkpoints waren intakt)', z.liste>0 && z.marktlage===1, 'liste='+z.liste+' marktlage='+z.marktlage);
      u.pruef('CPS3: 0 Modellaufrufe fuer die nicht gestarteten Gehirn-Schritte', z.sonnet===0 && z.flash===0,
              'sonnet='+z.sonnet+' flash='+z.flash);
      u.pruef('CPS3: Lauf fortsetzbar (pausiert), keine Eintraege', c.state.vorhersageRun.status==='pausiert' && c.state.kiProtokoll.length===0);
      u.pruef('CPS3: Fehler sichtbar', c.speicherAlarm===true && String(c._elemente['ladeFehler'].textContent).indexOf('QuotaExceeded')>=0,
              '"'+c._elemente['ladeFehler'].textContent+'"');
      var runId=c.state.vorhersageRun.runId;
      return pause(100).then(function(){
        u.pruef('CPS3: kein Selbststart, kein Aufrufsturm', z.sonnet===0 && z.flash===0 && z.liste===listeAbrufe && z.marktlage===1);
        sp.bedingung=null;
        c.vorhersagen(knopf());
        return warte(c,'vorhersageRun');
      }).then(function(){
        u.pruef('CPS3: nach Wiederherstellung genau der fehlende Schritt EINMAL je Gehirn',
                z.sonnet===1 && z.flash===1, 'sonnet='+z.sonnet+' flash='+z.flash);
        u.pruef('CPS3: Spielliste und Marktlage NICHT erneut bezahlt', z.liste===listeAbrufe && z.marktlage===1, 'liste='+z.liste+' marktlage='+z.marktlage);
        u.pruef('CPS3: derselbe Lauf, sauber abgeschlossen, 4 Eintraege',
                c.state.vorhersageRun.runId===runId && c.state.vorhersageRun.status==='fertig' && c.state.kiProtokoll.length===4,
                c.state.kiProtokoll.length+' Eintraege');
      });
    });
  });
});

/* ═══ CPS3b: Vorhersage - der Start-Checkpoint scheitert → nicht einmal die Spielliste ═══ */
schritt(function(){
  u.block('CPS3b. Vorhersage: Start-Checkpoint scheitert → kein einziger bezahlter Schritt');
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:berlinPlus(180) }];
  var c=u.neueUmgebung();
  var z=netzVorhersage(c, spiele);
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung'; c.state.apiKey='sk-ant-testschluessel';
    c.state.kiProtokoll=[]; c.state.bets=[]; c.state.vorhersageRun=null;
    var sp=speicherSteuern(c); sp.defekt=true;
    c.vorhersagen(knopf());
    return warte(c,'vorhersageRun').then(function(){
      u.pruef('CPS3b: 0 Spielliste, 0 Marktlage, 0 Sonnet, 0 Flash', z.liste===0 && z.marktlage===0 && z.sonnet===0 && z.flash===0);
      u.pruef('CPS3b: Lauf pausiert und die Sperre freigegeben', c.state.vorhersageRun.status==='pausiert' && c.kiAnfrageAktiv===false);
      sp.defekt=false;
      c.vorhersagen(knopf());
      return warte(c,'vorhersageRun');
    }).then(function(){
      u.pruef('CPS3b: danach normaler Lauf - Spielliste geholt, Marktlage und jedes Gehirn genau einmal',
              z.liste>0 && z.marktlage===1 && z.sonnet===1 && z.flash===1 && c.state.kiProtokoll.length===2,
              'liste='+z.liste+' marktlage='+z.marktlage+' sonnet='+z.sonnet+' flash='+z.flash);
    });
  });
});

/* ═══ CPS4: Queue-Erholung ═══ */
schritt(function(){
  u.block('CPS4. Die globale speicherKette wird durch einen Fehlschlag nicht vergiftet');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var sp=speicherSteuern(c); sp.defekt=true;
    c.state.pruefListe=[{ id:'A', marke:'erster Versuch' }];
    var ergebnis1=null;
    var p1=c.checkpointSave().then(function(){ ergebnis1='ERFOLG'; }, function(e){ ergebnis1='ABGELEHNT: '+e.message; });
    return p1.then(function(){
      u.pruef('CPS4: der kritische Aufrufer ERFAEHRT den Fehlschlag (Promise rejected)', /^ABGELEHNT/.test(ergebnis1), ergebnis1);
      var ketteZustand=null;
      return c.speicherKette.then(function(){ ketteZustand='erfuellt'; }, function(){ ketteZustand='abgelehnt'; }).then(function(){
        u.pruef('CPS4: speicherKette selbst ist danach NICHT rejected', ketteZustand==='erfuellt', ketteZustand);
        sp.defekt=false;
        c.state.pruefListe=[{ id:'A', marke:'zweiter Versuch' }];
        var ergebnis2=null;
        return c.checkpointSave().then(function(){ ergebnis2='ERFOLG'; }, function(e){ ergebnis2='ABGELEHNT: '+e.message; });
      }).then(function(){
        return null;
      });
    }).then(function(){
      var gesp=JSON.parse(c._speicher[c.KEY]);
      u.pruef('CPS4: der spaetere Checkpoint gelingt und schreibt den neuen Stand',
              gesp.pruefListe && gesp.pruefListe[0].marke==='zweiter Versuch');
      u.pruef('CPS4: der Alarm ist nach dem Erfolg wieder aufgehoben', c.speicherAlarm===false);
      var ohne=null;
      sp.defekt=true;
      var ohneP=(typeof c.checkpointOhneBarriere==='function') ? c.checkpointOhneBarriere() : Promise.resolve('fehlt');
      return ohneP.then(function(r){ ohne=r; }).then(function(){
        u.pruef('CPS4: checkpointOhneBarriere() erzeugt bei Fehlschlag kein unbehandeltes Promise', ohne===false);
        sp.defekt=false;
      });
    });
  });
});

/* ═══ CPS5: ein spaeterer Fehlschlag zerstoert keinen aelteren gespeicherten Stand ═══ */
schritt(function(){
  u.block('CPS5. Ein gescheiterter spaeterer Checkpoint laesst den aelteren Stand unberuehrt');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var sp=speicherSteuern(c);
    c.state.pruefListe=[{ id:'A', marke:'Stand A (erfolgreich)' }];
    return c.checkpointSave().then(function(){
      var gespA=c._speicher[c.KEY];
      sp.defekt=true;
      c.state.pruefListe=[{ id:'A', marke:'Stand B (scheitert)' }];
      return c.checkpointSave().then(function(){ return 'ERFOLG'; }, function(){ return 'ABGELEHNT'; }).then(function(r){
        u.pruef('CPS5: der spaetere Checkpoint scheitert sichtbar', r==='ABGELEHNT');
        u.pruef('CPS5: der gespeicherte Stand A ist Zeichen fuer Zeichen erhalten', c._speicher[c.KEY]===gespA,
                JSON.parse(c._speicher[c.KEY]).pruefListe[0].marke);
        sp.defekt=false;
        var c2=u.neueUmgebung({ save:c._speicher[c.KEY] });
        return c2.bereit.then(function(){
          u.pruef('CPS5: ein Neustart laedt Stand A', c2.state.pruefListe[0].marke==='Stand A (erfolgreich)');
        });
      });
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
