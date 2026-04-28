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
  const [activeZone, setActiveZone] = React.useState('Home');

  return (
    <main className="relative min-h-screen bg-background pb-32">
      {/* Background Ambience - Terra Light */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-tactical-emerald/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      <TopBar />
      <HeaderSearch />
      <DynamicFilterStrip />
      
      {/* Main Content Area with Vertical Cross-Fade */}
      <div className="px-4 relative min-h-[60vh]">
        <div 
          key={activeZone}
          className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards"
        >
          <div className="flex items-center justify-between px-2 pt-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-tactical-emerald">
              {activeZone === 'Home' 
                ? (activeCategory ? `Filtered: ${activeCategory}` : 'Terra Command / Global Feed')
                : `Zone: ${activeZone}`}
            </h2>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-tactical-emerald animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            </div>
          </div>

          <div className="space-y-6">
            {activeZone === 'Home' ? (
              recommendedItems.map((item, index) => {
                if (item.type === 'artisan') {
                  return (
                    <ArtisanProfileCard 
                      key={`artisan-${item.id}`} 
                      artisan={item} 
                    />
                  );
                }
                
                return (
                  <ExperienceCard 
                    key={`experience-${item.id}`} 
                    experience={item} 
                  />
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-tactical-emerald/10 animate-pulse"></div>
                </div>
                <p className="text-sm font-medium">Synchronizing {activeZone} Data...</p>
              </div>
            )}
          </div>

          {activeZone === 'Home' && (
            <div className="py-10 flex flex-col items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-slate-200"></div>
              <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">End of Protocol Stream</p>
              <div className="h-[1px] w-12 bg-slate-200"></div>
            </div>
          )}
        </div>
      </div>

      <BottomNav activeZone={activeZone} onZoneChange={setActiveZone} />
    </main>
  );
}
