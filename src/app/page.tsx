'use client';

import { TopBar } from '@/components/layout/TopBar';
import { HeaderSearch } from '@/components/layout/HeaderSearch';
import { DynamicFilterStrip } from '@/components/layout/DynamicFilterStrip';
import { BottomNav } from '@/components/layout/BottomNav';

export default function Home() {
  return (
    <main className="relative min-h-screen pb-32">
      <TopBar />
      <HeaderSearch />
      <DynamicFilterStrip />
      
      {/* Scrollable Feed Area */}
      <div className="px-4 space-y-6">
        {/* Placeholder for Feed Views (Step 4) */}
        <div className="flex flex-col items-center justify-center py-20 text-white/20 border-2 border-dashed border-white/5 rounded-3xl">
          <p className="text-sm font-mono uppercase tracking-[0.2em]">Awaiting Data Stream...</p>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
