from pathlib import Path
import sys

root = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
def P(name): return root / name

# beta.html
p=P("beta.html"); s=p.read_text()
old="""  lebenszyklusSave(ausloeser||'pagehide',grund).catch(function(){
    lebenszyklusUngesichert=true;
    lebenszyklusUngesichertGrund=grund;
  });
}
/* Bei der Rueckkehr wird der Lauf NICHT von selbst neu gestartet. Ein fehlgeschlagener
   noetiger Lifecycle-Write bekommt jedoch genau EINEN Wiederholungsversuch im sichtbaren
   Zustand ueber den bestehenden checkpointOhneBarriere()-Pfad. Das Flag wird VORHER
   geloescht; scheitert auch diese Wiederholung, gilt der bestehende Checkpoint-Alarm. */
function seiteZurueck(){
  seiteVerlassen = false;
  lebenszyklusHideVerarbeitet=false;
  if(lebenszyklusUngesichert){
    lebenszyklusUngesichert=false;
    checkpointOhneBarriere('rueckkehr_wiederholung');
  }
  render();
}
document.addEventListener('visibilitychange', function(){
  if(document.visibilityState==='hidden') seiteAnhalten('visibilitychange'); else seiteZurueck();
});
window.addEventListener('pagehide', function(){ seiteAnhalten('pagehide'); });
window.addEventListener('pageshow', function(){ seiteZurueck(); });
"""
new="""  lebenszyklusSave(ausloeser||'pagehide',grund).catch(function(){
    lebenszyklusUngesichert=true;
    lebenszyklusUngesichertGrund=grund;
    /* v19.22.2: Der IndexedDB-Abbruch kann erst NACH der Rueckkehr auf visible gemeldet werden.
       Dann gab es den Rueckkehr-Handler bereits. In diesem Fall denselben EINMAL-Weg sofort
       nachholen; ist die Seite inzwischen wieder hidden, bleibt das Flag bis zur naechsten
       Rueckkehr stehen. */
    if(document.visibilityState==='visible') lebenszyklusWiederholen();
  });
}
/* v19.22.2: EIN gemeinsamer Wiederholungsweg fuer Rueckkehr-Handler und verspaeteten
   Lifecycle-Fehler. Das Flag ist zugleich der Einmal-Guard und wird VOR dem Versuch geloescht.
   Scheitert die Wiederholung, setzt nur der bestehende Checkpoint-Weg seinen Alarm; es wird kein
   neues Lifecycle-Flag erzeugt und damit keine Schleife gestartet. */
function lebenszyklusWiederholen(){
  if(!lebenszyklusUngesichert) return false;
  lebenszyklusUngesichert=false;
  checkpointOhneBarriere('rueckkehr_wiederholung');
  return true;
}
/* Bei der Rueckkehr wird der Lauf NICHT von selbst neu gestartet. */
function seiteZurueck(){
  seiteVerlassen = false;
  lebenszyklusHideVerarbeitet=false;
  lebenszyklusWiederholen();
  render();
}
document.addEventListener('visibilitychange', function(){
  if(document.visibilityState==='hidden') seiteAnhalten('visibilitychange'); else seiteZurueck();
});
window.addEventListener('pagehide', function(){ seiteAnhalten('pagehide'); });
/* pageshow feuert auch beim ersten Laden. Das ist keine Lifecycle-Rueckkehr und darf nicht vor
   dem asynchronen load() einen Default-State rendern. Nur echte BFCache-Wiederherstellung nutzt
   deshalb diesen Zusatzweg; normale Rueckkehr bleibt visibilitychange->visible. */
window.addEventListener('pageshow', function(e){ if(e && e.persisted) seiteZurueck(); });
"""
if old not in s: raise SystemExit("beta lifecycle target missing")
s=s.replace(old,new,1)
s=s.replace("var CODE_VERSION = 'v19.22.1';","var CODE_VERSION = 'v19.22.2';",1)
p.write_text(s)

# tests/umgebung.js
p=P("tests/umgebung.js"); s=p.read_text()
s=s.replace("var idb={ daten:{}, schreibFehler:false, oeffnenFehler:false, schreibVersuche:0, schreibFehlschlaege:0 };",
            "var idb={ daten:{}, schreibFehler:false, oeffnenFehler:false, schreibVersuche:0, schreibFehlschlaege:0, schreibVerzoegerungMs:0 };",1)
