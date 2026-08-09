import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ManierenOmSamenTeWerken } from "@/components/HomeIntroSections";
import { HeroCTABlock } from "@/components/HeroSection";

const Services = () => {
  return (
    <Layout>
      <SEO
        title="Diensten & Pakketten - BRIDGE-methode | Relanova"
        description="Strategie, positionering, partnerships en groei. Ontdek de BRIDGE-diensten en pakketten van Relanova voor KMO's en scale-ups."
        path="/services"
      />

      <ManierenOmSamenTeWerken />
      <HeroCTABlock hideSecondary />
    </Layout>
  );
};

export default Services;
