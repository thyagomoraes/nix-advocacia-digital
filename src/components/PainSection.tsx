
import { X, AlertTriangle } from "lucide-react";

const PainSection = () => {
  const painPoints = [
    "Tentou postar no Instagram e não teve retorno",
    "Já investiu em tráfego e só atraiu curiosos",
    "Está sempre atrás no Google",
    "Depende só de indicação",
    "Tem medo de ferir a OAB"
  ];

  return (
    <section className="py-20 bg-nix-gray relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-medium text-sm">
                A realidade de 90% dos advogados
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Você sabe que precisa estar no digital, mas{" "}
              <span className="text-red-400">não sabe por onde começar?</span>
            </h2>
          </div>

          {/* Pain points grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="group bg-nix-dark/50 border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-gray-300 text-left group-hover:text-white transition-colors">
                    {pain}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-lg p-8 animate-fade-in">
            <p className="text-xl text-gray-300 leading-relaxed">
              <strong className="text-white">O resultado?</strong> Você continua dependendo apenas de indicações, 
              vendo concorrentes crescerem no digital enquanto você fica para trás, 
              <span className="text-red-400 font-semibold"> perdendo clientes todos os dias.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