s=s.replace("function spaeter(f){ setTimeout(f, 0); }",
            "function spaeter(f){ setTimeout(f, 0); }\n  function schreibSpaeter(f){ setTimeout(f, Math.max(0,Number(idb.schreibVerzoegerungMs)||0)); }",1)
needle="""              spaeter(function(){
                if(modus==='readwrite' && plan.length){
                  idb.schreibVersuche++;
"""
repl="""              schreibSpaeter(function(){
                if(modus==='readwrite' && plan.length){
                  idb.schreibVersuche++;
"""
if needle not in s: raise SystemExit("umgebung transaction target missing")
s=s.replace(needle,repl,1)
p.write_text(s)

# tests/t11_lebenszyklus.js
p=P("tests/t11_lebenszyklus.js"); s=p.read_text()
s=s.replace("/* Backlog-Punkt 91, v19.22.1: Lifecycle-Schreibweg.",
            "/* Backlog-Punkt 91, v19.22.2: Lifecycle-Schreibweg und verspaeteter Abbruch.",1)
s=s.replace("""function fire(c, typ, sichtbarkeit){
  if(sichtbarkeit){ c.document.visibilityState=sichtbarkeit; c.document.hidden=(sichtbarkeit==='hidden'); }
  (c._protokoll.listener[typ]||[]).slice().forEach(function(f){ f({type:typ}); });
}""",
"""function fire(c, typ, sichtbarkeit, persisted){
  if(sichtbarkeit){ c.document.visibilityState=sichtbarkeit; c.document.hidden=(sichtbarkeit==='hidden'); }
  (c._protokoll.listener[typ]||[]).slice().forEach(function(f){ f({type:typ,persisted:!!persisted}); });
}""",1)
s=s.replace("fire(c,'pageshow','visible');", "fire(c,'pageshow','visible',true);")
marker="""schritt(function(){
  u.block('L5. Lifecycle-Abbruch: still, Diagnose, genau ein Recovery-Versuch');
"""
insert="""schritt(function(){
  u.block('L4b. pageshow wirkt nur bei echter BFCache-Wiederherstellung');
  var c=u.neueUmgebung(), renders=0;
  return c.bereit.then(function(){
    c.render=function(){ renders++; };
    fire(c,'pageshow','visible',false);
    return pause(0).then(function(){
      u.pruef('L4b: normales erstes pageshow loest keinen Zusatz-render aus', renders===0,renders);
      fire(c,'pageshow','visible',true);
      return pause(0);
    }).then(function(){
      u.pruef('L4b: pageshow persisted=true nutzt den Rueckkehrweg', renders===1,renders);
    });
  });
});

"""+marker
if marker not in s: raise SystemExit("t11 L5 marker missing")
s=s.replace(marker,insert,1)
s=s.replace("""    fire(c,'pagehide');
    return pause(35).then(function(){
      u.pruef('L5b: erster Lifecycle-Abbruch bleibt still'""",
            """    fire(c,'pagehide','hidden');
    return pause(35).then(function(){
      u.pruef('L5b: erster Lifecycle-Abbruch bleibt still'""",1)
