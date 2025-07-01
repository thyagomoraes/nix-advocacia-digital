
import { CheckCircle, ArrowRight, Calendar, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const PricingSection = () => {
  const handleCTAClick = () => {
    window.open('https://nixdigital.com.br/contato', '_blank');
  };

  const deliverables = [
    "Estrutura digital completa (Instagram + Google + Site)",
    "Anúncios com rastreio e dados (Meta + Google Ads)",
    "CRM + Bot + Suporte mensal especializado",
    "Material bônus (Checklist + Templates + Copies)",
    "Implementação e configuração total",
    "Treinamento completo da equipe",
    "Scripts de atendimento profissionais"
  ];

  return (
    <section className="py-20 bg-nix-gray relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Como contratar a{" "}
              <span className="text-nix-green">estrutura completa</span>
            </h2>
            <p className="text-xl text-gray-300">
              Investimento único para transformar sua advocacia em uma máquina de captação
            </p>
          </div>

          {/* Main pricing card */}
          <div className="bg-nix-dark border-2 border-nix-green/30 rounded-2xl p-8 mb-8 relative animate-scale-in">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-nix-green text-black px-6 py-2 rounded-full font-bold text-sm">
                MAIS ESCOLHIDO
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - What you get */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  ✅ Recapitulando sua entrega:
                </h3>
                <div className="space-y-4">
                  {deliverables.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-nix-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Investment */}
              <div className="lg:border-l lg:border-gray-700 lg:pl-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  💰 Investimento:
                </h3>
                
                <div className="space-y-6">
                  {/* Setup fee */}
                  <div className="bg-nix-gray/50 border border-nix-green/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-6 h-6 text-nix-green" />
                      <h4 className="text-white font-semibold">Setup Inicial</h4>
                    </div>
                    <div className="text-3xl font-bold text-nix-green mb-2">
                      R$ 7.500
                    </div>
                    <p className="text-gray-400 text-sm">
                      Estruturação completa, implementação e configuração
                    </p>
                  </div>

                  {/* Monthly fee */}
                  <div className="bg-nix-gray/50 border border-nix-green/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-nix-green" />
                      <h4 className="text-white font-semibold">Mensalidade</h4>
                    </div>
                    <div className="text-3xl font-bold text-nix-green mb-2">
                      R$ 2.500<span className="text-lg text-gray-400">/mês</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Por 6 meses • Suporte + Otimizações + Relatórios
                    </p>
                  </div>

                  {/* Total investment highlight */}
                  <div className="bg-gradient-to-r from-nix-green/10 to-green-400/10 border border-nix-green/30 rounded-lg p-4">
                    <p className="text-center text-white">
                      <span className="text-gray-400">Investimento total: </span>
                      <span className="text-2xl font-bold text-nix-green">R$ 22.500</span>
                    </p>
                    <p className="text-center text-gray-400 text-sm mt-1">
                      Parcelado em 7x (setup + 6 mensalidades)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="nix" 
                size="xl" 
                onClick={handleCTAClick}
                className="w-full sm:w-auto text-base px-12 py-4 h-auto"
              >
                QUERO UMA ESTRUTURA COMPLETA PARA MINHA ADVOCACIA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Clique para falar com nosso especialista agora
              </p>
            </div>
          </div>

          {/* Payment info */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-nix-dark/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-nix-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-nix-green" />
              </div>
              <h4 className="text-white font-semibold mb-2">Implementação Rápida</h4>
              <p className="text-gray-400 text-sm">
                Estrutura completa funcionando em até 15 dias
              </p>
            </div>
            
            <div className="bg-nix-dark/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-nix-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-nix-green" />
              </div>
              <h4 className="text-white font-semibold mb-2">Suporte Completo</h4>
              <p className="text-gray-400 text-sm">
                6 meses de acompanhamento especializado
              </p>
            </div>
            
            <div className="bg-nix-dark/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-nix-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-nix-green" />
              </div>
              <h4 className="text-white font-semibold mb-2">Resultados Mensuráveis</h4>
              <p className="text-gray-400 text-sm">
                Relatórios detalhados de performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
