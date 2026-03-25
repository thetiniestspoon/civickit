"use client";

import { AppShell, SafeToUseBanner } from "@civickit/ui";

const navItems = [
  { label: "Find Help", href: "/" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "About", href: "/about", active: true },
];

export default function AboutPage() {
  return (
    <AppShell
      appName="MutualAid OS"
      appColor="#f59e0b"
      appIcon="🤲"
      tagline="Community support coordination"
      navItems={navItems}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Mission */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mutual aid means we take care of each other
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            MutualAid OS is a community coordination platform that connects
            people who need help with the communities and organizations who can
            provide it. We believe everyone deserves to find food, shelter,
            legal aid, medical care, and support — quickly, anonymously, and
            with dignity.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            This is not charity. This is solidarity. Mutual aid recognizes that
            we all need help sometimes, and that communities are strongest when
            we look out for each other.
          </p>
        </section>

        {/* Privacy */}
        <section className="mb-12">
          <SafeToUseBanner />
        </section>

        {/* How the directory works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            How our directory works
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-lg">📞</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                211.org Baseline
              </h3>
              <p className="text-sm text-slate-600">
                We start with verified data from 211.org, the national helpline
                directory. These listings are professionally maintained and
                regularly updated by United Way affiliates.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-lg">👥</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Community Contributions
              </h3>
              <p className="text-sm text-slate-600">
                Community members add resources they know about — the food
                pantry at the local church, the free clinic that just opened,
                the lawyer who does pro bono work. Real knowledge from real
                people.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-lg">🏢</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Org-Claimed Listings
              </h3>
              <p className="text-sm text-slate-600">
                Organizations can claim and update their own listings, keeping
                hours, eligibility, and contact information current. These carry
                the highest verification level.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage transparency */}
        <section className="mb-12">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Honest about our coverage
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Our coverage varies by area. We currently have the most
              comprehensive data for the Newark and Essex County, NJ area. In
              other areas, our directory may be sparse. We never want to give
              the false impression that we have complete coverage — if you
              search and don&apos;t find what you need, that&apos;s a gap we want to
              fill, not a reflection of what&apos;s available in your community.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-600">13+</div>
                <div className="text-xs text-slate-500">Resources Listed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">10+</div>
                <div className="text-xs text-slate-500">Organizations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">3</div>
                <div className="text-xs text-slate-500">Communities Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute form */}
        <section id="contribute" className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Help build this directory
          </h2>
          <p className="text-slate-600 mb-6">
            Know of a resource that should be listed here? Share it with us and
            help your neighbors find help.
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Resource Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Downtown Food Pantry"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Type
                </label>
                <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white">
                  <option value="">Select type...</option>
                  <option value="food">Food</option>
                  <option value="shelter">Shelter</option>
                  <option value="legal_aid">Legal Aid</option>
                  <option value="medical">Medical</option>
                  <option value="clothing">Clothing</option>
                  <option value="transportation">Transportation</option>
                  <option value="childcare">Childcare</option>
                  <option value="mental_health">Mental Health</option>
                  <option value="employment">Employment</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Street address, city, state, zip"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Hours
                </label>
                <input
                  type="text"
                  placeholder="e.g., Mon-Fri 9am-5pm"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about this resource — what services they provide, who they help, anything useful for someone looking for help."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                What should someone bring? What should they expect?
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Bring ID if you have one. Expect a 15-minute intake process. Staff is very friendly."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="pt-2">
              <button className="px-6 py-2.5 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors">
                Submit Resource
              </button>
              <p className="text-xs text-slate-400 mt-2">
                Submissions are reviewed by community moderators before being
                published. We never collect your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* CivicKit ecosystem */}
        <section>
          <div className="bg-slate-900 text-white rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-2">
              Part of the CivicKit ecosystem
            </h2>
            <p className="text-sm text-slate-300 mb-4">
              MutualAid OS is one of several civic tools built on the CivicKit
              platform. Each app addresses a different aspect of civic life —
              from understanding your ballot to tracking legislation to knowing
              your rights.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                CivicLens — Legislation tracker
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                BallotKit — Election guide
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
                RightsReady — Know your rights
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-600 text-xs text-white">
                MutualAid OS — Community support
              </span>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
