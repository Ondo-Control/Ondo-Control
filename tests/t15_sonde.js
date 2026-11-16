/* ===================================================================================
   t15 - die Sonde (Backlog-Punkt 95, beta.html v19.23.0).
   A  Fehlerzaehler: beobachtet fetch(), veraendert aber nichts; nie die Adresse, nur den Host.
   B  Zaehler speichern und auswerten (additiv, 30 Tage, Fehlerrate).
   C  Datenpruefung: zaehlt Auffaelligkeiten, gibt keine Spielnamen aus.
   D  Bericht: nur Technikwerte, keine Schluessel, Zeitgrenze bei haengendem Speicher.
   E  Senden: richtige Adresse, richtige Form fuer das Relay, Sperre bei Schluesselfund.
   F  Die Relay-Adresse steht nicht im Zustand und nicht in der Sicherung.
   G  Oberflaeche und Sprachschluessel.
   Getestet wird der echte <script>-Block aus beta.html via umgebung.js.
   =================================================================================== */
var u=require('./umgebung.js');
var KEY='ondo-control-v1';
var GEHEIM_G='AIzaSyTESTSCHLUESSEL1234567890abcdefgh';
var GEHEIM_S='sk-ant-api03-TESTSCHLUESSEL-1234567890';
var RELAY_KEY='abcdEFGH1234567890_-abcdEFGH12';
var ADRESSE='https://relay.beispiel.workers.dev/k/'+RELAY_KEY+'/mcp';
function pause(ms){ return new Promise(function(r){ setTimeout(r,ms); }); }
function schritte(liste){ return liste.reduce(function(p,f){ return p.then(f); }, Promise.resolve()); }
function antwort(status){ return Promise.resolve({ status:status, ok:status>=200&&status<300 }); }

schritte([

function(){
  u.block('A. Fehlerzaehler beobachtet nur');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    u.pruef('Host aus Adresse: nur der Rechnername', c.sondeHost('https://API.OpenLigaDB.de/getmatchdata/bl1/2026?x=1')==='api.openligadb.de');
    u.pruef('Host: relative Adresse = eigene Seite', c.sondeHost('version.json?ts=1')==='eigene-seite');
    u.pruef('Host: auch ein Request-Objekt mit url', c.sondeHost({ url:'https://site.web.api.espn.com/x' })==='site.web.api.espn.com');
    u.pruef('Klasse: 200/204/301 ok', ['200',204,301].every(function(x){ return c.sondeKlasse(x)==='ok'; }));
    u.pruef('Klasse: 500, 503, 429, 408 und kein Netz sind technische Fehler', [500,503,429,408,'netz'].every(function(x){ return c.sondeKlasse(x)==='fehler'; }));
    u.pruef('Klasse: 404, 401, 403 sind KEIN technischer Fehler', [404,401,403].every(function(x){ return c.sondeKlasse(x)==='sonst'; }));
    u.pruef('Klasse: Abbruch durch die App zaehlt nicht als Fehler', c.sondeKlasse('abbruch')==='sonst');
    var aufrufe=[], orig=function(url,o){ aufrufe.push([url,o]); return antwort(c._next); };
    var f=c.sondeFetchBeobachten(orig);
    c._next=200; var p1=f('https://api.openligadb.de/a',{ cache:'no-store' });
    u.pruef('Wrapper reicht Adresse und Optionen unveraendert weiter', aufrufe.length===1 && aufrufe[0][0]==='https://api.openligadb.de/a' && aufrufe[0][1].cache==='no-store');
    return p1.then(function(r){
      u.pruef('Wrapper gibt die Antwort unveraendert zurueck', r.status===200);
      c._next=503; return f('https://api.openligadb.de/b');
    }).then(function(){
      c._next=404; return f('https://raw.githubusercontent.com/x/y');
    }).then(function(){
      var rejekt=c.sondeFetchBeobachten(function(){ return Promise.reject(new Error('weg')); });
      return rejekt('https://api.football-data.org/v4/matches?x=1').then(function(){ return 'kam'; }, function(e){ return e.message; });
    }).then(function(m){
      u.pruef('Wrapper: ein Fehler des Aufrufs erreicht den Aufrufer weiter (nichts verschluckt)', m==='weg');
      var abort=c.sondeFetchBeobachten(function(){ var e=new Error('x'); e.name='AbortError'; return Promise.reject(e); });
      return abort('https://api.openligadb.de/c').then(function(){}, function(){});
    }).then(function(){
      var sync=c.sondeFetchBeobachten(function(){ throw new Error('sofort'); }), m2='';
      try{ sync('https://a.b/c'); }catch(e){ m2=e.message; }
      u.pruef('Wrapper: ein sofortiger Fehler wird ebenfalls weitergereicht', m2==='sofort');
      return pause(5);
    }).then(function(){
      var d=c.sondeDelta, tag=Object.keys(d)[0], h=d[tag];
      u.pruef('Zaehler: openligadb 1 ok, 1 Fehler, 1 sonst (Abbruch)', h['api.openligadb.de'].ok===1 && h['api.openligadb.de'].fehler===1 && h['api.openligadb.de'].sonst===1, JSON.stringify(h['api.openligadb.de']));
      u.pruef('Zaehler: 404 zaehlt als "sonst", nicht als Fehler', h['raw.githubusercontent.com'].sonst===1 && h['raw.githubusercontent.com'].fehler===0);
      u.pruef('Zaehler: "kein Netz" zaehlt als Fehler', h['api.football-data.org'].fehler===1 && h['api.football-data.org'].codes.netz===1);
      u.pruef('Zaehler merkt sich die Statuscodes', h['api.openligadb.de'].codes['503']===1 && h['api.openligadb.de'].codes['200']===1);
      var g=c.sondeFetchBeobachten(function(){ return antwort(200); });
      return g('https://generativelanguage.googleapis.com/v1beta/models?key='+GEHEIM_G).then(function(){ return pause(5); });
    }).then(function(){
      var text=JSON.stringify(c.sondeDelta);
      u.pruef('Zaehler enthaelt nie einen Schluessel oder Parameter der Adresse', text.indexOf('AIza')<0 && text.indexOf('key=')<0 && text.indexOf('?')<0);
      u.pruef('Gemini zaehlt unter seinem Rechnernamen', text.indexOf('generativelanguage.googleapis.com')>=0);
      u.pruef('Die Seite hat fetch beim Start umhuellt (window.fetch ist nicht mehr das Original)', c.sondeFetchRoh!==c.fetch && typeof c.fetch==='function');
    });
  });
},

