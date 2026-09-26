/* Tests R/S — Backlog-Punkte 87/88 (26.9.2026).
   R: echter Nations-League-Fall 25.9.2026 gegen das echte ESPN-Monatsarchiv.
   S: Fail-Safe fuer unbekannte Gemini-Fehler + Spiellistenfehler.
   Wie alle Tests hier wird der echte <script>-Block aus beta.html ueber umgebung.js geladen. */
var path=require('path'), fs=require('fs'), u=require('./umgebung.js');

function jsonAntwort(obj, status){
  return Promise.resolve({ ok:(status||200)>=200 && (status||200)<300, status:status||200,
    json:function(){ return Promise.resolve(obj); } });
}
function gemText(text){
  return { candidates:[{ content:{ parts:[{ text:text }] } }], modelVersion:'gemini-test-ok' };
}
function basisGemini(c, modelle){
  c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
  c.state.geminiListeStand=c.MODELL_STAND;
  c.state.geminiModelListe=(modelle||['gemini-2.5-flash','gemini-2.0-flash']).slice();
  c.state.geminiModel=null;
  c.state.gModellListe=null;
}

/* ═══ R. Echter 8-Spiele-Fall UEFA Nations League, 25.09.2026 ═══ */
u.block('R. Nations League 25.9.2026 — DE-Namen gegen echtes ESPN-Archiv');
var cR=u.neueUmgebung();
var archiv=JSON.parse(fs.readFileSync(path.join(__dirname,'..','daten','espn-ergebnisse','2026-09.json'),'utf8')).spiele;
var acht=[
  ['Georgien - Nordirland','18:00'],
  ['Armenien - Lettland','18:00'],
  ['Schweden - Rumänien','20:45'],
  ['Italien - Belgien','20:45'],
  ['Türkei - Frankreich','20:45'],
  ['Ungarn - Ukraine','20:45'],
  ['Polen - Bosnien-Herzegowina','20:45'],
  ['Montenegro - Zypern','20:45']
].map(function(x,i){ return { id:'R'+i, art:'log', match:x[0], datum:'25.9.2026', anpfiff:x[1],
  wettbewerb:'UEFA Nations League', eintraege:[] }; });
var rErg=cR.strukturAbgleich(acht, archiv, 'espn-test');
var rStufen={1:0,2:0,3:0};
rErg.forEach(function(r){ rStufen[r._stufe]=(rStufen[r._stufe]||0)+1; });
var stark=(rStufen[1]||0)+(rStufen[2]||0);
console.log('     Zuordnungen: '+rErg.length+'/8 · Stufe1='+(rStufen[1]||0)+' Stufe2='+(rStufen[2]||0)+' Stufe3='+(rStufen[3]||0));
rErg.forEach(function(r){
  var p=acht.filter(function(x){return x.id===r.id;})[0];
  console.log('     Stufe '+r._stufe+'  '+(p?p.match:r.id)+' → '+r.heim+':'+r.gast);
});
var archivTag=archiv.filter(function(f){
  return f.datum==='2026-09-25' && f.providerCompetitionSlug==='uefa.nations' && f.status==='FT';
});
var archivPaare=archivTag.map(function(f){ return f.heim+' - '+f.gast; }).sort();
var erwartetePaare=[
  'Georgia - Northern Ireland','Armenia - Latvia','Sweden - Romania','Italy - Belgium',
  'Türkiye - France','Hungary - Ukraine','Poland - Bosnia-Herzegovina','Montenegro - Cyprus'
].sort();
u.pruef('alle acht realen Zielspiele sind im ESPN-Archiv vorhanden',
  archivTag.length===8 && JSON.stringify(archivPaare)===JSON.stringify(erwartetePaare),
  archivTag.length+' Nations-League-Archivspiele am 25.9.');
u.pruef('mehr als 2 von 8 loesen jetzt ueber Stufe 1/2', stark>2,
  stark+'/8 (Stufe1='+(rStufen[1]||0)+', Stufe2='+(rStufen[2]||0)+')');
u.pruef('Nordirland bleibt ausserhalb der ISO-Normalisierung', cR.fxLandCode('Nordirland')==='' && cR.fxLandCode('Northern Ireland')==='');
u.pruef('England/Schottland/Wales/Kosovo bleiben ausserhalb',
  ['England','Scotland','Schottland','Wales','Kosovo'].every(function(n){return cR.fxLandCode(n)==='';}));
u.pruef('de/en-Laendernamen teilen denselben Regionscode',
  cR.fxLandCode('Schweden')==='SE' && cR.fxLandCode('Sweden')==='SE' &&
  cR.fxLandCode('Italien')==='IT' && cR.fxLandCode('Italy')==='IT');
u.pruef('genau sieben Zielspiele werden ueber den neuen ISO-Weg zugeordnet', rErg.length===7, rErg.length+'/8 Archivtreffer');
u.pruef('Georgien - Nordirland bleibt bewusst ausserhalb des neuen ISO-Wegs',
  !rErg.some(function(r){return r.id==='R0';}), 'R0 Treffer='+rErg.some(function(r){return r.id==='R0';}));
