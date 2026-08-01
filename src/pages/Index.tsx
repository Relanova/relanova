import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection, { HeroCTABlock } from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

import { ValueProp, WaaromRelanova, ZoCrerenWijWaarde, ManierenOmSamenTeWerken, CasesResultatenHome } from "@/components/HomeIntroSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Human Touch in a Connected World"
        description="Strategisch advies, positionering en partnerships via de BRIDGE-methode. Monia Ben Tahar helpt bedrijven duurzaam groeien."
        path="/"
      />
      <HeroSection />
      <TestimonialsSection />
      <WaaromRelanova />
      <ZoCrerenWijWaarde />
      <ValueProp />
      <ManierenOmSamenTeWerken />
      <HeroCTABlock />
      <CasesResultatenHome />
      <CTASection />
    </Layout>
  );
};

export default Index;

