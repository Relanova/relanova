import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg-pattern.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background - huisstijl gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2E636B 0%, #2F5D6A 50%, #304F63 100%)",
          }}
        />
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          aria-hidden="true"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-8 text-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Relanova - Strategic Advisor & Growth Connector
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.15] mb-6">
              Wij organiseren <span className="text-[#8FC3CC]">strategische groei.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-sans max-w-xl mb-4">
              Ik verbind strategie, mensen en opportuniteiten zodat er groei ontstaat.
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest text-[#8FC3CC] font-sans font-semibold mb-10">
              Strategie. Relaties. Resultaat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2">
                  Boek een strategiesessie
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl rotate-3" />
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar - Strategic Advisor en oprichtster van Relanova"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                width={768}
                height={960}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white border border-border shadow-lg rounded-full px-4 py-1.5 text-xs md:text-sm text-primary font-sans whitespace-nowrap">
                🌉 BRIDGE-methode <span className="text-primary/60">/ 6-Layer Strategic Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
