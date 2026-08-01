import natlot from "@/assets/logos/natlot.jpg.asset.json";
import base from "@/assets/logos/base.jpg.asset.json";
import telenet from "@/assets/logos/telenet.png.asset.json";
import nestle from "@/assets/logos/nestle.png.asset.json";
import vandemoortele from "@/assets/logos/vandemoortele.png.asset.json";
import bnxt from "@/assets/logos/bnxt.png.asset.json";
import herta from "@/assets/logos/herta.png.asset.json";
import delmonte from "@/assets/logos/delmonte.png.asset.json";

const logos = [
  { name: "Nationale Loterij", src: natlot.url },
  { name: "BASE", src: base.url },
  { name: "Telenet", src: telenet.url },
  { name: "Nestlé", src: nestle.url },
  { name: "Vandemoortele", src: vandemoortele.url },
  { name: "Herta", src: herta.url },
  { name: "Del Monte", src: delmonte.url },
  { name: "BNXT League", src: bnxt.url },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            Vertrouwd door merken en organisaties
          </h2>
          <p className="text-muted-foreground font-sans">
            Bekende organisaties en leiders vertrouwen op Relanova.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center max-w-5xl mx-auto">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-[160px] md:w-[176px] h-[100px] md:h-[108px] rounded-xl bg-card shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-5"
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
