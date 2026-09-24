/* Tests R1, R2, K, A, B (v19.19.1, Nachbesserung zu Backlog-Punkt 86, Auftrag Ondo 24.9.2026):
   der reale 15->10-Fall, identische Dubletten, echte Widersprueche und die dauerhafte
   Dublettensperre beim Erzeugen. Wie t2: der ECHTE <script>-Block aus beta.html, nachgebildet
   ist nur das Netz.
   ALTES SCHEMA, am Code belegt statt erfunden: Ein Vorschlag vor v19.19.0 entstand in
   pruefAuswerten() als { id, match, heim, gast, halbzeit, verl, warnP, gefDatum, gefWb, quelle,
   warn, warnQ, einigkeit, laeufeGut, quellen, quellenZahl, verworfen, art, eintraege, urteile,
   rohAntwort, modell } (git show baf2efb~1:beta.html, "var gemeinsam={"). Es gibt KEIN datum
   und KEINE fixtureId - genau das hat seedV<9 uebersehen. */
var fs=require('fs'), path=require('path'), u=require('./umgebung.js');
var R=path.join(__dirname,'..');
var ARCHIV=JSON.parse(fs.readFileSync(R+'/daten/schiri-ergebnisse/2026-09.json','utf8'));
var ESPN  =JSON.parse(fs.readFileSync(R+'/daten/espn-ergebnisse/2026-09.json','utf8'));
var MESS  =JSON.parse(fs.readFileSync(R+'/ondo-control-messdaten-2026-09-17.json','utf8'));

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
      z.gemini++; return json(opt.gemini ? opt.gemini(o, z.gemini) : { candidates:[{ content:{ parts:[{ text:'{"ergebnisse":[]}' }] } }], modelVersion:'gemini-2.5-flash' });
    }
    if(url.indexOf('api.anthropic.com')>=0){ z.sonnet++; return json(opt.sonnet ? opt.sonnet(o, z.sonnet) : { content:[{ type:'text', text:'{"ergebnisse":[]}' }] }); }
    if(url.indexOf('version.json')>=0) return json({ version:c.CODE_VERSION });
    z.andere.push(url);
    return Promise.reject(new Error('unerwarteter Abruf: '+url));
  };
  return z;
}
function eintraege1209(){
  return MESS.kiProtokoll.filter(function(e){ return e.datum==='12.9.2026'; })
    .map(function(e){ return JSON.parse(JSON.stringify(e)); });
}
function app(opt, save, frisch){
  var c=u.neueUmgebung(save?{save:save}:{});
  netz(c, opt||{});
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
    c.state.apiKey='sk-ant-testschluessel';
    if(!save && frisch!==false){
      c.state.kiProtokoll=eintraege1209(); c.state.bets=[];
      c.state.pruefListe=[]; c.state.pruefBilanz=null; c.state.pruefJobs={}; c.state.pruefRun=null;
    }
    return c;
  });
}
function knopf(){ return { disabled:false, textContent:'' }; }
function stand(c){ return JSON.parse(c._speicher[c.KEY]); }
function fertig(c, msMax){
  msMax=msMax||8000; var t0=Date.now();
  return new Promise(function(res, rej){
    (function schau(){
      var r=c.state.pruefRun;
      if(r && r.status!=='laufend') return res(r);
      if(!r && Date.now()-t0>300) return res(null);
      if(Date.now()-t0>msMax) return rej(new Error('Lauf wurde nicht fertig'));
      setTimeout(schau, 5);
    })();
  });
}
function evidenzZahl(c){
  return c.state.kiProtokoll.reduce(function(n,e){ return n+((e.refRoh||[]).length)+((e.espnRoh||[]).length); },0);
}
/* Die Messwerte eines Eintrags - alles, was die Kalibrierung oder die Bewertung betrifft. */
function messwerte(list){
  return JSON.stringify(list.map(function(e){
    return [e.id, e.status, e.ergebnisHeim, e.ergebnisGast, e.heim, e.gast, e.geparkt||false,
            JSON.stringify(e.maerkte||[]), e.refEinigkeit||null];
  }));
}
function zaehle(html, s){ return html.split(s).length-1; }

