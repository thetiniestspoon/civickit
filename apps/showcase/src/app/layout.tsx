import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CivicKit - Civic Infrastructure for Everyone",
  description:
    "Five open-source apps. One shared platform. Civic infrastructure for everyone.",
};

const apps = [
  { name: "CivicLens", port: 3001, color: "text-purple-400" },
  { name: "BallotKit", port: 3002, color: "text-blue-400" },
  { name: "RightsReady", port: 3003, color: "text-emerald-400" },
  { name: "PressAgent", port: 3004, color: "text-rose-400" },
  { name: "MutualAid OS", port: 3005, color: "text-amber-400" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Dark Navbar */}
        <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 flex items-center justify-center text-slate-900 font-bold text-sm">
                  CK
                </div>
                <span className="text-lg font-semibold tracking-tight group-hover:text-slate-300 transition-colors">
                  CivicKit
                </span>
              </Link>

              {/* Main Nav */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/platform"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Platform
                </Link>
                <Link
                  href="/open-source"
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Open Source
                </Link>

                {/* Separator */}
                <div className="w-px h-6 bg-slate-700" />

                {/* App Links */}
                {apps.map((app) => (
                  <a
                    key={app.name}
                    href={`http://localhost:${app.port}`}
                    className={`text-xs ${app.color} hover:opacity-80 transition-opacity`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {app.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <details className="relative">
                  <summary className="list-none cursor-pointer p-2 text-slate-400 hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </summary>
                  <div className="absolute right-0 top-full mt-2 w-56 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      href="/platform"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Platform
                    </Link>
                    <Link
                      href="/open-source"
                      className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      Open Source
                    </Link>
                    <div className="border-t border-slate-700 my-2" />
                    {apps.map((app) => (
                      <a
                        key={app.name}
                        href={`http://localhost:${app.port}`}
                        className={`block px-4 py-2 text-sm ${app.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {app.name}
                      </a>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm font-medium text-slate-300">
                  CivicKit — Agentic Design Lab / Local Foundry
                </p>
                <p className="text-xs mt-1">
                  Design specifications drafted March 2026
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span>MIT + AGPL Licensed</span>
                <span className="text-slate-600">|</span>
                <span>Docker-Ready</span>
                <span className="text-slate-600">|</span>
                <span>Grant Eligible</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
