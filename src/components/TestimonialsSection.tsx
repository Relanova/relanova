import { Quote } from "lucide-react";

const placeholders = [
  { name: "[Klantnaam]", role: "[Functie, Bedrijf]" },
  { name: "[Klantnaam]", role: "[Functie, Bedrijf]" },
  { name: "[Klantnaam]", role: "[Functie, Bedrijf]" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Social proof</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Vertrouwd door leiders en organisaties
          </h2>
          <p className="text-muted-foreground font-sans">
            Referenties en klantquotes worden hier toegevoegd zodra ze beschikbaar zijn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {placeholders.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-dashed border-border shadow-sm">
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 font-sans text-sm italic">
                [testimonial]
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm font-sans">{t.name}</p>
                <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-16 rounded-lg border border-dashed border-border bg-card flex items-center justify-center text-xs text-muted-foreground font-sans"
            >
              [klantlogo]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
