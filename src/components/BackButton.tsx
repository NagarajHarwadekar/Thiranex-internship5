import React, { useRef, useState, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { navigateBack } from '../utils/navigationTracker';

export interface BackButtonProps {
  fallback?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
  showBreadcrumbContext?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  fallback = '#/',
  label = 'Back',
  className = '',
  onClick,
  showBreadcrumbContext
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Mouse move handler for dynamic 3D tilt and liquid specular highlight
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Percentages (0% to 100%)
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Subtle 3D tilt calculation (-4 to +4 degrees)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    const rotateY = Number((normX * 9).toFixed(2));
    const rotateX = Number((-normY * 9).toFixed(2));

    setCoords({ x: xPercent, y: yPercent });
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setCoords({ x: 50, y: 50 });
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPressed(true);

    // Tactile micro-haptic delay before navigation (60ms)
    setTimeout(() => {
      setIsPressed(false);
      if (onClick) {
        onClick();
      } else {
        navigateBack(fallback);
      }
    }, 60);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ perspective: 800 }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        aria-label={label}
        style={{
          transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${isPressed ? 0.96 : isHovered ? 1.02 : 1})`,
          transition: isHovered
            ? 'transform 0.08s ease-out, box-shadow 0.2s ease, border-color 0.2s ease'
            : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.3s ease'
        }}
        className={`
          group relative inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl
          cursor-pointer overflow-hidden touch-manipulation
          font-medium text-xs sm:text-sm tracking-tight text-slate-700 hover:text-slate-950
          focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/40 focus-visible:ring-offset-2
          
          /* Translucent Glass Base */
          bg-gradient-to-b from-white/95 via-white/85 to-slate-100/80
          backdrop-blur-xl
          
          /* Polished Metallic Beveled Border */
          border border-slate-300/85 hover:border-slate-400
          
          /* Realistic Physical Surface Shadows & Inner Bevels */
          shadow-[0_2px_8px_-2px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_1px_0_rgba(255,255,255,0.95),inset_0_-1px_1px_0_rgba(148,163,184,0.25)]
          hover:shadow-[0_6px_20px_-3px_rgba(15,23,42,0.14),0_2px_6px_rgba(15,23,42,0.06),inset_0_1px_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_0_rgba(148,163,184,0.35)]
          active:shadow-[0_1px_3px_rgba(15,23,42,0.08),inset_0_1px_3px_0_rgba(15,23,42,0.1)]
        `}
      >
        {/* Dynamic Liquid-Metal Specular Highlight that follows cursor */}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(130px circle at ${coords.x}% ${coords.y}%, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.45) 40%, transparent 80%)`,
            mixBlendMode: 'overlay'
          }}
          aria-hidden="true"
        />

        {/* Polished Glass Sheen Strip across upper-diagonal */}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 70%)'
          }}
          aria-hidden="true"
        />

        {/* Liquid Metal Edge Rim Light */}
        <span
          className="pointer-events-none absolute inset-x-1 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Tactile Click Ripple Flash */}
        <span
          className={`pointer-events-none absolute inset-0 bg-slate-900/5 transition-opacity duration-150 ${
            isPressed ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Polished Metallic Arrow Icon */}
        <span className="relative z-10 flex items-center justify-center w-5 h-5 rounded-md bg-slate-200/60 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-200 shadow-2xs">
          <ArrowLeft className="w-3.5 h-3.5 text-slate-700 group-hover:text-white transform transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
        </span>

        {/* Label with Crisp Metallic Typography */}
        <span className="relative z-10 font-semibold tracking-tight transition-colors duration-200 group-hover:text-slate-950">
          {label}
        </span>
      </button>

      {/* Optional Breadcrumb Context */}
      {showBreadcrumbContext && (
        <span className="hidden md:inline-flex items-center text-xs text-slate-400 font-medium">
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-500 truncate max-w-[200px]">{showBreadcrumbContext}</span>
        </span>
      )}
    </div>
  );
};
