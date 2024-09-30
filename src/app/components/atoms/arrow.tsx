import React from 'react';

interface ArrowProps {
    text: string;
    direction?: 'right' | 'left' | 'up' | 'down';
    className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ text, direction = 'right', className = '' }) => {

    return (
        <div className="inline-flex items-center text-white px-6 py-2">
          <span className="relative z-10 text-white bg-[#0e1e4c] text-center lg:w-[1000px] ">{text}</span>
          <div className="w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-l-[24px] border-l-[#0e1e4c] relative -ml-2 z-0"></div>
        </div>
      );
};

export default Arrow;
