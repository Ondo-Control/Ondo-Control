/* ===================================================================================
   t16 - VOLLSONDE / PROBEKAMMER (Backlog-Punkt 95, v19.24.0)
   Anders als t1-t15 laeuft dieser Test NICHT im Node-vm, sondern in einem echten Chromium
   (Playwright): Die Probekammer ist ein iframe mit sandbox="allow-scripts" und braucht einen
   echten Browser. Ein WebKit-Renderer (iPhone-Safari) steht hier NICHT zur Verfuegung - die
   Layout-Messung ist deshalb nur in Chromium belegt, am iPhone muss sie Ondo einmal laufen lassen.
   Aufruf: node tests/t16_sonde_kammer.js   (Playwright muss installiert sein)
   Aufbau: 1. Normaler Lauf (alles muss gruen sein), 2. Gegenproben: je EINE absichtlich
   eingebaute Stoerung in einer Kopie von beta.html - die Kammer muss sie MELDEN, 3. Isolation:
   die Kammer darf in den Speicher der echten Seite nicht schreiben koennen, 4. Geheimnisse:
   weder die Kammer-Kopie noch der Bericht enthalten Schluessel oder PIN.
   =================================================================================== */
var http=require('http'), fs=require('fs'), path=require('path');
var playwright; try{ playwright=require('playwright'); }catch(e){ console.log('SKIP t16: Playwright nicht installiert'); process.exit(0); }
var ROOT=path.join(__dirname, '..');
var BETA=fs.readFileSync(path.join(ROOT, 'beta.html'), 'utf8');
var MESS=JSON.parse(fs.readFileSync(path.join(ROOT, 'ondo-control-messdaten-2026-09-17.json'), 'utf8'));
var ok=0, bad=0;
function pruefe(name, bed, detail){ if(bed){ ok++; } else { bad++; console.log('FEHL: '+name+(detail ? ' -> '+detail : '')); } }

var seiten={};   // Pfad -> html
function server(){
  return new Promise(function(res){
    var s=http.createServer(function(req, rsp){
      var u=req.url.split('?')[0]; if(u==='/') u='/beta.html';
      if(seiten[u]){ rsp.setHeader('content-type', 'text/html; charset=utf-8'); return rsp.end(seiten[u]); }
      fs.readFile(path.join(ROOT, u), function(e, d){
        if(e){ rsp.statusCode=404; return rsp.end('x'); }
        rsp.setHeader('content-type', u.endsWith('.json') ? 'application/json' : 'text/html; charset=utf-8'); rsp.end(d);
      });
    });
    s.listen(0, function(){ res(s); });
  });
}
async function seiteOeffnen(browser, port, pfad){
  var ctx=await browser.newContext({ viewport:{ width:375, height:700 } });
  var page=await ctx.newPage();
  await page.route('**/raw.githubusercontent.com/**', function(r){
    var m=/espn-ergebnisse\/(\d{4}-\d{2})\.json/.exec(r.request().url());
    var f=m && path.join(ROOT, 'daten/espn-ergebnisse', m[1]+'.json');
    if(f && fs.existsSync(f)) return r.fulfill({ status:200, contentType:'application/json', headers:{ 'access-control-allow-origin':'*' }, body:fs.readFileSync(f) });
    r.fulfill({ status:404, headers:{ 'access-control-allow-origin':'*' }, body:'{}' });
  });
  await page.route('**/site.web.api.espn.com/**', function(r){ r.fulfill({ status:200, contentType:'application/json', headers:{ 'access-control-allow-origin':'*' }, body:'{"events":[]}' }); });
  await page.goto('http://localhost:'+port+pfad);
  await page.waitForTimeout(1200);
  await page.evaluate(function(m){ state.kiProtokoll=m.kiProtokoll; state.bets=[]; }, MESS);
  return page;
}
function status(erg, teil){
  var t=(erg.tests || []).filter(function(x){ return x.name.indexOf(teil)>=0; });
  return t.length ? t.map(function(x){ return x.status; }).join(',') : 'fehlt';
}

