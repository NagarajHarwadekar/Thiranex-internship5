import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { SearchPage } from './pages/SearchPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { WishlistPage } from './pages/WishlistPage';
import { CartPage } from './pages/CartPage';
import { LearnHubPage } from './pages/LearnHubPage';
import { GuidesPage } from './pages/GuidesPage';
import { JournalPage } from './pages/JournalPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ToolsHubPage } from './pages/ToolsHubPage';
import { BudgetPlannerPage } from './pages/BudgetPlannerPage';
import { CompoundGrowthPage } from './pages/CompoundGrowthPage';
import { SavingsGoalPage } from './pages/SavingsGoalPage';
import { NetWorthPage } from './pages/NetWorthPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { GlobalBackNav } from './components/GlobalBackNav';
import { recordNavigation } from './utils/navigationTracker';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => {
    const initial = window.location.hash || '#/';
    recordNavigation(initial);
    return initial;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      recordNavigation(hash);
      setCurrentHash(hash);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Hash route parsing
  const renderRoute = () => {
    const rawPath = currentHash.replace(/^#\/?/, '').split('?')[0]; // clean leading #/ and strip query params
    const parts = rawPath.split('/').filter(Boolean);

    // Route matching
    if (parts.length === 0) {
      return <HomePage />;
    }

    const root = parts[0];

    switch (root) {
      case 'explore':
        return <ExplorePage />;

      case 'search':
        return <SearchPage />;

      case 'collections':
        return <CollectionsPage />;

      case 'product':
        if (parts[1]) {
          return <ProductDetailPage productId={parts[1]} />;
        }
        return <ExplorePage />;

      case 'wishlist':
        return <WishlistPage />;

      case 'cart':
        return <CartPage />;

      case 'learn':
        if (parts[1] === 'article' && parts[2]) {
          return <ArticleDetailPage slug={parts[2]} />;
        }
        return <LearnHubPage />;

      case 'guides':
        return <GuidesPage />;

      case 'journal':
        if (parts[1]) {
          return <ArticleDetailPage slug={parts[1]} />;
        }
        return <JournalPage />;

      case 'tools':
        if (parts[1] === 'budget') return <BudgetPlannerPage />;
        if (parts[1] === 'compound-growth') return <CompoundGrowthPage />;
        if (parts[1] === 'savings') return <SavingsGoalPage />;
        if (parts[1] === 'net-worth') return <NetWorthPage />;
        return <ToolsHubPage />;

      case 'about':
        return <AboutPage />;

      case 'faq':
        return <FaqPage />;

      case 'contact':
        return <ContactPage />;

      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Top Navigation */}
      <Navbar currentRoute={currentHash.replace('#', '') || '/'} />

      {/* Global Route-Aware Back Navigation (on all secondary/detail pages) */}
      <GlobalBackNav currentHash={currentHash} />

      {/* Main Page Stage */}
      <main key={currentHash} className="page-enter flex-1 w-full">
        {renderRoute()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Reactive Notifications */}
      <ToastContainer />
    </div>
  );
}
