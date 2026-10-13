import React from 'react';
import { ArrowLeft, Search, Compass, Home } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 lg:py-28 text-center space-y-6">
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        Error 404 · Unmapped Route
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        The financial resource or path you requested does not exist or has been relocated to another section of the Finova catalog.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </a>
        <a
          href="#/explore"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Explore All Resources</span>
        </a>
        <a
          href="#/search"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Search Catalog</span>
        </a>
      </div>
    </div>
  );
};
