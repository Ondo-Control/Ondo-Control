/* Ausnahmespiele Schritt 1 + Einsatz zurueck (v19.22.0).
   Testet die ECHTEN Funktionen aus beta.html ueber tests/umgebung.js. */
var u=require('./umgebung.js');

function json(o){ return Promise.resolve({ ok:true, status:200,
  json:function(){ return Promise.resolve(o); },
  text:function(){ return Promise.resolve(JSON.stringify(o)); } }); }
function leerKiGemini(){ return { candidates:[{content:{parts:[{text:'{"ergebnisse":[]}' }]}}], modelVersion:'gemini-2.5-flash' }; }
function erg(id, verlaufStatus, datum){
  return { id:id, status:'fertig', verlaufStatus:verlaufStatus,
    verlaufGrund:verlaufStatus==='normal_belegt'?'Quelle belegt normalen Abschluss':'Testbeleg '+verlaufStatus,
    format:'2x45', halbzeit:'1:0', heim:2, gast:1,
    verlaengerungGespielt:'nein', verlaengerung:'', torlos:'nein',
    datum:datum||'12.09.2026', wettbewerb:'Testliga',
    quelle:'https://www.kicker.de/testspiel' };
}
function geminiAntwort(r){ return { candidates:[{content:{parts:[{text:JSON.stringify({ergebnisse:[r]})}]}}], modelVersion:'gemini-2.5-flash' }; }
function sonnetAntwort(r){ return { content:[{type:'text',text:JSON.stringify({ergebnisse:[r]})}] }; }

function netz(c,opt){
  opt=opt||{}; var z={espnArchiv:0,espnLive:0,fd:0,openliga:0,gemini:0,sonnet:0,andere:0}; c._netz=z;
  c.fetch=function(url,o){
    url=String(url);
    if(url.indexOf('daten/espn-ergebnisse/')>=0){ z.espnArchiv++; return json(opt.espnArchiv||{spiele:[]}); }
    if(url.indexOf('daten/schiri-ergebnisse/')>=0){ z.fd++; return json(opt.fdArchiv||{spiele:[]}); }
    if(url.indexOf('site.web.api.espn.com')>=0){ z.espnLive++; return json(opt.espnLive||{events:[]}); }
    if(url.indexOf('api.openligadb.de')>=0){ z.openliga++; return json(opt.openliga||[]); }
    if(url.indexOf('generativelanguage')>=0){
      if(url.indexOf('/models?')>=0) return json({models:[{name:'models/gemini-2.5-flash'}]});
      z.gemini++; return json(opt.gemini?opt.gemini(o,z.gemini):leerKiGemini());
    }
    if(url.indexOf('api.anthropic.com')>=0){
      z.sonnet++; return json(opt.sonnet?opt.sonnet(o,z.sonnet):{content:[{type:'text',text:'{"ergebnisse":[]}'}]});
    }
    if(url.indexOf('version.json')>=0) return json({version:c.CODE_VERSION});
    z.andere++; return Promise.reject(new Error('unerwarteter Abruf '+url));
  };
  return z;
}
function basisEintrag(extra){
  var e={id:'e1',aera:'v19',datum:'12.9.2026',match:'Testheim FC - Testgast FC',
    wettbewerb:'Testliga',anpfiff:'20:00',herkunft:'sonnet',heim:1,gast:1,status:'offen',
    maerkte:[{typ:'1x2',code:'remis',label:'Remis',p:55,status:'offen'}],
    ergebnisHeim:null,ergebnisGast:null};
  Object.keys(extra||{}).forEach(function(k){e[k]=extra[k];}); return e;
}
function app(opt){
  var c=u.neueUmgebung(); netz(c,opt||{});
  return c.bereit.then(function(){
    c.state.geminiKey='AIza-testschluessel-lang-genug-fuer-die-pruefung';
    c.state.apiKey='sk-ant-testschluessel';
    c.state.kiProtokoll=[basisEintrag()];
    c.state.bets=[]; c.state.pruefListe=[]; c.state.pruefBilanz=null; c.state.pruefJobs={}; c.state.pruefRun=null;
    return c;
  });
}
function knopf(){ return {disabled:false,textContent:''}; }
function fertig(c,msMax){
  msMax=msMax||8000; var t0=Date.now();
  return new Promise(function(res,rej){
    (function schau(){
      var r=c.state.pruefRun;
      if(r && r.status!=='laufend') return res(r);
      if(!r && Date.now()-t0>250) return res(null);
      if(Date.now()-t0>msMax) return rej(new Error('Prueflauf haengt'));
      setTimeout(schau,5);
    })();
  });
}
function fakeNow(c,ms){
  var R=c.Date;
  function F(a,b,d,h,m,sec,ms2){
    if(!(this instanceof F)) return R.apply(null,arguments);
    if(arguments.length===0) return new R(ms);
    if(arguments.length===1) return new R(a);
    return new R(a,b,d,h,m,sec,ms2);
  }
  F.now=function(){return ms;}; F.parse=R.parse; F.UTC=R.UTC; F.prototype=R.prototype; c.Date=F;
  return function(){c.Date=R;};
}
function mitFakeNow(c,ms,f){
  var rueck=fakeNow(c,ms);
  return Promise.resolve().then(f).then(function(x){ rueck(); return x; },function(e){ rueck(); throw e; });
}
function netzAbrufe(c){
  return c._netz.espnArchiv+c._netz.espnLive+c._netz.fd+c._netz.openliga+c._netz.gemini+c._netz.sonnet;
}
/* Vor Faelligkeit beendet ergebnissePruefen() synchron, BEVOR state.pruefRun angelegt wird.
   Darum gibt es im korrekten Fall kein Lauf-Ende, auf das der Test warten koennte. Wir warten
   dann 1000 ms auf ein eventuell doch asynchron gestartetes pruefRun. Das ist bewusst laenger
   als die 500-ms-Gegenprobe, in der die fehlende Schranke bereits ESPN/FD/KI-Abrufe erzeugt.
   Sobald ein Lauf auftaucht, warten wir dagegen auf dessen echtes status-Ende, nicht auf Zeit. */
