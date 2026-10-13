import React, { useEffect } from 'react';
import { ARTICLES } from '../data/learning';
import { JOURNAL_STORIES } from '../data/journal';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BackButton } from '../components/BackButton';
import { Clock, ArrowLeft, CheckCircle2, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { notifyToast } from '../store/finovaStore';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Find either in Learn Hub articles or Journal stories
  const learnArticle = ARTICLES.find((a) => a.slug === slug);
  const journalStory = JOURNAL_STORIES.find((j) => j.slug === slug);

  // Fallback to first article if not found
  const article = learnArticle || (journalStory ? {
    id: journalStory.id,
    slug: journalStory.slug,
    title: journalStory.title,
    category: journalStory.category,
    readTime: journalStory.readTime,
    difficulty: 'Fundamentals' as const,
    date: journalStory.publishedDate,
    summary: journalStory.summary,
    author: journalStory.author,
    image: journalStory.image,
    keyTakeaways: [
      'Financial decisions are compounded behavioral habits, not single isolated events.',
      'Calm, automated processes outpace frantic speculation over multi-decade horizons.',
      'True wealth is measured in calendar autonomy and peaceful sleep.'
    ],
    content: journalStory.body
  } : ARTICLES[0]);

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 2);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      notifyToast('Link Copied', 'Article link copied to clipboard.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Breadcrumb Navigation Header */}
      <div className="flex items-center justify-between pb-2">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href="#/learn" className="hover:text-slate-900 transition-colors">Learn Hub</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-medium truncate max-w-sm">{article.title}</span>
        </nav>
      </div>

      {/* Editorial Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-wider text-slate-800">
            {article.category}
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-base text-slate-600 leading-relaxed max-w-3xl pt-2">
          {article.summary}
        </p>

        {/* Author Byline */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="text-sm font-bold text-slate-900 block">{article.author.name}</span>
              <span className="text-xs text-slate-500">{article.author.role}</span>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          fallbackTitle={article.title}
          fallbackCategory={article.category}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Key Takeaways Box */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Core Takeaways</span>
          </h2>
          <ul className="space-y-2 text-xs text-slate-700">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-1.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body */}
      <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Reading Footer */}
      {relatedArticles.length > 0 && (
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-base font-bold text-slate-900">Recommended Reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <a
                key={rel.id}
                href={`#/learn/article/${rel.slug}`}
                className="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-2xs space-y-2 block transition-all"
              >
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {rel.category} · {rel.readTime}
                </div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-2">{rel.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{rel.summary}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
