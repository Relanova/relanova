import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* subtiel ruit-motief */}
      <div className="absolute inset-0 bg-diamond-grid opacity-40" aria-hidden="true" />
      {/* decoratieve dunne lijnen (geometrie, geen bogen) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 w-px h-32 bg-white/15" />
        <div className="absolute bottom-0 right-24 w-24 h-px bg-white/15" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-3 border border-white/25 px-4 py-1.5 mb-10 text-[11px] uppercase" style={{ letterSpacing: "0.24em" }}>
              <span className="w-1.5 h-1.5 bg-secondary" />
              Human touch in a connected world
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-8 tracking-tight">
              Ik verbind strategie, positionering en partnerships zodat{" "}
              <span className="text-white/95 border-b-2 border-secondary pb-1">groei makkelijker wordt.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-xl mb-6 leading-relaxed font-light">
              Voor KMO's en leiders die strategie willen omzetten in resultaat - door teams, partners en uitvoering te verbinden.
            </p>
            <p className="text-sm md:text-base text-white/65 max-w-xl mb-10 italic font-light">
              Relanova staat voor een vernieuwde manier van denken waarin echte waarde ontstaat door relaties, verbinding en vertrouwen.
            </p>
          </div>

          {/* Portrait — strak vierkant kader, geen ronde vormen */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* dun geometrisch kader */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/40" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-white/40" aria-hidden="true" />
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar - Ecosystem Architect en oprichtster van Relanova"
                className="relative w-full max-w-md object-cover aspect-[3/4] shadow-2xl"
                width={768}
                height={960}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 bg-white px-4 py-2 text-[11px] md:text-xs text-primary whitespace-nowrap shadow-lg uppercase" style={{ letterSpacing: "0.18em" }}>
                BRIDGE-methode <span className="text-primary/50 normal-case tracking-normal">/ 6-Layer Strategic Framework</span>
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
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-diamond-grid opacity-30" aria-hidden="true" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-primary-foreground reveal">
          <div className="text-white/85 leading-relaxed space-y-5">
            <p className="text-2xl md:text-3xl font-bold text-white not-italic tracking-tight">Van strategie naar resultaat…</p>
            <p>
              Ik help organisaties groeien door de juiste koers te bepalen en deze strategisch en operationeel uit te voeren - als strategisch partner.
              Met 15+ jaar ervaring bij o.a. Nationale Loterij, BASE, Telenet en Nestle.
            </p>
            <p className="font-semibold text-white">Wat ik voor je kan betekenen?</p>
            <div>
              <h3 className="font-semibold text-white text-lg">Strategie & Positionering</h3>
              <p>
                Waar sta je nu en waar wil je naartoe? Samen ontwikkelen we een heldere strategie en een
                onderscheidende positie in de markt. Zodat je doelgroep jou kiest, niet je concurrent.
              </p>
              <p className="italic text-white/60 text-sm mt-1">
                → Resultaat: Een strategie die leeft in je team en keuzes die echt bijdragen aan groei.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Partnerships, Sponsoring & Business Development</h3>
              <p>
                Groei versnellen doe je niet alleen. Ik help je bij het vinden en realiseren van strategische
                partnerships, sponsorships en nieuwe business opportunities die echt bijdragen aan jouw doelen.
              </p>
              <p className="italic text-white/60 text-sm mt-1">
                → Resultaat: Samenwerkingen die bijdragen aan omzet, merkwaarde of impact - niet alleen 'leuke deals'. Ik werk met een select netwerk van specialisten om de beste oplossing te leveren - geen eiland, wel het juiste team rond jouw vraag.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Marketing & Team Versterking</h3>
              <p>
                Een goed plan is niets zonder uitvoering. Of je nu tijdelijke versterking nodig hebt, marketing
                expertise zoekt of je team wilt versterken: ik zorg voor de kennis en capaciteit om je plannen
                tot leven te brengen.
              </p>
              <p className="italic text-white/60 text-sm mt-1">
                → Resultaat: Plannen die worden uitgevoerd, met de juiste capaciteit op het juiste moment.
              </p>
            </div>
            <p className="italic text-white/70 text-sm border-l-2 border-secondary pl-4">
              Ook inzetbaar als interim strategisch leiderschap: tijdelijke senior expertise voor marketing,
              communicatie en partnerships, zonder de kosten van een fulltime directie.
            </p>
            <p className="text-white pt-2">
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
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-diamond-grid opacity-30" aria-hidden="true" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-primary-foreground">
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Boek je gratis strategie-scan
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Bekijk Diensten
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mb-10 max-w-xl">
            Je krijgt direct 1-2 heldere inzichten over jouw groeivraag - ook als we niet samenwerken.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
            {["20+ jaar ervaring", "BRIDGE-methode", "Human Touch"].map((item) => (
              <span key={item} className="flex items-center gap-2">
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
