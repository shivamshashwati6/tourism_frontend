'use client';

import React from 'react';

export const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[20px] border-b border-black/[0.05] px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <div className="w-8"></div> {/* Spacer for symmetry */}
        
        {/* Centered Logo: spot@NE Migration */}
        <div className="flex items-center gap-2 group cursor-default select-none">
          <div className="flex items-center">
            <span className="text-xl font-black italic tracking-tighter text-tactical-emerald">N</span>
            <span className="text-xl font-black italic tracking-tighter text-amber-500 -ml-1">E</span>
          </div>
          <div className="flex items-center font-mono font-black text-[13px] uppercase tracking-tighter text-slate-900">
            <span>spot</span>
            <span className="text-tactical-emerald mx-0.5 relative flex items-center justify-center">
              <span className="relative z-10 drop-shadow-[0_0_5px_rgba(16,185,129,0.4)] group-hover:animate-radar-ping">@</span>
              <span className="absolute inset-0 bg-tactical-emerald/20 rounded-full blur-md scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></span>
            </span>
            <span>NE</span>
          </div>
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
