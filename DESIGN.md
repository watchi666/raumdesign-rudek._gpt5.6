# Designsystem: RaumDesign Rudek

## 1. Visual Theme & Atmosphere

Die Website fühlt sich wie eine private Materialgalerie an. Kalk, Pigment, Stein und Lasur geben den Ton an. Die visuelle Sprache ist warm und kultiviert, aber nicht steril. Große Bildflächen zeigen echte Arbeitsspuren und Oberflächen so, wie ein Editorial sie inszenieren würde: nah, ruhig und mit Respekt vor dem Material.

Die Gestaltung vermeidet das typische Handwerker-Blau und austauschbare Leistungsboxen. Stattdessen entsteht Spannung aus dunklem Umbra, hellem Kalkstein, asymmetrischen Proportionen und einem kupferfarbenen Akzent. Die Seite soll vermitteln, dass Daniel Rudek nicht einfach Farbe aufträgt, sondern Räume mit sicherem Gespür entwickelt.

**Key Characteristics:**
- warme Editorial-Galerie
- echte Projekte als primärer Vertrauensbeweis
- asymmetrische Bild-Text-Kompositionen
- taktile, mineralische Oberflächen
- zurückhaltende Tiefe statt Kartenstapel
- starke Serifentypografie mit klarer Grotesk-Begleitung
- Kupfer als gezielter Handlungsakzent
- Bewegung wie eine ruhige Ausstellungseröffnung

## 2. Color Palette & Roles

### Primary

| Role | Hex | Usage |
|---|---|---|
| Primary | #392B26 | Header, dunkle Flächen, sekundäre Buttons |
| Primary Dark | #171713 | Primärtext, Hero, Footer |
| Primary Light | #D8CDBB | ruhige Linien und Flächen |

### Accent

| Role | Hex | Usage |
|---|---|---|
| Accent | #9A593D | primäre CTAs, Markierungen |
| Accent Dark | #75402B | Hover- und Aktivzustände |
| Accent Gold | #D8A34A | kleine Materialakzente auf dunklem Grund |

### Interactive States

| Role | Hex | Usage |
|---|---|---|
| Link Default | #75402B | Links auf hellen Flächen |
| Link Hover | #392B26 | Hover auf hellen Flächen |
| Link Visited | #5C6654 | besuchte Links |
| Focus Ring | #D8A34A | klarer Tastaturfokus |
| Error | #A33A2B | Validierungsfehler |
| Success | #356347 | Bestätigungen |
| Warning | #8A5A12 | Hinweise |

### Neutral Scale

| Role | Hex | Usage |
|---|---|---|
| Neutral 950 | #171713 | Haupttext |
| Neutral 800 | #392B26 | Sekundärtext |
| Neutral 600 | #5C6654 | Tertiärtext |
| Neutral 400 | #988C7B | Metadaten |
| Neutral 200 | #D8CDBB | Linien |
| Neutral 100 | #F2EBDD | alternative Fläche |
| Neutral 50 | #FAF6EE | Seitenhintergrund |

### Surface & Borders

| Role | Hex | Usage |
|---|---|---|
| Surface Primary | #FAF6EE | Hauptfläche |
| Surface Secondary | #F2EBDD | Kalksteinfläche |
| Surface Dark | #171713 | Hero und Abschluss |
| Border Default | #BEB19E | sichtbare Trennungen |
| Border Subtle | #D8CDBB | feine Linien |

### Shadow Colors

| Role | Value | Usage |
|---|---|---|
| Shadow Light | rgba(57,43,38,0.08) | subtile Tiefe |
| Shadow Medium | rgba(57,43,38,0.16) | Bilder und Navigation |
| Shadow Heavy | rgba(23,23,19,0.28) | Lightbox und Floating CTA |

**Verifizierte Kontraste:** #171713 auf #FAF6EE = 16,67:1; #392B26 auf #FAF6EE = 12,59:1; #FAF6EE auf #9A593D = 5,03:1; #171713 auf #D8A34A = 7,92:1; #FAF6EE auf #5C6654 = 5,59:1.

## 3. Typography Rules

**Primary Font:** Cormorant Garamond
**Secondary Font:** Manrope

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Cormorant Garamond | clamp(3.5rem, 7vw, 6rem) | 600 | 0.93 | -0.035em | maximal 96px |
| Display Large | Cormorant Garamond | clamp(2.8rem, 5vw, 4.5rem) | 600 | 0.98 | -0.025em | Hauptabschnitte |
| Section Heading | Cormorant Garamond | clamp(2.25rem, 4vw, 3.5rem) | 600 | 1.05 | -0.018em | H2 |
| Sub-heading | Manrope | 1.25rem | 650 | 1.3 | -0.015em | H3 |
| Body Large | Manrope | 1.125rem | 450 | 1.65 | 0 | Leads |
| Body | Manrope | 1rem | 430 | 1.65 | 0 | Fließtext |
| Button | Manrope | 0.94rem | 700 | 1 | 0.01em | CTAs |
| Small | Manrope | 0.875rem | 600 | 1.45 | 0.04em | Metadaten |
| Caption | Manrope | 0.75rem | 650 | 1.4 | 0.08em | Bildlabels |

