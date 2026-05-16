const items = [
  "KMO's die vastzitten in 'doen' zonder strategie",
  "Scale-ups die partnerships willen schalen",
  "Bedrijven die interim marketing-leiderschap nodig hebben",
];

const WieHelpIk = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 text-center">
          Wie help ik?
        </h2>
        <p className="text-lg font-sans text-foreground mb-4 text-center">Relanova is er voor:</p>
        <ul className="space-y-3 max-w-2xl mx-auto">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg font-sans text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WieHelpIk;
