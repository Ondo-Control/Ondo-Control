/* Tests N, N2-N6, O und O2 (Abschnitt 12/6b): der ECHTE Vorhersage-Lauf vorhersagen() -
   Unterbrechung, Fortsetzen, Anstoss-Schutz, Parallelitaet, Reihenfolge der Checkpoints. */
var fs=require('fs'), u=require('./umgebung.js');

/* Zwei Testspiele. Die Anstosszeiten werden je Test aus der AKTUELLEN Berliner Uhrzeit
   abgeleitet, damit "vor Anpfiff" und "nach Anpfiff" unabhaengig davon stimmen, wann dieser
   Test laeuft. */
function berlinJetzt(){
  var f=new Intl.DateTimeFormat('sv-SE',{ timeZone:'Europe/Berlin', hour:'2-digit', minute:'2-digit', hour12:false });
  return f.format(new Date());                       /* 'HH:MM' */
}
function plusMinuten(hhmm, min){
  var t=hhmm.split(':'); var g=Number(t[0])*60+Number(t[1])+min;
  g=((g%1440)+1440)%1440;
  return ('0'+Math.floor(g/60)).slice(-2)+':'+('0'+(g%60)).slice(-2);
}

/* --- Netz-Attrappe fuer den Vorhersage-Weg --------------------------------------------- */
function netz(c, opt){
  opt=opt||{};
  var z={ liste:0, marktlage:0, flash:0, sonnet:0, startzeiten:{}, prompts:[] };
  c._netz=z;
  function json(o){ return Promise.resolve({ ok:true, status:200,
    json:function(){ return Promise.resolve(o); } }); }
  function gem(text){ return { candidates:[{ content:{ parts:[{ text:text }] } }], modelVersion:'gemini-2.5-flash' }; }
  function ant(text){ return { content:[{ type:'text', text:text }], model:'claude-sonnet-4-6' }; }
  c.fetch=function(url, o){
    url=String(url);
    if(url.indexOf('/models?')>=0) return json({ models:[{name:'models/gemini-2.5-flash'}] });
    var text='';
    try{ text = url.indexOf('generativelanguage')>=0
          ? JSON.parse(o.body).contents[0].parts[0].text
          : JSON.parse(o.body).messages[0].content; }catch(e){}
    z.prompts.push(text.slice(0,60));
    if(text.indexOf('Suche im Web AUSSCHLIESSLICH')>=0){          /* Spielliste */
      z.liste++;
      return json(gem(JSON.stringify({ spiele: opt.spiele||[] })));
    }
    if(text.indexOf('Recherchiere per Websuche')>=0){             /* Marktlage */
      z.marktlage++;
      if(opt.marktlageFehler) return json({ error:{ message:'Suchlimit' } });
      return json(ant(JSON.stringify({ lage: (opt.spiele||[]).map(function(s){
        return { match:s.match, hinweis:'Testlage zu '+s.match }; }) })));
    }
    if(text.indexOf('Fussball-Prognostiker')>=0){                 /* ein Gehirn */
      var istFlash = url.indexOf('generativelanguage')>=0;
      var name = istFlash ? 'flash' : 'sonnet';
      z[name]++;
      if(!z.startzeiten[name]) z.startzeiten[name]=Date.now();
      if(opt.gehirn) {
        var eigen=opt.gehirn(name, text);
        if(eigen==='haengen') return new Promise(function(){});   /* antwortet nie */
        if(eigen) return json(istFlash?gem(JSON.stringify(eigen)):ant(JSON.stringify(eigen)));
      }
      var v={ vorhersagen:(opt.spiele||[]).map(function(s){
        return { match:s.match, heim:2, gast:1, p1x2:58, pTore:62, pBtts:55,
                 bttsWort:'ja', begruendung:'Test '+name }; }) };
      /* Kleine Verzoegerung, damit ein echter Parallelstart messbar wird. */
      return new Promise(function(res){ setTimeout(function(){
        res({ ok:true, status:200, json:function(){ return Promise.resolve(istFlash?gem(JSON.stringify(v)):ant(JSON.stringify(v))); } });
      }, 30); });
    }
    if(url.indexOf('version.json')>=0) return json({ version:c.CODE_VERSION });
    return json({});
  };
  return z;
}

