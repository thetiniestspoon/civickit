import { AppShell, MethodologyLink } from '@civickit/ui';
import React from 'react';

const navItems = [
  { label: 'Activity Feed', href: '/civiclens' },
  { label: 'Promise Tracker', href: '/civiclens/promises' },
  { label: 'Representatives', href: '/civiclens/representatives/rep-001' },
];

export function CivicLensShell({
  children,
  activeNav,
}: {
  children: React.ReactNode;
  activeNav?: string;
}) {
  const items = navItems.map((item) => ({
    ...item,
    active: item.href === activeNav,
  }));

  return (
    <AppShell
      appName="CivicLens"
      appColor="#8b5cf6"
      appIcon="&#127963;"
      tagline="Government transparency in plain language"
      navItems={items}
    >
      {children}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <MethodologyLink />
      </div>
    </AppShell>
  );
}
