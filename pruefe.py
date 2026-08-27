# -*- coding: utf-8 -*-
"""ONDO CONTROL — Vorabpruefung vor jeder Dateiausgabe (Arbeitsregel M).

FASSUNG 3, 27.8.2026 (Backlog-Punkt 59/61). Eine Aenderung gegenueber Fassung 2:

3. ABSCHNITT 1 PRUEFT EINE GANZZAHL, KEINE UHRZEIT MEHR. Fassung 2 verglich
   eine per Kommandozeile uebergebene Uhrzeit gegen jede der drei Kopfzeilen
   einzeln, statt die drei Kopfzeilen untereinander zu vergleichen. Das erzeugte
   falschen Alarm, sobald eine Lieferung keinen der drei Koepfe aenderte
   (Backlog-Punkt 59, 24.–27.8.2026, dreifach unabhaengig aufgetreten). Neu:
   STAND.md, der Backlog und Blueprint tragen dieselbe Fassungszahl im Kopf;
   Abschnitt 1 prueft nur noch, ob alle drei gleich sind. Keine Uhrzeit mehr
   noetig, kein Kommandozeilen-Argument mehr noetig. Echte Uhrzeiten bleiben
   dort sinnvoll, wo ein wirkliches Ereignis belegt wird (ein Fund, ein Commit,
   ein Testlauf) — das ist ein anderer, engerer Anwendungsfall als der
   Kopf-Abgleich und bleibt unveraendert.

FASSUNG 2, 15.8.2026 (Chat 17). Zwei Aenderungen gegenueber Fassung 1:

1. SIE IST CHATUEBERGREIFEND. Fassung 1 hatte in Abschnitt 7 eine von Hand
   gepflegte Liste der Zusagen des jeweiligen Chats. Jeder neue Chat musste sie
   ersetzen; wer es vergass, pruefte das Falsche. Chat 16 hat genau daran eine
   Fassung 24 verlangt, die es nicht gab, und trotzdem "alles sauber" gemeldet.
   Die Liste ist ersatzlos weg. An ihre Stelle treten Pruefungen, die ihren
   Sollwert aus den Dokumenten selbst ziehen.

2. SIE PRUEFT INHALT, NICHT NUR FORM. Neu sind vor allem:
   - Abschnitt 5: Der Status jedes Backlog-Punktes wird gegen die Liste der
     offenen Punkte gerechnet. Genau dieser Fehler ist Chat 15 unterlaufen.
   - Abschnitt 6: Dieselbe Kennzahl darf in zwei aktiven Dokumenten nicht
     verschieden lauten.
   - Abschnitt 9: Verlustbeweis fuer alle drei Trennungen.
   - Abschnitt 11: Uebergabemappe und Abnahme werden auf Form geprueft.

Aufruf: python3 pruefe.py — ohne Argument.
"""
import re, sys, os, collections

def lies(name):
    try:
        return open(name, encoding='utf-8').read()
    except FileNotFoundError:
        return None

# Aktive Dokumente — werden beim Start gelesen
AKTIV = {n: lies(n) for n in ('STAND.md', 'Ondo-Control-Backlog.md',
                              'Blueprint.md', 'Ondo-Core-Architektur.md')}
# Archive — nur auf Zuruf, aber hier mitgeprueft
ARCHIV = {n: lies(n) for n in ('CHRONIK-2026-08.md', 'CHRONIK-2026-07.md',
                               'BACKLOG-ARCHIV.md', 'BLUEPRINT-PROTOKOLL.md')}
S  = AKTIV['STAND.md']
B  = AKTIV['Ondo-Control-Backlog.md']
BP = AKTIV['Blueprint.md']
ALLE = '\n'.join(t for t in list(AKTIV.values()) + list(ARCHIV.values()) if t)

MARK = ('Hier stand zuerst','berichtigt','Berichtigung','belassen','Widerspruch','WIDERLEGT',
        'nachgerechnet','Nachprüfung','stimmt nicht','war zu stark','Verlaufsangabe',
        'vorherige','Vorherige','(falsch:','Fehlerart','Verallgemeinerung','hätte','vorher',
        'Vergleichsrechnung','Verlauf:','zuvor','BERICHTIGT','Hier stand bis heute')
