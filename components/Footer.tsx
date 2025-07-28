
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto pt-8 text-center text-sm text-gray-400">
      <p>© 2025 이대형. All rights reserved.</p>
      <a 
        href="https://aicreatorz.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        https://aicreatorz.netlify.app/
      </a>
    </footer>
  );
};

export default Footer;
