import React, { useCallback } from 'react';
import { ShieldCheck, CreditCard, CheckCircle } from 'lucide-react';

const PricingNew: React.FC = () => {
  const handlePurchaseClick = useCallback(() => {
    const url = 'https://www.ggcheckout.com/checkout/v2/Ni3orCR2x8kWHSw8LJ8O';

    try {
      if (window.utmify && window.utmify.pixel) {
        window.trackEvent('PurchaseAttempt', {
          packageType: 'premium',
          value: 27.00,
          currency: 'BRL'
        });
      }
    } catch (error) {
      console.error('Error tracking purchase:', error);
    }

    window.open(url, '_blank');
  }, []);

  return (
    <section id="oferta" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block bg-red-600 text-white text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full mb-3 md:mb-4 font-black animate-pulse shadow-lg">
            ULTIMA CHANCE!
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-3 leading-tight">
            Apenas 36 vagas disponíveis
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-4 border-red-500 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 md:py-4 text-center">
              <div className="text-lg md:text-xl font-black">ACESSO COMPLETO POR APENAS</div>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 md:mb-8">
                <div className="text-gray-400 line-through text-xl md:text-2xl mb-2">DE R$ 197,00</div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-black text-green-600">R$ 27</div>
                  <div className="bg-red-600 text-white font-black text-lg md:text-xl px-4 py-2 rounded-lg transform rotate-12">
                    86% OFF
                  </div>
                </div>
                <div className="text-lg md:text-xl text-gray-700 font-medium">ou 3x de R$ 9,00 sem juros</div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-green-200">
                <h3 className="font-black text-xl md:text-2xl text-gray-900 mb-4 text-center">Você Vai Receber:</h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">980 Receitas Naturais (Valor: R$497)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">Guia Detox 7 Dias (Valor: R$47)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">Receitas Emergência (Valor: R$27)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">Suporte WhatsApp 30 dias (Valor: R$147)</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-green-500 flex items-center gap-3">
                    <ShieldCheck className="text-green-600 flex-shrink-0" size={24} />
                    <span className="text-gray-800 font-medium">Garantia 15 Dias (Risco ZERO!)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePurchaseClick}
                className="w-full text-center text-white font-black text-xl md:text-2xl px-8 py-6 md:py-7 rounded-full shadow-2xl transition-all duration-300 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transform hover:scale-105 animate-pulse mb-4 relative overflow-hidden"
              >
                <span className="relative z-10">🔥 GARANTIR ACESSO POR R$27 AGORA 🔥</span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <p className="text-center text-sm md:text-base text-gray-700 font-medium">
                ⚡ Recebe em 2 minutos • 🛡️ Garantia 15 dias • 🔒 Pagamento seguro
              </p>

              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-2xl">🔒</span>
                    <span>SSL Seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-2xl">💳</span>
                    <span>Pix & Cartão</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-2xl">✅</span>
                    <span>Garantia 15 dias</span>
                  </div>
                </div>
                <div className="text-center text-xs text-gray-500">
                  <p>Sua compra é 100% segura e protegida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNew;
