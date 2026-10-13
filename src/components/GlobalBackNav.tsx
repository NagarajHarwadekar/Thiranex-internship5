import React from 'react';
import { BackButton } from './BackButton';
import { computeBackNavigation, normalizeRoute } from '../utils/navigationTracker';
import { Compass } from 'lucide-react';

interface GlobalBackNavProps {
  currentHash: string;
}

export const GlobalBackNav: React.FC<GlobalBackNavProps> = ({ currentHash }) => {
  const normalized = normalizeRoute(currentHash);

  // Strictly hide on homepage
  if (normalized === '/' || normalized === '/home') {
    return null;
  }

  const { label, destination, breadcrumb } = computeBackNavigation(currentHash);

  return (
    <nav
      aria-label="Back navigation"
      className="w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-slate-200/60 sticky top-16 z-30 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* The Liquid Metal + Glass tactile Back Button */}
        <BackButton
          fallback={destination}
          label={label}
        />

        {/* Minimal Contextual Breadcrumb Indicator for orientation */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Compass className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400">Location:</span>
          <span className="text-slate-700 font-semibold capitalize">
            {breadcrumb || normalized.replace(/^\//, '').split('/')[0] || 'Finova'}
          </span>
        </div>
      </div>
    </nav>
  );
};