/* Die fuenf Spiele, deren alte Vorschlaege bei Ondo doppelt standen, im ECHTEN alten Schema.
   Werte = echter Endstand/Halbzeit laut daten/schiri-ergebnisse/2026-09.json. Die alten IDs
   S0..S4 stammen aus einem frueheren Lauf mit anderer Spielliste - sie kollidieren bewusst mit
   den IDs S0..S4 des neuen Laufs (andere Spiele), genau wie es im Betrieb vorkommt. */
var ALT = [
  { match:'AFC Sunderland - FC Arsenal',   heim:0, gast:2, halbzeit:'0:0', gefWb:'Premier League' },
  { match:'Fortuna Sittard - Ajax Amsterdam', heim:1, gast:5, halbzeit:'0:1', gefWb:'Eredivisie' },
  { match:'Go Ahead Eagles - FC Groningen', heim:1, gast:1, halbzeit:'',   gefWb:'Eredivisie' },   /* ohne Halbzeit */
  { match:'Tottenham Hotspur - FC Everton', heim:0, gast:0, halbzeit:'0:0', gefWb:'Premier League' },
  { match:'RC Strasbourg - AS Monaco',      heim:1, gast:1, halbzeit:'0:0', gefWb:'Ligue 1' }
];
function altVorschlaege(kiProtokoll, abweichend){
  return ALT.map(function(a, i){
    var ids=kiProtokoll.filter(function(e){ return e.match===a.match; }).map(function(e){ return e.id; });
    var w=(abweichend && abweichend[a.match]) || {};
    return { id:'S'+i, match:a.match,
      heim:(w.heim!==undefined?w.heim:a.heim), gast:(w.gast!==undefined?w.gast:a.gast),
      halbzeit:(w.halbzeit!==undefined?w.halbzeit:a.halbzeit), verl:'', warnP:false,
      gefDatum:'12.09.2026', gefWb:a.gefWb, quelle:'kicker.de', warn:false, warnQ:false,
      einigkeit:'', laeufeGut:3, quellen:['kicker.de'], quellenZahl:1, verworfen:[],
      art:'log', eintraege:ids, urteile:[], rohAntwort:'{"ergebnisse":[...]}', modell:'gemini-2.5-flash' };
  });
}

/* Die fixtureId so, wie der Prueflauf sie seit v19.19.0 bildet - bewusst NUR aus Funktionen,
   die es auch in v19.19.0 schon gab, damit die Gegenprobe gegen den alten Stand laeuft. */
function fidVon(c, match, datum){ var t=c.teamsAus(match); return c.fxId(c.datumIso(datum), t.heim, t.gast); }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

/* ═══ R0. Aufbau: das alte Schema ist wirklich das alte Schema ═══ */
schritt(function(){
  u.block('R0. Aufbau: fuenf alte Vorschlaege im echten Schema vor v19.19.0');
  return app().then(function(c){
    var alt=altVorschlaege(c.state.kiProtokoll);
    u.pruef('fuenf alte Vorschlaege, KEINER traegt ein Feld datum',
            alt.length===5 && alt.every(function(v){ return !('datum' in v); }));
    u.pruef('KEINER traegt eine fixtureId', alt.every(function(v){ return !('fixtureId' in v); }));
    u.pruef('jeder referenziert beide Gehirn-Eintraege seines Spiels (eintraege)',
            alt.every(function(v){ return v.eintraege.length===2; }),
            alt.map(function(v){ return v.eintraege.length; }).join('/'));
    /* Die Ursache, am echten Code: seedV<9 rechnet datumIso(v.datum) und steigt bei '' aus. */
    u.pruef('Ursache belegt: datumIso(v.datum) liefert fuer jeden alten Vorschlag \'\' (seedV<9 steigt aus)',
            alt.every(function(v){ return c.datumIso(v.datum||'')===''; }));
  });
});

