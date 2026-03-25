import React from 'react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
}

export function StepProgress({ currentStep, totalSteps, stepTitle }: StepProgressProps) {
  const pct = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{stepTitle}</span>
        <span className="text-sm text-slate-500">Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      {currentStep < totalSteps && (
        <p className="mt-2 text-xs text-emerald-600 font-medium">
          You&apos;re making great progress &mdash; {totalSteps - currentStep} steps to go
        </p>
      )}
    </div>
  );
}
