# FINOVA — Smarter Money. Better Choices.

A premier modern financial marketplace, interactive money tools, and comprehensive financial learning platform.

> **Web Development Internship Capstone Project**  
> **Developed by:** Nagaraj Harwadekar  
> **Role:** Computer Science & Engineering Student  
> **Focus:** Modern Web Development, Fintech & Software Engineering  

---

## 1. Project Overview

**Finova** combines an e-commerce-style digital resource marketplace with an educational financial ecosystem and suite of interactive client-side calculators. The platform is designed to replace speculative hype and predatory financial marketing with evidence-based principles, transparent mathematics, and calm human agency.

### Core Pillars
- **Curated Marketplace:** 40+ individually written financial manuals, spreadsheet operating systems, and masterclass workbooks.
- **Client-Authoritative Tools:** 4 private calculators (Zero-Based Budget Planner, Compound Growth Model, Savings Goal Milestone Forecaster, and Personal Net Worth Snapshot) that execute 100% locally in the browser with zero external network telemetry.
- **Learning Ecosystem:** Learn Hub with 12+ deep-dive articles, 3 comprehensive execution roadmaps, and 20+ searchable glossary definitions.
- **Editorial Journal:** High-fidelity magazine-grade essays on investor psychology, market history, and lifestyle creep.
- **Demo E-Commerce Architecture:** Persistent shopping cart, quantity controls, promo code engine (`FINOVA10`, `CAPSTONE`), wishlist storage, recently viewed tracking, and simulated order generation.

---

## 2. Technology Stack & Architecture

- **Core Framework:** React 19 SPA with TypeScript (`strict: true`)
- **Styling & Design System:** Tailwind CSS v4, custom Plus Jakarta Sans & Outfit typography, subtle glassmorphic panels, zero-pill metadata discipline
- **Icons:** Lucide React
- **Routing:** Zero-dependency client-side Hash Router (`#/`, `#/explore`, `#/tools`, etc.)
- **Persistence:** LocalStorage synchronization with custom event bus for multi-component reactivity
- **Zero-Backend Design:** 100% static frontend deployment ready for Vercel, Netlify, or GitHub Pages. Zero API keys, zero paid third-party dependencies.

---

## 3. Directory Structure

```
finova/
├── index.html                   # Entry HTML with SEO tags & Google Fonts
├── metadata.json                # Project branding metadata
├── package.json                 # Dependencies & build scripts
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite build configuration
└── src/
    ├── main.tsx                 # React entry point
    ├── App.tsx                  # Root router & layout orchestrator
    ├── index.css                # Tailwind 4 imports & base typography
    ├── types/
    │   └── index.ts             # TypeScript domain models
    ├── data/
    │   ├── products.ts          # 40+ rich financial products dataset
    │   ├── collections.ts       # 8 curated editorial pathways
    │   ├── learning.ts          # Articles, guides & glossary terms
    │   ├── journal.ts           # 6 magazine editorial stories
    │   └── faq.ts               # 16 categorized questions & answers
    ├── store/
    │   └── finovaStore.ts       # LocalStorage state (Cart, Wishlist, Recent, Toasts)
    ├── components/
    │   ├── Navbar.tsx           # 3-zone top bar with mobile navigation drawer
    │   ├── Footer.tsx           # 5-column directory with legal notes & credit
    │   ├── ProductCard.tsx      # Card adhering to zero-pill metadata discipline
    │   ├── ImageWithFallback.tsx# Resilient image component with SVG fallback
    │   ├── DeveloperSpotlight.tsx# Creator profile for Nagaraj Harwadekar
    │   └── ToastContainer.tsx   # Floating interactive notifications
    └── pages/
        ├── HomePage.tsx         # Comprehensive, multi-section homepage
        ├── ExplorePage.tsx      # Marketplace catalog with multi-facet filters
        ├── SearchPage.tsx       # Live multi-domain search engine
        ├── CollectionsPage.tsx  # Editorial curated collections
        ├── ProductDetailPage.tsx# Complete PDP with contiguous purchase module
        ├── CartPage.tsx         # Shopping bag & simulated demo checkout
        ├── WishlistPage.tsx     # Bookmarked personal vault
        ├── LearnHubPage.tsx     # Articles, guides & glossary hub
        ├── GuidesPage.tsx       # Step-by-step tactical roadmaps
        ├── JournalPage.tsx      # Magazine editorial publication
        ├── ArticleDetailPage.tsx# Long-form article reading view
        ├── ToolsHubPage.tsx     # Overview of financial tools
        ├── BudgetPlannerPage.tsx# 50/30/20 zero-based budget tool
        ├── CompoundGrowthPage.tsx# Exponential growth simulator with SVG curve
        ├── SavingsGoalPage.tsx  # Target milestone calculator
        ├── NetWorthPage.tsx     # Household balance sheet snapshot
        ├── AboutPage.tsx        # Manifesto, philosophy & developer section
        ├── FaqPage.tsx          # Categorized interactive accordion FAQ
        ├── ContactPage.tsx      # Form with client-side validation
        └── NotFoundPage.tsx     # 404 error page with navigation shortcuts
```

