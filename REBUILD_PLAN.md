# Rebuild-Plan: RaumDesign Rudek

## Ausgangslage

RaumDesign Rudek ist ein inhabergeführter Malerfachbetrieb in Düsseldorf. Die bestehende Website enthält wertvolle echte Projektbilder und eine ungewöhnlich breite Expertise bei Kalk- und Marmorputzen, Lasuren, Spachteltechniken, Farbkonzepten sowie klassischen Malerarbeiten. Diese Substanz wird bisher visuell und inhaltlich kaum transportiert.

## Markenextraktion

- Persönlichkeit: kunsthandwerklich, erfahren, materialbewusst, individuell, ruhig selbstbewusst
- Stärkstes Unterscheidungsmerkmal: Oberflächen werden nicht nur gestrichen, sondern komponiert
- Bildwelt: echte Projekte, mineralische Texturen, starke Räume, sichtbare Handschrift
- Grundstimmung: warm, taktil, galerieartig, hochwertig ohne Luxusklischees

## SEO- und Inhaltsplan

- Primäre Suchintention: Malerbetrieb Düsseldorf, Wandgestaltung Düsseldorf, Kalkputz Düsseldorf
- Sekundäre Suchintention: Marmorputz, Spachteltechnik, Schimmelsanierung, Fassadengestaltung, Urlaubsrenovierung Düsseldorf
- Die Startseite bündelt Leistungsversprechen, Referenzen, Prozess, FAQ und Kontakt.
- Eigene Abschnitte geben den Spezialtechniken und klassischen Leistungen klare semantische Überschriften.
- LocalBusiness-JSON-LD verwendet ausschließlich verifizierte Kontaktdaten aus der Quellwebsite.
- Die Vorschau bleibt mit `noindex` geschützt, bis eine endgültige Domain und Freigabe vorliegen.

## Design- und UX-Audit

- Die alte Startseite erklärt das Angebot kaum und führt Besucher nicht zu einer Handlung.
- Reale Projektfotos sind vorhanden, werden aber nicht als Beweis für das handwerkliche Niveau inszeniert.
- Texte sind lang, generisch und stellen Behauptungen vor konkrete Arbeiten.
- Kontaktinformationen sind nicht als dauerhaft erreichbare Conversion-Pfade organisiert.
- Das Redesign ersetzt diese Schwächen durch klare Nutzenkommunikation, echte Projektbeweise, eine mobile Anrufmöglichkeit und nachvollziehbare Schritte.

## Technisches Ziel

Statische Website mit HTML, CSS und kleinem Vanilla-JavaScript. Kein Framework, kein Build-Schritt und keine externe Laufzeit. Die vorhandenen Bilder werden lokal eingebunden. Das Ergebnis bleibt portabel und kann auf praktisch jedem Webspace veröffentlicht werden.

## Designrichtung

Siehe `DESIGN.md` für das vollständige Designsystem.

### Verbindliche ästhetische Richtung

Warme, organische Editorial-Galerie. Die Seite verbindet die Ruhe eines Materialarchivs mit der Spannung eines Interior-Magazins. Große Typografie, asymmetrische Bildausschnitte, mineralische Farbtöne und bewusst gesetzte Kupferflächen tragen die Gestaltung.

### Abschnittsarchitektur

1. Hero: asymmetrischer 7:5-Split mit dunkler Textbühne und einem hochformatigen echten Raumprojekt.
2. Vertrauensband: schmale, horizontale Faktenzeile ohne erfundene Kennzahlen.
3. Leistungen: große typografische Liste neben einer taktilen Detailaufnahme, keine Kartenmatrix.
4. Materialstatement: vollflächige dunkle Bildbühne mit einer ruhigen Textinsel.
5. Projekte: ungleichmäßige Galerie mit wechselnden Hoch- und Querformaten.
6. Philosophie: versetzter Text-Bild-Dialog mit überlappender Materialprobe.
7. Prozess: echte Reihenfolge als vier horizontale Schritte mit großen Ziffern.
8. FAQ: ruhiges Akkordeon auf Kalksteinfläche.
9. Kontakt: dunkler Full-Bleed-Abschluss mit direktem Telefon- und E-Mail-Pfad.

### Wow-Moment

Die Projektgalerie öffnet sich als großformatige, bewegte Materialwand. Beim Scrollen werden Bilder mit unterschiedlichen Clip- und Scale-Bewegungen enthüllt. Ein Bild lässt die mineralische Oberfläche fast wie ein Gemälde erscheinen.

## Bildplan

