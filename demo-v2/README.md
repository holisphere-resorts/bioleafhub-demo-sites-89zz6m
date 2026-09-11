# DEMO strony BIOLEAFHUB s.r.o. / EIRRA — wersja 2 „KARTA TECHNICZNA”

**Data:** 11 września 2026 · **Zadanie z backlogu:** #11 · **Autor:** Tatsiana/Reina + Claude (rola „Budowniczy”)
**Status:** wersja robocza do pokazania Markowi. Nic nie jest opublikowane w internecie.
**Podstawa:** `research/03-RAPORT-DLA-BUDOWNICZEGO.md` — **kierunek A „Karta techniczna”** (rozdz. 3) + obowiązkowa struktura 16 sekcji (rozdz. 4) + checklista zaufania (rozdz. 5) + wzorce mobilne (rozdz. 6).

---

## 1. Kierunek — o co tu chodzi

Strona ma wyglądać **jak specyfikacja produktu, a nie jak reklama**. Wzorem jest karta charakterystyki,
arkusz laboratoryjny i dokument przetargowy — coś, co kupiec z działu zakupów drukuje, kładzie obok
czterech innych ofert i porównuje wiersz po wierszu.

Adresat jest bardzo konkretny: **dział zakupów, hurtownia farmaceutyczna, apteka, duży dystrybutor.**
Ktoś, kto porównuje pięciu dostawców w arkuszu i potrzebuje liczb, nie nastroju.

**Trzy rzeczy, których nie ma prawie nikt z 70 obejrzanych stron, a które ta wersja ma:**

| Sekcja | Dlaczego to przewaga |
|---|---|
| **06 · Proces krok po kroku** | tylko 9 z 70 stron rozpisuje współpracę na ponumerowane kroki; zdejmuje lęk „nie wiem, jak to się w ogóle robi” |
| **12 · Na co patrzeć przy wyborze dostawcy** + **13 · Słownik** | treść edukacyjna o prawie i rynku, nie o „zaletach CBD” — najtańsza droga do wiarygodności |
| **09 · Warunki handlowe w tabeli** | próg wartościowy, termin płatności, godzina odcięcia wysyłki, wysyłka neutralna — 8 z 70 stron w ogóle o tym pisze, a to jest to, co rozstrzyga rozmowę |

---

## 2. Czym różni się od v1 — trzy osie

| Oś | **demo v1** | **demo v2 (ta wersja)** |
|---|---|---|
| **1. Paleta** | ciemna zieleń `#07180F` + złoto `#E0C47E` z gradientem 3D; strona świeci | papierowa biel `#FAFAF8`, atrament `#14161A`, linia `#DCDCD6`, pole danych `#F1F1EC` i **jeden sygnałowy granat `#1B3A6B`** (przyciski, liczby kluczowe, aktywna sekcja). Zieleń `#2F5D46` zajmuje ok. 5 % powierzchni — wyłącznie cienka ramka wokół odznak certyfikatów. **Zero złota, zero gradientów, zero zaokrągleń, zero cieni — same linie poziome.** |
| **2. Typografia** | **Cinzel** (szeryf rzymski, wersaliki) w nagłówkach, Inter w tekście | **Inter Tight 700** w nagłówkach, **bez wersalików**, ujemny odstęp; Inter 17 px w tekście; **`IBM Plex Mono` na WSZYSTKICH liczbach** — MOQ, stężenia, gramatury, IČO, numer telefonu, daty, numery sekcji, etykiety tabel. To jest cała tożsamość tego kierunku. |
| **3. Układ i nawigacja** | pełnoekranowy hero ze zdjęciem tła i wzorem topograficznym, sekcje jedna pod drugą, menu z 5 pozycjami | **hero bez obrazka — cztery linijki faktów** (co robimy · od ilu sztuk · w ile tygodni · jaki certyfikat); dalej **dwie kolumny z przyklejonym panelem specyfikacji** po lewej (jedzie z czytelnikiem przez całą stronę); nawigacja to **spis treści dokumentu z 16 numerowanymi sekcjami `01–16`** z podświetleniem aktywnej przy przewijaniu; dane w **tabelach**, nie w akapitach. |

