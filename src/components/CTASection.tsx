import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-[#8FC3CC] uppercase tracking-widest font-sans">
              Boek een strategiesessie
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-3 mb-4">
              De eerste stap naar helderheid, richting en groei.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="gap-2">
                  Boek nu <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="https://wa.me/32488285886" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="xl">
                  WhatsApp Monia
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
