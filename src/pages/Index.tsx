import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import {
  VertrouwdDoorCEOs,
  WaaromRelanova,
  ZoCreerenWaarde,
  ManierenSamenwerken,
  CasesResultaten,
  OverMijPreview,
  BoekStrategieSessie,
  BridgeBand,
} from "@/components/HomeSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Strategie. Relaties. Resultaat."
        description="Relanova organiseert strategische groei. Ik verbind strategie, mensen en opportuniteiten zodat er groei ontstaat."
        path="/"
      />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Vertrouwd door CEO's */}
      <VertrouwdDoorCEOs />
      {/* 3. Waarom bedrijven Relanova bellen */}
      <WaaromRelanova />
      {/* 4. Zo creëren wij waarde */}
      <ZoCreerenWaarde />
      {/* BRIDGE als ondersteunende band (Strategie → BRIDGE → Resultaat) */}
      <BridgeBand />
      <BridgeServicesPreview />
      {/* 5. Manieren om samen te werken */}
      <ManierenSamenwerken />
      {/* 6. Cases & resultaten */}
      <CasesResultaten />
      {/* 7. Over Mij */}
      <OverMijPreview />
      {/* 8. Boek een strategiesessie */}
      <BoekStrategieSessie />
    </Layout>
  );
};

export default Index;