function faelligkeitsLaufAbwarten(c,msMax){
  msMax=msMax||12000; var t0=Date.now(), stilleBis=t0+1000, gesehen=false;
  return new Promise(function(res,rej){
    (function schau(){
      var r=c.state.pruefRun;
      if(r){
        gesehen=true;
        if(r.status!=='laufend') return res(r);
      }else if(!gesehen && Date.now()>=stilleBis){
        return res(null);
      }
      if(Date.now()-t0>msMax) return rej(new Error('Faelligkeits-Prueflauf haengt'));
      setTimeout(schau,5);
    })();
  });
}
function archivStatus(statusTyp,completed){
  return {spiele:[{provider:'espn',providerEventId:'E1',providerCompetitionName:'Testliga',
    datum:'2026-09-12',kickoffUtc:'2026-09-12T18:00Z',heim:'Testheim FC',gast:'Testgast FC',
    torHeim:2,torGast:1,status:'FT',halbzeit:'1:0',verlaengerungGespielt:false,
    beleg:{completed:completed,statusTyp:statusTyp,competitors:[]}}]};
}
function footballDataArchiv(){
  return {spiele:[{datum:'2026-09-12',anpfiff:'20:00',wettbewerb:'Testliga',
    heim:'Testheim FC',gast:'Testgast FC',status:'FT',torHeim:2,torGast:1,
    quelle:'football-data.org',halbzeit:'1:0'}]};
}
function openligaSpiel(){
  return [{matchIsFinished:true,matchDateTimeUTC:'2026-09-12T18:00:00Z',
    team1:{teamName:'Testheim FC'},team2:{teamName:'Testgast FC'},
    matchResults:[
      {resultTypeKind:'HalfTime',pointsTeam1:1,pointsTeam2:0},
      {resultTypeKind:'After90Minutes',pointsTeam1:2,pointsTeam2:1}
    ]}];
}

var ablauf=Promise.resolve();
function schritt(f){ablauf=ablauf.then(f);}

