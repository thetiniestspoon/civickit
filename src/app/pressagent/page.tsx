import Link from "next/link";
import { demoLeads } from "@/data/pressagent/demo-leads";

const featureCards = [
  {
    title: "Document Intelligence",
    description:
      "Upload government documents and get plain-language summaries, key entity extraction, and section-by-section breakdowns in seconds.",
    href: "/pressagent/documents",
    icon: "\uD83D\uDCC4",
    stat: "3 documents processed",
  },
  {
    title: "Story Leads",
    description:
      "Automatically surface newsworthy items from public records, campaign finance filings, court documents, and government agendas.",
    href: "/pressagent/leads",
    icon: "\uD83D\uDD0D",
    stat: "16 active leads",
  },
  {
    title: "My Archive",
    description:
      "Organize your research, annotate documents, and build timelines across investigations. Your digital filing cabinet.",
    href: "#",
    icon: "\uD83D\uDDC4\uFE0F",
    stat: "Coming soon",
  },
];

export default function HomePage() {
  const topLeads = demoLeads.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your newsroom. Your stories.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-rose-100 max-w-2xl">
            PressAgent gives independent journalists the document intelligence,
            story leads, and research tools that used to require a full newsroom
            staff.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/pressagent/documents"
              className="inline-flex items-center px-6 py-3 bg-white text-rose-700 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
            >
              Upload a Document
            </Link>
            <Link
              href="/pressagent/leads"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse Story Leads
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-slate-300">
              Built for the{" "}
              <span className="text-white font-semibold">2,500+</span>{" "}
              communities that lost their local newspaper
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="font-bold text-rose-400">3</div>
                <div className="text-slate-400 text-xs">Docs Processed</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-rose-400">16</div>
                <div className="text-slate-400 text-xs">Story Leads</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-rose-400">189</div>
                <div className="text-slate-400 text-xs">Entities Found</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-rose-200 transition-all group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
              <div className="mt-4 text-xs font-medium text-slate-400">
                {card.stat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Story Leads */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Recent Story Leads
          </h2>
          <Link
            href="/pressagent/leads"
            className="text-sm font-medium text-rose-600 hover:text-rose-700"
          >
            View all leads &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {topLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-lg border border-slate-200 p-5 hover:border-rose-200 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-100 text-rose-700">
                      {lead.beat}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                      {lead.type.replace("_", " ")}
                    </span>
                    <span className="text-xs text-slate-400">
                      {lead.detectedDate}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {lead.headline}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                    {lead.summary}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Source: {lead.sourceName}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <div
                    className={`text-sm font-bold ${
                      lead.relevanceScore >= 90
                        ? "text-rose-600"
                        : lead.relevanceScore >= 75
                        ? "text-amber-600"
                        : "text-slate-500"
                    }`}
                  >
                    {lead.relevanceScore}%
                  </div>
                  <div className="text-xs text-slate-400">relevance</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-center">
          <p className="text-sm text-rose-800">
            You&apos;re on the{" "}
            <span className="font-semibold">Solo Journalist</span> tier.{" "}
            <a href="#" className="underline font-medium hover:text-rose-900">
              Upgrade to Newsroom
            </a>{" "}
            for collaborative features.
          </p>
        </div>
      </section>
    </div>
  );
}
