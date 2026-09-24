'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock3,
  Mail,
  MessageSquare,
  Terminal,
  Video,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    value: 'bhavanapillai.100@gmail.com',
    href: 'mailto:bhavanapillai.100@gmail.com',
    icon: <Mail className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: 'GitHub',
    value: 'github.com/master-ginger',
    href: 'https://github.com/master-ginger',
    icon: <FaGithub className="h-5 w-5 text-emerald-400" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhavana-pillai-34b218246',
    href: 'https://www.linkedin.com/in/bhavana-pillai-34b218246/',
    icon: <FaLinkedin className="h-5 w-5 text-emerald-400" />,
  },
  
];

/*
 * IMPORTANT:
 * Replace this with your REAL Google Appointment Schedule URL.
 *
 * Example:
 * https://calendar.google.com/calendar/appointments/schedules/XXXXXXXXXXXX?gv=true
 *
 * Keep it empty while configuring the page.
 */
const BOOKING_URL = 'https://calendar.app.google/QFo7VEacUQQrDxyd8';

export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0d1117] px-4 py-10 font-sans text-slate-200 sm:px-8 md:px-12 lg:px-16 lg:py-16">
      <div className="relative mx-auto max-w-6xl">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-3xl" />

        {/* =========================================================
            HEADER
        ========================================================== */}
        <motion.header
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 md:mb-12"
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-500/70">
            <Terminal className="h-3.5 w-3.5" />
            connection.endpoints
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Initialize{' '}
                <span className="text-emerald-400">Contact</span>{' '}
                Protocol
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Whether you want to discuss system architectures, collaborate
                on projects, or talk about artisan paper quilling—schedule a
                session or reach out via direct channels below.
              </p>
            </div>

            {/* Connection status */}
            <div className="flex w-fit items-center gap-2 rounded-lg border border-emerald-500/10 bg-emerald-500/5 px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                accepting connections
              </span>
            </div>
          </div>
        </motion.header>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

          {/* =======================================================
              BOOKING PANEL
          ======================================================== */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl border border-slate-800 bg-[#161b22] shadow-2xl shadow-black/10"
          >

            {/* Editor header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#0d1117] px-4 py-3">
              <div className="flex items-center gap-3">

                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="h-4 w-px bg-slate-800" />

                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />

                  <span className="font-mono text-xs tracking-wide text-slate-500">
                    schedule_meeting.appointment
                  </span>
                </div>
              </div>

              <span className="hidden font-mono text-[9px] uppercase tracking-widest text-slate-700 sm:block">
                booking.endpoint
              </span>
            </div>

            {/* Booking intro */}
            <div className="border-b border-slate-800/70 px-5 py-6 md:px-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/60">
                    available_session
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Schedule a Meeting
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                    Pick a convenient time and I&apos;ll send a confirmation
                    with the meeting details.
                  </p>
                </div>

                {/* Meeting metadata */}
                <div className="grid grid-cols-2 gap-2 sm:w-[220px]">
                  <InfoBadge
                    icon={<Clock3 className="h-3.5 w-3.5" />}
                    label="Duration"
                    value="30 min"
                  />

                  <InfoBadge
                    icon={<Video className="h-3.5 w-3.5" />}
                    label="Format"
                    value="Online"
                  />
                </div>
              </div>
            </div>

            {/* Booking area */}
            <div className="bg-[#0d1117] p-4 sm:p-6">

              {BOOKING_URL ? (
                <div className="overflow-hidden rounded-xl border border-slate-800 bg-white shadow-xl shadow-black/20">

                  {/* iframe toolbar */}
                  <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        secure_booking
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-slate-400">
                      google calendar
                    </span>
                  </div>

                  <iframe
                    src={BOOKING_URL}
                    title="Schedule a meeting"
                    loading="lazy"
                    className="block h-[680px] w-full bg-white"
                    style={{ border: 0 }}
                  />
                </div>
              ) : (
                <BookingSetupState />
              )}
            </div>

            {/* Booking footer */}
            <div className="flex flex-col gap-3 border-t border-slate-800 bg-[#0d1117] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/60" />

                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  no account required
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-700">
                <Globe2 className="h-3 w-3" />
                timezone detected automatically
              </div>
            </div>
          </motion.section>

          {/* =======================================================
              RIGHT SIDEBAR
          ======================================================== */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >

            {/* Direct message */}
            <div className="rounded-xl border border-slate-800 bg-[#161b22] p-6">

              <div className="mb-5 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0d1117]">
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    direct.channel
                  </div>

                  <div className="text-sm font-semibold text-white">
                    Prefer text?
                  </div>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-500">
                If you don&apos;t need a calendar slot, feel free to drop a
                direct message or email. I usually respond within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div>
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  communication_channels
                </span>

                <span className="font-mono text-[9px] text-slate-700">
                  {String(SOCIAL_LINKS.length).padStart(2, '0')}
                </span>
              </div>

              <div className="space-y-2">
                {SOCIAL_LINKS.map((channel, index) => (
                  <motion.a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      channel.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between rounded-lg border border-slate-800 bg-[#161b22] p-3.5 transition-all duration-200 hover:border-emerald-500/30 hover:bg-[#161b22]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-800 bg-[#0d1117] transition-colors group-hover:border-emerald-500/20">
                        {channel.icon}
                      </div>

                      <div className="min-w-0">
                        <div className="mb-0.5 flex items-center gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-slate-600">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className="text-xs text-slate-500">
                            {channel.label}
                          </span>
                        </div>

                        <div className="truncate text-sm font-medium text-slate-300 transition-colors group-hover:text-emerald-400">
                          {channel.value}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response info */}
            <div className="rounded-lg border border-slate-800/70 bg-[#0d1117] p-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500/70" />

                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    response_time
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Usually within 24 hours for direct messages.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Bottom terminal */}
        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">
          <span className="text-emerald-500/40">$</span>
          <span>awaiting_connection</span>

          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500/60" />
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   SMALL INFO BADGE
========================================================= */

function InfoBadge({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-slate-800 bg-[#0d1117] px-3 py-2">
      <div className="mb-1 flex items-center gap-1.5 text-slate-600">
        {icon}

        <span className="font-mono text-[8px] uppercase tracking-wider">
          {label}
        </span>
      </div>

      <span className="font-mono text-[10px] text-slate-300">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   BOOKING SETUP STATE
========================================================= */

function BookingSetupState() {
  return (
    <div className="flex min-h-[520px] items-center justify-center rounded-xl border border-dashed border-slate-800 bg-[#11161d] p-6">

      <div className="max-w-md text-center">

        {/* Calendar icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <Calendar className="h-7 w-7 text-emerald-400" />
        </div>

        <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-500/60">
          booking.endpoint
        </div>

        <h3 className="text-xl font-semibold text-white">
          Scheduling interface ready
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Connect your Google Appointment Schedule to activate online booking.
          Once connected, visitors will be able to choose an available time
          directly from this panel.
        </p>

        {/* Configuration hint */}
        <div className="mt-6 rounded-lg border border-slate-800 bg-[#0d1117] p-4 text-left">
          <div className="mb-2 flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-emerald-500/70" />

            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
              configuration
            </span>
          </div>

          <code className="break-all font-mono text-[10px] leading-5 text-slate-500">
            BOOKING_URL ={' '}
            <span className="text-amber-300/70">
              &quot;your_google_schedule_url&quot;
            </span>
          </code>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500/70" />
          endpoint not configured
        </div>
      </div>
    </div>
  );
}