function(){
  u.block('B. Zaehler speichern und auswerten');
  var c=u.neueUmgebung();
  function tag(n){ var d=new Date(Date.UTC(2026,9,1+n)); return d.toISOString().slice(0,10); }
  return c.bereit.then(function(){
    var a={}; a[tag(0)]={ h:{ ok:8, fehler:1, sonst:2, codes:{ '200':8, '503':1, '404':2 } } };
    var b={}; b[tag(0)]={ h:{ ok:2, fehler:1, sonst:0, codes:{ '200':2, 'netz':1 } }, x:{ ok:1, fehler:0, sonst:0, codes:{ '200':1 } } };
    var m=c.sondeZusammenfuehren(a,b);
    u.pruef('Zusammenfuehren zaehlt zusammen, auch die Codes', m[tag(0)].h.ok===10 && m[tag(0)].h.fehler===2 && m[tag(0)].h.codes['200']===10 && m[tag(0)].h.codes.netz===1 && m[tag(0)].x.ok===1);
    u.pruef('Zusammenfuehren veraendert die Eingaben nicht', a[tag(0)].h.ok===8 && b[tag(0)].h.ok===2);
    var viele={}; for(var i=0;i<40;i++) viele[tag(i)]={ h:{ ok:1, fehler:0, sonst:0, codes:{} } };
    var k=c.sondeAbkuerzen(viele), ks=Object.keys(k);
    u.pruef('Nur die letzten 30 Tage bleiben', ks.length===30 && ks[29]===tag(39) && ks[0]===tag(10));
    var z=c.sondeZaehlerAuswerten({ [tag(0)]:{ h:{ ok:9, fehler:1, sonst:5, codes:{} } }, [tag(1)]:{ h:{ ok:90, fehler:0, sonst:0, codes:{} }, y:{ ok:0, fehler:3, sonst:0, codes:{} } } });
    u.pruef('Fehlerrate = Fehler / (ok + Fehler), "sonst" zaehlt nicht mit', z.letzte30Tage.jeHost.h.fehlerrateProzent===1 && z.letzte30Tage.gesamt.fehlerrateProzent===Math.round(4/103*1000)/10, JSON.stringify(z.letzte30Tage.gesamt));
    u.pruef('Fehlerrate ohne Aufrufe: keine Zahl statt 0 %', c.sondeZaehlerAuswerten({}).letzte30Tage.gesamt.fehlerrateProzent===null);
    var sieben={}; for(var j=0;j<10;j++) sieben[tag(j)]={ h:{ ok:1, fehler:j===0?5:0, sonst:0, codes:{} } };
    var z7=c.sondeZaehlerAuswerten(sieben);
    u.pruef('7-Tage-Wert sieht nur die letzten 7 Tage (alter Fehler faellt heraus)', z7.letzte7Tage.gesamt.fehler===0 && z7.letzte30Tage.gesamt.fehler===5);
    /* Speichern: zweimal spuelen addiert, statt zu ueberschreiben */
    c.sondeBuche('api.openligadb.de', 200); c.sondeBuche('api.openligadb.de', 503);
    return c.sondeFlush().then(function(){
      c.sondeBuche('api.openligadb.de', 200);
      return c.sondeFlush();
    }).then(function(){ return c.speicherLesen('ondo-control-sonde-zaehler'); }).then(function(gespeichert){
      var h=gespeichert.tage[Object.keys(gespeichert.tage)[0]]['api.openligadb.de'];
      u.pruef('Gespeichert wird additiv: 2 ok, 1 Fehler nach zwei Spuelvorgaengen', h.ok===2 && h.fehler===1, JSON.stringify(h));
      u.pruef('Nach dem Spuelen ist der Zwischenspeicher leer', Object.keys(c.sondeDelta).length===0);
      u.pruef('Zaehler liegt unter eigenem Schluessel, nicht im Zustand', JSON.stringify(c.state).indexOf('openligadb')<0);
    });
  });
},

