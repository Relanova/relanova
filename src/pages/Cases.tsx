import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import CTASection from "@/components/CTASection";

const cases = [
  {
    title: "TechGrow NV — Van Startup naar Scale-up",
    industry: "Technologie",
    layers: ["B", "R", "I", "D", "G"],
    challenge: "TechGrow had een sterk product maar miste strategische richting en partnerships om door te groeien.",
    solution: "Via de BRIDGE-methode definieerden we een scherpe positionering en bouwden we een netwerk van strategische partners op.",
    results: [
      { metric: "+40%", label: "Omzetgroei" },
      { metric: "5", label: "Nieuwe partners" },
      { metric: "3 maanden", label: "Time-to-market" },
    ],
    quote: "Monia heeft ons geholpen onze strategie helder te maken en de juiste partnerships te vinden.",
    author: "Sarah Van den Berg, CEO",
  },
  {
    title: "GreenScale — Ecosysteem voor Duurzame Groei",
    industry: "Duurzaamheid",
    layers: ["B", "R", "I", "G", "E"],
    challenge: "GreenScale wilde schalen maar had geen duidelijke go-to-market strategie of partner ecosysteem.",
    solution: "We bouwden een volledig ecosysteem met strategische allianties, sponsorships en een community platform.",
    results: [
      { metric: "+65%", label: "Lead groei" },
      { metric: "8", label: "Partnerships" },
      { metric: "€500K", label: "Nieuwe omzet" },
    ],
    quote: "De BRIDGE-methode gaf ons structuur waar we die misten. Monia denkt in ecosystemen.",
    author: "Thomas Janssen, Oprichter",
  },
  {
    title: "InnoHub — Merkidentiteit & Marktpositie",
    industry: "Innovation Hub",
    layers: ["I", "D", "G"],
    challenge: "InnoHub had een verwaterd merk en onduidelijke positionering in een concurrerende markt.",
    solution: "We herdefineerden hun identiteit, bouwden een nieuwe brand narrative en lanceerden gerichte partnerschappen.",
    results: [
      { metric: "+85%", label: "Brand awareness" },
      { metric: "12", label: "Media mentions" },
      { metric: "+30%", label: "Klantretentie" },
    ],
    quote: "Eindelijk een consultant die niet alleen strategie maakt, maar ook helpt implementeren.",
    author: "Lisa De Vries, Marketing Director",
  },
];

const Cases = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Resultaten die spreken
          </h1>
          <p className="text-muted-foreground text-lg font-sans">
            Ontdek hoe de BRIDGE Methodology™ bedrijven helpt hun groei te versnellen
            met meetbare resultaten.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl space-y-10">
          {cases.map((c, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full font-sans">{c.industry}</span>
                  {c.layers.map((l) => (
                    <span key={l} className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-sm font-serif font-bold text-secondary">{l}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{c.title}</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-2">Uitdaging</h4>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-2">Oplossing (BRIDGE)</h4>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {c.results.map((r, j) => (
                    <div key={j} className="bg-muted/50 rounded-xl p-4 text-center">
                      <p className="text-2xl font-serif font-bold text-secondary">{r.metric}</p>
                      <p className="text-xs text-muted-foreground font-sans mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-secondary">
                  <p className="text-sm text-foreground italic font-sans mb-2">"{c.quote}"</p>
                  <p className="text-xs text-muted-foreground font-sans font-semibold">— {c.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Cases;
