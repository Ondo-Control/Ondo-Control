import re,sys
S=open('PROJEKT-STATUS.md',encoding='utf-8').read()
B=open('Ondo-Control-Backlog.md',encoding='utf-8').read()
BP=open('Blueprint.md',encoding='utf-8').read()
STAMP=sys.argv[1] if len(sys.argv)>1 else sys.exit("ABBRUCH: Uhrzeit fehlt. Aufruf: python3 pruefe.py 'HH:MM Uhr' — Wert MUSS vom Uhr-Werkzeug stammen, NICHT von date im Container (laeuft in UTC).")
MARK=('Hier stand zuerst','berichtigt','Berichtigung','belassen','Widerspruch','WIDERLEGT',
      'nachgerechnet','Nachprüfung','stimmt nicht','war zu stark','Verlaufsangabe','vorherige','Vorherige','(falsch:','Fehlerart','Verallgemeinerung','hätte')
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
n=[int(x) for x in re.findall(r'^### (\d+)\.', S[S.index('## DER 8. AUGUST'):S.index('## DER 7. AUGUST')], re.M)]
pruef(n==list(range(1,len(n)+1)), f"8. August 1..{len(n)}")

print("3) Querverweise auf Unterpunkte existieren")
pruef(all(int(m)<=len(n) for m in re.findall(r'Unterpunkt(?:e)? (\d+)', S)), "alle Verweise gueltig")

print("4) Keine veraltete Zahl als gueltige Behauptung")
for bad in ["je 150 bewertete","39 von 39","Flash dreht nie","je 135 bewertete"]:
    tr=ohne_vermerk(S,bad); pruef(not tr, f"'{bad}' nur in Korrekturvermerken ({len(tr)} offene Treffer)")
pruef("94/180" in S and "85/180" in S, "beide Messstaende (vorher/nachher) vorhanden")

print("5) Versionen")
import re as _re
_bf=_re.search(r'Fassung (\d+) ·', B.split('\n')[1])
_neueste=max(int(x) for x in _re.findall(r'^## ⚠ Was Fassung (\d+) ändert', B, _re.M))
pruef(_bf and int(_bf.group(1))==_neueste, f"Backlog-Kopf ({_bf.group(1) if _bf else '?'}) = neuester Fassungsabschnitt ({_neueste})")
pruef("mit neun Nachträgen" not in B and "Nachträgen ·" not in B, "Kopf nennt eine Fassungsnummer, keine Nachtragszahl")
_bpv=_re.search(r'\*\*Version:\*\* (0\.\d+)', BP).group(1)
pruef(f"Was Fassung {_bpv} ändert" in BP and f"{_bpv} gehoben" in BP, f"Blueprint {_bpv} in Kopf, Aenderungsnotiz und Protokoll")
pruef("v19.8.0" in S.split('\n')[1], "STATUS-Kopf nennt die gebaute Beta-Version v19.8.0")
pruef(all("Arbeitsregel L" in x for x in (BP,S)), "Arbeitsregel L in Blueprint und STATUS")

print("6) Backlog-Verweise aufloesbar")
miss=[m for m in set(re.findall(r'Backlog-Punkt (\d+)', S)) if not re.search(r'^\*\*'+m+r'\.', B, re.M)]
pruef(not miss, f"alle Backlog-Verweise existieren {('fehlt: '+str(miss)) if miss else ''}")

print("7) Pflichtinhalte dieses Chats")
# Pflichtinhalte von Chat 13 (9.8.). Die Liste des 8.8. stand hier vorher und pruefte
# die Vergangenheit statt der Gegenwart — Hinweis aus der Abnahme von Chat 12.
for k in ["Punkt F gebaut","codeVersion","CODE_VERSION","Schnitt liegt bei v19.8.0",
          "Schnitt → Prüflauf → Berichtigung","16 falsch bewertete Aussagen statt 15",
          "APP_VERSION` bleibt bei 18","Altbestand ist nicht angefasst",
          "Ondos Einwand hat den Bau vereinfacht"]:
    pruef(k in S, f"'{k}'")

print("\nERGEBNIS:", "ALLES SAUBER" if not f else f"{len(f)} FEHLER: {f}")
