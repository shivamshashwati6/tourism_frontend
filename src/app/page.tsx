'use client';

import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { HeaderSearch } from '@/components/layout/HeaderSearch';
import { DynamicFilterStrip } from '@/components/layout/DynamicFilterStrip';
import { BottomNav } from '@/components/layout/BottomNav';
import { ArtisanProfileCard } from '@/components/feed/ArtisanProfileCard';
import { ExperienceCard } from '@/components/feed/ExperienceCard';
import { useRecommendation } from '@/context/RecommendationEngineContext';

export default function Home() {
  const { recommendedItems, activeCategory } = useRecommendation();

  return (
    <main className="relative min-h-screen bg-background pb-32">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-emerald-800/5 blur-[100px] rounded-full"></div>
      </div>

      <TopBar />
      <HeaderSearch />
      <DynamicFilterStrip />
      
      {/* Scrollable Feed Area */}
      <div className="px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/80">
            {activeCategory ? `Filtered: ${activeCategory}` : 'Command Center / Global Feed'}
          </h2>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"></div>
          </div>
        </div>

        <div className="space-y-6">
          {recommendedItems.map((item, index) => {
            // Rudimentary recommendation logic: Top 2 items or items matching active category
            const isRecommended = index < 2 || (activeCategory !== null && item.category === activeCategory);
            
            if (item.type === 'artisan') {
              return (
                <ArtisanProfileCard 
                  key={`artisan-${item.id}`} 
                  artisan={item} 
                  isRecommended={isRecommended}
                />
              );
            }
            
            return (
              <ExperienceCard 
                key={`experience-${item.id}`} 
                experience={item} 
                isRecommended={isRecommended}
              />
            );
          })}
        </div>

        {/* End of Stream Indicator */}
        <div className="py-10 flex flex-col items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">End of Data Stream</p>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
