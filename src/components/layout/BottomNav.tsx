'use client';

import React from 'react';
import { Home, Compass, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-6 left-6 right-6 z-50">
      <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl border-emerald-500/10">
        <NavItem icon={<Home size={22} />} active />
        <NavItem icon={<Compass size={22} />} />
        <div className="relative -top-2">
          <div className="absolute -inset-2 bg-emerald-500/20 blur-xl rounded-full"></div>
          <button className="relative w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            <ShoppingBag size={22} />
          </button>
        </div>
        <NavItem icon={<Heart size={22} />} />
        <NavItem icon={<ShieldCheck size={22} />} />
      </div>
    </nav>
  );
};

const NavItem = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => (
  <button className={`transition-all duration-300 ${active ? 'text-emerald-400 scale-110' : 'text-white/30 hover:text-white/60'}`}>
    {icon}
    {active && <div className="w-1 h-1 bg-emerald-400 rounded-full mx-auto mt-1 shadow-[0_0_5px_rgba(16,185,129,1)]"></div>}
  </button>
);