u.pruef('Bosnien-Herzegowina wird ohne gepflegte Alias-Tabelle ueber DisplayNames erkannt',
  cR.fxLandCode('Bosnien-Herzegowina')==='BA' && cR.fxLandCode('Bosnia and Herzegovina')==='BA');
u.pruef('Serie A/B bleiben ohne ratenden Italien-Slug',
  cR.espnSlugFuer('Serie A')==='' && cR.espnSlugFuer('Serie B')==='');
u.pruef('laenderspezifische Brasilien-Serie-A/B-Regeln bleiben erhalten',
  cR.espnSlugFuer('Brasilien Serie A')==='bra.1' && cR.espnSlugFuer('Brasilien Serie B')==='bra.2');
var mixP={id:'RMIX',match:'Schweden - England',datum:'25.9.2026',anpfiff:'20:45',wettbewerb:'UEFA Nations League'};
var mixF=cR.fxFixtureLesen({heim:'Sweden',gast:'England National Team',status:'FT',
  providerCompetitionName:'UEFA Nations League',kickoffUtc:'2026-09-25T18:45:00Z'});
var mixR=cR.fxAufloesen(mixP,[mixF],[mixP]);
u.pruef('Mischfall mit ausgeschlossenem England nutzt NICHT den neuen starken ISO-Weg',
  mixR && mixR.stufe===3, JSON.stringify(mixR&&{stufe:mixR.stufe,heim:mixR.fixture.heim,gast:mixR.fixture.gast}));

/* ═══ S. Fail Safe ═══ */
var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

schritt(function(){
  u.block('S1. Unbekannter Gemini-Fehler — kein Modellwechsel');
  var c=u.neueUmgebung(), calls=[];
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash','gemini-1.5-flash']);
    c.fetch=function(url){ calls.push(String(url)); return jsonAntwort({error:{message:'mysterioese neue Fehlerart'}},400); };
    return c.geminiCall({prompt:'Test',rolle:'liste'},0).then(function(res){
      u.pruef('unbekannter Fehler ist als _unklar markiert', res && res._unklar===true,
        JSON.stringify({status:res&&res._status,unklar:res&&res._unklar}));
      u.pruef('unbekannter Fehler loest KEINEN Modellwechsel aus', calls.length===1, calls.length+' Request(s)');
      u.pruef('Fehlermeldung benennt den unklaren Zustand sichtbar',
        /unklarer Fehler/i.test((res.error&&res.error.message)||''), (res.error&&res.error.message)||'');
    });
  });
});

schritt(function(){
  u.block('S1b. Unbekannter Fehler auf starker Liste — KEIN Flash-Fallback');
  var c=u.neueUmgebung(), calls=[];
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
    c.state.geminiListeStand=c.MODELL_STAND;
    c.state.geminiProListe=['gemini-2.5-pro','gemini-2.0-pro'];
    c.state.geminiModelListe=['gemini-2.5-flash','gemini-2.0-flash'];
    c.state.geminiProModel=null; c.state.geminiModel=null; c.state.gModellListe=null;
    c.fetch=function(url){ calls.push(String(url)); return jsonAntwort({error:{message:'voellig unbekannter Pro-Fehler'}},400); };
    return c.geminiCall({prompt:'Test',rolle:'ref',stark:true},0).then(function(res){
      u.pruef('starker unbekannter Fehler bleibt _unklar', res && res._unklar===true,
        JSON.stringify({status:res&&res._status,unklar:res&&res._unklar}));
      u.pruef('starker unbekannter Fehler macht genau EINEN Request', calls.length===1, calls.length+' Request(s)');
      u.pruef('starker unbekannter Fehler faellt NICHT auf Flash zurueck',
        calls.every(function(x){return x.indexOf('flash')<0;}), calls.join(' | '));
    });
  });
});

schritt(function(){
  u.block('S1c. Gemini-Netzwerkfehler — direkt als unklar, kein zweiter Versuch');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash']);
    c.fetch=function(){ calls++; return Promise.reject(new Error('Netz weg direkt (Test)')); };
    return c.geminiCall({prompt:'Test',rolle:'liste'},0).then(function(res){
      u.pruef('direkter Netzwerkfehler ist als _unklar markiert', res && res._unklar===true,
        JSON.stringify({status:res&&res._status,unklar:res&&res._unklar}));
      u.pruef('direkter Netzwerkfehler loest KEINEN Modellwechsel aus', calls===1, calls+' Request(s)');
    });
  });
});

schritt(function(){
  u.block('S1d. Unlesbare Gemini-Erfolgsantwort — unklar statt scheinbares Ergebnis');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash']);
    c.fetch=function(){ calls++; return jsonAntwort({unexpected:true},200); };
    return c.geminiCall({prompt:'Test',rolle:'liste'},0).then(function(res){
      u.pruef('unlesbare Erfolgsantwort ist als _unklar markiert', res && res._unklar===true,
        JSON.stringify({status:res&&res._status,unklar:res&&res._unklar}));
      u.pruef('unlesbare Erfolgsantwort loest KEINEN Modellwechsel aus', calls===1, calls+' Request(s)');
    });
  });
});

