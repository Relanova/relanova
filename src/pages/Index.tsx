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
      <section className="py-8 md:py-10 bg-background border-b border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-base md:text-lg font-serif text-foreground italic">
            🌉 De BRIDGE-methode: geen framework, maar een manier om mensen, visie en uitvoering samen te brengen.
          </p>
        </div>
      </section>
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
