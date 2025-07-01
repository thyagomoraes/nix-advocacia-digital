
import { Star, TrendingUp, Users, DollarSign } from "lucide-react";

const SocialProofSection = () => {
  const results = [
    {
      icon: Users,
      metric: "1.2K+",
      description: "Leads qualificados gerados mensalmente",
      highlight: "Para um único escritório em SP"
    },
    {
      icon: DollarSign,
      metric: "R$ 180K",
      description: "Faturamento adicional em 6 meses",
      highlight: "Advogado especialista em direito empresarial"
    },
    {
      icon: TrendingUp,
      metric: "340%",
      description: "Aumento na captação de clientes",
      highlight: "Escritório familiar em MG"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rafael Martins",
      specialty: "Direito Empresarial - São Paulo",
      text: "Em 4 meses captei mais clientes do que em 2 anos dependendo só de indicação. A estrutura da NIX é realmente completa.",
      rating: 5
    },
    {
      name: "Dra. Carolina Silva",
      specialty: "Direito de Família - Minas Gerais",
      text: "Finalmente consegui escalar meu escritório sem ferir nenhuma norma da OAB. Leads qualificados chegam todos os dias.",
      rating: 5
    },
    {
      name: "Dr. Eduardo Santos",
      specialty: "Direito Trabalhista - Rio de Janeiro",
      text: "A automação revolucionou meu atendimento. Hoje foco apenas em fechar contratos e atender clientes de qualidade.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-nix-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-nix-green/10 border border-nix-green/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-nix-green fill-current" />
              <span className="text-nix-green font-medium text-sm">
                Resultados reais, não promessas
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-outfit">
              Advogados comuns,{" "}
              <span className="text-nix-green">resultados extraordinários</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como nossos clientes transformaram suas advocacias em máquinas de captação
            </p>
          </div>

          {/* Results metrics */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-nix-gray/50 border border-nix-green/20 rounded-lg p-8 text-center hover:border-nix-green/40 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-nix-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <result.icon className="w-8 h-8 text-nix-green" />
                </div>
                <div className="text-4xl font-bold text-nix-green mb-2 font-outfit">
                  {result.metric}
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {result.description}
                </h3>
                <p className="text-gray-400 text-sm">
                  {result.highlight}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-nix-gray/30 border border-gray-700 rounded-lg p-6 hover:border-nix-green/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-nix-green fill-current" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-nix-green text-sm">
                    {testimonial.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom highlight */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-nix-green/10 to-green-400/10 border border-nix-green/20 rounded-lg p-8">
              <p className="text-2xl text-white font-semibold mb-2">
                Mais de <span className="text-nix-green">200 operações</span> estruturadas
              </p>
              <p className="text-gray-300">
                Advogados de todo o Brasil já confiam na nossa metodologia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
