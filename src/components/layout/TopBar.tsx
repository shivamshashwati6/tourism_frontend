'use client';

import React from 'react';

export const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border-black/[0.05] bg-white/70 backdrop-blur-xl shadow-solar">
        <div className="flex items-center gap-4">
          {/* Custom Stylized Logo */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-2xl font-black italic tracking-tighter text-solar-blue">N</span>
              <span className="text-2xl font-black italic tracking-tighter text-solar-green -ml-1.5">E</span>
            </div>
            {/* Subtle glow behind the logo */}
            <div className="absolute inset-0 bg-solar-blue/5 blur-xl rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-tight text-slate-800 leading-none">
              NE Threads
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[2px] w-8 bg-gradient-to-r from-solar-blue to-solar-green opacity-50"></div>
              <span className="text-technical text-[8px]">Solar Command 1.0</span>
            </div>
          </div>
        </div>

        {/* Right side intentionally empty per request */}
        <div className="hidden md:block">
          <div className="px-3 py-1 rounded-full border border-solar-blue/10 bg-solar-blue/5">
            <span className="text-[10px] font-mono text-solar-blue uppercase tracking-widest animate-pulse">Aero-Luminescent Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

