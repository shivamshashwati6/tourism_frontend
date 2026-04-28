'use client';

import React from 'react';
import { Home, Compass, ShoppingBag, Heart, ShieldCheck } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      
      <div className="bg-[#080c0a]/95 backdrop-blur-xl border-t border-emerald-500/10 px-8 py-5 pb-8 flex items-center justify-between shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <NavItem icon={<Home size={22} />} active />
        <NavItem icon={<Compass size={22} />} />
        
        {/* Central Action Node */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <button className="relative w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:scale-105 transition-all -mt-8 border border-emerald-400/50">
            <ShoppingBag size={24} />
            <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
          </button>
        </div>
        
        <NavItem icon={<Heart size={22} />} />
        <NavItem icon={<ShieldCheck size={22} />} />
      </div>

      {/* SafeArea Bottom Spacer for modern devices */}
      <div className="bg-[#080c0a]/95 h-2"></div>
    </nav>
  );
};

const NavItem = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => (
  <button className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-emerald-400' : 'text-white/20 hover:text-white/40'}`}>
    <div className={`${active ? 'drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] scale-110' : ''}`}>
      {icon}
    </div>
    {active && (
      <div className="absolute -bottom-2 w-4 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
    )}
  </button>
);
