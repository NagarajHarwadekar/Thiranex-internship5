import React from 'react';
import { DeveloperSpotlight } from '../components/DeveloperSpotlight';
import { ShieldCheck, Compass, BookOpen, Layers, Lightbulb, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          About Finova · Purpose & Architecture
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Smarter Money. Better Choices.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed pt-2">
          Finova was conceived to solve a critical cultural problem: modern financial education is polarized between dry, impenetrable academic textbooks and high-pressure social media speculation. We build evidence-based digital manuals, transparent spreadsheets, and mathematical calculators designed for human agency.
        </p>
      </div>

      {/* Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Zero Speculative Hype</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We reject day-trading fads, rapid-wealth illusions, and algorithmic noise. Every principle we publish is grounded in historical capital returns, fee drag mathematics, and verifiable tax regulations.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Human Behavioral Empathy</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Spreadsheets do not fail because people lack mathematical ability; they fail because money is entangled with guilt, comparison, and fear. Our tools design for real human psychology and hedonic adaptation.
          </p>
        </div>

        <div className="p-8 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-4">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Privacy & Transparency</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All calculators and budget plans run 100% locally inside your web browser. No telemetry trackers, no secret ad network cookies, and no monetization of private user figures.
          </p>
        </div>
      </div>

      {/* Philosophy & Approach */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-14 space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Our Governing Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            The Finova Design & Learning Manifesto
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            How we decide what to build, what to write, and what to deliberately omit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-300">
          <div className="space-y-2 p-5 bg-slate-800/60 rounded-xl border border-slate-700/60">
            <h3 className="text-sm font-bold text-white">1. Costs are certain; predictions are not.</h3>
            <p className="leading-relaxed text-slate-400">
              Future macroeconomic market conditions cannot be foretold with precision. But expense ratios, trading commissions, and capital gains taxes are mathematically guaranteed deductions from your terminal wealth. Minimizing certain drag is the first rule of compounding.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-slate-800/60 rounded-xl border border-slate-700/60">
            <h3 className="text-sm font-bold text-white">2. Simplicity is an operational shield.</h3>
            <p className="leading-relaxed text-slate-400">
              A three-fund index portfolio that can be managed in 20 minutes per year consistently out-survives intricate multi-tier hedge models that require constant emotional maintenance and trading intervention.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-slate-800/60 rounded-xl border border-slate-700/60">
            <h3 className="text-sm font-bold text-white">3. Cash flow precedes asset allocation.</h3>
            <p className="leading-relaxed text-slate-400">
              Even the most elegant investment portfolio collapses if the household lacks a structured zero-based cash flow system or liquid emergency reserve to prevent panic liquidations during economic recessions.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-slate-800/60 rounded-xl border border-slate-700/60">
            <h3 className="text-sm font-bold text-white">4. The goal is uncommitted autonomy.</h3>
            <p className="leading-relaxed text-slate-400">
              We define wealth not as the accumulation of luxury possessions to impress acquaintances, but as the possession of uncommitted calendar hours—the freedom to choose what you work on and with whom.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Spotlight */}
      <DeveloperSpotlight />
    </div>
  );
};
