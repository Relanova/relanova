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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-muted-foreground leading-relaxed font-sans mb-6">
            Met de BRIDGE‑methode van Relanova maak ik groei eenvoudiger en slimmer.
            Van heldere strategie tot sterke partnerships — ik help bedrijven hun ecosysteem
            bouwen voor duurzame groei.
          </p>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">De BRIDGE Method™</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Zes lagen naar duurzame groei
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans">
            Elk bedrijf is uniek. Mijn BRIDGE-methode biedt een bewezen 6-laags framework
            dat strategie, positionering en partnerships verbindt tot één krachtig ecosysteem.
          </p>
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