f = []
def pruef(ok, txt):
    print(("  OK   " if ok else "  FEHL ") + txt)
    if not ok:
        f.append(txt)
def ohne_vermerk(text, phrase):
    return [l for l in text.split('\n') if phrase in l and not any(m in l for m in MARK)]

print("0) Sind alle Dateien da?")
for n, t in AKTIV.items():
    pruef(t is not None, f"aktiv: {n}")
for n, t in ARCHIV.items():
    pruef(t is not None, f"archiv: {n}")

print("1) Fassungszahl — STAND, Backlog und Blueprint tragen dieselbe Ganzzahl")
_fs_m = re.search(r'Fassung (\d+)', S.split('\n')[1])
_fb_m = re.search(r'Fassung (\d+)', B.split('\n')[1])
_bpk = [l for l in BP.split('\n')[:12] if l.startswith('**Version:**')]
_fp_m = re.search(r'\*\*Version:\*\* 0\.(\d+)', _bpk[0]) if len(_bpk) == 1 else None
pruef(_fs_m is not None, "STAND-Kopf nennt eine Fassungszahl")
pruef(_fb_m is not None, "Backlog-Kopf nennt eine Fassungszahl")
pruef(_fp_m is not None, "Blueprint-Kopf nennt eine Versionsnummer")
if _fs_m and _fb_m and _fp_m:
    _fs, _fb, _fp = int(_fs_m.group(1)), int(_fb_m.group(1)), int(_fp_m.group(1)) + 1
    pruef(_fs == _fb == _fp,
          f"alle drei dieselbe Zahl (STAND {_fs} / Backlog {_fb} / Blueprint-Version+1 {_fp})")

print("2) Erwaehnte Dateien existieren wirklich")
PROJEKTDATEIEN = {'STAND.md','Ondo-Control-Backlog.md','Blueprint.md',
                  'Ondo-Core-Architektur.md','CHRONIK-2026-08.md','CHRONIK-2026-07.md',
                  'BACKLOG-ARCHIV.md','BLUEPRINT-PROTOKOLL.md','pruefe.py'}
_dateien = set(re.findall(r'`([A-Za-z0-9_\-]+\.(?:md|py|html|json))`', ALLE)) & PROJEKTDATEIEN
# 16.8., Chat 18: pruefe.py liegt auf Ondos Tablet ABSICHTLICH ausserhalb des
# Repo-Ordners, damit es nicht ins oeffentliche Verzeichnis geraet. Es wurde
# dort deshalb als fehlend gemeldet, obwohl es lief. Gesucht wird jetzt im
# Arbeitsordner UND am eigenen Ort. Eine wirklich fehlende Datei faellt
# weiterhin auf.
_HIER = os.path.dirname(os.path.abspath(__file__))
# Die Ausnahme gilt AUSSCHLIESSLICH fuer pruefe.py selbst. Waere sie allgemein,
# wuerde jede Datei, die zufaellig neben dem Skript liegt, als vorhanden zaehlen
# — die Pruefung haette sich dann selbst entschaerft.
def _da(d):
    if os.path.exists(d):
        return True
    return d == 'pruefe.py' and os.path.exists(os.path.join(_HIER, d))
_fehlt = sorted(d for d in _dateien if not _da(d))
# beta.html/OndoControl.html/version.json liegen im Repo, koennen aber fehlen
_egal = {'OndoControl.html', 'version.json', 'beta.html', 'PROJEKT-STATUS.md'}
_fehlt = [d for d in _fehlt if d not in _egal]
pruef(not _fehlt, f"alle genannten Dateien vorhanden {_fehlt if _fehlt else ''}")

print("3) Querverweise auf Backlog-Punkte sind aufloesbar")
_alleP = set(re.findall(r'^\*\*([0-9A-F]+[a-c]?)\. ', B, re.M)) | \
         set(re.findall(r'^\*\*([0-9A-F]+[a-c]?)\. ', ARCHIV.get('BACKLOG-ARCHIV.md') or '', re.M))
