import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-4 border-green-500 p-6 md:p-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-4">
                <ShieldCheck size={48} className="text-green-600" />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              GARANTIA INCONDICIONAL<br/>DE 15 DIAS
            </h2>

            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Teste TODAS as receitas. Não funcionou?<br/>
              <span className="font-bold text-green-600">Devolvemos 100% do seu dinheiro.</span>
            </p>

            <p className="text-base md:text-lg text-gray-600">
              Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
