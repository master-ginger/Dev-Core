'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  GitCommit,
  Terminal,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: 'production' | 'live' | 'archived';
}

const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Distributed Cache System',
    description:
      'A high-performance distributed caching layer built to handle microservice data consistency with sub-millisecond retrieval times.',
    tags: ['Go', 'Redis', 'gRPC'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    status: 'production',
  },
  {
    id: '2',
    title: 'FinTech Analytics Dashboard',
    description:
      'Real-time data visualization platform processing thousands of transactions per second, featuring custom charting engines.',
    tags: ['React', 'TypeScript', 'GraphQL'],
    githubUrl: 'https://github.com',
    status: 'live',
  },
  {
    id: '3',
    title: 'Serverless Auth Gateway',
    description:
      'Scalable authentication API gateway utilizing edge functions for minimal latency token validation and RBAC management.',
    tags: ['Node.js', 'AWS Lambda', 'Terraform'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    status: 'production',
  },
];

const statusConfig = {
  production: {
    label: 'production',
    dot: 'bg-emerald-400',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
  live: {
    label: 'live',
    dot: 'bg-cyan-400',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
  },
  archived: {
    label: 'archived',
    dot: 'bg-slate-500',
    text: 'text-slate-500',
    border: 'border-slate-700',
    bg: 'bg-slate-500/5',
  },
};

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#0d1117] px-4 py-12 font-sans text-slate-100 sm:px-8 md:px-12 lg:px-16 lg:py-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ───────────────── Header ───────────────── */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Terminal breadcrumb */}
          <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
            <Terminal className="h-3.5 w-3.5 text-emerald-500/70" />
            <span>~/portfolio</span>
            <span className="text-slate-800">/</span>
            <span className="text-emerald-500/70">projects</span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-500/60">
                  $ ls -la
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Featured Projects
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                Selected systems, experiments, and applications I&apos;ve
                designed, engineered, and shipped.
              </p>
            </div>

            {/* Repository count */}
            <div className="flex w-fit items-center gap-3 rounded-lg border border-slate-800 bg-[#161b22] px-4 py-2.5">
              <GitBranch className="h-4 w-4 text-slate-600" />

              <div className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  repositories
                </span>

                <span className="font-mono text-xs text-slate-300">
                  {String(PROJECTS.length).padStart(2, '0')} indexed
                </span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* ───────────────── Repository Window ───────────────── */}
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#161b22] shadow-2xl shadow-black/20">

          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1117] px-4 py-3">
            <div className="flex items-center gap-3">

              {/* Window dots */}
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="h-4 w-px bg-slate-800" />

              <div className="flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5 text-emerald-500/70" />

                <span className="font-mono text-xs tracking-wide text-slate-500">
                  projects.index
                </span>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />

              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                workspace ready
              </span>
            </div>
          </div>

          {/* Project list */}
          <div className="divide-y divide-slate-800/70">
            {PROJECTS.map((project, index) => {
              const status = statusConfig[project.status || 'production'];

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/[0.035] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative grid grid-cols-1 lg:grid-cols-[90px_1fr_190px]">

                    {/* Project Number */}
                    <div className="hidden border-r border-slate-800/70 bg-[#0d1117]/30 p-6 lg:block">
                      <div className="sticky top-6">
                        <span className="font-mono text-2xl font-medium text-slate-700 transition-colors duration-300 group-hover:text-emerald-500/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="mt-4 h-px w-6 bg-slate-800 transition-all duration-300 group-hover:w-10 group-hover:bg-emerald-500/40" />

                        <GitCommit className="mt-4 h-3.5 w-3.5 text-slate-800 transition-colors group-hover:text-slate-600" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-5 md:p-7 lg:p-8">

                      {/* Mobile number */}
                      <div className="mb-4 flex items-center justify-between lg:hidden">
                        <span className="font-mono text-xs text-slate-700">
                          PROJECT_{String(index + 1).padStart(2, '0')}
                        </span>

                        <StatusBadge
                          config={status}
                        />
                      </div>

                      {/* Project title */}
                      <div className="mb-4">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                            repository
                          </span>

                          <span className="h-px w-8 bg-slate-800" />
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 md:text-2xl">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="max-w-2xl text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-800 bg-[#0d1117] px-2.5 py-1.5 font-mono text-[10px] text-slate-500 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-300"
                          >
                            <span className="mr-1.5 text-emerald-500/40">
                              #
                            </span>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions / Status */}
                    <div className="flex flex-col justify-between border-t border-slate-800/70 bg-[#0d1117]/20 p-5 lg:border-l lg:border-t-0 lg:p-6">

                      {/* Desktop status */}
                      <div className="hidden lg:block">
                        <StatusBadge config={status} />
                      </div>

                      {/* Links */}
                      <div className="mt-5 flex flex-wrap gap-2 lg:mt-auto lg:flex-col">
                        {project.githubUrl && (
                          <ProjectLink
                            href={project.githubUrl}
                            icon={<Code2 className="h-3.5 w-3.5" />}
                            label="source"
                          />
                        )}

                        {project.liveUrl && (
                          <ProjectLink
                            href={project.liveUrl}
                            icon={<ExternalLink className="h-3.5 w-3.5" />}
                            label="live demo"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Window Footer */}
          <div className="flex flex-col gap-3 border-t border-slate-800 bg-[#0d1117] px-5 py-3 sm:flex-row sm:items-center sm:justify-between md:px-7">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-700">
              <span className="text-emerald-500/50">branch</span>
              <span>/</span>
              <span>main</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-700">
              <span>{PROJECTS.length} projects</span>
              <span>•</span>
              <span>build successful</span>
            </div>
          </div>
        </div>

        {/* Terminal hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-700"
        >
          <span className="text-emerald-500/40">$</span>
          <span>explore repositories</span>
          <ArrowUpRight className="h-3 w-3" />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────── Status Badge ───────────────── */

function StatusBadge({
  config,
}: {
  config: {
    label: string;
    dot: string;
    text: string;
    border: string;
    bg: string;
  };
}) {
  return (
    <div
      className={`flex w-fit items-center gap-2 rounded-md border px-2.5 py-1.5 ${config.border} ${config.bg}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${config.dot} ${
            config.label === 'production' ? 'animate-ping opacity-30' : ''
          }`}
        />

        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${config.dot}`}
        />
      </span>

      <span
        className={`font-mono text-[9px] uppercase tracking-widest ${config.text}`}
      >
        {config.label}
      </span>
    </div>
  );
}

/* ───────────────── Project Link ───────────────── */

function ProjectLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link flex items-center justify-between gap-3 rounded-md border border-slate-800 bg-[#161b22] px-3 py-2 transition-all duration-200 hover:border-emerald-500/30 hover:bg-emerald-500/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-slate-600 transition-colors group-hover/link:text-emerald-400">
          {icon}
        </span>

        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 transition-colors group-hover/link:text-slate-300">
          {label}
        </span>
      </div>

      <ArrowUpRight className="h-3 w-3 text-slate-700 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-emerald-400" />
    </a>
  );
}
