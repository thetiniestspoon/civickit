'use client';

import { useState } from 'react';
import { AppShell } from '@civickit/ui';
import { SourceCitation } from '@civickit/ui';
import { registrationData, allStates } from '@/data/demo-registration';
import type { RegistrationState } from '@/data/demo-registration';

const navItems = [
  { label: 'My Ballot', href: '/' },
  { label: 'Registration', href: '/register', active: true },
  { label: 'Methodology', href: '/methodology' },
];

function DeadlineCard({
  icon,
  label,
  date,
  color,
}: {
  icon: string;
  label: string;
  date: string;
  color: string;
}) {
  return (
    <div className={`rounded-lg border p-4 ${color}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-sm font-semibold text-slate-900">{date}</p>
    </div>
  );
}

function RegistrationResults({ state }: { state: RegistrationState }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formName, setFormName] = useState('');

  return (
    <div className="space-y-8">
      {/* Deadlines */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Key Deadlines</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DeadlineCard
            icon="📝"
            label="Registration Deadline"
            date={state.registrationDeadline}
            color="border-blue-200 bg-blue-50"
          />
          <DeadlineCard
            icon="🗓️"
            label="Early Voting"
            date={state.earlyVotingDates}
            color="border-violet-200 bg-violet-50"
          />
          <DeadlineCard
            icon="📬"
            label="Mail-in Ballot Request"
            date={state.mailBallotDeadline}
            color="border-amber-200 bg-amber-50"
          />
          <DeadlineCard
            icon="🏛️"
            label="Election Day"
            date={state.electionDay}
            color="border-emerald-200 bg-emerald-50"
          />
        </div>
      </section>

      {/* Registration Check */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Check Your Registration</h2>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          {!showConfirmation ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Enter your name to check your voter registration status in {state.name}.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                onClick={() => setShowConfirmation(true)}
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Check Registration
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">You&apos;re Registered!</h3>
              <p className="text-sm text-slate-500 mb-4">
                {formName || 'Voter'} is registered to vote in {state.name}.
              </p>
              <p className="text-xs text-slate-400">
                This is a demo. In production, this would query the {state.name} voter file.
              </p>
              <button
                onClick={() => setShowConfirmation(false)}
                className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Check another name
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ID Requirements */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">ID Requirements</h2>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <ul className="space-y-3">
            {state.idRequirements.map((req, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {req}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Document Checklist */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Document Checklist</h2>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <ul className="space-y-3">
            {state.documentChecklist.map((doc, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="w-5 h-5 rounded border-2 border-slate-300 shrink-0 mt-0.5 flex items-center justify-center">
                  <span className="text-xs text-slate-300">&#10003;</span>
                </span>
                {doc}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <a
              href={state.onlineRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Register online at {state.onlineRegistrationUrl}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Source */}
      <div>
        <SourceCitation
          sourceName={state.source.name}
          sourceUrl={state.source.url}
          retrievedDate={state.source.retrievedDate}
        />
      </div>
    </div>
  );
}

export default function RegisterPage() {
  const [selectedState, setSelectedState] = useState('');

  const stateData = selectedState ? registrationData[selectedState] : null;

  return (
    <AppShell
      appName="BallotKit"
      appColor="#3b82f6"
      appIcon="🗳️"
      tagline="Understand your ballot"
      navItems={navItems}
    >
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Voter Registration
          </h1>
          <p className="mt-2 text-slate-600">
            Check your registration status, find deadlines, and see what ID you need.
          </p>

          <div className="mt-6 max-w-xs">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Select your state
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a state...</option>
              {allStates.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
            {selectedState && !stateData && (
              <p className="mt-2 text-sm text-amber-600">
                Demo data is only available for IL, CA, and NJ. Select one of those states to see the full experience.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {!selectedState && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🗳️</div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">Select a state to begin</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Choose your state from the dropdown above to see registration requirements,
              deadlines, and check your voter registration status.
            </p>
          </div>
        )}

        {stateData && <RegistrationResults state={stateData} />}
      </div>
    </AppShell>
  );
}
