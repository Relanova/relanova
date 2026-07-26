import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BridgeBand = () => {
  return (
    <section className="py-10 md:py-12 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="text-2xl">🌉</span>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70 font-sans font-semibold">
                Ons raamwerk
              </p>
              <p className="font-serif font-semibold text-lg">
                Strategie <span className="text-[#8FC3CC]">→</span> BRIDGE <span className="text-[#8FC3CC]">→</span> Resultaat
              </p>
            </div>
          </div>
          <Link
            to="#bridge-methode"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("bridge-methode")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground font-sans"
          >
            Ontdek de BRIDGE-methode <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BridgeBand;
