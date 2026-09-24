'use client';

import React from 'react';
import {
  BriefcaseBusiness,
  CheckCircle2,
  CircleDot,
  Terminal,
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Ithena Technologies',
    period: 'May 2026 — Present',
    isCurrent: true,
    highlights: [
    'Engineered real-time IIoT data pipelines to efficiently process live telemetry and deliver actionable operational insights.',
    'Architected and developed robust, secure backend APIs incorporating strict access control mechanisms to support scalable platform features.',
    'Collaborated within a 10+ member engineering team to design, build, and concurrently deploy multiple enterprise applications.',
    'Acted as the Technical Single Point of Contact (SPOC) across multiple projects, successfully translating complex client requirements into delivered technical solutions.'
  ],
    skills: ['Python', 'Javascript', 'Linux', 'Vue'],
  },
  {
    id: '2',
    role: 'Associate Software Developer',
    company: 'Ithena Technologies',
    period: 'May 2025 — April 2026',
    highlights: [
      'Designed and deployed dynamic IoT dashboards in ThingsBoard to visualize real-time industrial telemetry and asset status.',
      'Architected and implemented a comprehensive Performance Monitoring System using Ignition to track critical operational metrics.',
      'Engineered highly responsive user interfaces, prioritizing intuitive navigation and exceptional user experiences for complex industrial applications.'
    ],
    skills: ['Javascript', 'Python', 'UI/UX'],
  },
  {
    id: '3',
    role: 'React Intern',
    company: 'Celebal Technologies',
    period: '2018 — 2019',
    highlights: [
    'Developed responsive, feature-rich web interfaces using React, ensuring seamless cross-device user experiences.',
    'Designed and integrated multiple new frontend features, translating UI requirements into maintainable component-based code.',
    'Built and optimized reusable UI components to enhance overall application performance and visual consistency.'
  ],
    skills: ['React', 'TailwindCSS'],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0d1117] px-4 py-10 font-sans text-slate-100 md:px-12 md:py-16">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <header className="mb-10 md:mb-14">
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/70">
            <Terminal className="h-3.5 w-3.5" />
            career.log
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Experience Tracking
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                Chronological execution logs. Deployments, architectures,
                and systems engineered over the timeline.
              </p>
            </div>

            {/* Status */}
            <div className="flex w-fit items-center gap-2 rounded-md border border-emerald-500/10 bg-emerald-500/5 px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                system active
              </span>
            </div>
          </div>
        </header>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Rail */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-emerald-500/30 via-slate-800 to-transparent md:left-[23px]" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <article
                key={exp.id}
                className="group relative pl-12 md:pl-16"
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-[#0d1117] transition-all duration-300 ${
                    exp.isCurrent
                      ? 'border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                      : 'border-slate-800 group-hover:border-slate-700'
                  }`}
                >
                  {exp.isCurrent ? (
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-30" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                  ) : (
                    <CircleDot className="h-4 w-4 text-slate-700 transition-colors group-hover:text-slate-500" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`relative overflow-hidden rounded-xl border bg-[#161b22] transition-all duration-300 ${
                    exp.isCurrent
                      ? 'border-emerald-500/20 shadow-lg shadow-emerald-950/10'
                      : 'border-slate-800/80'
                  } group-hover:-translate-y-0.5 group-hover:border-slate-700 group-hover:shadow-xl group-hover:shadow-black/20`}
                >
                  {/* Current accent */}
                  {exp.isCurrent && (
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-transparent" />
                  )}

                  {/* Card Header */}
                  <div className="border-b border-slate-800/70 bg-[#0d1117]/50 px-5 py-4 md:px-7">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <BriefcaseBusiness className="h-4 w-4 text-emerald-500/70" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                            deployment #{String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {exp.role}
                        </h2>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            {exp.company}
                          </span>

                          {exp.isCurrent && (
                            <>
                              <span className="text-slate-700">•</span>

                              <span className="rounded border border-emerald-500/20 bg-emerald-500/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                                Current
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex w-fit items-center rounded-md border border-slate-800 bg-[#161b22] px-2.5 py-1.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-5 py-5 md:px-7 md:py-6">

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                          execution_log
                        </span>

                        <div className="h-px flex-1 bg-slate-800/70" />
                      </div>

                      <ul className="space-y-4">
                        {exp.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="group/item flex items-start gap-3"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-800 bg-[#0d1117] font-mono text-[9px] text-slate-600 transition-colors group-hover/item:border-emerald-500/20 group-hover/item:text-emerald-500">
                              {String(idx + 1).padStart(2, '0')}
                            </span>

                            <p className="text-sm leading-6 text-slate-400 transition-colors group-hover/item:text-slate-300">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
                          stack
                        </span>

                        <div className="h-px flex-1 bg-slate-800/70" />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-slate-800 bg-[#0d1117] px-2.5 py-1.5 font-mono text-[11px] text-slate-400 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-300"
                          >
                            <span className="mr-1.5 text-emerald-500/40">
                              #
                            </span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between border-t border-slate-800/60 bg-[#0d1117]/30 px-5 py-3 md:px-7">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-700">
                      status: completed
                    </span>

                    <CheckCircle2
                      className={`h-3.5 w-3.5 ${
                        exp.isCurrent
                          ? 'text-emerald-500/70'
                          : 'text-slate-700'
                      }`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Timeline Footer */}
        <div className="mt-10 flex items-center gap-3 pl-12 md:pl-16">
          <div className="h-px flex-1 bg-slate-800/70" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
            end of log
          </span>

          <div className="h-px w-10 bg-slate-800/70" />
        </div>
      </div>
    </main>
  );
}