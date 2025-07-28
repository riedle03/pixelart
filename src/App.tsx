import React, { useState, useCallback } from 'react';
// src 폴더를 기준으로, 상위 폴더(../)에 있는 components와 services를 가져옵니다.
import { generatePixelArt } from '../services/geminiService';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ImageDisplay } from '../components/ImageDisplay';
import { Input } from '../components/Input';
import { PixelatedCard } from '../components/PixelatedCard';
import { Spinner } from '../components/Spinner';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generatePixelArt(prompt);
      setGeneratedImage(imageUrl);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Error: ${errorMessage}. Please try again.`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white p-4 sm:p-6 lg:p-8 flex flex-col">
      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto">
          <Header />
          
          <PixelatedCard className="mt-8">
            <div className="flex flex-col gap-4">
              <label htmlFor="prompt-input" className="text-[#e0e1dd] text-sm sm:text-base">
                상상을 펼쳐보세요:
              </label>
              <Input
                id="prompt-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="예) 용과 싸우는 기사"
                disabled={isLoading}
              />
              <Button onClick={handleGenerate} disabled={isLoading || !prompt}>
                {isLoading ? '생성 중...' : '픽셀 아트 생성'}
              </Button>
            </div>
          </PixelatedCard>

          <div className="mt-8 w-full">
            {isLoading && <Spinner />}
            {error && (
              <PixelatedCard className="border-[#e74c3c] bg-[#e74c3c]/10">
                <p className="text-center text-[#e74c3c]">{error}</p>
              </PixelatedCard>
            )}
            {generatedImage && <ImageDisplay src={generatedImage} alt={prompt} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
