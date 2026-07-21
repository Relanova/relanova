import { Award, Layers, Heart } from "lucide-react";

const items = [
  { icon: Award, label: "20+ jaar ervaring" },
  { icon: Layers, label: "BRIDGE-methode" },
  { icon: Heart, label: "Human Touch in a Connected World" },
];

const StatsSection = () => {
  return (
    <section className="bg-hero-gradient py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-primary-foreground font-serif font-semibold text-base md:text-lg leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
