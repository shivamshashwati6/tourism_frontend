'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const HeaderSearch = () => {
  return (
    <div className="px-4 pt-24 pb-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-tactical-emerald group-focus-within:text-tactical-accent transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search Artisans or Experiences..."
          className="w-full bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:border-tactical-emerald/50 focus:bg-white/90 transition-all placeholder:text-slate-400 text-slate-900 shadow-sm"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button className="p-1.5 rounded-lg bg-tactical-emerald/10 border border-tactical-emerald/20 text-tactical-emerald">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
