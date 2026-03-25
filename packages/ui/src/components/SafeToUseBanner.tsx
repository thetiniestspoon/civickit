import React from 'react';

interface SafeToUseBannerProps {
  compact?: boolean;
}

export function SafeToUseBanner({ compact = false }: SafeToUseBannerProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-700">
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-medium">We don&apos;t know who you are. We don&apos;t store what you read.</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-emerald-900 mb-1">Safe to use. Private by design.</h3>
          <p className="text-sm text-emerald-700 leading-relaxed">
            We don&apos;t know who you are. We don&apos;t store what you read. No accounts required.
            No tracking, no fingerprinting, no data collection. No one can use this app to find or target you.
          </p>
          <a href="#" className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-600 hover:text-emerald-800 font-medium">
            Read our full threat model
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
