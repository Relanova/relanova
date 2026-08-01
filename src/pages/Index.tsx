import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection, { HeroServicesBlock, HeroCTABlock } from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { HerkenJeDit, WieHelpIk, ValueProp, SeniorExpertise, WaaromRelanova, ZoCrerenWijWaarde, ManierenOmSamenTeWerken, CasesResultatenHome } from "@/components/HomeIntroSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Human Touch in a Connected World"
        description="Strategisch advies, positionering en partnerships via de BRIDGE-methode. Monia Ben Tahar helpt bedrijven duurzaam groeien."
        path="/"
      />
      <HeroSection />
      <HerkenJeDit />
      <WieHelpIk />
      <WaaromRelanova />
      <ZoCrerenWijWaarde />
      <ValueProp />
      <HeroServicesBlock />
      <ManierenOmSamenTeWerken />
      <HeroCTABlock />
      <StatsSection />
      <SeniorExpertise />
      <BridgeServicesPreview />
      <TestimonialsSection />
      <CasesResultatenHome />
      <CTASection
        title="Klaar om samen te groeien?"
        description="De eerste stap naar helderheid, richting en groei. Boek een gratis strategiegesprek - geen verkooppraatje, wel helder inzicht."
        buttonLabel="Boek een strategiesessie"
      />
    </Layout>
  );
};

export default Index;
