import { CheckCircle2, Users, Sparkles, TrendingUp, Handshake, Target, Network, Rocket, Compass, HeartHandshake, Zap, Handshake as HandshakeIcon, Flower2, Key, UsersRound, DoorOpen, ChevronsRight, MessageCircle, Presentation, Users2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export const CasesResultatenHome = () => {
  const quotes = [
    {
      text: "Monia is een getalenteerde professional met een opmerkelijk vermogen om samen te werken. Haar sociale vaardigheden zijn van onschatbare waarde gebleken bij de realisatie van complexe marketing en sponsoring projecten.",
      name: "Nico Ruell",
      role: "Founder at BUTIK agency",
    },
    {
      text: "I highly recommend Monia for anyone seeking a seasoned professional in sponsorship and marketing. Monia's extensive expertise in these areas is truly impressive, and she has a remarkable talent for building networks and connecting people.",
      name: "Manu Leroy",
      role: "Director Marketing & Communication at Royal Belgian FA",
    },
    {
      text: "Monia denkt heel oplossingsgericht en is steeds vlot bereikbaar om dingen te overleggen. Haar aanpak getuigt van veel inzichten en ze gaat resoluut voor duurzame lange termijn oplossingen.",
      name: "Dirk Hermans",
      role: "Partner at Deloitte Accountancy",
    },
    {
      text: "Een empathische, gedreven en enthousiaste persoonlijkheid die met grote transparantie en professionalisme steeds zoekt naar de meest optimale samenwerking met haar partners.",
      name: "Chris Bergs",
      role: "Sportpaleisgroep",
    },
  ];

  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#245163] mb-3">Wat bedrijven zeggen</h2>
          <p className="text-lg text-gray-700">Echte verhalen. Meetbare impact.</p>
          <p className="text-sm text-gray-500 mt-2 italic">Aanbevelingen afkomstig van LinkedIn.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quotes.map((q) => (
            <div key={q.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-8 h-8 text-[#245163] mb-4" />
              <p className="text-gray-800 leading-relaxed mb-5">"{q.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-normal text-gray-500">{q.name}</p>
                <p className="text-xs text-gray-400">{q.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#245163]">15+</p>
            <p className="text-sm text-gray-600 mt-1">jaar ervaring</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#245163]">40+</p>
            <p className="text-sm text-gray-600 mt-1">LinkedIn-aanbevelingen</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/resultaten"
            className="inline-block bg-[#245163] hover:bg-[#1c3f4e] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Bekijk alle aanbevelingen
          </Link>
        </div>
      </div>
    </section>
  );
};

const serviceSlug = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const ManierenOmSamenTeWerken = ({ compact = false }: { compact?: boolean }) => {
  const hoofddienst = {
    label: "Halve dag",
    icon: Compass,
    title: "Strategiesessie",
    summary:
      "Een halve dag om helderheid te krijgen over je positionering, commerciële kansen en strategische prioriteiten.",
    items: [
      "Strategische analyse",
      "Commerciële kansen",
      "Partnerships",
      "Stakeholdermapping",
      "Positionering",
      "Prioriteiten bepalen",
    ],
  };

  const diensten = [
    {
      label: "Maandabonnement",
      icon: MessageCircle,
      title: "Strategisch adviseur",
      summary:
        "Vaste strategische sparring en ondersteuning voor scherpe beslissingen en richting wanneer je die nodig hebt.",
      items: [
        "Twee strategiesessies",
        "Telefonische sparring",
        "WhatsApp",
        "Review van documenten",
        "Snelle strategische ondersteuning",
        "Fractional CMO",
        "Marketing services (projectbasis)",
      ],
    },
    {
      label: "Projectbasis",
      icon: HandshakeIcon,
      title: "Partnership-strategie",
      summary:
        "Sterke partnerships en sponsorstrategieën ontwikkelen die nieuwe kansen creëren en commerciële groei versterken.",
      subtitle: "voor organisaties die:",
      items: [
        "Strategische partnerships zoeken",
        "Sponsorstrategieën willen ontwikkelen",
        "Ecosystemen willen bouwen",
        "Nieuwe commerciële kansen zoeken",
      ],
    },
    {
      label: "Succesfee",
      icon: Users2,
      title: "Executive matchmaking",
      summary:
        "Geen recruitment, maar het strategisch verbinden van CEO’s, bedrijven, investeerders en experts die elkaar versterken.",
      subtitle: "geen recruitment, maar:",
      items: [
        "CEO's verbinden",
        "Bedrijven koppelen",
        "Investeerders introduceren",
        "Experts samenbrengen",
        "Strategische coalities vormen",
      ],
    },
    {
      label: "Dagtarief",
      icon: Presentation,
      title: "Executive facilitatie",
      summary:
        "Professionele begeleiding van board meetings, strategiedagen en leiderschapssessies die leiden tot heldere keuzes en actie.",
      subtitle: "faciliteren van:",
      items: [
        "Board meetings",
        "Strategiedagen",
        "Leiderschapssessies",
        "Stakeholderbijeenkomsten",
        "Partnerdagen",
      ],
    },
    {
      label: "Binnenkort",
      icon: Sparkles,
      title: "Relanova Circle",
      summary:
        "Een besloten community voor CEO’s, founders en decision makers rond diepgaande gesprekken, waardevolle relaties en nieuwe opportuniteiten.",
      subtitle: "een exclusieve community voor CEO's, founders en decision makers, met:",
      items: [
        "Besloten diners",
        "Round tables",
        "Mastermindgroepen",
        "Inspiratiesessies",
        "High-level networking",
      ],
    },
  ];
  const HoofdIcon = hoofddienst.icon;
  return (
    <section className={`bg-background px-4 sm:px-6 lg:px-8 ${compact ? "pt-20 md:pt-28 pb-8 md:pb-10" : "py-20 md:py-28"}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Manieren om samen te werken
          </h2>
          <p className="text-muted-foreground font-sans">Kies wat jouw organisatie vandaag nodig heeft. Elke samenwerking start met een strategiesessie.</p>
        </div>

        {(() => {
          const slug = serviceSlug(hoofddienst.title);
          const inner = (
            <div className="flex items-start gap-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 shrink-0">
                <HoofdIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <span className="block text-[11px] uppercase tracking-widest text-white/70 font-sans font-medium mb-1">
                  De eerste stap · {hoofddienst.label}
                </span>
                <h3 className="font-serif font-bold text-white text-xl md:text-2xl mb-2">{hoofddienst.title}</h3>
                {compact ? (
                  <>
                    <p className="text-white/90 font-sans text-sm leading-relaxed">{hoofddienst.summary}</p>
                    <span className="inline-block mt-3 text-sm font-sans font-medium text-white/90 underline underline-offset-4 decoration-white/40 group-hover:text-white">
                      Ontdek deze dienst →
                    </span>
                  </>
                ) : (
                  <>
                    <ul className="grid gap-y-1.5 gap-x-4 sm:grid-cols-2 mb-2">
                      {hoofddienst.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-white/90 font-sans text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-white font-sans italic text-sm mt-2">Alles begint met helderheid en richting.</p>
                  </>
                )}
              </div>
            </div>
          );
          const cls =
            "group block rounded-2xl p-5 md:p-6 mb-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#245163] scroll-mt-28";
          return compact ? (
            <Link to={`/services#${slug}`} className={cls} style={{ backgroundColor: "#245163" }}>
              {inner}
            </Link>
          ) : (
            <div id={slug} className={cls} style={{ backgroundColor: "#245163" }}>
              {inner}
            </div>
          );
        })()}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch [&>*:last-child:nth-child(3n-2)]:lg:col-start-2">
          {diensten.map(({ label, icon: Icon, title, subtitle, items, summary }) => {
            const slug = serviceSlug(title);
            const cardClass =
              "group bg-card rounded-lg p-6 border border-border flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#245163]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#245163] scroll-mt-28";
            const body = (
              <>
                <span className="text-[11px] uppercase tracking-widest font-sans font-medium mb-3" style={{ color: "#245163" }}>
                  {label}
                </span>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ backgroundColor: "#245163" }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-serif font-semibold text-foreground text-lg mb-1">{title}</h3>
                {compact ? (
                  <>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed mt-1">{summary}</p>
                    <span
                      className="mt-4 inline-block text-sm font-sans font-medium underline underline-offset-4 decoration-current/40"
                      style={{ color: "#245163" }}
                    >
                      Ontdek deze dienst →
                    </span>
                  </>
                ) : (
                  <>
                    {subtitle && (
                      <p className="text-muted-foreground font-sans text-sm italic mb-2">{subtitle}</p>
                    )}
                    <ul className="space-y-1.5 mt-1">
                      {items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-muted-foreground font-sans text-sm leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#245163" }} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            );
            return compact ? (
              <Link key={title} to={`/services#${slug}`} className={cardClass}>
                {body}
              </Link>
            ) : (
              <div key={title} id={slug} className={cardClass}>
                {body}
              </div>
            );
          })}
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
    { icon: ChevronsRight, label: "Iemand die beweging creëert" },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Zo creëren wij waarde
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
    { icon: TrendingUp, title: "Groei", text: "Strategische keuzes die zorgen voor duurzame, meetbare groei." },
    { icon: Handshake, title: "Partnerships", text: "De juiste samenwerkingen die nieuwe deuren openen en waarde creëren." },
    { icon: Target, title: "Stakeholders", text: "Alle neuzen in dezelfde richting, intern en extern." },
    { icon: Network, title: "Strategisch netwerk", text: "De juiste mensen en organisaties rond je bedrijf verbinden." },
    { icon: Rocket, title: "Executie", text: "Van strategie naar actie zodat plannen resultaat opleveren." },
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
  <section className="py-10 md:py-14 bg-primary">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="text-xl md:text-2xl font-serif text-primary-foreground leading-relaxed">
        Relanova brengt richting, relaties en resultaat.
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
