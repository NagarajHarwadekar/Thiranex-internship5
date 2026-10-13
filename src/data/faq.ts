export interface FAQItem {
  id: string;
  category: 'Products' | 'Learning' | 'Tools' | 'Orders' | 'Privacy';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Products',
    question: 'What format do Finova products arrive in?',
    answer: 'Finova products are digital-first educational resources. Depending on the product format specified, you receive fillable interactive PDF workbooks, cloud-synchronized Google Sheets templates (with companion Microsoft Excel .xlsx files), or digital manuals. All digital assets are unlocked immediately upon completing the order checkout.'
  },
  {
    id: 'faq-02',
    category: 'Products',
    question: 'Are Finova spreadsheets compatible with both Excel and Google Sheets?',
    answer: 'Yes. Every spreadsheet tool and operating system (including Cash Flow Architecture and Real Estate Modeler) comes formatted with native formulas for Google Sheets and Microsoft Excel 365, with zero external macros or plugins required.'
  },
  {
    id: 'faq-03',
    category: 'Products',
    question: 'Are product updates included with my purchase?',
    answer: 'Yes. When annual tax thresholds, IRS retirement contribution limits (such as 401(k), IRA, or HSA maximums), or regulatory changes occur, digital guides and spreadsheet formulas are updated to reflect the latest figures.'
  },
  {
    id: 'faq-04',
    category: 'Learning',
    question: 'Does Finova provide personalized investment or financial advice?',
    answer: 'No. Finova is strictly an educational publishing and financial literacy platform. None of our guides, calculators, articles, or toolkits constitute personalized fiduciary, legal, tax, or investment advice. We provide mathematical frameworks and educational principles to help you make informed decisions, but you should consult certified fiduciaries (CFP) or CPAs for personal situations.'
  },
  {
    id: 'faq-05',
    category: 'Learning',
    question: 'Where should a complete beginner start on the platform?',
    answer: 'We recommend starting with our curated "Beginner Investor" or "Money Reset" collections. In the Learn Hub, start by reading "The Mathematics of Investment Expense Ratios" and work through "The Complete 6-Step Investor Roadmap" to establish an emergency buffer and low-cost indexing plan.'
  },
  {
    id: 'faq-06',
    category: 'Learning',
    question: 'How often are new articles and guides published in the Learn Hub?',
    answer: 'Our editorial team publishes deep-dive analysis weekly in the Journal and updates foundational guides whenever tax codes or macroeconomic benchmark interest rates shift.'
  },
  {
    id: 'faq-07',
    category: 'Tools',
    question: 'Do the financial calculators send my personal numbers to an external server?',
    answer: 'Absolutely not. All four Finova interactive calculators (Budget Planner, Compound Growth Calculator, Savings Goal Calculator, and Net Worth Snapshot) run 100% locally in your web browser. Your salary, savings, debts, and net worth figures never leave your device.'
  },
  {
    id: 'faq-08',
    category: 'Tools',
    question: 'Are my calculator inputs saved if I close or refresh the page?',
    answer: 'Yes, if you choose to click "Save to Browser" on the tools, the inputs are cached securely in your browser’s localStorage. You can clear this cached data anytime using the "Reset Data" button.'
  },
  {
    id: 'faq-09',
    category: 'Tools',
    question: 'What rate of return should I enter into the Compound Growth Calculator?',
    answer: 'Historically, the US stock market (S&P 500) has returned roughly 10% nominal and 7% after inflation over the past century. For conservative long-term projections, a 6% to 8% return assumption is widely used by financial planners for diversified global equity portfolios.'
  },
  {
    id: 'faq-10',
    category: 'Orders',
    question: 'Is this an actual commercial checkout requiring a real credit card?',
    answer: 'No. Finova is an internship capstone engineering project demonstrating a production-grade fintech commerce and learning experience. The checkout system is a fully functional client-side simulation. You do not need to enter real payment credentials.'
  },
  {
    id: 'faq-11',
    category: 'Orders',
    question: 'How does the simulated checkout process work?',
    answer: 'You can add items to your cart, apply demo discount codes (such as "FINOVA10"), and proceed to checkout. The demo checkout validates customer contact information and generates a simulated order confirmation receipt with a realistic order reference number.'
  },
  {
    id: 'faq-12',
    category: 'Orders',
    question: 'Can I test out discount promo codes in the cart?',
    answer: 'Yes! Try entering promo code "FINOVA10" for a 10% discount, or "CAPSTONE" for 15% off during your cart inspection to observe the reactive price calculation and discount line items.'
  },
  {
    id: 'faq-13',
    category: 'Privacy',
    question: 'What user information does Finova store in localStorage?',
    answer: 'Finova stores your shopping cart items, saved wishlist product IDs, recently viewed items (up to 8 items), newsletter subscription state, and optional calculator presets in your browser’s standard localStorage. No trackers, ad pixels, or third-party marketing cookies are utilized.'
  },
  {
    id: 'faq-14',
    category: 'Privacy',
    question: 'How do I clear my locally stored cart, wishlist, and recently viewed data?',
    answer: 'You can click "Empty Cart" in the Cart page, remove items from your Wishlist page, or clear your browser’s application storage for this site at any time to return the application to its pristine zero state.'
  },
  {
    id: 'faq-15',
    category: 'Privacy',
    question: 'Can I use Finova on mobile phones and tablets?',
    answer: 'Yes. The entire platform is built with responsive mobile-first architecture, featuring custom touch menus, thumb-friendly calculator sliders, and adaptive product grids.'
  },
  {
    id: 'faq-16',
    category: 'Products',
    question: 'Who created Finova and what is the project’s origin?',
    answer: 'Finova was designed and engineered from absolute zero by Nagaraj Harwadekar, a Computer Science & Engineering student, as a comprehensive Web Development Internship Capstone Project highlighting modern frontend architecture, fintech product design, and clean user experience.'
  }
];
