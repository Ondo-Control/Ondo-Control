/* Backlog-Punkt 91, v19.21.3: reine Speicherdiagnose ohne Reparatur.
   Getestet wird der echte <script>-Block aus beta.html via umgebung.js. */
var u=require('./umgebung.js');
var KEY='ondo-control-v1';
var DIAG='ondo-control-speicherdiagnose-v1';
function pause(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
function err(name,msg){ var e=new Error(msg); e.name=name; return e; }
function diagListe(c){ var r=c.localStorage.getItem(DIAG); return r?JSON.parse(r):[]; }
function letzter(c){ var a=diagListe(c); return a[a.length-1]||null; }
function dbPlan(opt){
  opt=opt||{};
  return {
    transaction:function(){
      if(opt.transactionThrow) throw opt.transactionThrow;
      var tx={error:null};
      tx.objectStore=function(){
        return {put:function(){
          if(opt.putThrow) throw opt.putThrow;
          var req={error:null};
          setTimeout(function(){
            if(opt.success){ if(tx.oncomplete) tx.oncomplete(); return; }
            var e=opt.error||err('QuotaExceededError','IDB Testfehler');
            if(opt.requestError){ req.error=e; if(req.onerror) req.onerror(); }
            tx.error=e;
            if(opt.txError && tx.onerror) tx.onerror();
            if(opt.abort && tx.onabort) tx.onabort();
          },0);
          return req;
        }};
      };
      return tx;
    }
  };
}
function setDb(c,db){ c.idbGeoeffnet=Promise.resolve(db); }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

schritt(function(){
  u.block('K1. Erfolgreicher Schreibvorgang bleibt unsichtbar fuer Diagnose');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    setDb(c,dbPlan({success:true}));
    return c.idbSchreiben('test', {x:1}, 'checkpoint');
  }).then(function(){
    u.pruef('K1: kein Diagnoseeintrag', c.speicherDiagnosePuffer.length===0 && c.localStorage.getItem(DIAG)===null);
    u.pruef('K1: kein Alarm', c.speicherAlarm===false && c._protokoll.alerts.length===0);
  });
});

schritt(function(){
  u.block('K2. save-Pfad: IDB Fehler, localStorage-Rueckfall gelingt');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    setDb(c,dbPlan({abort:true,error:err('AbortError','IDB save Test')}));
    return c.speicherSchreiben(KEY,{x:2});
  }).then(function(){
    var a=diagListe(c), d=a[0];
    u.pruef('K2: genau ein Diagnoseeintrag', a.length===1, a.length);
    u.pruef('K2: quelle save', d&&d.quelle==='save');
    u.pruef('K2: Rueckfall versucht und erfolgreich', d&&d.rueckfallVersucht===true&&d.rueckfallErfolgreich===true);
    u.pruef('K2: speicherSchreiben blieb erfolgreich', JSON.parse(c.localStorage.getItem(KEY)).x===2);
    u.pruef('K2: kein Alarm durch Best-Effort-Weg', c.speicherAlarm===false);
  });
});

schritt(function(){
  u.block('K3. save-Pfad: localStorage-Rueckfall scheitert, derselbe Fehler geht nach aussen');
  var c=u.neueUmgebung(), lsFehler=err('QuotaExceededError','localStorage Test voll'), original;
  return c.bereit.then(function(){
    setDb(c,dbPlan({abort:true,error:err('AbortError','IDB save Test')}));
    original=c.localStorage.setItem;
    c.localStorage.setItem=function(k,v){ if(k===KEY) throw lsFehler; return original.call(c.localStorage,k,v); };
    return c.speicherSchreiben(KEY,{x:3}).then(function(){ return null; },function(e){ return e; });
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K3: nach aussen bleibt localStorage-Fehler', e===lsFehler);
    u.pruef('K3: genau ein Diagnoseeintrag', diagListe(c).length===1);
    u.pruef('K3: Rueckfall als fehlgeschlagen markiert', d&&d.rueckfallErfolgreich===false&&d.rueckfallFehler&&d.rueckfallFehler.name==='QuotaExceededError');
    u.pruef('K3: Diagnose am localStorage-Fehler verknuepft', e&&e._diagEintrag&&e._diagEintrag.transaktionsId===d.transaktionsId);
  });
});

schritt(function(){
  u.block('K4. Checkpoint bleibt harte Barriere ohne Rueckfall');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    setDb(c,dbPlan({abort:true,error:err('AbortError','Checkpoint IDB Test')}));
    return c.checkpointSave().then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K4: Promise weiterhin rejected', !!e);
    u.pruef('K4: quelle checkpoint', d&&d.quelle==='checkpoint');
    u.pruef('K4: kein Rueckfall', d&&d.rueckfallVersucht===false);
    u.pruef('K4: bestehender Alarm bleibt blockierend', c.speicherAlarm===true&&c._protokoll.alerts.length>=1);
  });
});

