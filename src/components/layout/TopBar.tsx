'use client';

import React from 'react';

export const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 flex items-center justify-between shadow-terra">
        <div className="flex items-center gap-4">
          {/* Custom Stylized Logo */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tighter text-tactical-emerald">N</span>
              <span className="text-3xl font-black italic tracking-tighter text-amber-500 -ml-2">E</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              NE Threads
            </h1>
            <div className="h-[2px] w-full bg-gradient-to-r from-tactical-emerald to-amber-500 mt-1 opacity-20"></div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="hidden md:block">
          <div className="px-3 py-1 rounded-full border border-tactical-emerald/20 bg-tactical-emerald/5">
            <span className="text-[10px] font-mono text-tactical-emerald uppercase tracking-widest">Protocol: Terra</span>
          </div>
        </div>
      </div>
    </header>
  );
};
