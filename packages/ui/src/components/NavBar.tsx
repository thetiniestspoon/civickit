import React from 'react';

interface NavBarProps {
  items: { label: string; href: string; icon: string; color: string }[];
  current?: string;
}

export function NavBar({ items, current }: NavBarProps) {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 py-2 overflow-x-auto">
          <a href="/" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50">
            CivicKit
          </a>
          <span className="text-slate-300 mx-1">|</span>
          {items.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                current === item.href
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
