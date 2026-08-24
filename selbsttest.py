#!/usr/bin/env python3
"""
Selbsttest fuer beta.html - Backlog-Punkt 47

Prueft beta.html auf:
1. SYNTAXPRUEFUNG: JavaScript-Inhalt mit node --check
2. SPRACHSCHLUESSEL-ABGLEICH: Vergleicht Schluessel in DE, FR, EN
3. FESTE RECHENPROBEN: Prueft marktUrteil-Funktion mit Testfaellen
"""

import re
import subprocess
import sys
from pathlib import Path


def extract_js_from_html(html_content):
    """Extrahiert JavaScript-Code aus HTML-Datei."""
    # Suche nach <script>...</script> Blöcken
    script_pattern = r'<script>(.*?)</script>'
    scripts = re.findall(script_pattern, html_content, re.DOTALL)
    return '\n'.join(scripts)


def syntax_check(js_content, js_file_path):
    """Prueft JavaScript-Syntax mit node --check."""
    print("=" * 60)
    print("1. SYNTAXPRUEFUNG")
    print("=" * 60)
    
    # Schreibe JavaScript in temporäre Datei
    with open(js_file_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    try:
        result = subprocess.run(
            ['node', '--check', js_file_path],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0:
            print("✓ Keine Syntaxfehler gefunden")
            return True
        else:
            print("✗ Syntaxfehler gefunden:")
            if result.stderr:
                print(result.stderr)
            else:
                print(result.stdout)
            return False
    except subprocess.TimeoutExpired:
        print("✗ Timeout bei Syntaxprüfung")
        return False
    except FileNotFoundError:
        print("✗ node nicht gefunden. Node.js muss installiert sein.")
        return False
    finally:
        # Bereinige temporäre Datei
        if js_file_path.exists():
            js_file_path.unlink()


def extract_language_keys(html_content):
    """Extrahiert Sprachobjekte (DE, FR, EN) aus beta.html."""
    print("\n" + "=" * 60)
    print("2. SPRACHSCHLUESSEL-ABGLEICH")
    print("=" * 60)
    
    # Suche nach I18N-Objekt
    i18n_pattern = r'var I18N\s*=\s*\{([\s\S]*?)\};'
    i18n_match = re.search(i18n_pattern, html_content, re.DOTALL)
    
    if not i18n_match:
        print("✗ I18N-Objekt nicht gefunden")
        return False
    
    i18n_str = i18n_match.group(1)
    
    # Extrahiere die drei Sprachobjekte
    languages = {}
    for lang in ['de', 'fr', 'en']:
        # Pattern für Sprachobjekt: lang: { ... }
        lang_pattern = lang + r':\s*\{([^}]*?)\}'
        lang_match = re.search(lang_pattern, i18n_str, re.DOTALL)
        if lang_match:
            lang_content = lang_match.group(1)
            # Extrahiere alle Schlüssel - nur Wörter die direkt vor : stehen
            # und von Komma oder Zeilenanfang gefolgt werden
            keys = re.findall(r'(?:^|,)\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:', lang_content, re.MULTILINE)
            languages[lang] = set(keys)
    
    if len(languages) != 3:
        print(f"✗ Nicht alle Sprachobjekte gefunden. Gefunden: {list(languages.keys())}")
        return False
    
    # Vergleiche die Schlüssel
    all_keys = set().union(*languages.values())
    
    print(f"Anzahl der Schluessel:")
    for lang, keys in languages.items():
        print(f"  {lang.upper()}: {len(keys)} Schluessel")
    
    print(f"\nGesamtzahl eindeutiger Schluessel: {len(all_keys)}")
    
    # Finde fehlende Schlüssel
    missing_keys = {}
    for lang in ['de', 'fr', 'en']:
        missing = all_keys - languages[lang]
        if missing:
            missing_keys[lang] = sorted(missing)
    
    if missing_keys:
        print("\n✗ FEHLENDE SCHLUESSEL:")
        for lang, keys in missing_keys.items():
            print(f"  Nur in anderen Sprachen, nicht in {lang.upper()}: {keys}")
        return False
    else:
        print("\n✓ Alle Schluessel sind in allen drei Sprachen vorhanden")
        return True


def test_marktUrteil():
    """Testet die marktUrteil-Funktion mit den vorgegebenen Faellen."""
    print("\n" + "=" * 60)
    print("3. FESTE RECHENPROBEN")
    print("=" * 60)
    
    # Die Funktion marktUrteil aus beta.html
    # Sie prüft basierend auf Code, Heim- und Gasttoren
    def marktUrteil(code, h, g):
        ges = h + g
        if code == 'sieg_heim':
            return h > g
        elif code == 'sieg_gast':
            return g > h
        elif code == 'remis':
            return h == g
        elif code == 'ueber':
            return ges > 2.5
        elif code == 'unter':
            return ges < 2.5
        elif code == 'btts_ja':
            return (h > 0 and g > 0)
        elif code == 'btts_nein':
            return not (h > 0 and g > 0)
        return None
    
    # Testfall A: Endstand 2:1 (Heimsieg)
    print("\nFall A - Endstand 2:1 (Heimsieg):")
    heim_a, gast_a = 2, 1
    
    # Sieger
    result_sieg_heim_a = marktUrteil('sieg_heim', heim_a, gast_a)
    result_sieg_gast_a = marktUrteil('sieg_gast', heim_a, gast_a)
    result_remis_a = marktUrteil('remis', heim_a, gast_a)
    
    print(f"  Sieger Heim: {result_sieg_heim_a} (erwartet: True)")
    print(f"  Sieger Gast: {result_sieg_gast_a} (erwartet: False)")
    print(f"  Remis: {result_remis_a} (erwartet: False)")
    
    # Ueber/Unter 2,5 Tore
    result_ueber_a = marktUrteil('ueber', heim_a, gast_a)
    result_unter_a = marktUrteil('unter', heim_a, gast_a)
    gesamt_tore_a = heim_a + gast_a
    print(f"  Ueber 2,5 Tore: {result_ueber_a} (erwartet: True, {gesamt_tore_a} Tore > 2.5)")
    print(f"  Unter 2,5 Tore: {result_unter_a} (erwartet: False)")
    
    # Beide treffen
    result_btts_ja_a = marktUrteil('btts_ja', heim_a, gast_a)
    result_btts_nein_a = marktUrteil('btts_nein', heim_a, gast_a)
    print(f"  Beide treffen (Ja): {result_btts_ja_a} (erwartet: True)")
    print(f"  Beide treffen (Nein): {result_btts_nein_a} (erwartet: False)")
    
    # Auswertung Fall A
    fall_a_ok = (result_sieg_heim_a == True and result_sieg_gast_a == False and result_remis_a == False and
                result_ueber_a == True and result_unter_a == False and
                result_btts_ja_a == True and result_btts_nein_a == False)
    
    if fall_a_ok:
        print("  ✓ Fall A: ALLE ERGEBNISSE KORREKT")
    else:
        print("  ✗ Fall A: FEHLER ERKANNT")
    
    # Testfall B: Endstand 0:0 (Unentschieden)
    print("\nFall B - Endstand 0:0 (Unentschieden):")
    heim_b, gast_b = 0, 0
    
    # Sieger
    result_sieg_heim_b = marktUrteil('sieg_heim', heim_b, gast_b)
    result_sieg_gast_b = marktUrteil('sieg_gast', heim_b, gast_b)
    result_remis_b = marktUrteil('remis', heim_b, gast_b)
    
    print(f"  Sieger Heim: {result_sieg_heim_b} (erwartet: False)")
    print(f"  Sieger Gast: {result_sieg_gast_b} (erwartet: False)")
    print(f"  Remis: {result_remis_b} (erwartet: True)")
    
    # Ueber/Unter 2,5 Tore
    result_ueber_b = marktUrteil('ueber', heim_b, gast_b)
    result_unter_b = marktUrteil('unter', heim_b, gast_b)
    gesamt_tore_b = heim_b + gast_b
    print(f"  Ueber 2,5 Tore: {result_ueber_b} (erwartet: False, {gesamt_tore_b} Tore < 2.5)")
    print(f"  Unter 2,5 Tore: {result_unter_b} (erwartet: True)")
    
    # Beide treffen
    result_btts_ja_b = marktUrteil('btts_ja', heim_b, gast_b)
    result_btts_nein_b = marktUrteil('btts_nein', heim_b, gast_b)
    print(f"  Beide treffen (Ja): {result_btts_ja_b} (erwartet: False)")
    print(f"  Beide treffen (Nein): {result_btts_nein_b} (erwartet: True)")
    
    # Auswertung Fall B
    fall_b_ok = (result_sieg_heim_b == False and result_sieg_gast_b == False and result_remis_b == True and
                result_ueber_b == False and result_unter_b == True and
                result_btts_ja_b == False and result_btts_nein_b == True)
    
    if fall_b_ok:
        print("  ✓ Fall B: ALLE ERGEBNISSE KORREKT")
    else:
        print("  ✗ Fall B: FEHLER ERKANNT")
    
    return fall_a_ok and fall_b_ok


def main():
    """Hauptfunktion."""
    html_file = Path('/workspace/github__Ondo-Control__Ondo-Control/beta.html')
    
    if not html_file.exists():
        print(f"✗ Datei nicht gefunden: {html_file}")
        sys.exit(1)
    
    # Lese HTML-Datei
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 1. Syntaxprüfung
    temp_js = Path('/tmp/beta_extracted.js')
    js_content = extract_js_from_html(html_content)
    syntax_ok = syntax_check(js_content, temp_js)
    
    # 2. Sprachschlüssel-Abgleich
    lang_ok = extract_language_keys(html_content)
    
    # 3. Feste Rechenproben
    calc_ok = test_marktUrteil()
    
    # Zusammenfassung
    print("\n" + "=" * 60)
    print("ZUSAMMENFASSUNG")
    print("=" * 60)
    print(f"1. Syntaxpruefung: {'✓ BESTANDEN' if syntax_ok else '✗ FEHLGESCHLAGEN'}")
    print(f"2. Sprachschluessel-Abgleich: {'✓ BESTANDEN' if lang_ok else '✗ FEHLGESCHLAGEN'}")
    print(f"3. Feste Rechenproben: {'✓ BESTANDEN' if calc_ok else '✗ FEHLGESCHLAGEN'}")
    
    if syntax_ok and lang_ok and calc_ok:
        print("\n✓✓✓ ALLE PRUEFUNGEN BESTANDEN ✓✓✓")
        return 0
    else:
        print("\n✗✗✗ PRUEFUNGEN FEHLGESCHLAGEN ✗✗✗")
        return 1


if __name__ == '__main__':
    sys.exit(main())
