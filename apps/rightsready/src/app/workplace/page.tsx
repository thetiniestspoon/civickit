"use client";

import { useState } from "react";
import { SafeToUseBanner, SourceCitation } from "@civickit/ui";
import { workplaceGuides } from "@/data/workplace-guides";
import Link from "next/link";

export default function WorkplacePage() {
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <SafeToUseBanner compact />

      {/* Header */}
      <div className="space-y-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Rights Library
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">
          Workplace Rights
        </h1>
        <p className="text-slate-600">
          Federal laws that protect you at work. Click any guide to learn more.
        </p>
      </div>

      {/* Legal disclaimer */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        This is legal information, not legal advice. For advice about your specific situation, talk to a lawyer.
        Free legal help:{" "}
        <a
          href="https://www.lsc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-amber-900"
        >
          Legal Services Corporation (lsc.gov)
        </a>
      </div>

      {/* Guide cards */}
      <div className="space-y-4">
        {workplaceGuides.map((guide) => {
          const isExpanded = expandedGuide === guide.id;
          return (
            <div
              key={guide.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() =>
                  setExpandedGuide(isExpanded ? null : guide.id)
                }
                className="w-full text-left p-6 flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {guide.jurisdiction}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {guide.summary}
                  </p>
                  <SourceCitation
                    sourceName={guide.source.name}
                    sourceUrl={guide.source.url}
                    retrievedDate={guide.source.retrievedDate}
                  />
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-6 border-t border-slate-100 pt-6">
                  {guide.sections.map((section, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="font-semibold text-slate-800">
                        {section.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {section.content}
                      </p>
                      <SourceCitation
                        sourceName={section.source.name}
                        sourceUrl={section.source.url}
                        retrievedDate={section.source.retrievedDate}
                      />
                    </div>
                  ))}

                  {/* Warm handoff */}
                  <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4 space-y-1">
                    <p className="text-sm font-medium text-emerald-800">
                      Need help with this?
                    </p>
                    <p className="text-sm text-emerald-700">
                      If you need legal help, free attorneys may be available.
                      Visit{" "}
                      <a
                        href="https://www.lsc.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium hover:text-emerald-900"
                      >
                        lsc.gov
                      </a>{" "}
                      or call{" "}
                      <span className="font-medium">211</span> to find local
                      resources.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between pt-4">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Rights Library
        </Link>
        <Link
          href="/process"
          className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors inline-flex items-center gap-1"
        >
          Process Navigator
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
