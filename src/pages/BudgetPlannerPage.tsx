import React, { useState, useEffect } from 'react';
import { notifyToast } from '../store/finovaStore';
import { BackButton } from '../components/BackButton';
import { PieChart, Save, RotateCcw, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface BudgetState {
  income: number;
  housing: number;
  food: number;
  transport: number;
  utilities: number;
  subscriptions: number;
  entertainment: number;
  health: number;
  debt: number;
  other: number;
}

const STORAGE_KEY = 'finova_tool_budget_v1';

const DEFAULT_BUDGET: BudgetState = {
  income: 5500,
  housing: 1650,
  food: 550,
  transport: 350,
  utilities: 200,
  subscriptions: 85,
  entertainment: 300,
  health: 180,
  debt: 250,
  other: 150
};

export const BudgetPlannerPage: React.FC = () => {
  const [budget, setBudget] = useState<BudgetState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_BUDGET;
    } catch {
      return DEFAULT_BUDGET;
    }
  });

  const handleChange = (field: keyof BudgetState, value: string) => {
    const num = parseFloat(value) || 0;
    setBudget((prev) => ({ ...prev, [field]: Math.max(0, num) }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(budget));
      notifyToast('Budget Saved Locally', 'Your numbers have been saved in your browser.');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleReset = () => {
    setBudget(DEFAULT_BUDGET);
    localStorage.removeItem(STORAGE_KEY);
    notifyToast('Budget Reset', 'Restored default baseline scenario.', 'info');
  };

  // Calculations
  const totalExpenses =
    budget.housing +
    budget.food +
    budget.transport +
    budget.utilities +
    budget.subscriptions +
    budget.entertainment +
    budget.health +
    budget.debt +
    budget.other;

  const remaining = budget.income - totalExpenses;
  const savingsRate = budget.income > 0 ? Math.round((remaining / budget.income) * 100) : 0;

  // 50/30/20 breakdown
  const needs = budget.housing + budget.food + budget.transport + budget.utilities + budget.health + budget.debt;
  const wants = budget.subscriptions + budget.entertainment + budget.other;
  const needsPct = budget.income > 0 ? Math.round((needs / budget.income) * 100) : 0;
  const wantsPct = budget.income > 0 ? Math.round((wants / budget.income) * 100) : 0;
  const savingsPct = budget.income > 0 ? Math.max(0, savingsRate) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <a href="#/tools" className="hover:text-slate-900 transition-colors">Financial Tools</a>
          <span>/</span>
          <span className="text-slate-900 font-medium">Budget Planner</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
          <span>Interactive Calculator</span>
          <span>·</span>
          <span>100% Client-Side Private</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Cash Flow & Zero-Based Budget Planner
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Allocate every incoming dollar into distinct living, operational, and capital buckets. Compare your household against the 50/30/20 guideline and test surplus savings scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">Monthly Cash Inflow</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Locally</span>
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
                title="Reset to default scenario"
                aria-label="Reset budget planner"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Total Net Monthly Income (After-Tax Take-Home)
            </label>
            <div className="relative rounded-lg shadow-2xs">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="0"
                value={budget.income || ''}
                onChange={(e) => handleChange('income', e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Monthly Expenses Allocation</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">Housing (Rent / Mortgage)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.housing || ''}
                    onChange={(e) => handleChange('housing', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Groceries & Household Food</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.food || ''}
                    onChange={(e) => handleChange('food', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Transportation & Fuel</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.transport || ''}
                    onChange={(e) => handleChange('transport', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Utilities & Internet</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.utilities || ''}
                    onChange={(e) => handleChange('utilities', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Digital Subscriptions & SaaS</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.subscriptions || ''}
                    onChange={(e) => handleChange('subscriptions', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Dining Out & Entertainment</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.entertainment || ''}
                    onChange={(e) => handleChange('entertainment', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Healthcare, Rx & Fitness</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.health || ''}
                    onChange={(e) => handleChange('health', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Debt Minimums (Cards / Loans)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={budget.debt || ''}
                    onChange={(e) => handleChange('debt', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs text-slate-600 mb-1">Other Miscellaneous Spending</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-xs">$</span>
                <input
                  type="number"
                  min="0"
                  value={budget.other || ''}
                  onChange={(e) => handleChange('other', e.target.value)}
                  className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Monthly Budget Diagnostic
            </h3>

            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Total Net Income</span>
                <span className="text-lg font-bold tabular-nums">${budget.income.toLocaleString()}</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
                <span className="text-xs text-slate-400">Total Monthly Expenses</span>
                <span className="text-lg font-semibold text-slate-200 tabular-nums">
                  ${totalExpenses.toLocaleString()}
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <span className="text-sm font-semibold block">Monthly Surplus / Savings</span>
                  <span className="text-xs text-slate-400">Unallocated Capital</span>
                </div>
                <span className={`text-2xl font-bold tabular-nums ${remaining >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {remaining >= 0 ? `+$${remaining.toLocaleString()}` : `-$${Math.abs(remaining).toLocaleString()}`}
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Savings Rate</span>
                  <span className="font-semibold text-white tabular-nums">{savingsRate}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      savingsRate >= 20 ? 'bg-emerald-500' : savingsRate > 0 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${Math.min(100, Math.max(0, savingsRate))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 50/30/20 Guardrails Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-slate-700" />
              <span>50/30/20 Benchmark Comparison</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Needs (Target: ≤50%)</span>
                  <span className="font-semibold tabular-nums text-slate-900">${needs.toLocaleString()} ({needsPct}%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${needsPct <= 50 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${Math.min(100, needsPct)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Wants (Target: ≤30%)</span>
                  <span className="font-semibold tabular-nums text-slate-900">${wants.toLocaleString()} ({wantsPct}%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${wantsPct <= 30 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${Math.min(100, wantsPct)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-600 mb-1">
                  <span>Savings & Investments (Target: ≥20%)</span>
                  <span className="font-semibold tabular-nums text-slate-900">${Math.max(0, remaining).toLocaleString()} ({savingsPct}%)</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${savingsPct >= 20 ? 'bg-emerald-500' : 'bg-slate-400'}`}
                    style={{ width: `${Math.min(100, savingsPct)}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2 border-t border-slate-100">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Educational diagnostic only. High metropolitan rent frequently stretches Needs to 60%; aim to compress Wants rather than reducing your long-term Savings rate.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