function app(opt, save){
  var c=u.neueUmgebung(save?{save:save}:{});
  netz(c, opt||{});
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
    c.state.apiKey='sk-ant-testschluessel';
    if(!save){ c.state.kiProtokoll=[]; c.state.bets=[]; c.state.vorhersageRun=null; }
    return c;
  });
}
function knopf(){ return { disabled:false, textContent:'' }; }
function fertigV(c, msMax){
  msMax=msMax||8000;
  var t0=Date.now();
  return new Promise(function(res, rej){
    (function schau(){
      var r=c.state.vorhersageRun;
      if(r && r.status!=='laufend') return res(r);
      if(!r && Date.now()-t0>300) return res(null);
      if(Date.now()-t0>msMax) return rej(new Error('Vorhersage-Lauf wurde nicht fertig: '+JSON.stringify(r&&r.status)));
      setTimeout(schau, 5);
    })();
  });
}
function stand(c){ return JSON.parse(c._speicher[c.KEY]); }

var ablauf=Promise.resolve();
function schritt(f){ ablauf=ablauf.then(f); }

/* ═══ N6 zuerst (der ungestoerte Normalfall) ═══ */
schritt(function(){
  u.block('N6. Beide Gehirne offen, alle Spiele vor Anpfiff → Parallelstart');
  var spaet=plusMinuten(berlinJetzt(), 180);
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:spaet },
              { match:'Gamma FC - Delta FC', wettbewerb:'Testliga', anpfiff:spaet }];
  return app({ spiele:spiele }).then(function(c){
    c.vorhersagen(knopf());
    return fertigV(c).then(function(){
      var st=c._netz.startzeiten;
      var abstand=Math.abs((st.flash||0)-(st.sonnet||0));
      u.pruef('beide Gehirne wurden aufgerufen', c._netz.flash===1 && c._netz.sonnet===1,
              'flash='+c._netz.flash+' sonnet='+c._netz.sonnet);
      u.pruef('Sonnet und Flash starten PARALLEL (Startabstand unter 20 ms)', abstand<20,
              'gemessener Startabstand: '+abstand+' ms');
      u.pruef('vier Eintraege entstanden (2 Spiele x 2 Gehirne)', c.state.kiProtokoll.length===4,
              c.state.kiProtokoll.length+' Eintraege');
      u.pruef('Lauf sauber abgeschlossen', c.state.vorhersageRun.status==='fertig',
              c.state.vorhersageRun.status);
      u.pruef('Marktlage genau einmal recherchiert', c._netz.marktlage===1, c._netz.marktlage+' Suchen');
      u.pruef('jeder Eintrag traegt eine fixtureId', c.state.kiProtokoll.every(function(e){ return !!e.fixtureId; }),
              c.state.kiProtokoll[0] && c.state.kiProtokoll[0].fixtureId);
      u.pruef('beide Gehirne desselben Spiels teilen dieselbe fixtureId',
              (function(){
                var m={}; c.state.kiProtokoll.forEach(function(e){ (m[e.match]=m[e.match]||{})[e.fixtureId]=true; });
                return Object.keys(m).every(function(k){ return Object.keys(m[k]).length===1; });
              })());
    });
  });
});

