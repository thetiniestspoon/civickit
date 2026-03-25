import React from 'react';

interface ResourceCardProps {
  name: string;
  type: string;
  description: string;
  address: string;
  hours: string;
  phone?: string;
  languages: string[];
  accessibility: string[];
  lastVerified: string;
  verifiedBy: string;
}

const typeIcons: Record<string, string> = {
  food: '🍎', shelter: '🏠', legal_aid: '⚖️', clothing: '👕',
  transportation: '🚌', childcare: '👶', medical: '🏥', mental_health: '🧠',
  employment: '💼', other: '📋',
};

export function ResourceCard({ name, type, description, address, hours, phone, languages, accessibility, lastVerified, verifiedBy }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{typeIcons[type] || '📋'}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500 capitalize">{type.replace(/_/g, ' ')}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xs text-slate-400">Verified {lastVerified}</div>
          <div className="text-xs text-slate-400">by {verifiedBy}</div>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-3">{description}</p>

      <div className="space-y-1.5 text-sm">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-slate-600">{address}</span>
        </div>
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-slate-600">{hours}</span>
        </div>
        {phone && (
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-slate-600">{phone}</span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
        {languages.map(lang => (
          <span key={lang} className="px-2 py-0.5 rounded bg-blue-50 text-xs text-blue-600">{lang}</span>
        ))}
        {accessibility.map(a => (
          <span key={a} className="px-2 py-0.5 rounded bg-violet-50 text-xs text-violet-600">{a}</span>
        ))}
      </div>
    </div>
  );
}
