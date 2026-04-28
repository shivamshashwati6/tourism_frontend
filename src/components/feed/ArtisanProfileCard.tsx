'use client';

import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

interface ArtisanProfileCardProps {
  artisan: {
    id: string;
    name: string;
    category: string;
    location: string;
    bio: string;
    image: string;
    isVerified: boolean;
    rating: number;
    experienceCount: number;
  };
  isRecommended?: boolean;
}

export const ArtisanProfileCard = ({ artisan, isRecommended }: ArtisanProfileCardProps) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden relative group transition-all duration-500 hover:bg-white">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-48">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-lg font-bold text-white drop-shadow-md">{artisan.name}</h3>
              {artisan.isVerified && <CheckCircle2 size={16} className="text-solar-green" />}
            </div>
            <div className="flex items-center gap-1 text-white/90 text-xs font-medium">
              <MapPin size={12} className="text-solar-blue" />
              <span>{artisan.location}</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-white/20 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <Star size={12} className="text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-slate-700">{artisan.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="data-tile rounded-2xl p-4 mb-4">
          <p className="text-sm text-slate-600 line-clamp-2 italic">
            "{artisan.bio}"
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-technical">
            {artisan.experienceCount} Active Protocols
          </div>
          <button className="bg-solar-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            View Archive
          </button>
        </div>
      </div>
    </div>
  );
};

export const RecommendedBadge = () => (
  <div className="flex items-center gap-1.5 bg-solar-green text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-green-500/20">
    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
    Solar Verified
  </div>
);