_verweise = set(re.findall(r'Backlog-Punkt (\d+)', ALLE)) | set(re.findall(r'Punkt (\d+)(?![\da-c])', ALLE))
_miss = sorted(p for p in _verweise if p not in _alleP)
pruef(not _miss, f"alle Punktverweise existieren {('fehlt: ' + str(_miss)) if _miss else ''}")

print("4) Kein Punkt steht doppelt — Backlog gegen Archiv")
_offenP = set(re.findall(r'^\*\*([0-9A-F]+[a-c]?)\. ', B, re.M))
_archP = set(re.findall(r'^\*\*([0-9A-F]+[a-c]?)\. ', ARCHIV.get('BACKLOG-ARCHIV.md') or '', re.M))
_doppel = sorted(_offenP & _archP)
pruef(not _doppel, f"kein Punkt in beiden Dateien {_doppel if _doppel else ''}")

print("5) INHALT: Die Liste der offenen Punkte gegen die Status gerechnet")
# Genau dieser Fehler ist Chat 15 unterlaufen: Punkt 18 war beschlossen und
# fehlte in der Liste. Der Sollwert kommt hier aus den Status-Zeilen, nicht aus
# der Liste selbst — der Gepruefte liefert seinen Sollwert also nicht selbst.
ERLEDIGT = ('GEBAUT', 'ERLEDIGT', 'ÜBERHOLT', 'GESCHEITERT', 'ZURÜCKGENOMMEN',
            'AUFGEGANGEN', 'zurückgestellt', 'ZURÜCKGESTELLT', 'BEANTWORTET',
            'abgelehnt', 'HÄLFTE GEBAUT', 'stehende Regel beschlossen')
_status = {}
for m in re.finditer(r'^\*\*([0-9A-F]+[a-c]?)\..*?\*\*Status: (.+?)\*\*', B, re.M):
    _status[m.group(1)] = m.group(2)
_soll = sorted(p for p, st in _status.items()
               if re.search(r'beschlossen', st, re.I) and not any(w in st for w in ERLEDIGT))
_liste = re.search(r'Beschlossen und nicht gebaut: \w+\*\* — \*\*([^*]+)\*\*', B)
if _liste:
    _ist = sorted(x.strip() for x in _liste.group(1).replace('.', '').split(','))
    pruef(_ist == _soll, f"Liste {_ist} == aus den Status gerechnet {_soll}")
else:
    pruef(False, "Zeile 'Beschlossen und nicht gebaut' nicht gefunden")

print("6) INHALT: Dieselbe Kennzahl darf nicht zweimal verschieden lauten")
def einzig(muster, name, texte):
    werte = set()
    for t in texte:
        for m in re.findall(muster, t):
            werte.add(m)
    pruef(len(werte) <= 1, f"{name}: {sorted(werte) if werte else 'nicht gefunden'}")
    return werte
_akt = [t for t in AKTIV.values() if t]
einzig(r'\*\*Sprachschlüssel: (\d+)\*\*', "Sprachschluesselzahl", _akt)
einzig(r'\*\*Beta: (v[\d.]+)\*\*', "Beta-Version", _akt)
einzig(r'\*\*Letzte best(?:ä|ae)tigte Sicherung: (\d{1,2}\.\d{1,2}\.\d{4}, \d{1,2}:\d{2})', "letzte Sicherung", _akt)
_fass = set(re.findall(r'Fassung (\d+) ·', B.split('\n')[1]))
_neueste = {str(max(int(x) for x in re.findall(r'^## ⚠ Was Fassung (\d+) ändert', B, re.M) or ['0']))}
pruef(_fass == _neueste, f"Backlog-Kopf {sorted(_fass)} == neuester Fassungsabschnitt {sorted(_neueste)}")
_bpv = re.search(r'\*\*Version:\*\* (0\.\d+)', BP)
pruef(_bpv is not None, "Blueprint-Kopf nennt eine Fassungsnummer")
if _bpv:
    _v = _bpv.group(1)
    _prot = ARCHIV.get('BLUEPRINT-PROTOKOLL.md') or ''
    pruef(f"Was Fassung {_v} ändert" in BP, f"Blueprint {_v}: Aenderungsnotiz im Blueprint")
    pruef(f"{_v} gehoben" in (BP + _prot), f"Blueprint {_v}: Protokolleintrag vorhanden")

