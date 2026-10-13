import React from 'react';
import { Code2, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const DeveloperSpotlight: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 sm:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="pb-8 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span className="font-semibold text-slate-700">Web Development Internship Capstone</span>
            <span aria-hidden="true">·</span>
            <span>Independent Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Nagaraj Harwadekar
          </h2>
          <p className="text-sm font-semibold text-slate-700 mt-1">
            Computer Science & Engineering Student
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-3xl">
            Finova is a capstone project developed by Nagaraj Harwadekar, a Computer Science & Engineering student interested in modern software, fintech and digital product development. Engineered from absolute zero as a high-fidelity showcase of client-side performance, accessibility, and quantitative financial tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 p-5 bg-slate-50/60 rounded-xl border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-white shadow-2xs flex items-center justify-center text-slate-800 mb-3 border border-slate-200/80">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900">Engineering Approach</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fast, resilient, and human-centered design. Built with zero extraneous bloat and client-authoritative state synchronization.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-slate-50/60 rounded-xl border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-white shadow-2xs flex items-center justify-center text-slate-800 mb-3 border border-slate-200/80">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900">Technology & Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              React 19 SPA, TypeScript, Tailwind CSS, Lucide icons, responsive hash routing, and persistent browser storage.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-slate-50/60 rounded-xl border border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-white shadow-2xs flex items-center justify-center text-slate-800 mb-3 border border-slate-200/80">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900">Financial Rigor</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All financial models (Compound Growth, Zero-Based Budgets, Savings Timeline, and Net Worth) adhere to verifiable mathematical formulas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