/* ═══ R1. Zustand direkt nach dem Update auf v19.19.0: seedV=9, fuenf alte Vorschlaege ohne
       Job, zehn offene Spiele. Danach vollstaendiger Prueflauf. ═══ */
var r1Stand=null;
schritt(function(){
  u.block('R1. seedV=9 + fuenf alte Vorschlaege + zehn offene Spiele → seedV<10 → Prueflauf');
  var ki=eintraege1209();
  var save={ seedV:9, kiProtokoll:ki, bets:[], regeln:{maxEinsatz:20},
             pruefListe:altVorschlaege(ki), pruefJobs:{}, pruefBilanz:null, pruefRun:null };
  var messVorher=messwerte(ki);
  return app({}, save).then(function(c){
    u.pruef('seedV<10 lief genau einmal: seedV jetzt 10', c.state.seedV===10, 'seedV='+c.state.seedV);
    var m=c.state.pruefMigrationV10||{};
    u.pruef('alle fuenf fixtureIds aus den kiProtokoll-Eintraegen rekonstruiert', m.rekonstruiert===5,
            JSON.stringify(m));
    u.pruef('rekonstruierte fixtureId = dieselbe, die der Prueflauf fuer dieses Spiel bildet',
            c.state.pruefListe.every(function(v){ return v.fixtureId===fidVon(c,v.match,'12.9.2026'); }));
    u.pruef('fuenf Jobs additiv im Zustand "vorschlag" angelegt',
            c.state.pruefListe.every(function(v){ var j=c.jobHolen(v.fixtureId); return j && j.zustand==='vorschlag' && j.vorschlagId===v.id; }));
    var evVorher=evidenzZahl(c);
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      var L=c.state.pruefListe;
      var fids={}, matches={};
      L.forEach(function(v){ fids[v.fixtureId]=(fids[v.fixtureId]||0)+1; matches[v.match]=(matches[v.match]||0)+1; });
      u.pruef('R1: exakt 10 Vorschlaege (nicht 15)', L.length===10, L.length+' Vorschlaege');
      u.pruef('R1: exakt 10 verschiedene fixtureIds', Object.keys(fids).length===10, Object.keys(fids).length+' fixtureIds');
      u.pruef('R1: kein Spiel doppelt', Object.keys(matches).every(function(k){ return matches[k]===1; }));
      var alleZehn=ki.map(function(e){ return e.match; }).filter(function(x,i,a){ return a.indexOf(x)===i; });
      u.pruef('R1: 10 von 10 Spielen haben genau einen Vorschlag',
              alleZehn.every(function(mm){ return matches[mm]===1; }), alleZehn.length+' Spiele');
      console.log('     dieser Lauf pruefte '+c.state.pruefBilanz.gesamt+' Spiele und fand '+c.state.pruefBilanz.gef+
                  ' - die uebrigen 5 hatten ihren (migrierten) Vorschlag schon und wurden NICHT erneut gesucht');
      u.pruef('R1: die fuenf migrierten Spiele wurden nicht noch einmal gesucht',
              c.state.pruefBilanz.gesamt===5 && c.state.pruefBilanz.gef===5,
              c.state.pruefBilanz.gef+' von '+c.state.pruefBilanz.gesamt);
      u.pruef('R1: 0 KI-Aufrufe', c._netz.gemini===0 && c._netz.sonnet===0 && c.state.pruefBilanz.kiAufrufe===0,
              'gemini='+c._netz.gemini+' sonnet='+c._netz.sonnet);
      u.pruef('R1: keine bestehende Evidence geloescht', evidenzZahl(c)>=evVorher, evVorher+' -> '+evidenzZahl(c));
      u.pruef('R1: kein Messwert veraendert', messwerte(c.state.kiProtokoll)===messVorher);
      u.pruef('R1: nichts automatisch uebernommen', c.state.kiProtokoll.every(function(e){ return e.status==='offen' && e.ergebnisHeim===null; }));
      var html=c.pruefBlock();
      var st3=L.filter(function(v){ return v.stufe===3; });
      u.pruef('R1: Stufe-3-Warnungen weiterhin da (Auxerre-Nizza, Lazio-Mailand)',
              st3.length===2 && zaehle(html, c.t('zuordnungStufe3'))===2,
              st3.map(function(v){ return v.match; }).join(' / '));
      u.pruef('R1: keine Stufe-3-Provider-ID vor Ondos Uebernehmen gebunden',
              st3.every(function(v){ return Object.keys((c.jobHolen(v.fixtureId)||{}).providerIds||{}).length===0; }));
      u.pruef('R1: jede Vorschlags-ID nur einmal', (function(){ var s={}; return L.every(function(v){ if(s[v.id]) return false; s[v.id]=1; return true; }); })(),
              L.map(function(v){ return v.id; }).join(','));
      u.pruef('R1: jeder Job zeigt auf genau seinen Vorschlag',
              L.every(function(v){ var j=c.jobHolen(v.fixtureId); return j && j.zustand==='vorschlag' && j.vorschlagId===v.id; }));
      r1Stand=stand(c);
      /* Ein ERNEUTER Prueflauf darf daraus nicht wieder 15 machen. */
      c.ergebnissePruefen(knopf());
      u.pruef('R1: ein erneuter Prueflauf findet nichts mehr zu tun', c._elemente['pruefStatus'].textContent===c.t('noOpen'),
              '"'+c._elemente['pruefStatus'].textContent+'"');
      u.pruef('R1: und es bleiben 10 Vorschlaege', c.state.pruefListe.length===10);
    });
  }).then(function(){
    /* Reload */
    return app({}, r1Stand).then(function(c2){
      u.pruef('R1-Reload: weiterhin 10 Vorschlaege', c2.state.pruefListe.length===10, c2.state.pruefListe.length+'');
      u.pruef('R1-Reload: keine neue Migrationswirkung (Liste und Jobs zeichengleich)',
              JSON.stringify(c2.state.pruefListe)===JSON.stringify(r1Stand.pruefListe) &&
              JSON.stringify(c2.state.pruefJobs)===JSON.stringify(r1Stand.pruefJobs));
      u.pruef('R1-Reload: Migrationsbericht unveraendert (seedV>=10 laeuft nicht erneut)',
              JSON.stringify(c2.state.pruefMigrationV10)===JSON.stringify(r1Stand.pruefMigrationV10));
      c2.ergebnissePruefen(knopf());
      return fertig(c2).then(function(){
        u.pruef('R1-Reload: Prueflauf danach -> keine neue Dublette, 0 Netzabrufe',
                c2.state.pruefListe.length===10 && c2._netz.fdArchiv===0 && c2._netz.gemini===0 && c2._netz.sonnet===0,
                c2.state.pruefListe.length+' Vorschlaege, fd='+c2._netz.fdArchiv);
      });
    });
  });
});

