import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, MessageCircle, Handshake, Users, UserPlus, Sparkles } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "CEO-strategiesessie",
    text: "Eén diepgaand gesprek dat richting en helderheid brengt in je grootste strategische vragen.",
  },
  {
    icon: MessageCircle,
    title: "Strategisch adviseur",
    text: "Doorlopende sparring op directieniveau - een klankbord dat meedenkt en meebeweegt.",
  },
  {
    icon: Handshake,
    title: "Partnership-strategie",
    text: "De juiste samenwerkingen ontwerpen en activeren, van eerste gesprek tot getekende deal.",
  },
  {
    icon: Users,
    title: "Executive facilitatie",
    text: "Sessies die complexe teamvragen ontrafelen en tot gedragen besluiten leiden.",
  },
  {
    icon: UserPlus,
    title: "Executive matchmaking",
    text: "Gerichte introducties bij leiders en organisaties die jouw groei versnellen.",
  },
  {
    icon: Sparkles,
    title: "Relanova Circle",
    text: "Een besloten kring van leiders die van elkaar leren en samen groeien. Binnenkort.",
    soon: true,
  },
];

const WaysToWork = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
            Manieren om samen te werken
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Kies wat past bij jouw ambitie en fase.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-secondary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif font-semibold text-lg text-foreground">{s.title}</h3>
                    {s.soon && (
                      <span className="text-[10px] uppercase tracking-widest bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-sans font-semibold">
                        Binnenkort
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="navy" size="lg">
              Bekijk alle diensten
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
