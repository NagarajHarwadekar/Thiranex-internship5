import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { COLLECTIONS } from '../data/collections';
import { ARTICLES } from '../data/learning';
import { JOURNAL_STORIES } from '../data/journal';
import { FAQS } from '../data/faq';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { DeveloperSpotlight } from '../components/DeveloperSpotlight';
import { notifyToast } from '../store/finovaStore';
import { 
  ArrowRight, 
  TrendingUp, 
  Calculator, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight,
  ChevronDown,
  Sparkles,
  Target,
  Scale,
  Compass,
  ArrowUpRight,
  Star
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-01');

  // Product slices
  const featuredProducts = PRODUCTS.filter((p) => p.isBestseller).slice(0, 3);
  const trendingProducts = PRODUCTS.filter((p) => p.isTrending).slice(0, 3);
  const newArrivals = PRODUCTS.filter((p) => p.isNew || p.id === 'prod-33' || p.id === 'prod-34' || p.id === 'prod-35').slice(0, 3);
  const bestSellers = PRODUCTS.slice(3, 6);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    try {
      localStorage.setItem('finova_newsletter_subscribed', newsletterEmail);
    } catch (err) {
      console.warn(err);
    }
    setNewsletterSuccess(true);
    notifyToast('Subscribed to Finova Dispatch', 'Welcome to our weekly educational publication.');
  };

  const purposes = [
    { title: 'Start Investing', desc: 'Low-cost index funds, asset allocation & compounding', href: '#/collections', category: 'Investing' },
    { title: 'Build Better Habits', desc: 'Cognitive biases, money scripts & intentional spending', href: '#/explore?category=Financial%20Psychology', category: 'Financial Psychology' },
    { title: 'Understand Money', desc: 'Financial statements, yield curves & tax shields', href: '#/learn', category: 'Fundamentals' },
    { title: 'Plan Your Future', desc: 'Retirement guardrails, early FIRE & milestone modeling', href: '#/tools/compound-growth', category: 'Retirement' },
    { title: 'Optimize Career Income', desc: 'Salary negotiations, RSUs & equity compensation', href: '#/explore?category=Career%20%26%20Income', category: 'Career' },
    { title: 'Control Cash Flow', desc: 'Zero-based allocation, sinking funds & emergency tiers', href: '#/tools/budget', category: 'Budgeting' }
  ];

  const categories = [
    { name: 'Investing', count: 12, href: '#/explore?category=Investing' },
    { name: 'Budgeting', count: 8, href: '#/explore?category=Budgeting' },
    { name: 'Personal Finance', count: 9, href: '#/explore?category=Personal%20Finance' },
    { name: 'Career & Income', count: 7, href: '#/explore?category=Career%20%26%20Income' },
    { name: 'Financial Psychology', count: 6, href: '#/explore?category=Financial%20Psychology' },
    { name: 'Market Analysis', count: 5, href: '#/explore?category=Market%20Analysis' },
    { name: 'Retirement Planning', count: 4, href: '#/explore?category=Retirement%20Planning' },
    { name: 'Student & Early Career', count: 5, href: '#/explore?category=Student%20%26%20Early%20Career' }
  ];

  const testimonials = [
    {
      name: 'Dr. Marcus Vance',
      role: 'Biomedical Research Scientist',
      quote: 'Finova strips away the predatory hype that plagues modern financial media. The Cash Flow Architecture spreadsheet alone saved our household hours of monthly anxiety.',
      verified: true
    },
    {
      name: 'Elena Rostova',
      role: 'Staff Product Designer',
      quote: 'The visual clarity and pedagogical rigor are exceptional. Understanding asset location across Roth, 401(k), and taxable brokerage accounts finally clicked for me.',
      verified: true
    },
    {
      name: 'Devon Wright',
      role: 'Full-Stack Software Engineer',
      quote: 'No chatbots, no fake guru nonsense—just cold, clean mathematics and battle-tested spreadsheets. The Compound Growth tool is now bookmarked on all my devices.',
      verified: true
    }
  ];

  return (
    <div className="space-y-20 lg:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-bold tracking-wider uppercase text-slate-800">FINOVA PLATFORM</span>
                <span aria-hidden="true">·</span>
                <span>Evidence-Based Wealth & Literacy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
                Smarter Money. Better Choices.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                A premium digital marketplace and financial learning platform. Combine professional spreadsheets and guides with interactive tools, zero-hype investing curriculum, and calm money management.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#/explore"
                  className="liquid-sheen tactile-btn px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#/tools"
                  className="tactile-btn px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer border border-slate-200/80"
                >
                  <Calculator className="w-4 h-4 text-slate-600" />
                  <span>Launch Financial Tools</span>
                </a>
              </div>

              {/* Value Indicator Strip */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-xl font-bold text-slate-900 block tabular-nums">40+</span>
                  <span className="text-slate-500 text-[11px]">Curated Toolkits</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-900 block tabular-nums">100%</span>
                  <span className="text-slate-500 text-[11px]">Client-Side Private</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-900 block tabular-nums">0%</span>
                  <span className="text-slate-500 text-[11px]">Speculative Hype</span>
                </div>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
                  alt="Finova financial platform workstation"
                  fallbackTitle="Finova Workstation"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Depth Card: Compounding Simulator */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">The Compounding Advantage</span>
                      <span className="text-[11px] text-slate-500">$500/mo @ 8% = $475k in 25 Years</span>
                    </div>
                  </div>
                  <a
                    href="#/tools/compound-growth"
                    className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 shrink-0 ml-2"
                  >
                    <span>Simulate</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE & TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Curated Resources</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              40+ individually written blueprints, spreadsheets, and guides.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Practical Learning</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Jargon-free articles, action roadmaps, and complete financial glossaries.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Smart Money Tools</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Client-authoritative budget, compound, goal, and net worth calculators.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Zero Telemetry</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              100% private in your browser. No ad trackers or financial surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY PURPOSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
            Goal-Oriented Pathways
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Explore by What You Want to Accomplish
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {purposes.map((p, idx) => (
            <a
              key={idx}
              href={p.href}
              className="group p-6 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  {p.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
                <span>View Resources</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Curated Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Flagship Resources
            </h2>
          </div>
          <a
            href="#/explore"
            className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1 shrink-0"
          >
            <span>View All {PRODUCTS.length} Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 5. TRENDING SECTION - ASYMMETRIC TREATMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              High Velocity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Trending Across Finova
            </h2>
          </div>
          <span className="text-xs text-slate-500">Most engaged by community</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trendingProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 6. HOW FINOVA WORKS - 3-STEP POLISHED EXPLANATION */}
      <section className="bg-slate-900 text-white rounded-2xl mx-4 sm:mx-6 lg:mx-8 p-8 sm:p-14 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Systematic Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How Finova Accelerates Financial Agency
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Move from financial anxiety to calm operational mastery in three disciplined phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <span className="text-xl font-mono font-extrabold text-slate-400 block">01</span>
            <h3 className="text-base font-bold text-white">Diagnose & Calculate</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Launch our private client-side calculators to audit your monthly burn rate, establish true bare-bones survival reserves, and map total household net worth.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <span className="text-xl font-mono font-extrabold text-slate-400 block">02</span>
            <h3 className="text-base font-bold text-white">Deploy Tactical Blueprints</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Acquire structured spreadsheets and step-by-step PDF manuals tailored to your situation: index fund allocations, zero-based cash flow systems, or debt elimination.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <span className="text-xl font-mono font-extrabold text-slate-400 block">03</span>
            <h3 className="text-base font-bold text-white">Automate & Compound</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Configure bank routing rules and recurring automatic index investments. Disconnect from financial news and allow compound interest to perform the work.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINANCIAL CATEGORIES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
            Taxonomy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Browse by Financial Category
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="p-5 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between"
            >
              <div>
                <h3 className="text-xs font-bold text-slate-900">{cat.name}</h3>
                <span className="text-[11px] text-slate-500">{cat.count} resources</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          ))}
        </div>
      </section>

      {/* 8. EDITORIAL COLLECTIONS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Curated Bundles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Editorial Collections
            </h2>
          </div>
          <a
            href="#/collections"
            className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
          >
            <span>View All {COLLECTIONS.length} Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.slice(0, 3).map((col) => (
            <a
              key={col.id}
              href={`#/collections`}
              className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={col.image}
                  alt={col.title}
                  fallbackTitle={col.title}
                  fallbackCategory={col.badgeText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {col.badgeText} · {col.productCount} items
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {col.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
                  <span>Explore Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 9. FEATURED EDITORIAL STORY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Featured Journal Essay
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              The Illusion of Financial Speed
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Why the quietest, least exciting investment decisions generate the highest lifetime returns. Moving away from breaking-news frenzy and reconnecting with the peace of automated broad-market compounding.
            </p>
            <div className="pt-2">
              <a
                href="#/journal/the-illusion-of-financial-speed"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <span>Read Full Essay (7 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-[16/10] rounded-xl overflow-hidden border border-slate-200">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
              alt="The Illusion of Financial Speed"
              fallbackTitle="Editorial Essay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 10. FINANCIAL TOOLS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
              Interactive Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Client-Authoritative Calculators
            </h2>
          </div>
          <a
            href="#/tools"
            className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
          >
            <span>All 4 Tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="#/tools/budget"
            className="p-6 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs space-y-3 block"
          >
            <Calculator className="w-5 h-5 text-slate-800" />
            <h3 className="text-sm font-bold text-slate-900">Budget Planner</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero-based cash flow allocation & 50/30/20 benchmark diagnostics.
            </p>
          </a>

          <a
            href="#/tools/compound-growth"
            className="p-6 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs space-y-3 block"
          >
            <TrendingUp className="w-5 h-5 text-slate-800" />
            <h3 className="text-sm font-bold text-slate-900">Compound Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dynamic exponential curve simulating 40 years of monthly contributions.
            </p>
          </a>

          <a
            href="#/tools/savings"
            className="p-6 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs space-y-3 block"
          >
            <Target className="w-5 h-5 text-slate-800" />
            <h3 className="text-sm font-bold text-slate-900">Savings Goal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Forecast milestone dates with acceleration scenarios and HYSA APY.
            </p>
          </a>

          <a
            href="#/tools/net-worth"
            className="p-6 bg-white rounded-xl border border-slate-200/90 hover:border-slate-300 shadow-2xs space-y-3 block"
          >
            <Scale className="w-5 h-5 text-slate-800" />
            <h3 className="text-sm font-bold text-slate-900">Net Worth Snapshot</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Household balance sheet with debt-to-asset and liquid solvency ratios.
            </p>
          </a>
        </div>
      </section>

      {/* 11. COMMUNITY REVIEWS / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">
            Community Reflections
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Trusted by Serious Practitioners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-900 block">{t.name}</span>
                <span className="text-slate-500">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Answers & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Commonly Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {FAQS.slice(0, 4).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-slate-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <a href="#/faq" className="text-xs font-semibold text-slate-900 hover:underline">
            Read all {FAQS.length} Frequently Asked Questions →
          </a>
        </div>
      </section>

      {/* 13. DEVELOPER SPOTLIGHT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeveloperSpotlight />
      </div>

      {/* 14. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Begin Your Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Build Wealth with Mathematical Discipline
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Explore 40+ evidence-based manuals, download cash flow systems, and test interactive financial calculators without sales friction.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="#/explore"
              className="liquid-sheen tactile-btn px-6 py-3 bg-white text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-xs cursor-pointer"
            >
              Browse All Resources
            </a>
            <a
              href="#/tools"
              className="tactile-btn px-6 py-3 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-700 transition-all cursor-pointer border border-slate-700/60"
            >
              Launch Calculators
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
