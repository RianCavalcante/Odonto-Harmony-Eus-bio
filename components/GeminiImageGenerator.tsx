import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('Uma clínica odontológica moderna e tecnológica em Eusébio, iluminação suave');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!process.env.API_KEY) {
      setError("API Key não encontrada.");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-2.5-flash-image (Nano Banana) as requested
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image', 
        contents: {
          parts: [
            { text: prompt }
          ]
        }
      });

      const parts = response.candidates?.[0]?.content?.parts;
      
      if (parts) {
        let foundImage = false;
        for (const part of parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const mimeType = part.inlineData.mimeType || 'image/png';
            setGeneratedImage(`data:${mimeType};base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
        if (!foundImage) {
           setError("O modelo não retornou uma imagem.");
        }
      } else {
        setError("Erro inesperado na resposta.");
      }
      
    } catch (err: any) {
      console.error(err);
      setError("Não foi possível gerar a imagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100 mt-12 transition-all hover:shadow-brand-blue/10">
      {/* Decorative Top Bar */}
      <div className="h-2 bg-gradient-to-r from-brand-blue via-brand-green to-brand-gold"></div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-blue flex items-center gap-2">
              <span className="text-3xl">🎨</span> Studio Criativo
            </h3>
            <p className="text-sm text-gray-500 mt-1">Crie posts e banners para a clínica usando I.A.</p>
          </div>
          <span className="bg-brand-blue/5 text-brand-blue px-3 py-1 rounded-full text-xs font-bold border border-brand-blue/10">
            Powered by Gemini
          </span>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Seu Prompt Criativo</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Consultório moderno com cadeira azul..."
              className="flex-1 bg-white border border-gray-300 text-gray-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition shadow-sm"
            />
            <button 
              onClick={generateImage}
              disabled={loading || !prompt}
              className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-green transition-all shadow-lg hover:shadow-green-500/30 disabled:opacity-50 disabled:shadow-none flex items-center justify-center min-w-[140px]"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Criando...</span>
                </div>
              ) : (
                'Gerar Arte'
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm border-l-4 border-red-500 mb-6 animate-fade-in-up">
            {error}
          </div>
        )}

        {generatedImage && (
          <div className="animate-fade-in-up">
            <div className="relative group rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img src={generatedImage} alt="Gerada por IA" className="w-full h-auto object-cover max-h-[400px]" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <a 
                  href={generatedImage} 
                  download="odonto-harmony-ai.png" 
                  className="bg-white text-brand-blue px-6 py-2 rounded-full font-bold hover:scale-105 transition transform flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-3.25-3.25M12 12.75l3.25-3.25M12 12.75V3" />
                  </svg>
                  Baixar Imagem
                </a>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">Imagem gerada artificialmente. Revise antes de publicar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiImageGenerator;