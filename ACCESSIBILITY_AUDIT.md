# Accessibility Audit

Datum: 11. Juli 2026

## Umgesetzte Maßnahmen

- genau eine H1 auf jeder HTML-Seite
- Skip-Link als erstes fokussierbares Element
- semantische Landmarken für Header, Navigation, Main und Footer
- Alternativtexte für alle inhaltlichen Bilder
- dekoratives Materialbild mit leerem Alternativtext
- sichtbare Fokusindikatoren in #D8A34A
- native `details`-Elemente für die FAQ
- sichtbare Labels für jedes Formularfeld
- Inline-Fehlerstatus mit `role=status` und `aria-live=polite`
- Navigation, Lightbox und FAQ per Tastatur bedienbar
- Mindestgröße der wesentlichen Touch-Ziele: 44 Pixel, mobile CTA 60 Pixel
- `prefers-reduced-motion` deaktiviert Animationen und Scrollverhalten
- keine Farbe als alleinige Formular-Fehlerkennzeichnung

## Verifizierte Kontrastpaare

| Vordergrund | Hintergrund | Verhältnis | Ergebnis |
|---|---|---:|---|
| #171713 | #FAF6EE | 16,67:1 | AAA |
| #392B26 | #FAF6EE | 12,59:1 | AAA |
| #FAF6EE | #9A593D | 5,03:1 | AA |
| #171713 | #D8A34A | 7,92:1 | AAA |
| #FAF6EE | #5C6654 | 5,59:1 | AA |

## Technische Prüfung

- keine doppelten IDs
- keine Bilder ohne `alt`-Attribut
- keine fehlenden lokalen Assets
- Formular mit leerer Eingabe markiert drei Pflichtfelder und zeigt eine verständliche Meldung
- Browserkonsole ohne Warnungen oder Fehler

## Noch vor Veröffentlichung

Ein automatischer WCAG-Scan und ein vollständiger Tastaturdurchlauf auf der endgültigen Hosting-URL sollten nach dem Deployment wiederholt werden.