**Teksty są te same co w v1** (hero, cztery modele współpracy, katalog EIRRA, lista dokumentów, nota prawna)
— celowo, żeby Marek porównywał **wygląd, nie treść**. Dopisane są tylko te sekcje, których v1 w ogóle nie miał
(segmenty klienta, proces, warunki handlowe, surowiec, ludzie, wiedza, słownik, FAQ, dane rejestrowe).

---

## 3. Co jest na stronie — 16 sekcji

`00` pasek kontaktowy (telefon, e-mail, godziny, PL/EN) — przyklejony u góry, nad spisem treści
`01` Oferta (hero: 4 linijki faktów) · `02` Liczby (pasek pięciu liczb) · `03` Certyfikaty
`04` Modele współpracy (6) · `05` Klienci (8 typów firm) · `06` Proces (4 kroki z terminami)
`07` Katalog EIRRA (10 kategorii, 50 pozycji w tabeli) · `08` Jakość i dokumentacja (3 grupy)
`09` Warunki handlowe (tabela 9 pozycji) · `10` Surowiec · `11` Ludzie · `12` Wiedza
`13` Słownik (16 pojęć) · `14` FAQ o współpracy · `15` Kontakt (5 ścieżek + formularz) · `16` Dane rejestrowe

**Na telefonie** dochodzi przyklejony do dolnej krawędzi pasek **`Zadzwoń · WhatsApp · Zapytaj`** —
żadna z 70 obejrzanych stron tego nie ma.

---

## 4. Placeholdery — czego potrzebujemy od Marka

Zasada jest ta sama co w v1 i **ostrzejsza**: żadnej liczby, której nie mamy potwierdzonej.
Na stronie jest **59 widocznych plakietek** w ochrowej ramce z tekstem w nawiasach kwadratowych.

Pełna lista 19 pól jest niezmieniona i opisana w `../demo-v1/README.md`, punkt 2. W v2 dochodzą pola,
których v1 nie miał — wszystkie z rozdz. 4 i 5 raportu:

| Gdzie | Czego brakuje |
|---|---|
| 02 Liczby | kraje dostaw · MOQ · termin realizacji · liczba wyprodukowanych sztuk (jedyna potwierdzona liczba to rok rejestracji spółki: **2023**) |
| 03 Certyfikaty | dla GMP, ISO 22716, ISO 22000, HACCP i COA: **numer, jednostka certyfikująca, rok** — albo pozycja znika ze strony |
| 06 Proces | termin przy każdym z czterech kroków (odpowiedź, propozycja, próbka, realizacja) |
| 09 Warunki handlowe | MOQ · progi cenowe ex-works · minimum wartościowe · termin realizacji · termin płatności · Incoterms · godzina odcięcia wysyłki · wysyłka neutralna · ubezpieczenie produktu |
| 10 Surowiec | kraj uprawy i dostawca · metoda ekstrakcji (CO₂ / etanol) · adres zakładu · nazwa laboratorium · wzór numeru partii |
| 11 Ludzie | druga osoba kontaktowa (imię, rola, telefon, zakres) |
| 12 Wiedza | trzy teksty są wymienione z tytułu i oznaczone `[w przygotowaniu]` |
| 15 Kontakt | adresy według ról (`hurt@`, `whitelabel@`, `surowiec@`) — po uruchomieniu domeny |
| 16 Rejestr | VAT / DIČ · adres zakładu · potwierdzenie domeny `bioleafhub.com` |
| wszędzie | **numer telefonu i WhatsApp Marka** (teraz `+420 000 000 000`) i godziny, w których można dzwonić |

Dane rejestrowe, które **są** prawdziwe (z `DANE-FIRMY-BIOLEAFHUB.md`, zrzut z 4.09.2026):
IČO 19889267 · Dolní Žukov č.ev. 28, 737 01 Český Těšín · rejestracja 2.11.2023 · Krajský soud v Ostravě, C 94146 · datová schránka 7ydk6x2.

