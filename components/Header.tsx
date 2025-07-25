
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#e94560] tracking-wider">
        Pixel Art Generator
      </h1>
      <p className="mt-4 text-sm sm:text-base text-[#e0e1dd] max-w-2xl mx-auto">
        Craft retro-style pixel art from your imagination. Describe anything and let AI bring it to life.
      </p>
    </header>
  );
};
