## Wijzigingen homepage (alleen `/`)

Alle andere pagina's, footer, navigatie, design, kleuren en lettertypes blijven exact ongewijzigd.

### Nieuwe volgorde van secties
1. Hero
2. Herken je dit? *(nieuw)*
3. Wie help ik? *(nieuw)*
4. Waarde-propositie *(nieuw, 1 zin)*
5. 3 Diensten *(losgekoppeld van Hero, teksten ongewijzigd + 2 zinnen onderaan)*
6. Senior expertise, flexibel ingezet *(nieuw)*
7. BRIDGE-methode *(verplaatst naar hier + before/after regel)*
8. CTA *(bestaand + nieuwe subtekst)*

Stats- en Testimonials-secties die nu op de homepage staan worden **niet** in jouw lijst genoemd. Vraag: laat ik die staan op hun huidige plek, of moeten die weg? *(Default: ik laat ze staan — Stats blijft direct na Hero, Testimonials direct vóór CTA.)*

### Per sectie

**1. Hero (`HeroSection.tsx`)**
- Hoofdtitel ongewijzigd.
- Direct onder de titel toevoegen: *"Voor KMO's en leiders die strategie willen omzetten in resultaat — zonder ruis, zonder quick fixes."*
- De 3 dienstblokken (Strategie & Positionering, Partnerships, Marketing & Team Versterking) en de interim-paragraaf worden **uit de Hero gehaald** en hergebruikt in de nieuwe "3 Diensten"-sectie (punt 5) — teksten exact behouden.
- Intro "Van strategie naar resultaat…" + de inleidende alinea ("Ik help organisaties groeien…") en "Wat ik voor je kan betekenen?" blijven in de Hero staan.

**2. Herken je dit?** *(nieuw component)*
- Titel + 5 bullets exact zoals opgegeven.

**3. Wie help ik?** *(nieuw component)*
- Titel + 3 bullets exact zoals opgegeven.

**4. Waarde-propositie** *(nieuw, compacte sectie)*
- Eén zin: *"Ik vertaal complexe groei-uitdagingen naar een duidelijk verhaal, slimme keuzes en concrete uitvoering."*

**5. 3 Diensten** *(nieuw component, teksten uit huidige Hero)*
- Strategie & Positionering / Partnerships, Sponsoring & Business Development / Marketing & Team Versterking — teksten + "Resultaat"-regels ongewijzigd.
- Interim-paragraaf ongewijzigd onderaan behouden.
- Twee nieuwe zinnen toevoegen onderaan: *"Beschikbaar strategisch en/of uitvoerend. Elke dienst is apart inzetbaar, naargelang jouw behoefte."*

**6. Senior expertise, flexibel ingezet** *(nieuw component)*
- Titel + tekst exact zoals opgegeven.

**7. BRIDGE-methode (`BridgeServicesPreview.tsx`)**
- Verplaatst naar na "Senior expertise" en vóór CTA.
- Onder de bestaande uitleg toevoegen: *"❌ Strategie blijft hangen in presentaties → ✅ Met BRIDGE: uitvoering die gemeten en bijgestuurd wordt."*

**8. CTA (`CTASection.tsx`)**
- Titel + knoppen ongewijzigd.
- Onder de knoppen toevoegen: *"Je krijgt direct 1-2 heldere inzichten over jouw groeivraag — ook als we niet samenwerken."*

### Technisch
- Nieuwe componenten: `HerkenJeDit.tsx`, `WieHelpIk.tsx`, `ValueProp.tsx`, `ServicesSection.tsx`, `SeniorExpertise.tsx`.
- `Index.tsx` volgorde aanpassen.
- Bestaande design tokens (navy/teal/gold, Playfair/Inter, section-padding, container) hergebruiken — geen nieuwe stijlen.

### Vraag vóór ik bouw
Laat ik **Stats** (direct na Hero) en **Testimonials** (vóór CTA) op hun huidige plek staan? Bevestig ja/nee, dan voer ik direct uit.