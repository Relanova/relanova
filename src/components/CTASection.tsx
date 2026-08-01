import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-pattern.jpg";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#245163" }}>
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-sans font-bold text-white text-3xl md:text-4xl mb-4">
            Klaar om samen te groeien?
          </h2>
          <p className="font-sans text-white/80 text-lg mb-8">
            De eerste stap naar helderheid, richting en groei. Boek een gratis strategiegesprek - geen
            verkooppraatje, wel helder inzicht.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="gap-2">
              Boek een strategiesessie <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