marker2="""schritt(function(){
  u.block('L6. Programmstart schreibt nur bei wirklichem laufend -> pausiert');
"""
blocks="""schritt(function(){
  u.block('L5d. Realablauf: Abbruch kommt erst NACH visible -> sofort genau ein Recovery');
  var c=u.neueUmgebung(), fehlerNr=0;
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'spaet1',status:'laufend'};
    c._idb.schreibVerzoegerungMs=30;
    c._idb.schreibFehler=function(){ fehlerNr++; return fehlerNr===1; };
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    fire(c,'visibilitychange','visible');
    return pause(5).then(function(){
      u.pruef('L5d: visible kam vor dem simulierten Transaktionsabbruch', c._idb.schreibVersuche===vor,c._idb.schreibVersuche-vor);
      u.pruef('L5d: vor spaetem Abbruch ist noch kein Ungesichert-Flag gesetzt', c.lebenszyklusUngesichert===false);
      return pause(95);
    }).then(function(){
      u.pruef('L5d: spaeter Abbruch erzeugt genau einen Recovery-Write', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
      u.pruef('L5d: gemeinsamer Einmal-Guard ist danach false', c.lebenszyklusUngesichert===false);
      u.pruef('L5d: erfolgreicher Recovery bleibt ohne Alarm', c.speicherAlarm===false&&c._protokoll.alerts.length===0);
      fire(c,'pageshow','visible',true);
      return pause(45);
    }).then(function(){
      u.pruef('L5d: spaeter pageshow erzeugt keinen zweiten Recovery', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
    });
  });
});

schritt(function(){
  u.block('L5e. Verspaeteter Abbruch + scheiternder Recovery: Alarm, aber keine Schleife');
  var c=u.neueUmgebung();
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'spaet2',status:'laufend'};
    c._idb.schreibVerzoegerungMs=25;
    c._idb.schreibFehler=true;
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    fire(c,'visibilitychange','visible');
    return pause(85).then(function(){
      u.pruef('L5e: Lifecycle plus genau ein gescheiterter Recovery', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
      u.pruef('L5e: bestehender Checkpoint-Alarm erscheint genau einmal', c.speicherAlarm===true&&c._protokoll.alerts.length===1,c._protokoll.alerts.length);
      u.pruef('L5e: Flag vor Recovery geloescht, keine Schleifenmarke', c.lebenszyklusUngesichert===false);
      fire(c,'pageshow','visible',true);
      return pause(45);
    }).then(function(){
      u.pruef('L5e: pageshow nach gescheitertem Recovery startet keinen dritten Versuch', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
    });
  });
});

schritt(function(){
  u.block('L5f. Verspaeteter Abbruch waehrend neuem Hide wartet bis zur naechsten Rueckkehr');
  var c=u.neueUmgebung(), fehlerNr=0;
  return c.bereit.then(function(){
    c.state.pruefRun={runId:'spaet3',status:'laufend'};
    c._idb.schreibVerzoegerungMs=30;
    c._idb.schreibFehler=function(){ fehlerNr++; return fehlerNr===1; };
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    fire(c,'visibilitychange','visible');
    fire(c,'visibilitychange','hidden');
    return pause(45).then(function(){
      u.pruef('L5f: kein Sofort-Retry solange Seite wieder hidden ist', c._idb.schreibVersuche===vor+1,c._idb.schreibVersuche-vor);
      u.pruef('L5f: Ungesichert-Flag bleibt bis zur naechsten Rueckkehr stehen', c.lebenszyklusUngesichert===true);
      fire(c,'visibilitychange','visible');
      return pause(50);
    }).then(function(){
      u.pruef('L5f: naechste Rueckkehr startet genau einen Recovery', c._idb.schreibVersuche===vor+2,c._idb.schreibVersuche-vor);
      u.pruef('L5f: Flag danach false', c.lebenszyklusUngesichert===false);
    });
  });
});

schritt(function(){
  u.block('L5g. Entdoppelungs-Guard ist bei ausstehendem save mutationssensitiv');
  var c=u.neueUmgebung(), fertig;
  return c.bereit.then(function(){
    c.speicherSchreiben=function(){ return new Promise(function(res){ fertig=res; }); };
    c.save();
    var vor=c._idb.schreibVersuche;
    fire(c,'visibilitychange','hidden');
    fire(c,'pagehide');
    return pause(35).then(function(){
      u.pruef('L5g: save bleibt waehrend Hide+pagehide ausstehend', c.anzahlSaveAusstehend===1,c.anzahlSaveAusstehend);
      u.pruef('L5g: hidden + pagehide erzeugt trotz save_aussteht genau EINEN Lifecycle-Write', c._idb.schreibVersuche===vor+1,c._idb.schreibVersuche-vor);
      u.pruef('L5g: Lifecycle-Zaehler bestaetigt genau einen Start', c.lebenszyklusWritesGestartet===1,c.lebenszyklusWritesGestartet);
      fertig();
      return pause(0);
    });
  });
});

"""+marker2
if marker2 not in s: raise SystemExit("t11 L6 marker missing")
s=s.replace(marker2,blocks,1)
p.write_text(s)

