"use client";

import {
  Code2,
  Server,
  Wrench,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const FRONTEND_SKILLS = [
  "React",
  "Next.js",
  "Vue",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

const BACKEND_SKILLS = [
  "Python",
  "Go",
  "Node.js",
  "SQL",
  "MongoDB",
  "REST API",
];

const OTHER_SKILLS = [
  "ThingsBoard",
  "Ignition",
  "Frappe",
  "Vercel",
  "Linux",
  "Git",
];

const skillGroups = [
  {
    title: "Frontend Core",
    description: "Building modern interfaces",
    icon: Code2,
    skills: FRONTEND_SKILLS,
  },
  {
    title: "Backend & Infra",
    description: "APIs, services & databases",
    icon: Server,
    skills: BACKEND_SKILLS,
  },
  {
    title: "Platform & Tools",
    description: "Deployment & development",
    icon: Wrench,
    skills: OTHER_SKILLS,
  },
];

export default function About() {
  return (
    <div className="bg-[#0d1117] text-slate-200 px-4 md:px-12 py-10 font-sans">
      <section
        id="tech-stack-content"
        className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#161b22] shadow-2xl shadow-black/20"
      >
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

        {/* Editor Header */}
        <div
          id="header-editor"
          className="relative flex items-center justify-between border-b border-slate-800 bg-[#0d1117] px-4 py-3"
        >
          <div className="flex items-center gap-3">
            {/* Mac-style dots */}
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/20" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/20" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/20" />
            </div>

            <div className="h-4 w-px bg-slate-800" />

            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />

              <span className="font-mono text-xs tracking-wide text-slate-400">
                tech_stack.config
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              all systems operational
            </span>
          </div>
        </div>

        {/* Editor Body */}
        <div className="relative">
          {/* Code line decoration */}
          <div className="absolute bottom-0 left-0 top-0 hidden w-12 border-r border-slate-800/70 bg-[#0d1117]/40 md:block">
            <div className="flex flex-col items-center gap-6 pt-8 font-mono text-[10px] text-slate-700">
              <span>01</span>
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
            </div>
          </div>

          <div className="p-5 md:ml-12 md:p-8">
            {/* Intro */}
            <div className="mb-8 flex flex-col gap-2 border-b border-slate-800/70 pb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                <span className="text-emerald-400">const</span>
                <span>developer</span>
                <span className="text-slate-600">=</span>
                <span className="text-amber-300">{"{"}</span>
              </div>

              <div className="pl-5">
                <h2 className="text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                  Technologies I work with
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500">
                  A curated stack for building scalable applications,
                  connected systems, and modern digital experiences.
                </p>
              </div>

              <div className="font-mono text-xs text-amber-300">{"}"}</div>
            </div>

            {/* Skill Groups */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div
                    key={group.title}
                    className="group/card relative overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117]/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-[#0d1117] hover:shadow-lg hover:shadow-emerald-500/5"
                  >
                    {/* Card accent */}
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/10 to-transparent opacity-0 transition-opacity group-hover/card:opacity-100" />

                    {/* Header */}
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-[#161b22] text-emerald-400 transition-colors group-hover/card:border-emerald-500/20 group-hover/card:bg-emerald-500/5">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                            {group.title}
                          </h3>

                          <p className="mt-1 text-[11px] text-slate-600">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      <CheckCircle2 className="h-4 w-4 text-slate-700 transition-colors group-hover/card:text-emerald-500/60" />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((tech) => (
                        <span
                          key={tech}
                          className="cursor-default rounded-md border border-slate-800 bg-[#161b22] px-2.5 py-1.5 font-mono text-[11px] text-slate-400 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-300"
                        >
                          <span className="mr-1.5 text-slate-700">#</span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-mono text-[10px] text-slate-600">
                <span className="text-emerald-500/60">~/portfolio</span>
                <span className="mx-2">→</span>
                <span>tech_stack.config</span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                18 technologies loaded
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
