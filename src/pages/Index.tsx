import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import HerkenJeDit from "@/components/HerkenJeDit";
import WieHelpIk from "@/components/WieHelpIk";
import ValueProp from "@/components/ValueProp";
import ServicesSection from "@/components/ServicesSection";
import SeniorExpertise from "@/components/SeniorExpertise";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Human Touch in a Connected World"
        description="Strategisch advies, positionering en partnerships via de BRIDGE-methode. Monia Ben Tahar helpt bedrijven duurzaam groeien."
        path="/"
      />
      <HeroSection />
      <StatsSection />
      <HerkenJeDit />
      <WieHelpIk />
      <ValueProp />
      <ServicesSection />
      <SeniorExpertise />
      <BridgeServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
