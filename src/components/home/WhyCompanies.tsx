import { TrendingUp, Handshake, Users, Network, Rocket } from "lucide-react";

const pillars = [
  { icon: TrendingUp, label: "Groei" },
  { icon: Handshake, label: "Partnerships" },
  { icon: Users, label: "Stakeholder-alignment" },
  { icon: Network, label: "Ecosystemen" },
  { icon: Rocket, label: "Executie" },
];

const WhyCompanies = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Waarom bedrijven Relanova bellen
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Voor groei die blijvend impact maakt.
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Sommige bedrijven zitten vast, missen richting of hebben niet de juiste
            verbindingen om verder te komen. Relanova brengt helderheid en gestructureerd
            advies waar anderen aarzelen - en zet groei in beweging.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="bg-card rounded-xl p-5 border border-border text-center hover:border-secondary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                <p.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm font-serif font-semibold text-foreground">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCompanies;
