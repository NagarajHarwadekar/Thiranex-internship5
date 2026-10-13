import React from 'react';
import { useFinovaStore } from '../store/finovaStore';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { BackButton } from '../components/BackButton';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useFinovaStore();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));
  const recommendedProducts = PRODUCTS.filter((p) => !wishlist.includes(p.id)).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Header */}
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span>Personal Vault</span>
          <span>·</span>
          <span>Locally Stored</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Saved Resources & Wishlist
        </h1>
        <p className="text-xs text-slate-600 mt-1">
          {savedProducts.length} resource(s) bookmarked for future study
        </p>
      </div>

      {/* Content */}
      {savedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Your wishlist is empty</h2>
          <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
            Click the heart icon on any investment guide, spreadsheet, or masterclass to save it here for later.
          </p>
          <div className="pt-2">
            <a
              href="#/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <span>Explore All Resources</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {recommendedProducts.length > 0 && (
        <section className="pt-10 border-t border-slate-200 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Recommended For You</h2>
            <p className="text-xs text-slate-500 mt-0.5">Popular curriculum essentials</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
