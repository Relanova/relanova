import { CheckCircle2 } from "lucide-react";

const items = [
  "Je marketing voelt versnipperd",
  "Je verhaal is niet scherp genoeg",
  "Je doet acties, maar mist richting",
  "Partnerships leveren te weinig op",
  "Je team heeft ideeën, maar geen plan",
];

const HerkenJeDit = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
          Herken je dit?
        </h2>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg font-sans text-foreground">
              <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HerkenJeDit;
