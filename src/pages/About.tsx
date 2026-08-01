import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Compass, ShieldCheck, Zap, Heart } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import signatuur from "@/assets/monia-signatuur.png.asset.json";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Link2, title: "Verbindend", desc: "Ik breng de juiste mensen bij elkaar." },
  { icon: Compass, title: "Strategisch", desc: "Ik zorg voor een heldere koers en scherpe keuzes." },
  { icon: ShieldCheck, title: "Betrouwbaar", desc: "Afspraken zijn afspraken, altijd." },
  { icon: Zap, title: "Daadkrachtig", desc: "Van plan naar actie, zonder omwegen." },
  { icon: Heart, title: "Mensgericht", desc: "Achter elke samenwerking staat een mens." },
];

const bridgeLayers = [
  { letter: "B", title: "Business Focus", detail: "We bepalen samen waar je naartoe wil." },
  { letter: "R", title: "Relevantie & Realiteit", detail: "We kijken eerlijk naar je markt en je positie vandaag." },
  { letter: "I", title: "Identiteit & Inzicht", detail: "We maken scherp wie je bent en waar je voor staat." },
  { letter: "D", title: "Design & Richting", detail: "We kiezen de prioriteiten die er echt toe doen." },
  { letter: "G", title: "Groei & Partnerships", detail: "We bouwen samenwerkingen die je verder brengen." },
  { letter: "E", title: "Expansie & Evaluatie", detail: "We voeren uit, meten en sturen bij." },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="Over Monia Ben Tahar - Strategic Advisor | Relanova"
        description="Maak kennis met Monia Ben Tahar, oprichter van Relanova. Strategie, mensen en relaties samenbrengen zodat er groei ontstaat."
        path="/about"
      />
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Over Mij</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
                Monia Ben Tahar
              </h1>
              <p className="text-xl text-secondary font-serif italic mb-6">Strategic Advisor &amp; Growth Connector</p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Al meer dan 15 jaar breng ik mensen, merken en organisaties samen. Mijn werk zit op het
                kruispunt van strategie, marketing en partnerships - altijd met de mens als vertrekpunt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
                Als oprichter van Relanova help ik bedrijven hun verhaal scherp te krijgen, de juiste
                mensen te vinden en van plannen echte resultaten te maken. Daarvoor gebruik ik de
                BRIDGE-methode: een rustig kader dat structuur geeft van strategie tot resultaat.
              </p>
              <Link to="/contact">
                <Button variant="navy" size="lg" className="gap-2">
                  Neem Contact Op <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar, Strategic Advisor & Growth Connector"
                className="rounded-2xl shadow-lg w-full max-w-sm object-cover aspect-[3/4]"
                loading="lazy"
                width={768}
                height={960}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Missie</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Strategie, mensen en relaties samenbrengen zodat er groei ontstaat. Ik geef organisaties
                helderheid, richting en daadkracht - zodat plannen niet in documenten blijven hangen,
                maar zichtbaar worden in de markt.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Visie</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Groei ontstaat tussen mensen. Bedrijven die weten wie ze zijn, relevant blijven en
                samenwerken met de juiste partners, gaan verder dan bedrijven die het alleen proberen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Kernwaarden</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
              Waar ik voor sta
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-xl p-5 border border-border text-center">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE-methode */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Het raamwerk</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              De BRIDGE-methode
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Zes stappen die structuur geven van strategie tot resultaat.
            </p>
          </div>

          {/* BRIDGE Letters */}
          <div className="flex justify-center gap-2 md:gap-3 mb-10">
            {bridgeLayers.map((l) => (
              <div
                key={l.letter}
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#245163" }}
              >
                <span className="text-2xl md:text-3xl font-serif font-bold text-white">{l.letter}</span>
              </div>
            ))}
          </div>

          {/* Layers */}
          <div className="grid gap-4 md:grid-cols-2">
            {bridgeLayers.map((l, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-secondary text-lg">{l.letter}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-foreground mb-1">{l.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signatuur */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto max-w-4xl flex justify-center">
          <img
            src={signatuur.url}
            alt="Handtekening Monia - Creating connections that create growth"
            className="w-full max-w-[260px] h-auto"
            loading="lazy"
          />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
