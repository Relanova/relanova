import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg-pattern.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6 text-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Relanova · Human Touch in a Connected World
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.15] mb-6">
              Ik verbind strategie, positionering en partnerships zodat{" "}
              <span className="text-secondary">groei makkelijker wordt.</span>
            </h1>

            <div className="text-primary-foreground/80 leading-relaxed mb-8 max-w-xl font-sans space-y-4">
              <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground not-italic">Van strategie naar resultaat…</p>
              <p>
                Ik help organisaties groeien door de juiste koers te bepalen en deze succesvol uit te voeren.
                Met een scherpe strategie, sterke partnerships en effectieve marketing zorg ik voor tastbare resultaten.
              </p>
              <p className="font-semibold text-primary-foreground">Wat ik voor je kan betekenen?</p>
              <div>
                <h3 className="font-serif font-semibold text-primary-foreground text-lg">Strategie & Positionering</h3>
                <p>
                  Waar sta je nu en waar wil je naartoe? Samen ontwikkelen we een heldere strategie en een
                  onderscheidende positie in de markt. Zodat je doelgroep jou kiest, niet je concurrent.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-primary-foreground text-lg">Partnerships, Sponsoring & Business Development</h3>
                <p>
                  Groei versnellen doe je niet alleen. Ik help je bij het vinden en realiseren van strategische
                  partnerships, sponsorships en nieuwe business opportunities die echt bijdragen aan jouw doelen.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-primary-foreground text-lg">Marketing & Team Versterking</h3>
                <p>
                  Een goed plan is niets zonder uitvoering. Of je nu tijdelijke versterking nodig hebt, marketing
                  expertise zoekt of je team wilt versterken: ik zorg voor de kennis en capaciteit om je plannen
                  tot leven te brengen.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-primary-foreground text-lg">Bridge-methode</h3>
                <p>
                  Om deze groei te stimuleren, werk ik met de Bridge-methode. De zes lagen hieronder zijn ons
                  stappenplan om je strategie te laten landen in de dagelijkse werking.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2">
                  Gratis Gesprek Inplannen
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  Bekijk Diensten
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
              {["10+ jaar ervaring", "100+ bedrijven geholpen", "BRIDGE Method™"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl rotate-3" />
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar — Ecosystem Architect en oprichtster van Relanova"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                width={768}
                height={960}
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-lg">🌉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">BRIDGE Method™</p>
                    <p className="text-xs text-muted-foreground">6-Layer Strategic Framework</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
