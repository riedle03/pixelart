
import React from 'react';
import PixelatedCard from './PixelatedCard';

interface ImageDisplayProps {
  src: string;
  alt: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt }) => {
  return (
    <PixelatedCard className="border-[#16c79a] shadow-[8px_8px_0px_0px_rgba(22,199,154,0.5)]">
      <div className="bg-black p-2">
        <img
          src={src}
          alt={alt || "Generated pixel art"}
          className="w-full h-auto object-contain"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <p className="text-center text-xs text-[#e0e1dd] mt-4 break-words">
        Your creation: "{alt}"
      </p>
    </PixelatedCard>
  );
};
