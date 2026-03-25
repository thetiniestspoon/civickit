"use client";

import { useState } from "react";
import { SafeToUseBanner, StepProgress } from "@civickit/ui";
import { demoWorkflows } from "@/data/demo-workflows";
import Link from "next/link";

const workflowIcons: Record<string, React.ReactNode> = {
  "file-wage-complaint": (
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "request-landlord-repair": (
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.073A1.5 1.5 0 014.5 17.08V6.92a1.5 1.5 0 011.536-1.163l5.384 3.073m0 6.34l5.384 3.073A1.5 1.5 0 0018.84 17.08V6.92a1.5 1.5 0 00-1.536-1.163L11.42 8.83" />
    </svg>
  ),
  "apply-unemployment": (
    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
};

export default function ProcessPage() {
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const workflow = demoWorkflows.find((w) => w.id === activeWorkflow);
  const step = workflow?.steps.find((s) => s.number === currentStep);

  function openWorkflow(id: string) {
    setActiveWorkflow(id);
    setCurrentStep(1);
  }

  function closeWorkflow() {
    setActiveWorkflow(null);
    setCurrentStep(1);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <SafeToUseBanner compact />

      {/* Header */}
      <div className="space-y-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Rights Library
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">
          Process Navigator
        </h1>
        <p className="text-slate-600">
          Step-by-step guides through common legal processes. Take it at your
          own pace.
        </p>
      </div>

      {/* Legal disclaimer */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        This is legal information, not legal advice. For advice about your
        specific situation, talk to a lawyer. Free legal help:{" "}
        <a
          href="https://www.lsc.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-amber-900"
        >
          Legal Services Corporation (lsc.gov)
        </a>
      </div>

      {!activeWorkflow && (
        <>
          {/* Workflow cards */}
          <div className="space-y-4">
            {demoWorkflows.map((wf) => (
              <button
                key={wf.id}
                onClick={() => openWorkflow(wf.id)}
                className="w-full text-left rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                    {workflowIcons[wf.id] ?? (
                      <span className="text-2xl">📋</span>
                    )}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {wf.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {wf.description}
                    </p>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-xs text-slate-400">
                        {wf.totalSteps} steps
                      </span>
                      <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                        Start guide
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {activeWorkflow && workflow && step && (
        <div className="space-y-6">
          {/* Back to workflows */}
          <button
            onClick={closeWorkflow}
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to all processes
          </button>

          {/* Workflow title */}
          <h2 className="text-2xl font-bold text-slate-900">
            {workflow.title}
          </h2>

          {/* Step Progress */}
          <StepProgress
            currentStep={currentStep}
            totalSteps={workflow.totalSteps}
            stepTitle={step.title}
          />

          {/* Step content */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
            <h3 className="text-xl font-semibold text-slate-900">
              {step.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {step.description}
            </p>

            {/* What to expect */}
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-4 space-y-1">
              <p className="text-sm font-medium text-slate-700">
                What to expect
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.whatToExpect}
              </p>
            </div>

            {/* Tips */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">
                Helpful tips
              </p>
              <ul className="space-y-2">
                {step.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents needed (shown on step 1) */}
            {currentStep === 1 && workflow.documents.length > 0 && (
              <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4 space-y-2">
                <p className="text-sm font-medium text-emerald-800">
                  Documents you may need
                </p>
                <ul className="space-y-1">
                  {workflow.documents.map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-emerald-700"
                    >
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-emerald-600 mt-1">
                  Do not worry if you do not have all of these. You can still
                  proceed.
                </p>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() =>
                currentStep > 1
                  ? setCurrentStep(currentStep - 1)
                  : closeWorkflow()
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              {currentStep > 1 ? "Previous step" : "Back to processes"}
            </button>

            {currentStep < workflow.totalSteps ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
              >
                Next step
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <div className="text-right space-y-1">
                <p className="text-sm font-medium text-emerald-700">
                  You have completed all steps.
                </p>
                <p className="text-xs text-slate-500">
                  You can go back to review any step at any time.
                </p>
              </div>
            )}
          </div>

          {/* Warm handoff at bottom of wizard */}
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 space-y-2">
            <p className="text-sm font-medium text-emerald-800">
              You are not alone in this.
            </p>
            <p className="text-sm text-emerald-700">
              If you feel stuck or overwhelmed, that is completely normal. Free
              legal help is available.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
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
              <span className="text-sm text-emerald-600">
                or call <span className="font-medium">211</span> for local
                resources
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
