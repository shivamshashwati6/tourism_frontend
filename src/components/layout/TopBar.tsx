'use client';

import React from 'react';

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[20px] border-b border-black/[0.05] px-4 py-2">
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <div className="w-8"></div> {/* Spacer for symmetry */}
        
        {/* Centered Logo */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <span className="text-xl font-black italic tracking-tighter text-tactical-emerald">N</span>
            <span className="text-xl font-black italic tracking-tighter text-amber-500 -ml-1">E</span>
          </div>
          <h1 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
            Threads
          </h1>
        </div>

        {/* Protocol Badge (Top-right utility) */}
        <div className="flex items-center justify-end w-8">
           <div className="w-5 h-5 rounded-full border border-tactical-emerald/30 flex items-center justify-center bg-tactical-emerald/5 group cursor-help transition-all hover:bg-tactical-emerald/10" title="Protocol: Terra">
             <div className="w-1.5 h-1.5 rounded-full bg-tactical-emerald animate-pulse"></div>
           </div>
        </div>
      </div>
    </header>
  );
};
