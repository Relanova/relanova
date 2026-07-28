import { CheckCircle2, Users, Sparkles, TrendingUp, Handshake, Target, Network, Rocket, Compass, HeartHandshake, Zap, Handshake as HandshakeIcon, Flower2, Key, UsersRound, DoorOpen, ChevronsRight, MessageCircle, Presentation, Users2 } from "lucide-react";

export const ManierenOmSamenTeWerken = () => {
  const hoofddienst = { label: "Halve dag", icon: Compass, title: "CEO-strategiesessie", text: "Strategische analyse, commerciele kansen, partnerships, stakeholdermapping, positionering en prioriteiten." };
  const diensten = [
    { label: "Maandabonnement", icon: MessageCircle, title: "Strategisch adviseur", text: "Strategiesessies, telefonische sparring, review van documenten en snelle strategische ondersteuning." },
    { label: "Projectbasis", icon: HandshakeIcon, title: "Partnership-strategie", text: "Voor wie strategische partnerships zoekt, sponsorstrategieen wil ontwikkelen of ecosystemen wil bouwen." },
    { label: "Succesfee", icon: Users2, title: "Executive matchmaking", text: "CEO's verbinden, bedrijven koppelen, investeerders introduceren en experts samenbrengen." },
    { label: "Dagtarief", icon: Presentation, title: "Executive facilitatie", text: "Board meetings, strategiedagen, leiderschapssessies en stakeholderbijeenkomsten faciliteren." },
    { label: "Binnenkort", icon: Sparkles, title: "Relanova Circle", text: "Een exclusieve community voor CEO's, founders en decision makers: diners, round tables en high-level networking." },
  ];
  const HoofdIcon = hoofddienst.icon;
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Manieren om samen te werken
          </h2>
          <p className="text-muted-foreground font-sans">Kies wat past bij jouw ambitie en fase.</p>
        </div>

        <div
          className="rounded-2xl p-5 md:p-6 mb-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ backgroundColor: "#245163" }}
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 shrink-0">
              <HoofdIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <span className="block text-[11px] uppercase tracking-widest text-white/70 font-sans font-medium mb-1">
                De eerste stap · {hoofddienst.label}
              </span>
              <h3 className="font-serif font-bold text-white text-xl md:text-2xl mb-1.5">{hoofddienst.title}</h3>
              <p className="text-white/90 font-sans text-sm leading-relaxed">{hoofddienst.text}</p>
              <p className="text-white font-sans italic text-sm mt-2">Alles begint met helderheid en richting.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {diensten.map(({ label, icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-card rounded-lg p-6 border border-border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-[11px] uppercase tracking-widest font-sans font-medium mb-3" style={{ color: "#245163" }}>
                {label}
              </span>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ backgroundColor: "rgba(36,81,99,0.1)" }}>
                <Icon className="w-5 h-5" style={{ color: "#245163" }} />
              </div>
              <h3 className="font-serif font-semibold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ZoCrerenWijWaarde = () => {
  const pijlers = [
    { icon: Compass, title: "Strategie", text: "duidelijke koers, scherpe keuzes." },
    { icon: HeartHandshake, title: "Relaties", text: "de juiste mensen, waardevolle connecties." },
    { icon: Zap, title: "Executie", text: "van plan naar actie, van actie naar resultaat." },
  ];
  const begrippen = [
    { icon: HandshakeIcon, label: "Vertrouwen" },
    { icon: Flower2, label: "Rust" },
    { icon: Target, label: "Overzicht" },
    { icon: Key, label: "Toegang" },
    { icon: UsersRound, label: "Een sparringpartner" },
    { icon: DoorOpen, label: "Iemand die deuren opent" },
    { icon: ChevronsRight, label: "Iemand die beweging creeert" },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Zo creeren wij waarde
          </h2>
          <p className="text-muted-foreground font-sans">Onze aanpak. Jouw resultaat.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {pijlers.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground font-sans text-sm">{text}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-8">
          Wat dat jou oplevert
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center max-w-3xl mx-auto">
          {begrippen.slice(0, 4).map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="w-10 h-10 mb-3" style={{ color: "#245163" }} strokeWidth={1.5} />
              <span className="font-sans text-sm font-medium" style={{ color: "#245163" }}>{label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-3xl mx-auto mt-8">
          {begrippen.slice(4).map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="w-10 h-10 mb-3" style={{ color: "#245163" }} strokeWidth={1.5} />
              <span className="font-sans text-sm font-medium" style={{ color: "#245163" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WaaromRelanova = () => {
  const items = [
    { icon: TrendingUp, title: "Groei", text: "Strategische keuzes die zorgen voor blijvende, meetbare groei." },
    { icon: Handshake, title: "Partnerships", text: "De juiste samenwerkingen die deuren openen en waarde creeren." },
    { icon: Target, title: "Stakeholder-alignment", text: "Alle neuzen in dezelfde richting, intern en extern." },
    { icon: Network, title: "Ecosystemen", text: "Een sterk netwerk bouwen rond je organisatie." },
    { icon: Rocket, title: "Executie", text: "Van plan naar actie, zodat er echt beweging ontstaat." },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Waarom bedrijven Relanova bellen
          </h2>
          <p className="text-muted-foreground font-sans">Voor groei die blijvend impact maakt.</p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2 [&>li:last-child:nth-child(odd)]:md:col-span-2 [&>li:last-child:nth-child(odd)]:md:max-w-md [&>li:last-child:nth-child(odd)]:md:mx-auto [&>li:last-child:nth-child(odd)]:md:w-full">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 bg-card rounded-lg p-5 border border-border">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 shrink-0">
                <Icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground font-sans text-sm">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

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
    "Zelfstandigen die een strategische partner zoeken - zonder fulltime aanwerving",
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
