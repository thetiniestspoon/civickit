import React from 'react';

interface LegislationCardProps {
  title: string;
  summary: string;
  status: string;
  date: string;
  chamber: string;
  topics: string[];
  sourceName: string;
  sourceUrl: string;
}

export function LegislationCard({ title, summary, status, date, chamber, topics, sourceName, sourceUrl }: LegislationCardProps) {
  const statusColors: Record<string, string> = {
    introduced: 'bg-blue-100 text-blue-700',
    in_committee: 'bg-amber-100 text-amber-700',
    passed_one: 'bg-violet-100 text-violet-700',
    passed_both: 'bg-emerald-100 text-emerald-700',
    signed: 'bg-emerald-200 text-emerald-800',
    vetoed: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-slate-900 text-sm leading-snug">{title}</h3>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${statusColors[status] || 'bg-slate-100 text-slate-600'}`}>
          {status.replace(/_/g, ' ')}
        </span>
      </div>
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{summary}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 uppercase font-medium">{chamber}</span>
          <span className="text-xs text-slate-300">|</span>
          <span className="text-xs text-slate-400">{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {topics.slice(0, 2).map(t => (
            <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-xs text-slate-500">{t}</span>
          ))}
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-slate-100">
        <a href={sourceUrl} className="inline-flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 015.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" /></svg>
          Source: {sourceName}
        </a>
      </div>
    </div>
  );
}
