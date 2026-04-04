"use client";

import { useState } from 'react';
import { SourceCitation } from '@civickit/ui';
import { CivicLensShell } from '../shell';
import { useMembers } from '@/lib/hooks/use-members';
import { demoRepresentatives } from '@/data/civiclens/demo-representatives';
import type { CongressMember } from '@/lib/api/congress';

const US_STATES: { code: string; name: string }[] = [
  { code: '', name: 'All States' },
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' },
];

function partyColor(party: string): string {
  const p = party.toLowerCase();
  if (p.includes('democrat')) return 'bg-blue-500';
  if (p.includes('republican')) return 'bg-red-500';
  if (p.includes('independent')) return 'bg-purple-500';
  return 'bg-slate-500';
}

function partyBadge(party: string): string {
  const p = party.toLowerCase();
  if (p.includes('democrat')) return 'bg-blue-100 text-blue-700';
  if (p.includes('republican')) return 'bg-red-100 text-red-700';
  if (p.includes('independent')) return 'bg-purple-100 text-purple-700';
  return 'bg-slate-100 text-slate-600';
}

function MemberCard({ member, isLive }: { member: CongressMember; isLive: boolean }) {
  // Check if we have a demo detail page for this member
  const demoRep = demoRepresentatives.find(r =>
    r.name.includes(member.name?.split(',')[0] ?? '') ||
    r.id === member.bioguideId
  );
  const detailUrl = demoRep
    ? `/civiclens/representatives/${demoRep.id}`
    : undefined;

  const displayName = member.name ?? 'Unknown Member';
  const initial = displayName.split(/[,\s]+/).filter(Boolean).pop()?.charAt(0) ?? '?';

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:border-violet-200 transition-colors">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        {member.depiction?.imageUrl ? (
          <img
            src={member.depiction.imageUrl}
            alt={displayName}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 ${partyColor(member.partyName ?? '')}`}>
            {initial}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {detailUrl ? (
              <a href={detailUrl} className="text-sm font-semibold text-slate-900 hover:text-violet-600 truncate">
                {displayName}
              </a>
            ) : (
              <span className="text-sm font-semibold text-slate-900 truncate">{displayName}</span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${partyBadge(member.partyName ?? '')}`}>
              {member.partyName ?? 'Unknown'}
            </span>
            <span className="text-xs text-slate-500">
              {member.state}{member.district ? `-${member.district}` : ''}
            </span>
            {member.chamber && (
              <span className="text-xs text-slate-400 uppercase">{member.chamber}</span>
            )}
          </div>
        </div>

        {detailUrl && (
          <a
            href={detailUrl}
            className="text-xs text-violet-600 hover:text-violet-700 font-medium flex-shrink-0"
          >
            View details
          </a>
        )}
      </div>
    </div>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      Live data
    </span>
  );
}

export default function RepresentativesPage() {
  const [stateFilter, setStateFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { members, loading, isLive } = useMembers(stateFilter || undefined);

  const filtered = members.filter(m => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      (m.name ?? '').toLowerCase().includes(q) ||
      (m.state ?? '').toLowerCase().includes(q) ||
      (m.partyName ?? '').toLowerCase().includes(q)
    );
  });

  // Group by chamber
  const senate = filtered.filter(m =>
    (m.chamber ?? '').toLowerCase().includes('senate') ||
    (m.terms?.item?.[0]?.chamber ?? '').toLowerCase().includes('senate')
  );
  const house = filtered.filter(m =>
    (m.chamber ?? '').toLowerCase().includes('house') ||
    (m.terms?.item?.[0]?.chamber ?? '').toLowerCase().includes('house')
  );
  const other = filtered.filter(m =>
    !senate.includes(m) && !house.includes(m)
  );

  return (
    <CivicLensShell activeNav="/civiclens/representatives">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl font-bold tracking-tight">Representatives</h1>
            {isLive && <LiveBadge />}
          </div>
          <p className="text-violet-100 text-lg mb-6 max-w-2xl">
            Browse members of the 119th Congress. Search by name, state, or party.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-violet-200 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
              />
            </div>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40 appearance-none cursor-pointer"
            >
              {US_STATES.map(s => (
                <option key={s.code} value={s.code} className="text-slate-900">{s.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {loading ? (
          <div className="grid gap-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200" />
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-48 mb-2" />
                    <div className="h-3 bg-slate-100 rounded w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No representatives found.</p>
            <button
              onClick={() => { setSearchQuery(''); setStateFilter(''); }}
              className="mt-3 text-violet-600 hover:text-violet-700 text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-400 mb-4">{filtered.length} members</p>

            {senate.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">Senate ({senate.length})</h2>
                <div className="grid gap-2">
                  {senate.map(m => <MemberCard key={m.bioguideId} member={m} isLive={isLive} />)}
                </div>
              </div>
            )}

            {house.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">House ({house.length})</h2>
                <div className="grid gap-2">
                  {house.map(m => <MemberCard key={m.bioguideId} member={m} isLive={isLive} />)}
                </div>
              </div>
            )}

            {other.length > 0 && (
              <div className="grid gap-2">
                {other.map(m => <MemberCard key={m.bioguideId} member={m} isLive={isLive} />)}
              </div>
            )}
          </>
        )}

        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <SourceCitation
            sourceName="Congress.gov API (Library of Congress)"
            sourceUrl="https://api.congress.gov"
            retrievedDate={new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          />
          <span className="text-xs text-slate-400">
            {isLive ? 'Live data from Congress.gov' : 'Demo data — add API key for live data'}
          </span>
        </div>
      </div>
    </CivicLensShell>
  );
}
