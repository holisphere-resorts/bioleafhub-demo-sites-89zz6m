# DEMO strony BIOLEAFHUB s.r.o. / EIRRA — wersja 3 · kierunek C „SYGNAŁ”

**Data:** 11 września 2026 · **Zadanie z backlogu:** #11 · **Autor:** Tatsiana/Reina + Claude (rola: Budowniczy)
**Podstawa:** `research/03-RAPORT-DLA-BUDOWNICZEGO.md` (Inspektor, 70 stron obejrzanych w przeglądarce), kierunek **C**
**Status:** wersja robocza do pokazania Markowi. **Nic nie jest opublikowane w internecie.**

---

## 1. Kierunek C w jednym zdaniu

Biała strona z jednym mocnym kolorem rozlanym na dużych polach i z bardzo dużą, geometryczną typografią.
Zero zieleni, zero złota, zero zdjęć nastrojowych. Ma wyglądać jak marka, która stała na targach i wie,
że musi być widoczna z dziesięciu metrów — a jednocześnie ma pod ręką wszystkie liczby, o które pyta kupiec.

## 2. Wybrany kolor: **śliwkowy fiolet `#72246C`** (a nie terakota `#FF7443`)

Raport dawał do wyboru śliwkę albo terakotę. Wybrana została **śliwka** z czterech powodów:

