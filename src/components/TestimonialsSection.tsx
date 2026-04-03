import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Van den Berg",
    role: "CEO, TechGrow NV",
    text: "Monia heeft ons geholpen onze strategie helder te maken en de juiste partnerships te vinden. Binnen 6 maanden zagen we 40% meer omzet.",
    rating: 5,
  },
  {
    name: "Thomas Janssen",
    role: "Oprichter, GreenScale",
    text: "De BRIDGE-methode gaf ons structuur waar we die misten. Monia's aanpak is uniek — ze denkt in ecosystemen, niet in silo's.",
    rating: 5,
  },
  {
    name: "Lisa De Vries",
    role: "Marketing Director, InnoHub",
    text: "Eindelijk een consultant die niet alleen strategie maakt, maar ook helpt implementeren. Resultaatgericht en menselijk.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Wat Klanten Zeggen</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Vertrouwd door ambitieuze leiders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 font-sans text-sm">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm font-sans">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