schritt(function(){
  u.block('1-2. Faelligkeits-Schranke');
  var faellig, ohne;
  return app().then(function(c){
    faellig=c.pruefFaelligAbMs('12.9.2026','20:00');
    u.pruef('1: Anpfiff 20:00 Berlin -> faellig erst +3:30',
      faellig===Date.parse('2026-09-12T21:30:00Z'),new Date(faellig).toISOString());
    return mitFakeNow(c,faellig-60000,function(){
      c.ergebnissePruefen(knopf());
      return faelligkeitsLaufAbwarten(c).then(function(){
        u.pruef('1: eine Minute vor Faelligkeit kein Ergebnisabruf',
          netzAbrufe(c)===0,JSON.stringify(c._netz));
      });
    });
  }).then(function(){
    /* Positive Gegenprobe: Derselbe Netzaufbau MUSS nach der Schranke wirklich arbeiten. */
    return app().then(function(c){
      return mitFakeNow(c,faellig+60000,function(){
        c.ergebnissePruefen(knopf());
        return fertig(c,12000).then(function(){
          u.pruef('1+: eine Minute nach Faelligkeit findet mindestens ein Ergebnisabruf statt',
            netzAbrufe(c)>0,JSON.stringify(c._netz));
        });
      });
    });
  }).then(function(){
    return app().then(function(c){
      ohne=c.pruefFaelligAbMs('12.9.2026','');
      u.pruef('2: fehlender Anpfiff -> Spieltag 24:00 Berlin +3:30',
        ohne===Date.parse('2026-09-13T01:30:00Z'),new Date(ohne).toISOString());
      c.state.kiProtokoll[0].anpfiff='';
      return mitFakeNow(c,ohne-60000,function(){
        c.ergebnissePruefen(knopf());
        return faelligkeitsLaufAbwarten(c).then(function(){
          u.pruef('2: eine Minute vor Ersatz-Faelligkeit ebenfalls kein Ergebnisabruf',
            netzAbrufe(c)===0,JSON.stringify(c._netz));
        });
      });
    });
  }).then(function(){
    /* Dieselbe positive Gegenprobe auch fuer den Ersatz-Faelligkeitsweg ohne Anpfiff. */
    return app().then(function(c){
      c.state.kiProtokoll[0].anpfiff='';
      return mitFakeNow(c,ohne+60000,function(){
        c.ergebnissePruefen(knopf());
        return fertig(c,12000).then(function(){
          u.pruef('2+: eine Minute nach Ersatz-Faelligkeit findet mindestens ein Ergebnisabruf statt',
            netzAbrufe(c)>0,JSON.stringify(c._netz));
        });
      });
    });
  });
});

schritt(function(){
  u.block('3. ESPN-Positivliste im echten Prüflauf');
  var statusse=['STATUS_FULL_TIME','STATUS_FINAL_AET','STATUS_FINAL_PEN'];
  var k=Promise.resolve();
  statusse.forEach(function(statusTyp){
    k=k.then(function(){
      return app({espnArchiv:archivStatus(statusTyp,true)}).then(function(c){
        c.ergebnissePruefen(knopf());
        return fertig(c).then(function(){
          u.pruef(statusTyp+' completed=true ergibt Vorschlag',
            c.state.pruefListe.length===1 && !c.state.kiProtokoll[0].geparkt,
            c.state.pruefListe.length+' Vorschlag');
          u.pruef(statusTyp+' braucht keinen KI-Fallback',
            c._netz.gemini===0 && c._netz.sonnet===0,
            'g='+c._netz.gemini+' s='+c._netz.sonnet);
        });
      });
    });
  });
  return k.then(function(){
    return app().then(function(c){
      u.pruef('completed=false ist selbst bei FULL_TIME nie normal',
        !c.espnStatusNormal(false,'STATUS_FULL_TIME'));
    });
  });
});

[
  {status:'STATUS_POSTPONED',completed:false},
  {status:'STATUS_CANCELED',completed:false},
  {status:'STATUS_ABANDONED',completed:false},
  {status:'STATUS_WAS_NEU',completed:true}
].forEach(function(fall,idx){
  schritt(function(){
    u.block((idx?5:4)+'. ESPN-Ausnahme '+fall.status);
    return app({espnArchiv:archivStatus(fall.status,fall.completed)}).then(function(c){
      c.ergebnissePruefen(knopf());
      return fertig(c).then(function(){
        u.pruef('nach Faelligkeit geparkt',c.state.kiProtokoll[0].geparkt===true && c.state.kiProtokoll[0].parkGrund==='espn_status',
          JSON.stringify({geparkt:c.state.kiProtokoll[0].geparkt,grund:c.state.kiProtokoll[0].parkGrund}));
        u.pruef('kein KI-Fallback',c._netz.gemini===0 && c._netz.sonnet===0,'g='+c._netz.gemini+' s='+c._netz.sonnet);
      });
    });
  });
});

