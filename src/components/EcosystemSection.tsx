
import { Zap, Target, Shield, Rocket } from "lucide-react";

const EcosystemSection = () => {
  const features = [
    {
      icon: Target,
      title: "Estratégia Completa",
      description: "Não é curso. A gente monta tudo para você apenas atender e fechar."
    },
    {
      icon: Shield,
      title: "100% Ético",
      description: "Sempre dentro das normas da OAB, sem riscos para sua carreira."
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Estrutura operacional pronta para começar a gerar leads imediatamente."
    },
    {
      icon: Rocket,
      title: "Escalável",
      description: "Sistema preparado para crescer junto com seu escritório."
    }
  ];

  return (
    <section className="py-20 bg-nix-gray relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-nix-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-nix-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-nix-green/10 border border-nix-green/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-nix-green" />
              <span className="text-nix-green font-medium text-sm">
                Ecossistema Jurídico Completo
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Toda a sua operação digital{" "}
              <span className="text-nix-green">em um só lugar</span>
            </h2>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-300 mb-6">
                Não é curso. A gente monta tudo para você apenas atender e fechar.
              </p>
              
              <div className="bg-gradient-to-r from-nix-green/20 to-green-400/20 border border-nix-green/30 rounded-lg p-6">
                <p className="text-2xl font-bold text-nix-green mb-2">
                  Mais de 200 operações montadas no Brasil inteiro
                </p>
                <p className="text-gray-300">
                  Metodologia testada e aprovada por centenas de advogados
                </p>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-nix-dark/50 border border-gray-700 rounded-lg p-6 text-center hover:border-nix-green/40 hover:bg-nix-dark/70 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-nix-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nix-green/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-nix-green" />
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Process visualization */}
          <div className="bg-nix-dark/30 border border-nix-green/20 rounded-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Como funciona na prática:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-nix-green rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  1
                </div>
                <h4 className="text-white font-semibold mb-2">Análise Completa</h4>
                <p className="text-gray-400">
                  Analisamos seu nicho, concorrência e oportunidades de mercado
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-nix-green rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  2
                </div>
                <h4 className="text-white font-semibold mb-2">Estruturação</h4>
                <p className="text-gray-400">
                  Montamos toda a operação: Instagram, Google, CRM, automações
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-nix-green rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-xl">
                  3
                </div>
                <h4 className="text-white font-semibold mb-2">Resultados</h4>
                <p className="text-gray-400">
                  Você foca em atender e fechar. Nós cuidamos da captação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
