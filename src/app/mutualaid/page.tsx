"use client";

import { useState, useMemo } from "react";
import { SafeToUseBanner, SearchBar, ResourceCard } from "@civickit/ui";
import type { ResourceType } from "@civickit/types";
import { demoResources } from "@/data/mutualaid/demo-resources";

const resourceTypes: { label: string; value: ResourceType | "all"; icon: string }[] = [
  { label: "All", value: "all", icon: "📋" },
  { label: "Food", value: "food", icon: "🍎" },
  { label: "Shelter", value: "shelter", icon: "🏠" },
  { label: "Legal Aid", value: "legal_aid", icon: "⚖️" },
  { label: "Medical", value: "medical", icon: "🏥" },
  { label: "Clothing", value: "clothing", icon: "👕" },
  { label: "Transportation", value: "transportation", icon: "🚌" },
  { label: "Childcare", value: "childcare", icon: "👶" },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ResourceType | "all">("all");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredResources = useMemo(() => {
    let results = demoResources;

    if (activeFilter !== "all") {
      results = results.filter((r) => r.type === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.location.city.toLowerCase().includes(q) ||
          r.location.address.toLowerCase().includes(q)
      );
    }

    return results;
  }, [activeFilter, searchQuery]);

  const handleSearch = () => {
    setHasSearched(true);
  };

  return (
    <>
      {/* Privacy banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4">
        <SafeToUseBanner compact />
      </div>

      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Find help near you
        </h1>
        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          Search community resources for food, shelter, legal aid, medical care, and
          more. Anonymous, free, and regularly verified.
        </p>

        <div className="max-w-xl mx-auto mb-4">
          <SearchBar
            placeholder="Enter your city, zip code, or neighborhood..."
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
            icon="location"
          />
        </div>
        <p className="text-xs text-slate-400">
          Your search is anonymous. We never store your location or search history.
        </p>
      </section>

      {/* Resource type filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {resourceTypes.map((rt) => (
            <button
              key={rt.value}
              onClick={() => {
                setActiveFilter(rt.value);
                setHasSearched(true);
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === rt.value
                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200"
              }`}
            >
              <span>{rt.icon}</span>
              {rt.label}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      {hasSearched && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {filteredResources.length} resource{filteredResources.length !== 1 ? "s" : ""} found
              {activeFilter !== "all" && (
                <span> for <span className="font-medium text-slate-700">{activeFilter.replace(/_/g, " ")}</span></span>
              )}
            </p>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <a key={resource.id} href={`/mutualaid/resources/${resource.id}`} className="block hover:no-underline">
                  <ResourceCard
                    name={resource.name}
                    type={resource.type}
                    description={resource.description}
                    address={`${resource.location.address}, ${resource.location.city}, ${resource.location.state} ${resource.location.zip}`}
                    hours={resource.hours}
                    phone={resource.phone}
                    languages={resource.languagesSpoken}
                    accessibility={resource.accessibility}
                    lastVerified={resource.lastVerified}
                    verifiedBy={resource.verifiedBy}
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-lg font-medium text-slate-700 mb-2">
                No resources found for this search
              </p>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Our directory is growing. Coverage varies by area, and we may not
                have listings for every community yet. You can help by contributing
                resources you know about.
              </p>
              <a
                href="/mutualaid/about#contribute"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-amber-600 hover:text-amber-700"
              >
                Help us build this directory
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}

          {filteredResources.length > 0 && (
            <div className="mt-8 text-center py-8 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-amber-800 font-medium mb-1">
                Know of more resources? Help us build this directory.
              </p>
              <p className="text-sm text-amber-600 mb-3">
                Community contributions keep our listings accurate and comprehensive.
              </p>
              <a
                href="/mutualaid/about#contribute"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors"
              >
                Contribute a Resource
              </a>
            </div>
          )}
        </section>
      )}

      {/* Initial state when not searched yet */}
      {!hasSearched && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div className="text-center py-12">
            <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto mt-8">
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-semibold text-slate-900 mb-1">Search</h3>
                <p className="text-sm text-slate-500">
                  Find verified community resources near you. No account needed.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-slate-900 mb-1">Warm Handoffs</h3>
                <p className="text-sm text-slate-500">
                  Not just listings. We tell you what to bring, what to expect, and how to prepare.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-slate-900 mb-1">Verified</h3>
                <p className="text-sm text-slate-500">
                  Every resource is verified by 211.org, community members, or organizations themselves.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
