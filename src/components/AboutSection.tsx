
import { Award, Users, Shield, Target } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    {
      icon: Award,
      title: "Especialistas em Performance",
      description: "Anos de experiência em marketing jurídico e automação"
    },
    {
      icon: Users,
      title: "200+ Operações Estruturadas",
      description: "Centenas de advogados já confiam na nossa metodologia"
    },
    {
      icon: Shield,
      title: "100% Ético e Compliant",
      description: "Sempre dentro das normas da OAB, sem riscos"
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Estruturas que geram leads qualificados de verdade"
    }
  ];

  return (
    <section className="py-20 bg-nix-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Quem está por trás da{" "}
              <span className="text-nix-green">NIX Digital</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">
                Somos a NIX Digital
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Especialistas em <strong className="text-nix-green">performance jurídica e automação</strong>. 
                  Nascemos da necessidade de advogados que queriam crescer no digital, mas não 
                  sabiam como fazer isso de forma ética e estruturada.
                </p>
                <p>
                  Atuamos com <strong className="text-white">estrutura completa, rastreio e marketing ético</strong>, 
                  sempre dentro das normas da OAB. Nossa metodologia já foi testada e aprovada 
                  por centenas de escritórios em todo o Brasil.
                </p>
                <p>
                  Não vendemos promessas milagrosas. Entregamos <strong className="text-nix-green">sistemas estruturados, 
                  mensuráveis e escaláveis</strong> que transformam advocacias em negócios previsíveis.
                </p>
              </div>

              {/* Location */}
              <div className="mt-8 p-4 bg-nix-gray/50 border border-nix-green/20 rounded-lg">
                <p className="text-white font-semibold mb-1">📍 Localização</p>
                <p className="text-gray-300">Sorocaba-SP • Atendemos todo o Brasil</p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="group bg-nix-gray/30 border border-gray-700 rounded-lg p-4 hover:border-nix-green/30 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-nix-green/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-nix-green/30 transition-colors">
                      <credential.icon className="w-6 h-6 text-nix-green" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {credential.title}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="bg-gradient-to-r from-nix-green/10 to-green-400/10 border border-nix-green/20 rounded-xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nossa missão é clara:
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transformar advogados em <span className="text-nix-green font-semibold">autoridades digitais</span> de 
              seus nichos, com operações estruturadas que geram leads qualificados todos os dias, 
              sempre de forma <span className="text-nix-green font-semibold">ética e sustentável</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
