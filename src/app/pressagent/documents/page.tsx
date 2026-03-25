import Link from "next/link";
import { demoDocuments } from "@/data/pressagent/demo-documents";

export default function DocumentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Document Intelligence
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Upload government documents and get automated analysis with
          plain-language summaries, entity extraction, and section breakdowns.
        </p>
      </div>

      {/* Upload Zone */}
      <div className="mb-10">
        <div className="border-2 border-dashed border-slate-300 rounded-xl bg-white p-10 text-center hover:border-rose-400 hover:bg-rose-50/30 transition-colors cursor-pointer">
          <div className="text-4xl mb-3">{"\uD83D\uDCC1"}</div>
          <h3 className="text-lg font-semibold text-slate-700">
            Drop a document here, or click to upload
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            PDF, DOCX, or TXT up to 50MB. Government budgets, court rulings,
            regulations, meeting minutes, contracts.
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-rose-600 text-white text-sm font-medium rounded-lg hover:bg-rose-700 transition-colors">
            Select File
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-center">
        <p className="text-xs text-amber-800">
          This breakdown was generated automatically. Always verify against the
          original document.
        </p>
      </div>

      {/* Recently Processed */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          Recently Processed
        </h2>
        <div className="grid gap-4">
          {demoDocuments.map((doc) => (
            <Link
              key={doc.id}
              href={`/pressagent/documents/${doc.id}`}
              className="block bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:border-rose-200 transition-all group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-100 text-rose-700">
                      {doc.type}
                    </span>
                    <span className="text-xs text-slate-400">
                      {doc.pageCount} pages
                    </span>
                    <span className="text-xs text-slate-400">
                      Uploaded {doc.uploadDate}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {doc.summaryPreview}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                    <span>{doc.keyEntitiesCount} entities extracted</span>
                    <span>{doc.sections.length} sections identified</span>
                    <span>Source: {doc.source}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 hidden sm:block">
                  <div className="w-16 h-20 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-2xl">
                    {"\uD83D\uDCC4"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tier Callout */}
      <div className="mt-10 bg-rose-50 border border-rose-200 rounded-lg p-4 text-center">
        <p className="text-sm text-rose-800">
          You&apos;re on the{" "}
          <span className="font-semibold">Solo Journalist</span> tier.{" "}
          <a href="#" className="underline font-medium hover:text-rose-900">
            Upgrade to Newsroom
          </a>{" "}
          for collaborative features.
        </p>
      </div>
    </div>
  );
}
