# ONDO CORE - Schritt 1 der Aufstellungs-Merkmale (Backlog-Punkt 94).
# Liest den Transfermarkt-Datensatz (dcaribou/transfermarkt-datasets, CC0, Stand 6.7.2026, nicht mehr
# gepflegt) und rechnet je Spiel: Marktwert der Startelf, Marktwert der besten moeglichen Elf des Vereins
# (Spieler, die in den letzten 90 Tagen im Kader standen). Marktwert eines Spielers = letzter Eintrag
# STRENG VOR dem Spieltag. Die Rohdaten kommen NICHT ins Repo; nur die daraus berechneten Zahlen.
# Aufruf: python3 -I core/data/tm_aufstellung.py   (im Ordner, in dem x/ die entpackten *.csv.gz enthaelt)
#   Quelle: https://pub-e682421888d945d684bcae8890b0ec20.r2.dev/data/transfermarkt-datasets.zip
# Ausgabe: tm_features.json (nur im Arbeitsordner). Danach: node core/data/aufstellung_bauen.js tm_features.json
import gzip,csv,json,bisect,collections,datetime
X='x/'
COMP={'GB1','ES1','IT1','L1','FR1','NL1','PO1','TR1','BE1','SC1','DK1','A1','GR1','C1','PL1','NO1','SE1','RU1','UKR1','SER1','TS1','RO1'}
games={}
for r in csv.DictReader(gzip.open(X+'games.csv.gz','rt',encoding='utf8')):
    if r['competition_id'] in COMP and r['date']>='2012-07-01' and r['home_club_goals']!='':
        games[r['game_id']]=r
print('games',len(games))
val=collections.defaultdict(lambda:([],[]))
for r in csv.DictReader(gzip.open(X+'player_valuations.csv.gz','rt',encoding='utf8')):
    try: v=float(r['market_value_in_eur'])
    except: continue
    d,vs=val[r['player_id']]; d.append(r['date']); vs.append(v)
for p,(d,vs) in val.items():
    o=sorted(range(len(d)),key=lambda i:d[i]); val[p]=([d[i] for i in o],[vs[i] for i in o])
def wert(p,datum):   # letzter Wert STRENG vor dem Spieltag
    d,vs=val.get(p,([],[]))
    i=bisect.bisect_left(d,datum)-1
    return vs[i] if i>=0 else None
lin=collections.defaultdict(lambda:{'S':[],'B':[]})
for r in csv.DictReader(gzip.open(X+'game_lineups.csv.gz','rt',encoding='utf8')):
    if r['game_id'] in games:
        lin[(r['game_id'],r['club_id'])]['S' if r['type']=='starting_lineup' else 'B'].append(r['player_id'])
print('lineups',len(lin))
order=sorted(games.values(),key=lambda g:(g['date'],g['game_id']))
seen=collections.defaultdict(dict)   # club -> player -> last date
def tage(a,b): return (datetime.date.fromisoformat(b)-datetime.date.fromisoformat(a)).days
out=[]
for g in order:
    res={'comp':g['competition_id'],'date':g['date'],'home':g['home_club_name'],'away':g['away_club_name']}
    ok=True
    for side,club in (('H',g['home_club_id']),('A',g['away_club_id'])):
        L=lin.get((g['game_id'],club))
        if not L or len(L['S'])<11: ok=False; continue
        roster=[p for p,ld in seen[club].items() if tage(ld,g['date'])<=90]
        vals=sorted([wert(p,g['date']) or 0 for p in set(roster)|set(L['S'])],reverse=True)
        best=sum(vals[:11]); st=sum(wert(p,g['date']) or 0 for p in L['S'])
        res['start'+side]=st; res['best'+side]=best
    if ok: out.append(res)
    for side,club in (('H',g['home_club_id']),('A',g['away_club_id'])):
        L=lin.get((g['game_id'],club))
        if L:
            for p in L['S']+L['B']: seen[club][p]=g['date']
print('ausgegeben',len(out))
json.dump(out,open('tm_features.json','w'))
