
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open('https://nixdigital.com.br/contato', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-nix-dark flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nix-dark via-nix-gray to-nix-dark" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 240, 166, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-nix-green/10 border border-nix-green/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-nix-green rounded-full animate-pulse" />
            <span className="text-nix-green font-medium text-sm">
              +200 operações estruturadas no Brasil
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-outfit">
            A estrutura que transforma sua{" "}
            <span className="text-nix-green">advocacia</span> em uma{" "}
            <span className="bg-gradient-to-r from-nix-green to-green-400 bg-clip-text text-transparent">
              máquina previsível
            </span>{" "}
            de aquisição de clientes
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-poppins">
            Descubra como advogados estão captando leads qualificados todos os dias com 
            uma operação digital <strong className="text-nix-green">100% estruturada, ética</strong> e pronta para escalar.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="nix" 
              size="xl" 
              onClick={handleCTAClick}
              className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 h-auto"
            >
              SIM! QUERO UMA ESTRUTURA COMPLETA PARA MINHA ADVOCACIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-nix-green rounded-full" />
              <span>100% Ético e dentro das normas da OAB</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-nix-green rounded-full" />
              <span>Sorocaba-SP • Atende todo o Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-nix-green rounded-full" />
              <span>Resultados reais e mensuráveis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-nix-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-nix-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