# BACKLOG-ARCHIV.md
p=P("BACKLOG-ARCHIV.md"); s=p.read_text()
section="""

---

### Backlog-Punkt 91 — v19.22.1-Zwischenstand (9.10.2026; durch v19.22.2 korrigiert)

**Belegt (8.10.2026):** 5/5 Fehler: `quelle=checkpoint`, `phase=tx-abort`, Schreibstart 1–10 ms nach `visibilitychange→hidden`. Kette: `seiteAnhalten()` → `checkpointOhneBarriere()` → `checkpointSave()` → `speicherSchreibenKritisch()` → `idbSchreiben()` → `tx-abort`; der Altcode schrieb auf jedes `hidden`/`pagehide`. **Plausibel, unbewiesen:** WebKit Bug 202705 dokumentiert zwangsweise Abbrüche laufender IndexedDB-Transaktionen bei Prozess-Suspendierung; die Zuordnung zu diesen fünf Fällen ist nicht A/B-belegt.

**v19.22.1:** Hide schreibt nur nach `laufend→pausiert` oder bei ausstehendem `save()` und entdoppelt `visibilitychange`/`pagehide`. Eigener strikter `lebenszyklus`-Weg in derselben `speicherKette`; Fehler dort ohne Alarm/localStorage-Rückfall, bei Rückkehr ein Versuch über den bisherigen Checkpoint-Weg. Startup nur nach tatsächlichem Statuswechsel. Diagnose ergänzt Auslöser, Run-Status am Schreibstart, Schreibgrund/ausstehende Saves und RAM-Zähler. Bestehende save-/Backup-/Barriere-/Alarmsemantik blieb unverändert.

**Warum v19.22.1 nicht abgenommen wurde (Prüfer + Claude, 12.10.2026):** Der Retry hing ausschließlich daran, dass `lebenszyklusUngesichert` bereits beim Rückkehrereignis gesetzt war. In drei der fünf realen Diagnosefälle vom 8.10. kam `tx-abort` jedoch erst 37/329/331 ms **nach** `visibilitychange→visible`; dann hatte `seiteZurueck()` das noch falsche Flag gesehen und es gab keinen weiteren Auslöser. Zusätzlich bewies t11 den Hide-Guard nicht mutationssensitiv: Bei laufendem Run genügte der Statuswechsel selbst zur Entdoppelung; erst `save_aussteht` + `hidden` + `pagehide` trennt Guard vorhanden (1 Write) von Guard entfernt (2 Writes). Diese beiden Lücken werden erst mit v19.22.2 korrigiert. Punkt 91 blieb offen.
"""
if "### Backlog-Punkt 91 — v19.22.1-Zwischenstand" not in s:
    p.write_text(s.rstrip()+section+"\n")

# Backlog
p=P("Ondo-Control-Backlog.md"); s=p.read_text()
s=s.replace("**Nur offene Punkte. Gepflegt von Claude · Stand 9.10.2026, Fassung 156 · jede Idee mit Datum, Urheber und Status**",
            "**Nur offene Punkte. Gepflegt von Claude · Stand 12.10.2026, Fassung 157 · jede Idee mit Datum, Urheber und Status**",1)