/* ═══ R2. Ondos TATSAECHLICHER heutiger Zustand: seedV=9 mit 15 Vorschlaegen (5 alt + 10 aus
       dem v19.19.0-Lauf). Die zehn neuen werden vom echten Prueflauf erzeugt, nicht nachgebaut. ═══ */
schritt(function(){
  u.block('R2. Ondos realer Zustand 5 alt + 10 neu = 15 → seedV<10 → genau 10');
  return app().then(function(c){
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      var s=stand(c);
      s.seedV=9; delete s.pruefMigrationV10;
      s.pruefListe=altVorschlaege(s.kiProtokoll).concat(s.pruefListe);
      var fidsVorher={}; s.pruefListe.forEach(function(v){ if(v.fixtureId) fidsVorher[v.fixtureId]=1; });
      var spiele={}; s.pruefListe.forEach(function(v){ spiele[v.match]=1; });
      u.pruef('VORHER entspricht dem realen Befund: 15 sichtbare Vorschlaege fuer 10 Spiele',
              s.pruefListe.length===15 && Object.keys(spiele).length===10,
              s.pruefListe.length+' Vorschlaege, '+Object.keys(spiele).length+' Spiele');
      u.pruef('VORHER: die fuenf alten haben keine fixtureId, die zehn neuen schon',
              s.pruefListe.filter(function(v){ return !v.fixtureId; }).length===5 && Object.keys(fidsVorher).length===10);
      var messVorher=messwerte(s.kiProtokoll);
      var evVorher=s.kiProtokoll.reduce(function(n,e){ return n+((e.refRoh||[]).length)+((e.espnRoh||[]).length); },0);
      var neuVorher={}; s.pruefListe.forEach(function(v){ if(v.fixtureId) neuVorher[v.fixtureId]=JSON.stringify(v.zuordnung||null); });
      return app({}, s).then(function(c2){
        var L=c2.state.pruefListe, m=c2.state.pruefMigrationV10||{};
        u.pruef('NACHHER: genau 10 aktive Vorschlaege', L.length===10, L.length+' · '+JSON.stringify(m));
        u.pruef('NACHHER: 10 verschiedene fixtureIds', (function(){ var f={}; L.forEach(function(v){ f[v.fixtureId]=1; }); return Object.keys(f).length===10; })());
        u.pruef('fuenf identische Dubletten zusammengefuehrt, 0 Widersprueche', m.zusammengefuehrt===5 && m.konflikte===0);
        u.pruef('behalten wurde jeweils der reichere neue Vorschlag (Zuordnungsdiagnose unveraendert da)',
                L.every(function(v){ return JSON.stringify(v.zuordnung||null)===neuVorher[v.fixtureId] && !!v.zuordnung; }));
        u.pruef('die Zusammenfuehrung ist am Vorschlag nachvollziehbar',
                L.filter(function(v){ return (v.zusammengefuehrt||[]).length===1; }).length===5);
        u.pruef('kein Messwert veraendert', messwerte(c2.state.kiProtokoll)===messVorher);
        u.pruef('keine refRoh-/espnRoh-Evidence geloescht', evidenzZahl(c2)===evVorher, evVorher+' -> '+evidenzZahl(c2));
        u.pruef('jeder Job zeigt auf genau den behaltenen Vorschlag',
                L.every(function(v){ var j=c2.jobHolen(v.fixtureId); return j && j.zustand==='vorschlag' && j.vorschlagId===v.id; }));
        var st3=L.filter(function(v){ return v.stufe===3; });
        u.pruef('Stufe-3-Hinweis bleibt (2 Spiele), keine Provider-ID gebunden',
                st3.length===2 && zaehle(c2.pruefBlock(), c2.t('zuordnungStufe3'))===2 &&
                st3.every(function(v){ return Object.keys((c2.jobHolen(v.fixtureId)||{}).providerIds||{}).length===0; }));
        u.pruef('kein Widerspruchs-Hinweis (alle fuenf Paare waren identisch)', c2.pruefBlock().indexOf(c2.t('pruefKonflikt'))<0);
        /* Idempotenz der Migration selbst: ein zweiter Aufruf auf demselben Stand aendert nichts. */
        var vor=JSON.stringify([c2.state.pruefListe, c2.state.pruefJobs]);
        var b2=(typeof c2.pruefListeMigrierenV10==='function') ? c2.pruefListeMigrierenV10() : { fehlt:'pruefListeMigrierenV10' };
        u.pruef('seedV<10-Migration ist idempotent (zweiter Aufruf: keine Aenderung)',
                JSON.stringify([c2.state.pruefListe, c2.state.pruefJobs])===vor && b2.zusammengefuehrt===0 && b2.rekonstruiert===0,
                JSON.stringify(b2));
        c2.ergebnissePruefen(knopf());
        u.pruef('ein Prueflauf danach erzeugt NICHT wieder 15', c2.state.pruefListe.length===10 &&
                c2._elemente['pruefStatus'].textContent===c2.t('noOpen'));
        var gesp=stand(c2);
        return app({}, gesp).then(function(c3){
          u.pruef('Reload: weiterhin 10, keine neue Migrationswirkung',
                  c3.state.pruefListe.length===10 && JSON.stringify(c3.state.pruefListe)===JSON.stringify(gesp.pruefListe));
        });
      });
    });
  });
});

