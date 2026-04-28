'use client';

import React from 'react';
import { Home, Search, PenSquare, Bell, User } from 'lucide-react';

export const SideNav = () => {
  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="glass-panel rounded-3xl p-3 flex flex-col gap-6 shadow-solar border-black/[0.05]">
        <SideNavItem icon={<Home size={20} />} label="Home" active />
        <SideNavItem icon={<Search size={20} />} label="Search" />
        <SideNavItem icon={<PenSquare size={20} />} label="Post" />
        <SideNavItem icon={<Bell size={20} />} label="Notifs" />
        <SideNavItem icon={<User size={20} />} label="Profile" />
      </div>
    </aside>
  );
};

interface SideNavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SideNavItem = ({ icon, label, active = false }: SideNavItemProps) => (
  <button className={`relative group flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
    active ? 'bg-solar-blue/10 text-solar-blue' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100/50'
  }`}>
    {active && (
      <div className="absolute left-0 w-1 h-6 bg-solar-blue rounded-r-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
    )}
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-105'}`}>
      {icon}
    </div>
    
    {/* Tooltip */}
    <div className="absolute left-16 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
      {label}
    </div>
  </button>
);
