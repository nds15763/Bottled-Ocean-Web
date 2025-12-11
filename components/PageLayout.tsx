
import React from 'react';
import { Cloud } from './Cloud';

interface PageLayoutProps {
  title: string;
  htmlContent: string;
  backBtnText: string;
  onBack: () => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, htmlContent, backBtnText, onBack }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col relative overflow-hidden">
      {/* Header Background */}
      <div className="absolute top-0 w-full h-64 bg-sky-400 z-0">
        <Cloud top="10%" duration={45} scale={1.2} />
        <Cloud top="20%" duration={35} delay={15} scale={0.8} />
      </div>
      <div className="absolute top-64 w-full h-16 bg-ocean-500 z-0 border-t-4 border-blue-300" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-32 pb-20 w-full flex-grow">
        <button 
          onClick={onBack}
          type="button"
          className="mb-8 px-4 py-2 bg-white/90 rounded-full shadow hover:bg-white text-ocean-600 font-bold transition-all flex items-center gap-2 w-fit cursor-pointer z-50 relative"
        >
          ← {backBtnText}
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_0_rgba(209,229,245,1)] border-4 border-card-border">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-ocean-600 mb-8 border-b-2 border-blue-100 pb-4">
            {title}
          </h1>
          
          <div 
            className="prose prose-blue max-w-none prose-headings:font-display prose-headings:text-ocean-600 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </div>
      </div>

      {/* Footer mimic */}
      <div className="bg-ocean-500 h-12 w-full mt-auto" />
    </div>
  );
};
