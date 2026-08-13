import re,sys
S=open('PROJEKT-STATUS.md',encoding='utf-8').read()
B=open('Ondo-Control-Backlog.md',encoding='utf-8').read()
BP=open('Blueprint.md',encoding='utf-8').read()
STAMP=sys.argv[1] if len(sys.argv)>1 else sys.exit("ABBRUCH: Uhrzeit fehlt. Aufruf: python3 pruefe.py 'HH:MM Uhr' — Wert MUSS vom Uhr-Werkzeug stammen, NICHT von date im Container (laeuft in UTC).")
MARK=('Hier stand zuerst','berichtigt','Berichtigung','belassen','Widerspruch','WIDERLEGT',
      'nachgerechnet','Nachprüfung','stimmt nicht','war zu stark','Verlaufsangabe','vorherige','Vorherige','(falsch:','Fehlerart','Verallgemeinerung','hätte','vorher','Vergleichsrechnung')
f=[]
def pruef(ok,txt):
    print(("  OK   " if ok else "  FEHL ")+txt);  f.append(txt) if not ok else None
def ohne_vermerk(text, phrase):
    """Zeilen mit der Phrase, die KEIN Korrekturvermerk sind"""
    return [l for l in text.split('\n') if phrase in l and not any(m in l for m in MARK)]

print("1) Zeitstempel in den Kopfzeilen")
pruef(STAMP in S.split('\n')[1], "STATUS-Kopf")
pruef(STAMP in B.split('\n')[1], "Backlog-Kopf")
pruef(STAMP in BP.split('\n')[6], "Blueprint-Kopf")

print("2) Abschnittsnummern lueckenlos")
n8=[int(x) for x in re.findall(r'^### (\d+)\.', S[S.index('## DER 8. AUGUST'):S.index('## DER 7. AUGUST')], re.M)]
pruef(n8==list(range(1,len(n8)+1)), f"8. August 1..{len(n8)}")
n9=[int(x) for x in re.findall(r'^### (\d+)\.', S[S.index('## DER 9. AUGUST'):S.index('## DER 8. AUGUST')], re.M)]
pruef(n9==list(range(1,len(n9)+1)), f"9. August 1..{len(n9)}")
n13=[int(x) for x in re.findall(r'^\*\*(\d+)\. ', S[S.index('## DER 13. AUGUST'):S.index('## DER 9. AUGUST')], re.M)]
pruef(n13==list(range(1,len(n13)+1)), f"13. August 1..{len(n13)}")

print("3) Querverweise auf Unterpunkte existieren")
_max=max(len(n8),len(n9),len(n13))
pruef(all(int(m)<=_max for m in re.findall(r'Unterpunkt(?:e)? (\d+)', S)), f"alle Verweise <= {_max}")

print("4) Keine veraltete Zahl als gueltige Behauptung")
for bad in ["je 150 bewertete","39 von 39","Flash dreht nie","je 135 bewertete"]:
    tr=ohne_vermerk(S,bad); pruef(not tr, f"'{bad}' nur in Korrekturvermerken ({len(tr)} offene Treffer)")
pruef("94/180" in S and "85/180" in S, "Vergleichsrechnung des 8.8. (vorher/nachher) erhalten")
print("4b) Messstand — GANZER Abschnitt gegen die Kopfzahl")
# Grund fuer diese Pruefung: Am 9.8. wurde der Abschnitt nur bis zur Mitte
# ersetzt; alles darunter blieb auf dem Stand von 180 Aussagen stehen und
# fiel dem alten Skript nicht auf, weil es nur die dritte Zeile las.
_i=S.index('## Aktueller Messstand'); _j=S.index('\n## ',_i+10)
_mess=S[_i:_j]
_ml=_mess.split('\n')
pruef(STAMP in _ml[0], f"Ablesezeit '{STAMP}' steht in der Abschnittsueberschrift")
# Kopfzahlen aus der Tabelle
_tab=dict(re.findall(r'\|\s*(Sonnet|Flash)\s*\|\s*(\d+)\s*\|', _mess))
pruef(set(_tab)=={'Sonnet','Flash'}, f"Tabelle nennt beide Gehirne {_tab}")
_KOPF={k:int(v) for k,v in _tab.items()}
# Verteilungssumme je Gehirn muss die Kopfzahl ergeben
for g in ('Sonnet','Flash'):
    _z=[l for l in _ml if l.startswith(f"**{g}s Verteilung")]
    pruef(len(_z)==1, f"{g}: genau eine Verteilungszeile")
    if len(_z)==1:
        _sum=sum(int(x) for x in re.findall(r'→ (\d+)', _z[0]))
        pruef(_sum==_KOPF.get(g), f"{g}: Summe der Stufen {_sum} == Kopfzahl {_KOPF.get(g)}")
