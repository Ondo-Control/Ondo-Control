/* Backlog-Punkt 91, v19.22.1: Lifecycle-Schreibweg.
   Der echte <script>-Block aus beta.html laeuft ueber umgebung.js. Geprueft werden nur
   Browserereignisse/IndexedDB durch die vorhandene Attrappe; Produktfunktionen werden nicht
   nachgebaut. ONDO_BETA erlaubt die Mutations-Gegenproben gegen Wegwerfkopien. */
var u=require('./umgebung.js');
var KEY='ondo-control-v1';
var DIAG='ondo-control-speicherdiagnose-v1';
function pause(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
function fire(c, typ, sichtbarkeit){
  if(sichtbarkeit){ c.document.visibilityState=sichtbarkeit; c.document.hidden=(sichtbarkeit==='hidden'); }
  (c._protokoll.listener[typ]||[]).slice().forEach(function(f){ f({type:typ}); });
}
function diagListe(c){ var r=c.localStorage.getItem(DIAG); return r?JSON.parse(r):[]; }
function letzter(c){ var a=diagListe(c); return a[a.length-1]||null; }
function basisState(c){ return JSON.parse(JSON.stringify(c.state)); }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

schritt(function(){
  u.block('L1. Hide ohne Run und ohne ausstehendes save schreibt nichts');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    return pause(25).then(function(){
      u.pruef('L1: kein IndexedDB-Write', c._idb.schreibVersuche===vor, c._idb.schreibVersuche-vor);
      u.pruef('L1: kein Lifecycle-Write gestartet', c.lebenszyklusWritesGestartet===0);
      u.pruef('L1: kein falscher Alarm', c.speicherAlarm===false&&c._protokoll.alerts.length===0);
    });
  });
});

schritt(function(){
  u.block('L2. Laufender Run -> genau ein Lifecycle-Write, pausiert persistiert');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'r1',status:'laufend'};
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    return pause(30).then(function(){
      var gespeichert=JSON.parse(c._idb.daten[KEY]);
      u.pruef('L2: genau ein Write', c._idb.schreibVersuche===vor+1, c._idb.schreibVersuche-vor);
      u.pruef('L2: RAM-Run auf pausiert', c.state.pruefRun.status==='pausiert');
      u.pruef('L2: pausiert ist in IndexedDB persistiert', gespeichert.pruefRun&&gespeichert.pruefRun.status==='pausiert');
      u.pruef('L2: Lifecycle-Zaehler Erfolg 1/1/0', c.lebenszyklusWritesGestartet===1&&c.lebenszyklusWritesErfolgreich===1&&c.lebenszyklusWritesFehlgeschlagen===0);
    });
  });
});

schritt(function(){
  u.block('L3. Ausstehendes save allein erzwingt genau einen Lifecycle-Write');
  var c=u.neueUmgebung(), fertig;
  return c.bereit.then(function(){
    c.speicherSchreiben=function(){ return new Promise(function(res){ fertig=res; }); };
    c.save();
    u.pruef('L3: save-Zaehler steht waehrend Promise auf 1', c.anzahlSaveAusstehend===1,c.anzahlSaveAusstehend);
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    return pause(30).then(function(){
      u.pruef('L3: genau ein Lifecycle-Write trotz fehlendem Run', c._idb.schreibVersuche===vor+1,c._idb.schreibVersuche-vor);
      u.pruef('L3: Lifecycle-Write erfolgreich', c.lebenszyklusWritesErfolgreich===1);
      fertig();
      return pause(0);
    }).then(function(){
      u.pruef('L3: save-Zaehler nach Erfolg wieder 0', c.anzahlSaveAusstehend===0,c.anzahlSaveAusstehend);
    });
  });
});

