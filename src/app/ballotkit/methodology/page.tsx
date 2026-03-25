'use client';

import { AppShell } from '@civickit/ui';
import { SourceCitation } from '@civickit/ui';

const navItems = [
  { label: 'My Ballot', href: '/ballotkit' },
  { label: 'Registration', href: '/ballotkit/register' },
  { label: 'Methodology', href: '/ballotkit/methodology', active: true },
];

const dataSources = [
  {
    name: 'Google Civic Information API',
    description:
      'Provides election and representative data based on voter address. Returns ballot info, polling locations, and contest details for U.S. elections.',
    url: 'https://developers.google.com/civic-information',
    dataTypes: ['Ballot contests', 'Candidates', 'Polling locations', 'Election dates'],
  },
  {
    name: 'Ballotpedia API',
    description:
      'Comprehensive encyclopedia of U.S. politics. Provides detailed candidate profiles, ballot measure text, voting records, and campaign finance summaries.',
    url: 'https://ballotpedia.org',
    dataTypes: ['Candidate bios', 'Ballot measure text', 'Election results', 'Redistricting data'],
  },
  {
    name: 'OpenSecrets / FEC',
    description:
      'Campaign finance data from the Federal Election Commission. Tracks donations, expenditures, and PAC contributions at the federal level.',
    url: 'https://www.opensecrets.org',
    dataTypes: ['Campaign contributions', 'PAC spending', 'Donor lists', 'Lobbying data'],
  },
  {
    name: 'Vote Smart / Ballotpedia Ratings',
    description:
      'Nonpartisan collection of interest group ratings, key votes, and candidate issue positions based on questionnaires and voting records.',
    url: 'https://justfacts.votesmart.org',
    dataTypes: ['Interest group ratings', 'Key votes', 'Issue positions', 'Public statements'],
  },
  {
    name: 'U.S. Vote Foundation',
    description:
      'Voter registration rules, absentee ballot deadlines, and ID requirements for all 50 states and territories.',
    url: 'https://www.usvotefoundation.org',
    dataTypes: ['Registration deadlines', 'ID requirements', 'Absentee rules', 'Early voting dates'],
  },
  {
    name: 'State Election Offices',
    description:
      'Official state boards of elections for verified ballot data, certified candidate lists, and official measure language.',
    url: 'https://www.usa.gov/election-office',
    dataTypes: ['Official ballots', 'Certified candidates', 'Measure text', 'Election results'],
  },
];

const pipelineSteps = [
  {
    step: 1,
    label: 'Address Geocoding',
    description: 'Your address is converted to geographic coordinates and matched to voting districts at every level (federal, state, county, municipal, school district).',
    icon: '&#x1F4CD;',
  },
  {
    step: 2,
    label: 'Ballot Assembly',
    description: 'We query official state election data and the Google Civic API to find every contest and measure on your specific ballot.',
    icon: '&#x1F4CB;',
  },
  {
    step: 3,
    label: 'Candidate Enrichment',
    description: 'Candidate profiles are enriched with platform positions, endorsements, and voting records from Ballotpedia and Vote Smart.',
    icon: '&#x1F464;',
  },
  {
    step: 4,
    label: 'Plain-Language Rewriting',
    description: 'Ballot measure language is rewritten by our editorial team into plain English, with yes/no impact statements reviewed by policy experts.',
    icon: '&#x270F;&#xFE0F;',
  },
  {
    step: 5,
    label: 'Source Verification',
    description: 'Every data point is tagged with its source and retrieval date. Automated checks flag stale or conflicting data for human review.',
    icon: '&#x1F50D;',
  },
  {
    step: 6,
    label: 'Delivery',
    description: 'Your personalized ballot guide is presented with inline citations, exportable as a printable cheat sheet.',
    icon: '&#x1F4EC;',
  },
];

