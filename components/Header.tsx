
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#e94560] tracking-wider">
        픽셀 아트 생성기
      </h1>
      <p className="mt-4 text-sm sm:text-base text-[#e0e1dd] max-w-2xl mx-auto">
        상상 속, 빛바랜 기억 한 조각.
        AI의 손길로, 레트로 감성으로.
      </p>
    </header>
  );
};
