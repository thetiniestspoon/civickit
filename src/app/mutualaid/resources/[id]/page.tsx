import { FlagButton } from "@civickit/ui";
import { demoResources } from "@/data/mutualaid/demo-resources";

export function generateStaticParams() {
  return demoResources.map((r) => ({ id: r.id }));
}

const typeIcons: Record<string, string> = {
  food: "🍎",
  shelter: "🏠",
  legal_aid: "⚖️",
  clothing: "👕",
  transportation: "🚌",
  childcare: "👶",
  medical: "🏥",
  mental_health: "🧠",
  employment: "💼",
  other: "📋",
};

const sourceLabels: Record<string, string> = {
  "211_org": "211.org database",
  community: "Community member",
  org_claimed: "Organization self-reported",
};

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = demoResources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Resource not found</h1>
        <p className="text-slate-500 mb-6">
          This resource may have been removed or the link may be incorrect.
        </p>
        <a
          href="/mutualaid"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors"
        >
          Back to search
        </a>
      </div>
    );
  }

  const fullAddress = `${resource.location.address}, ${resource.location.city}, ${resource.location.state} ${resource.location.zip}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <a href="/mutualaid" className="text-amber-600 hover:text-amber-700">
          Find Help
        </a>
        <span className="mx-2 text-slate-300">/</span>
        <span className="text-slate-500">{resource.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <span className="text-4xl">{typeIcons[resource.type] || "📋"}</span>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {resource.name}
          </h1>
          <p className="text-slate-500 capitalize mt-1">
            {resource.type.replace(/_/g, " ")}
          </p>
        </div>
      </div>

      <p className="text-slate-700 text-lg leading-relaxed mb-8">
        {resource.description}
      </p>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        {/* Main info column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Warm Handoff section */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-amber-900 mb-4">
              Before you go — what to know
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-1">
                  What to bring
                </h3>
                <p className="text-sm text-amber-900">{resource.whatToBring}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-1">
                  What to expect
                </h3>
                <p className="text-sm text-amber-900">{resource.whatToExpect}</p>
              </div>

              {resource.warmHandoffNotes && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wide mb-1">
                    Good to know
                  </h3>
                  <p className="text-sm text-amber-900">
                    {resource.warmHandoffNotes}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Eligibility
            </h2>
            <p className="text-sm text-slate-600">{resource.eligibility}</p>
          </div>

          {/* Hours */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Hours
            </h2>
            <p className="text-sm text-slate-600">{resource.hours}</p>
          </div>

          {/* RightsReady link for legal_aid resources */}
          {resource.type === "legal_aid" && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚖️</span>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Need to understand your legal rights?
                  </h3>
                  <p className="text-sm text-blue-700 mb-3">
                    RightsReady provides plain-language guides to your legal rights
                    in housing, workplace, immigration, and more.
                  </p>
                  <a
                    href="/apps/rightsready"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Visit RightsReady
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Map placeholder */}
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 text-center">
            <div className="w-full h-32 bg-slate-200 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-8 h-8 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-700">{fullAddress}</p>
          </div>

          {/* Contact */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-slate-900">Contact</h3>
            {resource.phone && (
              <div className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-slate-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${resource.phone}`}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  {resource.phone}
                </a>
              </div>
            )}
            {resource.website && (
              <div className="flex items-center gap-2 text-sm">
                <svg
                  className="w-4 h-4 text-slate-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 font-medium truncate"
                >
                  {resource.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>

          {/* Languages & accessibility */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-3">
              Languages & Accessibility
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {resource.languagesSpoken.map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-0.5 rounded bg-blue-50 text-xs text-blue-600"
                >
                  {lang}
                </span>
              ))}
              {resource.accessibility.map((a) => (
                <span
                  key={a}
                  className="px-2 py-0.5 rounded bg-violet-50 text-xs text-violet-600"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Verification */}
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Verification</h3>
            <p className="text-sm text-slate-600 mb-1">
              <span className="font-medium">Last verified:</span>{" "}
              {resource.lastVerified}
            </p>
            <p className="text-sm text-slate-600 mb-3">
              <span className="font-medium">Source:</span>{" "}
              {sourceLabels[resource.source] || resource.source}
            </p>
            <FlagButton label="Is this information still accurate?" />
          </div>
        </div>
      </div>

      {/* Back to search */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <a
          href="/mutualaid"
          className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to search results
        </a>
      </div>
    </div>
  );
}
