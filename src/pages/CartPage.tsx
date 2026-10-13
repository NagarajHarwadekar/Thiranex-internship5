import React, { useState } from 'react';
import { useFinovaStore, notifyToast } from '../store/finovaStore';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BackButton } from '../components/BackButton';
import { ShoppingBag, Trash2, ArrowRight, CheckCircle2, ShieldCheck, Tag, X } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    estimatedTotal,
    promoCode,
    applyPromo
  } = useFinovaStore();

  const [inputPromo, setInputPromo] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Checkout form fields
  const [formData, setFormData] = useState({
    name: 'Demo Customer',
    email: 'reader@finova.local',
    institution: 'Independent Learner'
  });

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    applyPromo(inputPromo);
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `FIN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setOrderComplete(true);
    clearCart();
    notifyToast('Order Confirmed', `Order ${generatedId} was placed successfully!`);
  };

  if (orderComplete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Demo Order Confirmed
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Thank You For Testing Finova
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Your simulated order reference is <strong className="text-slate-900 font-mono">{orderId}</strong>. In a live deployment, digital download links and license credentials would be delivered immediately to <span className="font-semibold text-slate-800">{formData.email}</span>.
        </p>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 text-left max-w-md mx-auto space-y-3 text-xs">
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Order Number</span>
            <span className="font-mono font-bold text-slate-900">{orderId}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Customer</span>
            <span className="font-medium text-slate-900">{formData.name}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Delivery Status</span>
            <span className="text-emerald-700 font-semibold">Immediate Cloud Access (Demo)</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Simulated Total</span>
            <span className="font-bold text-slate-900">${estimatedTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <a
            href="#/explore"
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Continue Exploring
          </a>
          <a
            href="#/tools"
            className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Launch Financial Tools
          </a>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Your shopping bag is empty</h1>
        <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Explore our collection of investment blueprints, cash flow spreadsheets, retirement frameworks, and career compensation guides.
        </p>
        <div className="pt-2">
          <a
            href="#/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
          >
            <span>Browse All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Shopping Bag
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} item(s) selected
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1.5"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Empty Bag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Item List */}
        <div className="lg:col-span-8 divide-y divide-slate-100">
          {cart.map(({ product, quantity }) => (
            <div key={product.id} className="py-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              {/* Product Thumbnail */}
              <a
                href={`#/product/${product.id}`}
                className="w-24 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  fallbackTitle={product.name}
                  fallbackCategory={product.category}
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Title & Metadata */}
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  {product.category} · {product.format.split('&')[0]}
                </div>
                <a
                  href={`#/product/${product.id}`}
                  className="text-sm font-semibold text-slate-900 hover:text-slate-700 transition-colors block truncate"
                >
                  {product.name}
                </a>
                <div className="text-xs text-slate-500 mt-0.5">
                  ${product.price} each
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center border border-slate-200 rounded-lg bg-white shrink-0">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-2.5 py-1 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-2.5 py-1 text-xs font-bold text-slate-900 tabular-nums min-w-[28px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-2.5 py-1 text-slate-600 hover:text-slate-900 text-xs font-semibold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Total Item Price */}
              <div className="text-sm font-bold text-slate-900 tabular-nums shrink-0 min-w-[65px] text-right">
                ${(product.price * quantity).toFixed(2)}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md transition-colors"
                aria-label={`Remove ${product.name} from cart`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}

          <div className="pt-6">
            <a href="#/explore" className="text-xs font-semibold text-slate-900 hover:underline">
              ← Continue shopping
            </a>
          </div>
        </div>

        {/* Order Summary & Demo Checkout */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          <h2 className="text-base font-semibold text-slate-900">Order Summary</h2>

          {/* Pricing Breakdown */}
          <div className="space-y-3 text-xs border-b border-slate-100 pb-4">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900 tabular-nums">${subtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-emerald-700">
                <span>Discount ({promoCode})</span>
                <span className="font-semibold tabular-nums">-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-600">
              <span>Digital Delivery</span>
              <span className="font-medium text-slate-900">Free (Immediate)</span>
            </div>

            <div className="flex justify-between text-slate-600">
              <span>Estimated Tax</span>
              <span className="tabular-nums">$0.00</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold text-slate-900">Estimated Total</span>
            <span className="text-2xl font-extrabold text-slate-900 tabular-nums">
              ${estimatedTotal.toFixed(2)}
            </span>
          </div>

          {/* Promo Code Input */}
          <form onSubmit={handleApplyPromo} className="space-y-2">
            <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Promo Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputPromo}
                onChange={(e) => setInputPromo(e.target.value)}
                placeholder="Try FINOVA10 or CAPSTONE"
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs uppercase placeholder:normal-case placeholder-slate-400 focus:outline-none focus:border-slate-800"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Checkout Button */}
          <button
            onClick={() => setIsCheckingOut(true)}
            className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <span>Proceed to Demo Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>Capstone Simulation · No Payment Required</span>
          </div>
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {isCheckingOut && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsCheckingOut(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Internship Capstone Simulation
                </span>
                <h2 className="text-xl font-bold text-slate-900">Demo Checkout</h2>
              </div>
              <button
                onClick={() => setIsCheckingOut(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              This is a demonstration checkout experience. No real payment credentials are required or processed. Complete the form below to simulate instant digital order delivery.
            </p>

            <form onSubmit={handleCompleteOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Delivery Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-slate-800"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Order Total:</span>
                  <span className="font-bold text-slate-900 tabular-nums">${estimatedTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Digital Items:</span>
                  <span className="font-medium text-slate-900">{cart.length} item(s)</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Confirm Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
