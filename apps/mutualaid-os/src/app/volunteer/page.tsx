"use client";

import { useState, useMemo } from "react";
import { AppShell } from "@civickit/ui";
import { demoShifts } from "@/data/demo-shifts";

const navItems = [
  { label: "Find Help", href: "/" },
  { label: "Volunteer", href: "/volunteer", active: true },
  { label: "About", href: "/about" },
];

type FilterType = "all" | "this_week" | "next_week" | string;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

export default function VolunteerPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [claimedShifts, setClaimedShifts] = useState<Set<string>>(new Set());

  const orgs = useMemo(() => {
    const orgSet = new Set(demoShifts.map((s) => s.orgName));
    return Array.from(orgSet).sort();
  }, []);

  const filteredShifts = useMemo(() => {
    const now = new Date("2026-03-24T00:00:00");
    const thisWeekStart = getWeekStart(now);
    const thisWeekEnd = new Date(thisWeekStart);
    thisWeekEnd.setDate(thisWeekEnd.getDate() + 7);
    const nextWeekEnd = new Date(thisWeekEnd);
    nextWeekEnd.setDate(nextWeekEnd.getDate() + 7);

    return demoShifts.filter((shift) => {
      const shiftDate = new Date(shift.startTime);

      if (filter === "this_week") {
        return shiftDate >= thisWeekStart && shiftDate < thisWeekEnd;
      }
      if (filter === "next_week") {
        return shiftDate >= thisWeekEnd && shiftDate < nextWeekEnd;
      }
      if (filter !== "all") {
        return shift.orgName === filter;
      }
      return true;
    });
  }, [filter]);

  const handleClaim = (shiftId: string) => {
    setClaimedShifts((prev) => {
      const next = new Set(prev);
      if (next.has(shiftId)) {
        next.delete(shiftId);
      } else {
        next.add(shiftId);
      }
      return next;
    });
  };

  // Group shifts by date for calendar-style display
  const shiftsByDate = useMemo(() => {
    const grouped: Record<string, typeof filteredShifts> = {};
    for (const shift of filteredShifts) {
      const dateKey = formatDate(shift.startTime);
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(shift);
    }
    return grouped;
  }, [filteredShifts]);

  return (
    <AppShell
      appName="MutualAid OS"
      appColor="#f59e0b"
      appIcon="🤲"
      tagline="Community support coordination"
      navItems={navItems}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Volunteer Shifts
        </h1>
        <p className="text-slate-500 mb-8">
          Find volunteer opportunities with community organizations in the
          Newark area. Claim a shift to reserve your spot.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50"
            }`}
          >
            All Shifts
          </button>
          <button
            onClick={() => setFilter("this_week")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "this_week"
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50"
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setFilter("next_week")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "next_week"
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50"
            }`}
          >
            Next Week
          </button>
          <div className="w-px bg-slate-200 mx-1 self-stretch" />
          {orgs.map((org) => (
            <button
              key={org}
              onClick={() => setFilter(org)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === org
                  ? "bg-amber-100 text-amber-800 border border-amber-300"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-amber-50"
              }`}
            >
              {org}
            </button>
          ))}
        </div>

        {/* Calendar-style view */}
        {Object.keys(shiftsByDate).length > 0 ? (
          <div className="space-y-8">
            {Object.entries(shiftsByDate).map(([date, shifts]) => (
              <div key={date}>
                <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {date}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {shifts.map((shift) => {
                    const slotsLeft = shift.slotsTotal - shift.slotsFilled;
                    const isClaimed = claimedShifts.has(shift.id);

                    return (
                      <div
                        key={shift.id}
                        className={`bg-white rounded-xl border p-5 transition-shadow hover:shadow-md ${
                          isClaimed
                            ? "border-amber-300 bg-amber-50"
                            : "border-slate-200"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs font-medium text-amber-600 mb-0.5">
                              {shift.orgName}
                            </p>
                            <h3 className="font-semibold text-slate-900">
                              {shift.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 mb-3">
                          {shift.description}
                        </p>

                        <div className="space-y-1.5 text-sm mb-4">
                          <div className="flex items-center gap-2 text-slate-500">
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {formatTime(shift.startTime)} &ndash;{" "}
                            {formatTime(shift.endTime)}
                          </div>
                          <div className="flex items-center gap-2 text-slate-500">
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
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
                            {shift.location.address}, {shift.location.city}
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 flex-shrink-0 text-slate-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span
                              className={`${
                                slotsLeft <= 2
                                  ? "text-rose-600 font-medium"
                                  : "text-slate-500"
                              }`}
                            >
                              {shift.slotsFilled}/{shift.slotsTotal} filled
                              {slotsLeft <= 2 && slotsLeft > 0 && (
                                <span> &mdash; {slotsLeft} left!</span>
                              )}
                              {slotsLeft === 0 && (
                                <span> &mdash; Full</span>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {shift.skillsPreferred.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-slate-100 text-xs text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => handleClaim(shift.id)}
                          disabled={slotsLeft === 0 && !isClaimed}
                          className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                            isClaimed
                              ? "bg-amber-500 text-white hover:bg-amber-600"
                              : slotsLeft === 0
                              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                          }`}
                        >
                          {isClaimed
                            ? "Shift Claimed — Click to Unclaim"
                            : slotsLeft === 0
                            ? "Shift Full"
                            : "Claim Shift"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <p className="text-lg font-medium text-slate-700 mb-2">
              No shifts found for this filter
            </p>
            <p className="text-sm text-slate-500">
              Try a different time period or organization.
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