## 4. Component Stylings

### Primary Button

| Property | Value |
|---|---|
| Background | #9A593D |
| Text Color | #FAF6EE |
| Font | Manrope, 15px, 700 |
| Padding | 16px 24px |
| Border Radius | 999px |
| Border | 1px solid #9A593D |
| Shadow | 0 10px 26px rgba(57,43,38,0.18) |
| Hover Background | #75402B |
| Hover Shadow | 0 14px 34px rgba(57,43,38,0.24) |
| Focus Ring | 0 0 0 4px #D8A34A |
| Active Background | #392B26 |
| Active Transform | translateY(1px) |
| Disabled Background | #988C7B |
| Disabled Text | #FAF6EE |
| Transition | background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease |

### Secondary Button

| Property | Value |
|---|---|
| Background | transparent |
| Text Color | #392B26 |
| Border | 1px solid #392B26 |
| Padding | 16px 24px |
| Border Radius | 999px |
| Hover Background | #392B26 |
| Hover Text | #FAF6EE |
| Focus Ring | 0 0 0 4px #D8A34A |

### Dark/Inverse Button

| Property | Value |
|---|---|
| Background | #D8A34A |
| Text Color | #171713 |
| Border | 1px solid #D8A34A |
| Padding | 16px 24px |
| Border Radius | 999px |
| Hover Background | #FAF6EE |
| Focus Ring | 0 0 0 4px #FAF6EE |

### Cards

| Property | Value |
|---|---|
| Background | #F2EBDD |
| Border | 1px solid #D8CDBB |
| Border Radius | 2px |
| Padding | 28px |
| Shadow | 0 12px 30px rgba(57,43,38,0.08) |
| Hover Shadow | 0 20px 48px rgba(57,43,38,0.16) |
| Transition | transform 260ms cubic-bezier(0.16,1,0.3,1), box-shadow 260ms ease |

### Inputs

| Property | Value |
|---|---|
| Background | #FAF6EE |
| Border | 1px solid #BEB19E |
| Border Radius | 2px |
| Padding | 14px 16px |
| Font | Manrope, 16px |
| Placeholder Color | #5C6654 |
| Focus Border | #9A593D |
| Focus Ring | 0 0 0 3px rgba(216,163,74,0.55) |
| Error Border | #A33A2B |
| Disabled Background | #D8CDBB |

### Navigation

| Property | Value |
|---|---|
| Background | rgba(23,23,19,0.9) |
| Height | 82px |
| Link Color | #FAF6EE |
| Link Hover Color | #D8A34A |
| Active Link Color | #D8A34A |
| Active Indicator | kurze Unterstreichung |
| Mobile Menu Background | #171713 |

## 5. Layout Principles

**Base Spacing Unit:** 8px
**Spacing Scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

| Grid Property | Value |
|---|---|
| Max Container Width | 1320px |
| Grid Columns | 12 |
| Column Gap | 24px |
| Row Gap | 32px |

| Context | Value |
|---|---|
| Zwischen Hauptabschnitten | clamp(88px, 10vw, 152px) |
| Zwischen Unterabschnitten | 64px |
| Zwischen Inhaltsblöcken | 32px |

| Radius | Value | Usage |
|---|---:|---|
| Small | 2px | Bilder, Eingaben |
| Medium | 12px | kleine Materiallabels |
| Large | 28px | nur einzelne Bildmasken |
| Full | 9999px | Buttons und mobile CTA |

## 6. Depth & Elevation

| Level | Name | CSS box-shadow | Usage |
|---|---|---|---|
| 0 | Flat | none | Text und Linien |
| 1 | Subtle | 0 2px 10px rgba(57,43,38,0.08) | Navigation |
| 2 | Raised | 0 12px 30px rgba(57,43,38,0.12) | Projektbilder |
| 3 | Elevated | 0 24px 60px rgba(57,43,38,0.18) | überlappende Bilder |
| 4 | Floating | 0 20px 52px rgba(23,23,19,0.28) | mobiler CTA |

## 7. Do's and Don'ts

### Do's

1. Echte Rudek-Projekte groß und selbstbewusst zeigen.
2. Cormorant Garamond nur für ausdrucksstarke Überschriften nutzen.
3. Manrope für alle funktionalen Inhalte verwenden.
4. Kupfer #9A593D nur für Handlungen und wichtige Markierungen einsetzen.
5. Kalkflächen #F2EBDD mit dunklem Umbra rhythmisieren.
6. Bildformate bewusst mischen und asymmetrisch staffeln.
7. Oberflächen-Nahaufnahmen wie Materialproben behandeln.
8. Bewegung ruhig, präzise und materialbezogen gestalten.