schritt(function(){
  u.block('K5. Backup bleibt strikt, aber nicht blockierend');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    setDb(c,dbPlan({abort:true,error:err('AbortError','Backup IDB Test')}));
    return c.backupCheckpointSave().then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K5: Backup-Promise weiterhin rejected', !!e);
    u.pruef('K5: quelle backup', d&&d.quelle==='backup');
    u.pruef('K5: kein Rueckfall', d&&d.rueckfallVersucht===false);
    u.pruef('K5: Backup allein setzt keinen globalen Alarm', c.speicherAlarm===false&&c._protokoll.alerts.length===0);
  });
});

schritt(function(){
  u.block('K6. putReq.onerror + tx.onerror + tx.onabort bleiben EIN Diagnosefall');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.navigator.storage={estimate:function(){ return Promise.resolve({usage:250,quota:1000}); }};
    setDb(c,dbPlan({requestError:true,txError:true,abort:true,error:err('QuotaExceededError','Kaskade')}));
    return c.idbSchreiben('x',{x:6},'checkpoint').then(function(){return null;},function(e){return e;});
  }).then(function(e){
    return pause(10).then(function(){
      var a=diagListe(c),d=a[0];
      u.pruef('K6: genau ein Eintrag trotz drei Fehlerereignissen', a.length===1,a.length);
      u.pruef('K6: erste Fehlerphase put-error bleibt sichtbar', d&&d.phase==='put-error',d&&d.phase);
      u.pruef('K6: putFehler erfasst', d&&d.putFehler&&d.putFehler.name==='QuotaExceededError');
      u.pruef('K6: txFehler nachgetragen', d&&d.txFehler&&d.txFehler.name==='QuotaExceededError');
      u.pruef('K6: Storage Estimate asynchron nachgetragen', d&&d.storageEstimate&&d.storageEstimate.usage===250&&d.storageEstimate.quota===1000&&d.storageEstimate.prozent===25);
      u.pruef('K6: zurueckgewiesener Fehler traegt denselben Diagnosefall', e&&e._diagEintrag&&e._diagEintrag.transaktionsId===d.transaktionsId);
    });
  });
});

schritt(function(){
  u.block('K7. Synchroner db.transaction-Fehler');
  var c=u.neueUmgebung(), e0=err('InvalidStateError','DB bereits geschlossen');
  return c.bereit.then(function(){
    setDb(c,dbPlan({transactionThrow:e0}));
    return c.idbSchreiben('x',{},'checkpoint').then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K7: Originalfehler bleibt nach aussen erhalten', e===e0);
    u.pruef('K7: Phase transaction-start', d&&d.phase==='transaction-start',d&&d.phase);
    u.pruef('K7: synchronerFehler erfasst', d&&d.synchronerFehler&&d.synchronerFehler.name==='InvalidStateError');
  });
});

schritt(function(){
  u.block('K8. Synchroner put-Fehler');
  var c=u.neueUmgebung(), e0=err('DataError','put synchron gescheitert');
  return c.bereit.then(function(){
    setDb(c,dbPlan({putThrow:e0}));
    return c.idbSchreiben('x',{},'checkpoint').then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K8: Originalfehler bleibt nach aussen erhalten', e===e0);
    u.pruef('K8: Phase put-start', d&&d.phase==='put-start',d&&d.phase);
    u.pruef('K8: synchronerFehler erfasst', d&&d.synchronerFehler&&d.synchronerFehler.name==='DataError');
  });
});

schritt(function(){
  u.block('K9. Unerwartetes DB-Schliessen wird im naechsten Fehler sichtbar');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){ return c.idbGeoeffnet; }).then(function(db){
    u.pruef('K9: onclose wurde registriert', typeof db.onclose==='function');
    db.onclose();
    var ts=c.idbUnerwartetGeschlossenZeit;
    db.transaction=function(){ throw err('InvalidStateError','tote Verbindung'); };
    return c.idbSchreiben('x',{},'checkpoint').then(function(){return null;},function(e){return e;}).then(function(){
      var d=letzter(c);
      u.pruef('K9: Close-Marker true', d&&d.dbUnerwartetGeschlossen===true);
      u.pruef('K9: Close-Zeitstempel uebernommen', d&&d.dbUnerwartetGeschlossenZeit===ts&&ts>0);
    });
  });
});

schritt(function(){
  u.block('K10. Visibility-Ring max 10, Diagnose uebernimmt max 5');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var f=(c._protokoll.listener.visibilitychange||[])[0];
    u.pruef('K10: Diagnose-Visibilitylistener registriert', typeof f==='function');
    for(var i=0;i<12;i++){
      c.document.visibilityState=(i%2?'visible':'hidden'); c.document.hidden=(i%2===0); f();
    }
    u.pruef('K10: RAM-Ring hat maximal 10 Ereignisse', c.speicherSichtbarkeitsVerlauf.length===10,c.speicherSichtbarkeitsVerlauf.length);
    setDb(c,dbPlan({transactionThrow:err('InvalidStateError','sichtbar')}));
    return c.idbSchreiben('x',{},'checkpoint').catch(function(){});
  }).then(function(){
    var d=letzter(c);
    u.pruef('K10: Diagnose kopiert maximal letzte 5', d&&d.sichtbarkeitsVerlauf.length===5,d&&d.sichtbarkeitsVerlauf.length);
    u.pruef('K10: aktuelle Sichtbarkeit erfasst', d&&typeof d.visibilityStateJetzt==='string'&&typeof d.hiddenJetzt==='boolean');
  });
});

