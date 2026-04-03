import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Heart, Link2, Zap, TreeDeciduous, Layout as LayoutIcon, Target } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Eye, title: "Helderheid", desc: "Altijd scherp, duidelijk en richtinggevend" },
  { icon: Heart, title: "Menselijkheid (EQ)", desc: "Relaties, vertrouwen en context bepalen succes" },
  { icon: Link2, title: "Verbinding", desc: "Breng mensen, ideeën en organisaties samen rond gedeelde belangen" },
  { icon: Zap, title: "Relevantie", desc: "Alles moet waarde toevoegen voor markt én organisatie" },
  { icon: TreeDeciduous, title: "Duurzaamheid", desc: "Geen quick wins, maar ecosystemen die blijven renderen" },
  { icon: LayoutIcon, title: "Rust & structuur", desc: "Orde in complexiteit zodat keuzes eenvoudig worden" },
  { icon: Target, title: "Impact", desc: "Alles draagt bij aan groei—tastbaar, meetbaar en strategisch" },
];

const bridgeLayers = [
  { letter: "B", title: "Business Focus", detail: "Strategie & ambitie-ontwikkeling via CEO-interviews", layer: "Laag 1" },
  { letter: "R", title: "Relevantie & Realiteit", detail: "Markt- en netwerkwaarde-analyse", layer: "Laag 1" },
  { letter: "I", title: "Identiteit & Inzicht", detail: "Missie, visie en positioneringsbepaling", layer: "Laag 1" },
  { letter: "D", title: "Design & Richting", detail: "Strategische keuzes en prioriteiten", layer: "Laag 1" },
  { letter: "G", title: "Groei & Partnerships", detail: "Initiatieven, partnerships en activatie", layer: "Laag 2" },
  { letter: "E", title: "Expansie & Evaluatie", detail: "Implementatie, schaling en ecosysteemrendement", layer: "Laag 3" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Over Mij</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
                Monia Ben Tahar
              </h1>
              <p className="text-xl text-secondary font-serif italic mb-6">Ecosystem Architect</p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Met meer dan 10 jaar ervaring in strategie, business development en organisatieadvies,
                help ik ambitieuze bedrijven hun ecosysteem bouwen. Ik geloof dat duurzame groei
                ontstaat wanneer strategie, mensen en relaties op elkaar worden afgestemd.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
                Als oprichter van MBT Consult & Connect ontwikkelde ik de BRIDGE Methodology™ —
                een bewezen 6-laags framework dat bedrijven helpt hun marktpositie te versterken
                en groei te versnellen door een scherp verhaal en een slim ecosysteem.
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
                alt="Monia Ben Tahar, Ecosystem Architect"
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
                Ik versterk bedrijven door hun strategie, verhaal en samenwerkingen te verbinden tot één slim
                ecosysteem dat duurzame groei mogelijk maakt. Mijn missie is organisaties duidelijkheid, richting
                en daadkracht geven — zodat strategie niet in documenten blijft hangen, maar echt rendeert in de markt.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Visie</h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Bedrijven groeien niet langer lineair, maar via ecosystemen. De toekomst behoort toe aan organisaties die
                helder weten wie ze zijn, relevant blijven in een snel veranderende markt, en slim samenwerken met de
                juiste partners, kanalen en formats.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className={`bg-card rounded-xl p-5 border border-border text-center ${i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
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

      {/* BRIDGE Methodology Interactive */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Het Framework</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              De BRIDGE Methodology™
            </h2>
            <p className="text-muted-foreground font-sans max-w-xl mx-auto">
              Zes bewezen lagen die strategie, positionering en partnerships verbinden
              tot een duurzaam groei-ecosysteem.
            </p>
          </div>

          {/* BRIDGE Letters */}
          <div className="flex justify-center gap-2 md:gap-3 mb-12">
            {bridgeLayers.map((l) => (
              <div key={l.letter} className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-serif font-bold text-secondary">{l.letter}</span>
              </div>
            ))}
          </div>

          {/* Layers */}
          <div className="space-y-4">
            {bridgeLayers.map((l, i) => (
              <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-secondary text-lg">{l.letter}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif font-semibold text-foreground">{l.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-sans">{l.layer}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">{l.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Three Layers Overview */}
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { layer: "Laag 1", title: "Strategie & Positionering", letters: "B–R–I–D", desc: "Het fundament: wie ben je, waar sta je, en waar ga je heen?" },
              { layer: "Laag 2", title: "Partnerships & Ecosystemen", letters: "G", desc: "Het netwerk: welke samenwerkingen versnellen jouw groei?" },
              { layer: "Laag 3", title: "Groei & Activatie", letters: "G–E", desc: "De actie: implementeren, schalen en rendement meten." },
            ].map((item, i) => (
              <div key={i} className="bg-primary rounded-xl p-6 text-center">
                <span className="text-xs text-secondary font-semibold uppercase tracking-widest font-sans">{item.layer}</span>
                <h4 className="font-serif font-bold text-primary-foreground text-lg mt-2 mb-1">{item.title}</h4>
                <p className="text-primary-foreground/60 text-xs font-sans mb-2">({item.letters})</p>
                <p className="text-primary-foreground/70 text-sm font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
