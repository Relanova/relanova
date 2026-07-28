import natlot from "@/assets/logos/natlot.jpg.asset.json";
import base from "@/assets/logos/base.jpg.asset.json";
import telenet from "@/assets/logos/telenet.png.asset.json";
import bnxt from "@/assets/logos/bnxt.png.asset.json";
import herta from "@/assets/logos/herta.png.asset.json";
import delmonte from "@/assets/logos/delmonte.png.asset.json";

const logos = [
  { name: "Nationale Loterij", src: natlot.url },
  { name: "BASE", src: base.url },
  { name: "Telenet", src: telenet.url },
  { name: "Nestlé", src: null },
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
            Vertrouwd door CEO's
          </h2>
          <p className="text-muted-foreground font-sans">
            Bekende organisaties en leiders vertrouwen op Relanova.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {logos.map((logo) =>
            logo.src ? (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="lazy"
              />
            ) : (
              <div
                key={logo.name}
                className="h-12 md:h-14 px-6 flex items-center justify-center border border-dashed border-border rounded-md text-xs text-muted-foreground font-sans"
              >
                [logo] {logo.name}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
