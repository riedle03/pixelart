
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full mb-6">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="생성하고 싶은 픽셀 아트를 설명해주세요..."
        className="flex-grow p-4 bg-[#1a1a1a] text-white border-2 border-gray-600 focus:border-blue-400 focus:outline-none placeholder-gray-500 transition-colors"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="p-4 bg-blue-500 text-white font-bold border-2 border-black transition-all duration-150 ease-in-out disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none hover:enabled:bg-blue-600 active:enabled:bg-blue-700 shadow-[4px_4px_0px_#000000] hover:enabled:shadow-[2px_2px_0px_#000000] active:enabled:shadow-none active:enabled:translate-x-[2px] active:enabled:translate-y-[2px]"
      >
        {isLoading ? '생성 중...' : '생성하기'}
      </button>
    </form>
  );
};

export default PromptInput;
