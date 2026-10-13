export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishedDate: string;
  readTime: string;
  isCoverStory?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  summary: string;
  body: string[];
}

export const JOURNAL_STORIES: JournalArticle[] = [
  {
    id: 'jou-01',
    slug: 'the-illusion-of-financial-speed',
    title: 'The Illusion of Financial Speed',
    subtitle: 'Why the quietest, least exciting investment decisions generate the highest lifetime returns',
    category: 'Market Philosophy',
    publishedDate: 'March 28, 2026',
    readTime: '7 min read',
    isCoverStory: true,
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Lead Author',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    summary: 'Financial media thrives on the fiction of rapid agility: day trading, breaking headlines, macroeconomic predictions, and sudden fortunes. But real capital compounds like oak trees—slowly, imperceptibly, and away from public spectacle.',
    body: [
      'Every morning, millions of retail investors open financial news portals greeted by crimson and emerald tickers, flashing breaking-news banners, and breathless analysts predicting whether the market will swing 2% higher or lower by the opening bell.',
      'This theater of urgency creates a psychological delusion: that financial success is proportional to daily cognitive exertion. We assume that because surgery, software engineering, and competitive athletics reward hyper-intense daily activity, investing must function the same way.',
      'In reality, capital accumulation is one of the few domains where frenetic activity directly impairs performance. Academic study after academic study—from Barber and Odean’s seminal research on retail trading to SPIVA scorecard data across decades—confirms that the highest-frequency accounts suffer the lowest net returns once trading friction, bid-ask spreads, and short-term capital gains taxes take their toll.',
      'Real wealth accumulation looks remarkably boring from the outside. It looks like an automated transfer executing at 4:00 AM on the first Tuesday of the month, purchasing broad-market index funds, followed by decades of silence. It is the refusal to react to economic noise that constitutes the actual competitive advantage of the individual investor.',
      'When you remove the illusion that you must outwit millions of algorithmic supercomputers, you reclaim both your mental serenity and your lifetime compounding power.'
    ]
  },
  {
    id: 'jou-02',
    slug: 'the-architecture-of-peace-of-mind',
    title: 'The Architecture of Peace of Mind',
    subtitle: 'Moving beyond net worth scorecards to evaluate your household solvency index',
    category: 'Personal Finance',
    publishedDate: 'March 22, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    summary: 'A seven-figure net worth provides very little emotional security if it is locked in illiquid real estate while short-term liquidity is stretched thin. How to design a balanced household balance sheet.',
    body: [
      'Financial culture is obsessed with a single scalar metric: total net worth. People celebrate crossing $100k, $500k, or $1M as though crossing an arbitrary numerical finish line guarantees psychological calm.',
      'Yet wealth planners routinely meet households with a nominal net worth of $1.5 million who live in persistent financial dread. Why? Because $1.3 million is tied up in home equity, $150k is in illiquid retirement accounts with penalties for early withdrawal, and their checking account carries just $4,000 against a $9,000 monthly burn rate.',
      'Solvency is not a static number; it is a structural ratio. A household earning $90,000 with $40,000 in liquid high-yield cash reserves, zero revolving debt, and clear insurance coverage possesses substantially higher practical solvency than a house-rich, cash-poor high earner.',
      'Designing for peace of mind means prioritizing the buffer between your daily cash flow and disaster. It means valuing liquid resilience over theoretical return maximization on every single dollar.'
    ]
  },
  {
    id: 'jou-03',
    slug: 'the-death-of-the-water-cooler-stock-pick',
    title: 'The Death of the Water-Cooler Stock Pick',
    subtitle: 'Why the era of conversational tip-trading is giving way to systematic passive governance',
    category: 'Market Trends',
    publishedDate: 'March 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Marcus Vance',
      role: 'Quantitative Finance Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=80',
    summary: 'How retail investors learned the painful lessons of post-2020 speculative fever and returned to the quiet discipline of low-cost broad index allocations.',
    body: [
      'Between 2020 and 2022, social discourse was dominated by stock tips, speculative meme tokens, and SPAC initial offerings. Every dinner conversation included an acquaintance boasting about a 300% paper gain on an unprofitable cloud software firm.',
      'When interest rates rose from zero to 5% in 2023 and speculative multiples compressed by 70%, the true cost of chasing conversational momentum became clear. Most retail traders who entered during the peak ended with net losses, missing out on the broad-market recovery.',
      'What emerged on the other side is a quieter, more sophisticated generation of individual investors. Today’s modern capital allocator is far less interested in speculative bragging and far more interested in index expense ratios, tax-loss harvesting rules, and automated asset allocation.',
      'The death of the cocktail-party stock tip is not a tragedy—it is the maturation of the retail investor.'
    ]
  },
  {
    id: 'jou-04',
    slug: 'the-psychology-of-enough',
    title: 'The Psychology of "Enough"',
    subtitle: 'The hardest financial skill is getting the goalpost to stop moving',
    category: 'Behavioral Finance',
    publishedDate: 'March 08, 2026',
    readTime: '8 min read',
    author: {
      name: 'Nagaraj Harwadekar',
      role: 'Founding Engineer & Lead Author',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    summary: 'When you achieve the salary or investment target you dreamed of five years ago, why does satisfaction vanish in weeks? Deconstructing hedonic treadmill mechanics and establishing permanent satisfaction boundaries.',
    body: [
      'Kurt Vonnegut once shared an anecdote about attending a party hosted by a billionaire hedge fund manager on Shelter Island with his friend Joseph Heller. Vonnegut observed that the host made more money in a single day than Heller made from his entire classic novel Catch-22.',
      'Heller replied with devastating simplicity: "Yes, but I have something he will never have: enough."',
      'In a competitive culture that conflates capital accumulation with moral virtue, defining what constitutes "enough" is an act of radical rebellion. Without a predefined finish line, every financial milestone simply becomes the baseline for the next round of anxiety.',
      'Financial independence is not the ability to buy everything in the world; it is the freedom to decide that you do not need to impress strangers, liberating your energy for creative curiosity, family bonds, and authentic craft.'
    ]
  },
  {
    id: 'jou-05',
    slug: 'the-invisible-tax-of-financial-complexity',
    title: 'The Invisible Tax of Financial Complexity',
    subtitle: 'How holding 12 different brokerage accounts and 8 niche ETFs drains your cognitive bandwidth',
    category: 'Personal Finance',
    publishedDate: 'February 26, 2026',
    readTime: '6 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Financial Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    summary: 'Why financial minimalism beats baroque portfolio engineering every time. The case for consolidating accounts and pruning administrative bloat.',
    body: [
      'Over the course of a career, it is easy to accumulate financial debris: a 401(k) from a job left five years ago, an old checking account opened for a $200 bonus, three micro-investing apps, and seven niche thematic ETFs tracking robotics or clean energy.',
      'Each of these fragmented accounts represents a tiny cognitive drain. Come April, you are chasing nine different 1099 tax forms, remembering eight sets of passwords, and attempting to calculate your true global asset allocation across three separate platforms.',
      'Simplification is a superpower. By consolidating legacy retirement accounts into a single rollover IRA and replacing six overlapping equity funds with a single Total World Stock ETF, you eliminate hours of annual administrative drudgery.',
      'A portfolio so simple that your partner or heir can understand it on a single index card is infinitely superior to an intricate machine that requires a PhD to audit.'
    ]
  },
  {
    id: 'jou-06',
    slug: 'renting-as-a-wealth-building-strategy',
    title: 'Renting as a Wealth-Building Strategy',
    subtitle: 'Re-evaluating primary residences through an opportunity cost lens',
    category: 'Housing Economics',
    publishedDate: 'February 18, 2026',
    readTime: '7 min read',
    author: {
      name: 'Marcus Vance',
      role: 'Quantitative Finance Editor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    summary: 'How disciplined renters who invest the cost differential in broad equity markets frequently end up wealthier than comparable homeowners over 30-year spans.',
    body: [
      'The societal doctrine that homeownership is the only legitimate pathway to middle-class wealth was born in the post-WWII era of subsidized suburban expansion and cheap credit. In modern high-cost coastal economies, that assumption deserves rigorous scrutiny.',
      'When you purchase a property, you lock substantial capital into an illiquid, un-diversified single asset whose maintenance costs inflate every year. In many markets, the total monthly cost to own (mortgage, taxes, insurance, HOA, upkeep) exceeds comparable rent by 40% to 70%.',
      'If a renter takes that monthly spread—plus the $100,000 down payment they did not lock into drywall—and systematically deploys it into global equities yielding historical returns, their liquid portfolio frequently outpaces the homeowner’s net equity after 20 years, without bearing any roof repair bills or property tax reassessments.',
      'Buying a home can be a wonderful lifestyle milestone. But renting is not a moral failure; when paired with disciplined investing, it is a formidable wealth engine.'
    ]
  }
];