# Jeder Nenner im Abschnitt muss eine gueltige Gesamtzahl sein
_ges=set(_KOPF.values())|{sum(_KOPF.values())}
_nenner={int(x) for x in re.findall(r'/(\d{3,})\)', _mess) if int(x)>=200}
_nenner|={int(x) for x in re.findall(r'von (\d{3,})', _mess) if int(x)>=200}
pruef(_nenner<=_ges, f"alle Nenner in {sorted(_ges)} — gefunden {sorted(_nenner)}")
# Keine ueberholte Bestandszahl ausserhalb der Verlaufszeile
_ALT=(180,207,135,87,224,204,190,414)
_bad=[]
for l in _ml:
    if 'Vorherige Stände' in l or 'Verlaufsangabe' in l: continue
    for a in _ALT:
        if re.search(r'(?<![\d,\.])'+str(a)+r'(?![\d,\.%])', l): _bad.append((a,l[:60]))
pruef(not _bad, f"keine ueberholte Bestandszahl im Abschnitt {_bad if _bad else ''}")
pruef("NICHT das Ergebnis einer Berichtigung" in _mess, "Vorbehalt: die Abweichung ist nicht die Berichtigung")
pruef(_mess.rstrip().endswith('*'), "Abschnitt endet mit der Verlaufszeile — also vollstaendig ersetzt")

print("5) Versionen")
_bf=re.search(r'Fassung (\d+) ·', B.split('\n')[1])
_neueste=max(int(x) for x in re.findall(r'^## ⚠ Was Fassung (\d+) ändert', B, re.M))
pruef(_bf and int(_bf.group(1))==_neueste, f"Backlog-Kopf ({_bf.group(1) if _bf else '?'}) = neuester Fassungsabschnitt ({_neueste})")
pruef("mit neun Nachträgen" not in B and "Nachträgen ·" not in B, "Kopf nennt eine Fassungsnummer, keine Nachtragszahl")
_bpv=re.search(r'\*\*Version:\*\* (0\.\d+)', BP).group(1)
pruef(f"Was Fassung {_bpv} ändert" in BP and f"{_bpv} gehoben" in BP, f"Blueprint {_bpv} in Kopf, Aenderungsnotiz und Protokoll")
pruef("v19.8.1" in S.split('\n')[1], "STATUS-Kopf nennt die gebaute Beta-Version v19.8.1")
pruef(all("Arbeitsregel L" in x for x in (BP,S)), "Arbeitsregel L in Blueprint und STATUS")

print("6) Backlog-Verweise aufloesbar")
miss=[m for m in set(re.findall(r'Backlog-Punkt (\d+)', S)) if not re.search(r'^\*\*'+m+r'\.', B, re.M)]
pruef(not miss, f"alle Backlog-Verweise existieren {('fehlt: '+str(miss)) if miss else ''}")

print("7) Pflichtinhalte dieses Arbeitsblocks (13.8., Chat 14)")
# Diese Liste gehoert dem jeweils arbeitenden Chat. Wer sie stehen laesst,
# prueft die Vergangenheit statt der Gegenwart.
for k in ["## DER 13. AUGUST","POSITIONSVERSCHIEBUNG IST BEWIESEN",
          "ZWEI Probleme, nicht eines","paket.liste[idx]","neun** Vorhersagen",
          "vierzehn** Tagen","Stand aus der Verlängerung statt nach 90 Minuten",
          "Arbeitsregel D bestätigt","Union Berlin – Aris Limassol",
          "16 bewertet** und **11 geparkt","kein** Schnittmerkmal",
          "zehn Fehlerarten","Kalibrierungsmessung ist von der Positionsverschiebung nicht betroffen",
          "Arbeitsregel L erfüllt","Chat 13 → Chat 14"]:
    pruef(k in S, f"'{k}'")
for k in ["**41.","Zuordnung der Listenangaben über den Spielnamen",
          "GEBAUT am 13.8.2026, 16:32 Uhr (Chat 14)","ZWEITER, STÄRKERER FALL"]:
    pruef(k in B, f"Backlog '{k}'")
for k in ["## 2d. Die Übergaberegel in einer Fassung für ChatGPT",
          "BERICHTIGUNG zum Eintrag vom 9.8.","0.16 gehoben"]:
    pruef(k in BP, f"Blueprint '{k}'")
try:
    AR=open('Ondo-Core-Architektur.md',encoding='utf-8').read()
    for k in ["## 1b. Drei-Ebenen-Trennung","Ebene 3 — Bewertung","Fassung 0.4"]:
        pruef(k in AR, f"Architektur '{k}'")
except FileNotFoundError:
    pruef(False,"Ondo-Core-Architektur.md nicht gefunden")

print("8) Statuszeilen der heute bearbeiteten Punkte")
pruef(B.count("GEBAUT am 13.8.2026, 16:32 Uhr (Chat 14)")==2, "Punkte 6 und 7 als gebaut gefuehrt")
pruef("Status: 🔴 ÜBERHOLT" in B, "Punkt 27 weiter als ueberholt gefuehrt")
pruef(re.search(r'^\*\*41\.', B, re.M) is not None, "Punkt 41 existiert")
pruef("Ursache der falschen Zeiten in der Liste selbst bleibt unbekannt" in B, "Grenze von Punkt 41 benannt (Art. 11)")

print("\nERGEBNIS:", "ALLES SAUBER" if not f else f"{len(f)} FEHLER: {f}")
