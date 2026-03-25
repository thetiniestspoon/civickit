import React from 'react';

interface SourceCitationProps {
  sourceName: string;
  sourceUrl: string;
  retrievedDate: string;
}

export function SourceCitation({ sourceName, sourceUrl, retrievedDate }: SourceCitationProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs">
      <svg className="w-3 h-3 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
      </svg>
      <span className="text-blue-700">
        Source: <a href={sourceUrl} className="underline hover:text-blue-900" target="_blank" rel="noopener noreferrer">{sourceName}</a>
      </span>
      <span className="text-blue-400">Updated {retrievedDate}</span>
    </div>
  );
}
