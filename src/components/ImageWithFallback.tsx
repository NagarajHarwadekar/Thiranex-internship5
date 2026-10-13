import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackCategory,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`bg-gradient-to-br from-slate-100 via-slate-200 to-stone-100 flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Finova asset preview'}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="w-12 h-12 rounded-xl bg-white/80 shadow-sm subtle-border flex items-center justify-center text-slate-700 mb-3 z-10">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        {fallbackCategory && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-1 z-10">
            {fallbackCategory}
          </span>
        )}
        <span className="text-sm font-semibold text-slate-800 line-clamp-2 max-w-[220px] z-10">
          {fallbackTitle || alt || 'Finova Resource'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || 'Finova financial resource'}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
    </div>
  );
};
