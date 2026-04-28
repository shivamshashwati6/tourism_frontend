'use client';

import React from 'react';
import { useRecommendation } from '@/context/RecommendationEngineContext';
import mockData from '@/lib/data.json';

export const DynamicFilterStrip = () => {
  const { activeCategory, setActiveCategory } = useRecommendation();

  return (
    <div className="px-4 pb-4 overflow-x-auto no-scrollbar">
      <div className="flex gap-3 whitespace-nowrap">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            activeCategory === null
              ? 'bg-tactical-emerald/10 border-tactical-emerald text-tactical-emerald shadow-sm'
              : 'bg-white/70 border-white/20 text-slate-500 hover:border-slate-300'
          }`}
        >
          All Feeds
        </button>
        {mockData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === cat.value
                ? 'bg-tactical-emerald/10 border-tactical-emerald text-tactical-emerald shadow-sm'
                : 'bg-white/70 border-white/20 text-slate-500 hover:border-slate-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};
