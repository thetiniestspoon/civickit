import { SafeToUseBanner } from "@civickit/ui";
import Link from "next/link";

const activeDomains = [
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Workplace Rights",
    description: "Wages, safety, discrimination, termination, and breaks — know what your employer must do.",
    guidesCount: 5,
    href: "/rightsready/workplace",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Housing Rights",
    description: "Tenant protections, evictions, deposits, fair housing, and repairs — know your rights as a renter.",
    guidesCount: 5,
    href: "/rightsready/housing",
  },
];

const comingSoon = [
  { title: "Immigration", icon: "🌎" },
  { title: "Healthcare", icon: "🏥" },
  { title: "Police Encounters", icon: "🛡️" },
  { title: "Protest & Assembly", icon: "📢" },
];

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <SafeToUseBanner />

      {/* Hero */}
      <section className="text-center py-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Know your rights
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Free, private, no account needed. Legal information in plain language.
        </p>
        <p className="text-sm text-slate-400">
          This is legal information, not legal advice.
        </p>
      </section>

      {/* Active domain cards */}
      <section className="grid sm:grid-cols-2 gap-6">
        {activeDomains.map((domain) => (
          <Link
            key={domain.href}
            href={domain.href}
            className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                {domain.icon}
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {domain.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {domain.description}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {domain.guidesCount} guides
                  </span>
                  <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    Browse guides
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Coming soon */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-400 text-center">
          Coming soon
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {comingSoon.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center opacity-50"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="mt-2 text-sm font-medium text-slate-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal aid warm handoff */}
      <section className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6 text-center space-y-2">
        <p className="text-sm text-slate-700">
          If you need legal help, free attorneys may be available in your area.
        </p>
        <a
          href="https://www.lsc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
        >
          Legal Services Corporation (lsc.gov)
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </section>
    </div>
  );
}
