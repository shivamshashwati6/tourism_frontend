'use client';

import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export const HeaderSearch = () => {
  return (
    <div className="px-4 pb-4 mt-6">
      <div className="relative group max-w-screen-md mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search size={18} className="text-slate-400 group-focus-within:text-tactical-green transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search Discovery..."
          className="w-full bg-slate-100/50 border border-transparent rounded-xl py-2.5 pl-12 pr-12 text-[15px] focus:outline-none focus:bg-white focus:border-slate-200 transition-all placeholder:text-slate-400 text-slate-900"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
