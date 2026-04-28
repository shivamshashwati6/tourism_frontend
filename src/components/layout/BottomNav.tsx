'use client';

import React from 'react';
import { Home, Search, PenSquare, Bell, User } from 'lucide-react';

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 lg:hidden">
      <div className="glass-panel rounded-2xl px-4 py-3 flex items-center justify-around shadow-solar border-black/[0.05]">
        <NavItem icon={<Home size={20} />} label="Home" active />
        <NavItem icon={<Search size={20} />} label="Search" />
        <NavItem icon={<PenSquare size={20} />} label="Post" />
        <NavItem icon={<Bell size={20} />} label="Notifs" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon, label, active = false }: NavItemProps) => (
  <button className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 min-w-[56px] ${
    active ? 'text-solar-blue' : 'text-slate-400 hover:text-slate-600'
  }`}>
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : ''}`}>
      {icon}
    </div>
    <span className={`text-[9px] font-bold tracking-wider uppercase ${active ? 'text-solar-blue' : 'text-slate-400'}`}>
      {label}
    </span>
    {active && (
      <div className="absolute -bottom-1 w-6 h-[2px] bg-solar-blue rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
    )}
  </button>
);
