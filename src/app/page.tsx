'use client';

import React from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { HeaderSearch } from '@/components/layout/HeaderSearch';
import { DynamicFilterStrip } from '@/components/layout/DynamicFilterStrip';
import { BottomNav } from '@/components/layout/BottomNav';
import { SideNav } from '@/components/layout/SideNav';
import { ArtisanProfileCard } from '@/components/feed/ArtisanProfileCard';
import { ExperienceCard } from '@/components/feed/ExperienceCard';
import { useRecommendation } from '@/context/RecommendationEngineContext';

export default function Home() {
  const { recommendedItems, activeCategory } = useRecommendation();

  return (
    <main className="relative min-h-screen bg-background pb-28 lg:pl-28">
      {/* Background Ambience - Aero Luminescent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-solar-blue/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-solar-green/5 blur-[100px] rounded-full"></div>
      </div>

      <TopBar />
      <SideNav />
      <HeaderSearch />
      <DynamicFilterStrip />
      
      {/* Scrollable Feed Area */}
      <div className="px-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-technical">
            {activeCategory ? `Sector: ${activeCategory}` : 'Solar Command / Global Stream'}
          </h2>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-green animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          </div>
        </div>

        <div className="space-y-6">
          {recommendedItems.map((item, index) => {
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
        <div className="py-12 flex flex-col items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-slate-200"></div>
          <p className="text-technical text-slate-300">End of Data Transmission</p>
          <div className="h-[1px] w-12 bg-slate-200"></div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}

