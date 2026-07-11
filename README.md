# RaumDesign Rudek Redesign

Statische Website für RaumDesign Rudek, Malerfachbetrieb in Düsseldorf.

**Live:** https://raumdesign-rudek-gpt5-6.vercel.app/

**Repository:** https://github.com/watchi666/raumdesign-rudek._gpt5.6

## Lokal öffnen

Im Projektordner:

```powershell
python -m http.server 8124 --bind 127.0.0.1
```

Danach `http://127.0.0.1:8124/` im Browser öffnen.

## Struktur

- `index.html`: Startseite mit Leistungen, Projekten, Philosophie, Prozess, FAQ und Kontakt
- `impressum.html`: übernommene Betreiberangaben
- `datenschutz.html`: Entwurf für die statische, trackerfreie Fassung
- `404.html`: Fehlerseite
- `assets/css/style.css`: vollständiges Designsystem und responsive Layouts
- `assets/js/main.js`: Navigation, Reveals, Lightbox und Formular-Mailto
- `assets/images/`: ausschließlich Bilder des Originalauftritts
- `assets/fonts/`: lokal eingebettete Schriften

## Technische Eigenschaften

- kein Framework und kein Build-Schritt
- keine Cookies, Tracker oder externen Schriften
- LocalBusiness-Strukturdaten ohne erfundene Bewertungen
- öffentliche Indexierung ist aktiviert
- Kontaktformular öffnet das lokale E-Mail-Programm und speichert keine Daten
- reduzierte Bewegung wird respektiert

## Vor Veröffentlichung

1. Impressumsangaben und Umsatzsteuer-ID durch den Betreiber prüfen.
2. Datenschutzerklärung an den tatsächlichen Hoster und mögliche spätere Dienste anpassen.
3. Endgültige Domain als Canonical- und Open-Graph-URL ergänzen.
4. Kontaktformular bei Bedarf an ein echtes Formular-Backend anbinden.
