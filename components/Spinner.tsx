
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 relative animate-spin">
        <div className="w-6 h-6 bg-blue-400 absolute top-0 left-0"></div>
        <div className="w-6 h-6 bg-blue-500 absolute top-0 right-0"></div>
        <div className="w-6 h-6 bg-blue-600 absolute bottom-0 left-0"></div>
        <div className="w-6 h-6 bg-blue-700 absolute bottom-0 right-0"></div>
      </div>
      <p className="text-lg text-gray-300">픽셀을 그리는 중...</p>
    </div>
  );
};

export default Spinner;