print("7) Keine veraltete Zahl als gueltige Behauptung — nur in den AKTIVEN Dokumenten")
_akt2 = [t for t in AKTIV.values() if t]
for bad in ["je 150 bewertete", "39 von 39", "Flash dreht nie", "je 135 bewertete",
            "nur bei einem der beiden Gehirne", "50 der 190", "bei 180 Aussagen"]:
    tr = ohne_vermerk('\n'.join(_akt2), bad)
    pruef(not tr, f"'{bad}' nur in Korrekturvermerken ({len(tr)} offene Treffer)")

print("8) Messstand — der ganze Abschnitt gegen die Kopfzahl")
_i = S.index('## Aktueller Messstand'); _j = S.index('\n## ', _i + 10)
_mess = S[_i:_j]; _ml = _mess.split('\n')
_ab = re.search(r'(\d{1,2}\.\d{1,2}\.\d{4}(?:, \d{1,2}:\d{2} Uhr)?)', _ml[0])
pruef(_ab is not None, "Messstand-Ueberschrift nennt eine Ablesezeit")
_dat = [l for l in S.split('\n') if l.startswith('> **Zur Datierung:**')]
pruef(len(_dat) == 1, "genau ein Datierungshinweis")
if _ab and len(_dat) == 1:
    pruef(_ab.group(1) in _dat[0], f"Datierungshinweis nennt dieselbe Ablesezeit ({_ab.group(1)})")
_tab = dict(re.findall(r'\|\s*(Sonnet|Flash)\s*\|\s*(\d+)\s*\|', _mess))
pruef(set(_tab) == {'Sonnet', 'Flash'}, f"Tabelle nennt beide Gehirne {_tab}")
_KOPF = {k: int(v) for k, v in _tab.items()}
for g in ('Sonnet', 'Flash'):
    _z = [l for l in _ml if l.startswith(f"**{g}s Verteilung")]
    pruef(len(_z) == 1, f"{g}: genau eine Verteilungszeile")
    if len(_z) == 1:
        _sum = sum(int(x) for x in re.findall(r'→ (\d+)', _z[0]))
        pruef(_sum == _KOPF.get(g), f"{g}: Summe der Stufen {_sum} == Kopfzahl {_KOPF.get(g)}")
_ges = set(_KOPF.values()) | {sum(_KOPF.values())}
_messK = _mess.split('**Was die Berichtigung bewirkt hat')[0]
_nenner = {int(x) for x in re.findall(r'/(\d{3,})\)', _messK) if int(x) >= 200}
_nenner |= {int(x) for x in re.findall(r'von (\d{3,})', _messK) if int(x) >= 200}
pruef(_nenner <= _ges, f"alle Nenner in {sorted(_ges)} — gefunden {sorted(_nenner)}")
_bad = []
for l in _messK.split('\n'):
    if 'Vorherige St' in l or 'Verlaufsangabe' in l or 'Verteilung' in l:
        continue
    for a in (180, 207, 135, 87, 224, 204, 190, 414):
        if re.search(r'(?<![\d,\.])' + str(a) + r'(?![\d,\.%])', l):
            _bad.append((a, l[:55]))
pruef(not _bad, f"keine ueberholte Bestandszahl im Abschnitt {_bad if _bad else ''}")
pruef("Berichtigung hat die Kalibrierung NICHT verbessert" in _mess,
      "Vorbehalt: die Berichtigung verbessert die Kennzahl nicht")

