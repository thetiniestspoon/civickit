"use client";

import { useState } from 'react';
import { RepresentativeCard, StatusBadge, SourceCitation } from '@civickit/ui';
import { CivicLensShell } from '../shell';
import { demoPromiseProfiles, type RepPromiseProfile, type PromiseRecord } from '../../data/demo-promises';

function Scorecard({ promises }: { promises: PromiseRecord[] }) {
  const kept = promises.filter((p) => p.status === 'kept').length;
  const broken = promises.filter((p) => p.status === 'broken').length;
  const inProgress = promises.filter((p) => p.status === 'in_progress').length;
  const noAction = promises.filter((p) => p.status === 'no_action').length;

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="text-slate-600">{kept} kept</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="text-slate-600">{broken} broken</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
        <span className="text-slate-600">{inProgress} in progress</span>
      </div>
      {noAction > 0 && (
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          <span className="text-slate-600">{noAction} no action</span>
        </div>
      )}
    </div>
  );
}

function PromiseCard({ promise }: { promise: PromiseRecord }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="text-sm text-slate-900 font-medium leading-relaxed">
          &ldquo;{promise.statement}&rdquo;
        </p>
        <StatusBadge status={promise.status} />
      </div>
      <p className="text-sm text-slate-500 mb-3 leading-relaxed">{promise.statusEvidence}</p>
      <div className="flex items-center justify-between">
        <span className="px-2 py-0.5 rounded bg-slate-100 text-xs text-slate-500">{promise.category}</span>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span>Made {promise.madeDate}</span>
          <a
            href={promise.sourceUrl}
            className="text-blue-500 hover:text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PromisesPage() {
  const [selectedRep, setSelectedRep] = useState<RepPromiseProfile | null>(null);

  return (
    <CivicLensShell activeNav="/promises">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 bg-violet-100 text-violet-700">
            Promise Tracker
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Are they keeping their promises?
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            We track campaign promises against voting records and legislative actions. Select a representative to see their scorecard.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rep List */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Representatives
            </h2>
            {demoPromiseProfiles.map((rep) => (
              <div key={rep.id}>
                <RepresentativeCard
                  name={rep.name}
                  title={rep.title}
                  party={rep.party}
                  state={rep.state}
                  chamber={rep.chamber}
                  onClick={() => setSelectedRep(rep)}
                />
                {selectedRep?.id === rep.id && (
                  <div className="mt-2 ml-4">
                    <Scorecard promises={rep.promises} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Promise Detail */}
          <div className="lg:col-span-2">
            {selectedRep ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">
                    {selectedRep.name}&rsquo;s Promises
                  </h2>
                  <Scorecard promises={selectedRep.promises} />
                </div>
                <div className="space-y-3">
                  {selectedRep.promises.map((promise) => (
                    <PromiseCard key={promise.id} promise={promise} />
                  ))}
                </div>
                <div className="mt-6">
                  <SourceCitation
                    sourceName="Voting records via Congress.gov; campaign statements via public archives"
                    sourceUrl="https://www.congress.gov"
                    retrievedDate="Mar 24, 2026"
                  />
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-1">Select a representative</h3>
                <p className="text-sm text-slate-400 max-w-sm">
                  Choose a representative from the list to see their campaign promises and how they stack up against their voting record.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </CivicLensShell>
  );
}
