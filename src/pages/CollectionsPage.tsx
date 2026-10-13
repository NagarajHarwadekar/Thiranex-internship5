import React from 'react';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BackButton } from '../components/BackButton';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Top Navigation */}
      <div className="flex items-center justify-between pb-2">
        <BackButton fallback="#/explore" label="Back to Catalog" />
      </div>

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>Editorial Curation</span>
          <span>·</span>
          <span>{COLLECTIONS.length} Purpose-Built Pathways</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Curated Financial Collections
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Structured learning bundles assembled for specific life stages: landing your first job, untangling consumer debt, setting up three-fund index portfolios, or building multi-year capital strategies.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {COLLECTIONS.map((col) => {
          const featuredProducts = PRODUCTS.filter((p) => col.featuredProductIds.includes(p.id)).slice(0, 3);

          return (
            <article
              key={col.id}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* Cover Artwork */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={col.image}
                  alt={col.title}
                  fallbackTitle={col.title}
                  fallbackCategory={col.badgeText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-200 block mb-1">
                    {col.badgeText} · {col.productCount} Curated Resources
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {col.title}
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    {col.subtitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {col.description}
                  </p>

                  {/* Included Titles Preview */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Featured in this pathway:
                    </span>
                    <div className="space-y-1.5">
                      {featuredProducts.map((p) => (
                        <a
                          key={p.id}
                          href={`#/product/${p.id}`}
                          className="flex items-center justify-between text-xs font-medium text-slate-800 hover:text-slate-900 group/link"
                        >
                          <span className="truncate pr-2 group-hover/link:underline">{p.name}</span>
                          <span className="text-slate-500 tabular-nums shrink-0">${p.price}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Complete Collection
                  </span>
                  <a
                    href={`#/explore`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
