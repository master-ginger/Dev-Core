'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Code2 } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: '// home', path: '/' },
  { label: '// about', path: '/about' },
  { label: '// contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-slate-800/80 px-6 sm:px-10 lg:px-16 py-4 font-sans text-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <div className="p-1.5 rounded-md bg-[#161b22] border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
            <Terminal className="w-5 h-5 text-emerald-500" />
          </div>
          <span className="font-mono text-lg font-bold text-white tracking-tight">
            Dev<span className="text-[#10B981]">Core</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-2 font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`relative px-3 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? 'text-emerald-400 bg-[#161b22] border border-slate-800'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#161b22]/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-slate-800 mx-3" />

          {/* Quick Terminal Action Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161b22] border border-slate-800 text-[11px] font-mono text-emerald-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>v2.0.26</span>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-md bg-[#161b22] border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-slate-800/80 bg-[#0d1117] -mx-6 sm:-mx-10 px-6 sm:px-10 mt-4"
          >
            <nav className="py-4 font-mono text-sm">
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-md transition-colors ${
                          isActive
                            ? 'text-emerald-400 bg-[#161b22] border border-slate-800 font-semibold'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-[#161b22]/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span>SYSTEM STATUS</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}