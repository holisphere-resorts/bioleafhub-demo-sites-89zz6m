#!/usr/bin/env python3
"""
Odswieza kopie demo-v2 na Pulpicie Tatsiany/Reiny.

Robi dwie rzeczy:
 1. kopiuje caly folder demo-v2 (index.html + img/ + screens/ + README) do
    ~/Desktop/Demo-strona-CBD/demo-v2/  — to sie otwiera dwuklikiem,
 2. sklada jeden samodzielny plik ~/Desktop/Demo-strona-CBD/DEMO-STRONA-CBD-v2.html
    ze zdjeciami wtopionymi w srodek (base64) — taki plik mozna wyslac Markowi
    przez WhatsApp jako "Dokument" i otworzy sie u niego bez niczego obok.

Uruchomienie:  python3 build_desktop_copy.py
"""
import base64
import pathlib
import re
import shutil

SRC = pathlib.Path(__file__).resolve().parent
DESK = pathlib.Path.home() / "Desktop" / "Demo-strona-CBD"
DST_DIR = DESK / SRC.name
DST_ONE = DESK / "DEMO-STRONA-CBD-v2.html"
DST_TOP = pathlib.Path.home() / "Desktop" / "DEMO-STRONA-CBD-v2.html"

DESK.mkdir(parents=True, exist_ok=True)
if DST_DIR.exists():
    shutil.rmtree(DST_DIR)
shutil.copytree(SRC, DST_DIR, ignore=shutil.ignore_patterns("__pycache__"))

html = (SRC / "index.html").read_text(encoding="utf-8")
cache = {}


def data_uri(rel: str) -> str:
    if rel not in cache:
        cache[rel] = "data:image/jpeg;base64," + base64.b64encode((SRC / rel).read_bytes()).decode()
    return cache[rel]


out = re.sub(
    r'(["\'(])(img/[A-Za-z0-9\-_.]+\.jpg)(["\')])',
    lambda m: m.group(1) + data_uri(m.group(2)) + m.group(3),
    html,
)
DST_ONE.write_text(out, encoding="utf-8")
DST_TOP.write_text(out, encoding="utf-8")
print(f"Folder: {DST_DIR}")
print(f"Jeden plik: {DST_ONE}  ({DST_ONE.stat().st_size / 1024 / 1024:.2f} MB, wtopionych zdjec: {len(cache)})")
print(f"Kopia na Pulpicie: {DST_TOP}")
