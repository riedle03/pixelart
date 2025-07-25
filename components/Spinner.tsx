
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <div className="w-16 h-16 relative">
        <div className="w-4 h-4 bg-[#e94560] absolute top-0 left-0 animate-ping"></div>
        <div className="w-4 h-4 bg-[#16c79a] absolute top-0 right-0 animate-ping delay-75"></div>
        <div className="w-4 h-4 bg-[#f8f1f1] absolute bottom-0 left-0 animate-ping delay-150"></div>
        <div className="w-4 h-4 bg-[#533483] absolute bottom-0 right-0 animate-ping delay-200"></div>
        <div className="w-4 h-4 bg-white absolute top-0 left-0 animate-pulse"></div>
        <div className="w-4 h-4 bg-white absolute top-0 right-0 animate-pulse delay-75"></div>
        <div className="w-4 h-4 bg-white absolute bottom-0 left-0 animate-pulse delay-150"></div>
        <div className="w-4 h-4 bg-white absolute bottom-0 right-0 animate-pulse delay-200"></div>
      </div>
      <p className="text-lg text-gray-300">Conjuring pixels...</p>
    </div>
  );
};

export default Spinner;
