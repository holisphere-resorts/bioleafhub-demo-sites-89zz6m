# DEMO strony BIOLEAFHUB s.r.o. / EIRRA — wersja 1

**Data:** 11 września 2026 · **Zadanie z backlogu:** #11 · **Autor:** Tatsiana/Reina + Claude
**Status:** wersja robocza do akceptacji przez Marka. Nic nie jest opublikowane w internecie.

---

## 1. Co to jest

Jedna strona internetowa (one-page) firmy **BIOLEAFHUB s.r.o.** z marką **EIRRA**, napisana pod klienta
biznesowego (B2B): hurtownie, dystrybutorzy, marki szukające producenta, firmy kosmetyczne.

- **Jeden plik** `index.html` — cały wygląd (CSS) i cała logika (JS) siedzą w środku.
- **Obrazy** w folderze `img/` obok pliku. Razem cała strona waży ok. **0,8 MB** — otwiera się szybko także na telefonie w słabym zasięgu.
- **Działa bez internetu i bez serwera** — wystarczy dwuklik w plik (`file://`). Z internetu dociąga tylko dwa kroje pisma z Google Fonts (Cinzel + Inter); bez internetu podstawi zapasowe i strona dalej wygląda dobrze.
- **Dwa języki w jednym pliku:** przełącznik **PL / EN** w prawym górnym rogu. Kliknięcie podmienia wszystkie teksty na miejscu — nie ma drugiego pliku do pilnowania.
- **Bez ciężkich bibliotek** — żadnego React, jQuery, animacji 3D. Dlatego jest tak lekka.

### Skąd wzięła się tożsamość wizualna
Trzymamy dokładnie tę samą tożsamość co wizytówka **NR 7 v2** (`BIOLEAFHUB s.r.o./Wizytowki/08_FINAL_NR7_v2/`):
ciemna zieleń `#07180F`, złoto `#E0C47E` z gradientem 3D, krój **Cinzel** w nagłówkach, **Inter** w tekście.
**Nigdzie nie ma liścia konopi** — zgodnie z zasadą przyjętą przy wizytówkach.

### Użyte obrazy (4 pliki w `img/`)
| Plik | Skąd pochodzi | Gdzie na stronie |
|---|---|---|
| `hero-topographic-gold.jpg` | `Wizytowki/Wizytowki-Backgrounds/Лицевая сторона/Background-07-topographic-gold.png` — to samo tło co awers wizytówki NR 7 v2 | wielkie tło pierwszego ekranu |
| `collection-core.jpg` | `eirra-cbd/public/assets/eirra-core-collection.png` | zdjęcie przy kategoriach oleje / kapsułki / żelki |
| `collection-skin.jpg` | `eirra-cbd/public/assets/eirra-skin-collection.png` | zdjęcie przy kategoriach twarz / ciało / kąpiel / intymne |
| `studio-dark.jpg` | `eirra-cbd/public/assets/eirra-hero.png` | sekcja „Dlaczego my” + kategorie spiżarnia / dla zwierząt / rynki regionalne |

Wszystkie zmniejszone i skompresowane pod stronę www. Oryginały zostają nietknięte na swoich miejscach.

### Skąd wzięły się teksty
- **Produkty** — z projektu strony EIRRA: `eirra-cbd/lib/products.ts` (te same nazwy, formuły i gramatury; 50 pozycji w 10 kategoriach). Nic nie dopisaliśmy od siebie.
- **Oferta B2B (4 kafelki)** — `0009-Strategy/STRATEGIA-POSZUKIWAN-CBD.md`, rozdz. 0 i 6 (co oferujemy każdemu z 8 typów firm).
- **Lista dokumentów** — rozdz. 6 i 7 tej samej strategii (10 pytań do Marka).
- **Dane firmy** — `BIOLEAFHUB s.r.o./DANE-FIRMY-BIOLEAFHUB.md` (rejestr kurzy.cz, zrzut z 4.09.2026).
- **Inspiracja układem** — reels research, wzorzec **PERKFORM** (`experiments/reels-research/descriptions/Dc4odc0NE_i.md`):
  pełnoekranowy pierwszy ekran, numeracja sekcji `01 / 02 / 03`, przełącznik kategorii z podmianą zdjęcia,
  delikatne pojawianie się treści przy przewijaniu. Bez ciężkich efektów.