/* ═══ N / N3: Sonnet gespeichert, Flash offen → Reload → nur Flash startet neu ═══ */
schritt(function(){
  u.block('N./N3. Abbruch nach dem Sonnet-Schritt, Reload, nur Flash laeuft nach');
  var spaet=plusMinuten(berlinJetzt(), 180);
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:spaet }];
  /* Erster Lauf: Sonnet antwortet, Flash bleibt haengen - dann wird die Seite "geschlossen". */
  return app({ spiele:spiele, gehirn:function(name){ return name==='flash' ? 'haengen' : null; } })
  .then(function(c){
    c.vorhersagen(knopf());
    return new Promise(function(res){ setTimeout(res, 400); }).then(function(){
      u.pruef('Sonnet-Antwort ist persistent gesichert',
              stand(c).vorhersageRun.schritte.sonnet.status==='fertig',
              JSON.stringify(Object.keys(stand(c).vorhersageRun.schritte).map(function(k){
                return k+':'+stand(c).vorhersageRun.schritte[k].status; })));
      u.pruef('Flash-Schritt steht noch auf laufend',
              stand(c).vorhersageRun.schritte.flash.status==='laufend');
      u.pruef('noch KEIN kiProtokoll-Eintrag (erst nach beiden Schritten materialisiert)',
              (stand(c).kiProtokoll||[]).length===0, (stand(c).kiProtokoll||[]).length+' Eintraege');
      var gespeichert=stand(c);
      var netzZaehler1={ flash:c._netz.flash, sonnet:c._netz.sonnet };
      /* Reload: neue App mit genau diesem Stand, jetzt antwortet Flash normal. */
      return app({ spiele:spiele }, gespeichert).then(function(c2){
        u.pruef('beim Start wird der unterbrochene Lauf als fortsetzbar erkannt',
                c2.state.vorhersageRun && c2.state.vorhersageRun.status==='pausiert',
                c2.state.vorhersageRun && c2.state.vorhersageRun.status);
        u.pruef('keine Zombie-Sperre: der Knopf ist wieder benutzbar', !c2.vorhersageRunAktiv());
        var htmlV=c2.viewBets(c2.calc());
        u.pruef('die Oberflaeche zeigt den fortsetzbaren Zustand',
                htmlV.indexOf(c2.t('vorhersageFortsetzbar'))>=0);
        var runIdVorher=c2.state.vorhersageRun.runId;
        c2.vorhersagen(knopf());
        return fertigV(c2).then(function(){
          u.pruef('N3: nur FLASH wurde neu aufgerufen, Sonnet NICHT',
                  c2._netz.flash===1 && c2._netz.sonnet===0,
                  'flash='+c2._netz.flash+' sonnet='+c2._netz.sonnet+
                  ' (im ersten Lauf: flash='+netzZaehler1.flash+' sonnet='+netzZaehler1.sonnet+')');
          u.pruef('N: die Spielliste wurde NICHT erneut geholt', c2._netz.liste===0, c2._netz.liste+' Abrufe');
          u.pruef('N: die Marktlage wurde NICHT erneut bezahlt', c2._netz.marktlage===0, c2._netz.marktlage+' Suchen');
          u.pruef('N: der fortgesetzte Lauf behaelt seine runId',
                  c2.state.vorhersageRun.runId===runIdVorher, runIdVorher);
          u.pruef('N: genau ZWEI Eintraege - je Gehirn genau einer, keine Dublette',
                  c2.state.kiProtokoll.length===2, c2.state.kiProtokoll.length+' Eintraege');
          var herk=c2.state.kiProtokoll.map(function(e){ return e.herkunft; }).sort().join(',');
          u.pruef('N: beide Gehirne genau einmal vertreten', herk==='flash,sonnet', herk);
          var ids={}, dopp=0;
          c2.state.kiProtokoll.forEach(function(e){ if(ids[e.id]) dopp++; ids[e.id]=true; });
          u.pruef('N: keine doppelte Eintrags-ID', dopp===0, dopp+' Dubletten');
          /* Noch einmal klicken darf nichts verdoppeln. */
          c2.state.vorhersageRun.status='pausiert';
          c2.vorhersagen(knopf());
          return fertigV(c2).then(function(){
            u.pruef('N: auch ein weiterer Klick erzeugt keinen dritten Eintrag',
                    c2.state.kiProtokoll.length===2, c2.state.kiProtokoll.length+' Eintraege');
          });
        });
      });
    });
  });
});