schritt(function(){
  u.block('L4. Hide-Zyklus wird entdoppelt; pagehide allein bleibt wirksam');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'r2',status:'laufend'};
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    fire(c,'pagehide');
    return pause(30).then(function(){
      u.pruef('L4: visibilitychange + pagehide -> hoechstens/genau ein Write', c._idb.schreibVersuche===vor+1,c._idb.schreibVersuche-vor);
      fire(c,'visibilitychange','visible');
      return pause(5);
    });
  }).then(function(){
    var c2=u.neueUmgebung();
    return c2.bereit.then(function(){
      c2.state.vorhersageRun={runId:'p1',status:'laufend'};
      var vor=c2._idb.schreibVersuche;
      fire(c2,'pagehide');
      return pause(30).then(function(){
        u.pruef('L4: pagehide ohne vorheriges visibilitychange -> genau ein Write', c2._idb.schreibVersuche===vor+1,c2._idb.schreibVersuche-vor);
        u.pruef('L4: Vorhersage-Run dabei pausiert', c2.state.vorhersageRun.status==='pausiert');
      });
    });
  });
});

schritt(function(){
  u.block('L5. Lifecycle-Abbruch: still, Diagnose, genau ein Recovery-Versuch');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'r3',status:'laufend'};
    c._idb.schreibFehler=true;
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    return pause(35).then(function(){
      var d=letzter(c);
      u.pruef('L5: Lifecycle-Fehler erzeugt keinen Alarm', c.speicherAlarm===false&&c._protokoll.alerts.length===0);
      u.pruef('L5: ungesichert-Flag gesetzt', c.lebenszyklusUngesichert===true);
      u.pruef('L5: Diagnosequelle lebenszyklus', d&&d.quelle==='lebenszyklus');
      u.pruef('L5: Ausloeser visibilitychange', d&&d.ausloeser==='visibilitychange',d&&d.ausloeser);
      u.pruef('L5: Run-Status am echten Schreibstart = pausiert', d&&d.pruefRunStatusStart==='pausiert',d&&d.pruefRunStatusStart);
      u.pruef('L5: schreibNoetig + Grund erfasst', d&&d.schreibNoetig===true&&d.schreibGrund==='lauf_geaendert',d&&d.schreibGrund);
      u.pruef('L5: Lifecycle-Zaehler 1 gestartet / 0 Erfolg / 1 Fehler', c.lebenszyklusWritesGestartet===1&&c.lebenszyklusWritesErfolgreich===0&&c.lebenszyklusWritesFehlgeschlagen===1);
      c._idb.schreibFehler=false;
      fire(c,'visibilitychange','visible');
      return pause(35).then(function(){
        u.pruef('L5: genau ein Recovery-Write bei Rueckkehr', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
        u.pruef('L5: Flag vor Wiederholung geloescht', c.lebenszyklusUngesichert===false);
        fire(c,'pageshow','visible');
        return pause(25);
      }).then(function(){
        u.pruef('L5: pageshow erzeugt keinen zweiten Recovery-Write', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
      });
    });
  });
});

schritt(function(){
  u.block('L5b. Scheitert Recovery sichtbar, gilt wieder der bestehende Checkpoint-Alarm');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'r4',status:'laufend'};
    c._idb.schreibFehler=true;
    var vor=c._idb.schreibVersuche;
    fire(c,'pagehide');
    return pause(35).then(function(){
      u.pruef('L5b: erster Lifecycle-Abbruch bleibt still', c._protokoll.alerts.length===0&&c.speicherAlarm===false);
      fire(c,'pageshow','visible');
      return pause(40).then(function(){
        var a=diagListe(c), d=a[a.length-1];
        u.pruef('L5b: exakt ein Wiederholungsversuch', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
        u.pruef('L5b: Wiederholung setzt bestehenden Alarm', c.speicherAlarm===true&&c._protokoll.alerts.length===1);
        u.pruef('L5b: Recovery-Diagnose hat eigenen Ausloeser', d&&d.ausloeser==='rueckkehr_wiederholung',d&&d.ausloeser);
      });
    });
  });
});

