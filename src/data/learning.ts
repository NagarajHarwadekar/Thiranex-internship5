import { Article, Guide, GlossaryTerm } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'the-mathematics-of-low-cost-index-funds',
    title: 'The Unforgiving Mathematics of Investment Expense Ratios',
    category: 'Investing',
    readTime: '6 min read',
    difficulty: 'Fundamentals',
    date: 'February 2026',
    summary: 'Why an seemingly innocent 1% annual advisory or mutual fund fee consumes over 28% of your total lifetime retirement portfolio.',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Research Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Compound interest works just as aggressively in reverse for investment management fees.',
      'A 1.0% fee over 30 years robs an investor of roughly one-quarter to one-third of terminal wealth.',
      'Broad-market index funds charge between 0.03% and 0.08%, returning 99.9% of market gains directly to you.',
      'Always inspect the net expense ratio on fund prospectuses rather than relying on glossy broker brochures.'
    ],
    content: [
      'When an investment advisor or active mutual fund advertises a 1% management fee, the human mind instinctively benchmarks it against 100%: "Well, 1% leaves me with 99%, which sounds negligible."',
      'This cognitive trap conflates principal with returns. A 1% fee is not assessed on your annual profit; it is levied relentlessly against your entire portfolio balance every single year, regardless of whether the market rose 20% or plummeted 15%.',
      'Consider two investors, each starting with $50,000 and contributing $1,000 per month over 35 years at an 8% gross market return. Investor A selects a low-cost broad-market index fund charging 0.04%. Investor B selects an actively managed fund charging 1.04%.',
      'At the conclusion of year 35, Investor A holds approximately $2,830,000. Investor B holds approximately $2,040,000. The seemingly minor 1% delta cost Investor B over $790,000 in cold, hard cash.',
      'This is the tyranny of compounding costs: costs are certain, but future market outperformance by active managers is statistically rare over multi-decade spans.'
    ]
  },
  {
    id: 'art-02',
    slug: 'anatomy-of-a-zero-based-cash-flow-system',
    title: 'Anatomy of a Zero-Based Cash Flow System',
    category: 'Budgeting',
    readTime: '7 min read',
    difficulty: 'Fundamentals',
    date: 'January 2026',
    summary: 'How assigning every single incoming dollar a specific job before the month starts permanently ends retrospective spending anxiety.',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Zero-based budgeting does not mean having zero dollars in your checking account.',
      'Income minus allocations must equal zero on paper before the month begins.',
      'Sinking funds convert predictable non-monthly bills into smooth monthly line items.',
      'Automated account routing eliminates the need to manually track daily coffee receipts.'
    ],
    content: [
      'Most people practice retrospective tracking: they spend money freely across credit cards throughout the month, wait for the statements to arrive on the 28th, experience a wave of mild panic, and vow to "do better next month."',
      'Zero-based cash flow reverses this equation. Instead of looking backward in regret, you conduct an intentional resource allocation meeting on the last Sunday of each month.',
      'Every single expected dollar of net income is distributed into distinct buckets: Fixed Living Essentials (rent, utilities, groceries), Sinking Reserves (car insurance, annual taxes, dental), Long-Term Wealth (Roth IRA, brokerage), and Guilt-Free Discretionary spending.',
      'When your checking account contains only the exact sum pre-designated for discretionary enjoyment, spending it generates zero guilt because all savings and obligations were fully funded on day one.'
    ]
  },
  {
    id: 'art-03',
    slug: 'the-three-fund-portfolio-explained',
    title: 'The Elegant Power of the Three-Fund Portfolio',
    category: 'Investing',
    readTime: '8 min read',
    difficulty: 'Fundamentals',
    date: 'February 2026',
    summary: 'Why owning three simple index funds captures the entire global economy with maximum diversification and minimum operational complexity.',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Research Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'A Three-Fund Portfolio covers US Total Stock Market, International Total Stock Market, and Total Bond Market.',
      'It holds over 10,000 individual global corporations across all sectors and market capitalizations.',
      'It requires less than 30 minutes of operational maintenance per year.',
      'Complexity in finance is usually designed to enrich brokers, not individual investors.'
    ],
    content: [
      'Financial institutions profit by convincing retail investors that wealth accumulation is an arcane, hyper-specialized science requiring proprietary algorithms and expensive hedge-fund structures.',
      'In reality, the Three-Fund Portfolio pioneered by Jack Bogle and championed by the Bogleheads community provides institutional-grade diversification using three transparent, low-cost building blocks.',
      'Fund 1 is a Total US Stock Market index (such as VTI or FSKAX), capturing large-cap tech, mid-cap industrials, and small-cap innovators. Fund 2 is a Total International Stock Market index (such as VXUS), granting ownership in thousands of developed and emerging market titans across Europe, Asia, and Latin America.',
      'Fund 3 is an Aggregate Bond Market index (such as BND), serving as a volatility shock absorber and capital preservation anchor.',
      'By tuning the ratio between stocks and bonds to match your personal time horizon and risk tolerance, you possess an all-weather portfolio that cannot be disrupted by any individual corporate collapse.'
    ]
  },
  {
    id: 'art-04',
    slug: 'emergency-fund-hierarchy-tiers',
    title: 'The Liquidity Ladder: Tiering Your Emergency Cash',
    category: 'Saving',
    readTime: '5 min read',
    difficulty: 'Fundamentals',
    date: 'January 2026',
    summary: 'Stop letting six months of emergency reserves rot at 0.01% in traditional checking accounts. How to tier cash safely for yield and instant access.',
    author: {
      name: 'Marcus Vance',
      role: 'Quantitative Finance Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Tier 1: 1 month of living expenses in primary checking for frictionless cash flow.',
      'Tier 2: 2–3 months in an FDIC-insured High-Yield Savings Account (HYSA) reachable in 24 hours.',
      'Tier 3: 2–3 months in rolling short-term US Treasury Bills (state tax-exempt) or Money Market Funds.',
      'An emergency fund is insurance, not an equity growth engine—prioritize safety over yield chasing.'
    ],
    content: [
      'Keeping six months of household expenses sitting in a traditional legacy bank account earning 0.01% APY guarantees that inflation steadily erodes your purchasing power year after year.',
      'Conversely, locking emergency cash in illiquid certificates of deposit or volatile stock funds risks forcing you into untimely liquidations during market downturns.',
      'The modern solution is a Three-Tier Liquidity Ladder. Tier 1 resides directly in your transactional checking account, acting as a shock absorber against everyday overdrafts.',
      'Tier 2 is deposited in a reputable High-Yield Savings Account (yielding 4% to 5%), where funds can be transferred electronically to checking within one business day.',
      'Tier 3 is held in 4-week to 13-week Treasury Bills or Treasury-only money market funds, which provide peak safety backed by the full faith and credit of the US government while shielding income from state and local taxes.'
    ]
  },
  {
    id: 'art-05',
    slug: 'the-stealth-retirement-account-hsa',
    title: 'The Stealth Retirement Account: Why the HSA is King',
    category: 'Personal Finance',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    date: 'March 2026',
    summary: 'Deconstructing the triple-tax advantage: tax-deductible contributions, tax-free investment growth, and tax-free qualified withdrawals.',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Research Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'HSAs are the only accounts in the United States offering a true triple-tax advantage.',
      'Contributions through payroll escape federal income tax, state income tax, and FICA payroll taxes.',
      'You are never required by law to reimburse medical expenses in the same calendar year they occurred.',
      'After age 65, non-medical withdrawals function identically to a traditional IRA with ordinary income tax.'
    ],
    content: [
      'Traditional 401(k) accounts offer pre-tax contributions but tax your withdrawals in retirement. Roth IRAs use post-tax contributions but allow tax-free withdrawals. The Health Savings Account (HSA) is the sole vehicle that provides both advantages simultaneously.',
      'When funded via payroll deduction through a qualifying High Deductible Health Plan (HDHP), HSA contributions bypass FICA taxes (saving an immediate 7.65%), state income taxes, and federal income taxes.',
      'The advanced strategy practiced by financially literate individuals is to treat the HSA not as a transactional debit card, but as an aggressive investment account. By paying small out-of-pocket medical expenses from cash flow and scanning the receipts into a cloud archive, the invested HSA capital compounds completely tax-free.',
      'Thirty years later in retirement, you can present those accumulated receipts and withdraw tens of thousands of dollars completely tax-free for any purpose whatsoever.'
    ]
  },
  {
    id: 'art-06',
    slug: 'understanding-asset-location',
    title: 'Asset Location: Where You Hold Assets Matters As Much As What You Hold',
    category: 'Investing',
    readTime: '7 min read',
    difficulty: 'Deep Dive',
    date: 'February 2026',
    summary: 'A mathematical guide to placing bonds, dividend stocks, and index ETFs across taxable, traditional tax-deferred, and Roth accounts.',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Asset Allocation is deciding the ratio of stocks to bonds. Asset Location is deciding which account holds which asset.',
      'Taxable accounts: Prioritize broad-market equity index funds for low turnover and qualified dividend rates.',
      'Tax-deferred accounts (Traditional 401k/IRA): Ideal for taxable bond funds and REITs that produce ordinary income.',
      'Roth accounts: Hold your highest expected growth assets (emerging markets, small-cap value) for permanent tax-free compounding.'
    ],
    content: [
      'Most investors consider their portfolio as a single aggregate pie chart: 80% equities, 20% bonds. However, if those assets are scattered randomly across a taxable brokerage, a traditional 401(k), and a Roth IRA, you are suffering significant tax drag.',
      'Bonds and Real Estate Investment Trusts (REITs) pay interest distributions that are taxed at your highest marginal ordinary income tax rate. Placing bond funds inside a taxable account generates a recurring annual tax bill.',
      'By contrast, holding broad-market equity index funds (like total stock market ETFs) in a taxable account is remarkably tax-efficient because ETFs rarely distribute capital gains, and qualified dividends receive preferential lower tax rates.',
      'Meanwhile, because Roth IRAs are permanently exempt from taxes upon withdrawal, they should house the asset classes with the highest long-term expected returns, ensuring that your largest compound gains are never taxed.'
    ]
  },
  {
    id: 'art-07',
    slug: '50-30-20-budget-rule-modern-context',
    title: 'The 50/30/20 Rule: Modernized for High-Cost Cities',
    category: 'Budgeting',
    readTime: '6 min read',
    difficulty: 'Fundamentals',
    date: 'March 2026',
    summary: 'Evaluating Senator Elizabeth Warren’s classic benchmark in an era of elevated metropolitan housing costs and student loan burdens.',
    author: {
      name: 'Marcus Vance',
      role: 'Quantitative Finance Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      '50% Needs: Housing, groceries, healthcare, minimum debt service, baseline utilities.',
      '30% Wants: Dining, entertainment, travel, personal grooming, subscriptions.',
      '20% Savings: Emergency fund, retirement accounts, extra principal debt reduction.',
      'In Tier-1 metro areas, a 60/20/20 distribution is often more realistic during early career phases.'
    ],
    content: [
      'The 50/30/20 framework gained widespread popularity because it replaced tedious category micromanagement with three broad behavioral guardrails.',
      'However, in modern metropolitan hubs like San Francisco, New York, London, or Toronto, housing alone often consumes 40% of after-tax income, leaving only 10% for utilities, food, and transport to stay within the classical "50% Needs" ceiling.',
      'When needs expand to 60%, the instinct is often to squeeze the 20% savings bucket. This is a critical mistake. Sacrificing your 20% savings rate delays retirement compounding by decades.',
      'Instead, the appropriate adjustment is to contract the "Wants" tier from 30% down to 20%, maintaining the vital 20% capital accumulation engine while housing costs normalize as career income advances.'
    ]
  },
  {
    id: 'art-08',
    slug: 'negotiating-equity-compensation-rsus-vs-options',
    title: 'Decoding Tech Compensation: RSUs, ISOs, and NSOs',
    category: 'Career & Income',
    readTime: '8 min read',
    difficulty: 'Deep Dive',
    date: 'February 2026',
    summary: 'How to evaluate startup stock options against public company restricted stock units, and why early exercises carry Alternative Minimum Tax risk.',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Research Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'RSUs are actual shares granted over a vesting schedule; they always have value unless the company goes to zero.',
      'Stock options grant the right to purchase shares at a fixed strike price; if the valuation drops below strike, they are underwater.',
      'Incentive Stock Options (ISOs) can trigger Alternative Minimum Tax (AMT) upon exercise even before you sell any shares.',
      'Always request total fully diluted share count to evaluate whether an option grant represents 0.1% or 0.001% of the company.'
    ],
    content: [
      'When evaluating a tech offer letter, recruiters often highlight inflated paper values like "an option grant worth $200,000 based on our latest Series B valuation." Without knowing the strike price, preferred liquidation preferences, and share count, that number is meaningless.',
      'Restricted Stock Units (RSUs) at public companies like Apple or Microsoft represent guaranteed shares upon vesting, subject to standard supplemental wage withholding taxes.',
      'In contrast, startup options require cash outlays to exercise. Furthermore, exercising ISOs in a high-valuation private company creates a phantom gain for tax purposes that can trigger devastating Alternative Minimum Tax (AMT) bills, requiring tens of thousands of dollars in cash for illiquid stock that cannot be sold on public exchanges.',
      'Understanding these mechanics empowers candidates to negotiate higher guaranteed base salaries when joining high-risk early-stage ventures.'
    ]
  },
  {
    id: 'art-09',
    slug: 'the-psychology-of-lifestyle-creep',
    title: 'The Silent Erosion of Lifestyle Creep',
    category: 'Financial Psychology',
    readTime: '5 min read',
    difficulty: 'Fundamentals',
    date: 'March 2026',
    summary: 'Why doubling your salary rarely feels like having more freedom, and the 50% Raise Rule that cures hedonic adaptation.',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Hedonic adaptation ensures that upgrades to luxury cars and premium apartments become the new normal within 60 days.',
      'Lifestyle creep locks high earners into golden handcuffs because their baseline cost of living matches their peak income.',
      'The 50% Raise Rule: Whenever income increases, allocate exactly half to savings/investing and half to conscious lifestyle upgrades.',
      'True wealth is measured in uncommitted calendar autonomy, not visible luxury items.'
    ],
    content: [
      'Every young professional recalls surviving on instant ramen and shared bedrooms in college while feeling relatively content. Yet ten years later, making $150,000 a year, many feel equally constrained.',
      'This paradox is driven by lifestyle creep. As income rises, unexamined defaults subtly shift: takeout replaces cooking, premium rides replace public transit, luxury apartment buildings replace modest walk-ups.',
      'Because these expenses become recurring fixed commitments, the earner must maintain peak employment pressure indefinitely, creating the psychological illusion of perpetual precarity.',
      'The antidote is the 50% Raise Rule. When you receive a promotion or a $1,000 monthly raise, immediately configure automatic transfers sending $500 to investment accounts on payday. The remaining $500 is yours to spend on lifestyle upgrades guilt-free, permanently advancing both your wealth velocity and daily enjoyment.'
    ]
  },
  {
    id: 'art-10',
    slug: 'debt-avalanche-vs-debt-snowball-math-vs-mind',
    title: 'Debt Avalanche vs. Debt Snowball: Cold Math Meets Human Brains',
    category: 'Personal Finance',
    readTime: '6 min read',
    difficulty: 'Fundamentals',
    date: 'January 2026',
    summary: 'Comparing the mathematically optimal interest-first strategy against the dopamine-driven balance-first method to guarantee debt freedom.',
    author: {
      name: 'Marcus Vance',
      role: 'Quantitative Finance Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Debt Avalanche orders debts by highest interest rate first; mathematically minimizes total interest paid.',
      'Debt Snowball orders debts by lowest balance first; delivers quick psychological wins that maintain motivation.',
      'The mathematically superior plan is worthless if an individual abandons it after three months.',
      'Choose Avalanche if you are motivated by spreadsheet numbers; choose Snowball if you need quick momentum.'
    ],
    content: [
      'Few topics in personal finance spark as much debate as the payoff sequence for consumer debt. Economists champion the Debt Avalanche: listing all credit cards, personal loans, and auto debt from highest interest rate to lowest.',
      'By throwing all surplus capital at a 26% credit card while paying minimums on a 6% student loan, you mathematically minimize the total dollars surrendered to financial institutions.',
      'However, behavioral psychologists like Dave Ramsey point out that humans are not spreadsheets. If an individual’s highest-interest loan happens to be a $28,000 balance, paying down that single card may take two grueling years before a single account closes, leading to emotional fatigue.',
      'The Debt Snowball tackles the smallest $1,200 medical bill first. Eliminating that bill in three months produces a burst of genuine pride and reduces the number of monthly bills from five to four, providing emotional momentum to tackle the next.'
    ]
  },
  {
    id: 'art-11',
    slug: 'demystifying-the-safe-withdrawal-rate-fire',
    title: 'Beyond the 4% Rule: Dynamic Safe Withdrawal Rates in 2026',
    category: 'Retirement Planning',
    readTime: '9 min read',
    difficulty: 'Deep Dive',
    date: 'February 2026',
    summary: 'Why Bill Bengen’s 1994 Trinity Study calculation needs guardrails, variable spending, and bond tents for 40- to 50-year retirements.',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Research Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'The classic 4% rule was modeled for a 30-year retirement window, not an early retirement spanning 50 years.',
      'Sequence of returns risk in years 1 through 5 poses the single greatest threat to portfolio longevity.',
      'Guyton-Klinger guardrails allow retirees to withdraw 4.5% safely by agreeing to pause inflation raises during market drawdowns.',
      'A bond tent temporarily elevates fixed income allocations at the retirement date, then glides back into equities.'
    ],
    content: [
      'In 1994, financial planner William Bengen published historical backtests showing that an investor holding a 50/50 stock-and-bond portfolio could withdraw 4% of their initial balance in year one, adjust that dollar sum for inflation annually, and survive all historical 30-year periods without running out of money.',
      'However, the Financial Independence, Retire Early (FIRE) movement seeks to retire at age 35 or 45, requiring portfolios to survive 50 or 60 years. Over such extended horizons, rigid 4% withdrawals fail in roughly 15% of historical simulation runs, primarily due to sequence of returns risk.',
      'If severe bear markets occur in the first three years of retirement while you are withdrawing fixed dollars, your underlying share count is decimated and cannot recover when markets rebound.',
      'Modern portfolio theory replaces static withdrawals with Dynamic Guardrails. By cutting discretionary vacations by 10% during years when the portfolio drops below a specified threshold, safe withdrawal rates can safely start higher while ensuring portfolio longevity.'
    ]
  },
  {
    id: 'art-12',
    slug: 'the-real-cost-of-homeownership',
    title: 'The Hidden Balance Sheet of Homeownership',
    category: 'Personal Finance',
    readTime: '7 min read',
    difficulty: 'Intermediate',
    date: 'March 2026',
    summary: 'The 1% maintenance rule, property tax reassessments, HOA capital calls, and the true opportunity cost of illiquid home equity.',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    keyTakeaways: [
      'Rent is the maximum amount you will pay for housing this month. A mortgage is the minimum amount you will pay.',
      'Unrecoverable costs include mortgage interest, property taxes, insurance, HOA fees, and capital depreciation.',
      'The 1% Rule dictates budgeting at least 1% of the property value annually for repairs (roof, HVAC, plumbing).',
      'Buying a home is primarily a lifestyle consumption decision, not a pure high-return investment.'
    ],
    content: [
      'Society often frames renting as "throwing money away to pay someone else’s mortgage." This narrative ignores the fundamental accounting reality of unrecoverable housing expenses.',
      'When you pay $2,500 in rent, you receive shelter, maintenance, amenities, and geographical mobility. When you pay a $3,500 mortgage in the first decade, typically $2,400 goes toward non-recoverable interest, property taxes, and insurance—building only $1,100 in principal equity.',
      'Furthermore, physical structures relentlessly depreciate. Roofs leak every 20 years, water heaters fail every 10 years, foundations settle, and air conditioning units seize during summer heat waves.',
      'Homeownership provides invaluable psychic benefits: stability, autonomy to renovate, and fixed nominal housing payments over 30 years. But viewing it as a guaranteed high-yield investment compared to broad-market index equities is historically inaccurate.'
    ]
  }
];