- Hero: `HQZN6305-1920w.JPG`, echter Innenraum mit markanter Farb- und Materialwirkung
- Leistungskulisse: `P1010496-2880w.JPG`, Nahaufnahme einer mineralischen Oberfläche
- Materialstatement: `Glittzerputz-mit-Lasuren-1920w.JPG`, atmosphärische Wellness-Wand
- Projektgalerie: `4aabedac...`, `KUWS5804`, `Stuhhi...`, `IMG_4313`, `IMG_2457`, `IMG_0464`
- Philosophie: `P1010150-1920w.JPG`, ruhige, mineralische Badgestaltung

Alle Bilder stammen aus dem Originalauftritt. Es werden keine Stockfotos und keine fremden Personen verwendet.

## Copy-Strategie

- Einstieg über das Ergebnis: Räume mit Charakter statt generischer Begrüßung
- Kurze, aktive Sätze und konkrete Techniken
- Keine erfundenen Bewertungen, Projektzahlen, Garantien oder Reaktionszeiten
- Direkte CTAs: Anrufen, Projekt besprechen, Arbeiten ansehen
- Lokale Verankerung in Düsseldorf

## Conversion-Muster

- Faktenband mit ausschließlich verifizierten Angaben
- Mobiler Click-to-Call-Button
- FAQ mit realistischen Einwänden
- LocalBusiness-JSON-LD ohne erfundene Bewertung
- Direkter Kontaktbereich mit Telefon und E-Mail

## Accessibility-Ziele

- WCAG-AA-Kontrast für alle Text- und Interaktionsfarben
- Skip-Link, semantische Landmarken, sichtbare Fokuszustände
- Bedienbare Navigation und FAQ ohne Maus
- Bewegungen vollständig über `prefers-reduced-motion` reduzierbar
- Mindestens 44 × 44 Pixel große Touch-Ziele

## Hero-Weiterentwicklung: Materialverwandlung

### Ästhetische Richtung

Die bestehende dunkle Materialgalerie bleibt unverändert die Leitidee. Das rechte Bildfeld wird zu einer räumlichen, kupferfarben beleuchteten Projektbühne. Sie erinnert nicht an ein technisches 3D-Demo, sondern an echte Materialmuster, die in einer Werkstatt auf einem gebogenen Präsentationsband stehen.

### Aufbau

- Desktop: Die linke 7-Spalten-Textbühne mit Überschrift, Nutzenversprechen und CTAs bleibt ständig sichtbar. Rechts arbeitet ein 5-Spalten-Projektkarussell mit zentralem Nachher-Bild und perspektivisch zurückweichenden Nachbarbildern.
- Tablet: Die Bühne bleibt zweigeteilt, die Projektkarten werden kompakter und die Steuerung rückt unter das Bildband.
- Mobil: Text und Kontaktaktion stehen zuerst. Darunter folgt eine eigenständige, mindestens 44 Pixel bedienbare Projektbühne ohne horizontales Seiten-Overflow.
- Fokusansicht: Das gewählte Bild wächst innerhalb der rechten Bühne nach vorne. Ein sichtbarer Schließen-Button, Vorher-/Nachher-Status und Projektname bleiben durchgehend verfügbar.

### Wow-Moment

Ein Klick auf das zentrale Nachher-Bild zeigt zuerst den realen Ausgang beziehungsweise Untergrund. Nach einer kurzen Ruhephase fährt ein kupferner Lichtstreifen in etwa 1,4 Sekunden von links nach rechts und legt die gestaltete Oberfläche frei. Der gesamte Ablauf bleibt unter drei Sekunden und blockiert weder Navigation noch Kontaktaktionen.

### Bildstrategie

Das vorhandene Archiv enthält keine sicher belegten, perspektivisch identischen Vorher-/Nachher-Paare. Deshalb werden ausschließlich reale Rudek-Fotos verwendet und ehrlich als „Ausgang“ und „Gestaltet“ bezeichnet. Die Paare zeigen den Weg von neutraler beziehungsweise unfertiger Fläche zur ausgearbeiteten Oberfläche, ohne zu behaupten, dass jede Aufnahme exakt denselben Raum zeigt. Sobald exakte Paare vorliegen, können die sechs Bildpfade ohne Layoutänderung ersetzt werden.

### Technische Umsetzung

- Statisches HTML, CSS und Vanilla JavaScript bleiben erhalten.
- Räumliche Wirkung mit CSS `perspective`, `transform` und `opacity`, kein WebGL und keine Animationsbibliothek.
- Pointer-Drag, Touch, Pfeiltasten sowie Vor-/Zurück-Buttons steuern das Karussell.
- Native Buttons, Live-Status und klare Beschriftungen sichern Tastatur- und Screenreader-Bedienung.
- `prefers-reduced-motion` zeigt den Endzustand ohne Lichtfahrt.
- Nur die sechs lokalen Projektbilder werden geladen; keine externen Medien.
