import React from 'react';
import { JOURNAL_STORIES } from '../data/journal';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const coverStory = JOURNAL_STORIES.find((s) => s.isCoverStory) || JOURNAL_STORIES[0];
  const secondaryStories = JOURNAL_STORIES.filter((s) => s.id !== coverStory.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Editorial Masthead */}
      <div className="max-w-3xl border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>The Finova Journal</span>
          <span>·</span>
          <span>Essays on Money & Behavior</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          The Journal
        </h1>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          Thoughtful, long-form examinations of portfolio mechanics, financial psychology, cognitive biases in volatility, and the subtle art of knowing when you have enough.
        </p>
      </div>

      {/* Featured Cover Story */}
      <article
        onClick={() => {
          window.location.hash = `#/journal/${coverStory.slug}`;
        }}
        className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all p-6 sm:p-8"
      >
        <div className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={coverStory.image}
            alt={coverStory.title}
            fallbackTitle={coverStory.title}
            fallbackCategory={coverStory.category}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold uppercase tracking-wider text-slate-800">
              Cover Story · {coverStory.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{coverStory.readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors">
            {coverStory.title}
          </h2>

          <p className="text-sm font-medium text-slate-700 leading-snug">
            {coverStory.subtitle}
          </p>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {coverStory.summary}
          </p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={coverStory.author.avatar}
                alt={coverStory.author.name}
                className="w-7 h-7 rounded-full object-cover"
              />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 block">{coverStory.author.name}</span>
                <span className="text-[11px] text-slate-500">{coverStory.publishedDate}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform">
              <span>Read Essay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>

      {/* Grid of Secondary Stories */}
      <div className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Recent Essays & Observations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryStories.map((story) => (
            <article
              key={story.id}
              onClick={() => {
                window.location.hash = `#/journal/${story.slug}`;
              }}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    fallbackTitle={story.title}
                    fallbackCategory={story.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                  <span className="font-semibold uppercase tracking-wider text-slate-700">
                    {story.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{story.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 mb-2">
                  {story.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {story.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{story.author.name}</span>
                <span className="font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
