import React from 'react';
import { Calculator, TrendingUp, Target, Scale, ArrowRight, ShieldCheck } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export const ToolsHubPage: React.FC = () => {
  const tools = [
    {
      id: 'budget',
      title: 'Cash Flow & Budget Planner',
      subtitle: 'Zero-Based Resource Allocation',
      description: 'Allocate every incoming dollar into essential living expenses, operational sinking funds, and capital investments. Compare against the 50/30/20 guideline.',
      href: '#/tools/budget',
      icon: Calculator,
      metrics: 'Zero-based allocation · 50/30/20 benchmark'
    },
    {
      id: 'compound-growth',
      title: 'Compound Growth Calculator',
      subtitle: 'Multi-Decade Wealth Engine',
      description: 'Model the compounding impact of regular monthly dollar-cost averaging against historical broad-market returns with an interactive exponential curve visualizer.',
      href: '#/tools/compound-growth',
      icon: TrendingUp,
      metrics: 'Monthly compounding · Interactive SVG curve'
    },
    {
      id: 'savings',
      title: 'Savings Goal Timeline',
      subtitle: 'Milestone Date Forecaster',
      description: 'Determine the exact month and year you will cross major milestones—home down payments, wedding budgets, emergency reserves, or sabbatical runway.',
      href: '#/tools/savings',
      icon: Target,
      metrics: 'Target calendar date · Acceleration boost analysis'
    },
    {
      id: 'net-worth',
      title: 'Personal Net Worth Snapshot',
      subtitle: 'Household Solvency & Balance Sheet',
      description: 'Inventory liquid assets, retirement accounts, and illiquid property against consumer loans and mortgages to evaluate your true solvency position.',
      href: '#/tools/net-worth',
      icon: Scale,
      metrics: 'Solvency ratio · Liquid vs illiquid capital'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-10">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
          <span>Client-Side Calculators</span>
          <span>·</span>
          <span>Zero Server Telemetry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Financial Engineering Tools
        </h1>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          Quantitative, mathematical calculators designed to replace speculative guesswork with transparent formulas. All numbers run locally in your browser with zero data retention or tracking.
        </p>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <a
              key={tool.id}
              href={tool.href}
              className="group flex flex-col justify-between p-8 bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {tool.subtitle}
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors mb-2">
                  {tool.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-[11px] font-medium text-slate-500">
                  {tool.metrics}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:translate-x-0.5 transition-transform">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Privacy Guarantee Strip */}
      <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Privacy Architecture:</strong> None of your financial figures are ever sent across the network. All simulations execute synchronously via client-side JavaScript.
          </p>
        </div>
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider shrink-0">
          Client-Authoritative
        </span>
      </div>
    </div>
  );
};