print("9) Punkt 18 — Verlustbeweis fuer alle drei Trennungen")
def verlust(original, ziele, name, ausnahmen=()):
    O = lies(original)
    if O is None:
        pruef(True, f"{name}: Original nicht im Ordner — Beweis uebersprungen (nach der Bewaehrungszeit gewollt)")
        return
    co = collections.Counter(O.split('\n'))
    cn = collections.Counter()
    for z in ziele:
        t = lies(z)
        if t:
            cn += collections.Counter(t.split('\n'))
    fehlt = []
    for zeile, anz in co.items():
        if zeile.strip() in ('', '---'):
            continue
        if cn[zeile] < anz:
            fehlt.append(zeile)
    echt = [z[:60] for z in fehlt if not any(a in z for a in ausnahmen)]
    dok = [z for z in fehlt if any(a in z for a in ausnahmen)]
    pruef(not echt, f"{name}: {len(echt)} unerklaerte Verluste {echt[:3] if echt else ''}")
    if dok:
        print(f"         dokumentierte Eingriffe: {len(dok)}")

verlust('PROJEKT-STATUS.md', ['STAND.md', 'CHRONIK-2026-08.md', 'CHRONIK-2026-07.md'],
        "PROJEKT-STATUS", ausnahmen=('# ONDO CONTROL — PROJEKT-STATUS',
                                     '*Chat-übergreifende Zusammenfassung',
                                     'aktuell 217',
                                     # 15.8., spaetabends: inhaltliche Berichtigung einer
                                     # am 14.8. widerlegten Aussage. Der alte Wortlaut steht
                                     # im Vermerk daneben, nicht geloescht.
                                     'Bekannte Verzerrung, die neben jeder dieser Zahlen',
                                     'Zur Genauigkeit:',
                                     # 16.8., Chat 18: Die Zeile mit der letzten Sicherung ist
                                     # eine STANDSANGABE und muss gepflegt werden. Sie stand
                                     # schon einmal sechs Tage falsch. Die alte Angabe steht
                                     # in derselben Zeile weiter, nur nicht mehr an erster
                                     # Stelle. Siehe Punkt 52: die Liste waechst mit jeder
                                     # Pflege, das ist eine Schwaeche des Beweises.
                                     '**Letzte bestätigte Sicherung: 14.8.2026, 22:53 Uhr'))
verlust('BACKLOG-ORIGINAL.md', ['Ondo-Control-Backlog.md', 'BACKLOG-ARCHIV.md'],
        "Backlog", ausnahmen=('**Gepflegt von Claude',
                              '**18. Dokumente kürzen und Chronik auslagern',
                              'Neu am 6.8.: Die Schwelle ist überschritten'))
verlust('BLUEPRINT-ORIGINAL.md', ['Blueprint.md', 'BLUEPRINT-PROTOKOLL.md'],
        "Blueprint", ausnahmen=('**Version:**', '**Stand:**'))


print("9b) Punkt 48 — Struktur- und Reihenfolgebeweis")
# Der Zeilenbeweis oben zeigt, dass nichts FEHLT. Er zeigt nicht, dass der Text
# noch dort steht, wo er hingehoert: ein Absatz unter der falschen Ueberschrift
# besteht ihn. Beide Pruefer haben das am 15.8. unabhaengig gefunden.
# Dieser Abschnitt prueft zusaetzlich:
#   a) jeder Block des Originals kommt in GENAU EINER Zieldatei am STUECK vor,
#   b) die Bloecke stehen dort in derselben REIHENFOLGE wie im Original.
# Bloecke sind dieselben Einheiten, in denen getrennt wurde: '## '-Abschnitte
# und innerhalb davon die Punktbloecke '**N. '.
def bloecke_von(text):
    zeilen = text.split('\n')
    grenzen = [i for i, l in enumerate(zeilen)
               if l.startswith('## ') or re.match(r'^\*\*[0-9A-F]+[a-c]?\. ', l)]
    if not grenzen:
        return [text]
    g = sorted(set([0] + grenzen + [len(zeilen)]))
    return ['\n'.join(zeilen[a:b]) for a, b in zip(g, g[1:]) if a != b]

# Dateien, deren Reihenfolge BEWUSST neu gesetzt wurde. Die Erklaerung muss in
# der Datei selbst stehen, sonst zaehlt sie nicht — sonst koennte jede Unordnung
# nachtraeglich zur Absicht erklaert werden.
NEU_GEORDNET = {'STAND.md': 'Die Reihenfolge in dieser Datei ist neu gesetzt'}

