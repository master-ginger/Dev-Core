'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-[#0d1117] text-slate-100 px-6 sm:px-10 lg:px-16 py-12 flex items-center justify-center font-sans overflow-hidden">
      
      {/* Background Ambient Glow (Optional visual depth) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto w-full z-10">
        
        {/* Left Section: Hero Copy & CTA */}
        <motion.div 
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit text-emerald-400 font-mono text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            System Status: Ready
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Only Goal Is Building <span className="text-[#10B981]">Scalable</span> Applications
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
            I engineer robust digital solutions focused on performance, maintainability, and exceptional user experiences. Specializing in modern TypeScript ecosystems and cloud-native architectures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-start items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#10B981] hover:bg-emerald-600 text-slate-950 font-semibold font-mono px-6 py-3 rounded-md transition-colors shadow-lg shadow-emerald-500/20"
            >
              View More
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-slate-700 hover:border-slate-500 bg-[#161b22] text-slate-200 font-mono px-6 py-3 rounded-md transition-colors"
            >
              Connect
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section: Animated Code Window */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="rounded-lg overflow-hidden border border-slate-800 bg-[#161b22] shadow-2xl">
            
            {/* Editor Window Bar */}
            <div id="header-editor" className="flex items-center gap-3 px-4 py-3 bg-[#0d1117] border-b border-slate-800">
              <div id="dots" className="flex gap-1.5 items-center">
                <div className="bg-rose-500/80 w-3 h-3 rounded-full" />
                <div className="bg-amber-500/80 w-3 h-3 rounded-full" />
                <div className="bg-emerald-500/80 w-3 h-3 rounded-full" />
              </div>
              <span id="header-file-name" className="font-mono text-xs text-slate-400 tracking-wide select-none">
                developer_profile.ts
              </span>
            </div>

            {/* Editor Body */}
            <div id="editor" className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-[#0d1117]/80 text-[#F8FAFC]">
              <pre>
                <code>
                  <span className="text-[#10B981]">const</span> <span className="text-white">developer</span> = &#123;<br/>
                  &nbsp;&nbsp;<span className="text-[#94A3B8]">name:</span> <span className="text-[#F97316]">&quot;System Admin&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#94A3B8]">role:</span> <span className="text-[#F97316]">&quot;Full-Stack Engineer&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#94A3B8]">skills:</span> [<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F97316]">&quot;TypeScript&quot;</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F97316]">&quot;React/Next.js&quot;</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F97316]">&quot;Node.js/Go&quot;</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#F97316]">&quot;AWS/Docker&quot;</span><br/>
                  &nbsp;&nbsp;],<br/>
                  &nbsp;&nbsp;<span className="text-[#94A3B8]">status:</span> <span className="text-[#F97316]">&quot;Open to opportunities&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#94A3B8]">execute:</span> <span className="text-[#10B981]">function</span>() &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#10B981]">return</span> <span className="text-white">this</span>.<span className="text-white">skills</span>.<span className="text-[#38BDF8]">join</span>(<span className="text-[#F97316]">&quot; + &quot;</span>)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#10B981]">+</span> <span className="text-[#F97316]">&quot; = robust solutions&quot;</span>;<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;;
                  
                  {/* Blinking Cursor Simulation */}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 ml-1 bg-emerald-500 align-middle"
                  />
                </code>
              </pre>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}