/* ═══ K. Echter Widerspruch in der Migration: altes Tottenham 1:0, neues 0:0 ═══ */
schritt(function(){
  u.block('K. Zwei VERSCHIEDENE Ergebnisse fuer dieselbe fixtureId - sichtbar, nichts gewaehlt');
  return app().then(function(c){
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      var s=stand(c);
      s.seedV=9; delete s.pruefMigrationV10;
      var alt=altVorschlaege(s.kiProtokoll, { 'Tottenham Hotspur - FC Everton':{ heim:1, gast:0, halbzeit:'1:0' } });
      /* Die alte Tottenham-ID kollidiert absichtlich mit der ID des NEUEN Tottenham-Vorschlags. */
      var neuTot=s.pruefListe.filter(function(v){ return v.match==='Tottenham Hotspur - FC Everton'; })[0];
      alt[3].id=neuTot.id;
      s.pruefListe=alt.concat(s.pruefListe);
      return app({}, s).then(function(c2){
        var L=c2.state.pruefListe;
        var tot=L.filter(function(v){ return v.match==='Tottenham Hotspur - FC Everton'; });
        u.pruef('K: 11 Vorschlaege - vier identische zusammengefuehrt, der Widerspruch bleibt', L.length===11, L.length+'');
        u.pruef('K: BEIDE Tottenham-Ergebnisse stehen noch da, keines ueberschrieben',
                tot.length===2 && tot.some(function(v){ return v.heim===1 && v.gast===0; }) && tot.some(function(v){ return v.heim===0 && v.gast===0; }),
                tot.map(function(v){ return v.heim+':'+v.gast; }).join(' / '));
        u.pruef('K: beide sind sichtbar als Widerspruch markiert',
                zaehle(c2.pruefBlock(), c2.t('pruefKonflikt'))===2);
        c2.pruefTextBauen();
        u.pruef('K: auch in der Textausgabe fuer die Gegenpruefung',
                zaehle(c2._elemente['pruefText'].value, 'WIDERSPRUCH')===2);
        u.pruef('K: die kollidierende ID ist aufgeloest (jede ID nur einmal)', tot[0].id!==tot[1].id, tot.map(function(v){ return v.id; }).join(' / '));
        u.pruef('K: nichts automatisch uebernommen', c2.state.kiProtokoll.every(function(e){ return e.status==='offen'; }));
        u.pruef('K: der Job bleibt "vorschlag" und zeigt auf einen der beiden',
                (function(){ var j=c2.jobHolen(tot[0].fixtureId); return j.zustand==='vorschlag' && (j.vorschlagId===tot[0].id || j.vorschlagId===tot[1].id); })());
        /* Ondo waehlt selbst: Uebernehmen genau des geklickten Vorschlags. */
        var gewaehlt=tot.filter(function(v){ return v.heim===0; })[0];
        var andere=tot.filter(function(v){ return v!==gewaehlt; })[0];
        c2.pruefAnwenden(gewaehlt.id);
        var es=c2.state.kiProtokoll.filter(function(e){ return e.match==='Tottenham Hotspur - FC Everton'; });
        u.pruef('K: Uebernehmen schreibt genau das geklickte Ergebnis (0:0)',
                es.every(function(e){ return e.ergebnisHeim===0 && e.ergebnisGast===0; }));
        u.pruef('K: der andere Vorschlag wurde dabei NICHT still geloescht',
                c2.state.pruefListe.some(function(v){ return v.id===andere.id; }));
        u.pruef('K: kein anderes Spiel wurde mituebernommen',
                c2.state.kiProtokoll.filter(function(e){ return e.status==='bewertet'; }).length===2);
      });
    });
  });
});

