import React from 'react';

interface ArrowProps {
    text: string;
  direction?: 'right' | 'left' | 'up' | 'down';
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ text, direction = 'right', className = '' }) => {
  const getArrowSymbol = () => {
    switch (direction) {
      case 'left': return '←';
      case 'up': return '↑';
      case 'down': return '↓';
      default: return '→';
    }
  };

  return (
    <div className={`flex items-center ${className} relative`}>
      <div className="flex items-center justify-center bg-blue text-white px-4 py-2">
        <span className="mr-2">{text}</span>
        <span className="font-bold">{getArrowSymbol()}</span>
      </div>
      <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-blue"></div>
    </div>
  );
};

export default Arrow;