/* Gegenproben: [Name, alter Text, neuer Text, Pruefung am Ergebnis] */
var MUTATIONEN=[
  ['Laden stellt nichts her', "for(var k in d) state[k] = d[k];\n    save(); render();", "save(); render();",
    function(e){ return status(e, 'Sicherung erzeugen')==='FEHLER'; }],
  ['Export enthaelt Schluessel', "raus.ende = 'ENDE · '", "raus.leck = state.apiKey; raus.ende = 'ENDE · '",
    function(e){ return status(e, 'Messdaten-Export')==='FEHLER'; }],
  ['Finanzen-Bildschirm wirft Fehler', "function viewFinance(c){", "function viewFinance(c){ throw new Error('probe-absturz');",
    function(e){ return status(e, 'zeichnen: finanzen')==='FEHLER'; }],
  ['Archiv ohne Fehlerabfang', "daten/espn-ergebnisse/'+monat+'.json')\n      .then(function(res){ return res.ok ? res.json() : { spiele:[] }; })\n      .then(function(d){ var l=Array.isArray(d.spiele) ? d.spiele : []; cache[monat]=l; return l; })\n      .catch(function(){ cache[monat]=[]; return []; });", "daten/espn-ergebnisse/'+monat+'.json')\n      .then(function(res){ return res.ok ? res.json() : { spiele:[] }; })\n      .then(function(d){ var l=Array.isArray(d.spiele) ? d.spiele : []; cache[monat]=l; return l; });",
    function(e){ return /FEHLER/.test(status(e, 'kein Netz')) || /FEHLER/.test(status(e, '503')); }],
  ['Zaehler stuft 503 falsch ein', "if(n>=500 || n===429 || n===408) return 'fehler';", "if(n===429 || n===408) return 'fehler';",
    function(e){ return status(e, 'simuliert: 503')==='FEHLER'; }],
  ['Seite zu breit (Layout)', "function viewFinance(c){", "function viewFinance(c){ return '<div style=\"width:900px;height:6px\">x</div>'+viewFinanceOrig(c); } function viewFinanceOrig(c){",
    function(e){ return e.zusammenfassung.layoutAuffaelligkeiten>0; }],
  ['Bildschirm zeigt falschen Inhalt', "if(tab===\"home\") koerper=viewHome(c);\n  else if(tab===\"wetten\") koerper=viewBets(c);\n  else if(tab===\"finanzen\") koerper=viewFinance(c);",
    "if(tab===\"home\") koerper=viewHome(c);\n  else if(tab===\"wetten\") koerper=viewBets(c);\n  else if(tab===\"finanzen\") koerper=viewBets(c);",
    function(e){ return status(e, 'zeichnen: finanzen')==='FEHLER'; }]
];

