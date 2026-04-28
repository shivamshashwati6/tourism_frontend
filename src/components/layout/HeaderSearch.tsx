'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const HeaderSearch = () => {
  return (
    <div className="px-4 pt-20 pb-4">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400 group-focus-within:text-solar-blue transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search Artisans or Experiences..."
          className="w-full bg-slate-100/50 border border-black/[0.05] rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-solar-blue/10 focus:bg-white transition-all placeholder:text-slate-400 text-slate-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button className="p-1.5 rounded-lg bg-solar-blue/5 border border-solar-blue/10 text-solar-blue hover:bg-solar-blue/10 transition-colors">
            <SlidersHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