---

## 4. Supported Client-Side Routes

| Hash Route | Description |
| :--- | :--- |
| `#/` | Large, rich Homepage with hero, purpose pathways, product grids, and tools preview |
| `#/explore` | Marketplace catalog with search, category, format, difficulty, and price filters |
| `#/search` | Universal search across products, collections, articles, and guides |
| `#/collections` | 8 curated editorial pathways for different life stages |
| `#/product/:id` | Product detail page with gallery, specs, reviews, and related items |
| `#/wishlist` | Bookmarked resources with one-click transfer to cart |
| `#/cart` | Shopping bag with promo code discounts and demo order checkout |
| `#/learn` | Educational hub featuring articles, guides, and searchable glossary |
| `#/guides` | Tactical roadmaps with step-by-step action items |
| `#/journal` | Long-form editorial magazine essays |
| `#/journal/:slug` | Reading view for specific journal stories |
| `#/learn/article/:slug`| Reading view for specific Learn Hub articles |
| `#/tools` | Financial Tools launcher overview |
| `#/tools/budget` | Zero-based Cash Flow & Budget Planner |
| `#/tools/compound-growth` | Compound Growth Calculator with interactive SVG chart |
| `#/tools/savings` | Savings Milestone Forecaster with acceleration scenarios |
| `#/tools/net-worth` | Personal Balance Sheet & Net Worth Snapshot |
| `#/about` | Brand story, design principles, and Developer Spotlight |
| `#/faq` | 16 categorized FAQs with live search and accordions |
| `#/contact` | Form with client validation and local recording |
| `#/404` | Error 404 page |

---

## 5. Financial Tools & Quantitative Accuracy

All formulas are mathematically standard and execute synchronously in the browser:

1. **Compound Interest Equation:**
   $$FV = P \cdot (1 + \frac{r}{n})^{n \cdot t} + PMT \cdot \frac{(1 + \frac{r}{n})^{n \cdot t} - 1}{\frac{r}{n}}$$
   - Computed with monthly compounding ($n = 12$).
2. **Zero-Based Budget Breakdown:**
   - Categorizes spending into Needs, Wants, and Savings according to the modernized 50/30/20 benchmark.
3. **Savings Timeline:**
   - Evaluates monthly balances against goal targets with APY interest accumulation.
4. **Net Worth & Solvency:**
   - Computes both Total Net Worth and Liquid Net Worth (excluding illiquid real estate and motor vehicles).

---

## 6. Deployment Instructions

This project requires no server-side runtime, no API keys, and no database setup.

### Local Development
```bash
npm install
npm run dev
```

### Static Production Build
```bash
npm run build
```
The resulting `dist/` directory can be deployed directly to:
- **Vercel** (`vercel deploy`)
- **Netlify** (`netlify deploy --dir=dist`)
- **GitHub Pages**

---

## 7. Limitations & Future Possibilities

- **Current State:** Designed as an internship capstone frontend demonstration. Checkouts, promo codes, contact forms, and newsletter subscriptions simulate production workflows using `localStorage`.
- **Future Backend Capabilities:** In a commercial production environment, Finova could integrate Stripe for digital payments, PostgreSQL/Supabase for cloud user profiles, and AWS S3/CloudFront for signed digital PDF asset delivery.

---

## 8. License & Credit

Developed by **Nagaraj Harwadekar** as a Web Development Internship Capstone Project.  
Content and calculations are for educational and demonstration purposes. Not licensed financial advice.
