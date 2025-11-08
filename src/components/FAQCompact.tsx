import React from 'react';

const FAQCompact: React.FC = () => {
  const faqs = [
    {
      question: 'Substitui meus remédios?',
      answer: 'NÃO substitui tratamento médico. É complementar e natural. Sempre consulte seu médico.'
    },
    {
      question: 'Ingredientes são caros?',
      answer: 'NÃO! 90% você JÁ TEM em casa. Resto custa menos de R$10 no mercado.'
    },
    {
      question: 'Quanto tempo para ver resultado?',
      answer: '89% relatam alívio em 72 horas. Cura completa em 15-30 dias.'
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 mb-6 md:mb-8">
          Dúvidas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">❓ {faq.question}</h3>
              <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQCompact;
