import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

/**
 * 주어진 텍스트를 영어로 번역합니다.
 * @param text 번역할 한국어 텍스트
 * @returns 번역된 영어 텍스트
 */
const translateToEnglish = async (text: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Translate the following Korean text to English, keeping the original nuance: "${text}"`,
            config: {
                // 번역 작업이므로 창의성보다는 정확성에 초점을 맞춥니다.
                temperature: 0.3,
            }
        });
        return response.text.trim();
    } catch (error) {
        console.error("번역 API 호출 중 오류 발생:", error);
        throw new Error("프롬프트를 영어로 번역하는 데 실패했습니다.");
    }
}


export const generatePixelArt = async (prompt: string): Promise<string> => {
    try {
        // Imagen 모델이 영어 프롬프트를 더 잘 이해하므로, 먼저 한국어 프롬프트를 영어로 번역합니다.
        const translatedPrompt = await translateToEnglish(prompt);
        
        // 더 나은 픽셀 아트 결과를 위해 프롬프트에 구체적인 스타일 가이드를 추가합니다.
        const fullPrompt = `A masterpiece of pixel art depicting ${translatedPrompt}. Styled as 16-bit retro video game art, vibrant but with a limited color palette, clear blocky pixels, no anti-aliasing.`;
        
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: fullPrompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image?.imageBytes) {
            return response.generatedImages[0].image.imageBytes;
        } else {
            throw new Error("API가 유효한 이미지를 반환하지 않았습니다.");
        }
    } catch (error) {
        console.error("Imagen API 호출 중 오류 발생:", error);
        if (error instanceof Error) {
            throw new Error(error.message || "Imagen API 요청에 실패했습니다.");
        }
        throw new Error("알 수 없는 API 오류가 발생했습니다.");
    }
};