import { Compass, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Strategie",
    text: "Een duidelijke koers en scherpe keuzes - zodat je weet waar je naartoe wil en waarom.",
  },
  {
    icon: Users,
    title: "Relaties",
    text: "De juiste mensen op de juiste plek en waardevolle connecties die deuren openen.",
  },
  {
    icon: Zap,
    title: "Executie",
    text: "Van plan naar actie, van actie naar resultaat - met ritme, focus en opvolging.",
  },
];

const ValueCreation = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Zo creeren wij waarde
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Onze aanpak. Jouw resultaat.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground font-sans mt-10 max-w-2xl mx-auto">
          Wat je overhoudt: richting, vertrouwen, rust en toegang tot een netwerk dat
          deuren opent die voor anderen gesloten blijven.
        </p>
      </div>
    </section>
  );
};

export default ValueCreation;