---

## 5. Czego strona świadomie NIE robi

- **Żadnych obietnic zdrowotnych.** Zero słów „leczy”, „pomaga na”, „łagodzi”. W stopce pełna nota prawna.
- **Żadnego liścia konopi.** Z folderu `img/` **usunięte zostały dwa pliki z v1** (`studio-dark.jpg`, `collection-skin.jpg`) — na pierwszym w tle są liście i cień liścia konopi. Został jeden render (`collection-core.jpg`, jasne kamienne tło, same opakowania). W sekcji 10 zamiast zdjęcia stoi **jawna ramka `[zdjęcie zakładu i surowca — do wykonania]`** — wolimy puste miejsce niż zdjęcie z banku zdjęć.
- **Żadnej deklaracji bez nazwy.** Nigdzie nie pada słowo „certyfikowani” bez nazwy certyfikatu (błąd 3 z raportu — psuje wiarygodność mocniej, niż pomaga odznaka).
- **Zero nakładek na wejściu** — bramki wieku, modali cookies, kuponów. Kupującym jest firma.
- **Zero koszyka, cen brutto i kodów rabatowych.**
- **Zero bibliotek JavaScript.** Cała strona to jeden plik `index.html` (84 KB) + jedno zdjęcie (160 KB) = **242 KB**. Z internetu dociąga tylko trzy kroje z Google Fonts; bez internetu podstawia zapasowe i dalej wygląda poprawnie.

---

## 6. Wyniki testów (Playwright, Chrome headless)

| Sprawdzenie | Wymóg z raportu | Wynik |
|---|---|---|
| `document.body.scrollWidth` przy 390 px | dokładnie 390 (błąd 8) | **390** ✅ (także po przełączeniu na EN) |
| Błędy JavaScript w konsoli | zero | **zero** ✅ |
| Jeden `<h1>` | dokładnie 1 (błąd 2) | **1** ✅ |
| Rozmiar H1 / tekstu | H1 ≥ 2,5× tekst, tekst ≥ 16 px także na telefonie | desktop 56 / 17 px · telefon **31 / 16 px** ✅ |
| Klikalny `tel:` i `mailto:` | w nagłówku i w stopce (błąd 9) | **7 × `tel:`, 6 × `mailto:`** ✅ |
| Waga strony | < 1 MB, zero bibliotek (błąd 7) | **242 KB**, zero bibliotek, wczytanie ~1,8 s ✅ |
| Rok w stopce | aktualny (błąd 10) | **© 2026** ✅ |
| Strona mobilna ≤ 2× desktopowa | rozdz. 6 pkt 3 | 18 415 px / 9 971 px = **1,85×** ✅ |
| Przełącznik PL / EN | oba języki kompletne | ✅ (sprawdzone zrzutem `desktop-en.png`, `mobile-en.png`) |
| Spis treści 01–16 + podświetlenie | kierunek A | **16 pozycji, mieści się w całości na 1440 px**, aktywna sekcja podświetlona granatem ✅ |

**Jedno odstępstwo, świadome.** Raport stawia limit **6 000 px wysokości na desktopie** (błąd 6 — przeciw
ścianom tekstu pod SEO). Ta strona ma **9 971 px**, bo rozdz. 4 tego samego raportu każe zbudować
**16 sekcji**, a każda z nich odpowiada na inne pytanie kupującego. Nie da się mieć obu naraz.
Lekarstwo, gdy Marek wybierze ten kierunek: sekcje **12 Wiedza, 13 Słownik i 14 FAQ** przenieść na podstrony
(`wiedza.html`, `slownik.html`, `faq.html`) — strona główna schodzi wtedy do ok. **8 200 px**, a dalsze cięcie
oznacza już usuwanie sekcji z obowiązkowej szesnastki.

---

## 7. Pliki

