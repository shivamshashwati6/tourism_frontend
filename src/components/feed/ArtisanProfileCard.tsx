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
    <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-tactical-emerald/40 shadow-sm hover:shadow-terra">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-48">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-lg font-bold text-slate-900">{artisan.name}</h3>
              {artisan.isVerified && <CheckCircle2 size={16} className="text-tactical-emerald" />}
            </div>
            <div className="flex items-center gap-1 text-slate-600 text-xs">
              <MapPin size={12} className="text-tactical-emerald" />
              <span>{artisan.location}</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-md border border-tactical-emerald/20 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <Star size={12} className="text-tactical-emerald fill-tactical-emerald" />
            <span className="text-xs font-bold text-tactical-emerald">{artisan.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 italic">
          "{artisan.bio}"
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-tactical-emerald/80 font-mono">
            {artisan.experienceCount} Experiences Active
          </div>
          <button className="bg-tactical-emerald hover:bg-tactical-accent text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-tactical-emerald/20">
            View Story
          </button>
        </div>
      </div>
    </div>
  );
};

export const RecommendedBadge = () => (
  <div className="flex items-center gap-1.5 bg-tactical-emerald text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg shadow-tactical-emerald/30">
    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
    AI Preferred
  </div>
);
