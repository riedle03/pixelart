
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`
        w-full p-3 bg-[#0f3460] text-white 
        border-2 border-[#533483] 
        placeholder:text-gray-500
        focus:outline-none focus:ring-4 focus:ring-[#e94560]/50 focus:border-[#e94560]
        transition-all duration-200 ease-in-out
        disabled:bg-gray-700 disabled:cursor-not-allowed
      `}
    />
  );
};

export default Input;