| Plik | Co to |
|---|---|
| `index.html` | cała strona — wygląd, teksty PL/EN i logika w jednym pliku (84 KB) |
| `img/collection-core.jpg` | jedyne zdjęcie na stronie (plansza „Rys. 01” w sekcji 07) |
| `build_desktop_copy.py` | jedno polecenie: odświeża kopię na Pulpicie |
| `screens/` | zrzuty: `desktop-hero`, `desktop-full`, `desktop-en`, `desktop-s04/s07/s09/s10/s13/s15`, `mobile-hero`, `mobile-full`, `mobile-en`, `mobile-s02/s04/s07/s09/s13/s15` |
| `README.md` | ten plik |

---

## 8. Jak pokazać Markowi

**Najprościej (bez internetu, bez wysyłania niczego):**
1. Na Pulpicie leży **`DEMO-STRONA-CBD-v2.html`** — ta sama strona ze zdjęciem wtopionym w środek, jeden plik **0,29 MB**, nic obok nie potrzebuje.
2. Dwuklik → otwiera się w przeglądarce.
3. Pokazujesz z góry na dół. Po drodze: klik w pozycje **spisu treści** u góry (skacze do sekcji), klik w kategorie w sekcji **07 Katalog**, przełącznik **PL / EN** w prawym górnym rogu.

**Jeśli Marek ma zobaczyć sam:** wyślij mu ten jeden plik przez WhatsApp jako **„Dokument”** (nie „Zdjęcie”) —
otworzy się u niego na telefonie i na komputerze. Albo wyślij zrzuty z `screens/`.

**Obok leżą trzy pozostałe wersje** (`DEMO-STRONA-CBD-v1.html`, `-v3.html` i katalog `Demo-strona-CBD/`).
Pytanie do Marka brzmi wtedy — zgodnie z raportem, rozdz. 3 — nie „czy się podoba?”, tylko:

> **„Do którego z tych czterech dostawców zadzwoniłbyś jako pierwszy?”**

A po odpowiedzi jedno pytanie kontrolne: **które z pól w ochrowych ramkach może uzupełnić od ręki, a które wymagają sprawdzenia.**

---

## 9. Jak coś zmienić w pliku (dla przyszłej sesji)

Wszystko siedzi w `index.html`, w blokach na dole pliku, każdy z komentarzem:

- **`var T = { pl: {...}, en: {...} }`** — wszystkie teksty obu języków. Jedna zmiana = dwa miejsca.
- **`var TOC`** — spis treści (16 pozycji, numeracja liczy się sama).
- **`var CERT` · `var MOD` · `var SEG` · `var STEP`** — certyfikaty, modele współpracy, segmenty klienta, kroki procesu.
- **`var CATS` i `var P`** — kategorie i 50 pozycji katalogu EIRRA.
- **`var QUAL` · `var TERMS` · `var SRC`** — trzy grupy dokumentów, tabela warunków handlowych, tabela surowca.
- **`var ART` · `var GL` · `var FAQ` · `var ROUTES`** — teksty wiedzy, słownik, FAQ, ścieżki kontaktu.

**Kolory, kroje i wysokość przyklejonego nagłówka** są na samej górze pliku, w bloku `:root{…}` — jedno miejsce na całą paletę.

Po każdej zmianie odśwież kopię na Pulpicie:

```
python3 build_desktop_copy.py
```

Skrypt wtapia zdjęcie w HTML i nadpisuje `~/Desktop/DEMO-STRONA-CBD-v2.html`
oraz `~/Desktop/Demo-strona-CBD/demo-v2/`.

**Przed każdą publikacją** (lista kontrolna z raportu, rozdz. 8): jeden `<h1>` · tekst ≥ 16 px także na telefonie ·
`document.body.scrollWidth === 390` przy szerokości 390 px · `tel:` i `mailto:` klikalne · rok w stopce aktualny ·
korekta obu języków · czas wczytania < 3 s · zero nakładek na pierwszym ekranie.