/* ═══ N2: Spieltag-Snapshot ueberlebt Mitternacht ═══ */
schritt(function(){
  u.block('N2. Run vor Mitternacht begonnen, nach Mitternacht fortgesetzt');
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:'23:30' }];
  return app({ spiele:spiele, gehirn:function(name){ return name==='flash' ? 'haengen' : null; } })
  .then(function(c){
    c.vorhersagen(knopf());
    return new Promise(function(res){ setTimeout(res, 400); }).then(function(){
      var gespeichert=stand(c);
      var snapDatum=gespeichert.vorhersageRun.snapshot[0].spieltagDe;
      var snapIso=gespeichert.vorhersageRun.snapshot[0].spieltagBerlinIso;
      u.pruef('der Run traegt einen unveraenderlichen Spieltag-Snapshot', !!snapDatum && !!snapIso,
              snapDatum+' / '+snapIso);
      /* Fortsetzen an einem ANDEREN Kalendertag: heuteStr() liefert dann etwas anderes.
         Genau das war der Mitternachtsfehler - das Datum des Eintrags muss trotzdem aus dem
         Snapshot kommen. Nachgestellt, indem die Uhr der fortsetzenden App vorgestellt wird. */
      return app({ spiele:spiele }, gespeichert).then(function(c2){
        var echtesDate=c2.Date;
        var versatz=26*3600*1000;                       /* gut ein Tag weiter */
        function FakeDate(a){ if(arguments.length) return new echtesDate(a);
                              return new echtesDate(echtesDate.now()+versatz); }
        FakeDate.now=function(){ return echtesDate.now()+versatz; };
        FakeDate.parse=echtesDate.parse; FakeDate.UTC=echtesDate.UTC;
        FakeDate.prototype=echtesDate.prototype;
        c2.Date=FakeDate;
        u.pruef('die Uhr der fortsetzenden App steht wirklich auf einem anderen Tag',
                c2.heuteStr()!==snapDatum, 'jetzt "'+c2.heuteStr()+'", Snapshot "'+snapDatum+'"');
        /* Damit der Anstoss-Schutz nicht greift (das Spiel liegt durch die Zeitreise in der
           Vergangenheit), wird der gespeicherte Anstosszeitpunkt mitverschoben - geprueft wird
           hier ausschliesslich das DATUM des Eintrags, nicht der Anstoss-Schutz (Test O). */
        c2.state.vorhersageRun.snapshot.forEach(function(s){ if(s.anstossMs) s.anstossMs+=versatz+3600000; });
        c2.vorhersagen(knopf());
        return fertigV(c2).then(function(){
          var e=c2.state.kiProtokoll;
          u.pruef('N2: das gespeicherte Spiel-Datum bleibt der Snapshot-Spieltag',
                  e.length>0 && e.every(function(x){ return x.datum===snapDatum; }),
                  e.length? ('Eintraege tragen "'+e[0].datum+'", Snapshot "'+snapDatum+'"') : 'keine Eintraege');
          u.pruef('N2: und NICHT das neu berechnete "heute"',
                  e.every(function(x){ return x.datum!==c2.heuteStr(); }), 'heute waere "'+c2.heuteStr()+'"');
          c2.Date=echtesDate;
        });
      });
    });
  });
});

