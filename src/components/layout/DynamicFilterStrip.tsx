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
              ? 'bg-solar-blue text-white border-solar-blue shadow-[0_4px_12px_rgba(59,130,246,0.3)]'
              : 'bg-white border-black/[0.05] text-slate-500 hover:border-solar-blue/30 hover:text-solar-blue'
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
                ? 'bg-solar-blue text-white border-solar-blue shadow-[0_4px_12px_rgba(59,130,246,0.3)]'
                : 'bg-white border-black/[0.05] text-slate-500 hover:border-solar-blue/30 hover:text-solar-blue'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