def struktur(original, ziele, name, dok_marker=()):
    O = lies(original)
    if O is None:
        pruef(True, f"{name}: Original nicht im Ordner — Strukturbeweis uebersprungen")
        return
    Z = {z: lies(z) for z in ziele}
    Z = {z: t for z, t in Z.items() if t}
    ohne, mehrfach, dok = [], [], 0
    pos = {z: [] for z in Z}
    for i, blk in enumerate(bloecke_von(O)):
        kern = blk.strip('\n')
        if not kern.strip():
            continue
        treffer = [z for z, t in Z.items() if kern in t]
        if len(treffer) == 1:
            pos[treffer[0]].append((i, Z[treffer[0]].index(kern)))
        elif not treffer:
            if any(m in kern for m in dok_marker):
                dok += 1
            else:
                ohne.append(kern.split('\n')[0][:58])
        else:
            mehrfach.append(kern.split('\n')[0][:58])
    pruef(not ohne, f"{name}: jeder Block am Stueck wiedergefunden — {len(ohne)} nicht {ohne[:3] if ohne else ''}")
    pruef(not mehrfach, f"{name}: kein Block in zwei Zieldateien {mehrfach[:3] if mehrfach else ''}")
    unordnung = []
    for z, paare in pos.items():
        paare.sort(key=lambda x: x[0])
        stellen = [s for _, s in paare]
        if stellen != sorted(stellen):
            erklaerung = NEU_GEORDNET.get(z)
            if erklaerung and erklaerung in (Z.get(z) or ''):
                print(f"         {z}: Reihenfolge bewusst neu gesetzt, in der Datei erklaert")
            else:
                unordnung.append(z)
    pruef(not unordnung, f"{name}: Reihenfolge in jeder Zieldatei erhalten {unordnung if unordnung else ''}")
    if dok:
        print(f"         dokumentierte Eingriffe: {dok}")

struktur('PROJEKT-STATUS.md', ['STAND.md', 'CHRONIK-2026-08.md', 'CHRONIK-2026-07.md'],
         "PROJEKT-STATUS", dok_marker=('# ONDO CONTROL — PROJEKT-STATUS', 'aktuell 217',
                                     '## Übergabe-Protokoll',
                                     '## Die Spielliste — drei Fehlerarten',
                                     # 16.8., Chat 18: derselbe Vorgang wie oben. Die gepflegte
                                     # Zeile liegt in diesem Block, deshalb findet der
                                     # Strukturbeweis ihn nicht mehr am Stueck.
                                     '## Arbeitsweise (wichtig für neue Chats)'))
struktur('BACKLOG-ORIGINAL.md', ['Ondo-Control-Backlog.md', 'BACKLOG-ARCHIV.md'],
         "Backlog", dok_marker=('**Gepflegt von Claude',
                                '**18. Dokumente kürzen und Chronik auslagern',
                                'Neu am 6.8.: Die Schwelle ist überschritten'))
struktur('BLUEPRINT-ORIGINAL.md', ['Blueprint.md', 'BLUEPRINT-PROTOKOLL.md'],
         "Blueprint", dok_marker=('**Version:**', '**Stand:**'))

print("10) Punkt 45 — ein Ort je Tatsache")
def einmal(text, muster, name, soll=1):
    n = len(re.findall(muster, text))
    pruef(n == soll, f"{name}: {n}x (erwartet {soll})")
einmal(S, r'\*\*Sprachschlüssel: \d+\*\*', "Sprachschluesselzahl in STAND")
einmal(S, r'\*\*Letzte best(?:ä|ae)tigte Sicherung:', "letzte Sicherung in STAND")
einmal(S, r'\*\*Beta: v[\d.]+\*\*', "Beta-Version in STAND")
pruef("Beschlossen und nicht gebaut" not in S,
      "die Zahl der offenen Punkte steht NICHT in STAND.md, nur im Backlog")