function(){
  u.block('C. Datenpruefung zaehlt, nennt aber keine Namen');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var st={ kiProtokoll:[
      { id:'a1', match:'Geheimverein A - Geheimverein B', datum:'1.9.2026', herkunft:'flash', aera:'v19', maerkte:[{ typ:'1x2', p:60, status:'offen' }, { typ:'tore', p:140, status:'bewertet' }] },
      { id:'a1', match:'Geheimverein C - Geheimverein D', datum:'1.9.2026', herkunft:'flash', aera:'v19', maerkte:[{ typ:'1x2', p:'x', status:'offen' }] },
      { id:'a3', match:'Geheimverein A - Geheimverein B', datum:'1.9.2026', herkunft:'flash', aera:'v19', maerkte:[{ typ:'btts', p:50 }] },
      { match:'Alt X - Alt Y', datum:'2.7.2026', herkunft:'sonnet', aera:'v18' },
      { id:'a5', match:'Alt Z - Alt W', datum:'3.7.2026', herkunft:'sonnet', aera:'v18', maerkte:[] }
    ], bets:[ { id:'b1' }, { id:'b1' }, { id:'b2' } ] };
    var r=c.sondeDatenPruefen(st);
    u.pruef('Eintraege und Wetten gezaehlt', r.kiEintraege===5 && r.wetten===3);
    u.pruef('doppelte ID erkannt', r.kiDoppelteIds===1);
    u.pruef('Eintrag ohne ID erkannt', r.kiOhneId===1);
    u.pruef('doppeltes Spiel (gleicher Name + Datum + Herkunft) erkannt', r.kiDoppelteSpiele===1);
    u.pruef('Wahrscheinlichkeit ausserhalb 0 bis 100 und Nichtzahl erkannt', r.kiUngueltigeWahrscheinlichkeit===2);
    u.pruef('Eintraege ohne Maerkte nach Aera getrennt', r.kiOhneMaerkteNachAera.v18===2 && !r.kiOhneMaerkteNachAera.v19);
    u.pruef('doppelte Wetten-ID erkannt', r.wettenDoppelteIds===1);
    u.pruef('Status der Maerkte gezaehlt', r.kiMaerkteNachStatus.offen===2 && r.kiMaerkteNachStatus.bewertet===1);
    u.pruef('Ausgabe enthaelt keinen Spielnamen', JSON.stringify(r).indexOf('Geheimverein')<0 && JSON.stringify(r).indexOf('Alt ')<0);
    var leer=c.sondeDatenPruefen({});
    u.pruef('Leerer Zustand: alles 0, kein Fehler', leer.kiEintraege===0 && leer.kiDoppelteIds===0 && leer.wetten===0);
    u.pruef('Kaputte Eintraege (null, Zahl) bringen die Pruefung nicht zum Absturz', c.sondeDatenPruefen({ kiProtokoll:[null,7,'x',{}] }).kiEintraege===4);
  });
},

