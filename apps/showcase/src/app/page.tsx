const apps = [
  {
    name: "CivicLens",
    icon: "\u{1F3DB}\uFE0F",
    port: 3001,
    color: "purple",
    tagline: "What did your government do this week?",
    phase: 2,
    features: [
      "Real-time legislation tracking with plain-language summaries",
      "Rep scorecards with voting history and sponsor analysis",
      "Community impact dashboards by district",
      "Multi-source civic data aggregation engine",
    ],
  },
  {
    name: "BallotKit",
    icon: "\u{1F5F3}\uFE0F",
    port: 3002,
    color: "blue",
    tagline: "Enter your address, understand your ballot.",
    phase: 3,
    features: [
      "Address-to-ballot lookup with full candidate info",
      "Side-by-side candidate comparison tools",
      "Polling place finder with accessibility info",
      "Election reminders and deadline tracking",
    ],
  },
  {
    name: "RightsReady",
    icon: "\u2696\uFE0F",
    port: 3003,
    color: "emerald",
    tagline: "Know your rights, navigate the process.",
    phase: 4,
    features: [
      "Guided rights-awareness flows by situation",
      "Legal resource directory with warm referrals",
      "Document preparation assistance",
      "Trauma-informed interface with safety features",
    ],
  },
  {
    name: "PressAgent",
    icon: "\u{1F4F0}",
    port: 3004,
    color: "rose",
    tagline: "The newsroom-in-a-box.",
    phase: 4,
    features: [
      "AI-assisted local journalism workflows",
      "FOIA request builder and tracker",
      "Story lead detection from civic data",
      "Community tip line with source protection",
    ],
  },
  {
    name: "MutualAid OS",
    icon: "\u{1F932}",
    port: 3005,
    color: "amber",
    tagline: "Connect people to community support.",
    phase: 5,
    features: [
      "Need/offer matching with geolocation",
      "Resource inventory and distribution tracking",
      "Volunteer coordination and scheduling",
      "Multi-org mutual aid network federation",
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; accent: string; badge: string; hover: string; glow: string }> = {
  purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", accent: "bg-purple-600", badge: "bg-purple-100 text-purple-700", hover: "hover:border-purple-400 hover:shadow-purple-100", glow: "from-purple-500/20" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", accent: "bg-blue-600", badge: "bg-blue-100 text-blue-700", hover: "hover:border-blue-400 hover:shadow-blue-100", glow: "from-blue-500/20" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", accent: "bg-emerald-600", badge: "bg-emerald-100 text-emerald-700", hover: "hover:border-emerald-400 hover:shadow-emerald-100", glow: "from-emerald-500/20" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", accent: "bg-rose-600", badge: "bg-rose-100 text-rose-700", hover: "hover:border-rose-400 hover:shadow-rose-100", glow: "from-rose-500/20" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", accent: "bg-amber-600", badge: "bg-amber-100 text-amber-700", hover: "hover:border-amber-400 hover:shadow-amber-100", glow: "from-amber-500/20" },
};

const principles = [
  { icon: "\u{1F50D}", title: "Radical Transparency", desc: "Every data source, algorithm, and editorial decision is documented and auditable." },
  { icon: "\u{1F512}", title: "Privacy First", desc: "Zero persistent tracking. No accounts required. Local-first data storage." },
  { icon: "\u2696\uFE0F", title: "Nonpartisan", desc: "Facts over framing. No editorial slant. Community-governed content policies." },
  { icon: "\u{1F49C}", title: "Trauma-Informed", desc: "Gentle UX for sensitive topics. Content warnings. Exit strategies. Safety first." },
  { icon: "\u{1F30D}", title: "Inclusive by Default", desc: "WCAG 2.2 AA. 10 languages. 6th-grade reading level. RTL support. Offline capable." },
  { icon: "\u{1F4E6}", title: "Open Source", desc: "MIT packages. AGPL apps. Self-hostable. Docker Compose. Community-driven." },
];

const packages = [
  { name: "@civickit/types", desc: "Shared TypeScript definitions for all civic data models" },
  { name: "@civickit/ui", desc: "Accessible component library — buttons, cards, forms, data tables" },
  { name: "@civickit/auth", desc: "Optional Supabase auth with anonymous-first design" },
  { name: "@civickit/geo", desc: "Address normalization, district lookup, geofencing utilities" },
  { name: "@civickit/i18n", desc: "Translation framework with 10-language support and RTL" },
  { name: "@civickit/api-client", desc: "Typed clients for Congress, Google Civic, OpenStates, and more" },
];

const timeline = [
  { phase: 1, title: "Foundation", period: "Mar 2026", desc: "Monorepo setup, shared packages, design system, CI/CD pipeline", status: "complete" },
  { phase: 2, title: "CivicLens MVP", period: "Apr-May 2026", desc: "Legislation tracker, rep scorecards, civic data aggregation", status: "active" },
  { phase: 3, title: "BallotKit MVP", period: "Jun-Aug 2026", desc: "Ballot lookup, candidate comparison, polling place finder", status: "upcoming", highlight: true },
  { phase: 4, title: "RightsReady + PressAgent", period: "Sep-Nov 2026", desc: "Rights navigator, FOIA builder, local newsroom tools", status: "upcoming" },
  { phase: 5, title: "MutualAid OS", period: "Dec 2026-Jan 2027", desc: "Need/offer matching, resource tracking, volunteer coordination", status: "upcoming" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─── */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent">
                CivicKit
              </span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Five open-source apps. One shared platform.
              <br />
              <span className="text-white font-medium">
                Civic infrastructure for everyone.
              </span>
            </p>

            {/* Key Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { value: "5", label: "Apps" },
                { value: "6", label: "Shared Packages" },
                { value: "10+", label: "Public APIs" },
                { value: "10", label: "Languages" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apps"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                Explore the Apps
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                View Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design Principles ─── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Design Principles
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every decision in CivicKit is guided by these core commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Five Apps ─── */}
      <section id="apps" className="bg-white py-20 sm:py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              The Five Apps
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Each app serves a distinct civic need. Together, they form a
              complete civic infrastructure platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apps.map((app) => {
              const c = colorMap[app.color];
              return (
                <div
                  key={app.name}
                  className={`relative rounded-2xl border-2 ${c.border} ${c.hover} p-8 transition-all duration-300 hover:shadow-xl group overflow-hidden`}
                >
                  {/* Subtle glow */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${c.glow} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{app.icon}</span>
                        <div>
                          <h3
                            className={`text-2xl font-bold ${c.text}`}
                          >
                            {app.name}
                          </h3>
                          <p className="text-sm text-slate-500">
                            localhost:{app.port}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}
                      >
                        Phase {app.phase}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-lg text-slate-700 font-medium mb-4">
                      {app.tagline}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {app.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.accent} shrink-0`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={`http://localhost:${app.port}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${c.accent} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}
                    >
                      Launch App
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Ecosystem Data Flow ─── */}
      <section className="bg-slate-900 text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ecosystem Data Flow
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              CivicLens sits at the center, aggregating civic data that powers
              every app in the ecosystem.
            </p>
          </div>

          {/* Data Flow Diagram */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Hub */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center animate-pulse-slow">
                  <div className="text-center">
                    <div className="text-3xl mb-1">{"\u{1F3DB}\uFE0F"}</div>
                    <div className="text-sm font-bold text-purple-300">
                      CivicLens
                    </div>
                    <div className="text-xs text-purple-400">Data Hub</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow arrows and connected apps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "\u{1F5F3}\uFE0F",
                  name: "BallotKit",
                  flow: "Elections & Candidates",
                  color: "blue",
                },
                {
                  icon: "\u2696\uFE0F",
                  name: "RightsReady",
                  flow: "Legislation & Rights",
                  color: "emerald",
                },
                {
                  icon: "\u{1F4F0}",
                  name: "PressAgent",
                  flow: "Voting Records & Data",
                  color: "rose",
                },
                {
                  icon: "\u{1F932}",
                  name: "MutualAid OS",
                  flow: "Community Data",
                  color: "amber",
                },
              ].map((item) => {
                const colors: Record<string, string> = {
                  blue: "border-blue-500 bg-blue-500/10",
                  emerald: "border-emerald-500 bg-emerald-500/10",
                  rose: "border-rose-500 bg-rose-500/10",
                  amber: "border-amber-500 bg-amber-500/10",
                };
                const textColors: Record<string, string> = {
                  blue: "text-blue-300",
                  emerald: "text-emerald-300",
                  rose: "text-rose-300",
                  amber: "text-amber-300",
                };
                const arrowColors: Record<string, string> = {
                  blue: "bg-blue-500",
                  emerald: "bg-emerald-500",
                  rose: "bg-rose-500",
                  amber: "bg-amber-500",
                };
                return (
                  <div key={item.name} className="flex flex-col items-center">
                    {/* Arrow line */}
                    <div
                      className={`w-0.5 h-8 ${arrowColors[item.color]} mb-2`}
                    />
                    <div
                      className={`w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent ${
                        item.color === "blue"
                          ? "border-t-blue-500"
                          : item.color === "emerald"
                          ? "border-t-emerald-500"
                          : item.color === "rose"
                          ? "border-t-rose-500"
                          : "border-t-amber-500"
                      } mb-2`}
                    />
                    {/* App box */}
                    <div
                      className={`w-full rounded-xl border ${colors[item.color]} p-4 text-center`}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div
                        className={`text-sm font-bold ${textColors[item.color]}`}
                      >
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {item.flow}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Shared Platform Layer */}
            <div className="mt-12 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div className="text-center mb-4">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Shared Platform Layer
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {packages.map((pkg) => (
                  <span
                    key={pkg.name}
                    className="px-3 py-1.5 rounded-full bg-slate-700 text-xs font-mono text-slate-300"
                  >
                    {pkg.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Shared Platform Architecture ─── */}
      <section
        id="architecture"
        className="bg-white py-20 sm:py-24 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Shared Platform Architecture
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Six shared packages eliminate duplication and ensure consistency
              across all five apps.
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <h3 className="font-mono text-sm font-semibold text-slate-900">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{pkg.desc}</p>
              </div>
            ))}
          </div>

          {/* Shared Data Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">
                Shared Data Ownership
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/50">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Data Domain
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Owner
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">
                      Consumers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { domain: "Legislation & Bills", owner: "CivicLens", consumers: "RightsReady, PressAgent" },
                    { domain: "Elections & Candidates", owner: "CivicLens", consumers: "BallotKit" },
                    { domain: "Representatives", owner: "CivicLens", consumers: "BallotKit, PressAgent" },
                    { domain: "Legal Resources", owner: "RightsReady", consumers: "MutualAid OS" },
                    { domain: "Community Needs", owner: "MutualAid OS", consumers: "PressAgent" },
                    { domain: "FOIA Requests", owner: "PressAgent", consumers: "CivicLens" },
                  ].map((row) => (
                    <tr key={row.domain} className="hover:bg-slate-50">
                      <td className="px-6 py-3 font-medium text-slate-900">
                        {row.domain}
                      </td>
                      <td className="px-6 py-3 text-slate-600">{row.owner}</td>
                      <td className="px-6 py-3 text-slate-500">
                        {row.consumers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Two-Tier Hosting */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Tier 1: Managed Cloud
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Official hosted instance with automatic updates, managed
                infrastructure, and SLA guarantees.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Vercel / Railway deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Supabase managed database
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  CDN-backed static assets
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-3">
                Tier 2: Self-Hosted
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Full Docker Compose stack for organizations that need data
                sovereignty or air-gapped deployment.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Single docker-compose.yml
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  PostgreSQL + Redis included
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Tor-compatible, offline capable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Build Timeline ─── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Build Timeline
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A phased approach from foundation to full platform.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300" />

            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.phase} className="relative pl-16">
                  {/* Dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                      item.status === "complete"
                        ? "bg-emerald-500 border-emerald-500"
                        : item.status === "active"
                        ? "bg-purple-500 border-purple-500"
                        : "bg-white border-slate-300"
                    }`}
                  >
                    {item.status === "active" && (
                      <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-xl border p-6 ${
                      item.highlight
                        ? "border-blue-300 bg-blue-50 shadow-sm"
                        : item.status === "active"
                        ? "border-purple-200 bg-purple-50 shadow-sm"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          item.status === "complete"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "active"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        Phase {item.phase}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.period}
                      </span>
                      {item.highlight && (
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                          Election Deadline: Aug/Oct 2026
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Accessibility Commitment ─── */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            {[
              "WCAG 2.2 AA",
              "6th-Grade Reading",
              "RTL Support",
              "10 Languages",
              "Low-Bandwidth",
              "Tor-Friendly",
              "Offline Capable",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-300">{item}</span>
                {i < 6 && (
                  <span className="hidden sm:inline text-slate-700 ml-4">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Source ─── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Open Source First
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Built in the open. Funded by grants. Run by communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "MIT Packages",
                desc: "All @civickit/* shared packages are MIT licensed for maximum reuse.",
              },
              {
                title: "AGPL Apps",
                desc: "Application code is AGPL to ensure improvements flow back to the community.",
              },
              {
                title: "Docker Compose",
                desc: "One command to run the entire stack locally or on your own infrastructure.",
              },
              {
                title: "Grant Eligible",
                desc: "Structured for civic tech grants from Knight, Mozilla, Ford, and others.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
