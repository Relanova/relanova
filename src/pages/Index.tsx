import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import {
  WhyCompaniesCall,
  HowRelanovaCreatesValue,
  WhatClientsGain,
  WaysToWorkTogether,
  AboutMoniaTeaser,
} from "@/components/HomeIntroSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Strategic Advisor & Growth Connector"
        description="Strategy. Relationships. Results. Relanova organiseert strategische groei door strategie, relaties en executie te verbinden."
        path="/"
      />
      <HeroSection />
      <WhyCompaniesCall />
      <HowRelanovaCreatesValue />
      <WhatClientsGain />
      <WaysToWorkTogether />
      <BridgeServicesPreview />
      <AboutMoniaTeaser />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