function(){
  u.block('D. Bericht ohne Schluessel');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.geminiKey=GEHEIM_G; c.state.apiKey=GEHEIM_S; c.state.pin='4711'; c.state.oddsKey='';
    c.state.kiProtokoll=[{ id:'z1', match:'Streng Geheim FC - Nie Gesehen SC', datum:'5.9.2026', herkunft:'flash', aera:'v19', maerkte:[{ p:55, status:'offen' }] }];
    c.sondeFetchRoh=function(url){ return antwort(url.indexOf('raw.githubusercontent')>=0?404:200); };
    return c.sondeBerichtBauen().then(function(b){
      var text=JSON.stringify(b);
      u.pruef('Bericht hat Kopf, Einstellungen, Funktionen, Speicher, Daten, Quellen, Zaehler', ['kopf','einstellungen','funktionen','speicher','daten','quellen','zaehler','ki'].every(function(k){ return b.parts[k]!==undefined; }));
      u.pruef('Bericht nennt die Version der App', b.parts.kopf.version===c.CODE_VERSION && /^v19\.\d+\.\d+$/.test(b.parts.kopf.version));
      u.pruef('Bericht enthaelt keinen Schluessel-Wert', text.indexOf(GEHEIM_G)<0 && text.indexOf(GEHEIM_S)<0 && text.indexOf('4711')<0);
      u.pruef('Bericht sagt nur Ja/Nein zu den Schluesseln', b.parts.einstellungen.geminiSchluessel===true && b.parts.einstellungen.sonnetSchluessel===true && b.parts.einstellungen.oddsSchluessel===false && b.parts.einstellungen.pinGesetzt===true);
      u.pruef('Bericht enthaelt keinen Spielnamen', text.indexOf('Streng Geheim')<0 && text.indexOf('Nie Gesehen')<0);
      u.pruef('Bericht besteht die eigene Schluesselsperre', c.sondeGeheimFund(text)===false);
      u.pruef('Alle elf wichtigen Funktionen sind im echten Code vorhanden', Object.keys(b.parts.funktionen).length===11 && Object.keys(b.parts.funktionen).every(function(k){ return b.parts.funktionen[k]==='da'; }), JSON.stringify(b.parts.funktionen));
      u.pruef('Speicherprobe: IndexedDB und lokaler Speicher laufen', b.parts.speicher.indexedDb.ok===true && b.parts.speicher.localStorage.ok===true, JSON.stringify(b.parts.speicher.indexedDb));
      u.pruef('Quellen: 4 geprueft, 404 gilt nicht als Ausfall', b.parts.quellen.length===4 && b.parts.quellen.every(function(q){ return q.klasse!=='fehler'; }));
      u.pruef('Daten: der eine Eintrag ist gezaehlt', b.parts.daten.kiEintraege===1);
      u.pruef('Zusammenfassung ist eine Zeile mit Version', typeof b.sum==='string' && b.sum.indexOf('\n')<0 && b.sum.indexOf(b.parts.kopf.version)===0);
      u.pruef('Kein Schreibzugriff auf den Zustand: kiProtokoll und Schluessel unveraendert', c.state.kiProtokoll.length===1 && c.state.geminiKey===GEHEIM_G);
      u.pruef('Die Sonde macht keine KI-Aufrufe und sagt das im Bericht', b.parts.ki.geprueft===false);
    });
  }).then(function(){
    var c2=u.neueUmgebung();
    return c2.bereit.then(function(){
      c2.sondeFetchRoh=function(url){ return antwort(url.indexOf('openligadb')>=0?503:200); };
      return c2.sondeQuellenPruefen().then(function(q){
        var ol=q.filter(function(x){ return x.name==='openligadb'; })[0];
        u.pruef('Quelle mit 503 wird als technischer Fehler gemeldet', ol.klasse==='fehler' && ol.status===503);
        c2.sondeFetchRoh=function(){ return Promise.reject(new Error('aus')); };
        return c2.sondeQuellenPruefen();
      }).then(function(q){
        u.pruef('Ohne Netz: alle vier als Fehler "kein netz"', q.length===4 && q.every(function(x){ return x.klasse==='fehler' && x.fehler==='kein netz'; }));
        return c2.sondeMitFrist(new Promise(function(){}), 30, 'haengt');
      }).then(function(r){
        u.pruef('Haengender Speicherzugriff wird nach der Frist gemeldet statt ewig gewartet', r.ok===false && /zeitueberschreitung/.test(r.fehler));
        return c2.sondeMitFrist(Promise.reject(Object.assign(new Error('q'),{ name:'QuotaExceededError' })), 1000, 'f');
      }).then(function(r){
        u.pruef('Fehler beim Speicherzugriff wird mit Namen gemeldet', r.ok===false && r.fehler==='QuotaExceededError');
      });
    });
  });
},

