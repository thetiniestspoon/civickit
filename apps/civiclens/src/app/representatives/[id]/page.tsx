"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { StatusBadge, SourceCitation } from '@civickit/ui';
import { CivicLensShell } from '../../shell';
import { demoRepresentatives, type RepresentativeDetail } from '../../../data/demo-representatives';
import { demoPromiseProfiles } from '../../../data/demo-promises';

type TabKey = 'voting' | 'promises' | 'finance';

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

function VotingRecordTab({ rep }: { rep: RepresentativeDetail }) {
  return (
    <div className="space-y-2">
      {rep.votingRecord.map((vote) => (
        <div key={vote.id} className="bg-white rounded-lg border border-slate-200 p-4 flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">{vote.billTitle}</p>
            <p className="text-xs text-slate-400">{vote.billId} &middot; {vote.date}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              vote.vote === 'yea' ? 'bg-emerald-100 text-emerald-700' :
              vote.vote === 'nay' ? 'bg-red-100 text-red-700' :
              'bg-slate-100 text-slate-500'
            }`}>
              {vote.vote === 'yea' ? 'Yea' : vote.vote === 'nay' ? 'Nay' : 'Not Voting'}
            </span>
            <span className={`text-xs ${vote.result === 'passed' ? 'text-emerald-600' : 'text-red-500'}`}>
              {vote.result === 'passed' ? 'Passed' : 'Failed'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PromisesTab({ repId }: { repId: string }) {
  const profile = demoPromiseProfiles.find((p) => p.id === repId);
  if (!profile) {
    return <p className="text-slate-400 text-sm py-8 text-center">No promise data available for this representative.</p>;
  }

  return (
    <div className="space-y-3">
      {profile.promises.map((promise) => (
        <div key={promise.id} className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-sm text-slate-900 font-medium leading-relaxed">
              &ldquo;{promise.statement}&rdquo;
            </p>
            <StatusBadge status={promise.status} />
          </div>
          <p className="text-sm text-slate-500 mb-2">{promise.statusEvidence}</p>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500">{promise.category}</span>
            <span>Made {promise.madeDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CampaignFinanceTab({ rep }: { rep: RepresentativeDetail }) {
  const finance = rep.campaignFinance;
  return (
    <div>
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(finance.totalRaised)}</p>
          <p className="text-xs text-slate-500 mt-1">Total Raised</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(finance.totalSpent)}</p>
          <p className="text-xs text-slate-500 mt-1">Total Spent</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{formatCurrency(finance.cashOnHand)}</p>
          <p className="text-xs text-slate-500 mt-1">Cash on Hand</p>
        </div>
      </div>

      {/* Top Donors */}
      <h3 className="text-sm font-semibold text-slate-700 mb-3">Top Donors &amp; PACs ({finance.cycle} Cycle)</h3>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {finance.topDonors.map((donor, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 w-5">{i + 1}.</span>
              <div>
                <p className="text-sm text-slate-900">{donor.name}</p>
                <p className="text-xs text-slate-400 capitalize">{donor.type}</p>
              </div>
            </div>
            <span className="text-sm font-medium text-slate-700">{formatCurrency(donor.amount)}</span>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <SourceCitation
          sourceName={finance.sourceName}
          sourceUrl={finance.sourceUrl}
          retrievedDate="Mar 24, 2026"
        />
      </div>
    </div>
  );
}

export default function RepresentativeDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState<TabKey>('voting');

  const rep = demoRepresentatives.find((r) => r.id === id);

  if (!rep) {
    return (
      <CivicLensShell>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Representative not found</h1>
          <p className="text-slate-500 mb-4">The representative you are looking for does not exist in our demo data.</p>
          <a href="/" className="text-violet-600 hover:text-violet-700 font-medium text-sm">
            Back to Activity Feed
          </a>
        </div>
      </CivicLensShell>
    );
  }

  const partyColor = rep.party === 'Democratic' ? 'bg-blue-500' : rep.party === 'Republican' ? 'bg-red-500' : 'bg-slate-500';
  const partyBadgeBg = rep.party === 'Democratic' ? 'bg-blue-100 text-blue-700' : rep.party === 'Republican' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600';

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'voting', label: 'Voting Record' },
    { key: 'promises', label: 'Promises' },
    { key: 'finance', label: 'Campaign Finance' },
  ];

  return (
    <CivicLensShell>
      {/* Profile Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <a href="/promises" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-violet-600 mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Promise Tracker
          </a>
          <div className="flex items-start gap-5">
            {/* Photo placeholder */}
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 ${partyColor}`}>
              {rep.name.split(' ').slice(-1)[0].charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-900">{rep.name}</h1>
              <div className="flex items-center gap-3 mt-1">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${partyBadgeBg}`}>{rep.party}</span>
                <span className="text-sm text-slate-500">{rep.state}</span>
                <span className="text-sm text-slate-400 uppercase">{rep.chamber}</span>
              </div>
              <p className="text-sm text-slate-600 mt-3 max-w-2xl leading-relaxed">{rep.bio}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
                <span>{rep.phone}</span>
                <a href={rep.website} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">{rep.website}</a>
              </div>
            </div>
          </div>

          {/* Committees */}
          <div className="mt-5">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Committees</h3>
            <div className="flex flex-wrap gap-2">
              {rep.committees.map((c) => (
                <span key={c} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-600">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-violet-100 text-violet-700'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'voting' && <VotingRecordTab rep={rep} />}
        {activeTab === 'promises' && <PromisesTab repId={rep.id} />}
        {activeTab === 'finance' && <CampaignFinanceTab rep={rep} />}
      </div>
    </CivicLensShell>
  );
}
