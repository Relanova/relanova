import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    problem: "Groeiplan zonder richting",
    solution: "Strategische heroriëntatie en scherpe positionering met het directieteam.",
    result: "Heldere koers en een prioriteitenlijst waar het team écht achter staat.",
  },
  {
    problem: "Partnerships die niet renderen",
    solution: "Partnership-strategie met selectie, aanpak en governance.",
    result: "Samenwerkingen die bijdragen aan omzet, merkwaarde en impact.",
  },
  {
    problem: "Marketing en strategie los van elkaar",
    solution: "Interim strategisch leiderschap dat plan en uitvoering verbindt.",
    result: "Plannen die worden uitgevoerd, met ritme en meetbare vooruitgang.",
  },
];

const stats = [
  { value: "25+", label: "jaar ervaring" },
  { value: "[aantal]", label: "strategische projecten" },
  { value: "[aantal]", label: "landen" },
];

const CasesResults = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Cases & resultaten
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Echte verhalen. Meetbare impact.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cases.map((c, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <p className="text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-2">
                Probleem
              </p>
              <p className="text-foreground font-sans mb-4">{c.problem}</p>
              <p className="text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-2">
                Oplossing
              </p>
              <p className="text-muted-foreground font-sans text-sm mb-4">{c.solution}</p>
              <p className="text-xs uppercase tracking-widest text-secondary font-sans font-semibold mb-2">
                Resultaat
              </p>
              <p className="text-foreground font-sans text-sm font-semibold">{c.result}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-muted/40 rounded-xl p-6 border border-border">
              <p className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground font-sans">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-6 text-center mb-8">
          <p className="text-muted-foreground italic font-sans text-sm">
            [testimonial] - Ruimte voor een echte klantquote.
          </p>
        </div>

        <div className="text-center">
          <Link to="/cases">
            <Button variant="outline" size="lg" className="gap-2">
              Bekijk alle cases <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasesResults;
