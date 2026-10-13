import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'The Modern Investor Handbook',
    slug: 'modern-investor-handbook',
    category: 'Investing',
    subcategory: 'Index Investing',
    price: 38,
    oldPrice: 48,
    rating: 4.9,
    reviewCount: 312,
    shortDescription: 'A systematic manual on broad-market index funds, expense ratios, asset allocation, and tax-advantaged accounts.',
    longDescription: 'The Modern Investor Handbook strips away Wall Street jargon and replaces it with evidence-based investment principles. Designed for individuals who want to build durable wealth without constantly monitoring financial headlines, this guide covers historical asset returns, low-cost ETF selection, portfolio rebalancing schedules, and tax minimization frameworks.',
    features: [
      'Comprehensive 184-page core PDF with interactive tables',
      'Asset Allocation Matrix for ages 20 to 65',
      'Brokerage setup checklists for taxable and retirement accounts',
      'Lifetime downloadable spreadsheet calculator'
    ],
    learningOutcomes: [
      'Construct a resilient three-fund portfolio with ultra-low expense ratios',
      'Understand the mathematical impact of fees over 20- and 30-year horizons',
      'Automate monthly DCA (dollar-cost averaging) without emotional interference',
      'Execute annual rebalancing with minimal tax drag'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '6 hours of study',
    pagesOrModules: '184 pages · 12 chapters',
    tags: ['Index Funds', 'ETFs', 'Portfolio Construction', 'Compound Growth'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isTrending: true,
    collectionSlug: 'beginner-investor',
    relatedProductIds: ['prod-02', 'prod-05', 'prod-14'],
    reviews: [
      {
        id: 'rev-01',
        author: 'Marcus Vance',
        role: 'Software Architect',
        rating: 5,
        date: 'October 2025',
        title: 'Clear, zero-fluff manual for real portfolios',
        comment: 'This is the most lucid financial guide I have read in five years. No get-rich-quick nonsense—just sound, cold math and disciplined portfolio structure.',
        verified: true
      },
      {
        id: 'rev-02',
        author: 'Elena Rostova',
        role: 'Product Designer',
        rating: 5,
        date: 'September 2025',
        title: 'Helped me finally deploy my idle savings',
        comment: 'I was paralyzed by choice between all the different brokers and tickers. Chapter 4 walks you through exact portfolio splits. Highly recommended.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-02',
    name: 'Cash Flow Architecture & Budget OS',
    slug: 'cash-flow-architecture-budget-os',
    category: 'Budgeting',
    subcategory: 'Zero-Based Budgeting',
    price: 34,
    oldPrice: 42,
    rating: 4.8,
    reviewCount: 228,
    shortDescription: 'A modular spreadsheet system and behavioral framework for allocating every dollar intentionally before the month begins.',
    longDescription: 'Traditional budgeting fails because it focuses on retrospective guilt rather than forward-looking resource allocation. Cash Flow Architecture provides a zero-based cash allocation model built into Google Sheets and Microsoft Excel, synchronized with an automated banking hierarchy of primary checking, reserve sinking funds, and investment silos.',
    features: [
      'Dual-format Sheets and Excel templates with dynamic charts',
      'Automated sinking fund tracker for irregular annual bills',
      'Paycheck distribution rulebook with visual flow diagrams',
      'Step-by-step video walkthrough of account configurations'
    ],
    learningOutcomes: [
      'Eliminate month-end cash shortages through pre-allocated bank silos',
      'Calculate precise monthly contributions for annual insurance and tax bills',
      'Create a sustainable 3-to-6 month liquid emergency buffer',
      'Track lifestyle creep as income rises over career progressions'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Beginner',
    duration: '4 hours setup',
    pagesOrModules: '5 interactive tabs · 40-page guide',
    tags: ['Cash Flow', 'Zero-Based Budget', 'Sinking Funds', 'Spreadsheet'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'money-reset',
    relatedProductIds: ['prod-01', 'prod-03', 'prod-09'],
    reviews: [
      {
        id: 'rev-03',
        author: 'Devon Wright',
        role: 'Operations Analyst',
        rating: 5,
        date: 'November 2025',
        title: 'Finally a spreadsheet that does not require hours of maintenance',
        comment: 'Takes about 15 minutes on the first of each month. The sinking fund breakdown alone saved me from a surprise car repair panic.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-03',
    name: 'Wealth Foundations: The 10-Year Framework',
    slug: 'wealth-foundations-10-year-framework',
    category: 'Personal Finance',
    subcategory: 'Net Worth Building',
    price: 45,
    oldPrice: 55,
    rating: 4.9,
    reviewCount: 410,
    shortDescription: 'The comprehensive strategy guide for moving from financial defense into proactive capital accumulation.',
    longDescription: 'Financial stability is achieved in phases: first security, then flexibility, and finally autonomy. The 10-Year Framework details the exact benchmarks required at every net worth milestone from $10k to $1M. It combines high-yield cash positioning, employer retirement matching, equity incentives, debt amortization strategies, and insurance risk mitigation.',
    features: [
      'Comprehensive masterclass text and 8 interactive worksheets',
      'Milestone audit rubric with benchmark ratios',
      'Debt payoff calculator comparing Avalanche vs Snowball',
      'Insurance coverage checklist for disability, life, and liability'
    ],
    learningOutcomes: [
      'Structure personal finances into clear 3-year, 5-year, and 10-year milestones',
      'Determine the optimal mathematical priority between debt reduction and investing',
      'Evaluate employer 401(k) / pension matching terms to capture 100% of free capital',
      'Protect accumulated assets against catastrophic health and liability risks'
    ],
    format: 'Masterclass & Workbook',
    difficulty: 'Intermediate',
    duration: '8 hours of study',
    pagesOrModules: '220 pages · 14 worksheets',
    tags: ['Net Worth', 'Milestones', 'Debt Payoff', 'Capital Strategy'],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    isTrending: true,
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-04', 'prod-15'],
    reviews: [
      {
        id: 'rev-04',
        author: 'Siddharth Nair',
        role: 'Engineering Manager',
        rating: 5,
        date: 'December 2025',
        title: 'Gave our household a unified roadmap',
        comment: 'My partner and I used this workbook over a weekend retreat. It aligned our priorities and showed us exactly where we were over-insuring and under-investing.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-04',
    name: 'Stock Market Fundamentals & Equity Analysis',
    slug: 'stock-market-fundamentals-equity-analysis',
    category: 'Market Analysis',
    subcategory: 'Fundamental Analysis',
    price: 49,
    oldPrice: 65,
    rating: 4.8,
    reviewCount: 184,
    shortDescription: 'Learn how to read financial statements, evaluate balance sheets, analyze cash flows, and value business franchises.',
    longDescription: 'Investing in individual companies requires understanding the engine underneath the ticker symbol. This curriculum demystifies SEC 10-K and 10-Q filings, gross margins, return on invested capital (ROIC), free cash flow conversion, and competitive economic moats.',
    features: [
      'Full financial statement tear-downs of 6 real-world public companies',
      'Valuation spreadsheet with Discounted Cash Flow (DCF) model',
      'Checklist of 20 accounting red flags to avoid',
      'Key ratios cheat sheet with normal historical ranges'
    ],
    learningOutcomes: [
      'Dissect the income statement, balance sheet, and statement of cash flows with confidence',
      'Differentiate between GAAP accounting profit and true owners cash flow',
      'Identify pricing power and competitive durable advantages',
      'Avoid value traps and unprofitable hype cycles'
    ],
    format: 'Masterclass & Workbook',
    difficulty: 'Intermediate',
    duration: '10 hours of study',
    pagesOrModules: '240 pages · 6 case studies',
    tags: ['Equities', 'Balance Sheet', 'Free Cash Flow', 'Valuation'],
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80'
    ],
    isTrending: true,
    collectionSlug: 'market-explorer',
    relatedProductIds: ['prod-01', 'prod-06', 'prod-13'],
    reviews: [
      {
        id: 'rev-05',
        author: 'Arjun Mehta',
        role: 'Financial Analyst',
        rating: 5,
        date: 'January 2026',
        title: 'Extremely thorough accounting walkthroughs',
        comment: 'The case study contrasting high gross margin software vs inventory-heavy retail made unit economics click for me once and for all.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-05',
    name: 'First Salary & Early Career Playbook',
    slug: 'first-salary-early-career-playbook',
    category: 'Student & Early Career',
    subcategory: 'Career Launch',
    price: 29,
    oldPrice: 38,
    rating: 4.9,
    reviewCount: 350,
    shortDescription: 'The essential tactical guide for students and new graduates navigating employment contracts, benefits, and their first paychecks.',
    longDescription: 'Landing your first full-time role is an inflection point. Yet colleges rarely teach how to decode offer letters, health insurance plans (HDHP vs PPO), 401(k) matches, stock options, and initial tax withholdings. This guide provides a battle-tested playbook for the first 90 days on the job.',
    features: [
      'New hire onboarding guide for HR benefits elections',
      'W-4 tax withholding decision matrix to prevent surprise tax bills',
      'First budget blueprint tailored to starting entry-level salaries',
      'Checklist for student loan repayment strategy'
    ],
    learningOutcomes: [
      'Select the right healthcare and flexible spending accounts for your age and health profile',
      'Set up 401(k) contributions on day one to capture every cent of employer match',
      'Establish your first dedicated emergency fund before upgrading your lifestyle',
      'Avoid high-interest lifestyle traps common among recent university graduates'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '4 hours of study',
    pagesOrModules: '142 pages · 8 modules',
    tags: ['First Job', 'Benefits', 'Student Loans', '401k Match'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'first-salary',
    relatedProductIds: ['prod-02', 'prod-07', 'prod-11'],
    reviews: [
      {
        id: 'rev-06',
        author: 'Chloe Simmons',
        role: 'Junior Frontend Developer',
        rating: 5,
        date: 'January 2026',
        title: 'Should be required reading for all seniors',
        comment: 'I saved at least $2,000 this year by properly setting up my HSA and 401k match immediately during onboarding. Clear and practical.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-06',
    name: 'The Psychology of Money & Financial Habits Journal',
    slug: 'psychology-of-money-habits-journal',
    category: 'Financial Psychology',
    subcategory: 'Behavioral Finance',
    price: 32,
    oldPrice: 40,
    rating: 4.9,
    reviewCount: 295,
    shortDescription: 'A 90-day guided prompt system designed to uncover subconscious spending triggers, emotional biases, and money scripts.',
    longDescription: 'Financial success is 20% mechanics and 80% behavior. Even the most sophisticated spreadsheets collapse if spending is driven by anxiety, social comparison, or scarcity trauma. This journal blends cognitive behavioral principles with daily reflection exercises to rewire how you relate to spending, saving, and wealth.',
    features: [
      '90 structured daily reflection prompts with behavioral finance insights',
      'Money Scripts diagnostic questionnaire based on Klontz research',
      'Impulse spending cooldown protocol and physical decision cards',
      'Printable and fillable PDF format suitable for tablets and journaling'
    ],
    learningOutcomes: [
      'Identify whether your core bias leans toward Money Avoidance, Worship, Status, or Vigilance',
      'Break impulsive retail therapy loops with a 72-hour cognitive pause rule',
      'Disentangle personal self-worth from portfolio balance fluctuations',
      'Build pride in quiet, invisible wealth rather than conspicuous consumption'
    ],
    format: 'Print Edition',
    difficulty: 'Beginner',
    duration: '90-day practice',
    pagesOrModules: '208 pages · 90 prompts',
    tags: ['Mindset', 'Behavioral Finance', 'Spending Triggers', 'Journaling'],
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80'
    ],
    isTrending: true,
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-02', 'prod-03', 'prod-12'],
    reviews: [
      {
        id: 'rev-07',
        author: 'Lillian Thorne',
        role: 'Clinical Psychologist',
        rating: 5,
        date: 'February 2026',
        title: 'Deeply grounded in real behavioral research',
        comment: 'As a clinician, I love seeing financial tools that treat emotional habits with respect rather than simple shaming. A beautiful work.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-07',
    name: 'Salary Negotiation & Total Compensation Playbook',
    slug: 'salary-negotiation-total-compensation-playbook',
    category: 'Career & Income',
    subcategory: 'Negotiation',
    price: 42,
    oldPrice: 55,
    rating: 4.8,
    reviewCount: 198,
    shortDescription: 'Word-for-word scripts, counter-offer templates, equity valuation models, and promotion frameworks for ambitious professionals.',
    longDescription: 'Increasing your primary earning capacity is the single highest-leverage financial lever in your twenties and thirties. This playbook provides step-by-step negotiation protocols for new job offers, internal performance reviews, equity grants (RSUs vs options), sign-on bonuses, and flexible work arrangements.',
    features: [
      '30+ word-for-word email templates and verbal scripts for tough counter-offers',
      'Equity compensation calculator modeling vesting schedules and strike prices',
      'Performance brag-sheet framework for documenting business impact',
      'Common HR recruiter tactics and how to ethically navigate them'
    ],
    learningOutcomes: [
      'Never reveal your current compensation or anchor yourself below market value',
      'Negotiate base salary, signing bonus, equity grants, and vacation simultaneously',
      'Quantify your individual accomplishments into hard commercial revenue or cost savings',
      'Handle competing offers with professional integrity and leverage'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Intermediate',
    duration: '5 hours of study',
    pagesOrModules: '160 pages · 30 email scripts',
    tags: ['Negotiation', 'Compensation', 'RSUs', 'Career Growth'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-03', 'prod-05', 'prod-08'],
    reviews: [
      {
        id: 'rev-08',
        author: 'Jordan Blake',
        role: 'Senior Product Manager',
        rating: 5,
        date: 'February 2026',
        title: 'Helped me negotiate +$24k on my recent offer',
        comment: 'The script for pushing back on the initial verbal offer without sounding adversarial worked like a charm. Paid for itself 500 times over.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-08',
    name: 'Freelancer & Consultant Financial Operating System',
    slug: 'freelancer-consultant-financial-os',
    category: 'Career & Income',
    subcategory: 'Self-Employment',
    price: 39,
    oldPrice: 50,
    rating: 4.7,
    reviewCount: 164,
    shortDescription: 'Manage irregular variable income, estimated quarterly taxes, business expense tracking, and emergency runway for independent operators.',
    longDescription: 'Self-employed creatives and consultants face the feast-or-famine income cycle. This operating system introduces the Baseline Living Salary framework, where business revenue flows into an entity account and pays the operator a predictable, smoothed monthly wage, eliminating financial panic during dry spells.',
    features: [
      'Variable income smoothing spreadsheet with automated tax reserves',
      'Quarterly estimated tax estimation formulas',
      'Client invoicing and late-payment escalation templates',
      'Deductible business expense categorization matrix'
    ],
    learningOutcomes: [
      'Transform unpredictable client receipts into a smooth, steady monthly personal salary',
      'Set aside the exact percentage for state and federal self-employment taxes automatically',
      'Determine minimum billable hourly and project rates that cover downtime and benefits',
      'Build a separate 6-month business operations runway'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Intermediate',
    duration: '5 hours setup',
    pagesOrModules: '4 spreadsheet tabs · 60-page PDF',
    tags: ['Freelance', 'Consulting', 'Variable Income', 'Tax Reserves'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-02', 'prod-07', 'prod-10'],
    reviews: [
      {
        id: 'rev-09',
        author: 'Maya Lin',
        role: 'Independent Brand Strategist',
        rating: 5,
        date: 'March 2026',
        title: 'Cured my tax season anxiety',
        comment: 'Having a dedicated tax allocation percentage calculate automatically on every paid invoice changed my life. No more frantic April searches.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-09',
    name: 'Debt Elimination Masterclass & Avalanche Engine',
    slug: 'debt-elimination-masterclass-avalanche-engine',
    category: 'Personal Finance',
    subcategory: 'Debt Management',
    price: 30,
    oldPrice: 38,
    rating: 4.9,
    reviewCount: 280,
    shortDescription: 'A mathematical and psychological roadmap to rapidly eliminate high-interest consumer credit cards, auto loans, and personal notes.',
    longDescription: 'Debt creates mental drag and robs your future self of compound returns. This toolkit models your exact liability portfolio, calculating both the mathematically optimal Debt Avalanche (highest interest rate first) and the behavioral Debt Snowball (lowest balance first), allowing you to pick the strategy that ensures completion.',
    features: [
      'Interactive Debt Payoff Simulator with custom monthly extra payments',
      'Total interest saved comparison charts between strategies',
      'Debt consolidation and 0% balance transfer decision tree',
      'Scripts for negotiating lower interest rates with credit card issuers'
    ],
    learningOutcomes: [
      'See your exact debt-free calendar date update in real time with extra payments',
      'Understand how credit card minimum payments trap consumers in decades of interest',
      'Safely utilize 0% APR balance transfer promotions without incurring trap fees',
      'Permanently close negative debt loops with a micro-emergency buffer'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '3 hours setup',
    pagesOrModules: 'Interactive tool · 80-page manual',
    tags: ['Debt Free', 'Avalanche', 'Snowball', 'Credit Cards'],
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'money-reset',
    relatedProductIds: ['prod-02', 'prod-03', 'prod-06'],
    reviews: [
      {
        id: 'rev-10',
        author: 'Keith Anderson',
        role: 'Civil Engineer',
        rating: 5,
        date: 'March 2026',
        title: 'Paid off $14,000 in 11 months with this plan',
        comment: 'Seeing the exact date when each card would reach zero gave me the dopamine hits I needed to stay on track. Superb spreadsheet.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-10',
    name: 'Retirement Blueprint: Beyond the 4% Rule',
    slug: 'retirement-blueprint-beyond-4-percent-rule',
    category: 'Retirement Planning',
    subcategory: 'Early Retirement & FIRE',
    price: 46,
    oldPrice: 58,
    rating: 4.8,
    reviewCount: 190,
    shortDescription: 'Modern safe withdrawal rates, sequence-of-returns risk mitigation, Roth conversion ladders, and healthcare before Medicare.',
    longDescription: 'Traditional retirement models were formulated in the 1990s with higher bond yields. This guide explores modern safe withdrawal strategies (dynamic spending rules, guardrails, bond tents), early retirement access to qualified retirement accounts through Rule 72(t) and Roth conversion ladders, and bridge healthcare planning.',
    features: [
      'Monte Carlo simulation model testing 50-year portfolio survival rates',
      'Roth IRA Conversion Ladder schedule calculator',
      'Guyton-Klinger dynamic spending guardrails template',
      'Healthcare bridge planning guide for early retirees aged 40–65'
    ],
    learningOutcomes: [
      'Protect early portfolio distributions against sequence-of-returns risk during market downturns',
      'Access 401(k) and traditional IRA funds penalty-free before age 59½',
      'Calculate an honest FIRE (Financial Independence, Retire Early) number that factors in inflation',
      'Implement variable withdrawal rates that preserve capital indefinitely'
    ],
    format: 'Masterclass & Workbook',
    difficulty: 'Advanced',
    duration: '8 hours of study',
    pagesOrModules: '210 pages · 10 worksheets',
    tags: ['FIRE', 'Retirement', 'Withdrawal Rates', 'Roth Ladder'],
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-03', 'prod-14'],
    reviews: [
      {
        id: 'rev-11',
        author: 'Robert Sterling',
        role: 'Physician',
        rating: 5,
        date: 'January 2026',
        title: 'Finally a guide that respects portfolio math',
        comment: 'The explanation of bond tents and why fixed 4% withdrawals fail during early recessions was worth 10x the price alone.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-11',
    name: 'Smart Student Financial Kit',
    slug: 'smart-student-financial-kit',
    category: 'Student & Early Career',
    subcategory: 'College Finance',
    price: 24,
    oldPrice: 32,
    rating: 4.8,
    reviewCount: 310,
    shortDescription: 'Navigate campus life, student loans, roommates, grocery budgeting, credit building, and internship stipends on a lean budget.',
    longDescription: 'Being a university student does not mean accepting four years of financial ignorance. This compact kit shows students how to establish an 750+ credit score with a secured credit card, maximize internship savings, cook healthy meals on $60/week, and minimize borrowing through subsidized loan strategies.',
    features: [
      'Campus semester cash flow planner with tuition schedule',
      'Student credit card starter guide with responsible usage rules',
      'Roommate shared-expense ledger for utilities and household items',
      'Loan interest accrual calculator comparing Subsidized vs Unsubsidized'
    ],
    learningOutcomes: [
      'Graduate with an established prime credit score and zero credit card balance',
      'Avoid unneeded private student loans through work-study and scholarship hunting',
      'Manage variable semester expenses and internship stipends with confidence',
      'Split house costs fairly with roommates without awkward friction'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '3 hours of study',
    pagesOrModules: '95 pages · 3 templates',
    tags: ['College', 'Credit Score', 'Budgeting', 'Student Life'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'smart-student',
    relatedProductIds: ['prod-02', 'prod-05', 'prod-06'],
    reviews: [
      {
        id: 'rev-12',
        author: 'Samira Patel',
        role: 'Biomedical Science Student',
        rating: 5,
        date: 'February 2026',
        title: 'Made my transition to living off-campus so easy',
        comment: 'The roommate split tracker alone prevented so many arguments in our apartment. Super accessible and non-intimidating.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-12',
    name: 'Real Estate Investing & Rental Property Modeler',
    slug: 'real-estate-investing-rental-modeler',
    category: 'Investing',
    subcategory: 'Real Estate',
    price: 48,
    oldPrice: 62,
    rating: 4.7,
    reviewCount: 175,
    shortDescription: 'Underwrite single-family and small multifamily properties with cash-on-cash return, cap rate, and debt service coverage ratios.',
    longDescription: 'Never buy investment real estate based on a realtor’s back-of-the-napkin estimate. This model accounts for property management fees, realistic vacancy rates, capital expenditure reserves (roof, HVAC, plumbing), property taxes, and mortgage amortization to project true net cash flow.',
    features: [
      'Multi-tab dynamic property underwriting model in Excel and Sheets',
      'Property inspection checklist for red-flag capital expenditures',
      'Tenant screening criteria and lease clause checklist',
      'Cash-on-Cash Return, Internal Rate of Return (IRR), and Cap Rate calculator'
    ],
    learningOutcomes: [
      'Analyze any residential deal in 10 minutes to filter out money-losing properties',
      'Budget accurately for long-term CapEx (capital expenditures) rather than just immediate repairs',
      'Understand how leverage amplifies both positive returns and downside default risk',
      'Evaluate local market rent-to-price ratios to avoid overpriced assets'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Intermediate',
    duration: '6 hours setup',
    pagesOrModules: '6 spreadsheet tabs · 70-page guide',
    tags: ['Real Estate', 'Cap Rate', 'Cash on Cash', 'Rental Property'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'market-explorer',
    relatedProductIds: ['prod-01', 'prod-03', 'prod-04'],
    reviews: [
      {
        id: 'rev-13',
        author: 'Nathan Cole',
        role: 'Real Estate Investor',
        rating: 5,
        date: 'February 2026',
        title: 'Saved me from buying a deal with hidden CapEx disasters',
        comment: 'The CapEx reserve tab made me realize the HVAC and roof on a duplex I was looking at would have wiped out 3 years of cash flow. Passed on it, found a better one.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-13',
    name: 'Macroeconomics for Everyday Capitalists',
    slug: 'macroeconomics-everyday-capitalists',
    category: 'Market Analysis',
    subcategory: 'Macro Fundamentals',
    price: 36,
    oldPrice: 45,
    rating: 4.8,
    reviewCount: 142,
    shortDescription: 'Understand central banks, interest rate cycles, inflation dynamics, yield curves, and how global liquidity shifts asset prices.',
    longDescription: 'Why do stocks rise when unemployment goes up? Why do bond prices drop when interest rates rise? This curriculum connects the dots between Federal Reserve policy, sovereign debt, currency valuation, and consumer purchasing power without requiring an academic economics degree.',
    features: [
      '12 clear chapters breaking down monetary and fiscal policy',
      'The Yield Curve inversion tracker and historical recession analysis',
      'Inflation hedge comparison matrix (Gold, TIPS, Equities, Real Estate)',
      'Global liquidity cycle indicators and reading economic data releases'
    ],
    learningOutcomes: [
      'Interpret Federal Reserve FOMC statements and interest rate forecasts',
      'Understand how inflation impacts purchasing power vs nominal portfolio returns',
      'Anticipate how credit expansion and contractions alter equity sector performance',
      'Avoid reactionary trades based on sensationalist economic news headlines'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '7 hours of study',
    pagesOrModules: '175 pages · 12 chapters',
    tags: ['Macroeconomics', 'Interest Rates', 'Inflation', 'Federal Reserve'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'market-explorer',
    relatedProductIds: ['prod-01', 'prod-04', 'prod-10'],
    reviews: [
      {
        id: 'rev-14',
        author: 'Claire Dufresne',
        role: 'Policy Advisor',
        rating: 5,
        date: 'January 2026',
        title: 'Masterclass in clear explanations of complex macro topics',
        comment: 'The breakdown of how the yield curve actually predicts economic contractions is the best concise explanation I have ever come across.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-14',
    name: 'Tax-Advantaged Wealth Optimization Manual',
    slug: 'tax-advantaged-wealth-optimization-manual',
    category: 'Personal Finance',
    subcategory: 'Tax Strategy',
    price: 44,
    oldPrice: 56,
    rating: 4.9,
    reviewCount: 220,
    shortDescription: 'Legally minimize your lifetime tax liability across 401(k), IRA, HSA, Mega-Backdoor Roth, and taxable brokerage accounts.',
    longDescription: 'Taxes are typically an individual’s single largest lifetime expenditure. This guide maps out asset location strategies (placing bond funds in tax-sheltered accounts and equity index funds in taxable accounts), health savings account (HSA) triple-tax advantages, and Backdoor Roth contribution protocols.',
    features: [
      'Asset Location Blueprint optimizing tax efficiency across all account types',
      'Step-by-step tutorial on executing a clean Backdoor Roth IRA without pro-rata penalties',
      'HSA receipt archive protocol for tax-free retirement reimbursement',
      'Tax-loss harvesting rules and 30-day wash-sale avoidance checklist'
    ],
    learningOutcomes: [
      'Structure the order of account contributions to maximize employer matches and tax deferral',
      'Execute Backdoor Roth conversions safely while avoiding pro-rata tax traps',
      'Utilize an HSA as an auxiliary stealth retirement account',
      'Harvest capital losses during market corrections to offset ordinary income'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Advanced',
    duration: '6 hours of study',
    pagesOrModules: '165 pages · 9 case studies',
    tags: ['Taxes', 'Backdoor Roth', 'HSA', 'Asset Location'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80'
    ],
    isTrending: true,
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-03', 'prod-10'],
    reviews: [
      {
        id: 'rev-15',
        author: 'Derrick Hall',
        role: 'Tech Lead',
        rating: 5,
        date: 'March 2026',
        title: 'Cleared up the entire Backdoor Roth confusion',
        comment: 'I was terrified of messing up Form 8606 with the IRS. Chapter 3 laid out every single line with sample screenshots. Invaluable.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-15',
    name: 'The Financial Confidence Audit',
    slug: 'financial-confidence-audit',
    category: 'Financial Psychology',
    subcategory: 'Self-Assessment',
    price: 28,
    oldPrice: 35,
    rating: 4.8,
    reviewCount: 160,
    shortDescription: 'A 50-point comprehensive diagnostic system that scores your cash reserves, estate preparedness, insurance risks, and financial clarity.',
    longDescription: 'Knowing where you stand is the precursor to decisive action. The Financial Confidence Audit evaluates your household across 6 pillars: Liquidity & Emergency, Debt & Solvency, Retirement Trajectory, Risk Management & Insurance, Estate & Legacy, and Operational Clarity.',
    features: [
      'Automated scoring sheet assigning your personal Financial Clarity Score (0–100)',
      'Action priority checklist based on your lowest scoring category',
      'Legacy document organizer detailing account passwords and vital records',
      'Semi-annual financial review schedule template'
    ],
    learningOutcomes: [
      'Identify critical blind spots before an unexpected life disruption occurs',
      'Organize all account numbers, beneficiaries, and emergency contacts in one secure vault',
      'Ensure family members know how to access essential documents in an emergency',
      'Transition from reactive anxiety to structured, systematic financial confidence'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '3 hours audit',
    pagesOrModules: 'Interactive tool · 50-point rubric',
    tags: ['Audit', 'Preparedness', 'Clarity', 'Risk Assessment'],
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-02', 'prod-03', 'prod-06'],
    reviews: [
      {
        id: 'rev-16',
        author: 'Valerie Gomez',
        role: 'High School Educator',
        rating: 5,
        date: 'February 2026',
        title: 'Showed me two major gaps I had ignored for years',
        comment: 'I had completely forgotten to update my 401k beneficiary after marriage. Simple, calm, and immensely reassuring to complete.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-16',
    name: 'Emergency Fund Architecture: The Liquidity Protocol',
    slug: 'emergency-fund-architecture-liquidity-protocol',
    category: 'Budgeting',
    subcategory: 'Cash Management',
    price: 25,
    oldPrice: 32,
    rating: 4.9,
    reviewCount: 204,
    shortDescription: 'How to calculate your true bare-bones burn rate, tier emergency cash across high-yield savings and money markets, and avoid panicking.',
    longDescription: 'An emergency fund is not an investment; it is an insurance policy that preserves your portfolio from forced liquidations during economic recessions. This protocol breaks your safety net into three distinct liquidity tiers: immediate checking buffer, High-Yield Savings Account (HYSA), and short-term US Treasury Bills.',
    features: [
      'Bare-bones survival budget calculator isolating non-negotiable living costs',
      'Three-tier cash liquidity ladder model',
      'HYSA vs Money Market vs T-Bill yield and tax comparison guide',
      'Rules of engagement: defining what constitutes an actual emergency'
    ],
    learningOutcomes: [
      'Calculate the exact dollar figure for a realistic 3-month and 6-month safety reserve',
      'Earn maximum safe yield on idle cash without sacrificing immediate access',
      'Prevent early 401(k) withdrawals or credit card balances during job transitions',
      'Sleep soundly knowing sudden auto or medical events will not derail your future'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '2.5 hours of study',
    pagesOrModules: '75 pages · 4 calculators',
    tags: ['Emergency Fund', 'Liquidity', 'HYSA', 'Safety Net'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'money-reset',
    relatedProductIds: ['prod-02', 'prod-03', 'prod-09'],
    reviews: [
      {
        id: 'rev-17',
        author: 'Trevor Bailey',
        role: 'Graphic Designer',
        rating: 5,
        date: 'February 2026',
        title: 'Gave me genuine peace of mind',
        comment: 'Knowing my bare-bones survival number is $2,800/month rather than my normal $4,200 spending made funding my emergency account much more achievable.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-17',
    name: 'SaaS & Digital Subscription Audit System',
    slug: 'saas-digital-subscription-audit-system',
    category: 'Budgeting',
    subcategory: 'Expense Optimization',
    price: 22,
    oldPrice: 30,
    rating: 4.8,
    reviewCount: 155,
    shortDescription: 'Audit micro-leaks, recurring streaming fees, dormant app subscriptions, and software licenses that siphon hundreds each month.',
    longDescription: 'Subscription creep is the silent killer of discretionary savings. Because recurring charges are small and automated, consumers rarely perceive their cumulative financial damage. This system walks you through a 1-day subscription teardown, categorized into Essential, Utility, and Luxury, providing pre-written cancellation emails.',
    features: [
      'Automated subscription audit spreadsheet tallying annual recurring run-rate',
      'Cancellation scripts and negotiation templates for retaining internet/mobile discounts',
      'Virtual card usage strategy for trial signups to prevent sneaky recurring renewals',
      'Annual vs monthly billing savings calculator'
    ],
    learningOutcomes: [
      'Recover an average of $80 to $220 in recurring monthly waste immediately',
      'Negotiate lower rates with internet service providers and cell carriers using proved scripts',
      'Switch high-utility services to annual billing to capture 15–25% discounts',
      'Build a conscious renewal habit where apps must re-justify their monthly fee'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '2 hours execution',
    pagesOrModules: 'Interactive tool · 15 templates',
    tags: ['Subscriptions', 'Expense Reduction', 'Cash Flow', 'Audit'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'money-reset',
    relatedProductIds: ['prod-02', 'prod-16', 'prod-06'],
    reviews: [
      {
        id: 'rev-18',
        author: 'Melanie Ross',
        role: 'Copywriter',
        rating: 5,
        date: 'March 2026',
        title: 'Found $140/month in things I had forgotten I was paying for',
        comment: 'Had three gym passes and an old cloud storage service running in the background. This tool paid for itself within the first 10 minutes.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-18',
    name: 'The Modern Bogleheads Investing Companion',
    slug: 'modern-bogleheads-investing-companion',
    category: 'Investing',
    subcategory: 'Passive Investing',
    price: 35,
    oldPrice: 45,
    rating: 4.9,
    reviewCount: 380,
    shortDescription: 'The definitive philosophical and tactical handbook inspired by John Bogle’s low-cost, patient indexing philosophy for modern investors.',
    longDescription: 'In an era of high-frequency trading algorithms, speculative crypto fads, and social media finance gurus, John Bogle’s timeless wisdom remains undisputed: own the entire market, minimize costs, avoid tinkering, and let compound interest do the heavy lifting. This companion translates classic Boglehead tenets into modern international and US portfolios.',
    features: [
      'Classic Two-Fund and Three-Fund portfolio breakdowns across Vanguard, Fidelity, and Schwab',
      'Total expense drag comparison tool over 40-year timelines',
      'The Psychology of Market Crashes: Historical drawdown recovery data',
      'Lump Sum vs Dollar Cost Averaging (DCA) empirical research paper'
    ],
    learningOutcomes: [
      'Understand why 90%+ of active fund managers underperform broad index funds over 15 years',
      'Construct a global equity portfolio using total market index funds',
      'Overcome market volatility fear by observing 100-year historical market recoveries',
      'Build quiet conviction to stay the course through bear markets'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '5 hours of study',
    pagesOrModules: '160 pages · 10 chapters',
    tags: ['Bogleheads', 'Index Funds', 'Vanguard', 'Passive Wealth'],
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'beginner-investor',
    relatedProductIds: ['prod-01', 'prod-03', 'prod-14'],
    reviews: [
      {
        id: 'rev-19',
        author: 'Daniel Vance',
        role: 'Research Scientist',
        rating: 5,
        date: 'February 2026',
        title: 'Invaluable anchor during volatile market weeks',
        comment: 'Whenever the headlines try to scare me into panic-selling, I review chapter 5. Pure clarity and discipline.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-19',
    name: 'Homeownership Economics: Buy vs Rent Decoded',
    slug: 'homeownership-economics-buy-vs-rent-decoded',
    category: 'Personal Finance',
    subcategory: 'Housing',
    price: 37,
    oldPrice: 48,
    rating: 4.8,
    reviewCount: 215,
    shortDescription: 'Compare the true lifetime financial returns of buying a primary residence versus renting and investing the difference in equity index funds.',
    longDescription: 'The common wisdom that "renting is throwing money away" ignores mortgage interest, property taxes, homeowner’s insurance, private mortgage insurance (PMI), HOA fees, maintenance (the 1% rule), and closing transaction costs. This analytical toolkit provides a mathematically rigorous 30-year comparison.',
    features: [
      'Comprehensive 30-Year Buy vs Rent Simulation Model in Excel and Sheets',
      'Amortization schedules highlighting principal vs interest breakdown',
      'Closing costs, moving expenses, and furnishing budget calculator',
      'Unrecoverable cost calculation formula (The 5% Rule simplified)'
    ],
    learningOutcomes: [
      'Calculate the exact tipping point in years where buying becomes cheaper than renting',
      'Factor in property tax reassessments and historical local maintenance inflation',
      'Understand the massive opportunity cost of tying up a 20% down payment in illiquid equity',
      'Make an informed housing decision based on lifestyle goals rather than societal pressure'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Intermediate',
    duration: '4 hours setup',
    pagesOrModules: 'Interactive tool · 85-page manual',
    tags: ['Real Estate', 'Buy vs Rent', 'Mortgage', 'Housing'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-03', 'prod-12', 'prod-14'],
    reviews: [
      {
        id: 'rev-20',
        author: 'Hannah Zhao',
        role: 'Data Engineer',
        rating: 5,
        date: 'January 2026',
        title: 'Saved us from making an emotional $80,000 mistake',
        comment: 'Seeing the unrecoverable monthly cost laid out side by side showed us that renting for 2 more years while investing in index funds made us far wealthier.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-20',
    name: 'Dividend Growth Investing & Cash Flow Compounding',
    slug: 'dividend-growth-investing-compounding',
    category: 'Investing',
    subcategory: 'Dividend Investing',
    price: 41,
    oldPrice: 52,
    rating: 4.7,
    reviewCount: 168,
    shortDescription: 'Build a durable rising dividend income stream focusing on Dividend Aristocrats, payout ratios, free cash flow coverage, and dividend safety.',
    longDescription: 'High yield is often a yield trap. Sustainable dividend investing requires finding companies with widening competitive advantages that consistently grow their payouts year after year, regardless of economic cycles. This guide details how to analyze payout ratios, debt maturities, and reinvest distributions for compounding growth.',
    features: [
      'Dividend Aristocrat & Dividend Champion screening framework',
      'DRIP (Dividend Reinvestment Plan) compounding projection model',
      'Dividend safety score rubric based on cash flow coverage',
      'Tax efficiency guide for qualified vs non-qualified dividend distributions'
    ],
    learningOutcomes: [
      'Filter out precarious high-yield stocks that are likely to slash their payouts',
      'Identify companies capable of compounding dividends at 7–10% annually',
      'Structure a portfolio that generates rising passive income to cover baseline living expenses',
      'Understand when dividend investing is appropriate versus total return indexing'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '6 hours of study',
    pagesOrModules: '170 pages · 8 chapters',
    tags: ['Dividends', 'Cash Flow', 'Passive Income', 'Aristocrats'],
    image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'market-explorer',
    relatedProductIds: ['prod-01', 'prod-04', 'prod-10'],
    reviews: [
      {
        id: 'rev-21',
        author: 'Gerald Croft',
        role: 'Retired School Principal',
        rating: 5,
        date: 'March 2026',
        title: 'Disciplined and conservative approach',
        comment: 'Focusing on dividend safety rather than chasing 10% junk yields protected my nest egg. Very well formatted.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-21',
    name: 'College Debt Exit Strategy: PSLF & Federal Forgiveness',
    slug: 'college-debt-exit-strategy-pslf-forgiveness',
    category: 'Student & Early Career',
    subcategory: 'Student Loans',
    price: 33,
    oldPrice: 42,
    rating: 4.8,
    reviewCount: 182,
    shortDescription: 'A meticulous compliance guide for Public Service Loan Forgiveness (PSLF), income-driven repayment plans (SAVE/IDR), and taxable forgiveness.',
    longDescription: 'Navigating federal student loan servicer bureaucracy can be exhausting. One clerical error or disqualified payment can reset years of progress. This guide provides exact instructions for certifying qualifying employment, choosing the optimal income-driven repayment plan, recertifying income annually, and managing marital filing status to minimize payments.',
    features: [
      'PSLF employer certification verification and audit log',
      'Income-Driven Repayment (IDR) monthly payment calculator',
      'Married filing separately vs jointly tax comparison for student borrowers',
      'Checklist for tracking 120 qualifying payments with loan servicers'
    ],
    learningOutcomes: [
      'Ensure every monthly payment counts toward your 120 PSLF forgiveness milestones',
      'Minimize required monthly payments legitimately using adjusted gross income deductions',
      'Avoid unauthorized forbearance traps set by negligent loan servicers',
      'Prepare for potential tax-bomb liabilities on non-PSLF 20- and 25-year forgiveness'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '4 hours of study',
    pagesOrModules: '130 pages · 7 checklists',
    tags: ['PSLF', 'Student Loans', 'SAVE Plan', 'Debt Relief'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'smart-student',
    relatedProductIds: ['prod-05', 'prod-09', 'prod-11'],
    reviews: [
      {
        id: 'rev-22',
        author: 'Morgan Kelley',
        role: 'Public Defender',
        rating: 5,
        date: 'March 2026',
        title: 'The only guide that accurately explained the married filing separate trick',
        comment: 'Filing separately reduced my monthly IDR payment from $740 to $210, saving our family over $6,000 this year while I complete my PSLF years.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-22',
    name: 'The High-Earner Tax-Loss Harvesting Guide',
    slug: 'high-earner-tax-loss-harvesting-guide',
    category: 'Personal Finance',
    subcategory: 'Tax Strategy',
    price: 45,
    oldPrice: 58,
    rating: 4.9,
    reviewCount: 140,
    shortDescription: 'Systematically realize capital losses during market drawdowns to offset capital gains and ordinary income without disrupting asset allocation.',
    longDescription: 'When markets drop, sophisticated investors do not panic; they harvest tax alpha. By swapping an equity ETF that has fallen in price for a non-substantially identical index fund, you lock in capital losses for tax purposes while maintaining full equity market exposure to capture the recovery.',
    features: [
      'Pairing catalog of non-substantially identical ETF substitutes across US and World indices',
      'IRS Wash-Sale Rule compliance timeline and 30-day tracking matrix',
      'Direct Indexing vs ETF tax-loss harvesting cost-benefit analysis',
      'Year-end tax optimization worksheet'
    ],
    learningOutcomes: [
      'Harvest losses to offset unlimited realized capital gains plus up to $3,000 of ordinary income annually',
      'Avoid triggering IRS wash-sale penalties across spousal and IRA accounts',
      'Choose the right partner ETFs that track correlated but distinct benchmark indices',
      'Carry forward remaining capital losses into future high-income years'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Advanced',
    duration: '5 hours of study',
    pagesOrModules: '140 pages · 6 pairing matrices',
    tags: ['Tax Alpha', 'Loss Harvesting', 'Wash Sale', 'ETFs'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-14', 'prod-03'],
    reviews: [
      {
        id: 'rev-23',
        author: 'Evelyn Carter',
        role: 'Managing Partner',
        rating: 5,
        date: 'January 2026',
        title: 'Crisp, accurate, and completely compliant with tax regulations',
        comment: 'The list of ETF partner pairs for VTI and VXUS alone is worth every dollar. Saved me hours of research.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-23',
    name: 'Executive Compensation & Equity Grant Strategy',
    slug: 'executive-compensation-equity-grant-strategy',
    category: 'Career & Income',
    subcategory: 'Equity Grants',
    price: 52,
    oldPrice: 70,
    rating: 4.8,
    reviewCount: 130,
    shortDescription: 'Navigate Restricted Stock Units (RSUs), Non-Qualified Stock Options (NSOs), Incentive Stock Options (ISOs), and Alternative Minimum Tax (AMT).',
    longDescription: 'For technology workers and corporate executives, equity compensation frequently constitutes 40% to 70% of total annual compensation. Mishandling early option exercises or failing to plan for mandatory tax withholding on RSUs can lead to catastrophic tax bills or severe single-stock concentration risk.',
    features: [
      'ISO exercise and Alternative Minimum Tax (AMT) risk modeling spreadsheet',
      'RSU auto-sale diversification schedule for high single-stock exposure',
      '83(b) election step-by-step submission package and IRS certified mail guidelines',
      'Pre-IPO vs Post-IPO secondary liquidation frameworks'
    ],
    learningOutcomes: [
      'Understand the crucial tax differences between RSUs, ISOs, and NSOs',
      'File an 83(b) election correctly within the mandatory 30-day window following grant issuance',
      'Model potential AMT liabilities prior to exercising private company stock options',
      'Avoid having an entire household net worth tied to the fortunes of a single corporate employer'
    ],
    format: 'Masterclass & Workbook',
    difficulty: 'Advanced',
    duration: '8 hours of study',
    pagesOrModules: '200 pages · 5 financial models',
    tags: ['RSUs', 'Stock Options', 'AMT', 'Executive Comp'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-07', 'prod-14', 'prod-03'],
    reviews: [
      {
        id: 'rev-24',
        author: 'Brett Miller',
        role: 'VP of Engineering',
        rating: 5,
        date: 'March 2026',
        title: 'Essential for tech workers navigating private options',
        comment: 'Explains AMT risk better than my accountant did. The 83(b) template was pristine.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-24',
    name: 'The Zero-Stress Wedding & Milestone Event Budget',
    slug: 'zero-stress-wedding-milestone-event-budget',
    category: 'Budgeting',
    subcategory: 'Event Budgeting',
    price: 27,
    oldPrice: 35,
    rating: 4.8,
    reviewCount: 175,
    shortDescription: 'Plan weddings, milestone anniversaries, and family celebrations with cash flow discipline without starting marriage in debt.',
    longDescription: 'Major celebrations are prone to immense emotional pressure and runaway vendor upcharges. This system establishes a locked ceiling budget with vendor negotiation tactics, priority tiering (Guest Experience vs Ephemeral Decor), and guest list cost-per-plate modeling.',
    features: [
      'Master event budgeting spreadsheet with vendor payment schedules and tip calculators',
      'Cost-per-guest sensitivity model comparing venue options',
      'Vendor contract red-flag checklist (cancellation terms, minimum food/beverage spends)',
      'Constructive conversation guide for managing parental financial contributions'
    ],
    learningOutcomes: [
      'Establish a firm total budget ceiling before visiting the first venue or florist',
      'Negotiate service packages and remove unnecessary vendor surcharges',
      'Avoid entering marriage with thousands of dollars in high-interest credit card debt',
      'Track deposit due dates and balance payments smoothly'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Beginner',
    duration: '3 hours setup',
    pagesOrModules: '5 spreadsheet tabs · 50-page guide',
    tags: ['Wedding Budget', 'Event Planning', 'Vendor Contracts', 'Cash Flow'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-02', 'prod-06', 'prod-15'],
    reviews: [
      {
        id: 'rev-25',
        author: 'Jessica & Liam Davis',
        role: 'Newlyweds',
        rating: 5,
        date: 'February 2026',
        title: 'Kept our wedding under budget by $4,000',
        comment: 'Every single vendor was tracked to the dollar. We started our marriage completely debt-free and actually enjoyed the wedding day without financial dread.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-25',
    name: 'Modern Fixed Income & Bond Market Dynamics',
    slug: 'modern-fixed-income-bond-market-dynamics',
    category: 'Market Analysis',
    subcategory: 'Bonds & Fixed Income',
    price: 39,
    oldPrice: 50,
    rating: 4.7,
    reviewCount: 135,
    shortDescription: 'Deconstruct Treasury bills, corporate bonds, yield to maturity, duration risk, credit spreads, and municipal tax-free yields.',
    longDescription: 'For decades, retail investors treated bonds as simple safe havens without understanding how bond prices fluctuate inversely with interest rates. This guide breaks down effective duration, convexity, credit risk, Treasury Inflation-Protected Securities (TIPS), and bond ladders.',
    features: [
      'Treasury ladder builder spreadsheet optimizing 3-month to 5-year maturities',
      'Duration vs Yield sensitivity calculator estimating price shifts per 1% rate change',
      'Tax-Equivalent Yield calculator comparing taxable Treasuries to in-state Municipal bonds',
      'Complete guide to purchasing directly via TreasuryDirect without broker markup'
    ],
    learningOutcomes: [
      'Understand how bond duration dictates capital risk when central banks change rates',
      'Build a predictable cash ladder of short-term government paper for upcoming expenditures',
      'Evaluate whether municipal bonds offer superior after-tax returns in your tax bracket',
      'Differentiate between holding individual bonds to maturity versus owning aggregate bond funds'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '6 hours of study',
    pagesOrModules: '155 pages · 8 chapters',
    tags: ['Bonds', 'Treasuries', 'Fixed Income', 'Duration Risk'],
    image: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'market-explorer',
    relatedProductIds: ['prod-01', 'prod-10', 'prod-13'],
    reviews: [
      {
        id: 'rev-26',
        author: 'Gregory Shaw',
        role: 'Accountant',
        rating: 5,
        date: 'January 2026',
        title: 'Duration risk finally made intuitive sense',
        comment: 'The visual explanation of how a 7-year duration bond fund loses 7% of its value when rates climb 1% was crystal clear.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-26',
    name: 'First-Time Home Buyer Navigation System',
    slug: 'first-time-home-buyer-navigation-system',
    category: 'Personal Finance',
    subcategory: 'Real Estate',
    price: 36,
    oldPrice: 46,
    rating: 4.9,
    reviewCount: 240,
    shortDescription: 'From pre-approval and credit score hygiene to earnest money, home inspections, escrow, and closing day settlement statements.',
    longDescription: 'Buying your first house is often the largest financial commitment of your life. This guide demystifies conventional vs FHA loans, title insurance, home appraisals, escrow holdbacks, homeowner association (HOA) reserve audits, and moving day surprises.',
    features: [
      '50-step interactive home purchase roadmap from first search to key handover',
      'Closing costs estimator modeling transfer taxes, title policies, and points',
      'Home inspection negotiation script for requesting repairs or credit credits',
      'HOA financial health audit checklist (analyzing reserve funds and special assessments)'
    ],
    learningOutcomes: [
      'Obtain a genuine mortgage pre-approval without hurting your credit score',
      'Detect red flags in HOA balance sheets that signal impending multi-thousand dollar special assessments',
      'Negotiate seller credits after the home inspection reveals roofing or plumbing issues',
      'Review the Closing Disclosure document line-by-line to prevent lender fee padding'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '5 hours of study',
    pagesOrModules: '160 pages · 12 checklists',
    tags: ['First Home', 'Mortgage', 'Inspection', 'Closing Costs'],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80'
    ],
    isBestseller: true,
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-03', 'prod-16', 'prod-19'],
    reviews: [
      {
        id: 'rev-27',
        author: 'Aaron Klein',
        role: 'High School Principal',
        rating: 5,
        date: 'February 2026',
        title: 'Caught an HOA reserve deficit that saved us $15k',
        comment: 'Using the HOA audit checklist in Chapter 6, we discovered the condo building had less than 10% reserve funding and was about to levy a $15,000 roof assessment. Walked away and found a healthy building.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-27',
    name: 'Estate Planning & Digital Legacy Vault',
    slug: 'estate-planning-digital-legacy-vault',
    category: 'Personal Finance',
    subcategory: 'Estate Planning',
    price: 43,
    oldPrice: 55,
    rating: 4.8,
    reviewCount: 155,
    shortDescription: 'Wills, revocable living trusts, durable power of attorney, advance healthcare directives, and digital account succession.',
    longDescription: 'Without proper estate documents, the state decides who raises your minor children and probate courts consume significant portions of your assets. This toolkit provides legal educational frameworks, inventory forms for physical and digital assets, and clear instructions for organizing your affairs.',
    features: [
      'Comprehensive Digital Legacy Vault inventorying accounts, passwords, and 2FA recovery keys',
      'Will vs Trust decision framework detailing probate avoidance',
      'Healthcare proxy and living will decision worksheets',
      'Beneficiary designation audit checklist across all bank and investment accounts'
    ],
    learningOutcomes: [
      'Keep your assets out of costly and public probate proceedings',
      'Designate guardians for minor children and trustees for inherited assets',
      'Ensure your digital identities, crypto keys, and family photo archives are safely passed on',
      'Align beneficiary designations with your core intentions'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Intermediate',
    duration: '5 hours organization',
    pagesOrModules: 'Interactive tool · 90-page manual',
    tags: ['Estate Planning', 'Wills', 'Trusts', 'Digital Vault'],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-03', 'prod-15', 'prod-10'],
    reviews: [
      {
        id: 'rev-28',
        author: 'Deborah Jenkins',
        role: 'Nurse Practitioner',
        rating: 5,
        date: 'January 2026',
        title: 'Such a relief to have our family affairs organized',
        comment: 'My husband and I put off doing this for 8 years because it felt morbid and confusing. This toolkit made it methodical and straightforward.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-28',
    name: 'The Conscious Spender: Values-Based Budgeting',
    slug: 'conscious-spender-values-based-budgeting',
    category: 'Financial Psychology',
    subcategory: 'Values Spending',
    price: 31,
    oldPrice: 39,
    rating: 4.9,
    reviewCount: 195,
    shortDescription: 'Spend lavishly on the few things you deeply love while cutting costs mercilessly on the things you do not care about.',
    longDescription: 'Frugality for its own sake leads to burnout and binge spending. Inspired by Ramit Sethi’s conscious spending philosophy, this framework teaches you how to identify your "Money Dials" (travel, dining, convenience, fitness, craft) and redirect cash from mindless background leaks into high-joy experiences.',
    features: [
      'Money Dial diagnostic assessment ranking your top 3 personal joy priorities',
      'Guilt-free spending quota calculator built into monthly cash flow',
      'The 4-Category Conscious Spending Plan template',
      'Reframing scripts for declining social spending that does not align with your goals'
    ],
    learningOutcomes: [
      'Stop feeling guilty about spending money on passions you genuinely care about',
      'Ruthlessly eliminate secondary spending on prestige goods that impress strangers',
      'Automate your fixed costs and investments first so all remaining funds are 100% guilt-free',
      'Say "no" gracefully to expensive social invitations without embarrassment'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '3.5 hours of study',
    pagesOrModules: '120 pages · 5 exercises',
    tags: ['Conscious Spending', 'Money Dials', 'Joy Allocation', 'Guilt-Free'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-02', 'prod-06', 'prod-15'],
    reviews: [
      {
        id: 'rev-29',
        author: 'Leo Martinez',
        role: 'Photographer',
        rating: 5,
        date: 'March 2026',
        title: 'Completely changed how I look at my hobbies',
        comment: 'I used to feel guilty every time I bought camera gear, even though I saved 30% of my income. This framework showed me that saving first earns you total freedom to enjoy the rest.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-29',
    name: 'Global Currency & Expat Financial Framework',
    slug: 'global-currency-expat-financial-framework',
    category: 'Personal Finance',
    subcategory: 'International Finance',
    price: 47,
    oldPrice: 60,
    rating: 4.7,
    reviewCount: 110,
    shortDescription: 'Multi-currency banking, Foreign Earned Income Exclusion (FEIE), FBAR compliance, cross-border brokerage transfers, and expat tax rules.',
    longDescription: 'Living or working abroad creates complex financial hurdles. From dual tax reporting and reporting foreign bank accounts (FBAR) to choosing multi-currency digital banks and avoiding currency exchange fees, this guide protects global citizens and digital nomads from tax penalties.',
    features: [
      'US Expat Tax decision tree for FEIE vs Foreign Tax Credit (FTC)',
      'FBAR and FATCA reporting threshold checklist',
      'Multi-currency banking setup guide (Wise, Revolut, HSBC Expat)',
      'Cross-border investment brokerage directory for non-residents'
    ],
    learningOutcomes: [
      'Choose whether FEIE or FTC provides superior tax advantages based on your host country',
      'File mandatory annual foreign financial account reports accurately and on time',
      'Transfer funds between international accounts at true interbank exchange rates',
      'Maintain compliant low-cost investment portfolios while residing overseas'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Advanced',
    duration: '7 hours of study',
    pagesOrModules: '180 pages · 8 chapters',
    tags: ['Expat', 'FEIE', 'FBAR', 'Multi-Currency'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-01', 'prod-08', 'prod-14'],
    reviews: [
      {
        id: 'rev-30',
        author: 'Julianne Berg',
        role: 'Remote UX Lead in Lisbon',
        rating: 5,
        date: 'February 2026',
        title: 'Saved me from a nightmare FBAR penalty',
        comment: 'Expat finance is fraught with traps. This book clearly mapped out how my Portuguese accounts needed to be reported back home. Indispensable for nomads.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-30',
    name: 'Small Business Unit Economics & Cash Flow Modeler',
    slug: 'small-business-unit-economics-modeler',
    category: 'Career & Income',
    subcategory: 'Entrepreneurship',
    price: 49,
    oldPrice: 65,
    rating: 4.8,
    reviewCount: 145,
    shortDescription: 'Calculate customer acquisition cost (CAC), lifetime value (LTV), gross margins, working capital requirements, and 13-week cash forecasts.',
    longDescription: 'Profitable businesses still go bankrupt if they run out of cash before customer invoices clear. This financial modeler gives early-stage founders and small business operators a 13-week rolling cash flow forecast, inventory holding cost calculators, and unit economic health checks.',
    features: [
      '13-Week Direct Cash Flow forecast spreadsheet with burn-rate alerts',
      'LTV-to-CAC ratio model factoring in churn and gross margin adjustments',
      'Working capital and accounts receivable aging schedule',
      'Pricing sensitivity matrix testing product margin adjustments'
    ],
    learningOutcomes: [
      'Forecast exactly when cash balances will peak or dip over the upcoming quarter',
      'Calculate true fully-loaded customer acquisition costs across marketing channels',
      'Prevent rapid inventory expansion from choking operational payroll',
      'Price products and services to ensure healthy, sustainable gross profit margins'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Intermediate',
    duration: '6 hours setup',
    pagesOrModules: '6 spreadsheet tabs · 65-page guide',
    tags: ['Small Business', 'Unit Economics', 'CAC LTV', '13-Week Cash'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-04', 'prod-08', 'prod-07'],
    reviews: [
      {
        id: 'rev-31',
        author: 'Dominic Silva',
        role: 'Coffee Roastery Founder',
        rating: 5,
        date: 'February 2026',
        title: 'The 13-week cash forecast saved our second location',
        comment: 'Seeing a $20,000 cash trough projected 8 weeks out gave us time to renegotiate equipment leases rather than bouncing payroll. Essential.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-31',
    name: 'Healthcare & HSA Maximizer: The Triple-Tax Shield',
    slug: 'healthcare-hsa-maximizer-triple-tax-shield',
    category: 'Personal Finance',
    subcategory: 'Healthcare',
    price: 29,
    oldPrice: 38,
    rating: 4.9,
    reviewCount: 210,
    shortDescription: 'Unlock the only account with tax-deductible contributions, tax-free growth, and tax-free withdrawals for healthcare and retirement.',
    longDescription: 'Most people treat their Health Savings Account (HSA) like a debit card for pharmacy visits, spending contributions immediately. This strategy teaches you how to pay current minor medical bills out of pocket, save receipts digitally, let your HSA funds compound in broad-market index funds, and reimburse yourself tax-free decades later.',
    features: [
      'High Deductible Health Plan (HDHP) vs Traditional PPO breakeven calculator',
      'HSA long-term compounding projection model over 20- and 30-year spans',
      'Digital medical receipt vault template for lifelong tax-free withdrawals',
      'Allowable medical expenses guide according to IRS Publication 502'
    ],
    learningOutcomes: [
      'Determine if choosing an HDHP with an HSA beats a standard PPO plan for your medical usage',
      'Turn your HSA into a stealth supplemental retirement account',
      'Archive medical receipts to execute tax-free withdrawals at any point in the future',
      'Avoid paying payroll and federal taxes on invested healthcare contributions'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '3 hours of study',
    pagesOrModules: '95 pages · 4 worksheets',
    tags: ['HSA', 'Healthcare', 'Triple Tax', 'HDHP'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-05', 'prod-14'],
    reviews: [
      {
        id: 'rev-32',
        author: 'Zachary Cole',
        role: 'Bioinformatics Engineer',
        rating: 5,
        date: 'March 2026',
        title: 'Blew my mind. The best tax-sheltered account available.',
        comment: 'I had no idea I could let my HSA contributions invest in Vanguard index funds. My balance has grown to $18,000 completely tax-free.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-32',
    name: 'The Zero-Debt Car Purchase Masterclass',
    slug: 'zero-debt-car-purchase-masterclass',
    category: 'Budgeting',
    subcategory: 'Transportation',
    price: 26,
    oldPrice: 34,
    rating: 4.8,
    reviewCount: 165,
    shortDescription: 'Beat auto dealership finance tricks, calculate total cost of ownership (TCO), and buy reliable pre-owned vehicles with cash.',
    longDescription: 'Automobile loans have become one of the premier wealth destroyers in modern society, with 84-month terms and high interest rates on rapidly depreciating assets. This masterclass arms you with negotiation frameworks, dealership F&I (Finance & Insurance) red-flag scripts, and vehicle sinking fund schedules.',
    features: [
      'Total Cost of Ownership (TCO) calculator incorporating depreciation, insurance, and maintenance',
      'Dealership email negotiation script enabling you to buy at invoice pricing from home',
      'Pre-purchase private party inspection checklist',
      'Sinking fund replacement model: never taking out an auto loan again'
    ],
    learningOutcomes: [
      'Negotiate vehicle purchase prices over email and walk into the dealership only to sign',
      'Decline overpriced dealer add-ons (gap insurance, VIN etching, paint protection)',
      'Calculate the real annual depreciation and insurance impact of different vehicle classes',
      'Save for your next vehicle in a high-yield account so you earn interest instead of paying it'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '3 hours of study',
    pagesOrModules: '85 pages · 5 email templates',
    tags: ['Auto Loans', 'Car Buying', 'TCO', 'Negotiation'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
    ],
    collectionSlug: 'money-reset',
    relatedProductIds: ['prod-02', 'prod-09', 'prod-16'],
    reviews: [
      {
        id: 'rev-33',
        author: 'Anthony Reed',
        role: 'Mechanical Technician',
        rating: 5,
        date: 'March 2026',
        title: 'Saved $2,800 on dealer markup fees',
        comment: 'Using the email template in chapter 4, I had three dealerships competing on price before I ever stepped foot on a car lot. Signed and left in 40 minutes.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-33',
    name: 'Behavioral Investor: Conquering Volatility Biases',
    slug: 'behavioral-investor-conquering-volatility-biases',
    category: 'Financial Psychology',
    subcategory: 'Investor Psychology',
    price: 34,
    oldPrice: 44,
    rating: 4.9,
    reviewCount: 188,
    shortDescription: 'Combat loss aversion, recency bias, herd mentality, and FOMO during market crashes and euphoric bubbles.',
    longDescription: 'The greatest threat to an investor’s lifetime net worth is not macroeconomic downturns, but the person looking back in the mirror. When stock prices drop 25%, human neurology signals mortal danger, urging panic liquidations. This guide deconstructs Kahneman and Tversky’s prospect theory and equips you with written Investment Policy Statements (IPS).',
    features: [
      'Personalized Investment Policy Statement (IPS) contract builder',
      'Cognitive bias audit identifying your specific behavioral pitfalls',
      'Crash protocol checklist for bear market corrections',
      'Case studies of past financial bubbles (Dot-Com, 2008, 2021)'
    ],
    learningOutcomes: [
      'Write a legally non-binding but psychologically binding personal Investment Policy Statement',
      'Prevent selling at the exact bottom during market panics',
      'Identify narrative fallacies in financial media designed to spark trading volume',
      'Automate rebalancing to systematically buy when others are fearful'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '4 hours of study',
    pagesOrModules: '150 pages · 7 chapters',
    tags: ['Behavioral Finance', 'Loss Aversion', 'IPS', 'Bear Markets'],
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-01', 'prod-06', 'prod-18'],
    reviews: [
      {
        id: 'rev-34',
        author: 'Soren Lind',
        role: 'Biochemist',
        rating: 5,
        date: 'March 2026',
        title: 'The Investment Policy Statement saved me from myself',
        comment: 'Having a signed physical contract with myself on what to do during a 20% drawdown completely eliminated my panic.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-34',
    name: 'Solo 401(k) & SEP IRA Architecture for Solo Founders',
    slug: 'solo-401k-sep-ira-architecture-solo-founders',
    category: 'Career & Income',
    subcategory: 'Self-Employed Retirement',
    price: 45,
    oldPrice: 58,
    rating: 4.8,
    reviewCount: 120,
    shortDescription: 'Shelter up to $69,000+ per year in pre-tax or Roth retirement accounts as a solopreneur, freelancer, or single-owner LLC.',
    longDescription: 'Single-member business owners have access to the most lucrative retirement tax shelters in the United States, yet most default to basic traditional IRAs with small $7,000 limits. This guide teaches you how to establish a self-directed Solo 401(k) with both employee and employer profit-sharing contributions.',
    features: [
      'Solo 401(k) vs SEP IRA vs SIMPLE IRA comparison decision matrix',
      'Maximum employer profit-sharing contribution calculator',
      'Mega-Backdoor Roth Solo 401(k) plan adoption agreement checklist',
      'IRS Form 5500-EZ filing guide for plans crossing $250k in assets'
    ],
    learningOutcomes: [
      'Contribute as both employee and employer to defer massive amounts of business income',
      'Adopt a customized plan document that allows Roth employee contributions and loan provisions',
      'Avoid triggering prohibited transaction penalties with the IRS',
      'Coordinate W-2 retirement limits if you run a side business alongside day employment'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Advanced',
    duration: '5 hours of study',
    pagesOrModules: '140 pages · 6 plan templates',
    tags: ['Solo 401k', 'SEP IRA', 'Solopreneur', 'Tax Shelter'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-08', 'prod-14', 'prod-30'],
    reviews: [
      {
        id: 'rev-35',
        author: 'Kyle Vance',
        role: 'Independent Tech Consultant',
        rating: 5,
        date: 'February 2026',
        title: 'Sheltered $48,000 in my first year with this model',
        comment: 'Clear, concise instructions on setting up the plan document with Fidelity. Superb guidance for self-employed professionals.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-35',
    name: 'Personal Cyber Security & Financial Fraud Defense',
    slug: 'personal-cyber-security-financial-fraud-defense',
    category: 'Personal Finance',
    subcategory: 'Security',
    price: 29,
    oldPrice: 38,
    rating: 4.9,
    reviewCount: 215,
    shortDescription: 'Lock down credit bureaus, harden brokerage 2FA with hardware keys, defeat SIM swaps, and eliminate data broker leaks.',
    longDescription: 'In an era of synthetic identity theft, sophisticated AI voice cloning scams, and dark-web credential dumps, traditional financial security is failing. This protocol provides a hardened 10-step security posture: freezing all three major credit bureaus, removing personal info from data brokers, using YubiKeys, and isolating financial email addresses.',
    features: [
      'Credit Bureau Freeze direct links and step-by-step unfreeze playbook (Experian, TransUnion, Equifax, ChexSystems)',
      'Hardware security key (FIDO2/WebAuthn) setup guide for banking and email accounts',
      'Data broker removal script directory for 40+ public people-search directories',
      'SIM-swap prevention guide: setting carrier verbal PINs and port freezes'
    ],
    learningOutcomes: [
      'Permanently freeze your credit files so unauthorized credit lines cannot be opened',
      'Replace vulnerable SMS two-factor authentication with phishing-resistant security keys',
      'Protect your home address and phone number from being indexed on public data broker sites',
      'Safeguard elderly parents and family members from financial voice-cloning scams'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '3.5 hours setup',
    pagesOrModules: 'Interactive tool · 80-page manual',
    tags: ['Cyber Security', 'Credit Freeze', 'YubiKey', 'Identity Theft'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80'],
    isBestseller: true,
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-15', 'prod-27', 'prod-03'],
    reviews: [
      {
        id: 'rev-36',
        author: 'Elena Gomez',
        role: 'Information Security Analyst',
        rating: 5,
        date: 'March 2026',
        title: 'As a security engineer, I recommend this to everyone I know',
        comment: 'Freezing ChexSystems in addition to the big 3 bureaus is something 99% of people miss. Outstanding, practical guide.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-36',
    name: 'The Sabbatical & Career Break Financial Planner',
    slug: 'sabbatical-career-break-financial-planner',
    category: 'Career & Income',
    subcategory: 'Career Breaks',
    price: 33,
    oldPrice: 42,
    rating: 4.8,
    reviewCount: 140,
    shortDescription: 'How to finance a 6-to-12 month intentional career pause, travel, upskill, or pivot without destroying lifetime retirement compounding.',
    longDescription: 'Taking a career sabbatical should not be a reckless gamble. With proper financial engineering, an intentional pause can rejuvenate your mental health and dramatically accelerate future earnings. This planner calculates your Sabbatical Runway Number, covers health insurance bridges (COBRA vs ACA marketplace), and plans a confident re-entry narrative.',
    features: [
      'Dynamic Sabbatical Runway calculator modeling monthly burn rate and travel expenses',
      'Opportunity cost simulator comparing continuous work vs taking 6 months off',
      'Health insurance transition guide for bridging employment gaps',
      'Resume framing and interview narrative scripts for explaining your break to recruiters'
    ],
    learningOutcomes: [
      'Fund a dedicated sabbatical bank silo without liquidating long-term retirement accounts',
      'Estimate the true lifetime net impact on compound growth and see that it is minimal if planned',
      'Secure comprehensive medical insurance during non-working months',
      'Return to the workforce with higher energy, newly acquired skills, and strong compensation leverage'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '4 hours of study',
    pagesOrModules: '135 pages · 4 calculators',
    tags: ['Sabbatical', 'Career Break', 'Runway', 'Work-Life'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-07', 'prod-16', 'prod-06'],
    reviews: [
      {
        id: 'rev-37',
        author: 'Julian Barnes',
        role: 'Former Senior Engineer',
        rating: 5,
        date: 'January 2026',
        title: 'Gave me the courage and math to take 8 months off',
        comment: 'I spent 8 months traveling and studying machine learning. The runway calculator was accurate to within $200. Returned to a 20% higher salary.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-37',
    name: 'College Savings Architect: 529 Plans & Beyond',
    slug: 'college-savings-architect-529-plans',
    category: 'Student & Early Career',
    subcategory: 'College Planning',
    price: 30,
    oldPrice: 40,
    rating: 4.8,
    reviewCount: 160,
    shortDescription: 'Tax-free educational growth, state tax deductions, 529-to-Roth IRA rollovers under SECURE 2.0, and financial aid FAFSA impacts.',
    longDescription: 'Saving for a child’s future education without sacrificing your own retirement requires tactical balance. This guide explains how 529 plans work, how SECURE 2.0 now allows up to $35,000 of unused 529 funds to roll over into the beneficiary’s Roth IRA, and how different savings vehicles affect financial aid formulas on the FAFSA.',
    features: [
      'State-by-state 529 tax deduction and fee comparison matrix',
      'FAFSA asset assessment calculator (Parental vs Student asset weighting)',
      'SECURE 2.0 529-to-Roth conversion qualification rulebook',
      'Target-date education glide-path allocation schedule'
    ],
    learningOutcomes: [
      'Choose the best 529 plan in the nation regardless of where your state of residence is',
      'Avoid the fear of over-saving thanks to new rules permitting Roth IRA rollovers',
      'Structure assets to minimize negative drag on need-based collegiate financial aid',
      'Involve grandparents and relatives with coordinated gifting schedules'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Intermediate',
    duration: '4 hours of study',
    pagesOrModules: '125 pages · 6 chapters',
    tags: ['529 Plan', 'College Savings', 'FAFSA', 'SECURE 2.0'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'smart-student',
    relatedProductIds: ['prod-05', 'prod-11', 'prod-21'],
    reviews: [
      {
        id: 'rev-38',
        author: 'Rachel Lin-Cooper',
        role: 'Pediatrician',
        rating: 5,
        date: 'March 2026',
        title: 'The SECURE 2.0 Roth conversion explanation was huge',
        comment: 'We were nervous about putting too much in a 529 in case our daughter receives a scholarship. Knowing $35k can convert to her Roth IRA gave us total peace of mind.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-38',
    name: 'Quantitative Portfolio Rebalancing & Drift Triggers',
    slug: 'quantitative-portfolio-rebalancing-drift-triggers',
    category: 'Investing',
    subcategory: 'Portfolio Management',
    price: 39,
    oldPrice: 50,
    rating: 4.8,
    reviewCount: 150,
    shortDescription: 'Implement calendar vs opportunistic tolerance-band rebalancing (5/25 rule) to capture buy-low-sell-high returns without tax drag.',
    longDescription: 'Rebalancing is the only free lunch in portfolio management where you systematically force yourself to sell winning, overvalued assets and purchase undervalued ones. This technical guide compares annual calendar rebalancing against dynamic 5/25 tolerance-band rebalancing and cash-flow routing rebalancing.',
    features: [
      '5/25 Tolerance-Band spreadsheet with automated rebalance alerts',
      'Cash-flow rebalancing model (rebalancing solely through new monthly contributions)',
      'Tax-efficient asset rebalancing guide in taxable brokerage accounts',
      'Historical 50-year backtests comparing rebalancing frequencies'
    ],
    learningOutcomes: [
      'Maintain target risk allocations without triggering unnecessary taxable capital gains events',
      'Use monthly dollar-cost averaging deposits to naturally restore drifting asset targets',
      'Understand how tolerance bands outperform rigid calendar-day rebalancing',
      'Remove all emotional second-guessing when rebalancing during market turbulence'
    ],
    format: 'Spreadsheet System',
    difficulty: 'Advanced',
    duration: '5 hours setup',
    pagesOrModules: '4 spreadsheet tabs · 60-page PDF',
    tags: ['Rebalancing', 'Tolerance Bands', 'Asset Allocation', 'Drift'],
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'wealth-foundations',
    relatedProductIds: ['prod-01', 'prod-14', 'prod-18'],
    reviews: [
      {
        id: 'rev-39',
        author: 'Dmitri Pavlov',
        role: 'Quantitative Developer',
        rating: 5,
        date: 'February 2026',
        title: 'The math on the 5/25 rule is airtight',
        comment: 'Rebalancing by directing new inbound salary rather than selling assets saved me several thousand in capital gains taxes this year alone.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-39',
    name: 'The Modern Credit Card Optimization Engine',
    slug: 'modern-credit-card-optimization-engine',
    category: 'Personal Finance',
    subcategory: 'Credit & Rewards',
    price: 28,
    oldPrice: 38,
    rating: 4.9,
    reviewCount: 290,
    shortDescription: 'Leverage signup bonuses, transfer partners, merchant category codes, and travel protections with zero interest paid.',
    longDescription: 'Credit card rewards are an asymmetric game: card issuers rely on revolving debt interest to subsidize rewards for disciplined payers. This guide shows you how to treat credit cards purely as transactional payment rails with automated autopay, while extracting $1,500+ annually in flights, hotels, and merchant cashback.',
    features: [
      'Credit card rewards optimization matrix mapping top cards to spending categories',
      'Annual fee vs net perk value justification calculator',
      'Airline and hotel transfer partner conversion cheat sheet',
      'FICO score impact simulator for new account openings'
    ],
    learningOutcomes: [
      'Maintain an 800+ credit score while strategically taking advantage of card welcome bonuses',
      'Transfer flexible bank points directly to international frequent flyer programs for maximum value',
      'Never carry a balance or pay a single cent in punitive 24%+ interest charges',
      'Utilize primary rental car insurance, trip delay coverage, and purchase protection benefits'
    ],
    format: 'Interactive Toolkit',
    difficulty: 'Beginner',
    duration: '3 hours of study',
    pagesOrModules: 'Interactive tool · 85-page manual',
    tags: ['Credit Cards', 'Points & Miles', 'FICO', 'Travel Rewards'],
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224d?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1556742049-0a67e557224d?auto=format&fit=crop&w=1000&q=80'],
    isBestseller: true,
    collectionSlug: 'financial-confidence',
    relatedProductIds: ['prod-02', 'prod-05', 'prod-11'],
    reviews: [
      {
        id: 'rev-40',
        author: 'Lucas Bennett',
        role: 'Management Consultant',
        rating: 5,
        date: 'March 2026',
        title: 'Booked our roundtrip flights to Tokyo entirely with points',
        comment: 'The point transfer partner roadmap demystified airline alliances. We saved over $3,200 on flights without changing our normal living expenses.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-40',
    name: 'The Cashless Travel & Global Nomad Money Guide',
    slug: 'cashless-travel-global-nomad-money-guide',
    category: 'Personal Finance',
    subcategory: 'Travel Finance',
    price: 26,
    oldPrice: 34,
    rating: 4.8,
    reviewCount: 170,
    shortDescription: 'Zero-FX-fee cards, international ATM reimbursement, dynamic currency conversion traps, and local mobile wallets around the globe.',
    longDescription: 'Traveling abroad should not mean losing 5% to 8% of your money to airport currency exchange booths, shady ATM fees, and misleading card terminal prompts asking to charge you in your home currency. This guide equips international travelers with a frictionless global financial stack.',
    features: [
      'Directory of zero-foreign-transaction-fee and worldwide ATM fee-rebate checking accounts',
      'Dynamic Currency Conversion (DCC) alert cards: why you must always pay in local currency',
      'International mobile wallet setup for Asia, Europe, and Latin America',
      'Offline emergency backup payment protocol for lost wallets or stolen phones'
    ],
    learningOutcomes: [
      'Eliminate all foreign transaction fees and ATM surcharge fees worldwide',
      'Instantly recognize and decline predatory Dynamic Currency Conversion on payment terminals',
      'Carry encrypted virtual backup cards accessible via secondary devices',
      'Exchange foreign currencies at mid-market spot exchange rates'
    ],
    format: 'Digital Guide & PDF',
    difficulty: 'Beginner',
    duration: '2.5 hours of study',
    pagesOrModules: '75 pages · 5 checklists',
    tags: ['Travel Finance', 'Zero FX', 'ATMs', 'Global Banking'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    gallery: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80'],
    collectionSlug: 'future-builder',
    relatedProductIds: ['prod-29', 'prod-39', 'prod-35'],
    reviews: [
      {
        id: 'rev-41',
        author: 'Chloe Tremblay',
        role: 'Travel Journalist',
        rating: 5,
        date: 'March 2026',
        title: 'Essential advice on declining dynamic currency conversion',
        comment: 'I had no idea card machines in European restaurants were charging a 7% markup when I selected USD. That tip alone saved me hundreds on my last trip.',
        verified: true
      }
    ]
  }
];
