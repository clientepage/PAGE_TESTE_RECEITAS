import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: '',
    city: '',
    initial: ''
  });

  const nomes = ['Maria S.', 'João P.', 'Ana C.', 'Roberto L.', 'Carla M.', 'Pedro S.', 'Juliana A.', 'Fernando R.', 'Beatriz M.', 'Carlos L.'];
  const cidades = ['São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR', 'Porto Alegre, RS', 'Salvador, BA', 'Brasília, DF', 'Recife, PE'];

  const showNotification = () => {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const cidade = cidades[Math.floor(Math.random() * cidades.length)];
    const inicial = nome.charAt(0);

    setNotification({ name: nome, city: cidade, initial: inicial });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      showNotification();
    }, 10000);

    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 20000 + 20000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl p-4 max-w-sm z-40 animate-slide-up border-2 border-green-500">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0 text-sm">
              {notification.initial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 truncate">{notification.name} comprou agora</p>
              <p className="text-xs text-gray-600 truncate">{notification.city}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default SocialProof;
