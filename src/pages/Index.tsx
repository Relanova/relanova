import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import WhyCompanies from "@/components/home/WhyCompanies";
import ValueCreation from "@/components/home/ValueCreation";
import BridgeBand from "@/components/home/BridgeBand";
import WaysToWork from "@/components/home/WaysToWork";
import CasesResults from "@/components/home/CasesResults";
import AboutMonia from "@/components/home/AboutMonia";
import CTASection from "@/components/CTASection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Strategie. Relaties. Resultaat."
        description="Wij organiseren strategische groei. Relanova verbindt strategie, mensen en opportuniteiten zodat er groei ontstaat."
        path="/"
      />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Vertrouwd door CEO's */}
      <TrustedBy />
      {/* 3. Waarom bedrijven Relanova bellen */}
      <WhyCompanies />
      {/* 4. Zo creeren wij waarde */}
      <ValueCreation />
      {/* BRIDGE als ondersteunend raamwerk */}
      <BridgeBand />
      {/* 5. Manieren om samen te werken */}
      <WaysToWork />
      {/* 6. Cases & resultaten */}
      <CasesResults />
      {/* 7. Over Monia */}
      <AboutMonia />
      {/* Volledige BRIDGE-methode (ondersteunend, bestaande tekst behouden) */}
      <BridgeServicesPreview />
      {/* 8. Boek een strategiesessie */}
      <CTASection />
    </Layout>
  );
};

export default Index;
