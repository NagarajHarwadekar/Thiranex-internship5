import { useState, useEffect } from 'react';
import { Product, CartItem, ToastMessage } from '../types';
import { PRODUCTS } from '../data/products';

const CART_KEY = 'finova_cart_v1';
const WISHLIST_KEY = 'finova_wishlist_v1';
const RECENT_KEY = 'finova_recent_v1';
const NEWSLETTER_KEY = 'finova_newsletter_v1';

// Custom event dispatcher for cross-component reactive sync
const dispatchStoreEvent = (name: string) => {
  window.dispatchEvent(new Event(name));
};

export const getStoredCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    // Hydrate products with fresh PRODUCTS references if possible
    return parsed.map((item: { productId: string; quantity: number }) => {
      const prod = PRODUCTS.find((p) => p.id === item.productId);
      return prod ? { product: prod, quantity: Math.max(1, item.quantity) } : null;
    }).filter(Boolean) as CartItem[];
  } catch (e) {
    console.warn('Failed to load cart from localStorage', e);
    return [];
  }
};

export const saveCart = (items: CartItem[]) => {
  try {
    const simplified = items.map((i) => ({ productId: i.product.id, quantity: i.quantity }));
    localStorage.setItem(CART_KEY, JSON.stringify(simplified));
    dispatchStoreEvent('finova:cart-updated');
  } catch (e) {
    console.warn('Failed to save cart', e);
  }
};

export const getStoredWishlist = (): string[] => {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const saveWishlist = (ids: string[]) => {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
    dispatchStoreEvent('finova:wishlist-updated');
  } catch (e) {
    console.warn('Failed to save wishlist', e);
  }
};

export const getStoredRecent = (): string[] => {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

export const saveRecent = (ids: string[]) => {
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(ids.slice(0, 8)));
    dispatchStoreEvent('finova:recent-updated');
  } catch (e) {
    console.warn('Failed to save recent', e);
  }
};

// Global toast listeners
type ToastListener = (toast: ToastMessage) => void;
const toastListeners = new Set<ToastListener>();

export const notifyToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' = 'success') => {
  const toast: ToastMessage = {
    id: `toast-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    title,
    description,
    type
  };
  toastListeners.forEach((fn) => fn(toast));
};

export const subscribeToasts = (listener: ToastListener) => {
  toastListeners.add(listener);
  return () => {
    toastListeners.delete(listener);
  };
};

// React hook for complete Finova state
export const useFinovaStore = () => {
  const [cart, setCart] = useState<CartItem[]>(getStoredCart);
  const [wishlist, setWishlist] = useState<string[]>(getStoredWishlist);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(getStoredRecent);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  useEffect(() => {
    const handleCartSync = () => setCart(getStoredCart());
    const handleWishlistSync = () => setWishlist(getStoredWishlist());
    const handleRecentSync = () => setRecentlyViewed(getStoredRecent());

    window.addEventListener('finova:cart-updated', handleCartSync);
    window.addEventListener('finova:wishlist-updated', handleWishlistSync);
    window.addEventListener('finova:recent-updated', handleRecentSync);

    return () => {
      window.removeEventListener('finova:cart-updated', handleCartSync);
      window.removeEventListener('finova:wishlist-updated', handleWishlistSync);
      window.removeEventListener('finova:recent-updated', handleRecentSync);
    };
  }, []);

  const addToCart = (product: Product, quantity = 1) => {
    const existingIndex = cart.findIndex((item) => item.product.id === product.id);
    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cart];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [...cart, { product, quantity }];
    }
    setCart(updated);
    saveCart(updated);
    notifyToast('Added to Cart', `${product.name} is now in your bag.`);
  };

  const removeFromCart = (productId: string) => {
    const item = cart.find((i) => i.product.id === productId);
    const updated = cart.filter((i) => i.product.id !== productId);
    setCart(updated);
    saveCart(updated);
    if (item) {
      notifyToast('Removed from Cart', `${item.product.name} was removed.`, 'info');
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updated = cart.map((i) => (i.product.id === productId ? { ...i, quantity } : i));
    setCart(updated);
    saveCart(updated);
  };

  const clearCart = () => {
    setCart([]);
    saveCart([]);
    notifyToast('Cart Emptied', 'All items have been removed.', 'info');
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.includes(product.id);
    let updated: string[];
    if (exists) {
      updated = wishlist.filter((id) => id !== product.id);
      notifyToast('Removed from Wishlist', `${product.name} removed from saved items.`, 'info');
    } else {
      updated = [...wishlist, product.id];
      notifyToast('Saved to Wishlist', `${product.name} added to your wishlist.`);
    }
    setWishlist(updated);
    saveWishlist(updated);
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const addRecentlyViewed = (productId: string) => {
    const filtered = recentlyViewed.filter((id) => id !== productId);
    const updated = [productId, ...filtered].slice(0, 8);
    setRecentlyViewed(updated);
    saveRecent(updated);
  };

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FINOVA10') {
      setPromoCode('FINOVA10');
      setDiscountPercent(0.10);
      notifyToast('Promo Applied', '10% discount has been applied to your order.');
      return { success: true, message: '10% discount applied!' };
    }
    if (clean === 'CAPSTONE' || clean === 'STUDENT') {
      setPromoCode(clean);
      setDiscountPercent(0.15);
      notifyToast('Promo Applied', '15% capstone student discount applied!');
      return { success: true, message: '15% capstone discount applied!' };
    }
    notifyToast('Invalid Code', 'Try FINOVA10 or CAPSTONE for demo discounts.', 'warning');
    return { success: false, message: 'Invalid code. Try FINOVA10 or CAPSTONE.' };
  };

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discountPercent * 100) / 100;
  const estimatedTotal = Math.max(0, subtotal - discountAmount);
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    wishlist,
    recentlyViewed,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleWishlist,
    isInWishlist,
    addRecentlyViewed,
    promoCode,
    discountPercent,
    applyPromo,
    subtotal,
    discountAmount,
    estimatedTotal,
    totalItemCount
  };
};