(async function(){
  var srv=await server(), port=srv.address().port;
  var browser=await playwright.chromium.launch();
  try{
    /* ---------- 1. Normaler Lauf ---------- */
    var page=await seiteOeffnen(browser, port, '/beta.html');
    var vorher=await page.evaluate(function(){ return JSON.stringify(state); });
    var erg=await page.evaluate(function(){ return sondeKammerStarten().then(function(k){ k.zusammenfassung=sondeKammerZusammenfassen(k); return k; }); });
    var nachher=await page.evaluate(function(){ return JSON.stringify(state); });
    pruefe('A1 Kammer liefert Tests', (erg.tests || []).length>=20, 'Anzahl '+(erg.tests || []).length+' '+(erg.abbruch || ''));
    pruefe('A2 keine Fehler im normalen Lauf', erg.zusammenfassung.fehler===0, JSON.stringify((erg.tests || []).filter(function(t){ return t.status==='FEHLER'; })));
    pruefe('A3 zehn+ Bildschirme gezeichnet', (erg.tests || []).filter(function(t){ return /Bildschirm zeichnen/.test(t.name) && t.status==='ok'; }).length>=11);
    pruefe('A4 alle fuenf Netzfehler getestet', (erg.tests || []).filter(function(t){ return /Netzfehler simuliert/.test(t.name) && t.status==='ok'; }).length===5);
    pruefe('A5 Sicherung hin und zurueck', status(erg, 'Sicherung erzeugen')==='ok');
    pruefe('A6 ESPN-Archiv mit echtem Spiel', status(erg, 'ESPN-Archiv')==='ok');
    pruefe('A7 Layout ohne Auffaelligkeit', erg.zusammenfassung.layoutAuffaelligkeiten===0, JSON.stringify(erg.layout).slice(0, 400));
    pruefe('A8 Kammer-iframe wieder entfernt', (await page.evaluate(function(){ return document.querySelectorAll('iframe').length; }))===0);
    pruefe('A9 echter Zustand unveraendert', vorher===nachher);
    pruefe('A10 Stichprobe gekuerzt', erg.stichprobe && erg.stichprobe.eintraege<=60, JSON.stringify(erg.stichprobe));
    pruefe('A11 Datumsfelder wurden gemessen', (erg.layout || []).some(function(l){ return (l.datumsfelder || []).length>0; }));

    /* ---------- 2. Geheimnisse ---------- */
    var geh=await page.evaluate(function(){
      state.apiKey='sk-ant-GEHEIMTESTSCHLUESSEL-1234567890';
      state.geminiKey='AIzaSyGEHEIMGEMINI-ABCDEFGHIJKLMNOP';
      state.oddsKey='ODDSGEHEIM1234567890';
      state.apiFootballKey='APIFOOTBALLGEHEIM123456';
      state.footballDataKey='FDGEHEIM1234567890ABC';
      state.pin='PINGEHEIM9876';
      var p=JSON.stringify(sondeProbeZustand());
      var alle=[state.apiKey, state.geminiKey, state.oddsKey, state.apiFootballKey, state.footballDataKey, state.pin];
      var inProbe=alle.filter(function(g){ return p.indexOf(g)>=0; }).length;
      return sondeBerichtBauen().then(function(b){
        var bt=JSON.stringify(b);
        var inBericht=alle.filter(function(g){ return bt.indexOf(g)>=0; }).length;
        return { inProbe:inProbe, inBericht:inBericht, sperre:sondeGeheimFund(bt, alle), sperreSchaerft:sondeGeheimFund('x '+state.geminiKey+' y', alle), laenge:bt.length, teile:Object.keys(b.parts).length };
      });
    });
    pruefe('B1 Kammer-Kopie ohne Schluessel und PIN', geh.inProbe===0, 'gefunden '+geh.inProbe);
    pruefe('B2 Bericht ohne Schluessel und PIN', geh.inBericht===0, 'gefunden '+geh.inBericht);
    pruefe('B3 Sperre meldet im Bericht nichts', geh.sperre===false);
    pruefe('B4 Sperre schlaegt bei Schluessel an', geh.sperreSchaerft===true);
    pruefe('B5 hoechstens 12 Teile', geh.teile<=12, 'Teile '+geh.teile);
    await page.context().close();

    /* ---------- 3. Gegenproben ---------- */
    for(var i=0; i<MUTATIONEN.length; i++){
      var m=MUTATIONEN[i];
      var n=BETA.split(m[1]).length-1;
      pruefe('C'+(i+1)+' Stelle fuer Gegenprobe "'+m[0]+'" genau einmal vorhanden', n===1, 'Treffer '+n);
      if(n!==1) continue;
      seiten['/mut'+i+'.html']=BETA.replace(m[1], function(){ return m[2]; });
      var p2=await seiteOeffnen(browser, port, '/mut'+i+'.html');
      var e2=await p2.evaluate(function(){ return sondeKammerStarten().then(function(k){ k.zusammenfassung=sondeKammerZusammenfassen(k); return k; }); });
      pruefe('C'+(i+1)+' Gegenprobe gemeldet: '+m[0], m[3](e2), JSON.stringify((e2.tests || []).filter(function(t){ return t.status!=='ok'; })).slice(0, 300)+' '+(e2.abbruch || ''));
      await p2.context().close();
    }

    /* ---------- 4. Isolation: die Kammer darf den Speicher der echten Seite nicht beschreiben ---------- */
    seiten['/leck.html']=BETA.replace("var state = {",
      "if(window.parent!==window){ try{ localStorage.setItem('SONDE_LECK','1'); }catch(e){} try{ indexedDB.open('sonde-leck'); }catch(e){} try{ document.cookie='sonde_leck=1'; }catch(e){} }\nvar state = {");
    var p3=await seiteOeffnen(browser, port, '/leck.html');
    await p3.evaluate(function(){ return sondeKammerStarten(); });
    var leck=await p3.evaluate(async function(){
      var dbs=(indexedDB.databases ? await indexedDB.databases() : []).map(function(d){ return d.name; });
      return { ls:localStorage.getItem('SONDE_LECK'), idb:dbs.indexOf('sonde-leck')>=0, cookie:document.cookie.indexOf('sonde_leck')>=0 };
    });
    pruefe('D1 Kammer schreibt nicht in localStorage der echten Seite', leck.ls===null);
    pruefe('D2 Kammer legt keine IndexedDB der echten Seite an', leck.idb===false);
    pruefe('D3 Kammer setzt keinen Cookie der echten Seite', leck.cookie===false);
    /* Gegenprobe zur Gegenprobe: derselbe Schreibversuch OHNE Sandbox wuerde durchkommen */
    var p4=await seiteOeffnen(browser, port, '/leck.html');
    await p4.evaluate(function(){ try{ localStorage.setItem('SONDE_LECK','1'); }catch(e){} });
    pruefe('D4 Gegenprobe: ohne Kammer waere Schreiben moeglich', (await p4.evaluate(function(){ return localStorage.getItem('SONDE_LECK'); }))==='1');
    await p3.context().close(); await p4.context().close();

  }finally{
    await browser.close(); srv.close();
  }
  console.log('t16 Vollsonde/Probekammer: '+ok+' bestanden, '+bad+' fehlgeschlagen');
  process.exit(bad ? 1 : 0);
})().catch(function(e){ console.log('t16 ABBRUCH', e && e.stack || e); process.exit(2); });
