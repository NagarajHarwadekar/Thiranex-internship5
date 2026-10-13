import React, { useState } from 'react';
import { FAQS } from '../data/faq';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-01', 'faq-07', 'faq-10']);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Products', 'Learning', 'Tools', 'Orders', 'Privacy'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Support & Clarity · {FAQS.length} Questions Answered
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
          Everything you need to know about Finova digital product formats, client-side calculator privacy, and the capstone demo checkout system.
        </p>

        {/* Search Input */}
        <div className="relative pt-2">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 mt-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. format, privacy, return rate, checkout)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:border-slate-800 shadow-2xs"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 shrink-0">
                    {faq.category}
                  </span>
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-slate-800' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
            No questions match your query. Try a different search term or select "All".
          </div>
        )}
      </div>

      {/* Need More Assistance Banner */}
      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Have a question not listed here?</h3>
          <p className="text-xs text-slate-600 mt-0.5">Reach out via our contact page for student capstone support.</p>
        </div>
        <a
          href="#/contact"
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
        >
          <span>Contact Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
