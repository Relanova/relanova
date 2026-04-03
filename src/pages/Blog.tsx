import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import CTASection from "@/components/CTASection";

const blogPosts = [
  {
    title: "Waarom ecosysteem-denken de toekomst is van bedrijfsgroei",
    excerpt: "Bedrijven die hun groei bouwen op ecosystemen presteren structureel beter dan bedrijven die alleen op interne kracht vertrouwen.",
    category: "Strategie & Positionering",
    date: "28 maart 2026",
    readTime: "5 min",
    slug: "#",
  },
  {
    title: "De 5 grootste fouten bij strategische positionering",
    excerpt: "Veel bedrijven investeren in marketing zonder eerst hun positionering scherp te stellen. Hier zijn de vijf meest gemaakte fouten.",
    category: "Strategie & Positionering",
    date: "21 maart 2026",
    readTime: "7 min",
    slug: "#",
  },
  {
    title: "Hoe partnerships uw bedrijf sneller laten groeien",
    excerpt: "De juiste partnerships versnellen groei exponentieel. Ontdek de drie types partnerships die elke KMO nodig heeft.",
    category: "Partnerships & Ecosystems",
    date: "14 maart 2026",
    readTime: "6 min",
    slug: "#",
  },
  {
    title: "BRIDGE Method™: een introductie",
    excerpt: "Wat is de BRIDGE-methode en hoe helpt dit framework bedrijven hun strategie en partnerships te verbinden voor duurzame groei?",
    category: "Growth & Activation",
    date: "7 maart 2026",
    readTime: "8 min",
    slug: "#",
  },
  {
    title: "CEO-interviews: het fundament van elke strategie",
    excerpt: "Waarom een diepgaand gesprek met de CEO het allereerste is dat we doen — en waarom het alles verandert.",
    category: "Leadership & CEO Insights",
    date: "28 februari 2026",
    readTime: "4 min",
    slug: "#",
  },
  {
    title: "Marktanalyse: verder kijken dan cijfers",
    excerpt: "Echte marktinzichten komen niet uit rapporten. Ze komen uit gesprekken met de mensen die dagelijks met klanten werken.",
    category: "Market Trends & Analysis",
    date: "21 februari 2026",
    readTime: "5 min",
    slug: "#",
  },
];

const categories = [
  "Alles",
  "Strategie & Positionering",
  "Partnerships & Ecosystems",
  "Growth & Activation",
  "Leadership & CEO Insights",
  "Market Trends & Analysis",
  "Team & Culture",
];

const Blog = () => {
  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Blog & Inzichten</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Strategische inzichten voor groei
          </h1>
          <p className="text-muted-foreground text-lg font-sans">
            Artikelen, analyses en praktische tips over strategie, partnerships en ecosysteem-gedreven groei.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-sans transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-40 bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-secondary/30">MBT</span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold font-sans">{post.category}</span>
                  <h2 className="font-serif font-bold text-foreground mt-2 mb-2 leading-snug group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-3">
              Ontvang strategische inzichten
            </h3>
            <p className="text-primary-foreground/70 font-sans mb-6 max-w-md mx-auto">
              Schrijf je in voor de nieuwsbrief en ontvang wekelijkse tips over strategie, partnerships en groei.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="uw@email.be"
                className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              <Button variant="hero" size="default">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
