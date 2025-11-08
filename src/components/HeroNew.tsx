import React, { useEffect, useState } from 'react';
import { CheckCircle, DollarSign, Leaf } from 'lucide-react';

const HeroNew: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  const handleCheckout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      if (window.trackEvent) {
        window.trackEvent('InitiateCheckout', {
          packageType: 'premium',
          value: 27.00,
          currency: 'BRL',
          source: 'hero_button'
        });
      }
    } catch (error) {
      console.error('Error tracking checkout:', error);
    }
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/Ni3orCR2x8kWHSw8LJ8O';
  };

  return (
    <section className="relative pt-24 md:pt-28 pb-8 md:pb-12 bg-gradient-to-b from-green-50 to-white overflow-visible">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 max-w-2xl mx-auto mb-4 shadow-md border-2 border-yellow-400">
          <div className="flex items-center justify-center mb-1">
            <div className="flex text-yellow-500 mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-900 text-sm md:text-base">27.142 pessoas aprovaram</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="order-2 lg:order-1">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 md:mb-6 leading-tight transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              1 COLHER E<br/>
              <span className="text-green-600">ADEUS</span><br/>
              <span className="text-green-600">À GASTRITE!</span>
            </h1>

            <p
              className={`text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed transition-opacity duration-500 delay-100 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="font-bold text-gray-900">2.847 brasileiros eliminaram gastrite em 15 dias</span><br/>
              com esta receita de R$3 que você já tem em casa
            </p>

            <div className={`grid grid-cols-1 gap-3 mb-6 transition-opacity duration-500 delay-150 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}>
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle size={32} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Funciona em 72 horas</h3>
                    <p className="text-gray-700 text-sm">Alívio imediato da azia e queimação</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <DollarSign size={32} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Economize R$960/ano</h3>
                    <p className="text-gray-700 text-sm">Pare de gastar R$80/mês em remédios</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <Leaf size={32} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">100% Natural</h3>
                    <p className="text-gray-700 text-sm">Sem dependência química, sem efeitos colaterais</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`space-y-3 transition-opacity duration-500 delay-200 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href="https://www.ggcheckout.com/checkout/v2/Ni3orCR2x8kWHSw8LJ8O"
                onClick={handleCheckout}
                className="block w-full text-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black text-xl md:text-2xl py-5 md:py-6 rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 relative overflow-hidden"
                aria-label="Garantir acesso por R$27"
              >
                <span className="relative z-10">🔥 GARANTIR ACESSO POR R$27 AGORA 🔥</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </a>

              <p className="text-center text-gray-700 text-sm md:text-base font-medium">
                ⚡ Acesso imediato • 🛡️ Garantia 15 dias • 🔒 Compra segura
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-black text-sm md:text-base px-4 py-2 rounded-full shadow-lg z-10">
                Verificado
              </div>
              <img
                src="https://i.imgur.com/IuvCtxt.jpeg"
                alt="Mel com gengibre - Receita natural para gastrite"
                className="w-full h-auto rounded-3xl shadow-2xl"
                width="800"
                height="600"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <div className="text-center mt-3 text-sm md:text-base text-gray-700 font-medium">
                Ingrediente que custa R$3 e cura melhor que Omeprazol
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