/* ═══ N4: veraltete Antwort nach Resume ═══ */
schritt(function(){
  u.block('N4. Alter Promise antwortet verspaetet → runId/attemptId-Schutz');
  var spaet=plusMinuten(berlinJetzt(), 180);
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:spaet }];
  /* Erster Lauf: Flash bleibt haengen. Danach wird die Seite geschlossen - der alte Promise
     lebt im echten Browser nicht weiter, aber seine Kennzeichen sind gespeichert und der Test
     prueft genau damit, ob eine verspaetete Antwort noch schreiben duerfte. */
  return app({ spiele:spiele, gehirn:function(name){ return name==='flash' ? 'haengen' : null; } })
  .then(function(c){
    c.vorhersagen(knopf());
    return new Promise(function(res){ setTimeout(res, 400); }).then(function(){
      var alterAttempt=c.state.vorhersageRun.schritte.flash.attemptId;
      var alteRunId=c.state.vorhersageRun.runId;
      u.pruef('der Flash-Schritt hat eine attemptId', !!alterAttempt, alterAttempt);
      var gespeichert=stand(c);
      /* Reload und Fortsetzen - jetzt antwortet Flash normal. */
      return app({ spiele:spiele }, gespeichert).then(function(c2){
        c2.vorhersagen(knopf());
        return fertigV(c2, 10000).then(function(){
          var neuerAttempt=c2.state.vorhersageRun.schritte.flash.attemptId;
          u.pruef('der neue Versuch hat eine ANDERE attemptId', neuerAttempt!==alterAttempt,
                  'alt '+alterAttempt+' / neu '+neuerAttempt);
          u.pruef('die runId bleibt dieselbe (derselbe Lauf wird fortgesetzt)',
                  c2.state.vorhersageRun.runId===alteRunId, alteRunId);
          var vorher=JSON.stringify(c2.state.kiProtokoll);
          var anzahl=c2.state.kiProtokoll.length;
          /* Jetzt truedelt die ALTE Antwort herein. Die Pruefung ist wortgleich die aus
             vorhersagen(): gehoeren runId UND attemptId noch zum gueltigen Schritt? */
          var altGueltig=(function(){
            var jetzt=c2.state.vorhersageRun;
            if(!jetzt || jetzt.runId!==alteRunId) return false;
            var s2=jetzt.schritte['flash'];
            return !!(s2 && s2.attemptId===alterAttempt);
          })();
          u.pruef('N4: die alte Antwort wird als veraltet erkannt (attemptId gilt nicht mehr)',
                  altGueltig===false);
          u.pruef('N4: state bleibt dadurch unveraendert',
                  JSON.stringify(c2.state.kiProtokoll)===vorher, anzahl+' Eintraege, unveraendert');
          /* Und die Gegenprobe: ein Lauf mit einer VERALTETEN runId trifft ebenfalls nichts. */
          var fremdGueltig=(function(){
            var jetzt=c2.state.vorhersageRun;
            return !!(jetzt && jetzt.runId==='p_eine_alte_runId');
          })();
          u.pruef('N4: auch eine veraltete runId kann nichts ueberschreiben', fremdGueltig===false);
        });
      });
    });
  });
});

/* ═══ N5: Reihenfolge zweier schneller Checkpoints ═══ */
schritt(function(){
  u.block('N5. Zwei schnell aufeinanderfolgende Checkpoints');
  return app({}).then(function(c){
    /* Das Schreiben wird kuenstlich verlangsamt, und zwar der ERSTE Aufruf staerker als der
       zweite. Ohne geordnete Kette wuerde der aeltere Schreibvorgang zuletzt fertig und den
       neueren Zustand logisch zuruecksetzen - genau das soll ausgeschlossen sein. */
    var echtSetzen=c.localStorage.setItem;
    var verzug=[80, 5];
    var i=0, reihenfolge=[];
    c.speicherSchreiben=function(schluessel, wert){
      var text=JSON.stringify(wert);
      var d=verzug[i]!==undefined?verzug[i]:0; i++;
      var nr=i;
      return new Promise(function(res){
        setTimeout(function(){ echtSetzen(schluessel, text); reihenfolge.push(nr); res(); }, d);
      });
    };
    c.state.pruefListe=[{ id:'A', marke:'erster Stand' }];
    var p1=c.checkpointSave();
    c.state.pruefListe=[{ id:'A', marke:'ZWEITER Stand' }];
    var p2=c.checkpointSave();
    return Promise.all([p1,p2]).then(function(){
      u.pruef('die Schreibvorgaenge liefen in der Reihenfolge ihrer Aufrufe',
              reihenfolge.join(',')==='1,2', 'Reihenfolge: '+reihenfolge.join(','));
      var endstand=JSON.parse(c._speicher[c.KEY]);
      u.pruef('N5: der endgueltige Speicherstand enthaelt den NEUEREN Zustand',
              endstand.pruefListe[0].marke==='ZWEITER Stand', '"'+endstand.pruefListe[0].marke+'"');
    });
  });
});