export default function MethodologyPage() {
  return (
    <AppShell
      appName="BallotKit"
      appColor="#3b82f6"
      appIcon="&#x1F5F3;&#xFE0F;"
      tagline="Understand your ballot"
      navItems={navItems}
    >
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 bg-blue-100 text-blue-700">
            Transparency
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How We Built This
          </h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            BallotKit is committed to radical transparency. Here is exactly where our data comes from,
            how we process it, and how you can hold us accountable.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        {/* Data Pipeline */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6">Data Pipeline</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />
            <div className="space-y-6">
              {pipelineSteps.map((step) => (
                <div key={step.step} className="relative flex gap-4 sm:gap-6">
                  <div
                    className="relative z-10 w-12 h-12 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center shrink-0 text-xl"
                    dangerouslySetInnerHTML={{ __html: step.icon }}
                  />
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        Step {step.step}
                      </span>
                      <h3 className="font-semibold text-slate-900">{step.label}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6">Where Our Data Comes From</h2>
          <div className="grid gap-4">
            {dataSources.map((source) => (
              <div
                key={source.name}
                className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">{source.name}</h3>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 shrink-0 ml-4"
                  >
                    Visit source
                  </a>
                </div>
                <p className="text-sm text-slate-600 mb-3">{source.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {source.dataTypes.map((dt) => (
                    <span
                      key={dt}
                      className="px-2 py-0.5 rounded bg-slate-100 text-xs text-slate-600"
                    >
                      {dt}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plain Language */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            How We Write Plain-Language Explanations
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">1</span>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Start with the official text</h4>
                <p className="text-sm text-slate-600">
                  We begin with the exact ballot language certified by the state election office. This is the legal source of truth.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">2</span>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Rewrite at an 8th-grade reading level</h4>
                <p className="text-sm text-slate-600">
                  Our editorial team rewrites the language to be clear and accessible, targeting an 8th-grade reading level. We avoid jargon, legalese, and double negatives.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">3</span>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Add &quot;Yes means / No means&quot; impact statements</h4>
                <p className="text-sm text-slate-600">
                  For every ballot measure, we provide concrete impact statements: what happens if the measure passes, and what happens if it fails.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">4</span>
              <div>
                <h4 className="font-medium text-slate-900 mb-1">Policy expert review</h4>
                <p className="text-sm text-slate-600">
                  Every rewritten explanation is reviewed by a subject-matter expert to ensure accuracy. We never sacrifice correctness for simplicity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Policy */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Nonpartisan Editorial Policy</h2>
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">BallotKit does not endorse candidates or positions.</strong> Our
                mission is to help voters understand what is on their ballot, not to tell them how to vote.
              </p>
              <p>
                All candidate descriptions use the same structure: name, party affiliation, incumbency status,
                and platform positions sourced from the candidate&apos;s own campaign materials. We present
                candidates in the order they appear on the official ballot.
              </p>
              <p>
                Ballot measure explanations include both supporter and opponent perspectives, sourced from
                official campaign committees registered with election authorities. We do not editorialize
                on the merits of any position.
              </p>
              <p>
                Our editorial staff follow a strict conflict-of-interest policy. No staff member may hold
                a position in a political campaign, party organization, or advocacy group during their
                tenure at BallotKit.
              </p>
            </div>
          </div>
        </section>

        {/* Flag Errors */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">How to Flag Errors</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Found something wrong?</h3>
                <p className="text-sm text-amber-800 mb-4">
                  If you spot an error, outdated information, or believe any content is presented in a biased way,
                  we want to know. Our correction policy guarantees a response within 48 hours.
                </p>
                <div className="space-y-2 text-sm text-amber-800">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:corrections@ballotkit.org" className="underline">
                      corrections@ballotkit.org
                    </a>
                  </p>
                  <p>
                    <strong>Include:</strong> The specific claim, why you believe it is incorrect, and a link to
                    a correcting source if possible.
                  </p>
                  <p>
                    <strong>Corrections log:</strong> All corrections are published in our public corrections log
                    with timestamps, original text, corrected text, and the source of the correction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Citation */}
        <div className="pt-4 border-t border-slate-200">
          <SourceCitation
            sourceName="BallotKit Methodology"
            sourceUrl="https://ballotkit.org/methodology"
            retrievedDate="Mar 2026"
          />
        </div>
      </div>
    </AppShell>
  );
}
