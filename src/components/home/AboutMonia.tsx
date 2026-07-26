import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import monia from "@/assets/monia-author.jpg";

const AboutMonia = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="mx-auto md:mx-0">
            <img
              src={monia}
              alt="Monia Ben Tahar - Strategic Advisor"
              className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-secondary/20 shadow-md"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">
              Over Monia
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
              Vertrouwd adviseur. Boardroom-ervaring. Partnership-specialist.
            </h2>
            <p className="text-foreground font-sans leading-relaxed mb-4">
              Monia Ben Tahar - strategisch adviseur, bruggenbouwer en verbinder van groei.
              Met 15+ jaar ervaring bij o.a. Nationale Loterij, BASE, Telenet en Nestle
              vertaalt ze complexe groeivragen naar heldere keuzes en concrete uitvoering.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed italic mb-6">
              Human Touch in a Connected World - want technologie kan analyseren, maar alleen
              mensen kunnen echt verbinden.
            </p>
            <Link to="/about">
              <Button variant="navy">Lees het volledige verhaal</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMonia;