export const GUIDES: Guide[] = [
  {
    id: 'guide-01',
    slug: 'the-beginner-investing-roadmap',
    title: 'The Complete 6-Step Investor Roadmap',
    category: 'Investing',
    estimatedTime: '45 min reading & execution',
    stepsCount: 6,
    summary: 'From opening your first low-cost brokerage account to automating monthly dollar-cost averaging into diversified index funds.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
    steps: [
      {
        number: 1,
        title: 'Clear High-Interest Toxic Debt',
        description: 'No investment portfolio reliably outpaces 24% APR credit card interest. Ensure all consumer debt with interest rates exceeding 7% is eliminated before deploying money into equities.',
        actionItem: 'List all liabilities and eliminate anything above 7% interest.'
      },
      {
        number: 2,
        title: 'Establish a 3-Month Cash Buffer',
        description: 'Park 3 months of non-negotiable living costs in an FDIC-insured High-Yield Savings Account. This ensures market volatility will never force you to sell shares at a loss.',
        actionItem: 'Open an HYSA and transfer your baseline survival reserve.'
      },
      {
        number: 3,
        title: 'Capture Employer 401(k) Match',
        description: 'An employer 401(k) match is a guaranteed 50% to 100% instant return on your capital. Never forfeit this free compensation.',
        actionItem: 'Log into your HR benefits portal and set your contribution to match the ceiling.'
      },
      {
        number: 4,
        title: 'Open and Maximize a Roth IRA',
        description: 'Open a Roth IRA at an institutional low-cost custodian (Vanguard, Fidelity, or Charles Schwab). Invest contributions in a Total US Stock Market index fund.',
        actionItem: 'Set up an automatic recurring bank transfer of $583/month to hit annual limits.'
      },
      {
        number: 5,
        title: 'Construct Your Core Asset Allocation',
        description: 'Pick an asset allocation that reflects your time horizon. For younger investors, an 80% Total US Stock Market and 20% Total International Stock Market split captures global innovation.',
        actionItem: 'Purchase low-cost index ETFs (such as VTI and VXUS).'
      },
      {
        number: 6,
        title: 'Automate and Turn Off the News',
        description: 'Enable automatic monthly purchases. Check your portfolio balance no more than once per quarter to prevent emotional tinkering.',
        actionItem: 'Enable auto-invest and delete speculative trading apps from your phone.'
      }
    ]
  },
  {
    id: 'guide-02',
    slug: 'the-zero-based-budget-setup',
    title: 'Setting Up Your Zero-Based Cash Flow System',
    category: 'Budgeting',
    estimatedTime: '30 min setup',
    stepsCount: 5,
    summary: 'A tactile guide to configuring bank accounts, sinking funds, and paycheck automation so your money manages itself.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    steps: [
      {
        number: 1,
        title: 'Audit the Last 90 Days of Expenses',
        description: 'Export 3 months of bank statements to calculate your true baseline cost of living without guessing.',
        actionItem: 'Categorize expenses into Fixed Essentials, Discretionary, and Irregular annual bills.'
      },
      {
        number: 2,
        title: 'Configure Your Sinking Fund Accounts',
        description: 'Open secondary savings sub-accounts for predictable irregular expenses: auto insurance, holiday gifts, medical copays, and travel.',
        actionItem: 'Create 3 sub-accounts labeled Car, Health, and Annual Bills.'
      },
      {
        number: 3,
        title: 'Calculate Monthly Sinking Allocations',
        description: 'Divide expected annual irregular bills by 12 and route that exact sum each month to your sinking accounts.',
        actionItem: 'Automate transfers into sinking accounts the day after your paycheck lands.'
      },
      {
        number: 4,
        title: 'Isolate Your Guilt-Free Spending',
        description: 'Transfer weekly discretionary spending to a dedicated checking account or debit card. When it reaches zero, wait until next week.',
        actionItem: 'Set a weekly allowance transfer for coffees, dining, and impulse entertainment.'
      },
      {
        number: 5,
        title: 'Conduct the Monthly 15-Minute Review',
        description: 'On the final Sunday of each month, review balances and reconcile any minor drift in 15 minutes.',
        actionItem: 'Schedule a recurring calendar invite for month-end reconciliation.'
      }
    ]
  },
  {
    id: 'guide-03',
    slug: 'high-yield-savings-maximization',
    title: 'The Cash Maximizer: HYSAs, CDs & Treasury Bills',
    category: 'Saving',
    estimatedTime: '20 min reading',
    stepsCount: 4,
    summary: 'How to compare yields, avoid hidden withdrawal restrictions, and shield interest from state taxes using short-term Treasuries.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80',
    steps: [
      {
        number: 1,
        title: 'Verify FDIC / NCUA Insurance',
        description: 'Ensure any financial institution holding cash is backed by federal deposit insurance up to $250,000 per depositor.',
        actionItem: 'Look up bank FDIC certificates on the official bankfind tool.'
      },
      {
        number: 2,
        title: 'Avoid Teaser Rates and Minimum Balance Fees',
        description: 'Select institutions known for consistent competitive APYs rather than promotional temporary rates that crash after 60 days.',
        actionItem: 'Read account fee schedules to ensure zero monthly maintenance fees.'
      },
      {
        number: 3,
        title: 'Calculate State Tax Drag',
        description: 'If you reside in a high-tax state (California, New York, New Jersey), short-term Treasury Bills are 100% exempt from state taxes, yielding higher after-tax income than HYSAs.',
        actionItem: 'Compare After-Tax HYSA yield against 4-week Treasury Bill yields.'
      },
      {
        number: 4,
        title: 'Build a Rolling 4-Week Treasury Ladder',
        description: 'Stagger four 4-week T-Bills so one matures every Tuesday, giving you weekly liquidity while capturing maximum short-term yield.',
        actionItem: 'Configure auto-reinvestment on TreasuryDirect or through your brokerage portal.'
      }
    ]
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Expense Ratio',
    category: 'Investing',
    definition: 'The annual percentage fee charged by mutual funds and ETFs to cover administrative, management, and operational expenses.',
    example: 'An ETF with a 0.03% expense ratio charges just $3 per year for every $10,000 invested.'
  },
  {
    term: 'Dollar-Cost Averaging (DCA)',
    category: 'Investing',
    definition: 'An investment strategy of allocating a fixed dollar amount into assets at regular intervals, regardless of share price.',
    example: 'Investing $500 on the 1st of every month buys more shares when prices dip and fewer when prices peak.'
  },
  {
    term: 'Safe Withdrawal Rate (SWR)',
    category: 'Retirement Planning',
    definition: 'The percentage of initial retirement portfolio capital that can be withdrawn annually (adjusted for inflation) with minimal risk of depletion.',
    example: 'A 4% SWR on a $1,000,000 portfolio allows an initial annual withdrawal of $40,000 in year one.'
  },
  {
    term: 'Zero-Based Budget',
    category: 'Budgeting',
    definition: 'A cash allocation method where total net income minus all expenses, savings, and investments equals exactly zero every month.',
    example: 'If your monthly income is $4,000, every cent is assigned to rent, food, debt, savings, or leisure before spending starts.'
  },
  {
    term: 'Health Savings Account (HSA)',
    category: 'Personal Finance',
    definition: 'A tax-advantaged account paired with high-deductible health plans featuring tax-free contributions, tax-free growth, and tax-free qualified withdrawals.',
    example: 'Contributing $4,150 pre-tax, investing it in index funds, and reimbursing qualified healthcare expenses tax-free in retirement.'
  },
  {
    term: 'Sinking Fund',
    category: 'Budgeting',
    definition: 'A dedicated savings bucket where money is systematically set aside each month for an anticipated future expense.',
    example: 'Saving $100 per month for 12 months to pay a $1,200 annual auto insurance premium in full.'
  },
  {
    term: 'Asset Allocation',
    category: 'Investing',
    definition: 'The distribution of an investment portfolio across broad asset classes such as stocks, bonds, cash, and real estate.',
    example: 'An 80/20 portfolio holding 80% global equities for growth and 20% aggregate bonds for capital stability.'
  },
  {
    term: 'Asset Location',
    category: 'Investing',
    definition: 'The strategic placement of investments across taxable, tax-deferred (401k/IRA), and tax-exempt (Roth) accounts to minimize taxes.',
    example: 'Placing high-growth equities in a Roth IRA and tax-inefficient bonds in a Traditional 401(k).'
  },
  {
    term: 'Debt Avalanche',
    category: 'Personal Finance',
    definition: 'A debt payoff method prioritizing debts with the highest interest rates first, minimizing total interest charges over time.',
    example: 'Paying extra toward a 24% APR credit card while paying minimums on an 8% car loan and 4% student loan.'
  },
  {
    term: 'Debt Snowball',
    category: 'Personal Finance',
    definition: 'A debt payoff method prioritizing debts with the smallest balances first to generate rapid psychological momentum.',
    example: 'Paying off a $600 store card first, then rolling that payment into a $2,400 medical bill, and finally a $12,000 car loan.'
  },
  {
    term: 'Sequence of Returns Risk',
    category: 'Retirement Planning',
    definition: 'The risk that the timing of market drawdowns early in retirement will disproportionately harm a portfolio’s long-term survival.',
    example: 'Experiencing a 25% market drop in the first two years of retirement while withdrawing living expenses.'
  },
  {
    term: 'Rebalancing',
    category: 'Investing',
    definition: 'The process of buying or selling assets to restore a portfolio to its intended target asset allocation percentages.',
    example: 'Trimming equities that surged to 85% of your portfolio back down to your target 75% by purchasing bonds.'
  },
  {
    term: 'Roth Conversion Ladder',
    category: 'Retirement Planning',
    definition: 'A multi-year strategy of rolling Traditional IRA funds into a Roth IRA, waiting 5 years, and withdrawing principal penalty-free before age 59½.',
    example: 'Converting $40,000 annually in early retirement to access living funds 5 years later without 10% IRS penalties.'
  },
  {
    term: 'Alternative Minimum Tax (AMT)',
    category: 'Personal Finance',
    definition: 'A parallel tax system designed to ensure high earners pay a minimum baseline tax, commonly triggered by exercising Incentive Stock Options.',
    example: 'Exercising startup ISOs with a huge spread between strike and fair market value can trigger AMT on paper gains.'
  },
  {
    term: 'Restricted Stock Units (RSUs)',
    category: 'Career & Income',
    definition: 'Company equity given to employees on a vesting schedule that becomes ordinary taxable income on the date of vesting.',
    example: 'Receiving 100 shares vesting annually, with taxes automatically withheld by selling a portion of the shares upon vest.'
  },
  {
    term: '529 College Savings Plan',
    category: 'Personal Finance',
    definition: 'A state-sponsored tax-advantaged account designed to encourage saving for future education costs with tax-free growth and distributions.',
    example: 'Investing for a child’s university tuition and rolling up to $35,000 of unused funds into their Roth IRA under SECURE 2.0.'
  },
  {
    term: 'Capital Expenditure (CapEx)',
    category: 'Investing',
    definition: 'Funds used by an organization or real estate owner to acquire, upgrade, and maintain physical assets such as roofs, HVAC, and machinery.',
    example: 'Budgeting $200 per month for rental property roof and plumbing replacements rather than pocketing it as net cash flow.'
  },
  {
    term: 'High-Yield Savings Account (HYSA)',
    category: 'Saving',
    definition: 'A federally insured savings account paying interest rates substantially higher than traditional national average checking rates.',
    example: 'An HYSA earning 4.5% APY pays $450 annually on a $10,000 emergency balance, compared to $1 at a 0.01% legacy bank.'
  },
  {
    term: 'Wash-Sale Rule',
    category: 'Investing',
    definition: 'An IRS regulation disallowing tax deductions for losses if a substantially identical security is bought within 30 days before or after the sale.',
    example: 'Selling VOO at a loss and immediately buying SPY triggers a wash sale because both track the S&P 500 index.'
  },
  {
    term: 'Net Worth',
    category: 'Personal Finance',
    definition: 'The total value of all assets (cash, investments, real estate) minus the total value of all liabilities (mortgages, credit card debt, student loans).',
    example: 'If your assets total $320,000 and your liabilities total $110,000, your net worth is $210,000.'
  }
];
