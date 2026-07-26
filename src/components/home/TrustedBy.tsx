const TrustedBy = () => {
  const placeholders = ["[klantlogo]", "[klantlogo]", "[klantlogo]", "[klantlogo]", "[klantlogo]"];
  return (
    <section className="py-14 md:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground font-sans font-semibold mb-8">
          Bekende organisaties en leiders vertrouwen op Relanova
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {placeholders.map((label, i) => (
            <div
              key={i}
              className="h-14 rounded-md border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground/60 font-sans"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
