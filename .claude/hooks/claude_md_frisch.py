# -*- coding: utf-8 -*-
"""Erinnert bei Sitzungsstart daran, CLAUDE.md zu erneuern (Backlog-Punkt 54).

Vergleicht den Git-Blob-Hash der vier Pflichtdokumente mit der Tabelle im Abschnitt
"Pruefstand dieser Datei" am Ende von CLAUDE.md. Weicht einer ab, ist CLAUDE.md aus
einem aelteren Stand geschrieben und gehoert erneuert.

Der Hook ERINNERT NUR. Er erneuert nichts von selbst (Beschluss Ondo, 16.8.) und
bricht nichts ab — der Rueckgabewert ist immer 0.

Warum der Blob-Hash und nicht die Commit-Kennung: Der letzte Commit einer Datei
aendert sich bei jedem Commit, der sie beruehrt — auch bei dem, der CLAUDE.md
miterzeugt. Der Hook schlaegt dann sofort an. Der Blob-Hash haengt nur am Inhalt und
ist derselbe Wert, den Git in seinem Baum speichert. Er wird hier in reinem Python
gerechnet, damit der Hook auch ohne Aufruf von git laeuft.
"""
import hashlib
import os
import re
import sys

DOKUMENTE = ('STAND.md', 'Ondo-Control-Backlog.md',
             'Blueprint.md', 'Ondo-Core-Architektur.md')

# Repo-Wurzel: zwei Ebenen ueber .claude/hooks/
WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def blob_hash(pfad):
    """Derselbe Wert wie `git hash-object <datei>`."""
    with open(pfad, 'rb') as f:
        inhalt = f.read()
    kopf = b'blob ' + str(len(inhalt)).encode() + b'\0'
    return hashlib.sha1(kopf + inhalt).hexdigest()


def main():
    claude_md = os.path.join(WURZEL, 'CLAUDE.md')
    if not os.path.exists(claude_md):
        print("HINWEIS: CLAUDE.md fehlt im Repo (Backlog-Punkt 54). Sie wird aus "
              "STAND.md, Ondo-Control-Backlog.md, Blueprint.md und "
              "Ondo-Core-Architektur.md geschrieben — jedes vollstaendig gelesen.")
        return 0

    with open(claude_md, encoding='utf-8') as f:
        text = f.read()
    vermerkt = dict(re.findall(r'^- ([A-Za-z0-9_.\-]+\.md) — `([0-9a-f]{40})`$',
                               text, re.M))
    if not vermerkt:
        print("HINWEIS: CLAUDE.md enthaelt keinen Pruefstand (Abschnitt "
              "'Pruefstand dieser Datei'). Ob sie zum heutigen Stand der vier "
              "Pflichtdokumente passt, ist damit nicht pruefbar (Art. 11).")
        return 0

    geaendert, fehlend, ungeprueft = [], [], []
    for name in DOKUMENTE:
        pfad = os.path.join(WURZEL, name)
        if not os.path.exists(pfad):
            fehlend.append(name)
        elif name not in vermerkt:
            ungeprueft.append(name)
        elif blob_hash(pfad) != vermerkt[name]:
            geaendert.append(name)

    if geaendert:
        print("HINWEIS: CLAUDE.md ist aelter als die Pflichtdokumente. Geaendert "
              "seit der letzten Erzeugung: " + ", ".join(geaendert) + ".")
        print("         CLAUDE.md gehoert erneuert — die betroffenen Dokumente "
              "vollstaendig lesen und die Datei daraus neu schreiben, nicht aus "
              "dem Gedaechtnis ergaenzen. Danach den Pruefstand am Ende von "
              "CLAUDE.md mitfuehren.")
        print("         Nichts wurde automatisch geaendert (Beschluss Ondo, 16.8.).")
    if fehlend:
        print("HINWEIS: Pflichtdokument nicht im Ordner: " + ", ".join(fehlend) + ".")
    if ungeprueft:
        print("HINWEIS: Im Pruefstand von CLAUDE.md nicht vermerkt: "
              + ", ".join(ungeprueft) + ". Fuer diese Dateien ist nicht pruefbar, "
              "ob CLAUDE.md ihren Stand kennt (Art. 11).")
    return 0


if __name__ == '__main__':
    try:
        sys.exit(main())
    except Exception as fehler:                      # noqa: BLE001
        # Ein Hook darf eine Sitzung nie blockieren. Der Fehler wird gemeldet,
        # nicht verschwiegen (Art. 1) — und der Start laeuft weiter.
        print("HINWEIS: Die Frischepruefung von CLAUDE.md ist ausgefallen: "
              + repr(fehler) + ". Ob CLAUDE.md aktuell ist, ist damit ungeprueft.")
        sys.exit(0)
