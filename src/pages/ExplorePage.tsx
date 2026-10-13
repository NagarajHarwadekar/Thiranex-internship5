import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory, ProductFormat, ProductDifficulty } from '../types';
import { Search, SlidersHorizontal, X, ArrowUpDown, RotateCcw } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(75);
  const [minRating, setMinRating] = useState<number>(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  // Check URL query parameters on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('filter=new')) {
      setSortBy('newest');
    } else if (hash.includes('filter=bestseller')) {
      setSortBy('popular');
    } else if (hash.includes('category=')) {
      const cat = decodeURIComponent(hash.split('category=')[1]?.split('&')[0] || '');
      if (cat) setSelectedCategory(cat);
    }
  }, []);

  const categories: string[] = [
    'All',
    'Investing',
    'Budgeting',
    'Personal Finance',
    'Career & Income',
    'Financial Psychology',
    'Market Analysis',
    'Retirement Planning',
    'Student & Early Career'
  ];

  const formats: string[] = [
    'All',
    'Digital Guide & PDF',
    'Interactive Toolkit',
    'Masterclass & Workbook',
    'Spreadsheet System',
    'Print Edition'
  ];

  const difficulties: string[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Format filter
      if (selectedFormat !== 'All' && product.format !== selectedFormat) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'All' && product.difficulty !== selectedDifficulty) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Rating filter
      if (product.rating < minRating) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.shortDescription.toLowerCase().includes(query);
        const matchTag = product.tags.some((t) => t.toLowerCase().includes(query));
        const matchSub = product.subcategory.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchTag && !matchSub) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // default 'popular'
      return b.reviewCount - a.reviewCount;
    });
  }, [selectedCategory, selectedFormat, selectedDifficulty, maxPrice, minRating, searchQuery, sortBy]);

  const activeFilterCount =
    (selectedCategory !== 'All' ? 1 : 0) +
    (selectedFormat !== 'All' ? 1 : 0) +
    (selectedDifficulty !== 'All' ? 1 : 0) +
    (maxPrice < 75 ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedFormat('All');
    setSelectedDifficulty('All');
    setMaxPrice(75);
    setMinRating(0);
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>Marketplace</span>
            <span>·</span>
            <span>{PRODUCTS.length} Curated Resources</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Explore All Resources
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Browse our complete catalog of evidence-based investment manuals, cash flow spreadsheets, retirement frameworks, and career compensation toolkits.
          </p>
        </div>

        {/* Search & Mobile Filter Toggle */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or tags..."
              className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-xs placeholder-slate-400 focus:outline-none focus:border-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Filter Catalog
            </h2>
            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 mb-2.5">Category</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat}</span>
                  {cat !== 'All' && (
                    <span className={`text-[10px] tabular-nums ${selectedCategory === cat ? 'text-slate-300' : 'text-slate-400'}`}>
                      {PRODUCTS.filter((p) => p.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Format Filter */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 mb-2.5">Format</h3>
            <div className="space-y-1">
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                    selectedFormat === fmt
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-xs font-semibold text-slate-800 mb-2.5">Difficulty</h3>
            <div className="space-y-1">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                    selectedDifficulty === diff
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Price Ceiling */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-800 mb-2">
              <span>Max Price</span>
              <span className="tabular-nums">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="20"
              max="75"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>$20</span>
              <span>$75</span>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9 space-y-6">
          {/* Controls Bar: Active filters & Sorting */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/80">
            <div className="text-xs text-slate-500">
              Showing <span className="font-semibold text-slate-900 tabular-nums">{filteredProducts.length}</span> of {PRODUCTS.length} resources
              {activeFilterCount > 0 && ` (${activeFilterCount} active filters)`}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-slate-800 text-slate-900 cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">No resources match your filters</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Try expanding your price range, clearing the search query, or resetting category selections to view available products.
              </p>
              <button
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Modal Drawer */}
      {mobileFiltersOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs lg:hidden flex justify-end"
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900">Filter Products</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Category */}
            <div>
              <h3 className="text-xs font-semibold text-slate-800 mb-2">Category</h3>
              <div className="grid grid-cols-2 gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Format */}
            <div>
              <h3 className="text-xs font-semibold text-slate-800 mb-2">Format</h3>
              <div className="space-y-1">
                {formats.map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors ${
                      selectedFormat === fmt
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Price */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-800 mb-2">
                <span>Max Price</span>
                <span className="tabular-nums">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="20"
                max="75"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={resetAllFilters}
                className="flex-1 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-lg"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