old="""**91. Speicherfehler beim Backup und allgemeinen Speichern sichtbar machen** · *Fund Claude/Prüfer 27.9.2026 · Diagnose 27.9.2026 · Lifecycle-Auftrag Ondo 9.10.2026* · **Status: 🔴 OFFEN — Lifecycle-Reparatur v19.22.1 geliefert; Bewährung am iPhone steht aus**

**Belegt (8.10.2026):** 5/5 Fehler: `quelle=checkpoint`, `phase=tx-abort`, Schreibstart 1–10 ms nach `visibilitychange→hidden`. Kette: `seiteAnhalten()` → `checkpointOhneBarriere()` → `checkpointSave()` → `speicherSchreibenKritisch()` → `idbSchreiben()` → `tx-abort`; der Altcode schrieb auf jedes `hidden`/`pagehide`. **Plausibel, unbewiesen:** WebKit Bug 202705 dokumentiert zwangsweise Abbrüche laufender IndexedDB-Transaktionen bei Prozess-Suspendierung; die Zuordnung zu diesen fünf Fällen ist nicht A/B-belegt.

**v19.22.1:** Hide schreibt nur nach `laufend→pausiert` oder bei ausstehendem `save()` und entdoppelt `visibilitychange`/`pagehide`. Eigener strikter `lebenszyklus`-Weg in derselben `speicherKette`; Fehler dort ohne Alarm/localStorage-Rückfall, bei Rückkehr genau ein Versuch über den bisherigen Checkpoint-Weg. Startup nur nach tatsächlichem Statuswechsel. Diagnose ergänzt Auslöser, Run-Status am Schreibstart, Schreibgrund/ausstehende Saves und RAM-Zähler. Bestehende save-/Backup-/Barriere-/Alarmsemantik bleibt unverändert. **Offen bis zur iPhone-Bewährung.**
"""
new="""**91. Speicherfehler beim Backup und allgemeinen Speichern sichtbar machen** · *Fund Claude/Prüfer 27.9.2026 · Diagnose 27.9.2026 · Lifecycle-Auftrag Ondo 9.10.2026 · Korrektur 12.10.2026* · **Status: 🔴 OFFEN — Lifecycle-Korrektur v19.22.2 geliefert; Bewährung am iPhone steht aus**

**Belegt:** 5/5 reale Fehler vom 8.10. waren `quelle=checkpoint`, `phase=tx-abort`, Start 1–10 ms nach `visibilitychange→hidden`; drei Abbrüche wurden erst 37/329/331 ms nach `visible` gemeldet. Codekette bis `tx-abort` ist belegt. **Plausibel, unbewiesen:** WebKit Bug 202705 beschreibt Abbrüche laufender IndexedDB-Transaktionen bei Prozess-Suspendierung; die konkrete Ursache der fünf ONDO-Fälle ist nicht A/B-bewiesen.

**v19.22.2:** v19.22.1 bleibt sonst unverändert. Ein gemeinsames `lebenszyklusWiederholen()` wird sowohl bei Rückkehr als auch vom verspäteten Lifecycle-Fehler benutzt; das Ungesichert-Flag wird vor dem einzigen Retry gelöscht. Ist die Seite beim verspäteten Fehler wieder hidden, wartet der Retry bis zur nächsten Rückkehr. `pageshow` wirkt nur bei `event.persisted===true`; normales erstes Laden erzeugt keinen zusätzlichen Vorab-Render. t11 deckt außerdem `save_aussteht` + `hidden` + `pagehide` mutationssensitiv ab. **Offen bis zur iPhone-Bewährung.** Historie v19.22.1: `BACKLOG-ARCHIV.md`.
"""
if old not in s: raise SystemExit("backlog point91 block missing")
p.write_text(s.replace(old,new,1))

# STAND
p=P("STAND.md"); s=p.read_text()
s=s.replace("*Die aktuelle Wahrheit. Stand: 9.10.2026, Fassung 156, v19.22.1*",
            "*Die aktuelle Wahrheit. Stand: 12.10.2026, Fassung 157, v19.22.2*",1)