schritt(function(){
  u.block('L5c. Ausstehendes save wird im Lifecycle-Fehler technisch belegt');
  var c=u.neueUmgebung(), fertig;
  return c.bereit.then(function(){
    c.speicherSchreiben=function(){ return new Promise(function(res){ fertig=res; }); };
    c.save();
    c._idb.schreibFehler=true;
    fire(c,'visibilitychange','hidden');
    return pause(35).then(function(){
      var d=letzter(c);
      u.pruef('L5c: Grund save_aussteht', d&&d.schreibGrund==='save_aussteht',d&&d.schreibGrund);
      u.pruef('L5c: Anzahl ausstehender save am Schreibstart = 1', d&&d.anzahlSaveAussteht===1,d&&d.anzahlSaveAussteht);
      fertig(); return pause(0);
    });
  });
});

schritt(function(){
  u.block('L6. Programmstart schreibt nur bei wirklichem laufend -> pausiert');
  var c0=u.neueUmgebung();
  return c0.bereit.then(function(){
    var b=basisState(c0); b.pruefRun={runId:'alt',status:'pausiert'}; b.vorhersageRun=null;
    var c1=u.neueUmgebung({save:b});
    return c1.bereit.then(function(){ return pause(30).then(function(){
      u.pruef('L6: bereits pausierter Run -> nur der unveraenderte load()-Write, kein Start-Write', c1._idb.schreibVersuche===1,c1._idb.schreibVersuche);
      var b2=basisState(c0); b2.pruefRun={runId:'hang',status:'laufend'}; b2.vorhersageRun=null;
      var c2=u.neueUmgebung({save:b2});
      return c2.bereit.then(function(){ return pause(35).then(function(){
        u.pruef('L6: haengender laufender Run -> load()-Write plus genau ein Start-Write', c2._idb.schreibVersuche===2,c2._idb.schreibVersuche);
        u.pruef('L6: Start entsperrt auf pausiert', c2.state.pruefRun.status==='pausiert');
        var ges=JSON.parse(c2._idb.daten[KEY]);
        u.pruef('L6: pausiert wurde beim Start persistiert', ges.pruefRun&&ges.pruefRun.status==='pausiert');
      }); });
    }); });
  });
});

schritt(function(){
  u.block('L7. save-Zaehler faellt bei Erfolg UND Fehler sicher auf 0');
  var c=u.neueUmgebung(), ok, fail;
  return c.bereit.then(function(){
    c.speicherSchreiben=function(){ return new Promise(function(res){ ok=res; }); };
    c.save();
    u.pruef('L7: Erfolgspfad startet bei 1', c.anzahlSaveAusstehend===1,c.anzahlSaveAusstehend);
    ok();
    return pause(0).then(function(){
      u.pruef('L7: Erfolgspfad endet bei 0', c.anzahlSaveAusstehend===0,c.anzahlSaveAusstehend);
      var c2=u.neueUmgebung();
      return c2.bereit.then(function(){
        c2.speicherSchreiben=function(){ return new Promise(function(res,rej){ fail=rej; }); };
        c2.save();
        u.pruef('L7: Fehlerpfad startet bei 1', c2.anzahlSaveAusstehend===1,c2.anzahlSaveAusstehend);
        fail(new Error('save Testfehler'));
        return pause(0).then(function(){
          u.pruef('L7: Fehlerpfad endet bei 0', c2.anzahlSaveAusstehend===0,c2.anzahlSaveAusstehend);
        });
      });
    });
  });
});