/* ═══ A. Dauerhafte Sperre beim Erzeugen, Fall A: zwei Schreibweisen desselben Spiels in
       EINEM Lauf ergeben dieselbe fixtureId und dasselbe Ergebnis ═══ */
schritt(function(){
  u.block('A. Erzeugen: gleiche fixtureId + gleiches Ergebnis → KEIN zweiter Vorschlag');
  return app({}, null, false).then(function(c){
    var basis=eintraege1209().filter(function(e){ return e.match==='AFC Sunderland - FC Arsenal'; });
    basis[1].match='Sunderland - Arsenal';          /* Flash schrieb den Namen anders */
    c.state.kiProtokoll=basis; c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
    u.pruef('Aufbau: zwei Schreibweisen, EINE fixtureId',
            fidVon(c,basis[0].match,'12.9.2026')===fidVon(c,basis[1].match,'12.9.2026'),
            fidVon(c,basis[1].match,'12.9.2026'));
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      var L=c.state.pruefListe;
      u.pruef('A: genau EIN Vorschlag statt zwei', L.length===1, L.length+' Vorschlaege');
      u.pruef('A: er traegt BEIDE Gehirn-Eintraege', L[0] && L[0].eintraege.length===2, L[0] && L[0].eintraege.join(','));
      u.pruef('A: die Zusammenfuehrung ist vermerkt', L[0] && (L[0].zusammengefuehrt||[]).length===1);
      u.pruef('A: 0 KI-Aufrufe', c._netz.gemini===0 && c._netz.sonnet===0);
      c.pruefAnwenden(L[0].id);
      u.pruef('A: Uebernehmen bewertet beide Eintraege (keiner bleibt ohne Ergebnis haengen)',
              c.state.kiProtokoll.every(function(e){ return e.status==='bewertet' && e.ergebnisHeim===0 && e.ergebnisGast===2; }),
              c.state.kiProtokoll.map(function(e){ return e.ergebnisHeim+':'+e.ergebnisGast; }).join(' / '));
    });
  });
});

