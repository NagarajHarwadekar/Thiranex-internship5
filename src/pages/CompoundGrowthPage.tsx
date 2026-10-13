import React, { useState } from 'react';
import { TrendingUp, Save, RotateCcw, Info } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { notifyToast } from '../store/finovaStore';

const STORAGE_KEY = 'finova_tool_compound_v1';

export const CompoundGrowthPage: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [annualReturn, setAnnualReturn] = useState<number>(8.0);
  const [years, setYears] = useState<number>(25);

  const handleSave = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ initialAmount, monthlyContribution, annualReturn, years })
      );
      notifyToast('Calculations Saved', 'Your compound growth inputs were saved locally.');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleReset = () => {
    setInitialAmount(10000);
    setMonthlyContribution(500);
    setAnnualReturn(8.0);
    setYears(25);
    localStorage.removeItem(STORAGE_KEY);
    notifyToast('Calculator Reset', 'Restored baseline parameters.', 'info');
  };

  // Monthly compound interest formula
  // Total = P * (1 + r/n)^(n*t) + PMT * [((1 + r/n)^(n*t) - 1) / (r/n)]
  const calculateYearData = () => {
    const r = annualReturn / 100;
    const n = 12; // monthly compounding
    const dataPoints: { year: number; principal: number; total: number; interest: number }[] = [];

    for (let y = 0; y <= years; y++) {
      const months = y * 12;
      const principal = initialAmount + monthlyContribution * months;
      let futureValue = 0;

      if (r === 0) {
        futureValue = principal;
      } else {
        const principalFV = initialAmount * Math.pow(1 + r / n, months);
        const contributionsFV = monthlyContribution * ((Math.pow(1 + r / n, months) - 1) / (r / n));
        futureValue = principalFV + contributionsFV;
      }

      dataPoints.push({
        year: y,
        principal: Math.round(principal),
        total: Math.round(futureValue),
        interest: Math.round(Math.max(0, futureValue - principal))
      });
    }

    return dataPoints;
  };

  const chartData = calculateYearData();
  const finalResult = chartData[chartData.length - 1] || { principal: 0, total: 0, interest: 0 };
  const maxTotal = finalResult.total > 0 ? finalResult.total : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <a href="#/tools" className="hover:text-slate-900 transition-colors">Financial Tools</a>
          <span>/</span>
          <span className="text-slate-900 font-medium">Compound Growth Calculator</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
          <span>Interactive Model</span>
          <span>·</span>
          <span>Monthly Compounding Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Compound Growth & Wealth Accumulation
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Observe the exponential divergence between principal dollars deposited out of pocket and compound returns generated over multi-decade horizons.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Parameters */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h2 className="text-base font-semibold text-slate-900">Model Parameters</h2>
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
                aria-label="Reset calculator"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Initial Principal Investment
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="0"
                step="500"
                value={initialAmount || ''}
                onChange={(e) => setInitialAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Monthly Ongoing Contribution
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">$</span>
              <input
                type="number"
                min="0"
                step="50"
                value={monthlyContribution || ''}
                onChange={(e) => setMonthlyContribution(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-8 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:border-slate-800 tabular-nums"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-medium text-slate-700">
                Estimated Annual Return Rate
              </label>
              <span className="text-xs font-bold text-slate-900 tabular-nums">{annualReturn}%</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="15.0"
              step="0.5"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Conservative (4%)</span>
              <span>Hist. S&P 500 (8–10%)</span>
              <span>Aggressive (12%)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-medium text-slate-700">
                Investment Time Horizon
              </label>
              <span className="text-xs font-bold text-slate-900 tabular-nums">{years} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5 Years</span>
              <span>20 Years</span>
              <span>40 Years</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              Past broad market returns over 100 years averaged ~10% nominal and ~7% after inflation. Assumes continuous monthly contributions and dividend reinvestment.
            </span>
          </div>
        </div>

        {/* Results & Visual Chart */}
        <div className="lg:col-span-7 space-y-6">
          {/* Headline Numbers */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              Projected Total Portfolio Value (Year {years})
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-white mb-6">
              ${finalResult.total.toLocaleString()}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Total Out-of-Pocket Principal</span>
                <span className="text-lg font-bold text-slate-200 tabular-nums">
                  ${finalResult.principal.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-xs text-emerald-400 block mb-0.5">Total Compound Interest Earned</span>
                <span className="text-lg font-bold text-emerald-400 tabular-nums">
                  +${finalResult.interest.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive SVG Chart */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-slate-700" />
                <span>Exponential Growth Trajectory</span>
              </h3>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-slate-300" />
                  <span className="text-slate-600">Principal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-slate-900" />
                  <span className="text-slate-900 font-medium">Total Value</span>
                </div>
              </div>
            </div>

            {/* SVG Visualizer */}
            <div className="w-full h-56 pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f172a" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="200" x2="500" y2="200" stroke="#cbd5e1" strokeWidth="1" />

                {/* Area under Total Value */}
                {chartData.length > 1 && (
                  <path
                    d={`
                      M 0 200
                      ${chartData
                        .map((d, i) => {
                          const x = (i / (chartData.length - 1)) * 500;
                          const y = 200 - (d.total / maxTotal) * 190;
                          return `L ${x} ${y}`;
                        })
                        .join(' ')}
                      L 500 200 Z
                    `}
                    fill="url(#totalGradient)"
                  />
                )}

                {/* Principal Line */}
                {chartData.length > 1 && (
                  <path
                    d={chartData
                      .map((d, i) => {
                        const x = (i / (chartData.length - 1)) * 500;
                        const y = 200 - (d.principal / maxTotal) * 190;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                )}

                {/* Total Value Curve */}
                {chartData.length > 1 && (
                  <path
                    d={chartData
                      .map((d, i) => {
                        const x = (i / (chartData.length - 1)) * 500;
                        const y = 200 - (d.total / maxTotal) * 190;
                        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="3"
                  />
                )}
              </svg>
            </div>

            <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>Year 0 ($0)</span>
              <span>Year {Math.round(years / 2)}</span>
              <span>Year {years} (${(finalResult.total / 1000).toFixed(0)}k)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
