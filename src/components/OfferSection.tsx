
import { 
  Instagram, 
  Globe, 
  FileText, 
  Target, 
  MessageSquare, 
  Database, 
  HeadphonesIcon,
  CheckCircle
} from "lucide-react";

const OfferSection = () => {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Otimizado",
      description: "Perfil profissional com linha editorial estratégica e conteúdo que converte",
      features: ["Identidade visual", "Grade de conteúdo", "Bio otimizada", "Stories estratégicos"]
    },
    {
      icon: Globe,
      title: "Google Meu Negócio",
      description: "Configuração completa para dominar as buscas locais da sua região",
      features: ["Perfil otimizado", "Posts regulares", "Avaliações", "SEO local"]
    },
    {
      icon: FileText,
      title: "Página de Vendas",
      description: "Landing page de alta conversão focada no seu público-alvo",
      features: ["Design responsivo", "Copy persuasiva", "Formulários", "Integração CRM"]
    },
    {
      icon: Target,
      title: "Anúncios com Rastreio",
      description: "Campanhas no Meta e Google Ads com acompanhamento completo de resultados",
      features: ["Pixel configurado", "Campanhas otimizadas", "Relatórios", "ROI mensurado"]
    },
    {
      icon: MessageSquare,
      title: "Robô de WhatsApp",
      description: "Automação inteligente para qualificar leads e agendar consultas",
      features: ["Chatbot inteligente", "Qualificação automática", "Agendamento", "Follow-up"]
    },
    {
      icon: Database,
      title: "CRM Pipeline Jurídico",
      description: "Sistema completo para gerenciar leads e clientes do seu escritório",
      features: ["Pipeline customizado", "Automações", "Relatórios", "Integração total"]
    },
    {
      icon: HeadphonesIcon,
      title: "Scripts + Suporte",
      description: "Scripts de atendimento profissionais e suporte mensal especializado",
      features: ["Scripts testados", "Suporte mensal", "Consultoria", "Otimizações"]
    }
  ];

  return (
    <section className="py-20 bg-nix-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-nix-green/10 border border-nix-green/30 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 text-nix-green" />
              <span className="text-nix-green font-medium text-sm">
                Estrutura completa entregue para você
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              O que você recebe{" "}
              <span className="text-nix-green">na prática</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Não vendemos cursos ou consultorias. Entregamos uma operação digital completa, 
              estruturada e funcionando para seu escritório.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-nix-gray/50 border border-gray-700 rounded-xl p-6 hover:border-nix-green/40 hover:bg-nix-gray/70 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-nix-green/20 rounded-lg flex items-center justify-center group-hover:bg-nix-green/30 transition-colors">
                    <service.icon className="w-6 h-6 text-nix-green" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-nix-green rounded-full flex-shrink-0" />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="bg-gradient-to-r from-nix-green/10 to-green-400/10 border border-nix-green/20 rounded-xl p-8 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tudo isso estruturado, configurado e funcionando
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Você só precisa focar no que sabe fazer: <strong className="text-nix-green">atender e fechar clientes</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-nix-green" />
                Implementação completa
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-nix-green" />
                Treinamento incluído
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-nix-green" />
                Suporte especializado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
