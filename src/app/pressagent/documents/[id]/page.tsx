import Link from "next/link";
import { notFound } from "next/navigation";
import { demoDocuments } from "@/data/pressagent/demo-documents";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DocumentDetailPage({ params }: PageProps) {
  const { id } = await params;
  const doc = demoDocuments.find((d) => d.id === id);

  if (!doc) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/pressagent/documents" className="text-rose-600 hover:text-rose-700">
          Documents
        </Link>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-600">{doc.title}</span>
      </nav>

      {/* Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
        <p className="text-xs text-amber-800 text-center">
          This breakdown was generated automatically. Always verify against the
          original document.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{doc.title}</h1>
          <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-100 text-rose-700">
              {doc.type}
            </span>
            <span>{doc.pageCount} pages</span>
            <span>Uploaded {doc.uploadDate}</span>
            <span>{doc.keyEntitiesCount} entities</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-rose-600 text-white text-sm font-medium rounded-lg hover:bg-rose-700 transition-colors">
            Annotate
          </button>
        </div>
      </div>

      {/* Source Citation */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mb-8 text-xs text-slate-600">
        <span className="font-semibold">Source:</span> {doc.source} | Uploaded{" "}
        {doc.uploadDate} | {doc.pageCount} pages
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar - Section Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Sections
            </h3>
            <nav className="space-y-1">
              {doc.sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="block px-3 py-2 text-sm text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <span className="text-slate-400 text-xs mr-2">
                    pp. {section.pageRange}
                  </span>
                  <br />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Summary */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Plain-Language Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {doc.fullSummary}
            </p>
          </section>

          {/* Key Entities */}
          <section className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Key Entities Extracted
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  People
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doc.entities.people.map((person) => (
                    <span
                      key={person}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Organizations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doc.entities.organizations.map((org) => (
                    <span
                      key={org}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Amounts & Figures
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doc.entities.amounts.map((amount) => (
                    <span
                      key={amount}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200"
                    >
                      {amount}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Dates
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doc.entities.dates.map((date) => (
                    <span
                      key={date}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200"
                    >
                      {date}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section-by-Section Breakdown */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Section-by-Section Breakdown
            </h2>
            <div className="space-y-4">
              {doc.sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 scroll-mt-24"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">
                      {section.title}
                    </h3>
                    <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      Pages {section.pageRange}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-3 text-center">
            <p className="text-xs text-amber-800">
              This breakdown was generated automatically. Always verify against
              the original document.
            </p>
          </div>

          {/* Tier Callout */}
          <div className="mt-6 bg-rose-50 border border-rose-200 rounded-lg p-4 text-center">
            <p className="text-sm text-rose-800">
              You&apos;re on the{" "}
              <span className="font-semibold">Solo Journalist</span> tier.{" "}
              <a
                href="#"
                className="underline font-medium hover:text-rose-900"
              >
                Upgrade to Newsroom
              </a>{" "}
              for collaborative features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
