import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <BridgeServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