schritt(function(){
  u.block('L8. Harte Barriere bleibt rejected und blockiert den Folgeschritt');
  var c=u.neueUmgebung(), modell=0;
  return c.bereit.then(function(){
    c._idb.schreibFehler=true;
    return c.checkpointSave().then(function(){ modell++; return null; },function(e){ return e; });
  }).then(function(e){
    u.pruef('L8: Checkpoint weiterhin rejected', !!e);
    u.pruef('L8: nachgelagerter Modellschritt nicht gestartet', modell===0,modell);
    u.pruef('L8: bestehender Alarm weiterhin gesetzt', c.speicherAlarm===true&&c._protokoll.alerts.length===1);
    c._idb.schreibFehler=false;
    return c.checkpointSave().then(function(){
      u.pruef('L8: Speicher-Kette bleibt nach Fehler benutzbar', true);
    });
  });
});

schritt(function(){
  u.block('L9. Checkpoint-/Backup-Metadaten entstehen am Schreibstart ohne Semantikwechsel');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'r5',status:'laufend'};
    c.state.vorhersageRun={runId:'p5',status:'pausiert'};
    c._idb.schreibFehler=true;
    return c.checkpointSave().then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('L9: Checkpoint rejected wie bisher', !!e);
    u.pruef('L9: Ausloeser checkpoint', d&&d.ausloeser==='checkpoint',d&&d.ausloeser);
    u.pruef('L9: beide Run-Status am Schreibstart erfasst', d&&d.pruefRunStatusStart==='laufend'&&d.vorhersageRunStatusStart==='pausiert');
    u.pruef('L9: Diagnose bleibt derselbe eine IDB-Fehlerfall', diagListe(c).length===1,diagListe(c).length);
    c._idb.schreibFehler=false;
    return c.checkpointSave().then(function(){
      u.pruef('L9: Kette nach rejected Checkpoint weiter benutzbar', true);
      var c2=u.neueUmgebung();
      return c2.bereit.then(function(){
        c2.state.pruefRun={status:'pausiert'}; c2._idb.schreibFehler=true;
        return c2.backupCheckpointSave().then(function(){return null;},function(x){return x;});
      }).then(function(x){
        var b=letzter(c2);
        u.pruef('L9: Backup bleibt rejected, aber ohne globalen Alarm', !!x&&c2.speicherAlarm===false&&c2._protokoll.alerts.length===0);
        u.pruef('L9: Backup-Diagnose traegt ausloeser backup', b&&b.ausloeser==='backup',b&&b.ausloeser);
      });
    });
  });
});

schritt(function(){
  u.block('L10. Fehler in Diagnose-Metadaten aendert Reject und Alarm nicht');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.speicherDiagnoseMetadatenAnhaengen=function(){ throw new Error('Metadaten-Testfehler'); };
    c._idb.schreibFehler=true;
    return c.checkpointSave().then(function(){return null;},function(e){return e;});
  }).then(function(e){
    u.pruef('L10: Original-Checkpoint bleibt rejected', !!e);
    u.pruef('L10: bestehender Alarm bleibt exakt aktiv', c.speicherAlarm===true&&c._protokoll.alerts.length===1);
  });
});

schritt(function(){
  u.block('L11. Diagnose-Text zeigt RAM-Zaehler, keine Persistenz der Zaehler');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={status:'laufend'};
    fire(c,'visibilitychange','hidden');
    return pause(30).then(function(){
      c.speicherDiagnoseTextBauen();
      var txt=c._elemente.speicherDiagText.value;
      u.pruef('L11: Text erzeugen zeigt Lifecycle-Zaehler', txt.indexOf('Lifecycle-Writes: gestartet=1')>=0&&txt.indexOf('erfolgreich=1')>=0);
      var persist=c.localStorage.getItem(DIAG)||'';
      u.pruef('L11: Zaehler werden nicht im Diagnosepuffer persistiert', persist.indexOf('lebenszyklusWritesGestartet')<0&&persist.indexOf('Lifecycle-Writes:')<0);
    });
  });
});

ablauf.then(function(){ process.exitCode=u.bilanz()?1:0; })
.catch(function(e){ console.error(e&&e.stack||e); process.exitCode=1; });
