
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SocialProofSection from "@/components/SocialProofSection";
import EcosystemSection from "@/components/EcosystemSection";
import BonusSection from "@/components/BonusSection";
import AboutSection from "@/components/AboutSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-nix-dark text-white font-poppins">
      <HeroSection />
      <PainSection />
      <SocialProofSection />
      <EcosystemSection />
      <BonusSection />
      <AboutSection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
