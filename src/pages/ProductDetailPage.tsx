import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useFinovaStore } from '../store/finovaStore';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ProductCard } from '../components/ProductCard';
import { BackButton } from '../components/BackButton';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Check, 
  ShieldCheck, 
  DownloadCloud, 
  RefreshCw, 
  Clock, 
  FileText,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const { addToCart, toggleWishlist, isInWishlist, addRecentlyViewed, recentlyViewed } = useFinovaStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const isWishlisted = isInWishlist(product.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      addRecentlyViewed(product.id);
      setSelectedImage(product.image);
    }
  }, [productId, product?.id]);

  const relatedProducts = PRODUCTS.filter(
    (p) => product.relatedProductIds.includes(p.id) || (p.category === product.category && p.id !== product.id)
  ).slice(0, 3);

  const recentlyViewedProducts = PRODUCTS.filter(
    (p) => recentlyViewed.includes(p.id) && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href="#/explore" className="hover:text-slate-900 transition-colors">Explore</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href={`#/explore?category=${encodeURIComponent(product.category)}`} className="hover:text-slate-900 transition-colors">
            {product.category}
          </a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main PDP Grid: Gallery Left + Contiguous Purchase Module Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 shadow-xs">
            <ImageWithFallback
              src={selectedImage || product.image}
              alt={product.name}
              fallbackTitle={product.name}
              fallbackCategory={product.category}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-[4/3] w-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === img ? 'border-slate-900 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            {/* Zero-Pill Unboxed Metadata Header */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-slate-700">
                {product.category}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{product.subcategory}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{product.difficulty}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {product.name}
            </h1>

            {/* Ratings and Reviews */}
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-600">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-slate-900 tabular-nums">{product.rating}</span>
              <span className="text-slate-400">·</span>
              <a href="#reviews" className="hover:text-slate-900 underline text-slate-500">
                {product.reviewCount} verified reviews
              </a>
            </div>
          </div>

          {/* Pricing Block */}
          <div className="flex items-baseline gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
              ${product.price}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-base text-slate-400 line-through tabular-nums">
                  ${product.oldPrice}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  Save ${product.oldPrice - product.price}
                </span>
              </>
            )}
          </div>

          {/* Short Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quantity and Primary Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-3 py-2 text-xs font-bold text-slate-900 tabular-nums min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="liquid-sheen tactile-btn flex-1 py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag · ${(product.price * quantity).toFixed(2)}</span>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`tactile-btn p-3 rounded-lg border transition-all cursor-pointer ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-600 shadow-2xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Value Props Strip */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <DownloadCloud className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Instant Digital Delivery · Immediate download access upon checkout</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RefreshCw className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Lifetime Updates · Includes future annual tax and formula revisions</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
              <span>Evidence-Based · Zero speculative hype or unverified financial claims</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum & What You'll Learn */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 border-t border-slate-200">
        <div className="lg:col-span-8 space-y-10">
          {/* Learning Outcomes Checklist */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              What You'll Learn & Implement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.learningOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-2xs flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* In-Depth Overview */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Comprehensive Overview</h2>
            <div className="prose prose-slate prose-sm text-slate-600 leading-relaxed space-y-4">
              <p>{product.longDescription}</p>
            </div>
          </div>

          {/* Included Features */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">What's Included in This Resource</h2>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Reviews Section */}
          <div id="reviews" className="pt-6 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Customer Reviews</h2>
                <p className="text-xs text-slate-500 mt-1">Verified community feedback</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{product.rating} / 5.0</span>
              </div>
            </div>

            <div className="space-y-4">
              {product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-slate-900">{rev.author}</span>
                      <span className="text-xs text-slate-500 ml-2">· {rev.role}</span>
                    </div>
                    <span className="text-xs text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <h4 className="text-xs font-semibold text-slate-900">{rev.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Technical Specifications
            </h3>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Format</span>
                <span className="font-semibold text-slate-900">{product.format}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Scope</span>
                <span className="font-semibold text-slate-900">{product.pagesOrModules}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Study Duration</span>
                <span className="font-semibold text-slate-900">{product.duration}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Skill Level</span>
                <span className="font-semibold text-slate-900">{product.difficulty}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500">Collection</span>
                <a
                  href={`#/collections`}
                  className="font-semibold text-slate-900 hover:underline"
                >
                  {product.collectionSlug}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Topic Tags
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Related Resources</h2>
              <p className="text-xs text-slate-500 mt-0.5">Complementary study materials in {product.category}</p>
            </div>
            <a href="#/explore" className="text-xs font-semibold text-slate-900 hover:underline">
              View All Resources →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Recently Viewed Products */}
      {recentlyViewedProducts.length > 0 && (
        <section className="pt-12 border-t border-slate-200 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recently Viewed</h2>
            <p className="text-xs text-slate-500 mt-0.5">Items from your current browsing session</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyViewedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
