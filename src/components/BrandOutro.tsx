import heroBg from "@/assets/hero-bg-pattern.jpg";
import relanovaIcon from "@/assets/relanova-icon.png.asset.json";

const BrandOutro = () => {
  return (
    <section className="bg-background py-3 md:py-4">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl mx-auto w-full"
          style={{ backgroundColor: "#245163" }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="relative flex items-center justify-between gap-6 px-6 py-6 md:px-10 md:py-8">
            <div className="text-left">
              <p className="font-sans text-white/70 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                Relanova
              </p>
              <h2 className="font-sans font-bold text-white text-xl md:text-2xl mb-1.5">
                Strategy. Relationships. Results.
              </h2>
              <p className="font-sans text-white/70 text-xs md:text-sm">
                Where strategy meets relationships and execution.
              </p>
            </div>
            <img
              src={relanovaIcon.url}
              alt="Relanova"
              className="w-14 h-14 md:w-20 md:h-20 shrink-0 brightness-0 invert opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOutro;
