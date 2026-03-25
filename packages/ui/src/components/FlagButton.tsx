import React from 'react';

interface FlagButtonProps {
  onFlag?: () => void;
  label?: string;
}

export function FlagButton({ onFlag, label = 'Flag as inaccurate' }: FlagButtonProps) {
  return (
    <button
      onClick={onFlag}
      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors"
      title={label}
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
      {label}
    </button>
  );
}
