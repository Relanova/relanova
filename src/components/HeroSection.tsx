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
        <div className="absolute inset-0 bg-hero-gradient" />
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" aria-hidden="true" />
      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-10 md:gap-12 items-start">
          {/* Text Content */}
          <div className="text-primary-foreground md:-mt-4">
            <h1 className="font-sans text-left text-[34px] leading-tight mb-5 text-white" style={{ fontWeight: 700 }}>
              Strategic Advisor &amp; Growth Connector
            </h1>
            <p className="font-sans text-left text-white max-w-xl mb-5 text-[28px] leading-snug" style={{ fontWeight: 700 }}>
              Strategie, relaties en executie verbinden om groei te versnellen.
            </p>
            <p className="font-sans text-left max-w-xl mb-6 text-[22px] text-white/90">
              Strategie. Relaties. Resultaat.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2 whitespace-nowrap text-lg px-8 py-6 h-auto">
                Boek een strategiesessie
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Portrait */}
          <div className="flex justify-center md:justify-end md:-mt-[57px]">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl rotate-3" />
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar - Ecosystem Architect en oprichtster van Relanova"
                className="relative rounded-2xl shadow-2xl w-full max-w-[360px] object-cover aspect-[3/4]"
                width={768}
                height={960}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/80 border border-primary/10 shadow-sm rounded-full px-3 py-1 text-[10px] md:text-xs text-primary/80 font-normal font-sans whitespace-nowrap">
                🌉 BRIDGE-methode <span className="text-primary/50">/ 6-Layer Strategic Framework</span>
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
        <div className="absolute inset-0 bg-hero-gradient" />
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-primary-foreground">
          <div className="text-primary-foreground/80 leading-relaxed font-sans space-y-4">
            <p className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground not-italic">Van strategie naar resultaat…</p>
            <p>
              Ik help organisaties groeien door de juiste koers te bepalen en deze strategisch en operationeel uit te voeren - als strategisch partner.
              Met 15+ jaar ervaring bij o.a. Nationale Loterij, BASE, Telenet en Nestle.
            </p>
            <p className="font-semibold text-primary-foreground">Wat ik voor je kan betekenen?</p>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Strategie & Positionering</h3>
              <p>
                Waar sta je nu en waar wil je naartoe? Samen ontwikkelen we een heldere strategie en een
                onderscheidende positie in de markt. Zodat je doelgroep jou kiest, niet je concurrent.
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1 font-medium">
                → Resultaat: Een strategie die leeft in je team en keuzes die echt bijdragen aan groei.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Partnerships, Sponsoring & Business Development</h3>
              <p>
                Groei versnellen doe je niet alleen. Ik help je bij het vinden en realiseren van strategische
                partnerships, sponsorships en nieuwe business opportunities die echt bijdragen aan jouw doelen.
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1 font-medium">
                → Resultaat: Samenwerkingen die bijdragen aan omzet, merkwaarde of impact - niet alleen 'leuke deals'. Ik werk met een select netwerk van specialisten om de beste oplossing te leveren - geen eiland, wel het juiste team rond jouw vraag.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-primary-foreground text-lg">Marketing & Team Versterking</h3>
              <p>
                Een goed plan is niets zonder uitvoering. Of je nu tijdelijke versterking nodig hebt, marketing
                expertise zoekt of je team wilt versterken: ik zorg voor de kennis en capaciteit om je plannen
                tot leven te brengen.
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1 font-medium">
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

export const HeroCTABlock = ({ hideSecondary = false }: { hideSecondary?: boolean }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient" />
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex items-center justify-center min-h-[9.5rem]">
        <div className="text-primary-foreground w-full flex flex-col items-center text-center gap-5">
          <h2 className="font-sans font-bold text-primary-foreground text-2xl md:text-3xl max-w-2xl">
            Klaar om samen te groeien?
          </h2>
          <p className="font-sans text-primary-foreground/80 max-w-2xl -mt-2">
            De eerste stap naar helderheid en richting. Laten we vrijblijvend kennismaken en ontdekken waar jouw kansen liggen.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2 shadow-lg">
              Plan een vrijblijvend kennismakingsgesprek
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          {!hideSecondary && (
            <p className="font-sans text-sm text-primary-foreground/70">
              Liever eerst verder kijken?{" "}
              <Link to="/services" className="underline underline-offset-4 hover:text-primary-foreground transition-colors">
                Bekijk onze diensten →
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