schritt(function(){
  u.block('5b. football-data-Archiv ist positiver Strukturbeleg');
  return app({fdArchiv:footballDataArchiv()}).then(function(c){
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      u.pruef('football-data-Treffer ergibt normal einen Vorschlag',
        c.state.pruefListe.length===1 && !c.state.kiProtokoll[0].geparkt,
        c.state.pruefListe.length+' Vorschlag');
      u.pruef('football-data-Treffer braucht keinen KI-Fallback',
        c._netz.gemini===0 && c._netz.sonnet===0,
        'g='+c._netz.gemini+' s='+c._netz.sonnet);
    });
  });
});

schritt(function(){
  u.block('5c. OpenLigaDB ist kein positiver Normalabschluss-Beleg');
  return app({openliga:openligaSpiel()}).then(function(c){
    c.state.kiProtokoll[0].wettbewerb='3. Liga';
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      var e=c.state.kiProtokoll[0], roh=e.refRoh||[];
      u.pruef('OpenLigaDB-Treffer parkt als verlauf_unklar',
        e.geparkt===true && e.parkGrund==='verlauf_unklar',
        JSON.stringify({geparkt:e.geparkt,grund:e.parkGrund}));
      u.pruef('OpenLigaDB startet keinen KI-Fallback',
        c._netz.gemini===0 && c._netz.sonnet===0,
        'g='+c._netz.gemini+' s='+c._netz.sonnet);
      u.pruef('OpenLigaDB-Treffer startet auch keine nachgelagerte football-data-Suche',
        c._netz.fd===0,'fd='+c._netz.fd);
      u.pruef('OpenLigaDB-Treffer und Quelleninfo bleiben als Evidence erhalten',
        roh.some(function(x){
          return x.modell==='openliga' && x.quelle==='https://www.openligadb.de/' &&
                 x.geparst && x.geparst.heim===2 && x.geparst.gast===1;
        }), JSON.stringify(roh.slice(-1)));
      /* UI-"Wieder prüfen" auf einer geparkten Log-Karte ruft logParken(...,false) auf.
         Die Quelle bleibt unverändert; deshalb muss derselbe Treffer erneut parken. */
      c.logParken('e1',false);
      var vorherOpenLiga=c._netz.openliga;
      c.ergebnissePruefen(knopf());
      return fertig(c).then(function(){
        u.pruef('"Wieder prüfen" bestätigt die bekannte Folge: derselbe OpenLigaDB-Treffer parkt erneut',
          c.state.kiProtokoll[0].geparkt===true &&
          c.state.kiProtokoll[0].parkGrund==='verlauf_unklar' &&
          c._netz.openliga>vorherOpenLiga,
          'openliga '+vorherOpenLiga+' -> '+c._netz.openliga);
        u.pruef('auch beim Wiederprüfen keine KI-Mehrkosten',
          c._netz.gemini===0 && c._netz.sonnet===0,
          'g='+c._netz.gemini+' s='+c._netz.sonnet);
      });
    });
  });
});

function kiFall(name,statusG1,statusG2,statusS,datum,erwartet){
  schritt(function(){
    u.block(name);
    return app({
      gemini:function(o,n){return geminiAntwort(erg('S0',n===1?statusG1:statusG2,datum));},
      sonnet:function(){return sonnetAntwort(erg('S0',statusS,datum));}
    }).then(function(c){
      c.ergebnissePruefen(knopf());
      return fertig(c,12000).then(function(){
        if(erwartet==='vorschlag'){
          u.pruef('Vorschlag entsteht',c.state.pruefListe.length===1 && !c.state.kiProtokoll[0].geparkt,
            c.state.pruefListe.length+' Vorschlaege');
          if(name.indexOf('6.')===0){
            var roh=c.state.kiProtokoll[0].refRoh||[];
            u.pruef('6: gespeicherte KI-Evidence trägt Verlaufstatus und Grund',
              roh.length>=3 && roh.slice(-3).every(function(x){
                return x.verlaufStatus==='normal_belegt' && !!x.verlaufGrund;
              }), roh.length+' Rohbelege');
          }
        }else{
          u.pruef('korrekt geparkt',c.state.kiProtokoll[0].geparkt===true && c.state.kiProtokoll[0].parkGrund===erwartet,
            String(c.state.kiProtokoll[0].parkGrund));
          u.pruef('kein Ergebnis uebernommen',c.state.kiProtokoll[0].ergebnisHeim===null && c.state.kiProtokoll[0].status==='offen');
        }
      });
    });
  });
}
kiFall('6. KI 3x normal_belegt','normal_belegt','normal_belegt','normal_belegt','12.09.2026','vorschlag');
kiFall('7. KI 2 normal + 1 unklar','normal_belegt','normal_belegt','unklar','12.09.2026','verlauf_unklar');
kiFall('8. KI mit einer belegten Abweichung','normal_belegt','abweichung_belegt','normal_belegt','12.09.2026','verlauf_abweichung');
kiFall('9a. Gefundenes Datum >1 Tag','normal_belegt','normal_belegt','normal_belegt','15.09.2026','datum_abweichung');
kiFall('9b. Gefundenes Datum exakt +1 Tag','normal_belegt','normal_belegt','normal_belegt','13.09.2026','vorschlag');

