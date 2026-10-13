import React from 'react';
import { Product } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
import { useFinovaStore } from '../store/finovaStore';
import { Heart, ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useFinovaStore();
  const isWishlisted = isInWishlist(product.id);

  const handleCardClick = () => {
    window.location.hash = `#/product/${product.id}`;
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <article
      onClick={handleCardClick}
      className="group relative flex flex-col liquid-metal-card rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-xs transition-all duration-200 cursor-pointer overflow-hidden"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          fallbackTitle={product.name}
          fallbackCategory={product.category}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          className={`tactile-btn absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-all cursor-pointer ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-2xs scale-105'
              : 'bg-white/90 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-white shadow-xs'
          }`}
        >
          <Heart className={`w-4 h-4 transition-transform duration-150 ${isWishlisted ? 'fill-rose-500 scale-110' : ''}`} />
        </button>

        {/* Quick Add Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={handleAddToCartClick}
            className="liquid-sheen tactile-btn w-full py-2.5 px-4 bg-slate-900/95 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart · ${product.price}</span>
          </button>
        </div>
      </div>

      {/* Product Information - Zero-Pill Typography */}
      <div className="flex flex-col flex-1 p-4">
        {/* Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-600">
            {product.category}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{product.format.split('&')[0].trim()}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{product.difficulty}</span>
        </div>

        {/* Product Title */}
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Footer: Rating & Pricing */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-slate-900 tabular-nums">{product.rating}</span>
            <span className="text-slate-400">({product.reviewCount})</span>
          </div>

          <div className="flex items-baseline gap-2">
            {product.oldPrice && (
              <span className="text-xs text-slate-400 line-through tabular-nums">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-base font-bold text-slate-900 tabular-nums">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