print("11) Uebergabemappe und Abnahme — Form")
_mappen = [n for n in os.listdir('.') if re.match(r'\d{4}-\d{2}-\d{2}_\d{4}_Ondo-Control_Uebergabe\.md$', n)]
_abn = [n for n in os.listdir('.') if re.match(r'\d{4}-\d{2}-\d{2}_Ondo-Control_Abnahme\.md$', n)]
# Die leeren Muster liegen ABSICHTLICH im Repo (Entscheidung Ondos, 21.8.). Sie
# enthalten nur die Form, keine Fragen und keine Antworten. Sie sind deshalb kein
# Name ausserhalb des Musters.
MUSTER = {'MUSTER_Ondo-Control_Uebergabe.md',
          'MUSTER_Ondo-Control_Abnahme.md'}
_fremd = [n for n in os.listdir('.') if re.search(r'uebergabe|abnahme', n, re.I)
          and n not in _mappen + _abn and n not in MUSTER]
pruef(not _fremd, f"kein Mappen- oder Abnahmename ausserhalb des Musters {_fremd if _fremd else ''}")
# 21.8., Chat 21: Die Formpruefung lief bisher nur, wenn eine ausgefuellte Mappe
# im Ordner lag. Die liegt dort nie — sie gehoert nicht ins Repo. Die Pruefung
# lief also nie an. Fehlt die ausgefuellte Mappe, wird ersatzweise das leere
# Muster mit denselben Pruefungen geprueft; die Meldung nennt, was geprueft wurde.
_MUSTER_MAPPE = 'MUSTER_Ondo-Control_Uebergabe.md'
if _mappen:
    M, _was = lies(_mappen[0]), f"Mappe ({_mappen[0]})"
else:
    M, _was = lies(_MUSTER_MAPPE), f"Muster der Mappe ({_MUSTER_MAPPE})"
if M:
    for teil in ('# TEIL A', '# TEIL B', '# TEIL C', '# TEIL D', '# TEIL E', '# TEIL F', '# TEIL G'):
        pruef(teil in M, f"{_was} enthaelt {teil}")
    # Aufbau aus Chat 3 — dreimal in zwei Tagen von einem Chat eigenmaechtig geaendert.
    for stueck in ('⛔ NICHT INS REPO HOCHLADEN', '## SO BENUTZT DU DIESE MAPPE',
                   '## Kurzfassung des offenen Stands'):
        pruef(stueck in M, f"{_was}: Bestandteil '{stueck[:38]}'")
    # Teil A und Teil B MUESSEN im Codeblock stehen, sonst kann Ondo sie nicht
    # am Stueck kopieren. Genau das hat Chat 17 am 15.8. weggelassen.
    # Die Grenze zum naechsten Teil wird ohne feste Rautenzahl gesucht: die
    # ausgefuellte Mappe schreibt '# TEIL', das Muster '## TEIL'. Mit fester
    # Zeichenkette bricht der Lauf hier ab, statt einen FEHL zu melden.
    for teil in ('# TEIL A', '# TEIL B'):
        _ab = M.index(teil)
        _nx = re.search(r'\n#+ TEIL', M[_ab + 10:])
        _bis = _ab + 10 + _nx.start() if _nx else len(M)
        pruef(M[_ab:_bis].count('```') >= 2, f"{_was}: {teil} steht im Codeblock")
    _fragen = len(re.findall(r'^\d+\. ', M, re.M))
    # Seit 15.8. gilt: ALLE Fragen sind Fangfragen (Beschluss Ondo). Eine feste
    # Zahl gibt es nicht mehr. Anerkannt wird beides: einzelne Kennzeichnung
    # oder die ausdrueckliche Feststellung, dass alle Fragen Fangfragen sind.
    _fang = len(re.findall(r'FANGFRAGE', M))
    _alle = re.search(r'Alle \w+ sind Fangfragen', M) is not None
    pruef(_alle or _fang >= 4,
          f"{_was}: alle Fragen als Fangfragen ausgewiesen (einzeln: {_fang}, pauschal: {_alle})")
    print(f"         (Fragen im Text gezaehlt: {_fragen})")
