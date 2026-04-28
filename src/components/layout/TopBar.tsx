'use client';

import React from 'react';

export const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between hud-element border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          {/* Custom Stylized Logo */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tighter text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">N</span>
              <span className="text-3xl font-black italic tracking-tighter text-amber-500 -ml-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">E</span>
            </div>
            {/* Subtle glow behind the logo */}
            <div className="absolute inset-0 bg-emerald-500/5 blur-xl rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">
              NE Threads
            </h1>
            <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500 to-amber-500 mt-1 opacity-50"></div>
          </div>
        </div>

        {/* Right side intentionally empty per request */}
        <div className="hidden md:block">
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5">
            <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">System Live</span>
          </div>
        </div>
      </div>
    </header>
  );
};
