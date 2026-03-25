import React from 'react';

interface StatusBadgeProps {
  status: 'kept' | 'broken' | 'in_progress' | 'no_action' | string;
  size?: 'sm' | 'md';
}

const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
  kept: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Kept' },
  broken: { bg: 'bg-red-100', text: 'text-red-700', label: 'Broken' },
  in_progress: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'In Progress' },
  no_action: { bg: 'bg-slate-100', text: 'text-slate-500', label: 'No Action' },
};

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const config = statusConfig[status] || { bg: 'bg-slate-100', text: 'text-slate-600', label: status };
  const sizeClass = size === 'md' ? 'px-3 py-1 text-sm' : 'px-2 py-0.5 text-xs';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${config.bg} ${config.text} ${sizeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.text.replace('text-', 'bg-')}`} />
      {config.label}
    </span>
  );
}
