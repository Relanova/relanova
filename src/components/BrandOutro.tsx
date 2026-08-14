import heroBg from "@/assets/hero-bg-pattern.jpg";
import relanovaIconWhite from "@/assets/relanova-icon-white.png.asset.json";

const BrandOutro = () => {
  return (
    <section className="bg-background pt-2 pb-5 md:pt-3 md:pb-6">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-[30rem] mx-auto"
          style={{ backgroundColor: "#245163" }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="relative flex items-center justify-between gap-3.5 px-3.5 py-3 md:px-6 md:py-4">
            <div className="text-left">
              <p className="font-sans text-white/70 text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase mb-1.5">
                Relanova
              </p>
              <h2 className="font-sans font-bold text-white text-sm md:text-base mb-1">
                Strategy. Relationships. Results.
              </h2>
              <p className="font-sans text-white/70 text-[10px] md:text-[11px]">
                Where strategy meets relationships and execution.
              </p>
            </div>
            <img
              src={relanovaIconWhite.url}
              alt="Relanova"
              className="w-9 h-9 md:w-12 md:h-12 shrink-0 opacity-90"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOutro;
