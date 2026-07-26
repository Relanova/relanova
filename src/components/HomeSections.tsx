import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Handshake,
  Users,
  Network,
  Rocket,
  Compass,
  UserPlus,
  Zap,
  MessageSquare,
  Calendar,
  Search,
  Sparkles,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

/* 2. Vertrouwd door CEO's */
export const TrustedBy = () => {
  const placeholders = Array.from({ length: 6 });
  return (
    <section className="py-14 md:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm md:text-base text-muted-foreground font-sans mb-8">
          Bekende organisaties en leiders vertrouwen op Relanova.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="h-12 rounded-md bg-muted/60 border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground font-sans"
            >
              [klantlogo]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 3. Waarom bedrijven Relanova bellen */
export const WaaromRelanova = () => {
  const points = [
    { icon: TrendingUp, title: "Groei" },
    { icon: Handshake, title: "Partnerships" },
    { icon: Users, title: "Stakeholder-alignment" },
    { icon: Network, title: "Ecosystemen" },
    { icon: Rocket, title: "Executie" },
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Voor groei die blijvend impact maakt
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-5">
            Waarom bedrijven Relanova bellen
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Vastgelopen groei, geen scherpe richting of net die ene verbinding die ontbreekt.
            Relanova brengt helderheid en gestructureerd advies, daar waar anderen aarzelen.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {points.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-5 border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="font-serif font-semibold text-foreground text-sm md:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 4. Zo creëren wij waarde */
export const ZoCreerenWijWaarde = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Strategie",
      desc: "Duidelijke koers, scherpe keuzes.",
    },
    {
      icon: Users,
      title: "Relaties",
      desc: "De juiste mensen, waardevolle connecties.",
    },
    {
      icon: Rocket,
      title: "Executie",
      desc: "Van plan naar actie, van actie naar resultaat.",
    },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Onze aanpak. Jouw resultaat.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Zo creëren wij waarde
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-sans max-w-3xl mx-auto leading-relaxed">
          Wat je oplevert: richting, vertrouwen, rust en toegang tot een netwerk dat deuren opent
          die voor anderen gesloten blijven.
        </p>
      </div>
    </section>
  );
};

/* Compact BRIDGE band (supporting, not a main section) */
export const BridgeBand = () => (
  <section className="py-10 md:py-12 bg-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="text-primary-foreground">
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold font-sans mb-2">
            Ondersteund door de BRIDGE-methode
          </p>
          <p className="font-serif text-lg md:text-xl leading-snug">
            Strategie <span className="text-secondary">→</span> BRIDGE{" "}
            <span className="text-secondary">→</span> Resultaat
          </p>
          <p className="text-primary-foreground/70 text-sm font-sans mt-1">
            Het raamwerk dat strategie omzet in dagelijkse uitvoering.
          </p>
        </div>
        <Link to="#bridge-methode">
          <Button variant="hero-outline" size="lg">
            Ontdek de methode
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* 5. Manieren om samen te werken */
export const ManierenSamenwerken = () => {
  const services = [
    {
      icon: Compass,
      title: "CEO-strategiesessie",
      desc: "Een scherpe sessie om richting, prioriteiten en groeikansen helder te krijgen.",
    },
    {
      icon: MessageSquare,
      title: "Strategisch adviseur",
      desc: "Doorlopende sparring op directieniveau - jouw klankbord voor grote keuzes.",
    },
    {
      icon: Handshake,
      title: "Partnership-strategie",
      desc: "Samenwerkingen die daadwerkelijk bijdragen aan omzet, merkwaarde of impact.",
    },
    {
      icon: Users,
      title: "Executive facilitatie",
      desc: "Begeleiding van boardroom- en managementgesprekken naar concrete beslissingen.",
    },
    {
      icon: Search,
      title: "Executive matchmaking",
      desc: "De juiste mensen aan tafel: leiders, partners en experts uit een select netwerk.",
    },
    {
      icon: Sparkles,
      title: "Relanova Circle",
      desc: "Een besloten kring van leiders die samen groeien. Binnenkort.",
    },
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Kies wat past bij jouw ambitie en fase
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Manieren om samen te werken
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 6. Cases & resultaten */
export const CasesResultaten = () => {
  const stats = [
    { value: "25+", label: "jaar ervaring" },
    { value: "[aantal]", label: "strategische projecten" },
    { value: "[aantal]", label: "landen" },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Echte verhalen. Meetbare impact.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Cases & resultaten
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl p-8 border border-border text-center shadow-sm"
            >
              <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
                {s.value}
              </p>
              <p className="text-muted-foreground font-sans">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/40 border border-dashed border-border rounded-2xl p-8 md:p-10 text-center">
          <p className="text-muted-foreground font-sans italic mb-2">
            [testimonial - echte klantquote in te vullen]
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            [naam, functie, organisatie]
          </p>
        </div>

        <div className="text-center mt-10">
          <Link to="/cases">
            <Button variant="navy" size="lg" className="gap-2">
              Bekijk cases <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* 7. Over Mij */
export const OverMijHome = () => (
  <section className="section-padding bg-muted/30">
    <div className="container mx-auto max-w-5xl">
      <div className="grid lg:grid-cols-[auto,1fr] gap-10 items-center">
        <img
          src={heroPortrait}
          alt="Monia Ben Tahar - strategisch adviseur en oprichter van Relanova"
          className="rounded-2xl shadow-lg w-full max-w-xs object-cover aspect-[3/4] mx-auto"
          loading="lazy"
          width={640}
          height={800}
        />
        <div>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Vertrouwd adviseur. Boardroom-ervaring. Partnership-specialist.
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-5">
            Over Monia
          </h2>
          <p className="text-foreground font-sans leading-relaxed mb-4">
            Monia Ben Tahar - strategisch adviseur, bruggenbouwer en verbinder van groei. Met
            25+ jaar ervaring bij organisaties als Nationale Loterij, BASE, Telenet en Nestlé
            helpt zij leiders om strategie te vertalen naar meetbaar resultaat.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed italic mb-6">
            Human Touch in a Connected World - omdat groei begint bij mensen.
          </p>

          <div className="border-t border-border pt-5">
            <p className="font-serif italic text-2xl text-foreground">Monia</p>
            <p className="text-sm text-muted-foreground font-sans mt-1">
              Creating connections that create growth.
            </p>
          </div>

          <div className="mt-6">
            <Link to="/about">
              <Button variant="navy" size="lg" className="gap-2">
                Meer over Monia <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* 8. Boek een strategiesessie */
export const BoekStrategieSessie = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Boek een strategiesessie
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 font-sans">
            De eerste stap naar helderheid, richting en groei.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2">
              Boek nu <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
