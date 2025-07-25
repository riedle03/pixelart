
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`
        w-full bg-[#16213e] text-white py-3 px-4 
        border-b-4 border-l-2 border-[#e94560]
        hover:bg-[#e94560] hover:text-black
        active:translate-y-1 active:border-b-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1a2e] focus:ring-[#e94560]
        transition-all duration-150 ease-in-out
        disabled:bg-gray-600 disabled:text-gray-400 disabled:border-gray-800 disabled:cursor-not-allowed disabled:transform-none
      `}
    >
      {children}
    </button>
  );
};

export default Button;
