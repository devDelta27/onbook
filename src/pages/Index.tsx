import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DemosSection from "@/components/sections/DemosSection"; // <--- 1. IMPORTAR AQUÍ
import PricingSection from "@/components/sections/PricingSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import CompetitiveSection from "@/components/sections/CompetitiveSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DemosSection /> {/* <--- 2. AGREGAR AQUÍ */}
      <PricingSection />
      <SocialProofSection />
      <CompetitiveSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;