| # | Powód | Konkret |
|---|---|---|
| 1 | **Czytelność** | `#72246C` na bieli daje kontrast ok. **9 : 1** — wolno na nim postawić białe litery i wolno nim pisać na bieli. Terakota `#FF7443` z bielą daje ok. **2,7 : 1** — przycisk z białym napisem byłby nieczytelny, a strona B2B ma być czytana na słabym ekranie w magazynie. |
| 2 | **Najdalej od v1** | Terakota to kolor ciepły, blisko złota z wizytówki NR 7 v2. Obok v1 wyglądałaby jak „to samo, tylko jaśniej”. Śliwka nie ma z paletą v1 nic wspólnego — Marek zobaczy realnie inną firmę, a o to w tym pokazie chodzi. |
| 3 | **Wyjście z „zielonego CBD”** | Fiolet w tej branży ma **dwa** potwierdzone precedensy z badania: [CBDÍA](https://cbdia.eu/pages/cbd-grosshandel) (B2B hurt, `#72246C`) i [Medterra](https://medterracbd.com/) (`#391E71`). Terakotę ma [Goodrays](https://goodrays.com/) — ale to marka napojów B2C, nie dostawca. |
| 4 | **Druk** | Śliwka jest jednym kolorem dodatkowym: to samo działa na roll-upie, teczce i wizytówce. Terakota na papierze niepowlekanym siada w pomarańcz i traci charakter. |

**Uwaga dla Marka (to nie jest decyzja strony):** fiolet kłóci się z obecną wizytówką NR 7 v2 (zieleń + złoto).
Wybór kierunku C oznacza zmianę identyfikacji także poza stroną. To pytanie do Marka, nie do nas.

## 3. Czym różni się od **v1** — trzy osie

| Oś | **v1 — butik / jubiler** | **v3 — sygnał** |
|---|---|---|
| **1. Paleta** | ciemna zieleń `#07180F`, złoto `#E0C47E` z gradientem 3D, wszystko na ciemnym tle | biel `#FFFFFF` + grafit `#121212` + **jeden** kolor `#72246C`, pole wspierające piasek `#F2EEE6`; **zero zieleni, zero złota, zero gradientów, zero zaokrągleń** |
| **2. Typografia** | dwa kroje: **Cinzel** (szeryf rzymski, wersaliki, nadlinie z szerokim odstępem) + Inter 16 px | **jeden** krój: geometryczny grotesk **Figtree** w dwóch skrajnych wagach (800 / 400). H1 **104 px** na komputerze, tekst 18 px. Nagłówki sekcji jednowyrazowe z kropką: `Oferta.` `Proces.` `Dokumenty.` `Kontakt.` |
| **3. Układ i nawigacja** | pełnoekranowy hero ze zdjęciem i wielkim złotym napisem; przezroczysty pasek, 5 pozycji bez numerów; pojawianie się sekcji przy przewijaniu | **szwajcarska siatka 12 kolumn** (widoczne cienkie linie w pierwszym ekranie), pola pełnej szerokości w kolorze **na przemian** z bielą; **przyklejona nawigacja pozioma z numerami sekcji** (`04 Oferta · 05 Klienci · 06 Proces …`), **pasek postępu** pod nią, przyklejony przycisk `Zapytaj o ofertę` w rogu, a na telefonie **dolny pasek `Zadzwoń · WhatsApp · Zapytaj`** |

**Czwarta różnica, nieplanowana, ale ważna:** v1 stoi na czterech zdjęciach (0,8 MB). **v3 nie ma ani jednego pliku
graficznego** — makieta „TWOJA MARKA / YOUR BRAND”, butelki, słoik i tuba są **narysowane w CSS**, twardym cieniem,
na plamie koloru. Stąd waga **81 KB** i otwieranie się natychmiast, także na telefonie w słabym zasięgu.
Zdjęcia z prawdziwej sesji można dołożyć później — strona ich nie potrzebuje, żeby wyglądać poważnie.

## 4. Czym różni się od **v2** (kierunek A — „karta techniczna”, buduje ją druga sesja)

| | **v2 — karta techniczna** | **v3 — sygnał** |
|---|---|---|
| Kolor sygnałowy | granat `#1B3A6B` na papierze `#FAFAF8` | śliwka `#72246C` na czystej bieli |
| Krój | Inter Tight + **IBM Plex Mono na liczbach** | jeden Figtree, bez kroju o stałej szerokości |
| Nastrój | dokument, arkusz laboratoryjny, dossier dla działu zakupów | plakat targowy, marka widoczna z dziesięciu metrów |
| Kto ma zadzwonić | hurtownia apteczna, dział zakupów, przetarg | dystrybutor, sieć sklepów, kontakt z targów |

Obie wersje mają **tę samą strukturę 16 sekcji i te same teksty** — różni je wyłącznie skóra. To jest sens pokazu.

## 5. Struktura — 16 sekcji z raportu Inspektora

`00` pasek kontaktowy (telefon, e-mail, godziny, PL/EN) · `01` hero · `02` **pasek pięciu liczb** ·
`03` **odznaki certyfikatów z nazwami** · `04` oferta (4 modele współpracy) · `05` klienci (8 typów firm) ·
`06` **proces w 4 krokach z terminem przy każdym** · `07` katalog EIRRA + makieta „Twoja marka” ·
`08` **dokumenty w trzech grupach — co dokładnie wchodzi w dokumentację** · `09` **warunki handlowe w tabeli** ·
`10` surowiec (pole · ekstrakcja · kontrola) · `11` ludzie i role · `12` **wiedza: na co patrzeć przy wyborze
dostawcy + czerwone flagi + słownik pojęć** · `13` FAQ o współpracy · `14` kontakt rozdzielony na role + formularz
5-polowy · `15` stopka z pełnymi danymi rejestrowymi i notą prawną.

Trzy sekcje, których **nie ma prawie żadna z 70 obejrzanych stron** i które według raportu zamykają sprzedaż —
`06` proces, `12` „na co patrzeć przy wyborze dostawcy”, `08` „co wchodzi w dokumentację” — są tu w całości.

**Jedna świadoma niezgodność z raportem.** Raport mówi „strona główna ≤ 6 000 px na komputerze”, ale te same 16 sekcji
daje **11 534 px**. Nie da się mieć obu naraz. Przy demo wybraliśmy komplet sekcji (Marek ma zobaczyć całą
architekturę), a nie skrót. Przy wersji publikowanej sekcje `10`, `12` i `13` przenosi się na podstrony —
wtedy strona główna zejdzie poniżej 7 000 px.

## 6. Teksty i placeholdery

- **Teksty wspólne z v1 są przeniesione co do słowa** (hero, cztery modele współpracy, katalog EIRRA — 50 pozycji
  w 10 kategoriach, lista dokumentów, nota prawna w stopce), razem z przełącznikiem **PL / EN**. Marek ma porównywać
  wygląd, nie treść.
- **Teksty dopisane** to wyłącznie te, których w v1 nie było, bo v1 nie miał tych sekcji: klienci (8 typów firm —
  wprost ze `STRATEGIA-POSZUKIWAN-CBD.md`, rozdz. 2), proces, warunki handlowe, surowiec, wiedza, FAQ, role w kontakcie.
  **W żadnym z nich nie ma ani jednej wymyślonej liczby.**
- **Na stronie stoi 37 widocznych plakietek** `[do uzupełnienia przez Marka]` — śliwkowa ramka z przerywanej linii.
  Nie da się ich pomylić z gotową treścią. Dotyczą: MOQ, terminów, cen, progów, Incoterms, godziny odcięcia wysyłki,
  wysyłki neutralnej, próbek, wszystkich sześciu certyfikatów, COA, THC, novel food, osoby odpowiedzialnej,
  numeru telefonu i WhatsApp, VAT/DIČ, domeny, godzin pracy, katalogu PDF i formularza.
- **Jedyne twarde liczby na stronie to fakty z rejestru:** `IČO 19889267`, `2023` (data założenia 2.11.2023),
  adres `Dolní Žukov č.ev. 28, 737 01 Český Těšín`, `C 94146, Krajský soud v Ostravě`.
  Źródło: `CBD/BIOLEAFHUB s.r.o./DANE-FIRMY-BIOLEAFHUB.md`.
- **Zero obietnic zdrowotnych**, zero słowa „leczy”, zero liścia konopi w grafice, zero kodów rabatowych,
  zero bramki wieku, zero okien na wejściu.

Pełna lista 19 pól do uzupełnienia (te same „10 pytań do Marka”) jest w `../demo-v1/README.md`, punkt 2.
V3 dokłada do niej sześć nowych miejsc, bo ma sześć nowych sekcji: **liczba krajów wysyłki, liczba wyprodukowanych
sztuk, godziny telefoniczne, godzina odcięcia wysyłki, czy robimy wysyłkę neutralną, czy próbka jest bezpłatna.**

## 7. Wynik testów (Playwright, Chrome bez okna)

| Sprawdzenie | 1440 px | 390 px |
|---|---|---|
| Szerokość dokumentu (brak przewijania w bok) | **1440** ✓ | **390** ✓ |
| Błędy JavaScript i konsoli | **0** ✓ | **0** ✓ |
| Liczba `<h1>` | 1 ✓ | 1 ✓ |
| Wielkość H1 | 104 px ✓ | 42 px ✓ (wymóg: ≥ 28) |
| Wielkość tekstu | 18 px ✓ | 18 px ✓ (wymóg: ≥ 16) |
| Długość strony | 11 534 px | 19 743 px (1,7× desktop — wymóg: < 2×) |
| Klikalny telefon `tel:` / e-mail `mailto:` | 4 / 7 ✓ | 4 / 7 ✓ |
| Widoczne pozycje nawigacji | 8 ✓ | 8 ✓ (pasek przewijany w poziomie, nie znika) |
| Puste teksty po przełączeniu PL → EN | **0** ✓ | **0** ✓ |

Waga pliku: **81 KB**, zero bibliotek JS, zero obrazów. Z internetu dociąga tylko jeden krój (Figtree, Google Fonts);
bez internetu podstawia zapasowy i strona dalej wygląda poprawnie. Rok w stopce: 2026.

Zrzuty ekranu w `screens/`: `desktop-hero`, `desktop-full`, `desktop-liczby`, `desktop-katalog`, `desktop-wiedza`,
`desktop-en-hero`, `mobile-hero`, `mobile-full`, `mobile-oferta`, `mobile-katalog`, `mobile-dokumenty`,
`mobile-kontakt`, `mobile-en-hero`.

## 8. Jak pokazać Markowi (15 minut)

1. Otworzyć **cztery pliki w czterech kartach** — v1, v2, v3 i (jeśli będzie) czwarty kierunek — i **przełączać
   między kartami**, nie czytać po kolei. Teksty są te same, różni je tylko wygląd.
2. Zatrzymać się na **sekcji 02 „Liczby”** i **09 „Warunki”**. To tam widać, ile jeszcze potrzebujemy od niego —
   i dlaczego cztery z pięciu liczb są puste.
3. Pokazać **przełącznik PL / EN** w prawym górnym rogu: jedna strona, dwa języki, nic do pilnowania.
4. Pokazać **na telefonie** — dolny pasek `Zadzwoń · WhatsApp · Zapytaj` jest tym, czego nie ma żadna z 70
   obejrzanych stron konkurencji.
5. Zadać **jedno pytanie**, nie „czy się podoba”: **„do którego z tych dostawców zadzwoniłbyś jako pierwszy?”**
   Plus jedno dodatkowe, bo kierunek C tego wymaga: **„czy zgadzasz się zmienić kolory firmy z zieleni i złota
   na śliwkę — także na wizytówce i roll-upie?”**

## 9. Gdzie co leży

```
работа/CBD/0012-Strona-www/demo-v3/
├── index.html                      ← cała strona w jednym pliku (81 KB, bez obrazów)
├── README.md                       ← ten plik
├── build_desktop_copy.py           ← kopiuje plik na Pulpit
├── screens/                        ← zrzuty 1440 px i 390 px, PL i EN
└── archiwum-2026-09-11-natura/     ← poprzednia v3 („Natura / rzemiosło”) razem z img/ i zrzutami
```

Kopia do pokazania: **`~/Desktop/DEMO-STRONA-CBD-v3.html`** — jeden plik, dwuklik, działa bez internetu i bez serwera.
Odświeżenie po każdej zmianie: `python3 build_desktop_copy.py` z tego folderu.

**Nie ruszaliśmy** `demo-v1/`, `demo-v2/` ani `BACKLOG.md`. Poprzednia wersja v3 nie została skasowana — leży
w `archiwum-2026-09-11-natura/` i dalej się otwiera.
