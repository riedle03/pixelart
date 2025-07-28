import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center mb-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.7)]">
        AI 픽셀 아트 생성기
      </h1>
      <p className="text-blue-300 mt-4 text-lg leading-relaxed">
        "상상 속, 빛바랜 기억 한 조각.
        <br />
        AI의 손길로, 레트로 감성으로."
      </p>
    </header>
  );
};

export default Header;