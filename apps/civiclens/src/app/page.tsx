"use client";

import { useState } from 'react';
import { LegislationCard, SourceCitation } from '@civickit/ui';
import { CivicLensShell } from './shell';
import { demoFeed, type FeedItem } from '../data/demo-feed';

type FilterTab = 'all' | 'legislation' | 'executive_order' | 'vote';

const filterTabs: { key: FilterTab; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'legislation', label: 'Legislation' },
  { key: 'executive_order', label: 'Executive Orders' },
  { key: 'vote', label: 'Votes' },
];

function TypeBadge({ type }: { type: FeedItem['type'] }) {
  const config = {
    legislation: { bg: 'bg-violet-100', text: 'text-violet-700', label: 'Legislation' },
    executive_order: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Executive Order' },
    vote: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Vote' },
  };
  const c = config[type];
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = demoFeed.filter((item) => {
    if (activeFilter !== 'all' && item.type !== activeFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.plainLanguageSummary.toLowerCase().includes(q) ||
        item.topics.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <CivicLensShell activeNav="/">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            What did your government do this week?
          </h1>
          <p className="text-violet-100 text-lg mb-8 max-w-2xl">
            Track legislation, executive orders, and votes — explained in plain language with source citations.
          </p>
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by topic, bill name, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-violet-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  activeFilter === tab.key
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="ml-auto text-xs text-slate-400">
              {filtered.length} item{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid gap-4">
          {filtered.map((item) => (
            <div key={item.id}>
              <div className="mb-2">
                <TypeBadge type={item.type} />
              </div>
              <LegislationCard
                title={item.title}
                summary={item.plainLanguageSummary}
                status={item.status}
                date={item.date}
                chamber={item.chamber}
                topics={item.topics}
                sourceName={item.sourceName}
                sourceUrl={item.sourceUrl}
              />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No activity matches your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="mt-3 text-violet-600 hover:text-violet-700 text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Data freshness note */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <SourceCitation
            sourceName="Congress.gov, Federal Register, Senate.gov"
            sourceUrl="https://www.congress.gov"
            retrievedDate="Mar 24, 2026"
          />
          <span className="text-xs text-slate-400">Demo data for illustration</span>
        </div>
      </div>
    </CivicLensShell>
  );
}
