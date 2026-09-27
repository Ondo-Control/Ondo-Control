/* Tests J1-J5 (v19.21.1, Fund Claude/Pruefer 27.9.2026, Auftrag Ondo):
   Datensicherung wartet den strikten IndexedDB-Schreibweg nicht vor navigator.share ab,
   behandelt dessen Ergebnis aber sichtbar; normale Speicherfehler zeigen den echten
   Browserfehler. Getestet wird der echte <script>-Block aus beta.html via umgebung.js. */
var u=require('./umgebung.js');
var KEY='ondo-control-v1';
function pause(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
function dateiMocks(c){
  var downloads=[];
  c.Blob=function(parts,opt){ this.parts=parts; this.type=(opt&&opt.type)||''; };
  c.File=function(parts,name,opt){ this.parts=parts; this.name=name; this.type=(opt&&opt.type)||''; };
  c.dateiHerunterladen=function(blob,name){ downloads.push({blob:blob,name:name}); };
  return downloads;
}
function inhalt(download){ return JSON.parse(download.blob.parts.join('')); }
function gespeicherterStand(c){ return c._idb.daten[KEY] ? JSON.parse(c._idb.daten[KEY]) : null; }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

schritt(function(){
  u.block('J1. Daten sichern: erfolgreicher strikter Schreibvorgang');
  var c=u.neueUmgebung(), downloads;
  return c.bereit.then(function(){
    c.state.letzteSicherung='26.9.2026 17:17';
    return c.checkpointSave();
  }).then(function(){
    downloads=dateiMocks(c);
    var p=c.datenSichern();
    u.pruef('J1: Dateiweg startet synchron', downloads.length===1);
    var datei=inhalt(downloads[0]);
    u.pruef('J1: Datei enthaelt bereits den neuen Sicherungszeitpunkt', !!datei.letzteSicherung && datei.letzteSicherung!=='26.9.2026 17:17', datei.letzteSicherung);
    u.pruef('J1: UI behandelt den neuen Zeitpunkt waehrend des Schreibens noch nicht als dauerhaft', c.backupSicherungAnzeige()==='26.9.2026 17:17');
    return p.then(function(ok){
      var ges=gespeicherterStand(c);
      u.pruef('J1: datenSichern meldet Persistenzerfolg', ok===true);
      u.pruef('J1: neuer Zeitstempel steht danach in IndexedDB', ges && ges.letzteSicherung===c.state.letzteSicherung, ges&&ges.letzteSicherung);
      u.pruef('J1: Anzeige und persistenter Zeitstempel sind identisch', c.backupSicherungAnzeige()===ges.letzteSicherung);
      u.pruef('J1: kein Backup-Warnhinweis im Erfolgsfall', c.backupSpeicherHinweis==='');
      u.pruef('J1: kein blockierender Speicher-Alarm im Erfolgsfall', c.speicherAlarm===false && c._protokoll.alerts.length===0);
    });
  });
});

schritt(function(){
  u.block('J2. Daten sichern: IndexedDB-Fehler, Datei bleibt erhalten, Hinweis nicht-blockierend');
  var c=u.neueUmgebung(), downloads, dateiZeit='';
  return c.bereit.then(function(){
    c.state.letzteSicherung='26.9.2026 17:17';
    return c.checkpointSave();
  }).then(function(){
    downloads=dateiMocks(c);
    c._idb.schreibFehler=true;
    var p=c.datenSichern();
    u.pruef('J2: Datei wird trotz bevorstehendem Persistenzfehler sofort erzeugt', downloads.length===1);
    dateiZeit=inhalt(downloads[0]).letzteSicherung;
    u.pruef('J2: Sicherungsdatei behaelt den neuen Zeitpunkt', !!dateiZeit && dateiZeit!=='26.9.2026 17:17', dateiZeit);
    return p.then(function(ok){
      var ges=gespeicherterStand(c);
      u.pruef('J2: Persistenzfehler wird behandelt, nicht als Erfolg gemeldet', ok===false);
      u.pruef('J2: kein blockierendes alert allein durch datenSichern()', c._protokoll.alerts.length===0);
      u.pruef('J2: globaler Speicher-Alarm wird vom Backup nicht gesetzt', c.speicherAlarm===false);
      u.pruef('J2: RAM-Anzeige faellt auf den letzten bestaetigten Zeitpunkt zurueck', c.state.letzteSicherung==='26.9.2026 17:17');
      u.pruef('J2: IndexedDB behaelt den alten bestaetigten Zeitpunkt', ges && ges.letzteSicherung==='26.9.2026 17:17', ges&&ges.letzteSicherung);
      u.pruef('J2: nicht-blockierender Hinweis ist sichtbar', c.backupSpeicherHinweis.indexOf(c.t('backupPersistFail'))>=0);
      u.pruef('J2: Hinweis enthaelt den echten technischen Fehler', /QuotaExceededError|IndexedDB-Transaktion abgebrochen/.test(c.backupSpeicherHinweis), c.backupSpeicherHinweis);
      var html=c.viewMore();
      u.pruef('J2: Mehr-Ansicht zeigt den Hinweis', html.indexOf(c.t('backupPersistFail'))>=0);
      u.pruef('J2: Mehr-Ansicht behauptet nicht den Datei-Zeitpunkt als dauerhaft', html.indexOf(dateiZeit)<0 && html.indexOf('26.9.2026 17:17')>=0);
    });
  });
});

schritt(function(){
  u.block('J3. iOS-Weg: navigator.share bleibt direkte Benutzeraktion');
  var c=u.neueUmgebung(), downloads, imKlick=true, shareImKlick=false, shareN=0;
  return c.bereit.then(function(){
    downloads=dateiMocks(c);
    c.navigator.canShare=function(o){ return !!(o&&o.files&&o.files.length); };
    c.navigator.share=function(){ shareN++; shareImKlick=imKlick; return Promise.resolve(); };
    var p=c.datenSichern();
    imKlick=false;
    u.pruef('J3: navigator.share wird synchron aus dem Klickpfad gestartet', shareN===1 && shareImKlick===true);
    u.pruef('J3: bei erfolgreichem Share kein Download-Fallback', downloads.length===0);
    return p.then(function(ok){
      u.pruef('J3: Persistenz laeuft separat und kann danach erfolgreich enden', ok===true && !!gespeicherterStand(c).letzteSicherung);
    });
  });
});

schritt(function(){
  u.block('J4. Normales save(): bestehender Warntext plus echter Browserfehler');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.apiKey='GEHEIMER-TESTSCHLUESSEL-DARF-NIE-IN-DIE-MELDUNG';
    c._idb.schreibFehler=true;
    c.localStorage.setItem=function(){ var e=new Error('Transaktion vom Browser abgebrochen (Test)'); e.name='AbortError'; throw e; };
    c.save();
    return pause(40);
  }).then(function(){
    var meldung=c._protokoll.alerts[0]||'';
    u.pruef('J4: save()-Fehler bleibt sichtbar', c.speicherAlarm===true && c._protokoll.alerts.length===1);
    u.pruef('J4: bisheriger verstaendlicher Warntext bleibt enthalten', meldung.indexOf(c.t('saveFailAlert'))>=0);
    u.pruef('J4: echter Fehlername wird angezeigt', meldung.indexOf('AbortError')>=0, meldung);
    u.pruef('J4: echte Fehlermeldung wird angezeigt', meldung.indexOf('Transaktion vom Browser abgebrochen (Test)')>=0);
    u.pruef('J4: kein undefined oder [object Object]', meldung.indexOf('undefined')<0 && meldung.indexOf('[object Object]')<0);
    u.pruef('J4: keine sensitiven State-Daten im Fehlertext', meldung.indexOf('GEHEIMER-TESTSCHLUESSEL')<0);
    u.pruef('J4: dauerhafter Warnblock zeigt ebenfalls den technischen Fehler', c.speicherWarnBlock().indexOf('AbortError')>=0);
    u.pruef('J4: String-/Leer-Fallback bleibt lesbar', c.speicherFehlerText('Nur-Text-Fehler')==='Nur-Text-Fehler' && c.speicherFehlerText({})===c.t('saveTechUnknown'));
  });
});