schritt(function(){
  u.block('K11. Diagnosepuffer max 20, Wiederherstellung, defektes JSON harmlos');
  var c=u.neueUmgebung(),kette=Promise.resolve();
  return c.bereit.then(function(){
    setDb(c,{transaction:function(){ throw err('InvalidStateError','Serie'); }});
    for(var i=0;i<22;i++) kette=kette.then(function(){ return c.idbSchreiben('x',{},'checkpoint').catch(function(){}); });
    return kette;
  }).then(function(){
    var roh=c.localStorage.getItem(DIAG), arr=JSON.parse(roh);
    u.pruef('K11: RAM-Puffer auf 20 begrenzt', c.speicherDiagnosePuffer.length===20,c.speicherDiagnosePuffer.length);
    u.pruef('K11: persistenter Puffer auf 20 begrenzt', arr.length===20,arr.length);
    var c2=u.neueUmgebung();
    return c2.bereit.then(function(){
      c2.localStorage.setItem(DIAG,roh); c2.speicherDiagnoseLaden();
      u.pruef('K11: Reload-Helfer stellt 20 Eintraege wieder her', c2.speicherDiagnosePuffer.length===20);
      c2.localStorage.setItem(DIAG,'{defekt');
      var ok=true; try{ c2.speicherDiagnoseLaden(); }catch(e){ ok=false; }
      u.pruef('K11: defektes JSON blockiert App nicht', ok&&c2.speicherDiagnosePuffer.length===0);
    });
  });
});

schritt(function(){
  u.block('K12. Leeren loescht ausschliesslich den Diagnose-Schluessel');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.localStorage.setItem(KEY,'STATE-BLEIBT');
    c.localStorage.setItem('sonstiges','AUCH-BLEIBT');
    c.localStorage.setItem(DIAG,'[]');
    c.speicherDiagnosePuffer=[{transaktionsId:'x',quelle:'checkpoint',startZeit:1,phase:'tx-abort'}];
    c.speicherDiagnoseLeeren();
    u.pruef('K12: Diagnose-Schluessel entfernt', c.localStorage.getItem(DIAG)===null);
    u.pruef('K12: State-Schluessel unangetastet', c.localStorage.getItem(KEY)==='STATE-BLEIBT');
    u.pruef('K12: fremder localStorage unangetastet', c.localStorage.getItem('sonstiges')==='AUCH-BLEIBT');
  });
});

schritt(function(){
  u.block('K13. Diagnose-Export enthaelt nur technische Felder, keine Nutzdaten/Schluessel');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.apiKey='GEHEIMER-DIAGNOSE-TESTSCHLUESSEL';
    c.state.kiProtokoll=[{match:'GEHEIMES-SPIEL'}];
    setDb(c,dbPlan({transactionThrow:err('InvalidStateError','technischer Test')}));
    return c.idbSchreiben('x',{},'checkpoint').catch(function(){});
  }).then(function(){
    c.speicherDiagnoseTextBauen();
    var txt=c._elemente.speicherDiagText.value;
    u.pruef('K13: Export benennt technische Kernfelder', txt.indexOf('transaktionsId:')>=0&&txt.indexOf('quelle:')>=0&&txt.indexOf('storageEstimate:')>=0);
    u.pruef('K13: kein API-Schluessel im Export', txt.indexOf('GEHEIMER-DIAGNOSE-TESTSCHLUESSEL')<0);
    u.pruef('K13: keine fachlichen Nutzdaten im Export', txt.indexOf('GEHEIMES-SPIEL')<0);
    var html=c.viewMore();
    u.pruef('K13: Mehr/Daten zeigt Diagnoseblock', html.indexOf(c.t('diagT'))>=0&&html.indexOf('speicherDiagText')>=0);
  });
});

schritt(function(){
  u.block('K14. Open-Fehler wird als Phase open diagnostiziert');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var e0=err('UnknownError','open Test');
    c.idbGeoeffnet=Promise.reject(e0);
    return c.idbSchreiben('x',{},'checkpoint').then(function(){return null;},function(e){return e;});
  }).then(function(e){
    var d=letzter(c);
    u.pruef('K14: Open-Originalfehler bleibt erhalten', e&&e.name==='UnknownError');
    u.pruef('K14: Phase open', d&&d.phase==='open',d&&d.phase);
    u.pruef('K14: synchronerFehler fuer Open-Reject sichtbar', d&&d.synchronerFehler&&d.synchronerFehler.name==='UnknownError');
  });
});

ablauf.then(function(){ process.exitCode=u.bilanz()?1:0; })
.catch(function(e){ console.error(e&&e.stack||e); process.exitCode=1; });
