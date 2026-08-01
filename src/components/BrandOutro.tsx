import heroBg from "@/assets/hero-bg-pattern.jpg";

const BrandOutro = () => {
  return (
    <>
      <div aria-hidden="true" className="h-10 md:h-14 w-full bg-background" />
      <section className="relative overflow-hidden" style={{ backgroundColor: "#245163" }}>
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-white/70 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Relanova
            </p>
            <h2 className="font-sans font-bold text-white text-3xl md:text-4xl mb-3">
              Strategy. Relationships. Results.
            </h2>
            <p className="font-sans text-white/70 text-base md:text-lg">
              Where strategy meets relationships and execution.
            </p>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="h-10 md:h-14 w-full bg-background" />
    </>
  );
};

export default BrandOutro;
