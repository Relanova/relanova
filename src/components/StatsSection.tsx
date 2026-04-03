import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Bedrijven geholpen" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Jaar ervaring" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Klanttevredenheid" },
  { icon: Award, value: 6, suffix: "", label: "BRIDGE lagen" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-hero-gradient py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-secondary" />
              </div>
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/70 text-sm mt-1 font-sans">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