function(){
  u.block('E. Senden ans Relay');
  var c=u.neueUmgebung(), gesendet=[];
  return c.bereit.then(function(){
    c.sondeFetchRoh=function(url,o){ gesendet.push({ url:url, o:o }); return Promise.resolve({ status:0, type:'opaque' }); };
    c.state.geminiKey=GEHEIM_G;
    var a=c.sondeAdresseLesen(ADRESSE);
    u.pruef('Adresse: ganze Connector-Adresse wird zerlegt', a && a.basis==='https://relay.beispiel.workers.dev' && a.schluessel===RELAY_KEY);
    u.pruef('Adresse: ohne /mcp und mit Leerzeichen auch erkannt', !!c.sondeAdresseLesen('  https://relay.beispiel.workers.dev/k/'+RELAY_KEY+'  '));
    u.pruef('Adresse: http (ohne s) wird abgelehnt', c.sondeAdresseLesen('http://relay.beispiel.workers.dev/k/'+RELAY_KEY+'/mcp')===null);
    u.pruef('Adresse: zu kurzer Schluessel wird abgelehnt', c.sondeAdresseLesen('https://relay.beispiel.workers.dev/k/kurz/mcp')===null);
    u.pruef('Adresse: Text und leere Eingabe werden abgelehnt', c.sondeAdresseLesen('hallo')===null && c.sondeAdresseLesen('')===null && c.sondeAdresseLesen(null)===null);
    var bericht={ id:'sonde-1', kind:'sonde', title:'Sonde v19.23.0', sum:'eine Zeile', parts:{ kopf:{ version:'v19.23.0' }, daten:{ n:1 } } };
    return c.sondeSenden(bericht, ADRESSE).then(function(r){
      u.pruef('Senden meldet ok', r.ok===true && r.id==='sonde-1');
      var g=gesendet[0];
      u.pruef('Ziel: <Relay>/k/<Schluessel>/phone/diag', g.url==='https://relay.beispiel.workers.dev/k/'+RELAY_KEY+'/phone/diag', g.url);
      u.pruef('POST ohne Browser-Freigabe-Pflicht: no-cors und text/plain', g.o.method==='POST' && g.o.mode==='no-cors' && /^text\/plain/.test(g.o.headers['content-type']));
      var b=JSON.parse(g.o.body);
      u.pruef('Form wie das Relay sie verlangt: id, Teile (Namen und Zahl erlaubt), kind', /^[A-Za-z0-9_.-]{1,48}$/.test(b.id) && Object.keys(b.parts).length<=12 && Object.keys(b.parts).every(function(k){ return /^[A-Za-z0-9_.-]{1,32}$/.test(k); }) && b.kind==='sonde');
      gesendet.length=0;
      return c.sondeSenden(bericht, 'unsinn');
    }).then(function(r){
      u.pruef('Ungueltige Adresse: nichts gesendet', r.ok===false && r.grund==='adresse' && gesendet.length===0);
      var boese={ id:'sonde-2', kind:'sonde', title:'x', sum:'x', parts:{ kopf:{ notiz:'Schluessel '+GEHEIM_G } } };
      return c.sondeSenden(boese, ADRESSE);
    }).then(function(r){
      u.pruef('Gespeicherter Schluessel im Bericht: Senden gesperrt', r.ok===false && r.grund==='geheim' && gesendet.length===0);
      return c.sondeSenden({ id:'s3', kind:'sonde', title:'x', sum:'x', parts:{ a:'AIzaSyABCDEFGHIJKLMNOPQRSTUV' } }, ADRESSE);
    }).then(function(r){
      u.pruef('Etwas in Schluesselform (auch ungespeichert): gesperrt', r.ok===false && r.grund==='geheim');
      return c.sondeSenden({ id:'s4', kind:'sonde', title:'x', sum:'x', parts:{ a:'/k/'+RELAY_KEY } }, ADRESSE);
    }).then(function(r){
      u.pruef('Relay-Schluessel im Bericht: gesperrt', r.ok===false && r.grund==='geheim');
      c.sondeFetchRoh=function(){ return Promise.reject(new Error('aus')); };
      return c.sondeSenden(bericht, ADRESSE);
    }).then(function(r){
      u.pruef('Kein Netz: Senden meldet Fehler statt Absturz', r.ok===false && r.grund==='netz');
      u.pruef('Sperre ohne Treffer: kurze Zahlen wie die PIN loesen nichts aus', c.sondeGeheimFund('{"n":4711}', [ '4711' ])===false);
    });
  });
},