else:
    pruef(True, "weder ausgefuellte Mappe noch Muster im Ordner — Pruefung uebersprungen")

print("12) Punkt 44 — kein Schluesselfeld in der Messdaten-Ausgabe")
_BH = lies('beta.html')
if _BH is None:
    pruef(True, "beta.html nicht im Ordner — Abschnitt 12 uebersprungen")
else:
    _geheim = set(re.findall(r'oninput="state\.([A-Za-z0-9_]+)=this\.value\.trim\(\)', _BH))
    _geheim = {g for g in _geheim if re.search(r'key|pin|token|secret|passw', g, re.I)}
    pruef(_geheim == {'apiKey', 'geminiKey', 'pin'},
          f"geheime Felder aus den Eingabefeldern erkannt: {sorted(_geheim)}")
    _m = re.search(r'var MESS_FELDER = \[(.*?)\];', _BH, re.S)
    pruef(_m is not None, "MESS_FELDER existiert")
    if _m and _geheim:
        _liste2 = {x.strip().strip("'\"") for x in _m.group(1).split(',')}
        pruef(not (_geheim & _liste2), f"kein geheimes Feld in der Positivliste")
    pruef("messGeheimFund" in _BH, "zweite Pruefstufe im Code vorhanden")
    _cv = re.search(r"var CODE_VERSION = '(v[\d.]+)';", _BH)
    _bv = re.search(r'\*\*Beta: (v[\d.]+)\*\*', S)
    if _cv and _bv:
        pruef(_cv.group(1) == _bv.group(1),
              f"CODE_VERSION {_cv.group(1)} == Beta-Version in STAND {_bv.group(1)}")

print("13) Punkt 60 — Sprachschluessel selbst gezaehlt, nicht von Hand behauptet")
# 27.8.2026: STAND.md nannte 217, ein Nachzaehler (Mistral) fand 142. Statt die
# Zahl weiter von Hand zu pflegen und zu erraten, wer richtig zaehlte, zaehlt
# pruefe.py sie jetzt selbst — direkt aus beta.html, bei jedem Lauf.
if _BH is None:
    pruef(True, "beta.html nicht im Ordner — Abschnitt 13 uebersprungen")
else:
    _i18n = re.search(r'var I18N = \{(.*?)\n\};', _BH, re.S)
    pruef(_i18n is not None, "I18N-Block in beta.html gefunden")
    if _i18n:
        _chunks = re.split(r'(?=\n (?:de|fr|en):\{)', _i18n.group(1))
        _sprachen = {}
        for _ch in _chunks:
            _lm = re.match(r'\n (de|fr|en):\{', _ch)
            if not _lm:
                continue
            _inhalt = _ch[_lm.end() - 1:]
            _sprachen[_lm.group(1)] = re.findall(r'[,{]\s*([A-Za-z_][A-Za-z0-9_]*):\x27', _inhalt)
        pruef(set(_sprachen) == {'de', 'fr', 'en'}, f"alle drei Sprachen gefunden {sorted(_sprachen)}")
        if set(_sprachen) == {'de', 'fr', 'en'}:
            _anzahlen = {l: len(k) for l, k in _sprachen.items()}
            pruef(len(set(_anzahlen.values())) == 1,
                  f"alle drei Sprachen dieselbe Anzahl Schluessel {_anzahlen}")
            _mengen = {l: set(k) for l, k in _sprachen.items()}
            pruef(_mengen['de'] == _mengen['fr'] == _mengen['en'],
                  "alle drei Sprachen dieselben Schluesselnamen")
            _gezaehlt = _anzahlen.get('de')
            _bsv = re.search(r'\*\*Sprachschlüssel: (\d+)\*\*', S)
            pruef(_bsv is not None, "STAND.md nennt eine Sprachschluesselzahl")
            if _bsv:
                pruef(int(_bsv.group(1)) == _gezaehlt,
                      f"selbst gezaehlt {_gezaehlt} == STAND.md behauptet {_bsv.group(1)}")

print("\nERGEBNIS:", "ALLES SAUBER" if not f else f"{len(f)} FEHLER: {f}")
