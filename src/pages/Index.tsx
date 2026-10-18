import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection, { HeroCTABlock } from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";


import { ValueProp, WaaromRelanova, ZoCrerenWijWaarde, ManierenOmSamenTeWerken, CasesResultatenHome } from "@/components/HomeIntroSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Monia Ben Tahar, strategisch advies en partnerships"
        description="Strategisch advies, partnerships en sponsoring. Relanova verbindt strategie, mensen en uitvoering zodat bedrijven groeien."
        path="/"
      />
      <HeroSection />
      <TestimonialsSection />
      <WaaromRelanova />
      <ZoCrerenWijWaarde />
      <ValueProp />
      <ManierenOmSamenTeWerken compact />
      <HeroCTABlock />
      <CasesResultatenHome />
    </Layout>
  );
};

export default Index;

