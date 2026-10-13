export type ProductCategory = 
  | 'Investing' 
  | 'Budgeting' 
  | 'Personal Finance' 
  | 'Career & Income' 
  | 'Financial Psychology' 
  | 'Market Analysis' 
  | 'Retirement Planning'
  | 'Student & Early Career';

export type ProductFormat = 'Digital Guide & PDF' | 'Interactive Toolkit' | 'Masterclass & Workbook' | 'Spreadsheet System' | 'Print Edition';
export type ProductDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ProductReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  longDescription: string;
  features: string[];
  learningOutcomes: string[];
  format: ProductFormat;
  difficulty: ProductDifficulty;
  duration: string;
  pagesOrModules: string;
  tags: string[];
  image: string;
  gallery: string[];
  isBestseller?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  collectionSlug: string;
  relatedProductIds: string[];
  reviews: ProductReview[];
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badgeText: string;
  accentColor: string;
  productCount: number;
  featuredProductIds: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  difficulty: 'Fundamentals' | 'Intermediate' | 'Deep Dive';
  date: string;
  summary: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  keyTakeaways: string[];
  content: string[];
  relatedArticleIds?: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: string;
  estimatedTime: string;
  stepsCount: number;
  summary: string;
  image: string;
  steps: {
    number: number;
    title: string;
    description: string;
    actionItem: string;
  }[];
}

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  example: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}
