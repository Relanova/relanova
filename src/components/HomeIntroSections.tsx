import { CheckCircle2, Users, Sparkles } from "lucide-react";

export const HerkenJeDit = () => {
  const items = [
    "Je marketing voelt versnipperd",
    "Je verhaal is niet scherp genoeg",
    "Je doet acties, maar mist richting",
    "Partnerships leveren te weinig op",
    "Je team heeft ideeën, maar geen plan",
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
          Herken je dit?
        </h2>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-foreground font-sans">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const WieHelpIk = () => {
  const items = [
    "Kleine bedrijven, KMO's en corporates die strategie willen verbinden met concrete uitvoering",
    "Teams die senior expertise zoeken - van strategische koers tot dagelijkse implementatie",
    "Organisaties die positionering en partnerships willen laten renderen",
    "Leiders die samenwerkingen willen opbouwen die echt bijdragen, ondersteund door een actief netwerk",
    "Bedrijven die interim marketing-leiderschap nodig hebben - direct inzetbaar op menselijke maat",
    "Zelfstandigen die een strategische partner zoek - zonder fulltime aanwerving",
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
          <Users className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Wie help ik?
        </h2>
        <p className="text-muted-foreground mb-8 font-sans">Relanova is er voor:</p>
        <ul className="space-y-3 text-left max-w-xl mx-auto">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
              <span className="text-foreground font-sans">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-foreground font-sans mt-8 italic">
          Elke organisatie is welkom die klaar is voor groei zonder ruis - van visie tot uitvoering.
        </p>
        <p className="text-foreground font-sans mt-4 italic">
          Bij Relanova begint elke strategie bij de mens. Omdat AI kan analyseren, maar alleen mensen kunnen verbinden.
        </p>
      </div>
    </section>
  );
};

export const ValueProp = () => (
  <section className="py-12 md:py-16 bg-primary">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="text-xl md:text-2xl font-serif text-primary-foreground leading-relaxed">
        Ik vertaal complexe groei-uitdagingen naar een duidelijk verhaal, slimme keuzes en concrete uitvoering.
      </p>
    </div>
  </section>
);

export const SeniorExpertise = () => (
  <section className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-3xl">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 mb-4">
          <Sparkles className="w-6 h-6 text-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Senior expertise, flexibel ingezet
        </h2>
        <p className="text-muted-foreground leading-relaxed font-sans">
          Senior ondersteuning in marketing, communicatie, sponsoring, sales of events hoeft geen
          fulltime aanwerving te zijn. Voor KMO's, startups en scale-ups die strategische en/of
          uitvoerende begeleiding nodig hebben - maar (nog) niet toe zijn aan een vaste hire -
          biedt Relanova de oplossing. Je krijgt een ervaren partner die regie neemt, jouw doelen
          centraal stelt en naadloos aansluit bij je team.
        </p>
      </div>
    </div>
  </section>
);
