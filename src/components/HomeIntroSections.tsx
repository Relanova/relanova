import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Users,
  Rocket,
  Sparkles,
  Handshake,
  TrendingUp,
  Target,
  CalendarDays,
  Repeat,
  Network,
  UsersRound,
  Presentation,
  ArrowRight,
  Quote,
} from "lucide-react";
import authorPhoto from "@/assets/monia-author.jpg";

export const WhyCompaniesCall = () => {
  const questions = [
    "Welke partnerships versnellen onze groei?",
    "Welke mensen moet ik kennen?",
    "Hoe bouw ik een sterk ecosysteem rond mijn organisatie?",
    "Hoe krijg ik stakeholders mee?",
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Waarom bedrijven Relanova bellen</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
            Kennis wordt geautomatiseerd. Echte waarde verschuift naar ervaring, netwerk en executie.
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
            CEO's worstelen niet meer met "hoe maak ik een campagne?", maar met strategische vragen:
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
          {questions.map((q) => (
            <li key={q} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
              <span className="text-foreground font-sans">{q}</span>
            </li>
          ))}
        </ul>
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-6 md:p-8 text-center">
          <p className="text-foreground font-sans leading-relaxed">
            Veel CEO's hebben een goede strategie, maar missen de juiste partners, het juiste netwerk, executiekracht en intern draagvlak.
            <span className="block mt-3 font-semibold">
              Relanova overbrugt precies die kloof - dat is het echte product.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export const HowRelanovaCreatesValue = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Strategie",
      tagline: "die richting geeft",
      body: "Duidelijke keuzes, scherpe prioriteiten, positionering.",
    },
    {
      icon: Users,
      title: "Relaties",
      tagline: "die kansen openen",
      body: "De juiste mensen samenbrengen, toegang tot het juiste netwerk op het juiste moment.",
    },
    {
      icon: Rocket,
      title: "Executie",
      tagline: "die resultaten levert",
      body: "Van strategie naar concrete resultaten, snellere besluitvorming, echte beweging.",
    },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Hoe Relanova waarde creeert</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Drie hefbomen die samen groei versnellen
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-1">
                {p.title} <span className="text-secondary font-sans font-normal text-base">{p.tagline}</span>
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed mt-2">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatClientsGain = () => {
  const items = [
    { icon: Sparkles, title: "Helderheid", body: "Duidelijke strategie en scherpe prioriteiten." },
    { icon: Network, title: "Toegang", body: "Tot het juiste netwerk, op het juiste moment." },
    { icon: TrendingUp, title: "Versnelling", body: "Snellere besluitvorming en minder ruis." },
    { icon: Handshake, title: "Partnerships", body: "Strategische samenwerkingen die waarde creeren en groei versnellen." },
    { icon: Target, title: "Resultaat", body: "Meetbare impact, duurzame groei en concurrentievoordeel." },
  ];
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Wat klanten winnen</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Concrete winst voor CEO's en leiders
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                <i.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-1">{i.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WaysToWorkTogether = () => {
  const services = [
    {
      icon: Presentation,
      title: "CEO Strategy Session",
      body: "Een intensieve sessie: strategische analyse, commerciele kansen, partnerships, stakeholdermapping, positionering en prioriteiten.",
    },
    {
      icon: Repeat,
      title: "Strategic Advisor Retainer",
      body: "Doorlopende strategische ondersteuning: strategiesessies, telefonische sparring, review van documenten en snelle support.",
    },
    {
      icon: Handshake,
      title: "Partnership Strategy",
      body: "Voor organisaties die strategische partnerships zoeken, sponsorstrategieen willen ontwikkelen, ecosystemen willen bouwen of nieuwe commerciele kansen zoeken.",
    },
    {
      icon: UsersRound,
      title: "Executive Matchmaking",
      body: "Geen recruitment, maar: CEO's verbinden, bedrijven koppelen, investeerders introduceren, experts samenbrengen en strategische coalities vormen.",
    },
    {
      icon: CalendarDays,
      title: "Executive Facilitation",
      body: "Faciliteren van board meetings, strategiedagen, leiderschapssessies, stakeholderbijeenkomsten en partnerdagen.",
    },
  ];
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Manieren om samen te werken</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
            Vijf formats, een belofte: strategie, relaties en resultaat.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AboutMoniaTeaser = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <img
            src={authorPhoto}
            alt="Monia Ben Tahar - Executive Strategic Advisor & Growth Connector"
            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-secondary/30"
            width={192}
            height={192}
            loading="lazy"
          />
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Over Monia</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-3">
              Monia Ben Tahar
            </h2>
            <p className="text-secondary font-sans font-semibold mb-4">
              Executive Strategic Advisor & Growth Connector
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              Ervaring op boardroom-niveau, uitgebreid internationaal netwerk en trusted advisor voor CEO's, founders en decision makers. Bruggenbouwer tussen strategie, mensen en markten - met een Human Touch in a Connected World.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 text-foreground font-sans italic mb-6">
              <Quote className="w-5 h-5 text-secondary/50 mb-1" />
              "Als Monia mee aan tafel zit, weet je dat de juiste mensen samenkomen, kansen zichtbaar worden en er daadwerkelijk beweging ontstaat."
            </blockquote>
            <Link to="/about">
              <Button variant="navy" size="lg" className="gap-2">
                Meer over Monia <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
