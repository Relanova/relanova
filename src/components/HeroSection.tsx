import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroBg from "@/assets/hero-bg-pattern.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background - Relanova huisstijl gradient */}
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
          {/* Text */}
          <div className="text-primary-foreground">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8FC3CC] font-semibold font-sans mb-6">
              Relanova - Strategic Advisor & Growth Connector
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.15] mb-6">
              Wij organiseren strategische groei.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-sans max-w-xl mb-6">
              Ik verbind strategie, mensen en opportuniteiten zodat er groei ontstaat.
            </p>
            <p className="text-sm md:text-base text-[#8FC3CC] font-sans uppercase tracking-[0.15em] mb-10">
              Strategie. Relaties. Resultaat.
            </p>

            <Link to="/contact">
              <Button variant="hero" size="xl" className="gap-2">
                Boek een strategiesessie <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl rotate-3" />
              <img
                src={heroPortrait}
                alt="Monia Ben Tahar - strategisch adviseur en oprichter van Relanova"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                width={768}
                height={960}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
