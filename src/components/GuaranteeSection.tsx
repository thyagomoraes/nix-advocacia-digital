
import { Shield, Target, BarChart3, Heart } from "lucide-react";

const GuaranteeSection = () => {
  const principles = [
    {
      icon: Shield,
      title: "Transparência Total",
      description: "Relatórios completos, dados reais, sem informações escondidas"
    },
    {
      icon: Target,
      title: "Foco em Estrutura",
      description: "Entregamos sistemas sólidos, não promessas vazias"
    },
    {
      icon: BarChart3,
      title: "Performance Mensurável",
      description: "Tudo é rastreado, medido e otimizado constantemente"
    },
    {
      icon: Heart,
      title: "Ética e Responsabilidade",
      description: "Sempre dentro das normas da OAB, sem riscos para sua carreira"
    }
  ];

  return (
    <section className="py-20 bg-nix-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">
                Nossa garantia para você
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Transparência total.{" "}
              <span className="text-red-400">Zero promessas milagrosas.</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              O que entregamos é <strong className="text-white">estrutura, rastreio e performance</strong>, 
              sempre com responsabilidade e dentro da realidade do mercado jurídico.
            </p>
          </div>

          {/* Main guarantee content */}
          <div className="bg-nix-gray/30 border border-gray-700 rounded-xl p-8 mb-12 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Garantia Real
              </h3>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-white">Não prometemos milagres.</strong> Não garantimos "X clientes em Y dias" 
                nem faturamentos irreais. O mercado jurídico é sério e nossa abordagem também é.
              </p>
              
              <p>
                <strong className="text-nix-green">O que garantimos:</strong>
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-nix-green rounded-full flex-shrink-0 mt-2" />
                  <span>Estrutura digital completa, funcional e configurada corretamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-nix-green rounded-full flex-shrink-0 mt-2" />
                  <span>Sistemas de rastreio e análise implementados e funcionando</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-nix-green rounded-full flex-shrink-0 mt-2" />
                  <span>Suporte técnico especializado durante todo o período</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-nix-green rounded-full flex-shrink-0 mt-2" />
                  <span>Compliance total com as normas da OAB</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-nix-green rounded-full flex-shrink-0 mt-2" />
                  <span>Relatórios transparentes de performance e resultados</span>
                </li>
              </ul>

              <p className="text-lg">
                <strong className="text-white">Seus resultados dependem de:</strong> qualidade do atendimento, 
                precificação adequada, follow-up consistente e dedicação ao processo. 
                Nós entregamos as ferramentas, você aplica sua expertise jurídica.
              </p>
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="group bg-nix-gray/50 border border-gray-700 rounded-lg p-6 hover:border-blue-400/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <principle.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final message */}
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-6">
              <p className="text-lg text-gray-300">
                <strong className="text-white">Nossa reputação é construída na confiança.</strong> 
                {" "}Mais de 200 advogados já confiaram na NIX Digital para estruturar suas operações. 
                Seja o próximo a transformar sua advocacia em um negócio previsível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
