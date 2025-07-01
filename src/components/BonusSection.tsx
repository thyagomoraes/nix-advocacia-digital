
import { Gift, FileCheck, Copy, Globe } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: FileCheck,
      title: "Checklist Jurídico Digital",
      description: "Guia completo com todos os passos para manter sua operação sempre otimizada",
      value: "R$ 497"
    },
    {
      icon: Copy,
      title: "Modelos de Copy",
      description: "Templates prontos de copy para Instagram e anúncios que realmente convertem",
      value: "R$ 697"
    },
    {
      icon: Globe,
      title: "Template de Site Jurídico",
      description: "Template editável de site profissional, pronto para personalizar com sua marca",
      value: "R$ 997"
    }
  ];

  const totalValue = 497 + 697 + 997;

  return (
    <section className="py-20 bg-nix-gray relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-medium text-sm">
                Bônus Exclusivos Inclusos
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Além de tudo isso, você ainda leva{" "}
              <span className="text-yellow-400">de bônus</span>
            </h2>
            
            <p className="text-xl text-gray-300">
              Materiais complementares para potencializar ainda mais seus resultados
            </p>
          </div>

          {/* Bonus items */}
          <div className="space-y-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="group bg-nix-dark/50 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                    <bonus.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {bonus.title}
                      </h3>
                      <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-3 py-1">
                        <span className="text-yellow-400 font-bold text-sm">
                          Valor: {bonus.value}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total value highlight */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-8 text-center animate-scale-in">
            <div className="mb-4">
              <span className="text-gray-400 text-lg">Valor total dos bônus:</span>
            </div>
            <div className="text-4xl font-bold text-yellow-400 mb-4">
              R$ {totalValue.toLocaleString('pt-BR')}
            </div>
            <div className="text-xl text-white">
              <span className="line-through text-gray-500">R$ {totalValue.toLocaleString('pt-BR')}</span>
              {" "}<span className="text-nix-green font-bold">GRÁTIS</span> para você
            </div>
            <p className="text-gray-400 mt-4">
              Todos esses materiais são seus, sem custo adicional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