s=s.replace("""- **Beta: v19.22.1** (`beta.html`, geliefert 9.10.2026) — **Backlog-Punkt 91, Lifecycle-Schreibweg:**
  Beim Hintergrundwechsel wird der große State nicht mehr pauschal geschrieben, sondern nur
  nach `laufend→pausiert` oder solange ein normales `save()` aussteht; `visibilitychange` und
  `pagehide` werden je Hide-Zyklus entdoppelt. Lifecycle-Fehler bleiben im Hintergrund still
  und werden diagnostiziert; bei Rückkehr folgt höchstens ein normal alarmierender Retry.
""",
"""- **Beta: v19.22.2** (`beta.html`, geliefert 12.10.2026) — **Backlog-Punkt 91, Lifecycle-Korrektur:**
  v19.22.1 bleibt fachlich erhalten; v19.22.2 schließt die Retry-Race, wenn `tx-abort` erst nach
  `visibilitychange→visible` gemeldet wird. Rückkehr und verspäteter Fehler benutzen denselben
  Einmal-Retry; `pageshow` greift nur bei echter BFCache-Wiederherstellung (`persisted=true`).
""",1)
old="""  **v19.22.1:** Hide schreibt nur noch bei tatsächlichem `laufend→pausiert` oder ausstehendem
  `save()`, maximal einmal je Hide-Zyklus, über einen eigenen strikten `lebenszyklus`-Weg in
  derselben `speicherKette`. Sein Fehler setzt keinen globalen Alarm und nutzt keinen
  localStorage-Rückfall; bei visible/pageshow wird bei Bedarf genau ein Versuch über den
  bestehenden Checkpoint-Weg gemacht. Startup schreibt nur nach tatsächlicher Entsperrung.
  Diagnose nennt zusätzlich Auslöser, Run-Status am Schreibstart, Schreibgrund/ausstehende Saves
  und RAM-Zähler. Harte Checkpoint-Barriere, `save()`-Fallback, Backup-Semantik und Alarmtexte
  bleiben fachlich unverändert. **Punkt 91 bleibt offen bis zur iPhone-Bewährung.**
"""
new="""  **v19.22.1-Basis:** Hide schreibt nur bei tatsächlichem `laufend→pausiert` oder ausstehendem
  `save()`, höchstens einmal je Hide-Zyklus, über den strikten `lebenszyklus`-Weg; Fehler dort
  bleiben ohne globalen Alarm/localStorage-Rückfall. Startup und Diagnose bleiben wie geliefert.
  **Korrektur v19.22.2:** Drei reale Abbrüche wurden erst 37/329/331 ms nach `visible` gemeldet;
  deshalb kann nun auch der Lifecycle-catch den gemeinsamen `lebenszyklusWiederholen()`-Weg
  auslösen, falls die Seite dann sichtbar ist. Das Ungesichert-Flag wird vor dem einzigen Retry
  gelöscht; bei erneut hidden wartet es bis zur nächsten Rückkehr. `pageshow` ruft den Rückweg
  nur mit `event.persisted===true` auf, sodass erstes Laden keinen Vorab-Render auslöst. Der
  Entdoppelungs-Guard ist jetzt auch für `save_aussteht` + `hidden` + `pagehide` mutationssensitiv
  getestet. Harte Barriere, `save()`-Fallback, Backup-Semantik und Alarmtexte bleiben unverändert.
  **Punkt 91 bleibt offen bis zur iPhone-Bewährung.**
"""
if old not in s: raise SystemExit("STAND p91 block missing")
p.write_text(s.replace(old,new,1))

# Blueprint
p=P("Blueprint.md"); s=p.read_text()
p.write_text(s.replace("**Version:** 0.155\n**Stand:** 9. Oktober 2026",
                       "**Version:** 0.156\n**Stand:** 12. Oktober 2026",1))

# Blueprint protocol
p=P("BLUEPRINT-PROTOKOLL.md"); s=p.read_text()
addition="""

> **Was Fassung 0.156 ändert (12.10.2026):** Reine Synchronisierung nach Arbeitsregel M für
> die Korrektur zu Backlog-Punkt 91 (`beta.html` v19.22.2). v19.22.1 hatte einen lokal grünen,
> aber real unvollständigen Retry: drei gemessene `tx-abort`-Meldungen kamen erst 37/329/331 ms
> nach `visibilitychange→visible`, sodass der Rückkehrhandler das Ungesichert-Flag zu früh prüfte.
> Jetzt benutzen Rückkehrhandler und verspäteter Lifecycle-catch genau einen gemeinsamen
> `lebenszyklusWiederholen()`-Weg; das Flag wird vor dem Retry gelöscht. `pageshow` wirkt nur bei
> `event.persisted===true`, um das erste Laden nicht mit einem zusätzlichen Default-State-Render
> zu überlagern. Der Hide-Guard wird zusätzlich mit ausstehendem `save()` mutationssensitiv
> bewiesen. Keine neue Architektur- oder Verfassungsregel; harte Checkpoint-, save-, Backup- und
> Alarmsemantik bleiben unverändert. Blueprint auf 0.156 gehoben.
"""
if "Was Fassung 0.156 ändert" not in s: p.write_text(s.rstrip()+addition+"\n")

