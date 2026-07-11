# QA Report

Datum: 11. Juli 2026

## Ergebnis

Die statische Vorschau ist funktionsfähig und portabel. Startseite, Rechtstexte, 404-Seite, Stylesheets, JavaScript, Schriften und Bilder werden lokal ausgeliefert.

## Geprüft

- Startseite liefert HTTP 200
- Impressum, Datenschutz und 404 liefern HTTP 200
- CSS und JavaScript liefern HTTP 200
- 13 Bildinstanzen im Dokument, alle Dateiverweise vorhanden
- Browser hat Hero-, Leistungs-, Projekt- und Kontaktbilder erfolgreich geladen
- kein horizontaler Überlauf in der getesteten Desktopansicht
- keine Browser-Konsolenfehler
- sechs unterschiedliche CSS-Keyframe-Techniken
- keine `transition: all`-Regel
- alle verwendeten Projektvarianten besitzen passende CSS-Regeln
- Lightbox öffnet und schließt korrekt
- FAQ lässt sich öffnen
- leeres Kontaktformular zeigt Validierungsfehler und versendet nichts
- Telefonnummer, E-Mail, Adresse und Öffnungszeiten stimmen mit der Quellwebsite überein
- kein Tracking, keine externen Bilder und keine extern geladenen Schriften

## Responsive Umsetzung

- Breakpoints bei 1100, 860 und 620 Pixel
- einspaltiger Hero unter 860 Pixel
- mobile Navigation unter 860 Pixel
- Galerieraster wird unter 620 Pixel zum einspaltigen Stream
- Formulareingaben bleiben bei 16 Pixel und verhindern iOS-Autozoom
- mobiler Click-to-Call-Button: 60 × 60 Pixel
- keine zweispaltigen Formularfelder unter 620 Pixel

## Conversion-Muster

1. Faktenband mit verifizierten Angaben
2. mobiler Click-to-Call
3. FAQ mit echten Fragen
4. LocalBusiness-JSON-LD ohne erfundene Bewertungen
5. direkter Telefon-, E-Mail- und Formularpfad

## Performance

- kein Framework und kein Build-Schritt
- JavaScript: rund 4,4 KB
- CSS: rund 27 KB
- Bilder unterhalb des ersten Viewports werden lazy geladen
- alle Schriften lokal, kein Drittanbieter-Request

Ein Lighthouse-Wert wurde in dieser lokalen Abnahme nicht behauptet. Er sollte nach Wahl des endgültigen Hostings gemessen und gegebenenfalls optimiert werden.

