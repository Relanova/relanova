import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, BarChart3, Lightbulb, Map, Handshake, TrendingUp } from "lucide-react";

const bridgeServices = [
  {
    letter: "B",
    title: "Business Focus",
    subtitle: "Strategie & Ambitie",
    description: "CEO-interviews, visie en groeistrategie — het fundament voor alles.",
    icon: Target,
    color: "bg-navy/10 text-navy",
  },
  {
    letter: "R",
    title: "Relevantie & Realiteit",
    subtitle: "Marktanalyse",
    description: "Diepte-interviews met management en medewerkers voor echte marktinzichten.",
    icon: BarChart3,
    color: "bg-teal/10 text-teal",
  },
  {
    letter: "I",
    title: "Identiteit & Inzicht",
    subtitle: "Positionering",
    description: "Missie, visie en waarden — een unieke marktpositie die resonance creëert.",
    icon: Lightbulb,
    color: "bg-gold/10 text-gold",
  },
  {
    letter: "D",
    title: "Design & Richting",
    subtitle: "Strategische Planning",
    description: "Strategische workshops met BHAG, Porter en Ansoff modellen.",
    icon: Map,
    color: "bg-navy/10 text-navy",
  },
  {
    letter: "G",
    title: "Groei & Partnerships",
    subtitle: "Business Development",
    description: "Roadmap met marketing, partnerships, events en samenwerkingen.",
    icon: Handshake,
    color: "bg-teal/10 text-teal",
  },
  {
    letter: "E",
    title: "Expansie & Evaluatie",
    subtitle: "Schaalbaar Maken",
    description: "Implementatie, partnerontwikkeling en ecosysteem-rendement.",
    icon: TrendingUp,
    color: "bg-gold/10 text-gold",
  },
];

const BridgeServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">De BRIDGE-methode</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            De BRIDGE-methode: Van strategie naar uitvoering
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans">
            Om groei te stimuleren werk ik met de BRIDGE-methode — een gefaseerde aanpak die
            strategie verbindt met uitvoering:
          </p>
          <p className="text-muted-foreground leading-relaxed font-sans mt-2">
            Elke laag apart inzetbaar, of als complete reis. Start waar jij bent.
          </p>
        </div>

        {/* Two phase cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-6 border-l-4 border-navy border-y border-r border-border shadow-sm">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest font-sans">Fase 1 · BRID</span>
            <h3 className="font-serif font-bold text-xl text-foreground mt-2 mb-2">Strategie & Fundament</h3>
            <p className="text-sm text-muted-foreground font-sans mb-3">
              Business Focus → Relevance → Identity → Direction
            </p>
            <p className="text-sm italic text-muted-foreground font-sans">
              → Resultaat: Heldere koers, scherpe keuzes, teamaligned.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border-l-4 border-gold border-y border-r border-border shadow-sm">
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest font-sans">Fase 2 · GE</span>
            <h3 className="font-serif font-bold text-xl text-foreground mt-2 mb-2">Actie, Groei & Meten</h3>
            <p className="text-sm text-muted-foreground font-sans mb-3">
              Growth → Expansion & Evaluation
            </p>
            <p className="text-sm italic text-muted-foreground font-sans">
              → Resultaat: Partnerships die renderen, initiatieven die schalen, continue bijsturing op cijfers & impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bridgeServices.map((service) => (
            <div
              key={service.letter}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center shrink-0`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-serif font-bold text-secondary">{service.letter}</span>
                    <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">— {service.subtitle}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="navy" size="lg" className="gap-2">
              Ontdek alle diensten <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BridgeServicesPreview;
