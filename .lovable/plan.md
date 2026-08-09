# Tweede CTA-blok van de homepage verwijderen

De homepage rendert onderaan twee CTA-blokken. Het tweede ("Klaar om samen te groeien?" met de knop "Boek een strategiesessie") staat direct na de sectie "Wat bedrijven zeggen" en verdwijnt.

## Wijziging

- Verwijder `<CTASection />` uit de homepage, zodat de pagina na "Wat bedrijven zeggen" direct doorloopt naar de compacte Relanova brand signature.
- Het eerste CTA-blok na "Manieren om samen te werken" blijft ongewijzigd.
- De testimonials-sectie eindigt met ruime onderpadding; om een groot wit gat te vermijden wordt de onderste padding van die sectie licht verkleind zodat de brand signature natuurlijk aansluit.

## Technisch

- `src/pages/Index.tsx`: regel met `<CTASection />` en de bijhorende import verwijderen.
- `src/components/HomeIntroSections.tsx`: in `CasesResultatenHome` de sectiepadding aanpassen van `py-20` naar `pt-20 pb-10`.
- `CTASection.tsx` zelf blijft bestaan en ongewijzigd (wordt elders gebruikt).
- Geen andere pagina's of componenten worden aangepast.
