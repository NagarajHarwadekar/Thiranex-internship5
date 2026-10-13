import React, { useState } from 'react';
import { ARTICLES, GUIDES, GLOSSARY } from '../data/learning';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BookOpen, Search, ArrowRight, Clock, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

export const LearnHubPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'articles' | 'guides' | 'glossary'>('articles');
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [selectedGlossaryLetter, setSelectedGlossaryLetter] = useState<string>('All');
  const [articleCategory, setArticleCategory] = useState<string>('All');

  const articleCategories = ['All', 'Investing', 'Budgeting', 'Saving', 'Personal Finance', 'Career & Income', 'Financial Psychology', 'Retirement Planning'];

  const filteredArticles = ARTICLES.filter((a) => {
    if (articleCategory !== 'All' && a.category !== articleCategory) return false;
    return true;
  });

  const filteredGlossary = GLOSSARY.filter((term) => {
    if (selectedGlossaryLetter !== 'All' && !term.term.startsWith(selectedGlossaryLetter)) {
      return false;
    }
    if (glossaryQuery.trim()) {
      const q = glossaryQuery.toLowerCase();
      return (
        term.term.toLowerCase().includes(q) ||
        term.definition.toLowerCase().includes(q) ||
        term.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const alphabet = ['All', ...Array.from(new Set(GLOSSARY.map((g) => g.term[0].toUpperCase()))).sort()];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>Financial Literacy Ecosystem</span>
          <span>·</span>
          <span>Evidence-Based Curriculum</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Learn Hub
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Clear, jargon-free explanations of core financial mechanics: expense ratios, asset location, emergency tiers, tax-loss harvesting, and behavioral money scripts.
        </p>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 mt-6 p-1 bg-slate-100 rounded-xl max-w-sm">
          <button
            onClick={() => setActiveTab('articles')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'articles' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Articles ({ARTICLES.length})
          </button>
          <button
            onClick={() => setActiveTab('guides')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'guides' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Guides ({GUIDES.length})
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'glossary' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Glossary ({GLOSSARY.length})
          </button>
        </div>
      </div>

      {/* Articles View */}
      {activeTab === 'articles' && (
        <div className="space-y-8">
          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setArticleCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  articleCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => {
                  window.location.hash = `#/learn/article/${art.slug}`;
                }}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <ImageWithFallback
                    src={art.image}
                    alt={art.title}
                    fallbackTitle={art.title}
                    fallbackCategory={art.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold uppercase tracking-wider text-slate-700">
                        {art.category}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{art.readTime}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{art.difficulty}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 mb-2">
                      {art.title}
                    </h2>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{art.author.name}</span>
                    <span className="font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Guides View */}
      {activeTab === 'guides' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between space-y-6 shadow-xs"
            >
              <div>
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <ImageWithFallback
                    src={guide.image}
                    alt={guide.title}
                    fallbackTitle={guide.title}
                    fallbackCategory={guide.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold text-slate-700 uppercase tracking-wider">{guide.category}</span>
                  <span>·</span>
                  <span>{guide.stepsCount} Action Steps</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{guide.summary}</p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {guide.steps.slice(0, 3).map((s) => (
                    <div key={s.number} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {s.number}
                      </span>
                      <span className="font-medium truncate">{s.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#/guides"
                className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-900 hover:underline flex items-center justify-between"
              >
                <span>View Full Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Glossary View */}
      {activeTab === 'glossary' && (
        <div id="glossary" className="space-y-8">
          {/* Search Bar & Alphabet Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/80">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={glossaryQuery}
                onChange={(e) => setGlossaryQuery(e.target.value)}
                placeholder="Search financial terms (e.g. SWR, Expense Ratio, HSA)..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:border-slate-800"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedGlossaryLetter(letter)}
                  className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedGlossaryLetter === letter
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">{item.term}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.definition}</p>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">Example: </span>
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
