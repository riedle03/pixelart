
import React from 'react';
import Spinner from './Spinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, isLoading }) => {
  return (
    <div className="w-full aspect-square bg-[#1a1a1a] border-4 border-dashed border-gray-600 flex items-center justify-center p-2">
      {isLoading && <Spinner />}
      {!isLoading && imageUrl && (
        <img src={imageUrl} alt="생성된 픽셀 아트" className="w-full h-full object-contain" />
      )}
      {!isLoading && !imageUrl && (
        <div className="text-center text-gray-400">
          <p className="text-2xl mb-2">🖼️</p>
          <p>이곳에 생성된 이미지가 표시됩니다.</p>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
