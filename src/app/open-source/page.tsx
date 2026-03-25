import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source - CivicKit",
  description:
    "CivicKit is open source civic infrastructure. MIT packages, AGPL apps, self-hostable, grant eligible.",
};

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Open Source
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl">
            Civic infrastructure belongs to everyone. CivicKit is built in the
            open, licensed for maximum reuse, and designed for community
            ownership.
          </p>
        </div>
      </section>

      {/* Licensing Breakdown */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Licensing Model
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MIT */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                  MIT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Shared Packages
                  </h3>
                  <p className="text-sm text-slate-500">
                    Maximum freedom for reuse
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                All <code className="text-xs bg-white px-1 py-0.5 rounded border">@civickit/*</code> packages
                are MIT licensed. Use them in any project — commercial or
                non-commercial — with no restrictions.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "@civickit/types — Shared TypeScript definitions",
                  "@civickit/ui — Component library",
                  "@civickit/auth — Authentication utilities",
                  "@civickit/geo — Geographic utilities",
                  "@civickit/i18n — Internationalization",
                  "@civickit/api-client — API client library",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="font-mono text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AGPL */}
            <div className="rounded-2xl border-2 border-purple-200 bg-purple-50/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-lg font-bold">
                  AGPL
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Applications
                  </h3>
                  <p className="text-sm text-slate-500">
                    Improvements flow back to community
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                All five CivicKit applications are AGPL-3.0 licensed. If you
                modify and deploy them, you must share your changes.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "CivicLens — Legislation tracker",
                  "BallotKit — Ballot information tool",
                  "RightsReady — Rights navigator",
                  "PressAgent — Local journalism toolkit",
                  "MutualAid OS — Community support network",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    <span className="font-mono text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why dual license */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900 mb-2">
              Why dual licensing?
            </h3>
            <p className="text-sm text-slate-600">
              MIT packages let any developer build civic tools without legal
              friction. AGPL apps ensure that organizations deploying CivicKit
              to serve communities contribute their improvements back. This
              creates a virtuous cycle: the more organizations deploy, the
              better the platform gets for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Self-Hosting Guide */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Self-Hosting
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Run the entire CivicKit stack on your own infrastructure in minutes.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Start */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900 mb-4">
                Quick Start
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Clone the repository",
                    code: "git clone https://github.com/civickit/civickit.git",
                  },
                  {
                    step: 2,
                    title: "Copy environment template",
                    code: "cp .env.example .env",
                  },
                  {
                    step: 3,
                    title: "Start with Docker Compose",
                    code: "docker compose up -d",
                  },
                  {
                    step: 4,
                    title: "Access the showcase",
                    code: "open http://localhost:3000",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.title}
                      </p>
                      <code className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded mt-1 block">
                        {item.code}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900 mb-4">
                Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2">
                    Minimum Hardware
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>2 CPU cores</li>
                    <li>4 GB RAM</li>
                    <li>20 GB storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2">
                    Software
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>Docker 24+ and Docker Compose v2</li>
                    <li>
                      Node.js 20+ (for development only)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2">
                    Included Services
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>PostgreSQL 16 (via Supabase)</li>
                    <li>Redis 7 (caching and rate limiting)</li>
                    <li>Nginx (reverse proxy + TLS)</li>
                    <li>All 5 CivicKit apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Model */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Contributing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="text-3xl mb-4">{"\u{1F4DD}"}</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Report Issues
              </h3>
              <p className="text-sm text-slate-600">
                Found a bug or have a feature request? Open an issue on GitHub.
                We use issue templates to ensure all reports have the context
                needed for triage.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="text-3xl mb-4">{"\u{1F527}"}</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Submit PRs
              </h3>
              <p className="text-sm text-slate-600">
                Fork the repo, make your changes, submit a PR. We require
                tests for new features, follow conventional commits, and
                review within 48 hours.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="text-3xl mb-4">{"\u{1F310}"}</div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Translate
              </h3>
              <p className="text-sm text-slate-600">
                Help make CivicKit accessible in more languages. We support 10
                languages and are always looking for native speakers to improve
                translations.
              </p>
            </div>
          </div>

          {/* Contribution Guidelines Summary */}
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">
              Contribution Guidelines
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Code Style</h4>
                <ul className="space-y-1">
                  <li>TypeScript strict mode required</li>
                  <li>ESLint + Prettier formatting</li>
                  <li>Conventional commit messages</li>
                  <li>100% type coverage on shared packages</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">Testing</h4>
                <ul className="space-y-1">
                  <li>Unit tests for business logic</li>
                  <li>Integration tests for API routes</li>
                  <li>Accessibility audits (axe-core) on all pages</li>
                  <li>Visual regression tests for UI components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Funding &amp; Sustainability
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            CivicKit is structured to be sustainable through grants, community
            support, and ethical revenue models.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Civic Tech Grants",
                desc: "Eligible for funding from Knight Foundation, Mozilla, Ford Foundation, and other civic tech funders.",
                icon: "\u{1F3DB}\uFE0F",
              },
              {
                title: "Community Sponsors",
                desc: "Organizations using CivicKit can sponsor development of features they need through GitHub Sponsors.",
                icon: "\u2764\uFE0F",
              },
              {
                title: "Managed Hosting",
                desc: "Optional paid tier for organizations that want managed infrastructure, SLAs, and priority support.",
                icon: "\u2601\uFE0F",
              },
              {
                title: "Training & Support",
                desc: "Paid training, integration consulting, and dedicated support for newsrooms and civic organizations.",
                icon: "\u{1F393}",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Sustainability Commitment */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
            <h3 className="text-xl font-bold mb-3">
              Our Sustainability Promise
            </h3>
            <p className="text-slate-300 max-w-3xl">
              CivicKit will never put civic data behind a paywall. The core
              platform and all public-interest features will always be free and
              open source. Revenue from managed hosting and consulting supports
              continued development without compromising our mission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
