
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://nixdigital.com.br/contato', '_blank');
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  if (!isVisible || isMinimized) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-up">
      <div className="bg-nix-dark border-2 border-nix-green rounded-lg p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-nix-green rounded-full animate-pulse" />
            <span className="text-white font-semibold text-sm">
              Estrutura Completa
            </span>
          </div>
          <button 
            onClick={handleMinimize}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <Button 
          variant="nix" 
          size="sm" 
          onClick={handleCTAClick}
          className="w-full text-xs"
        >
          QUERO MINHA ESTRUTURA AGORA
          <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
        
        <p className="text-gray-400 text-xs text-center mt-2">
          Fale com nosso especialista
        </p>
      </div>
    </div>
  );
};

export default FloatingCTA;
