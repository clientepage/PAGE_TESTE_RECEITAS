import React from 'react';
import { AlertCircle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Header: React.FC = () => {
  return (
    <header role= w-full bg-red-600 text-white shadow-2xl">
      <div className="w-full px-3 py-2 md:px-4 md:py-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-black text-center w-full md:w-auto">
            <AlertCircle size={16} className="flex-shrink-0 animate-bounce" />
            <span>ULTIMA CHANCE: Apenas 36 vagas restantes</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs md:text-sm font-black whitespace-nowrap w-full md:w-auto">
            <span>Expira em:</span>
            <CountdownTimer inline={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
