import React, { useState, useEffect } from 'react';
import { subscribeToasts } from '../store/finovaStore';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    return subscribeToasts((toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 4000);
    });
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-slate-200 text-slate-900 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'warning' ? (
              <AlertCircle className="w-5 h-5 text-amber-600" />
            ) : toast.type === 'info' ? (
              <Info className="w-5 h-5 text-slate-700" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-slate-900">{toast.title}</h4>
            {toast.description && (
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
