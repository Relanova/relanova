const services = [
  {
    title: "Strategie & Positionering",
    body:
      "Waar sta je nu en waar wil je naartoe? Samen ontwikkelen we een heldere strategie en een onderscheidende positie in de markt. Zodat je doelgroep jou kiest, niet je concurrent.",
    result: "→ Resultaat: Een strategie die leeft in je team en keuzes die echt bijdragen aan groei.",
  },
  {
    title: "Partnerships, Sponsoring & Business Development",
    body:
      "Groei versnellen doe je niet alleen. Ik help je bij het vinden en realiseren van strategische partnerships, sponsorships en nieuwe business opportunities die echt bijdragen aan jouw doelen.",
    result:
      "→ Resultaat: Samenwerkingen die bijdragen aan omzet, merkwaarde of impact — niet alleen 'leuke deals'. Ik werk met een select netwerk van specialisten om de beste oplossing te leveren — geen eiland, wel het juiste team rond jouw vraag.",
  },
  {
    title: "Marketing & Team Versterking",
    body:
      "Een goed plan is niets zonder uitvoering. Of je nu tijdelijke versterking nodig hebt, marketing expertise zoekt of je team wilt versterken: ik zorg voor de kennis en capaciteit om je plannen tot leven te brengen.",
    result: "→ Resultaat: Plannen die worden uitgevoerd, met de juiste capaciteit op het juiste moment.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
          Wat ik voor je kan betekenen
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif font-semibold text-foreground text-lg mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">{s.body}</p>
              <p className="italic text-muted-foreground/80 text-sm font-sans">{s.result}</p>
            </div>
          ))}
        </div>

        <p className="italic text-muted-foreground text-sm border-l-2 border-secondary/60 pl-4 max-w-3xl mx-auto mb-6">
          Ook inzetbaar als interim strategisch leiderschap: tijdelijke senior expertise voor marketing,
          communicatie en partnerships, zonder de kosten van een fulltime directie.
        </p>

        <p className="text-center text-foreground font-sans">
          Beschikbaar strategisch en/of uitvoerend. Elke dienst is apart inzetbaar, naargelang jouw behoefte.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
