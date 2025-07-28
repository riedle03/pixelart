import React from 'react';

/**
 * 애플리케이션의 푸터 컴포넌트입니다.
 * 저작권 정보와 웹사이트 링크를 표시합니다.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 mt-16">
      <a
        href="https://aicreatorz.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-400 hover:text-[#e94560] transition-colors duration-300"
      >
        https://aicreatorz.netlify.app/
      </a>
      <p className="text-xs text-gray-500 mt-2">
        © 2025 Daniel LEE. All rights reserved.
      </p>
    </footer>
  );
};
