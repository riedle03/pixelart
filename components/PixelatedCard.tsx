
import React from 'react';

interface PixelatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const PixelatedCard: React.FC<PixelatedCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-[#0f3460] border-4 border-[#e94560] p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(233,69,96,0.5)] transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default PixelatedCard;