schritt(function(){
  u.block('J5. checkpointSave bleibt harte Barriere');
  var c=u.neueUmgebung(), alt;
  return c.bereit.then(function(){
    c.state.markeTest='A';
    return c.checkpointSave();
  }).then(function(){
    alt=c._idb.daten[KEY];
    c._idb.schreibFehler=true;
    c.state.markeTest='B';
    return c.checkpointSave().then(function(){ return 'ERFOLG'; }, function(e){ return 'ABGELEHNT'; });
  }).then(function(r){
    u.pruef('J5: Checkpoint bleibt bei IndexedDB-Fehler rejected', r==='ABGELEHNT');
    u.pruef('J5: fehlgeschlagener Checkpoint veraendert IndexedDB nicht', c._idb.daten[KEY]===alt);
    u.pruef('J5: Checkpoint bleibt blockierend sichtbar', c.speicherAlarm===true && c._protokoll.alerts.length>=1);
    u.pruef('J5: Checkpoint-Alarm zeigt jetzt zusaetzlich den echten Fehler', /QuotaExceededError|IndexedDB-Transaktion abgebrochen/.test(c._protokoll.alerts[c._protokoll.alerts.length-1]||''));
    c._idb.schreibFehler=false;
    return c.checkpointSave();
  }).then(function(){
    u.pruef('J5: Kette erholt sich und naechster Checkpoint schreibt Stand B', gespeicherterStand(c).markeTest==='B');
  });
});

ablauf.then(function(){
  process.exitCode=u.bilanz()?1:0;
}).catch(function(e){ console.error(e&&e.stack||e); process.exitCode=1; });