/* ═══ B. Fall B: dieselbe fixtureId, WIDERSPRECHENDES Ergebnis im selben Lauf (KI-Notnagel,
       zwei Schreibweisen, verschiedene Antworten) ═══ */
schritt(function(){
  u.block('B. Erzeugen: gleiche fixtureId + Widerspruch → beide bleiben, sichtbar, nichts gewaehlt');
  function antwort(o, sonnet){
    var body=JSON.parse(o.body);
    var text= sonnet ? body.messages[0].content : body.contents[0].parts[0].text;
    var m=text.match(/\n(S\d+): ([^\[(\n]+)/);
    var id=m?m[1]:'S0', name=m?m[2]:'';
    var tore = name.indexOf('AFC Sunderland')>=0 ? [0,2] : [1,2];
    var erg=[{ id:id, status:'fertig', format:'2x45', halbzeit:'0:0', heim:tore[0], gast:tore[1],
               verlaengerungGespielt:'nein', torlos:'nein', datum:'12.09.2026', wettbewerb:'Premier League',
               quelle:'https://www.kicker.de/x' }];
    var t=JSON.stringify({ ergebnisse:erg });
    return sonnet ? { content:[{ type:'text', text:t }], model:'claude-sonnet-5' }
                  : { candidates:[{ content:{ parts:[{ text:t }] } }], modelVersion:'gemini-2.5-flash' };
  }
  return app({ fdArchiv:{ spiele:[] }, espnArchiv:{ spiele:[] },
               gemini:function(o){ return antwort(o,false); }, sonnet:function(o){ return antwort(o,true); } }, null, false)
  .then(function(c){
    var basis=eintraege1209().filter(function(e){ return e.match==='AFC Sunderland - FC Arsenal'; });
    basis[1].match='Sunderland - Arsenal';
    c.state.kiProtokoll=basis; c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefJobs={}; c.state.pruefRun=null;
    c.ergebnissePruefen(knopf());
    return fertig(c, 15000).then(function(){
      var L=c.state.pruefListe;
      u.pruef('B: beide widersprechenden Vorschlaege bleiben erhalten', L.length===2 &&
              L.some(function(v){ return v.heim===0; }) && L.some(function(v){ return v.heim===1; }),
              L.map(function(v){ return v.heim+':'+v.gast; }).join(' / '));
      u.pruef('B: keiner wurde ueberschrieben oder zusammengelegt',
              L.every(function(v){ return !(v.zusammengefuehrt||[]).length; }));
      u.pruef('B: beide als Widerspruch sichtbar', zaehle(c.pruefBlock(), c.t('pruefKonflikt'))===2);
      u.pruef('B: nichts automatisch uebernommen', c.state.kiProtokoll.every(function(e){ return e.status==='offen'; }));
      u.pruef('B: die Drei-Laeufe-Regel lief unveraendert (3 je Spiel)', c._netz.gemini===4 && c._netz.sonnet===2,
              'gemini='+c._netz.gemini+' sonnet='+c._netz.sonnet);
    });
  });
});

/* ═══ C. vorschlagEinfuegen direkt: Regeln einzeln ═══ */
schritt(function(){
  u.block('C. Die Sperre einzeln: Ergaenzen ohne Ueberschreiben, Wettscheine getrennt');
  return app({}, null, false).then(function(c){
    if(typeof c.vorschlagEinfuegen!=='function'){ u.pruef('C: vorschlagEinfuegen() existiert', false, 'fehlt in diesem Stand'); return; }
    var fid=fidVon(c,'AFC Sunderland - FC Arsenal','12.9.2026');
    c.state.pruefListe=[{ id:'S0', art:'log', fixtureId:fid, match:'AFC Sunderland - FC Arsenal', heim:0, gast:2,
                          halbzeit:'', modell:'gemini-2.5-flash', einigkeit:'2von3', eintraege:[] }];
    var r=c.vorschlagEinfuegen({ id:'S0', art:'log', fixtureId:fid, match:'Sunderland - Arsenal', heim:0, gast:2,
                                 halbzeit:'0:0', modell:'football-data-archiv', einigkeit:'', eintraege:[],
                                 zuordnung:{ stufe:1 }, stufe:1 });
    var v=c.state.pruefListe[0];
    u.pruef('Fall A: kein zweiter Vorschlag', r.fall==='dublette' && c.state.pruefListe.length===1);
    u.pruef('Fall A: fehlende Halbzeit und Zuordnung ergaenzt', v.halbzeit==='0:0' && v.zuordnung && v.stufe===1);
    u.pruef('Fall A: nichts ueberschrieben (modell, einigkeit bleiben)', v.modell==='gemini-2.5-flash' && v.einigkeit==='2von3');
    var r2=c.vorschlagEinfuegen({ id:'S0', art:'log', fixtureId:fid, match:'x', heim:1, gast:2, eintraege:[] });
    u.pruef('Fall B: Widerspruch wird angehaengt, nicht ueberschrieben', r2.fall==='konflikt' &&
            c.state.pruefListe.length===2 && c.state.pruefListe[0].heim===0);
    u.pruef('Fall B: die neue ID ist eindeutig', c.state.pruefListe[1].id!=='S0', c.state.pruefListe[1].id);
    u.pruef('Fall B: beide melden den Widerspruch', c.vorschlagImKonflikt(c.state.pruefListe[0]) && c.vorschlagImKonflikt(c.state.pruefListe[1]));
    c.state.pruefListe=[{ id:'B1', art:'bet', betId:1, fixtureId:fid, heim:0, gast:2 }];
    var r3=c.vorschlagEinfuegen({ id:'B2', art:'bet', betId:2, fixtureId:fid, heim:0, gast:2 });
    u.pruef('zwei verschiedene Wetten auf dasselbe Spiel bleiben zwei Vorschlaege', r3.fall==='neu' && c.state.pruefListe.length===2);
    u.pruef('... und gelten nicht als Widerspruch', !c.vorschlagImKonflikt(c.state.pruefListe[0]));
    var r4=c.vorschlagEinfuegen({ id:'X', art:'log', fixtureId:'', heim:1, gast:1 });
    u.pruef('ohne gueltige fixtureId wird nichts zusammengefuehrt', r4.fall==='neu');
  });
});

ablauf.then(function(){
  console.log('');
  process.exit(u.bilanz()?1:0);
}).catch(function(e){
  console.log('\n✗ ABBRUCH: '+(e&&e.stack||e));
  process.exit(1);
});