# Chronik
p=P("CHRONIK-2026-10.md"); s=p.read_text()
entry="""
## v19.22.2 — 12.10.2026 — Backlog-Punkt 91: verspäteten Lifecycle-Abbruch nach Rückkehr abfangen

**Anlass.** v19.22.1 war statisch und lokal vollständig grün, wurde aber von Prüfer und Claude am
echten Commit nicht abgenommen. Der reale Diagnoseverlauf vom 8.10. zeigte, dass drei der fünf
`tx-abort`-Meldungen erst 37, 329 und 331 ms **nach** `visibilitychange→visible` eintrafen. Damit
konnte `seiteZurueck()` das Flag `lebenszyklusUngesichert` prüfen, bevor der Lifecycle-catch es
setzte; anschließend fehlte ein weiterer Auslöser. Zusätzlich war der Hide-Guard in t11 nicht
mutationssensitiv bewiesen, weil der bisherige Doppelauslöser-Test einen laufenden Run verwendete,
dessen Statuswechsel den zweiten Write auch ohne Guard verhinderte.

**Korrektur.** Neu gibt es genau einen gemeinsamen `lebenszyklusWiederholen()`-Weg. Er tut nur
etwas bei gesetztem Ungesichert-Flag, löscht dieses **vor** dem Retry und ruft dann den bestehenden
`checkpointOhneBarriere('rueckkehr_wiederholung')` auf. `seiteZurueck()` benutzt nur noch diesen
Weg. Meldet der Lifecycle-catch seinen Fehler verspätet, setzt er wie bisher Flag/Grund und prüft
anschließend die aktuelle `document.visibilityState`: bei `visible` startet er sofort denselben
Einmal-Retry; bei erneutem `hidden` bleibt das Flag bis zur nächsten Rückkehr stehen. Ein Fehler
des sichtbaren Recovery-Checkpoints erzeugt weiterhin nur den bisherigen Checkpoint-Alarm und
setzt kein neues Lifecycle-Flag — keine Schleife.

**pageshow-Entscheidung.** `pageshow` wird nur noch bei `event.persisted===true` an
`seiteZurueck()` weitergegeben. Begründung: `pageshow` feuert auch beim ersten Laden; dort ist es
keine Lifecycle-Rückkehr und ein zusätzliches `render()` kann neben dem asynchronen `load()` den
Default-State vorab zeichnen. Normale Rückkehr bleibt über `visibilitychange→visible` abgedeckt;
echte BFCache-Wiederherstellung bleibt über `pageshow persisted=true` abgedeckt. t11 prüft beide
Seiten dieser Entscheidung positiv.

**Tests.** Die IndexedDB-Attrappe in `tests/umgebung.js` bekam ausschließlich für Tests eine
konfigurierbare Schreibverzögerung. t11 simuliert nun den realen Ablauf `hidden → visible →
verspäteter tx-abort`, einen ebenfalls scheiternden Recovery ohne Schleife, einen verspäteten
Abbruch während eines bereits neuen Hide-Zyklus und `save_aussteht + hidden + pagehide` als echte
Guard-Gegenprobe. Final: t1–t11 **572/572**, davon t11 **72/72**; t5 bleibt **41/41**, t9
**52/52**. Mutationen: Sofort-Retry im catch entfernt → **5 Fehler**; Hide-Guard entfernt →
**2 Fehler** (beide im neuen `save_aussteht`-Fall); Ungesichert-Flag nicht vor dem Retry gelöscht
→ **7 Fehler** einschließlich doppeltem dritten Write nach `pageshow`. Node-Syntax und
`python3 pruefe.py` bleiben sauber.

**Unverändert:** `lebenszyklusSave`, Schreibbedingung `laufGeaendert || saveAussteht`, Startup-
Write, Diagnosefelder, `checkpointSave()`, `backupCheckpointSave()`, `speicherSchreibenKritisch()`,
`idbSchreiben()`, harte Barrieren, Alarmtexte und 392/392/392 Sprachschlüssel. **Punkt 91 bleibt
offen bis zur Gerätebewährung.** Die belegte Code-/Messkette und die weiterhin nur plausible,
nicht bewiesene WebKit-Ursachenzuordnung (Bug 202705) werden nicht umgedeutet.

"""
needle="# ONDO CONTROL — CHRONIK OKTOBER 2026\n*Versionsgeschichte und Prüfbelege ab Oktober 2026. Aktueller Stand steht in `STAND.md`.*\n\n"
if needle not in s: raise SystemExit("chronik header missing")
if "## v19.22.2 — 12.10.2026" not in s: p.write_text(s.replace(needle,needle+entry,1))
