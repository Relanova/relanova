import heroBg from "@/assets/hero-bg-pattern.jpg";
import relanovaLogoWhite from "@/assets/relanova-logo-white.png.asset.json";

const BrandOutro = () => {
  return (
    <section className="bg-background pt-2 pb-5 md:pt-3 md:pb-6">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-[34rem] mx-auto"
          style={{ backgroundColor: "#245163" }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="relative flex items-center justify-between gap-4 px-4 py-4 md:px-7 md:py-5">
            <div className="text-left">
              <p className="font-sans text-white/70 text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase mb-1.5">
                Relanova
              </p>
              <h2 className="font-sans font-bold text-white text-base md:text-lg mb-1">
                Strategy. Relationships. Results.
              </h2>
              <p className="font-sans text-white/70 text-[11px] md:text-xs">
                Where strategy meets relationships and execution.
              </p>
            </div>
            <img
              src={relanovaLogoWhite.url}
              alt="Relanova"
              className="h-10 md:h-14 w-auto shrink-0 opacity-90"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOutro;
