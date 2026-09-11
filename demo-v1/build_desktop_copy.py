#!/usr/bin/env python3
"""
Robi z index.html jeden samodzielny plik na Pulpit Tatsiany/Reiny.

Po co: index.html trzyma zdjęcia obok, w folderze img/. Jeden plik HTML
wysłany Markowi przez WhatsApp nie miałby tych zdjęć. Ten skrypt wtapia je
w środek pliku (base64), więc kopia na Pulpicie działa sama, bez niczego obok.

Uruchomienie:  python3 build_desktop_copy.py
Wynik:         ~/Desktop/DEMO-STRONA-CBD-v1.html
"""
import base64
import pathlib
import re

SRC = pathlib.Path(__file__).resolve().parent
DST = pathlib.Path.home() / "Desktop" / "DEMO-STRONA-CBD-v1.html"

html = (SRC / "index.html").read_text(encoding="utf-8")
cache = {}


def data_uri(rel: str) -> str:
    if rel not in cache:
        cache[rel] = "data:image/jpeg;base64," + base64.b64encode((SRC / rel).read_bytes()).decode()
    return cache[rel]


out = re.sub(
    r'(["\'])(img/[A-Za-z0-9\-_.]+\.jpg)(["\'])',
    lambda m: m.group(1) + data_uri(m.group(2)) + m.group(3),
    html,
)
DST.write_text(out, encoding="utf-8")
print(f"Wtopiono zdjec: {len(cache)}  |  rozmiar: {DST.stat().st_size / 1024 / 1024:.2f} MB  ->  {DST}")