### Co strony **nie** robi (świadomie)
- Nie obiecuje żadnych efektów zdrowotnych. Nie ma słów „leczy”, „pomaga na”, „łagodzi”.
  W stopce jest wyraźna nota: produkty CBD nie są lekami, strona jest informacyjna i nie stanowi oferty handlowej.
- Nie podaje **żadnych cen, MOQ, certyfikatów ani terminów**, których nie mamy potwierdzonych. Wszędzie tam stoi widoczna, obramowana plakietka **„[do uzupełnienia przez Marka]”**.
- Nie ma sklepu, koszyka ani formularza zapisu. Jedyne działania: telefon, WhatsApp, e-mail.

---

## 2. Placeholdery — czego potrzebujemy od Marka

Na stronie każde takie miejsce jest **widocznie oznaczone** (kremowa ramka, tekst w nawiasach kwadratowych),
żeby nikt przypadkiem nie uznał tego za gotową treść.

| # | Miejsce na stronie | Co trzeba wpisać | Dlaczego to ważne |
|---|---|---|---|
| 1 | Kontakt → Telefon | **numer telefonu Marka** (teraz `+420 000 000 000`) | bez tego strona nie działa — telefon to nasz główny kanał sprzedaży |
| 2 | Kontakt → WhatsApp | ten sam numer w linku `wa.me/…` (teraz `wa.me/420000000000`) | przycisk „Porozmawiajmy” w sekcji kontakt prowadzi właśnie tam |
| 3 | Kontakt → VAT / DIČ | czeski numer VAT (DIČ), jeśli firma jest płatnikiem | każda hurtownia pyta o to przy pierwszej fakturze |
| 4 | Kontakt → Strona | potwierdzenie domeny `bioleafhub.com` (OVH, przedłużenie do 16.09) | dopóki domena nie jest pewna, zostawiamy adnotację |
| 5 | Co robimy → White label | **MOQ** (minimalna ilość zamówienia) i **czas realizacji** | pytanie nr 1 każdej marki szukającej producenta |
| 6 | Co robimy → Hurt | **cennik ex-works** (albo zdanie „cennik na zapytanie”) | bez tego rozmowa kończy się na „wyślijcie cennik” |
| 7 | Co robimy → Ekstrakty | specyfikacje i realna dostępność surowców | żeby nie obiecać czegoś, czego nie ma na magazynie |
| 8 | Co robimy → Kosmetyki | kto jest **osobą odpowiedzialną** (Responsible Person) | wymóg prawa kosmetycznego UE |
| 9 | Jakość → COA | nazwa akredytowanego laboratorium i zakres badań | COA = certyfikat analizy partii; pierwszy dokument, o który proszą |
| 10 | Jakość → Certyfikaty zakładu | które z nich faktycznie mamy: GMP, ISO 22716, HACCP, ISO 9001, organic — i dla którego zakładu | to decyduje, czy w ogóle wchodzimy do hurtowni farmaceutycznej |
| 11 | Jakość → Dokumentacja kosmetyczna | czy mamy PIF, CPSR, zgłoszenie CPNP | bez tego nie sprzedamy kosmetyku w UE |
| 12 | Jakość → Produkty doustne | status novel food (czy jesteśmy pod konsorcjum EIHA) | decyduje, w których krajach wolno sprzedawać olejki i żelki |
| 13 | Jakość → THC i zgodność | deklarowany poziom THC | każdy kraj ma swój próg |
| 14 | Jakość → Ubezpieczenie i warunki | ubezpieczenie produktu, Incoterms, terminy płatności | ostatnie pytania przed zamówieniem |
| 15 | Dlaczego my → Własna produkcja | czy drugi zakład (Holandia?) istnieje i jak go nazywamy | teraz jest tylko Czechy + placeholder |
| 16 | Dlaczego my → MOQ | progi: 500 / 1 000 / 5 000 szt.? | |
| 17 | Dlaczego my → Czas realizacji | ile tygodni od zatwierdzenia projektu do wysyłki (w strategii jest **cel** 8 tygodni — to nie jest fakt) | |
| 18 | Dlaczego my → Dokumentacja | co dokładnie bierzemy na siebie | |
| 19 | Produkty (cała sekcja) | które z 50 pozycji są **dziś** fizycznie dostępne i w jakiej cenie B2B | na stronie jest o tym wyraźna adnotacja pod listą |