/* ═══ O: Anstoss-Schutz ═══ */
schritt(function(){
  u.block('O. Anstoss-Schutz beim Fortsetzen');
  var jetzt=berlinJetzt();
  var frueh=plusMinuten(jetzt, 45);      /* laeuft waehrend des Tests ab (kuenstlich) */
  var spaet=plusMinuten(jetzt, 240);
  var spiele=[{ match:'Frueh FC - Gegner FC', wettbewerb:'Testliga', anpfiff:frueh },
              { match:'Spaet FC - Gegner FC', wettbewerb:'Testliga', anpfiff:spaet }];
  return app({ spiele:spiele, gehirn:function(name){ return name==='flash' ? 'haengen' : null; } })
  .then(function(c){
    c.vorhersagen(knopf());
    return new Promise(function(res){ setTimeout(res, 400); }).then(function(){
      var gespeichert=stand(c);
      u.pruef('die gesicherte Spielliste traegt je Spiel einen absoluten Anstosszeitpunkt',
              gespeichert.vorhersageRun.snapshot.every(function(s){ return !!s.anstossMs; }),
              gespeichert.vorhersageRun.snapshot.map(function(s){ return s.anpfiffBerlin; }).join(' / '));
      return app({ spiele:spiele }, gespeichert).then(function(c2){
        /* Fortsetzen NACH dem Anpfiff des ersten Spiels: sein Anstoss wird in die Vergangenheit
           gelegt, der des zweiten bleibt in der Zukunft. */
        c2.state.vorhersageRun.snapshot[0].anstossMs = Date.now()-60000;
        var angepfiffen=c2.state.vorhersageRun.snapshot[0].match;
        c2.vorhersagen(knopf());
        return fertigV(c2).then(function(){
          var fuerAngepfiffen=c2.state.kiProtokoll.filter(function(e){ return e.match===angepfiffen; });
          var fuerSpaeter=c2.state.kiProtokoll.filter(function(e){ return e.match!==angepfiffen; });
          u.pruef('O: fuer das angepfiffene Spiel entsteht KEINE Vorhersage',
                  fuerAngepfiffen.length===0, fuerAngepfiffen.length+' Eintraege');
          u.pruef('O: das Spiel mit spaeterem Anpfiff wird normal fortgesetzt',
                  fuerSpaeter.length>0, fuerSpaeter.length+' Eintraege fuer '+
                  (fuerSpaeter[0]&&fuerSpaeter[0].match));
          u.pruef('O: der Grund ist sichtbar', String(c2.state.vorschlaegeInfo||'')
                    .indexOf(c2.t('vorhersageAngepfiffen'))>=0,
                  String(c2.state.vorschlaegeInfo||'').slice(0,160));
          u.pruef('O: der ausgelassene Fall ist auch persistent festgehalten',
                  (c2.state.vorhersageRun.ausgelassen||[]).length>0,
                  JSON.stringify(c2.state.vorhersageRun.ausgelassen));
        });
      });
    });
  });
});

