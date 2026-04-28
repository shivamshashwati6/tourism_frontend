'use client';

import React from 'react';
import { Home, Search, Plus, Bell, User } from 'lucide-react';

export const BottomNav = ({ 
  activeZone, 
  onZoneChange 
}: { 
  activeZone: string; 
  onZoneChange: (zone: string) => void 
}) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4">
      <div className="max-w-md mx-auto relative">
        {/* Soft wide-dispersion shadow for depth */}
        <div className="absolute -inset-1 bg-black/5 blur-2xl rounded-3xl -z-10"></div>
        
        <div className="bg-white/70 backdrop-blur-[20px] border border-white/20 rounded-2xl flex items-center justify-between px-2 py-1 shadow-terra h-16">
          <NavItem 
            icon={<Home size={22} strokeWidth={1.5} />} 
            label="Home" 
            zone="Home" 
            active={activeZone === 'Home'} 
            onClick={() => onZoneChange('Home')}
          />
          <NavItem 
            icon={<Search size={22} strokeWidth={1.5} />} 
            label="Search" 
            zone="Search" 
            active={activeZone === 'Search'} 
            onClick={() => onZoneChange('Search')}
          />
          
          {/* Elevated Compose Hub */}
          <div className="relative -top-4 px-2">
            <div className="absolute inset-0 bg-tactical-emerald/20 blur-xl rounded-full scale-150"></div>
            <button 
              onClick={() => onZoneChange('Compose')}
              className={`relative flex items-center justify-center w-14 h-14 bg-tactical-emerald text-white rounded-2xl shadow-lg shadow-tactical-emerald/30 active:scale-95 transition-all duration-300 ${activeZone === 'Compose' ? 'ring-4 ring-tactical-emerald/20' : ''}`}
            >
              <Plus size={28} strokeWidth={2} />
            </button>
          </div>

          <NavItem 
            icon={<Bell size={22} strokeWidth={1.5} />} 
            label="Notifs" 
            zone="Notifications" 
            active={activeZone === 'Notifications'} 
            onClick={() => onZoneChange('Notifications')}
          />
          <NavItem 
            icon={<User size={22} strokeWidth={1.5} />} 
            label="Profile" 
            zone="Profile" 
            active={activeZone === 'Profile'} 
            onClick={() => onZoneChange('Profile')}
          />
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  zone: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon, label, zone, active = false, onClick }: NavItemProps) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 h-full relative group transition-all duration-300`}
  >
    {/* Active indicator bar */}
    {active && (
      <div className="absolute top-0 w-8 h-[2px] bg-tactical-emerald rounded-full"></div>
    )}
    
    <div className={`transition-all duration-300 ${active ? 'text-tactical-emerald' : 'text-slate-400 group-hover:text-slate-600'}`}>
      {icon}
    </div>
    
    <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${active ? 'text-tactical-emerald' : 'text-slate-400 group-hover:text-slate-600'}`}>
      {label}
    </span>
  </button>
);

