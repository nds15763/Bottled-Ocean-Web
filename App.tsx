
import React, { useState, useEffect } from 'react';
import { BookOpen, Flower, Droplets, Download, Globe } from 'lucide-react';
import { Sun } from './components/Sun';
import { Boat } from './components/Boat';
import { Cloud } from './components/Cloud';
import { Card } from './components/Card';
import { PageLayout } from './components/PageLayout';
import { content, Language } from './data';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<'home' | 'privacy' | 'terms' | 'support'>('home');
  const t = content[lang];

  // Handle URL Hash changes for routing (e.g., #privacy, #terms)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') setView('privacy');
      else if (hash === '#terms') setView('terms');
      else if (hash === '#support') setView('support');
      else setView('home');
      window.scrollTo(0, 0);
    };

    // Set initial view based on current hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newView: 'home' | 'privacy' | 'terms' | 'support') => {
    window.scrollTo(0, 0);
    
    if (newView === 'home') {
      // Use pushState to cleanly remove the hash from the URL
      // This is better than window.location.hash = '' which might leave a #
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      } else {
        window.location.hash = '';
      }
      // Force view update since pushState doesn't trigger hashchange
      setView('home');
    } else {
      window.location.hash = newView;
      // View will update via hashchange listener, but we set it here for immediate feedback
      setView(newView);
    }
  };

  const handleFooterClick = (e: React.MouseEvent, newView: 'privacy' | 'terms' | 'support') => {
    e.preventDefault();
    navigateTo(newView);
  };

  // Render Sub-pages
  if (view === 'privacy') {
    return <PageLayout title={t.privacyTitle} htmlContent={t.privacyContent} onBack={() => navigateTo('home')} />;
  }
  if (view === 'terms') {
    return <PageLayout title={t.termsTitle} htmlContent={t.termsContent} onBack={() => navigateTo('home')} />;
  }
  if (view === 'support') {
    return <PageLayout title={t.supportTitle} htmlContent={t.supportContent} onBack={() => navigateTo('home')} />;
  }

  // Render Home Page
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] w-full overflow-hidden flex flex-col">
        
        {/* Sky */}
        <div className="absolute top-0 w-full h-[65%] bg-sky-400 z-0">
          <Cloud top="10%" duration={45} scale={1.2} />
          <Cloud top="20%" duration={35} delay={15} scale={0.8} />
          <Cloud top="15%" duration={50} delay={5} scale={1.5} />
        </div>

        {/* Ocean */}
        <div className="absolute bottom-0 w-full h-[35%] bg-ocean-500 z-10 border-t-4 border-blue-300">
           {/* Decorative wave line */}
           <div className="w-full h-4 bg-ocean-600 opacity-20 absolute top-0"></div>
        </div>

        {/* Language Toggle (Floating) */}
        <div className="absolute top-6 right-6 z-50">
          <button 
            onClick={() => setLang(l => l === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md hover:bg-white transition-colors text-ocean-600 font-bold cursor-pointer"
          >
            <Globe size={18} />
            {lang === 'en' ? '中文' : 'English'}
          </button>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-center px-4">
          
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 md:gap-16 mt-12">
            
            {/* Left/Top: Text & Boat */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative">
                 {/* Sun positioned relative to text on mobile, or absolute on desktop */}
                 <div className="hidden md:block absolute -top-24 -right-24">
                   <Sun />
                 </div>
                 <h1 className="text-5xl md:text-7xl font-display font-black text-white drop-shadow-lg mb-2 tracking-wide">
                   Focus Fishing
                 </h1>
                 <p className="text-xl md:text-2xl text-blue-100 font-display font-medium mb-6">
                   Bottled Ocean
                 </p>
              </div>
              
              <p className="text-white text-lg md:text-xl max-w-md mb-8 font-medium leading-relaxed drop-shadow-md">
                {t.subtitle}
              </p>
              
              <div className="block md:hidden mb-8">
                 <Sun />
              </div>

              <div className="relative h-32 w-full flex justify-center md:justify-start">
                <div className="absolute top-4 md:left-12">
                   <Boat />
                </div>
              </div>
            </div>

            {/* Right/Bottom: Call to Action Card */}
            <div className="w-full max-w-sm">
              <Card className="transform rotate-1 md:rotate-2">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-700 mb-2">{lang === 'en' ? 'Start Reading' : '开始阅读'}</h3>
                  <div className="flex gap-2 justify-center mb-6">
                     <div className="px-4 py-2 bg-blue-100 text-blue-600 rounded-xl font-bold">15m</div>
                     <div className="px-4 py-2 bg-blue-50 text-blue-400 rounded-xl font-bold">30m</div>
                     <div className="px-4 py-2 bg-blue-50 text-blue-400 rounded-xl font-bold">45m</div>
                  </div>
                  <p className="text-gray-500 mb-6 text-sm">
                    {t.promoText}
                  </p>
                  <button className="w-full bg-ocean-500 hover:bg-ocean-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
                    <Download size={20} />
                    {t.downloadBtn}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="bg-ocean-500 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 -mt-10 relative z-30">
          
          {/* Feature: FishDex */}
          <Card icon={<BookOpen size={40} />} title={lang === 'en' ? "FishDex" : "FishDex 图鉴"}>
             <p className="text-center">{lang === 'en' ? "Track your reading progress and collect sea creatures." : "记录你的阅读进度，收集海洋生物。"}</p>
          </Card>

          {/* Feature: Zen Mode */}
          <Card icon={<Flower size={40} />} title={lang === 'en' ? "Zen Mode" : "Zen Mode 禅模式"}>
             <p className="text-center">{lang === 'en' ? "Immersive effects for deep focus." : "沉浸式特效，助你深度专注。"}</p>
          </Card>
          
          {/* Weather Sync (Full Width) */}
          <div className="md:col-span-2">
            <Card className="bg-blue-50 border-blue-200">
               <div className="flex items-center justify-between">
                 <div className="flex flex-col">
                   <h3 className="font-bold text-blue-800 text-lg mb-1">{lang === 'en' ? "Sync Weather" : "天气同步"}</h3>
                   <p className="text-blue-600 text-sm">{lang === 'en' ? "Real-time effects based on your environment." : "根据你的环境实时同步天气特效。"}</p>
                 </div>
                 <div className="bg-blue-200 p-3 rounded-full text-blue-600">
                   <Droplets size={24} />
                 </div>
               </div>
            </Card>
          </div>
        </div>

        {/* --- DETAILED DESCRIPTION --- */}
        <div className="max-w-4xl mx-auto mt-16 text-white space-y-16">
          
          {/* About */}
          <section className="text-center">
            <h2 className="text-3xl font-display font-bold mb-6">{t.aboutTitle}</h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">{t.aboutText}</p>
          </section>

          {/* Grid: Why & Ideal For */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-sky-200">{t.whyTitle}</h3>
              <ul className="space-y-3">
                {t.whyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-50">
                    <span className="text-sky-300 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-sky-200">{t.idealForTitle}</h3>
              <ul className="space-y-3">
                {t.idealForPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-50">
                    <span className="text-sky-300 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Features List */}
          <section className="bg-white rounded-3xl p-8 md:p-12 text-gray-800 shadow-xl">
             <h2 className="text-3xl font-display font-bold mb-8 text-center text-ocean-600">{t.featuresTitle}</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.featuresList.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <div className="w-2 h-2 bg-ocean-500 rounded-full flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
             </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-blue-200 text-sm pb-8">
          <p className="mb-4">{t.footerText}</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 opacity-80">
             <a href="#privacy" onClick={(e) => handleFooterClick(e, 'privacy')} className="hover:text-white transition-colors cursor-pointer">{t.privacyTitle}</a>
             <span className="hidden md:inline text-blue-400">|</span>
             <a href="#terms" onClick={(e) => handleFooterClick(e, 'terms')} className="hover:text-white transition-colors cursor-pointer">{t.termsTitle}</a>
             <span className="hidden md:inline text-blue-400">|</span>
             <a href="#support" onClick={(e) => handleFooterClick(e, 'support')} className="hover:text-white transition-colors cursor-pointer">{t.supportTitle}</a>
          </div>
          <p className="mt-8 opacity-40">© {new Date().getFullYear()} Focus Fishing / Bottled Ocean</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
