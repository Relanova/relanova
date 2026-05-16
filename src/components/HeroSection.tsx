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
            <p className="text-lg md:text-xl text-primary-foreground/90 font-sans max-w-xl">
              Voor KMO's en leiders die strategie willen omzetten in resultaat — zonder ruis, zonder quick fixes.
            </p>
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
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-lg">🌉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">BRIDGE-methode</p>
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

export const HeroServicesBlock = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-primary-foreground">
          <div className="text-primary-foreground/80 leading-relaxed font-sans space-y-4">
            <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground not-italic">Van strategie naar resultaat…</p>
            <p>
              Ik help organisaties groeien door de juiste koers te bepalen én deze strategisch én operationeel uit te voeren — als strategisch partner.
              Met 15+ jaar ervaring bij o.a. Nationale Loterij, BASE, Telenet en Nestlé.
            </p>
            <p className="font-semibold text-primary-foreground">Wat ik voor je kan betekenen?</p>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Strategie & Positionering</h3>
              <p>
                Waar sta je nu en waar wil je naartoe? Samen ontwikkelen we een heldere strategie en een
                onderscheidende positie in de markt. Zodat je doelgroep jou kiest, niet je concurrent.
              </p>
              <p className="italic text-primary-foreground/60 text-sm mt-1">
                → Resultaat: Een strategie die leeft in je team en keuzes die echt bijdragen aan groei.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Partnerships, Sponsoring & Business Development</h3>
              <p>
                Groei versnellen doe je niet alleen. Ik help je bij het vinden en realiseren van strategische
                partnerships, sponsorships en nieuwe business opportunities die echt bijdragen aan jouw doelen.
              </p>
              <p className="italic text-primary-foreground/60 text-sm mt-1">
                → Resultaat: Samenwerkingen die bijdragen aan omzet, merkwaarde of impact — niet alleen 'leuke deals'. Ik werk met een select netwerk van specialisten om de beste oplossing te leveren — geen eiland, wel het juiste team rond jouw vraag.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Marketing & Team Versterking</h3>
              <p>
                Een goed plan is niets zonder uitvoering. Of je nu tijdelijke versterking nodig hebt, marketing
                expertise zoekt of je team wilt versterken: ik zorg voor de kennis en capaciteit om je plannen
                tot leven te brengen.
              </p>
              <p className="italic text-primary-foreground/60 text-sm mt-1">
                → Resultaat: Plannen die worden uitgevoerd, met de juiste capaciteit op het juiste moment.
              </p>
            </div>
            <p className="italic text-primary-foreground/70 text-sm border-l-2 border-secondary/60 pl-4">
              Ook inzetbaar als interim strategisch leiderschap: tijdelijke senior expertise voor marketing,
              communicatie en partnerships, zonder de kosten van een fulltime directie.
            </p>
            <p className="text-primary-foreground font-sans pt-2">
              Beschikbaar strategisch en/of uitvoerend. Elke dienst is apart inzetbaar, naargelang jouw behoefte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroCTABlock = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-primary-foreground">
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
            {["15+ jaar ervaring", "100+ bedrijven geholpen", "BRIDGE-methode"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-secondary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
