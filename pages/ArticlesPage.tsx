import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { ALL_ARTICLES, Article } from '../data/articles';
import { CONTENT } from '../constants';

const ArticlesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'English' | 'Arabic'>('Arabic');

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return ALL_ARTICLES.filter(article => {
      const matchesLanguage = article.language === selectedLanguage;
      const matchesSearch = !query || 
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query);
      return matchesLanguage && matchesSearch;
    });
  }, [searchQuery, selectedLanguage]);

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const t = CONTENT.articles;

  return (
    <div className="font-body bg-cream min-h-screen pb-20" dir="rtl">
      <SEO 
        title="المقالات" 
        description="استكشف جميع المقالات الروحية وتعاليم PDF من وزارة قلب الآب باللغتين الإنجليزية والعربية."
      />

      {/* Hero Header */}
      <section className="bg-olive py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-flame opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <p className="text-flame font-bold tracking-widest text-sm uppercase mb-4 opacity-90">المكتبة الروحية</p>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">{t.title}</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Control Panel */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 flex flex-col gap-8">
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto w-full">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-flame focus:outline-none shadow-sm text-gray-700 transition-all duration-300 text-lg"
              />
              <svg 
                className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Language Toggle */}
            <div className="flex justify-center" dir="ltr">
              <div className="inline-flex p-1.5 bg-gray-100 rounded-2xl border border-gray-200">
                <button
                  onClick={() => setSelectedLanguage('English')}
                  className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedLanguage === 'English' 
                    ? 'bg-white text-olive shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-olive hover:bg-white/50'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLanguage('Arabic')}
                  className={`px-10 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedLanguage === 'Arabic' 
                    ? 'bg-white text-olive shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-olive hover:bg-white/50'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group border border-gray-50"
                >
                  <div className="p-8 flex-grow">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="bg-cream text-olive/60 text-xs font-bold px-3 py-1.5 rounded-full border border-olive/10">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-olive mb-4 group-hover:text-flame transition-colors duration-300 min-h-[64px] leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 font-light">
                      {article.description}
                    </p>
                  </div>
                  <div className="px-8 pb-8 flex flex-col gap-3">
                    <a
                      href={article.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-olive text-white font-bold py-3.5 px-6 rounded-xl hover:bg-olive/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-xl"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      عرض المقال
                    </a>
                    <button
                      onClick={() => handleDownload(article.pdfPath, article.title)}
                      className="w-full bg-white text-olive border-2 border-olive/10 font-bold py-3 px-6 rounded-xl hover:bg-cream/50 transition-all duration-300 flex items-center justify-center gap-3 group/btn"
                    >
                      <svg className="w-6 h-6 text-gray-300 group-hover/btn:text-olive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      تحميل PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm max-w-2xl mx-auto border border-dashed border-olive/10">
              <div className="bg-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-olive/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-olive/40 font-medium text-lg leading-relaxed">{t.noResults}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
