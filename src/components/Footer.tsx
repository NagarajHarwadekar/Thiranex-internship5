import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { notifyToast } from '../store/finovaStore';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    try {
      localStorage.setItem('finova_newsletter_subscribed', email);
    } catch (err) {
      console.warn(err);
    }
    setSubscribed(true);
    notifyToast('Subscribed to Finova Dispatch', 'Thank you for subscribing to our weekly educational digest.');
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Newsletter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              The Finova Weekly Dispatch
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
              Thoughtful essays on portfolio mechanics, tax minimization, behavioral habits, and evidence-based personal finance. Zero spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 py-2.5 px-4 bg-emerald-950/60 border border-emerald-800/80 rounded-lg text-emerald-300 text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>You are subscribed. Welcome to the Finova Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Brand Lockup */}
        <div className="col-span-2 lg:col-span-1 space-y-4">
          <a href="#/" className="flex items-center gap-2 text-white">
            <span className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-display font-extrabold text-sm">
              F
            </span>
            <span className="text-xl font-bold tracking-tight">FINOVA</span>
          </a>
          <p className="text-xs text-slate-400 leading-relaxed">
            Smarter Money. Better Choices. A premier digital marketplace, interactive financial calculators, and evidence-based money curriculum.
          </p>
          <div className="pt-2 text-xs text-slate-500">
            <p className="font-semibold text-slate-400">Developed by Nagaraj Harwadekar</p>
            <p className="mt-0.5">Computer Science & Engineering Student</p>
          </div>
        </div>

        {/* Column 1: Explore */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#/explore" className="hover:text-white transition-colors">All Products</a></li>
            <li><a href="#/collections" className="hover:text-white transition-colors">Collections</a></li>
            <li><a href="#/explore?filter=new" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#/explore?filter=bestseller" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="#/wishlist" className="hover:text-white transition-colors">Saved Items</a></li>
          </ul>
        </div>

        {/* Column 2: Learn */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Learn
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#/learn" className="hover:text-white transition-colors">Learn Hub</a></li>
            <li><a href="#/guides" className="hover:text-white transition-colors">Roadmaps & Guides</a></li>
            <li><a href="#/journal" className="hover:text-white transition-colors">Finova Journal</a></li>
            <li><a href="#/learn#glossary" className="hover:text-white transition-colors">Financial Glossary</a></li>
            <li><a href="#/search" className="hover:text-white transition-colors">Resource Search</a></li>
          </ul>
        </div>

        {/* Column 3: Tools */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Calculators
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#/tools" className="hover:text-white transition-colors">Calculators Overview</a></li>
            <li><a href="#/tools/budget" className="hover:text-white transition-colors">Budget Planner</a></li>
            <li><a href="#/tools/compound-growth" className="hover:text-white transition-colors">Compound Growth</a></li>
            <li><a href="#/tools/savings" className="hover:text-white transition-colors">Savings Goal</a></li>
            <li><a href="#/tools/net-worth" className="hover:text-white transition-colors">Net Worth Snapshot</a></li>
          </ul>
        </div>

        {/* Column 4: Company & Legal */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#/about" className="hover:text-white transition-colors">About Finova</a></li>
            <li><a href="#/faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            <li><a href="#/contact" className="hover:text-white transition-colors">Contact Support</a></li>
            <li><a href="#/cart" className="hover:text-white transition-colors">Demo Cart & Checkout</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p className="text-center md:text-left leading-relaxed">
          © {new Date().getFullYear()} FINOVA. Web Development Internship Capstone Project. All content, tools, and checkout workflows are for educational demonstration. Not licensed financial advice.
        </p>

        <p className="shrink-0 text-slate-400 font-medium">
          Developed by <span className="text-white font-semibold">Nagaraj Harwadekar</span>
        </p>
      </div>
    </footer>
  );
};
