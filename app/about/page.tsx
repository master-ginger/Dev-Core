'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bug,
  Sparkles,
  Plane,
  Scissors,
  FileText,
  CheckCircle2,
  Terminal,
  Code2,
  Activity,
  GitBranch,
} from 'lucide-react';

const principles = [
  {
    number: '01',
    icon: Bug,
    title: 'I Love Debugging',
    description:
      'Where others see frustration, I see a detective puzzle. Tracking down edge cases and root causes forces me to think critically and refine my problem-solving skills with every resolved issue.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Organized Workflow',
    description:
      'Order breeds clarity. I prioritize writing clean code with descriptive comments, generating precise feature documentation, and establishing reliable team architectures.',
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d1117] px-4 py-10 font-sans text-slate-200 sm:px-8 md:px-12 lg:px-16 lg:py-16">
      <div className="relative mx-auto max-w-6xl">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-3xl" />

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative mb-14 md:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/70"
          >
            <Terminal className="h-3.5 w-3.5" />
            system diagnostics
            <span className="text-slate-700">/</span>
            personal profile
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Curious Developer.
            <br />
            <span className="text-emerald-400">
              Obsessive Problem Solver.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
          >
            Driven by relentless curiosity to learn new technologies while
            mastering my primary stack. I build robust systems, craft clean
            codebases, and create intricate art outside of the terminal.
          </motion.p>

          {/* Tiny system indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-widest text-slate-600"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              curiosity: enabled
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
              learning: continuous
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" />
              creativity: online
            </span>
          </motion.div>
        </section>

        {/* =========================================================
            PROFILE + BIO
        ========================================================== */}
        <section className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

          {/* Bio Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group overflow-hidden rounded-xl border border-slate-800 bg-[#161b22] shadow-xl shadow-black/10"
          >
            {/* Editor bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1117] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="h-4 w-px bg-slate-800" />

                <div className="flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-emerald-500/70" />

                  <span className="font-mono text-xs text-slate-500">
                    bio.md
                  </span>
                </div>
              </div>

              <span className="hidden font-mono text-[9px] uppercase tracking-widest text-slate-700 sm:block">
                read_only
              </span>
            </div>

            {/* Editor content */}
            <div className="grid grid-cols-[40px_1fr]">

              {/* Line numbers */}
              <div className="border-r border-slate-800/60 bg-[#0d1117]/30 px-3 py-7 text-right font-mono text-[9px] leading-7 text-slate-700">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>10</div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">

                <div className="mb-7 font-mono text-xs">
                  <span className="text-emerald-400">export</span>{' '}
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-white">philosophy</span>{' '}
                  <span className="text-slate-600">=</span>{' '}
                  <span className="text-amber-300">&quot;craft&quot;</span>
                </div>

                <h2 className="mb-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Execution & Craftsmanship
                </h2>

                <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
                  <p>
                    My philosophy as an engineer centers on continuous growth.
                    I stay eager to explore new tools and paradigms, ensuring I
                    never get comfortable while maintaining deep expertise in
                    my core stack.
                  </p>

                  <p>
                    I genuinely enjoy the process of standardizing codebases.
                    From structured git commits to comprehensive documentation
                    and self-documenting inline comments, I make sure the code
                    I hand off is clean, readable, and structured for
                    longevity.
                  </p>
                </div>

                {/* Code-style footer */}
                <div className="mt-8 border-t border-slate-800/70 pt-5 font-mono text-[10px] text-slate-700">
                  <span className="text-emerald-500/50">return</span>{' '}
                  <span className="text-slate-600">
                    continuous_improvement
                  </span>
                  <span className="text-slate-800">;</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-slate-800 bg-[#161b22]"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/80 via-emerald-400/30 to-transparent" />

            <div className="p-6">

              {/* Profile image */}
              <div className="relative mx-auto mb-6 h-40 w-40">
                <div className="absolute inset-0 rounded-full border border-emerald-500/20" />

                <div className="absolute -inset-2 rounded-full border border-dashed border-slate-800" />

                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-emerald-500/40 bg-[#0d1117] p-1.5">
                  <Image
                    src="/profile2.jpg"
                    alt="Profile"
                    fill
                    priority
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Online indicator */}
                <div className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#161b22] bg-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0d1117]" />
                </div>
              </div>

              <div className="mb-6 text-center">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  developer.profile
                </div>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

                  <span className="text-sm font-medium text-slate-300">
                    Active & Learning
                  </span>
                </div>
              </div>

              {/* Profile metadata */}
              <div className="overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117]">

                <div className="flex items-center justify-between border-b border-slate-800/70 px-4 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    Location
                  </span>

                  <span className="font-mono text-xs text-slate-300">
                    Pune, India
                  </span>
                </div>

                <div className="flex items-center justify-between px-4 py-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    Focus
                  </span>

                  <span className="font-mono text-xs text-slate-300">
                    Full-Stack Systems
                  </span>
                </div>
              </div>

              {/* Activity */}
              <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-600">
                <Activity className="h-3.5 w-3.5 text-emerald-500/60" />
                profile status: operational
              </div>
            </div>
          </motion.aside>
        </section>

        {/* =========================================================
            ENGINEERING MINDSET
        ========================================================== */}
        <section className="mb-16">

          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/60">
                <Code2 className="h-3.5 w-3.5" />
                core.principles
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Engineering Mindset
              </h2>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-widest text-slate-700 sm:block">
              2 principles loaded
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#161b22] p-6 transition-colors hover:border-emerald-500/30 sm:p-7"
                >
                  {/* Number */}
                  <div className="absolute right-5 top-4 font-mono text-4xl font-bold text-slate-800/60 transition-colors group-hover:text-emerald-500/10">
                    {principle.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#0d1117] text-emerald-400 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-emerald-400">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    {principle.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-700">
                    <GitBranch className="h-3 w-3" />
                    principle.enabled
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            BEYOND THE TERMINAL
        ========================================================== */}
        <section className="overflow-hidden rounded-xl border border-slate-800 bg-[#161b22]">

          {/* Header */}
          <div className="border-b border-slate-800 bg-[#0d1117] px-5 py-4 sm:px-7">
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400/80">
                  off_duty.exe
                </span>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-700">
                creative processes
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-8">

            <div className="mb-8">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                beyond_the_terminal
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Beyond The Terminal
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Quilling */}
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117] p-5 transition-all duration-300 hover:border-emerald-500/30 sm:p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-500/[0.025] blur-2xl transition-all group-hover:bg-emerald-500/[0.06]" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#161b22] text-emerald-400">
                      <Scissors className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-700">
                      craft_01
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">
                    Paper Quilling & Artisan Craft
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    When I step away from code, I craft custom paper quilled
                    jewelry—specializing in lightweight, handcrafted earrings.
                    The same precision required for UI layouts feeds into
                    rolling and shaping intricate paper designs.
                  </p>
                </div>
              </motion.div>

              {/* Travel */}
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117] p-5 transition-all duration-300 hover:border-emerald-500/30 sm:p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-500/[0.025] blur-2xl transition-all group-hover:bg-emerald-500/[0.06]" />

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#161b22] text-emerald-400">
                      <Plane className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-700">
                      explore_02
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-white transition-colors group-hover:text-emerald-400">
                    Exploring New Horizons
                  </h3>

                  <p className="text-sm leading-6 text-slate-500">
                    I am an avid traveler who loves discovering new cultures,
                    landscapes, and perspectives. Stepping into unfamiliar
                    places keeps my curiosity alive and feeds back into my
                    creative energy.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="mt-7 flex flex-col gap-3 border-t border-slate-800/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-700">
                creativity.status
              </span>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-emerald-500/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                active outside the terminal
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
