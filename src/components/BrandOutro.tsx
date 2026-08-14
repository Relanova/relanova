import heroBg from "@/assets/hero-bg-pattern.jpg";
import relanovaIconWhite from "@/assets/relanova-icon-white.png.asset.json";

const BrandOutro = () => {
  return (
    <section className="bg-background pt-2 pb-4 md:pt-2 md:pb-5">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg w-full max-w-[26rem] mx-auto"
          style={{ backgroundColor: "#245163" }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="relative flex items-center justify-between gap-3 px-3 py-3 md:px-5 md:py-4">
            <div className="text-left">
              <p className="font-sans text-white/70 text-[8px] md:text-[9px] font-semibold tracking-[0.3em] uppercase mb-1">
                Relanova
              </p>
              <h2 className="font-sans font-bold text-white text-sm md:text-base mb-0.5">
                Strategy. Relationships. Results.
              </h2>
              <p className="font-sans text-white/70 text-[10px] md:text-[11px]">
                Where strategy meets relationships and execution.
              </p>
            </div>
            <img
              src={relanovaIconWhite.url}
              alt="Relanova"
              className="w-8 h-8 md:w-11 md:h-11 shrink-0 opacity-90"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOutro;
