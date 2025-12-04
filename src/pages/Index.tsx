import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
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
