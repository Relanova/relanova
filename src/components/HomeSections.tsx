import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Handshake,
  Users2,
  Network,
  Rocket,
  Compass,
  Link2,
  Zap,
  ArrowRight,
  Award,
  Globe2,
  Briefcase,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg-pattern.jpg";
import moniaSignature from "@/assets/monia-signature.png.asset.json";

/* 2. Vertrouwd door CEO's */
export const VertrouwdDoorCEOs = () => {
  const logos = [
    "Nationale Loterij",
    "BASE",
    "Telenet",
    "Nestlé",
    "[klantlogo]",
    "[klantlogo]",
  ];
  return (
    <section className="py-14 md:py-16 bg-background border-y border-border relative overflow-hidden">
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-multiply pointer-events-none" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(155deg)" }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <p className="text-center text-sm md:text-base text-muted-foreground font-sans mb-8 uppercase tracking-widest">
          Bekende organisaties en leiders vertrouwen op Relanova
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
          {logos.map((l, i) => (
            <div
              key={i}
              className="h-14 flex items-center justify-center rounded-lg bg-muted/50 border border-border text-muted-foreground font-serif font-semibold text-sm text-center px-2"
            >
              {l}
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
    { icon: TrendingUp, title: "Groei", desc: "Blijvende groei, geen quick wins." },
    { icon: Handshake, title: "Partnerships", desc: "Samenwerkingen die renderen." },
    { icon: Users2, title: "Stakeholder-alignment", desc: "Iedereen aan boord, één richting." },
    { icon: Network, title: "Ecosystemen", desc: "Netwerken die deuren openen." },
    { icon: Rocket, title: "Executie", desc: "Van plan naar zichtbaar resultaat." },
  ];
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Waarom bedrijven Relanova bellen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4 text-primary-foreground">
            Voor groei die blijvend impact maakt.
          </h2>
          <p className="text-primary-foreground/80 font-sans max-w-2xl mx-auto">
            Bedrijven die vastzitten, geen richting hebben of de juiste verbindingen missen —
            Relanova brengt helderheid en gestructureerd advies waar anderen aarzelen.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 text-center backdrop-blur-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <p.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-base text-primary-foreground mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-primary-foreground/70 font-sans leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 4. Zo creëren wij waarde */
export const ZoCreerenWaarde = () => {
  const pillars = [
    { icon: Compass, title: "Strategie", desc: "Duidelijke koers, scherpe keuzes." },
    { icon: Link2, title: "Relaties", desc: "De juiste mensen, waardevolle connecties." },
    { icon: Zap, title: "Executie", desc: "Van plan naar actie, van actie naar resultaat." },
  ];
  return (
    <section className="section-padding bg-muted/40 relative overflow-hidden">
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-multiply pointer-events-none" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(155deg)" }} />
      <div className="container mx-auto max-w-5xl relative">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Zo creëren wij waarde
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Onze aanpak. Jouw resultaat.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground font-sans">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-foreground font-sans max-w-3xl mx-auto text-lg">
          Wat je oplevert: richting, vertrouwen, rust en toegang tot een netwerk dat deuren opent
          die voor anderen gesloten blijven.
        </p>
      </div>
    </section>
  );
};

/* 5. Manieren om samen te werken */
export const ManierenSamenwerken = () => {
  const services = [
    {
      title: "CEO-strategiesessie",
      desc: "Eén op één sparring: helderheid en richting in enkele uren.",
    },
    {
      title: "Strategisch adviseur",
      desc: "Doorlopende sparring als vertrouwd klankbord van de CEO.",
    },
    {
      title: "Partnership-strategie",
      desc: "De juiste allianties bouwen die groei versnellen.",
    },
    {
      title: "Executive facilitatie",
      desc: "Boardroom- en leiderschapstrajecten begeleiden naar besluitvorming.",
    },
    {
      title: "Executive matchmaking",
      desc: "Verbinden met de juiste mensen — waar het echt telt.",
    },
    {
      title: "Relanova Circle",
      desc: "Besloten kring voor leiders die samen sneller groeien. Binnenkort.",
    },
  ];
  return (
    <section
      className="section-padding text-primary-foreground relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2E636B 0%, #2F5D6A 50%, #304F63 100%)" }}
    >
      <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Manieren om samen te werken
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 text-primary-foreground">
            Kies wat past bij jouw ambitie en fase.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-6 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <h3 className="font-serif font-semibold text-lg mb-2 text-primary-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-primary-foreground/80 font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="hero-outline" size="lg" className="gap-2">
              Bekijk alle diensten <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* 6. Cases & resultaten */
export const CasesResultaten = () => {
  const stats = [
    { icon: Award, value: "25+", label: "jaar ervaring" },
    { icon: Briefcase, value: "[aantal]", label: "strategische projecten" },
    { icon: Globe2, value: "[aantal]", label: "landen" },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Cases & resultaten
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Echte verhalen. Meetbare impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-secondary uppercase tracking-widest font-sans mb-3">
                Case {n}
              </p>
              <p className="text-sm font-sans text-foreground mb-2">
                <span className="font-semibold">Probleem:</span> [beschrijving van de vraag]
              </p>
              <p className="text-sm font-sans text-foreground mb-2">
                <span className="font-semibold">Oplossing:</span> [aanpak via Relanova]
              </p>
              <p className="text-sm font-sans text-foreground">
                <span className="font-semibold">Resultaat:</span> [meetbaar effect]
              </p>
              <blockquote className="mt-4 pt-4 border-t border-border text-sm italic text-muted-foreground font-sans">
                “[testimonial]” <span className="not-italic">— [naam, functie]</span>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 bg-muted/40 border border-border rounded-2xl p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="font-serif font-bold text-2xl md:text-3xl text-foreground">
                {s.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-sans mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 7. Over Mij (preview) */
export const OverMijPreview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={heroPortrait}
              alt="Monia Ben Tahar"
              className="rounded-2xl shadow-lg w-full max-w-[260px] object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
              Over Mij
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Vertrouwd adviseur. Boardroom-ervaring. Partnership-specialist.
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Monia Ben Tahar — strategisch adviseur, bruggenbouwer en verbinder van groei.
              25+ jaar ervaring bij o.a. Nationale Loterij, BASE, Telenet en Nestlé, met focus op
              strategie, partnerships en executie die richting geeft aan ambitieuze organisaties.
            </p>
            <p className="text-secondary font-sans italic text-sm mb-6">
              Human Touch in a Connected World.
            </p>
            <Link to="/about">
              <Button variant="navy" size="lg" className="gap-2">
                Lees meer over Monia <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <img
              src={moniaSignature.url}
              alt="Handtekening Monia - Creating connections that create growth"
              className="mt-10 w-[280px] max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* 8. Boek een strategiesessie */
export const BoekStrategieSessie = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div
          className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2E636B 0%, #2F5D6A 50%, #304F63 100%)" }}
        >
          <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
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
};

/* Compact BRIDGE band (supporting element) */
export const BridgeBand = () => (
  <section className="py-8 bg-background border-y border-border relative overflow-hidden">
    <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-multiply pointer-events-none" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(155deg)" }} />
    <div className="container mx-auto max-w-4xl text-center relative">
      <p className="text-sm font-sans text-muted-foreground uppercase tracking-widest">
        <span className="text-foreground font-semibold">Strategie</span>
        <span className="mx-3 text-secondary">→</span>
        <span className="text-foreground font-semibold">BRIDGE-methode</span>
        <span className="mx-3 text-secondary">→</span>
        <span className="text-foreground font-semibold">Resultaat</span>
      </p>
      <p className="text-sm text-muted-foreground font-sans mt-2 normal-case tracking-normal">
        Het onderliggende raamwerk waarmee we jouw strategie naar dagelijkse werking vertalen.
      </p>
    </div>
  </section>
);