function(){
  u.block('F. Die Relay-Adresse bleibt aus Zustand und Sicherung');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.sondeAdresseSetzen(ADRESSE);
    return pause(600);
  }).then(function(){ return c.speicherLesen('ondo-control-sonde-relay'); }).then(function(x){
    u.pruef('Adresse liegt unter eigenem Speicherschluessel', x && x.a===ADRESSE);
    return c.save ? Promise.resolve(c.save()) : null;
  }).then(function(){ return pause(100); }).then(function(){
    var haupt=c._gespeichert();
    u.pruef('Gespeicherter Hauptzustand enthaelt den Relay-Schluessel nicht', haupt && String(haupt).indexOf(RELAY_KEY)<0);
    u.pruef('Zustand im Speicher enthaelt ihn nicht (das ist, was datenSichern ausgibt)', JSON.stringify(c.state).indexOf(RELAY_KEY)<0);
    u.pruef('Kein Feld des Zustands heisst sonde oder relay', Object.keys(c.state).every(function(k){ return !/sonde|relay/i.test(k); }));
    var mess=''; try{ mess=JSON.stringify(c.messDatenBauen()); }catch(e){ mess=String(e); }
    u.pruef('Messdaten-Export enthaelt ihn nicht', mess.indexOf(RELAY_KEY)<0);
    c.sondeAdresseSetzen('');
    return pause(50);
  }).then(function(){ return c.speicherLesen('ondo-control-sonde-relay'); }).then(function(x){
    u.pruef('Adresse entfernen leert den Speicher', x && x.a==='');
  });
},

function(){
  u.block('G. Oberflaeche und Sprachen');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    var html=String(c.viewMore());
    u.pruef('"Mehr" zeigt die Sonde: Eingabe, Knopf, Status, Ausgabe', ['sondeEingabe','sondeStarten()','sondeStatus','sondeAusgabe','sondeErgebnis'].every(function(s){ return html.indexOf(s)>=0; }));
    u.pruef('Eingabefeld ist ein Passwortfeld', /type="password" id="sondeEingabe"/.test(html));
    u.pruef('Eingabe hat keinen "state."-Handler (kein Feld im Zustand)', !/oninput="state\.sonde|state\.relay/.test(html));
    var keys=['sondeT','sondeD','sondeAdrOn','sondeAdrOff','sondeBad','sondeBtn','sondeDel','sondeBusy','sondeSent','sondeLocal','sondeBlock','sondeFailNet'];
    ['de','fr','en'].forEach(function(l){
      var fehlt=keys.filter(function(k){ return !(c.I18N[l] && c.I18N[l][k]); });
      u.pruef('Sprache '+l+': alle '+keys.length+' Texte der Sonde da', fehlt.length===0, fehlt.join(','));
    });
    u.pruef('Text sagt, was die Sonde NICHT sendet (Wetten, Schluessel, Spielnamen)', /Wetten/.test(c.I18N.de.sondeD) && /Schl/.test(c.I18N.de.sondeD) && /Spielnamen/.test(c.I18N.de.sondeD));
  });
}

]).then(function(){ process.exit(u.bilanz()?1:0); }, function(e){ console.error(e); process.exit(2); });
