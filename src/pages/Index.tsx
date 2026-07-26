import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import BridgeServicesPreview from "@/components/BridgeServicesPreview";
import {
  TrustedBy,
  WaaromRelanova,
  ZoCreerenWijWaarde,
  BridgeBand,
  ManierenSamenwerken,
  CasesResultaten,
  OverMijHome,
  BoekStrategieSessie,
} from "@/components/HomeSections";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Relanova | Strategie. Relaties. Resultaat."
        description="Wij organiseren strategische groei. Relanova verbindt strategie, mensen en opportuniteiten zodat er groei ontstaat."
        path="/"
      />
      <HeroSection />
      <TrustedBy />
      <WaaromRelanova />
      <ZoCreerenWijWaarde />
      <BridgeBand />
      <ManierenSamenwerken />
      <CasesResultaten />
      <OverMijHome />
      <BoekStrategieSessie />
      {/* Full BRIDGE-methode - supporting content, deep-linkable */}
      <BridgeServicesPreview />
    </Layout>
  );
};

export default Index;
