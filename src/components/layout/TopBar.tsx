'use client';

import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const TopBar = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="glass-panel rounded-2xl px-4 py-2 flex items-center justify-between hud-element">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <span className="text-xl font-bold neon-text">NE</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider uppercase text-white/90">NE Threads</h1>
            <p className="text-[10px] text-emerald-500 font-mono tracking-tight">TACTICAL_NODE_01</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Bell size={18} className="text-emerald-400" />
          </button>
          <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <User size={18} className="text-emerald-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