### Don'ts

1. Keine generischen blauen Handwerkerfarben verwenden.
2. Keine gleichförmige Dreier-Kartenmatrix bauen.
3. Keine erfundenen Zahlen oder Bewertungen zeigen.
4. Keine Stockfotos oder austauschbaren Handwerkerbilder ergänzen.
5. Keine abgerundeten Icon-Kacheln über Überschriften setzen.
6. Keine Textverläufe und keine lila Farbverläufe verwenden.
7. Keine Abschnittsüberschrift wiederholt mit demselben kleinen Kicker einleiten.
8. Keine Bewegung einbauen, die bei reduzierter Bewegung erhalten bleibt.

### The AI Slop Test

> Wenn diese Seite als KI-generiert erkannt würde, ist sie noch nicht fertig. Jede Sektion muss aus RaumDesign Rudeks realen Materialien, Projekten und Arbeitsweise entstehen.

## 8. Responsive Behavior

| Name | Width | Columns | Container Padding |
|---|---:|---:|---:|
| Mobile | 375px | 4 | 18px |
| Tablet | 768px | 8 | 28px |
| Desktop | 1024px | 12 | 40px |
| Large | 1280px | 12 | 52px |
| XL | 1536px | 12 | 64px |

- Mindestgröße für Touch-Ziele: 44 × 44px, primär 48px.
- Mobile Navigation unter 860px, vollständige Navigation ab 860px.
- Hero wird mobil einspaltig, die Telefonnummer bleibt im ersten Viewport erreichbar.
- Galeriebilder werden mobil zu einem rhythmischen Einspalten-Stream.
- Display Hero: 3.5rem mobil, 4.5rem Tablet, maximal 6rem Desktop.
- Section Heading: 2.25rem mobil, 2.75rem Tablet, maximal 3.5rem Desktop.
- Body bleibt auf allen Breakpoints mindestens 1rem.

## 9. Agent Prompt Guide

### Quick Color Reference

- Primary: #392B26
- Primary Dark: #171713
- Accent: #9A593D
- Accent Gold: #D8A34A
- Text Primary: #171713
- Text Secondary: #392B26
- Background: #FAF6EE
- Surface: #F2EBDD

### Hero Section

„Erstelle einen asymmetrischen 7:5-Hero auf #171713. Überschrift in Cormorant Garamond, clamp(3.5rem, 7vw, 6rem), Gewicht 600, Zeilenhöhe 0.93, Farbe #FAF6EE. Begleittext in Manrope 18px/1.65. CTA auf #9A593D mit #FAF6EE, 16px 24px, Radius 999px.“

### Hero Project Cylinder

- Bühne: #171713 mit radialem Kupferlicht und sehr zurückhaltender mineralischer Körnung.
- Zylinder: zwölf echte Rudek-Projekte, nahezu eckig, in gleichmäßigen Abständen um eine vertikale 3D-Achse angeordnet.
- Bewegung: eine vollständige Umdrehung dauert rund 90 Sekunden. Mausrad, Trackpad, Drag, Touch, Pfeile und Drehregler übernehmen die Rotation unmittelbar.
- Aktive Karte: kupferne Kontur, leicht nach vorn gehoben, Shadow Level 3. Nachbarkarten bleiben als Teile des Zylinders sichtbar.
- Fokus: Ein Klick löst das gewählte Bild aus dem Zylinder und zoomt es innerhalb der rechten Hero-Hälfte groß nach vorn. Linke Copy, CTAs und Header bleiben sichtbar.
- Lichtfahrt: eine kurze kupferne Lichtkante läuft einmal über das geöffnete Projektbild. Es wird keine Vorher-/Nachher-Wirkung behauptet.
- Steuerung: sichtbare Pfeiltasten, Drehregler, Text „Scrollen, ziehen oder Bild wählen“, Status „Projekt X von 12“ und Schließen-Button.
- Reduzierte Bewegung: keine automatische Rotation, keine Zoomfahrt und kein Lichtstreifen; die Fokusansicht erscheint direkt.

### Service Presentation

„Baue keine Kartenmatrix. Verwende eine große typografische Leistungsliste in Cormorant Garamond 36px neben einer echten Materialaufnahme. Trenne Einträge mit #D8CDBB und hebe Interaktionen in #9A593D hervor.“

### Contact Area

„Erstelle einen Full-Bleed-Kontaktabschluss auf #171713. Überschrift in Cormorant Garamond 56px, Kontaktdaten in Manrope 16px, Farbe #FAF6EE. Primäre Aktion als Inverse Button auf #D8A34A mit #171713.“

### Footer

„Setze den Footer auf #171713 mit feinen Linien in rgba(250,246,238,0.18). Links sind #FAF6EE und werden bei Hover #D8A34A. Auf Mobilgeräten einspaltig, ab 768px dreispaltig.“
