
import React, { useState, useCallback } from 'react';
import { generatePixelArt } from './services/geminiService';
import Header from './components/Header';
import Footer from './components/Footer';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const base64ImageBytes = await generatePixelArt(prompt);
      const fullImageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
      setImageUrl(fullImageUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setError(`이미지 생성 실패: ${message}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] p-4 sm:p-6 md:p-8 selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <div className="w-full bg-[#2a2a2a] p-6 border-4 border-black shadow-[8px_8px_0px_#000000]">
            <PromptInput 
                prompt={prompt}
                setPrompt={setPrompt}
                onSubmit={handleGenerate}
                isLoading={isLoading}
            />
            <ErrorMessage message={error} />
            <ImageDisplay 
                imageUrl={imageUrl}
                isLoading={isLoading}
            />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
