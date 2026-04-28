'use client';

import React from 'react';
import { useRecommendation } from '@/context/RecommendationEngineContext';
import mockData from '@/lib/data.json';
import { Zap, TrendingUp, Tag, Globe } from 'lucide-react';

export const DynamicFilterStrip = () => {
  const { activeCategory, setActiveCategory } = useRecommendation();

  const getIcon = (id: string) => {
    switch (id) {
      case 'trending': return <Zap size={14} />;
      case 'budget': return <Tag size={14} />;
      case 'ethnic': return <Globe size={14} />;
      default: return <TrendingUp size={14} />;
    }
  };

  return (
    <div className="px-4 pb-4 overflow-x-auto no-scrollbar touch-pan-x">
      <div className="flex gap-3 whitespace-nowrap">
        {/* Trending is the new default/Slot 1 */}
        <button
          onClick={() => setActiveCategory(null)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all border font-mono uppercase tracking-wider ${
            activeCategory === null
              ? 'bg-tactical-emerald border-tactical-emerald text-white shadow-lg shadow-tactical-emerald/20'
              : 'bg-white/40 backdrop-blur-md border-slate-900/10 text-slate-500 hover:border-slate-300'
          }`}
        >
          <Zap size={14} className={activeCategory === null ? 'text-white' : 'text-tactical-emerald'} />
          Trending
        </button>

        {mockData.categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.value)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[10px] font-bold transition-all border font-mono uppercase tracking-wider ${
              activeCategory === cat.value
                ? 'bg-tactical-emerald border-tactical-emerald text-white shadow-lg shadow-tactical-emerald/20'
                : 'bg-white/40 backdrop-blur-md border-slate-900/10 text-slate-500 hover:border-slate-300'
            }`}
          >
            <div className={activeCategory === cat.value ? 'text-white' : 'text-tactical-emerald'}>
              {getIcon(cat.id)}
            </div>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};
