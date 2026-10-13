import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { COLLECTIONS } from '../data/collections';
import { ARTICLES, GUIDES } from '../data/learning';
import { ProductCard } from '../components/ProductCard';
import { Search, X, BookOpen, Layers, ArrowRight, Compass } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'products' | 'articles' | 'collections'>('all');

  const popularQueries = [
    'Index Funds',
    'Zero-Based Budget',
    'Roth IRA',
    'HSA',
    'Emergency Fund',
    'Student Loans',
    'Compounding',
    'Salary Negotiation'
  ];

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return { products: [], articles: [], collections: [], guides: [] };
    }

    const matchedProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );

    const matchedArticles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );

    const matchedGuides = GUIDES.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
    );

    const matchedCollections = COLLECTIONS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );

    return {
      products: matchedProducts,
      articles: matchedArticles,
      guides: matchedGuides,
      collections: matchedCollections
    };
  }, [query]);

  const totalResults =
    searchResults.products.length +
    searchResults.articles.length +
    searchResults.guides.length +
    searchResults.collections.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Search Header */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Search Finova
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Search across 40+ educational tools, investment manuals, curated collections, and detailed guides.
        </p>

        {/* Search Input Box */}
        <div className="relative pt-2">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 mt-1" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic, ticker concept, or product name..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-800 shadow-xs"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 mt-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Suggested Queries */}
        {!query && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400">Popular:</span>
            {popularQueries.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-lg transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results View */}
      {query.trim() && (
        <div className="space-y-8">
          {/* Result Count & Segmented Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <span className="text-xs text-slate-500 font-medium">
              Found <strong className="text-slate-900">{totalResults}</strong> result(s) for "{query}"
            </span>

            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'all' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({totalResults})
              </button>
              <button
                onClick={() => setActiveTab('products')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'products' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Products ({searchResults.products.length})
              </button>
              <button
                onClick={() => setActiveTab('articles')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'articles' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Articles & Guides ({searchResults.articles.length + searchResults.guides.length})
              </button>
              <button
                onClick={() => setActiveTab('collections')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  activeTab === 'collections' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Collections ({searchResults.collections.length})
              </button>
            </div>
          </div>

          {/* If Nothing Found */}
          {totalResults === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="text-base font-bold text-slate-900">No results found for "{query}"</h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Check spelling or try broader keywords like "investing", "tax", "budget", or "emergency fund".
              </p>
            </div>
          )}

          {/* Products Results */}
          {(activeTab === 'all' || activeTab === 'products') && searchResults.products.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Products & Toolkits ({searchResults.products.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}

          {/* Articles & Guides Results */}
          {(activeTab === 'all' || activeTab === 'articles') &&
            (searchResults.articles.length > 0 || searchResults.guides.length > 0) && (
              <section className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Educational Articles & Guides ({searchResults.articles.length + searchResults.guides.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {searchResults.articles.map((art) => (
                    <a
                      key={art.id}
                      href={`#/learn/article/${art.slug}`}
                      className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs space-y-1.5 block transition-all"
                    >
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Article · {art.category} · {art.readTime}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{art.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{art.summary}</p>
                    </a>
                  ))}

                  {searchResults.guides.map((g) => (
                    <a
                      key={g.id}
                      href={`#/guides#${g.slug}`}
                      className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs space-y-1.5 block transition-all"
                    >
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        Guide · {g.category} · {g.stepsCount} Steps
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{g.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{g.summary}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}

          {/* Collections Results */}
          {(activeTab === 'all' || activeTab === 'collections') && searchResults.collections.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Curated Collections ({searchResults.collections.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.collections.map((col) => (
                  <a
                    key={col.id}
                    href={`#/collections`}
                    className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs flex items-center justify-between transition-all"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                        Collection · {col.productCount} items
                      </span>
                      <h3 className="text-base font-bold text-slate-900">{col.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-1">{col.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-4" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