schritt(function(){
  u.block('10. Bewertete/geparkte Eintraege bleiben unangetastet');
  return app().then(function(c){
    c.state.kiProtokoll=[
      basisEintrag({id:'bew',status:'bewertet',ergebnisHeim:1,ergebnisGast:0,maerkte:[{code:'sieg_heim',status:'richtig'}]}),
      basisEintrag({id:'park',geparkt:true,parkGrund:'espn_status'})
    ];
    var vorher=JSON.stringify(c.state.kiProtokoll);
    c.ergebnissePruefen(knopf());
    return fertig(c).then(function(){
      u.pruef('beide Eintraege zeichengleich',JSON.stringify(c.state.kiProtokoll)===vorher);
      u.pruef('kein Netzabruf',c._netz.espnArchiv+c._netz.espnLive+c._netz.fd+c._netz.openliga+c._netz.gemini+c._netz.sonnet===0);
    });
  });
});

schritt(function(){
  u.block('11. Einsatz zurueck');
  return app().then(function(c){
    c.state.startSaldo=0; c.state.eingezahlt=100; c.state.ausgezahlt=0;
    c.state.bets=[
      {id:1,datum:'1.10.2026',match:'Gewinn',quote:2,einsatz:10,status:'gewonnen'},
      {id:2,datum:'1.10.2026',match:'Verlust',quote:2,einsatz:10,status:'verloren'},
      {id:3,datum:'1.10.2026',match:'Rueckzahlung',quote:2,einsatz:10,status:'einsatz_zurueck'},
      {id:4,datum:'1.10.2026',match:'Offen',quote:2,einsatz:10,status:'offen'}
    ];
    var x=c.calc(), l=c.lernWetten();
    u.pruef('Refund Gewinn/Verlust exakt 0',c.profit(c.state.bets[2])===0);
    u.pruef('finanziell geschlossen, aber nicht bewertet',x.done===3 && x.rated===2,'closed='+x.done+' rated='+x.rated);
    u.pruef('Trefferquote nur gewonnen+verloren',x.quoteIch===50 && x.wins===1,'quote='+x.quoteIch);
    u.pruef('lernWetten schliesst Refund aus',l.vonHand.n===2,'n='+l.vonHand.n);
    c.wtab='historie';
    var html=c.viewBets(x), p=html.indexOf('Rueckzahlung'), ausschnitt=html.slice(p,p+1200);
    u.pruef('eigene Refund-Darstellung',ausschnitt.indexOf(c.t('refund'))>=0,ausschnitt.indexOf(c.t('refund'))>=0?'sichtbar':'fehlt');
    u.pruef('Refund-Karte nicht als verloren beschriftet',ausschnitt.indexOf(c.t('lost'))<0);
  });
});

schritt(function(){
  u.block('12. Foto-Status ohne eindeutigen Ausgang');
  return app().then(function(c){
    u.pruef('unbekannter Foto-Status bleibt offen',c.wettStatusNormalisieren('unlesbar')==='offen');
    u.pruef('explizite volle Rueckzahlung wird erkannt',c.wettStatusNormalisieren('einsatz_zurueck')==='einsatz_zurueck');
  });
});

ablauf.then(function(){console.log('');process.exit(u.bilanz()?1:0);})
.catch(function(e){console.log('\n✗ ABBRUCH: '+(e&&e.stack||e));process.exit(1);});
