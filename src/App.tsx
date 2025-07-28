import React, { useState, useCallback } from 'react';
import { generatePixelArt } from './services/geminiService';
import PixelatedCard from './components/PixelatedCard';
import Button from './components/Button';
import Input from './components/Input';
import Spinner from './components/Spinner';
import { Header } from './components/Header';
import { ImageDisplay } from './components/ImageDisplay';
import { Footer } from './components/Footer'; // 1. Footer 컴포넌트 가져오기

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
      {/* 2. 메인 컨텐츠 영역을 flex-grow로 감싸서 푸터를 하단에 고정 */}
      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto">
          <Header />
          
          <PixelatedCard className="mt-8">
            <div className="flex flex-col gap-4">
              {/* --- 한국어 수정 --- */}
              <label htmlFor="prompt-input" className="text-[#e0e1dd] text-sm sm:text-base">
                상상을 펼쳐보세요:
              </label>
              <Input
                id="prompt-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                // --- 한국어 수정 ---
                placeholder="예) 용과 싸우는 기사"
                disabled={isLoading}
              />
              {/* --- 한국어 수정 --- */}
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

      {/* 3. Footer 컴포넌트를 맨 아래에 추가 */}
      <Footer />
    </div>
  );
};

export default App;
