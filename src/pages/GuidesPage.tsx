import React from 'react';
import { GUIDES } from '../data/learning';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { BackButton } from '../components/BackButton';
import { Check, Clock, Compass, ArrowRight } from 'lucide-react';

export const GuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Top Navigation */}
      <div className="flex items-center justify-between pb-2">
        <BackButton fallback="#/learn" label="Back to Learn Hub" />
      </div>

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <span>Actionable Roadmaps</span>
          <span>·</span>
          <span>Tactical Execution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Financial Roadmaps & Step-by-Step Guides
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Structured step-by-step blueprints that take you from initial diagnosis to fully automated execution. Each guide includes verifiable checklists and specific action items.
        </p>
      </div>

      {/* Guide List */}
      <div className="space-y-14">
        {GUIDES.map((guide) => (
          <article
            key={guide.id}
            id={guide.slug}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden"
          >
            {/* Guide Header Banner */}
            <div className="p-8 sm:p-10 border-b border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-slate-50/50">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-slate-800 uppercase tracking-wider">{guide.category}</span>
                  <span>·</span>
                  <span>{guide.stepsCount} Action Steps</span>
                  <span>·</span>
                  <span>{guide.estimatedTime}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">{guide.title}</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{guide.summary}</p>
              </div>

              <div className="w-full md:w-48 aspect-[16/9] rounded-xl overflow-hidden shrink-0 border border-slate-200">
                <ImageWithFallback
                  src={guide.image}
                  alt={guide.title}
                  fallbackTitle={guide.title}
                  fallbackCategory={guide.category}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stepper Grid */}
            <div className="p-8 sm:p-10 space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Action Steps & Checklists
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guide.steps.map((step) => (
                  <div
                    key={step.number}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/40 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                          {step.number}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200/80 text-[11px] text-slate-700 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-900 font-semibold">Action: </strong>
                        {step.actionItem}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
