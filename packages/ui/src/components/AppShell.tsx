import React from 'react';

interface AppShellProps {
  appName: string;
  appColor: string;
  appIcon: string;
  tagline: string;
  navItems: { label: string; href: string; active?: boolean }[];
  children: React.ReactNode;
}

export function AppShell({ appName, appColor, appIcon, tagline, navItems, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{appIcon}</span>
              <div>
                <span className="font-bold text-slate-900" style={{ color: appColor }}>{appName}</span>
                <span className="hidden sm:inline text-sm text-slate-400 ml-2">{tagline}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-3 pl-3 border-l border-slate-200">
                <a href="/" className="text-xs text-slate-400 hover:text-slate-600">CivicKit</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>{appIcon}</span>
              <span className="text-sm font-medium text-slate-600">{appName}</span>
              <span className="text-xs text-slate-400">Part of the CivicKit ecosystem</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <a href="#" className="hover:text-slate-600">Methodology</a>
              <a href="#" className="hover:text-slate-600">Source Code</a>
              <span>AGPL-3.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
