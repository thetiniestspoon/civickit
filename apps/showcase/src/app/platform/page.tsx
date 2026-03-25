import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Architecture - CivicKit",
  description:
    "Shared infrastructure powering all five CivicKit civic tech applications.",
};

const packages = [
  {
    name: "@civickit/types",
    desc: "Shared TypeScript definitions for all civic data models. Bills, representatives, elections, districts, and more — all typed and versioned.",
    consumers: "All apps",
    status: "Stable",
  },
  {
    name: "@civickit/ui",
    desc: "Accessible component library built on Tailwind CSS. Buttons, cards, forms, data tables, modals, and layout primitives with full ARIA support.",
    consumers: "All apps",
    status: "Stable",
  },
  {
    name: "@civickit/auth",
    desc: "Optional authentication layer using Supabase Auth. Anonymous-first design — users never need an account to access civic information.",
    consumers: "All apps (optional)",
    status: "Beta",
  },
  {
    name: "@civickit/geo",
    desc: "Address normalization, district lookup, geofencing, and geographic utilities. Converts addresses to districts, precincts, and electoral boundaries.",
    consumers: "CivicLens, BallotKit, MutualAid OS",
    status: "Beta",
  },
  {
    name: "@civickit/i18n",
    desc: "Translation framework supporting 10 languages with RTL layout. ICU message format, pluralization, and date/number localization.",
    consumers: "All apps",
    status: "Alpha",
  },
  {
    name: "@civickit/api-client",
    desc: "Typed API clients for Congress.gov, Google Civic Info, OpenStates, ProPublica, and FEC. Built-in rate limiting, caching, and error handling.",
    consumers: "CivicLens, BallotKit, PressAgent",
    status: "Beta",
  },
];

const apis = [
  { name: "Congress.gov API", owner: "Library of Congress", consumers: "CivicLens", rateLimit: "5,000/hr", risk: "Low" },
  { name: "Google Civic Info", owner: "Google", consumers: "BallotKit, CivicLens", rateLimit: "25,000/day", risk: "Medium" },
  { name: "OpenStates API", owner: "Civic Eagle", consumers: "CivicLens", rateLimit: "10,000/day", risk: "Low" },
  { name: "ProPublica Congress", owner: "ProPublica", consumers: "CivicLens, PressAgent", rateLimit: "5,000/day", risk: "Low" },
  { name: "FEC API", owner: "Federal Election Commission", consumers: "BallotKit", rateLimit: "1,000/hr", risk: "Low" },
  { name: "Ballotpedia API", owner: "Ballotpedia", consumers: "BallotKit", rateLimit: "Varies", risk: "Medium" },
  { name: "OpenAI / LLM", owner: "OpenAI", consumers: "PressAgent, RightsReady", rateLimit: "Pay-per-use", risk: "High" },
  { name: "Mapbox / Leaflet", owner: "Mapbox", consumers: "All geo-enabled", rateLimit: "50,000/mo free", risk: "Low" },
  { name: "Supabase", owner: "Self-managed", consumers: "All apps", rateLimit: "Unlimited (self-hosted)", risk: "Low" },
  { name: "SendGrid / Resend", owner: "Email provider", consumers: "BallotKit, MutualAid OS", rateLimit: "100/day free", risk: "Low" },
];

const dataFlows = [
  { from: "Congress.gov", to: "CivicLens", data: "Bills, votes, sponsors", direction: "inbound" },
  { from: "CivicLens", to: "BallotKit", data: "Rep profiles, voting records", direction: "internal" },
  { from: "CivicLens", to: "RightsReady", data: "Legislation affecting rights", direction: "internal" },
  { from: "CivicLens", to: "PressAgent", data: "Civic data for stories", direction: "internal" },
  { from: "Google Civic", to: "BallotKit", data: "Ballot info, polling places", direction: "inbound" },
  { from: "MutualAid OS", to: "PressAgent", data: "Community need signals", direction: "internal" },
  { from: "PressAgent", to: "CivicLens", data: "FOIA results, investigations", direction: "internal" },
];

export default function PlatformPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Platform Architecture
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl">
            Six shared packages, ten public APIs, and a unified data layer
            powering civic infrastructure at every level.
          </p>
        </div>
      </section>

      {/* Packages Detail */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            @civickit Packages
          </h2>

          <div className="space-y-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="font-mono text-lg font-semibold text-slate-900">
                    {pkg.name}
                  </h3>
                  <div className="flex gap-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        pkg.status === "Stable"
                          ? "bg-emerald-100 text-emerald-700"
                          : pkg.status === "Beta"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {pkg.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-3">{pkg.desc}</p>
                <p className="text-xs text-slate-500">
                  <span className="font-semibold">Consumers:</span>{" "}
                  {pkg.consumers}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Data Flow Map
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            How data moves between external APIs, CivicLens (the central hub),
            and downstream consumer apps.
          </p>

          <div className="space-y-3">
            {dataFlows.map((flow, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-4"
              >
                <div
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                    flow.direction === "inbound"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {flow.from}
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-8 h-0.5 bg-slate-300" />
                  <span className="text-xs">{flow.data}</span>
                  <div className="w-8 h-0.5 bg-slate-300" />
                  <span>&rarr;</span>
                </div>
                <div
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                    flow.direction === "inbound"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {flow.to}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Dependency Matrix */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            API Dependency Matrix
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            External APIs that CivicKit depends on, with rate limits and risk
            assessments.
          </p>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      API
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Provider
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Consumers
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Rate Limit
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Risk
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {apis.map((api) => (
                    <tr key={api.name} className="hover:bg-slate-50">
                      <td className="px-6 py-3 font-medium text-slate-900">
                        {api.name}
                      </td>
                      <td className="px-6 py-3 text-slate-600">
                        {api.owner}
                      </td>
                      <td className="px-6 py-3 text-slate-600">
                        {api.consumers}
                      </td>
                      <td className="px-6 py-3 font-mono text-xs text-slate-500">
                        {api.rateLimit}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            api.risk === "Low"
                              ? "bg-emerald-100 text-emerald-700"
                              : api.risk === "Medium"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {api.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Governance */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Schema Governance
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            How we maintain data consistency and prevent breaking changes across
            the ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Single Source of Truth
              </h3>
              <p className="text-sm text-slate-600">
                All shared types live in <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">@civickit/types</code>.
                Apps import — never duplicate — data models. Schema changes
                require version bumps and migration scripts.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Validation Layer
              </h3>
              <p className="text-sm text-slate-600">
                Zod schemas validate all API responses at runtime. If an
                external API changes its response shape, the validation layer
                catches it before bad data reaches the UI.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Versioned Migrations
              </h3>
              <p className="text-sm text-slate-600">
                Database schemas use numbered migrations with up/down scripts.
                Every app version pins to a specific schema version, ensuring
                predictable rollbacks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
