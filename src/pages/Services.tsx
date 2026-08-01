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

      <ManierenOmSamenTeWerken />
    </Layout>
  );
};

export default Services;
