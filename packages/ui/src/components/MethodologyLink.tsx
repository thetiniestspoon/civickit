import React from 'react';

interface MethodologyLinkProps {
  href?: string;
  label?: string;
}

export function MethodologyLink({ href = '#methodology', label = 'How we built this' }: MethodologyLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors font-medium"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {label}
    </a>
  );
}
