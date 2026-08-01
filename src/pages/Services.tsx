import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ManierenOmSamenTeWerken } from "@/components/HomeIntroSections";

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Diensten & Pakketten - BRIDGE-methode | Relanova"
        description="Strategie, positionering, partnerships en groei. Ontdek de BRIDGE-diensten en pakketten van Relanova voor KMO's en scale-ups."
        path="/services"
      />
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest font-sans">Diensten</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Strategische diensten via de BRIDGE-methode
          </h1>
          <p className="text-muted-foreground text-lg font-sans leading-relaxed">
            Van strategie tot partnerships - elke BRIDGE-laag biedt een concrete dienst
            gericht op duurzame groei voor uw organisatie.
          </p>
        </div>
      </section>

      <ManierenOmSamenTeWerken />
    </Layout>
  );
};

export default Services;
