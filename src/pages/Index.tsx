import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection, { HeroServicesBlock, HeroCTABlock } from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { HerkenJeDit, WieHelpIk, ValueProp, SeniorExpertise } from "@/components/HomeIntroSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Human Touch in a Connected World"
        description="Strategisch advies, positionering en partnerships via de BRIDGE-methode. Monia Ben Tahar helpt bedrijven duurzaam groeien."
        path="/"
      />
      <HeroSection />
      <div className="bg-background py-6 text-center">
        <a
          href="#bridge-methode"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("bridge-methode")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block text-sm text-muted-foreground hover:text-primary font-sans underline-offset-4 hover:underline transition-colors"
        >
          Ontdek de volledige methode ↓
        </a>
      </div>
      <HerkenJeDit />
      <WieHelpIk />
      <ValueProp />
      <HeroServicesBlock />
      <HeroCTABlock />
      <StatsSection />
      <SeniorExpertise />
      <BridgeServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
