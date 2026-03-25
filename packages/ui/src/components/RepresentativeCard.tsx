import React from 'react';

interface RepresentativeCardProps {
  name: string;
  title: string;
  party: string;
  state: string;
  photoUrl?: string;
  chamber: string;
  onClick?: () => void;
}

export function RepresentativeCard({ name, title, party, state, photoUrl, chamber, onClick }: RepresentativeCardProps) {
  const partyColor = party === 'Democratic' ? 'border-blue-400 bg-blue-50' : party === 'Republican' ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-slate-50';
  const partyBadge = party === 'Democratic' ? 'bg-blue-100 text-blue-700' : party === 'Republican' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-white rounded-xl border-l-4 ${partyColor} border border-slate-200 p-4 hover:shadow-md transition-all cursor-pointer`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-lg flex-shrink-0 overflow-hidden">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-slate-400">{name.charAt(0)}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm truncate">{name}</h3>
          <p className="text-xs text-slate-500">{title} &middot; {state}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${partyBadge}`}>{party.charAt(0)}</span>
            <span className="text-xs text-slate-400 uppercase">{chamber}</span>
          </div>
        </div>
        <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
