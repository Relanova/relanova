import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, BarChart3, Lightbulb, Map, Handshake, TrendingUp, Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    letter: "B",
    icon: Target,
    title: "Business Focus — Strategie & Ambitie",
    layer: "Laag 1",
    description: "We starten met een diepgaand CEO-interview om uw ambitie, visie en groeisdoelen te bepalen. Dit is het fundament van uw strategisch ecosysteem.",
    deliverables: ["CEO Vision Interview rapport", "Groeistrategie canvas", "Ambitie-alignment document", "Stakeholder mapping"],
    price: "Vanaf €1.500",
    duration: "1 week",
  },
  {
    letter: "R",
    icon: BarChart3,
    title: "Relevantie & Realiteit — Marktanalyse",
    layer: "Laag 1",
    description: "Via diepte-interviews met management en medewerkers ontdekken we de echte marktwaarde van uw organisatie en identificeren we kansen en uitdagingen.",
    deliverables: ["Marktanalyse rapport", "Concurrentie-overzicht", "Interne feedback analyse", "Kansen & risico matrix"],
    price: "Vanaf €2.000",
    duration: "2 weken",
  },
  {
    letter: "I",
    icon: Lightbulb,
    title: "Identiteit & Inzicht — Positionering",
    layer: "Laag 1",
    description: "We definiëren uw missie, visie en waarden — de inner roots van uw organisatie. Zo creëren we een unieke marktpositie die resonance opbouwt.",
    deliverables: ["Missie & visie formulering", "Waardepropositie", "Positioneringsstrategie", "Brand narrative"],
    price: "Vanaf €2.500",
    duration: "3 weken",
  },
  {
    letter: "D",
    icon: Map,
    title: "Design & Richting — Strategische Planning",
    layer: "Laag 1",
    description: "In strategische workshops gebruiken we BHAG, Porter en Ansoff modellen om gefocuste keuzes te maken en een roadmap te bouwen.",
    deliverables: ["Strategische roadmap", "Prioriteitenmatrix", "BHAG definitie", "Actieplan met KPI's"],
    price: "Vanaf €3.000",
    duration: "1 maand",
  },
  {
    letter: "G",
    icon: Handshake,
    title: "Groei & Partnerships — Business Development",
    layer: "Laag 2",
    description: "We bouwen een roadmap met marketing, partnerships, events en samenwerkingen. Alles gericht op duurzame groei via uw ecosysteem.",
    deliverables: ["Partnership roadmap", "Channel partner strategie", "Sponsorship plan", "Community engagement plan"],
    price: "Vanaf €2.500",
    duration: "2–4 weken",
  },
  {
    letter: "E",
    icon: TrendingUp,
    title: "Expansie & Evaluatie — Schaalbaar Maken",
    layer: "Laag 3",
    description: "We implementeren de roadmap met uw team, ontwikkelen partners en zetten experts in om uw ecosysteem duurzaam te laten renderen.",
    deliverables: ["Implementatie ondersteuning", "Team versterking advies", "Marketing activatie", "Rendement meting"],
    price: "Op maat",
    duration: "Doorlopend",
  },
];

const faqs = [
  { q: "Wat is de BRIDGE Methodology™?", a: "BRIDGE is een bewezen 6-laags strategisch framework dat Business Focus, Relevantie, Identiteit, Design, Groei en Expansie verbindt tot één geïntegreerd ecosysteem voor duurzame bedrijfsgroei." },
  { q: "Voor wie zijn de diensten geschikt?", a: "Onze diensten zijn geschikt voor KMO's, scale-ups en mid-market bedrijven in België en daarbuiten die hun strategie willen versterken en duurzaam willen groeien." },
  { q: "Hoe lang duurt een volledig BRIDGE-traject?", a: "Een volledig traject duurt gemiddeld 3-6 maanden, afhankelijk van de omvang van uw organisatie en de gekozen diensten." },
  { q: "Kan ik ook individuele lagen afnemen?", a: "Ja, u kunt elke BRIDGE-laag apart afnemen. We raden echter aan om minimaal de eerste vier lagen (B-R-I-D) samen te doen voor het beste resultaat." },
  { q: "Werkt Relanova ook remote?", a: "Absoluut. We werken zowel on-site als remote vanuit Sint-Baafs-Vijve, met flexibele inzet op basis van uw behoeften." },
  { q: "Wat kost een gratis kennismakingsgesprek?", a: "Het 15-minuten discovery call is volledig gratis en vrijblijvend. Boek eenvoudig via onze contactpagina." },
];

const packages = [
  { name: "Starter", layers: "B + R + I", price: "€5.000", target: "Kleine KMO" },
  { name: "Growth Accelerator", layers: "B + R + I + D + G", price: "€12.000", target: "Groeiend bedrijf" },
  { name: "Full Bridge", layers: "Alle 6 lagen", price: "Vanaf €25.000", target: "Scaling organisatie" },
  { name: "Retainer", layers: "Maandelijkse ondersteuning", price: "€2.500/maand", target: "Langetermijn partner" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Diensten</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Strategische diensten via de BRIDGE Method™
          </h1>
          <p className="text-muted-foreground text-lg font-sans leading-relaxed">
            Van strategie tot partnerships — elke BRIDGE-laag biedt een concrete dienst
            gericht op duurzame groei voor uw organisatie.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl space-y-8">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <span className="text-3xl font-serif font-bold text-secondary">{s.letter}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-xl font-serif font-bold text-foreground">{s.title}</h2>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full font-sans">{s.layer}</span>
                    </div>
                    <p className="text-muted-foreground font-sans mb-4 leading-relaxed">{s.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-2">Deliverables</h4>
                        <ul className="space-y-1">
                          {s.deliverables.map((d, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                              <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-1">Investering</h4>
                          <p className="text-lg font-serif font-bold text-secondary">{s.price}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider font-sans mb-1">Doorlooptijd</h4>
                          <p className="text-sm text-muted-foreground font-sans">{s.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Pakketten</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
              Kies uw BRIDGE-pakket
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((p, i) => (
              <div key={i} className={`bg-card rounded-xl p-6 border text-center ${i === 2 ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'}`}>
                {i === 2 && <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold font-sans">Populair</span>}
                <h3 className="font-serif font-bold text-foreground text-lg mt-1 mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground font-sans mb-3">{p.layers}</p>
                <p className="text-2xl font-serif font-bold text-secondary mb-1">{p.price}</p>
                <p className="text-xs text-muted-foreground font-sans mb-4">{p.target}</p>
                <Link to="/contact">
                  <Button variant={i === 2 ? "navy" : "outline"} size="sm" className="w-full">
                    Offerte Aanvragen
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Veelgestelde Vragen</span>
            <h2 className="text-3xl font-serif font-bold text-foreground mt-3">FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="font-sans font-medium text-foreground text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
