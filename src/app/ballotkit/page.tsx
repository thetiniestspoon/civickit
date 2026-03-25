'use client';

import { useState } from 'react';
import { AppShell } from '@civickit/ui';
import { SearchBar } from '@civickit/ui';
import { SourceCitation } from '@civickit/ui';
import { demoBallot } from '@/data/ballotkit/demo-ballot';
import type { Race, BallotMeasure } from '@/data/ballotkit/demo-ballot';

const navItems = [
  { label: 'My Ballot', href: '/ballotkit', active: true },
  { label: 'Registration', href: '/ballotkit/register' },
  { label: 'Methodology', href: '/ballotkit/methodology' },
];

function LevelBadge({ level }: { level: string }) {
  const config: Record<string, { bg: string; text: string }> = {
    federal: { bg: 'bg-blue-100', text: 'text-blue-700' },
    state: { bg: 'bg-violet-100', text: 'text-violet-700' },
    local: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  };
  const c = config[level] || config.federal;
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${c.bg} ${c.text} capitalize`}>
      {level}
    </span>
  );
}

function PartyBadge({ party }: { party: string }) {
  const colors: Record<string, string> = {
    Democratic: 'bg-blue-50 text-blue-700 border-blue-200',
    Republican: 'bg-red-50 text-red-700 border-red-200',
    Libertarian: 'bg-amber-50 text-amber-700 border-amber-200',
    Nonpartisan: 'bg-slate-50 text-slate-600 border-slate-200',
  };
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${colors[party] || colors.Nonpartisan}`}>
      {party}
    </span>
  );
}

function RaceCard({ race }: { race: Race }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-900 text-lg">{race.office}</h3>
          {race.district && (
            <p className="text-sm text-slate-500 mt-0.5">{race.district}</p>
          )}
        </div>
        <LevelBadge level={race.level} />
      </div>

      <div className="space-y-4">
        {race.candidates.map((candidate) => (
          <div
            key={candidate.name}
            className="border border-slate-100 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-medium text-slate-900">{candidate.name}</span>
              <PartyBadge party={candidate.party} />
              {candidate.incumbent && (
                <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                  Incumbent
                </span>
              )}
            </div>
            <ul className="space-y-1">
              {candidate.platform.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-slate-300 mt-1 shrink-0">&#8226;</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <SourceCitation
          sourceName={race.source.name}
          sourceUrl={race.source.url}
          retrievedDate={race.source.retrievedDate}
        />
      </div>
    </div>
  );
}

function MeasureCard({ measure }: { measure: BallotMeasure }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            {measure.code}
          </span>
          <h3 className="font-semibold text-slate-900 text-lg mt-2">{measure.title}</h3>
        </div>
      </div>

      <p className="text-sm text-slate-600 mb-4 leading-relaxed">{measure.description}</p>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
          <p className="text-xs font-semibold text-emerald-700 mb-1">A YES vote means...</p>
          <p className="text-sm text-emerald-800">{measure.yesVoteMeans}</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-lg p-3">
          <p className="text-xs font-semibold text-red-700 mb-1">A NO vote means...</p>
          <p className="text-sm text-red-800">{measure.noVoteMeans}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <p className="text-xs font-medium text-slate-500 mb-1.5">Supporters</p>
          <div className="flex flex-wrap gap-1">
            {measure.supporters.map((s) => (
              <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500 mb-1.5">Opponents</p>
          <div className="flex flex-wrap gap-1">
            {measure.opponents.map((o) => (
              <span key={o} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>

      <SourceCitation
        sourceName={measure.source.name}
        sourceUrl={measure.source.url}
        retrievedDate={measure.source.retrievedDate}
      />
    </div>
  );
}

export default function HomePage() {
  const [address, setAddress] = useState('');
  const [showResults, setShowResults] = useState(false);

  const federalRaces = demoBallot.races.filter((r) => r.level === 'federal');
  const stateRaces = demoBallot.races.filter((r) => r.level === 'state');
  const localRaces = demoBallot.races.filter((r) => r.level === 'local');

  const handleSearch = () => {
    if (address.trim()) {
      setShowResults(true);
    }
  };

  return (
    <AppShell
      appName="BallotKit"
      appColor="#3b82f6"
      appIcon="&#x1F5F3;&#xFE0F;"
      tagline="Understand your ballot"
      navItems={navItems}
    >
      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What&apos;s on your ballot?
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Enter your address to see every race and measure, explained in plain language.
          </p>
          <div className="max-w-lg mx-auto flex gap-2">
            <div className="flex-1">
              <SearchBar
                placeholder="742 Evergreen Terrace, Springfield, IL 62704"
                value={address}
                onChange={setAddress}
                onSubmit={handleSearch}
                icon="location"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-5 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {!showResults && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">&#x1F4CB;</div>
              <h3 className="font-semibold text-slate-900 mb-1">Every Race</h3>
              <p className="text-sm text-slate-500">
                Federal, state, and local races all in one place.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#x1F4AC;</div>
              <h3 className="font-semibold text-slate-900 mb-1">Plain Language</h3>
              <p className="text-sm text-slate-500">
                Ballot measures explained so anyone can understand them.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">&#x1F50D;</div>
              <h3 className="font-semibold text-slate-900 mb-1">Sourced Data</h3>
              <p className="text-sm text-slate-500">
                Every claim is cited. Check our sources yourself.
              </p>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Results header */}
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Showing results for</p>
                <h2 className="text-xl font-bold text-slate-900">{demoBallot.address}</h2>
                <p className="text-sm text-slate-500 mt-1">
                  {demoBallot.electionName} &mdash; {demoBallot.electionDate}
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Cheat Sheet
              </button>
            </div>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-2 mb-8">
            <a href="#federal" className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg hover:bg-blue-100 transition-colors">
              Federal ({federalRaces.length})
            </a>
            <a href="#state" className="px-3 py-1.5 bg-violet-50 text-violet-700 text-sm rounded-lg hover:bg-violet-100 transition-colors">
              State ({stateRaces.length})
            </a>
            <a href="#local" className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm rounded-lg hover:bg-emerald-100 transition-colors">
              Local ({localRaces.length})
            </a>
            <a href="#measures" className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-lg hover:bg-amber-100 transition-colors">
              Measures ({demoBallot.measures.length})
            </a>
          </div>

          {/* Federal Races */}
          <section id="federal" className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Federal Races
            </h2>
            <div className="space-y-4">
              {federalRaces.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </section>

          {/* State Races */}
          <section id="state" className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              State Races
            </h2>
            <div className="space-y-4">
              {stateRaces.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </section>

          {/* Local Races */}
          <section id="local" className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Local Races
            </h2>
            <div className="space-y-4">
              {localRaces.map((race) => (
                <RaceCard key={race.id} race={race} />
              ))}
            </div>
          </section>

          {/* Ballot Measures */}
          <section id="measures" className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Ballot Measures
            </h2>
            <div className="space-y-4">
              {demoBallot.measures.map((measure) => (
                <MeasureCard key={measure.id} measure={measure} />
              ))}
            </div>
          </section>
        </div>
      )}
    </AppShell>
  );
}