**To są te same pytania, co „10 pytań do Marka” z rozdz. 7 strategii CBD.** Jedna odpowiedź zamyka kilka pól naraz.

---

## 3. Jak to pokazać Markowi

**Najprościej (bez internetu, bez wysyłania plików):**
1. Na Pulpicie jest plik **`DEMO-STRONA-CBD-v1.html`** — to ta sama strona, ale ze zdjęciami wtopionymi w środek (jeden plik, 2,9 MB, nic obok nie potrzebuje).
2. Dwuklik → otwiera się w przeglądarce.
3. Pokazujesz z góry na dół, po drodze klikasz kategorie w sekcji „Produkty” i przełącznik **PL / EN** w rogu.

**Jeśli Marek ma zobaczyć sam, u siebie:**
- wyślij mu ten jeden plik z Pulpitu (WhatsApp „Dokument”, nie „Zdjęcie”) — otworzy go na telefonie i na komputerze,
- albo wyślij zrzuty ekranu z folderu `screens/` (nie wymagają otwierania niczego).

**Zrzuty ekranu** (gotowe, w `screens/`):

| Plik | Co pokazuje |
|---|---|
| `desktop-hero.png` | pierwszy ekran na komputerze, 1440 px |
| `desktop-full.png` | cała strona na komputerze, od góry do stopki |
| `mobile-hero.png` | pierwszy ekran na telefonie (iPhone, 390 px) |
| `mobile-full.png` | cała strona na telefonie |
| `mobile-uslugi.png` · `mobile-produkty.png` · `mobile-jakosc.png` · `mobile-kontakt.png` | poszczególne sekcje na telefonie |

**O co zapytać Marka przy pokazie (3 pytania, nic więcej):**
1. Czy to jest firma, którą chce pokazać hurtowniom? (ton, kolor, powaga)
2. Czy zgadza się podział na 4 rzeczy, które robimy (white label / hurt / ekstrakty / kosmetyki)?
3. Które z pól z tabeli w punkcie 2 może uzupełnić od ręki, a które wymagają sprawdzenia?

---

## 4. Następne kroki

| # | Krok | Kto | Kiedy |
|---|---|---|---|
| 1 | Pokazać demo Markowi, zebrać „tak/nie” i uwagi | Tatsiana/Reina | 11–12.09 |
| 2 | Zebrać odpowiedzi na placeholdery (tabela w pkt 2 = te same „10 pytań” z rozdz. 7 strategii) | Marek | do 20.09 |
| 3 | Wersja v2: prawdziwy numer, prawdziwe certyfikaty, ewentualnie cennik na zapytanie | Tatsiana/Reina + Claude | po odpowiedziach |
| 4 | Domena `bioleafhub.com` przedłużona w OVH + e-mail `info@bioleafhub.com` | Marek | do 16.09 (zad. 5, 52) |
| 5 | Wrzucenie strony na hosting (własny, nigdy artefakt) + podpięcie domeny | Tatsiana/Reina | po pkt 3 i 4 |
| 6 | Dołożyć wersję DE (niemiecką) — mechanizm już jest, wystarczy dopisać trzeci słownik w `index.html` | Tatsiana/Reina | październik, przed targami |
| 7 | Podpiąć favicon i obrazek do podglądu w WhatsApp/LinkedIn (og:image) | Tatsiana/Reina | razem z pkt 5 |

---

## 5. Jak coś zmienić w pliku (dla przyszłej sesji)

Wszystko jest w `index.html`, w trzech miejscach na dole pliku:

- **`const T = { pl: {...}, en: {...} }`** — wszystkie teksty. Chcesz zmienić zdanie? Zmieniasz w obu językach i gotowe.
- **`const CATS` i `const P`** — kategorie i pozycje katalogu EIRRA (kategoria, nazwa, formuła, gramatura).
- **`const DOCS` i `const WHY`** — sekcje „Jakość i dokumenty” oraz „Dlaczego my”.

Po każdej zmianie w `index.html` trzeba **odświeżyć kopię na Pulpicie** (ta ma zdjęcia w środku).
Robi to jedno polecenie z tego folderu:

```
python3 build_desktop_copy.py
```

Skrypt wtapia pliki z `img/` w HTML i nadpisuje `~/Desktop/DEMO-STRONA-CBD-v1.html`.

**Kolory i kroje** są na samej górze pliku, w bloku `:root{…}` — jedno miejsce na całą paletę.
