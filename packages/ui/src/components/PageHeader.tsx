import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, subtitle, badge, badgeColor = 'bg-blue-100 text-blue-700', children }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {badge && (
          <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${badgeColor}`}>
            {badge}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-slate-600 max-w-2xl">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}
