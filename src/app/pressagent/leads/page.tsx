"use client";

import { useState } from "react";
import { demoLeads } from "@/data/pressagent/demo-leads";
import type { StoryLead } from "@/data/pressagent/demo-leads";

const beats = [
  { key: "all", label: "All" },
  { key: "government", label: "Government" },
  { key: "courts", label: "Courts" },
  { key: "finance", label: "Finance" },
  { key: "contracts", label: "Contracts" },
  { key: "meetings", label: "Meetings" },
] as const;

type BeatFilter = (typeof beats)[number]["key"];

const typeBadgeColors: Record<StoryLead["type"], string> = {
  legislation: "bg-indigo-50 text-indigo-700 border-indigo-200",
  court_filing: "bg-violet-50 text-violet-700 border-violet-200",
  campaign_finance: "bg-amber-50 text-amber-700 border-amber-200",
  contract: "bg-emerald-50 text-emerald-700 border-emerald-200",
  meeting: "bg-sky-50 text-sky-700 border-sky-200",
  policy_change: "bg-rose-50 text-rose-700 border-rose-200",
};

export default function LeadsPage() {
  const [activeBeat, setActiveBeat] = useState<BeatFilter>("all");

  const filteredLeads =
    activeBeat === "all"
      ? demoLeads
      : demoLeads.filter((lead) => lead.beat === activeBeat);

  const sortedLeads = [...filteredLeads].sort(
    (a, b) => b.relevanceScore - a.relevanceScore
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Story Leads</h1>
        <p className="mt-1 text-sm text-slate-600">
          Newsworthy items detected from public records, filings, and government
          documents. Sorted by relevance.
        </p>
      </div>

      {/* Beat Filter Tabs */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-2">
        {beats.map((beat) => (
          <button
            key={beat.key}
            onClick={() => setActiveBeat(beat.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeBeat === beat.key
                ? "bg-rose-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {beat.label}
            {beat.key !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({demoLeads.filter((l) => l.beat === beat.key).length})
              </span>
            )}
          </button>
        ))}
        {activeBeat !== "all" && (
          <button className="ml-auto px-3 py-1.5 text-xs font-medium text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors whitespace-nowrap">
            Subscribe to {activeBeat} beat
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="mb-4 text-sm text-slate-500">
        {sortedLeads.length} lead{sortedLeads.length !== 1 ? "s" : ""} found
      </div>

      {/* Leads List */}
      <div className="space-y-4">
        {sortedLeads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white rounded-lg border border-slate-200 p-5 hover:border-rose-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Tags Row */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-700 uppercase tracking-wide">
                    {lead.beat}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                      typeBadgeColors[lead.type]
                    }`}
                  >
                    {lead.type.replace("_", " ")}
                  </span>
                  <span className="text-xs text-slate-400">
                    {lead.detectedDate}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-semibold text-slate-900 leading-snug">
                  {lead.headline}
                </h3>

                {/* Summary */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {lead.summary}
                </p>

                {/* Source Citation */}
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Source:</span>
                  <a
                    href={lead.sourceLink}
                    className="text-rose-600 hover:text-rose-700 font-medium"
                  >
                    {lead.sourceName}
                  </a>
                </div>
              </div>

              {/* Relevance Score */}
              <div className="flex-shrink-0 text-center">
                <div
                  className={`text-lg font-bold ${
                    lead.relevanceScore >= 90
                      ? "text-rose-600"
                      : lead.relevanceScore >= 75
                      ? "text-amber-600"
                      : "text-slate-400"
                  }`}
                >
                  {lead.relevanceScore}
                </div>
                <div className="text-xs text-slate-400">relevance</div>
                <div className="mt-2 w-10 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      lead.relevanceScore >= 90
                        ? "bg-rose-500"
                        : lead.relevanceScore >= 75
                        ? "bg-amber-500"
                        : "bg-slate-300"
                    }`}
                    style={{ width: `${lead.relevanceScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
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
