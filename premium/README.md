# CBD Premium Copies

Trzy niezależne, rozwinięte kopie wcześniejszych dem. Oryginalne projekty nie zostały zmienione.

## Dema

1. `01-bioleafhub-material-atlas/index.html` — ciemny atlas procesu B2B z interaktywnym concept orbit.
2. `02-eirra-objects-of-quiet/index.html` — jasny editorial commerce z rytuałami i przeciąganą constellation scene.
3. `03-eirra-hemp-estate-360/index.html` — węzłowa interaktywna panorama 360°: Field → Atelier → Gallery.

## Uruchomienie

W tym folderze:

```bash
python3 -m http.server 8777 --bind 127.0.0.1
```

Następnie otworzyć:

- `http://127.0.0.1:8777/01-bioleafhub-material-atlas/`
- `http://127.0.0.1:8777/02-eirra-objects-of-quiet/`
- `http://127.0.0.1:8777/03-eirra-hemp-estate-360/`

Pierwsze dwa dema działają również po bezpośrednim otwarciu `index.html`. Wersję 360° należy uruchamiać przez lokalny serwer, aby przeglądarka poprawnie załadowała tekstury panoram.

## Ważne

- obrazy wygenerowane dla tej serii są concept imagery, a nie dokumentacją realnej fabryki, pola lub opakowania;
- panorama 360° daje obrót punktu widzenia i przejścia między trzema węzłami; nie jest swobodnym spacerem po modelu 3D;
- wszystkie niepotwierdzone parametry biznesowe pozostają placeholderami `[do uzupełnienia przez Marka]`;
- wszystkie zasoby runtime są lokalne; nie ma zależności od zewnętrznych CDN.

