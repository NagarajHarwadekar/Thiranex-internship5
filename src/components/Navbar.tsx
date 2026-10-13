import React, { useState, useEffect } from 'react';
import { useFinovaStore } from '../store/finovaStore';
import { Search, ShoppingBag, Heart, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute }) => {
  const { totalItemCount, wishlist } = useFinovaStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  const navLinks = [
    { label: 'Explore', href: '#/explore' },
    { label: 'Collections', href: '#/collections' },
    { label: 'Learn', href: '#/learn' },
    { label: 'Tools', href: '#/tools' },
    { label: 'Journal', href: '#/journal' },
    { label: 'About', href: '#/about' }
  ];

  const isActive = (href: string) => {
    const path = href.replace('#', '');
    if (path === '/') return currentRoute === '/' || currentRoute === '';
    return currentRoute.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80'
            : 'bg-white border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#/"
              className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-xs">
                F
              </span>
              <span>FINOVA</span>
            </a>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isActive(link.href)
                    ? 'text-slate-900 font-semibold border-b-2 border-slate-900'
                    : 'hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Functional Interactive Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Button */}
            <a
              href="#/search"
              aria-label="Open universal search"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Search className="w-4 h-4" />
            </a>

            {/* Wishlist Link */}
            <a
              href="#/wishlist"
              aria-label={`Wishlist, ${wishlist.length} saved items`}
              className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {wishlist.length}
                </span>
              )}
            </a>

            {/* Cart Button */}
            <a
              href="#/cart"
              aria-label={`Shopping bag, ${totalItemCount} items`}
              className="flex items-center gap-2 py-2 px-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded text-[11px] tabular-nums">
                {totalItemCount}
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-slate-100 text-slate-900 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Calculators & Tools
                </span>
                <a
                  href="#/tools/budget"
                  className="py-2 px-3 text-xs text-slate-600 hover:text-slate-900"
                >
                  Budget Planner
                </a>
                <a
                  href="#/tools/compound-growth"
                  className="py-2 px-3 text-xs text-slate-600 hover:text-slate-900"
                >
                  Compound Growth
                </a>
                <a
                  href="#/tools/savings"
                  className="py-2 px-3 text-xs text-slate-600 hover:text-slate-900"
                >
                  Savings Goal
                </a>
                <a
                  href="#/tools/net-worth"
                  className="py-2 px-3 text-xs text-slate-600 hover:text-slate-900"
                >
                  Net Worth Snapshot
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              <p className="font-semibold text-slate-800">FINOVA</p>
              <p className="mt-0.5">Smarter Money. Better Choices.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
