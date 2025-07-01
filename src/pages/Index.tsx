
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SocialProofSection from "@/components/SocialProofSection";
import EcosystemSection from "@/components/EcosystemSection";
import OfferSection from "@/components/OfferSection";
import BonusSection from "@/components/BonusSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-nix-dark text-white font-poppins">
      {/* All sections */}
      <HeroSection />
      <PainSection />
      <SocialProofSection />
      <EcosystemSection />
      <OfferSection />
      <BonusSection />
      <AboutSection />
      <PricingSection />
      <GuaranteeSection />
      
      {/* Floating elements */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