schritt(function(){
  u.block('S2. Kontingent — bestehendes Sofort-Anhalten bleibt');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash']);
    c.fetch=function(){ calls++; return jsonAntwort({error:{message:'You exceeded your current quota, limit: 0'}},429); };
    return c.geminiCall({prompt:'Test',rolle:'liste'},0).then(function(res){
      u.pruef('Kontingent bleibt als _kontingent klassifiziert', res && res._kontingent===true);
      u.pruef('Kontingent probiert weiterhin kein zweites Modell', calls===1, calls+' Request(s)');
    });
  });
});

schritt(function(){
  u.block('S3. Ueberlastung — bestehender Modellwechsel bleibt');
  var c=u.neueUmgebung(), calls=[];
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash']);
    c.fetch=function(url){
      calls.push(String(url));
      if(calls.length===1) return jsonAntwort({error:{message:'high demand, try again'}},503);
      return jsonAntwort(gemText('{"spiele":[]}'),200);
    };
    return c.geminiCall({prompt:'Test',rolle:'liste'},0).then(function(res){
      u.pruef('Ueberlastung darf weiterhin genau zum naechsten Modell wechseln', calls.length===2, calls.length+' Request(s)');
      u.pruef('zweiter Modellversuch kann erfolgreich antworten', !res.error && res.content && res.content.length===1);
      u.pruef('Ueberlastung ist nicht als unbekannter Fehler markiert', !res._unklar);
    });
  });
});

schritt(function(){
  u.block('S4. stufeHolen: unbekannter Modellfehler stoppt die ganze Spielliste');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash','gemini-2.0-flash']);
    c.fetch=function(){ calls++; return jsonAntwort({error:{message:'neue unbekannte API-Antwort'}},400); };
    return c.spielListeHolen().then(function(){
      u.pruef('spielListeHolen lehnt bei unbekanntem Fehler ab', false, 'Promise wurde unerwartet erfuellt');
    },function(e){
      u.pruef('spielListeHolen lehnt bei unbekanntem Fehler ab', e && e._unklar===true, e&&e.message);
      u.pruef('nach dem Fehler wird KEINE weitere Stufe gestartet', calls===1, calls+' Request(s)');
      u.pruef('der sichtbare Fehlertext nennt Spielliste unklar', /Spielliste unklar/.test((e&&e.message)||''), e&&e.message);
    });
  });
});

schritt(function(){
  u.block('S5. stufeHolen: kaputtes JSON ist nicht []');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash']);
    c.fetch=function(){ calls++; return jsonAntwort(gemText('KEIN JSON HIER'),200); };
    return c.stufeHolen(c.STUFEN[0]).then(function(){
      u.pruef('kaputtes JSON wird nicht als leere Liste behandelt', false, 'Promise wurde unerwartet erfuellt');
    },function(e){
      u.pruef('kaputtes JSON wird nicht als leere Liste behandelt', e && e._unklar===true, e&&e.message);
      u.pruef('nur ein Abruf fuer den kaputten Lauf', calls===1, calls+' Request(s)');
    });
  });
});

schritt(function(){
  u.block('S6. stufeHolen: Netzwerkfehler ist nicht []');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash']);
    c.fetch=function(){ calls++; return Promise.reject(new Error('Netz weg (Test)')); };
    return c.stufeHolen(c.STUFEN[0]).then(function(){
      u.pruef('Netzwerkfehler wird nicht als leere Liste behandelt', false, 'Promise wurde unerwartet erfuellt');
    },function(e){
      u.pruef('Netzwerkfehler wird nicht als leere Liste behandelt', e && e._unklar===true, e&&e.message);
      u.pruef('Netzwerkfehler startet keinen zweiten Versuch', calls===1, calls+' Request(s)');
    });
  });
});

schritt(function(){
  u.block('S7. Erfolgreiches {spiele:[]} bleibt die einzige echte leere Liste');
  var c=u.neueUmgebung(), calls=0;
  return c.bereit.then(function(){
    basisGemini(c,['gemini-2.5-flash']);
    c.fetch=function(){ calls++; return jsonAntwort(gemText('{"spiele":[]}'),200); };
    return c.stufeHolen(c.STUFEN[0]).then(function(liste){
      u.pruef('gueltiges spiele:[] ergibt wirklich []', Array.isArray(liste) && liste.length===0, JSON.stringify(liste));
      u.pruef('dafuer war genau ein erfolgreicher Abruf noetig', calls===1, calls+' Request(s)');
    });
  });
});

ablauf.then(function(){ process.exitCode=u.bilanz()?1:0; }).catch(function(e){
  console.error('\nTESTABBRUCH:',e&&e.stack||e); process.exitCode=1;
});
