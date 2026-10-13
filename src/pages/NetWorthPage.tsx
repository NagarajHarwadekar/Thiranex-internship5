import React, { useState } from 'react';
import { DollarSign, Save, RotateCcw, Info, Shield, Layers } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { notifyToast } from '../store/finovaStore';

interface NetWorthState {
  cash: number;
  savings: number;
  retirement: number;
  brokerage: number;
  realEstate: number;
  vehicles: number;
  otherAssets: number;
  mortgage: number;
  studentLoans: number;
  autoLoans: number;
  creditCards: number;
  otherDebt: number;
}

const STORAGE_KEY = 'finova_tool_networth_v1';

const DEFAULT_STATE: NetWorthState = {
  cash: 4200,
  savings: 18500,
  retirement: 62000,
  brokerage: 24000,
  realEstate: 0,
  vehicles: 12000,
  otherAssets: 2500,
  mortgage: 0,
  studentLoans: 14500,
  autoLoans: 6200,
  creditCards: 1100,
  otherDebt: 0
};

export const NetWorthPage: React.FC = () => {
  const [data, setData] = useState<NetWorthState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_STATE;
    } catch {
      return DEFAULT_STATE;
    }
  });

  const handleChange = (field: keyof NetWorthState, val: string) => {
    const num = Math.max(0, parseFloat(val) || 0);
    setData((prev) => ({ ...prev, [field]: num }));
  };

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      notifyToast('Net Worth Snapshot Saved', 'Your balances were cached securely in your browser.');
    } catch (e) {
      console.warn(e);
    }
  };

  const handleReset = () => {
    setData(DEFAULT_STATE);
    localStorage.removeItem(STORAGE_KEY);
    notifyToast('Snapshot Reset', 'Restored baseline parameters.', 'info');
  };

  const totalAssets =
    data.cash +
    data.savings +
    data.retirement +
    data.brokerage +
    data.realEstate +
    data.vehicles +
    data.otherAssets;

  const totalLiabilities =
    data.mortgage +
    data.studentLoans +
    data.autoLoans +
    data.creditCards +
    data.otherDebt;

  const netWorth = totalAssets - totalLiabilities;
  const liquidAssets = data.cash + data.savings + data.retirement + data.brokerage;
  const liquidNetWorth = liquidAssets - totalLiabilities;
  const debtToAssetRatio = totalAssets > 0 ? Math.round((totalLiabilities / totalAssets) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between pb-2 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <a href="#/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <a href="#/tools" className="hover:text-slate-900 transition-colors">Financial Tools</a>
          <span>/</span>
          <span className="text-slate-900 font-medium">Net Worth Snapshot</span>
        </nav>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 mb-2">
          <span>Household Solvency Audit</span>
          <span>·</span>
          <span>Private Local Balance Sheet</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Personal Net Worth Snapshot
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Tally your total liquid and fixed assets against personal liabilities to calculate true solvency, debt-to-asset leverage, and financial trajectory.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Balance Sheet Inputs */}
        <div className="lg:col-span-8 space-y-8">
          {/* Assets Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <h2 className="text-base font-semibold text-slate-900">Assets (What You Own)</h2>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md tabular-nums">
                Total: ${totalAssets.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">Checking & Immediate Cash</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.cash || ''}
                    onChange={(e) => handleChange('cash', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">High-Yield Savings & CDs</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.savings || ''}
                    onChange={(e) => handleChange('savings', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Retirement (401k, Roth IRA, HSA)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.retirement || ''}
                    onChange={(e) => handleChange('retirement', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Taxable Brokerage Investments</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.brokerage || ''}
                    onChange={(e) => handleChange('brokerage', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Real Estate / Primary Residence</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.realEstate || ''}
                    onChange={(e) => handleChange('realEstate', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Vehicles (Fair Market Value)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.vehicles || ''}
                    onChange={(e) => handleChange('vehicles', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-600 mb-1">Other Valued Assets / Equipment</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-xs">$</span>
                <input
                  type="number"
                  min="0"
                  value={data.otherAssets || ''}
                  onChange={(e) => handleChange('otherAssets', e.target.value)}
                  className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-900 tabular-nums"
                />
              </div>
            </div>
          </div>

          {/* Liabilities Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-rose-600" />
                <h2 className="text-base font-semibold text-slate-900">Liabilities (What You Owe)</h2>
              </div>
              <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md tabular-nums">
                Total: ${totalLiabilities.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 mb-1">Mortgage Balance</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.mortgage || ''}
                    onChange={(e) => handleChange('mortgage', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Student Loans</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.studentLoans || ''}
                    onChange={(e) => handleChange('studentLoans', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Auto Loan Balances</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.autoLoans || ''}
                    onChange={(e) => handleChange('autoLoans', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1">Credit Card Balances</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={data.creditCards || ''}
                    onChange={(e) => handleChange('creditCards', e.target.value)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-900 tabular-nums"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-600 mb-1">Other Personal Notes / Debt</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 text-xs">$</span>
                <input
                  type="number"
                  min="0"
                  value={data.otherDebt || ''}
                  onChange={(e) => handleChange('otherDebt', e.target.value)}
                  className="w-full pl-7 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-900 tabular-nums"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Diagnostic Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Net Worth
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleSave}
                  className="p-1.5 text-slate-300 hover:text-white rounded-md bg-slate-800 transition-colors"
                  title="Save locally"
                >
                  <Save className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleReset}
                  className="p-1.5 text-slate-300 hover:text-white rounded-md bg-slate-800 transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums mb-6 ${netWorth >= 0 ? 'text-white' : 'text-rose-400'}`}>
              ${netWorth.toLocaleString()}
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Total Assets</span>
                <span className="font-semibold text-emerald-400 tabular-nums">+${totalAssets.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Liabilities</span>
                <span className="font-semibold text-rose-400 tabular-nums">-${totalLiabilities.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                <span>Liquid Net Worth</span>
                <span className="font-semibold text-white tabular-nums">${liquidNetWorth.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Debt-to-Asset Ratio</span>
                <span className="font-semibold text-white tabular-nums">{debtToAssetRatio}%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 space-y-3 text-xs">
            <h3 className="font-semibold text-slate-900">Solvency Health Check</h3>
            <p className="text-slate-600 leading-relaxed">
              Tracking net worth on a quarterly schedule filters out daily market noise. Liquid Net Worth represents capital available without selling illiquid vehicles or primary shelter.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>All figures remain 100% inside your browser session and are never transmitted to any external server.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