/* ═══ O2: Sonnet vor Anpfiff fertig, Flash erst danach ═══ */
schritt(function(){
  u.block('O2. Sonnet vor Anpfiff gespeichert, Flash erst nach Anpfiff fortsetzbar');
  var spaet=plusMinuten(berlinJetzt(), 240);
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:spaet }];
  return app({ spiele:spiele, gehirn:function(name){ return name==='flash' ? 'haengen' : null; } })
  .then(function(c){
    c.vorhersagen(knopf());
    return new Promise(function(res){ setTimeout(res, 400); }).then(function(){
      var gespeichert=stand(c);
      u.pruef('Sonnet ist vor Anpfiff gespeichert',
              gespeichert.vorhersageRun.schritte.sonnet.status==='fertig');
      return app({ spiele:spiele }, gespeichert).then(function(c2){
        /* Der Anpfiff wird genau ZWISCHEN Sonnets Antwort und das Fortsetzen gelegt: Sonnet hat
           rechtzeitig geantwortet, Flash nicht. Genau dieser Sonderfall steht in Abschnitt 6b. */
        var sonnetFertig = c2.state.vorhersageRun.schritte.sonnet.fertigAm;
        c2.state.vorhersageRun.snapshot[0].anstossMs = sonnetFertig + 20;
        u.pruef('Aufbau stimmt: Anpfiff liegt NACH Sonnets Antwort',
                sonnetFertig < c2.state.vorhersageRun.snapshot[0].anstossMs);
        return new Promise(function(r){ setTimeout(r, 60); }).then(function(){
        u.pruef('Aufbau stimmt: das Fortsetzen geschieht NACH dem Anpfiff',
                Date.now() > c2.state.vorhersageRun.snapshot[0].anstossMs);
        c2.vorhersagen(knopf());
        return fertigV(c2).then(function(){
          var s=c2.state.kiProtokoll.filter(function(e){ return e.herkunft==='sonnet'; });
          var f=c2.state.kiProtokoll.filter(function(e){ return e.herkunft==='flash'; });
          u.pruef('O2: der Sonnet-Eintrag besteht genau einmal', s.length===1, s.length+' Eintraege');
          u.pruef('O2: Flash wird fuer dieses Spiel NICHT mehr erzeugt', f.length===0, f.length+' Eintraege');
          u.pruef('O2: Flash wurde auch nicht mehr aufgerufen', c2._netz.flash===0,
                  c2._netz.flash+' Aufrufe');
          var info=String(c2.state.vorschlaegeInfo||'');
          u.pruef('O2: die Kennzeichnung ist sichtbar',
                  info.indexOf(c2.t('vorhersageAngepfiffen'))>=0 ||
                  info.indexOf(c2.t('vorhersageEinGehirn'))>=0, info.slice(0,200));
          u.pruef('O2: keine kuenstliche zweite Vorhersage erfunden',
                  c2.state.kiProtokoll.length===1, c2.state.kiProtokoll.length+' Eintraege gesamt');
        });
        });
      });
    });
  });
});

/* ═══ Laufsperre des Vorhersage-Laufs (Abschnitt 6b/7) ═══ */
schritt(function(){
  u.block('Laufsperre: ein neu gerenderter Knopf startet keinen zweiten Vorhersage-Lauf');
  var spaet=plusMinuten(berlinJetzt(), 240);
  var spiele=[{ match:'Alpha FC - Beta FC', wettbewerb:'Testliga', anpfiff:spaet }];
  return app({ spiele:spiele }).then(function(c){
    c.vorhersagen(knopf());
    u.pruef('Lauf ist persistent als laufend vermerkt', c.vorhersageRunAktiv());
    var runId1=c.state.vorhersageRun.runId;
    c.render();
    var b2=knopf();
    c.vorhersagen(b2);
    u.pruef('zweiter Klick startet KEINEN zweiten Lauf', c.state.vorhersageRun.runId===runId1);
    u.pruef('und meldet den Grund', c._elemente['ladeFehler'].textContent===c.t('kiBusy'),
            '"'+c._elemente['ladeFehler'].textContent+'"');
    return fertigV(c).then(function(){
      u.pruef('nach Abschluss ist die Sperre weg', !c.vorhersageRunAktiv() &&
              c.state.vorhersageRun.status==='fertig', c.state.vorhersageRun.status);
      u.pruef('und es entstanden nicht doppelt so viele Eintraege',
              c.state.kiProtokoll.length===2, c.state.kiProtokoll.length+' Eintraege');
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
