import React, { useState } from 'react';
import { Target, Calendar, ArrowRight, Save, RotateCcw, Info, Zap } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { notifyToast } from '../store/finovaStore';

const STORAGE_KEY = 'finova_tool_savings_v1';

export const SavingsGoalPage: React.FC = () => {
  const [targetAmount, setTargetAmount] = useState<number>(25000);
  const [currentSavings, setCurrentSavings] = useState<number>(4500);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(650);
  const [annualApy, setAnnualApy] = useState<number>(4.5);

  const handleSave = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ targetAmount, currentSavings, monthlyContribution, annualApy })
      );
      notifyToast('Goal Saved', 'Your savings goal inputs were saved locally.');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleReset = () => {
    setTargetAmount(25000);
    setCurrentSavings(4500);
    setMonthlyContribution(650);
    setAnnualApy(4.5);
    localStorage.removeItem(STORAGE_KEY);
    notifyToast('Goal Reset', 'Restored default savings parameters.', 'info');
  };

  // Calculate months needed factoring in monthly compounding interest
  const calculateMonthsNeeded = (contrib: number) => {
    if (contrib <= 0 && annualApy <= 0) return Infinity;
    if (currentSavings >= targetAmount) return 0;

    const r = (annualApy / 100) / 12;
    let balance = currentSavings;
    let months = 0;

    // Numerical simulation with cap at 600 months (50 years)
    while (balance < targetAmount && months < 600) {
      months++;
      balance = balance * (1 + r) + contrib;
    }

    return months;
  };

  const monthsNeeded = calculateMonthsNeeded(monthlyContribution);
  const yearsNeeded = (monthsNeeded / 12).toFixed(1);

  // Target completion date
  const getCompletionDate = (months: number) => {
    if (!isFinite(months)) return 'Never (Increase Monthly Contribution)';
    const d = new Date();
    d.setMonth(d.getMonth() + months);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const progressPercent = Math.min(100, Math.round((currentSavings / (targetAmount || 1)) * 100));

  // Acceleration comparisons
  const monthsWithPlus100 = calculateMonthsNeeded(monthlyContribution + 100);
  const monthsSavedWith100 = isFinite(monthsNeeded) && isFinite(monthsWithPlus100) ? Math.max(0, monthsNeeded - monthsWithPlus100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <a href="#/tools" className="hover:text-slate-900 transition-colors">Financial Tools</a>
          <span>/</span>
          <span className="text-slate-900 font-medium">Savings Goal Calculator</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
          <span>Target Timeline Simulator</span>
          <span>·</span>
          <span>High-Yield Compounding</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Savings Milestone & Goal Planner
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Forecast the exact month and year you will cross your target savings milestone for home down payments, weddings, emergencies, or sabbatical funds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Form */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">Goal Parameters</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
              <button
                onClick={handleReset}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
                title="Reset parameters"
                aria-label="Reset savings goal calculator"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Target Milestone Amount ($)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="100"
                step="500"
                value={targetAmount || ''}
                onChange={(e) => setTargetAmount(Math.max(100, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Current Starting Savings ($)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="0"
                step="250"
                value={currentSavings || ''}
                onChange={(e) => setCurrentSavings(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Monthly Dedicated Contribution ($)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="10"
                step="50"
                value={monthlyContribution || ''}
                onChange={(e) => setMonthlyContribution(Math.max(10, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-medium text-slate-700">
                High-Yield Account APY (%)
              </label>
              <span className="text-xs font-bold text-slate-900 tabular-nums">{annualApy}% APY</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="7.0"
              step="0.25"
              value={annualApy}
              onChange={(e) => setAnnualApy(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0% (Cash/Checking)</span>
              <span>4.5% (Typical HYSA)</span>
              <span>6% (Max)</span>
            </div>
          </div>
        </div>

        {/* Milestone Summary */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Completion Date
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              {getCompletionDate(monthsNeeded)}
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Approx. <span className="text-white font-semibold tabular-nums">{monthsNeeded} months</span> ({yearsNeeded} years) at current pace
            </p>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Progress to Goal</span>
                <span className="font-semibold text-white tabular-nums">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                <span>${currentSavings.toLocaleString()} saved</span>
                <span>${(targetAmount - currentSavings).toLocaleString()} remaining</span>
              </div>
            </div>
          </div>

          {/* Acceleration Simulator */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Timeline Acceleration Scenarios</span>
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Redirecting small micro-spending can drastically accelerate your milestone date:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-900 block">+ $50 / month</span>
                  <span className="text-slate-500 text-[11px]">Saves ~{Math.round(monthsSavedWith100 / 2)} months of waiting</span>
                </div>
                <span className="font-semibold text-slate-800">
                  {getCompletionDate(calculateMonthsNeeded(monthlyContribution + 50))}
                </span>
              </div>

              <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between text-emerald-950">
                <div>
                  <span className="font-semibold block">+ $100 / month</span>
                  <span className="text-emerald-700 text-[11px]">Saves {monthsSavedWith100} months ({Math.round((monthsSavedWith100 / 12) * 10) / 10} yrs)</span>
                </div>
                <span className="font-bold text-emerald-800">
                  {getCompletionDate(monthsWithPlus100)}
                </span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2 border-t border-slate-100">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Calculations assume monthly compounding with consistent monthly deposits into an FDIC-insured high-yield account.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
