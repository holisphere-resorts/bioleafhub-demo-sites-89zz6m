#!/usr/bin/env python3
"""Kopiuje demo v3 na Pulpit jako jeden plik: ~/Desktop/DEMO-STRONA-CBD-v3.html

Strona v3 nie używa żadnych obrazów (cała grafika jest rysowana w CSS),
więc kopia to zwykłe skopiowanie pliku — nic nie trzeba osadzać.
Uruchomienie: python3 build_desktop_copy.py
"""
import pathlib, shutil

src = pathlib.Path(__file__).resolve().parent / "index.html"
dst = pathlib.Path.home() / "Desktop" / "DEMO-STRONA-CBD-v3.html"
shutil.copyfile(src, dst)
print("Zapisano:", dst, "-", round(dst.stat().st_size / 1024, 1), "KB")
