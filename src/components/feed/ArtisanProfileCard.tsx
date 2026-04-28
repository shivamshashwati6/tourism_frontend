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
    <div className="glass-card rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-emerald-500/40">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-48">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-black to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <h3 className="text-lg font-bold text-white">{artisan.name}</h3>
              {artisan.isVerified && <CheckCircle2 size={16} className="text-emerald-400" />}
            </div>
            <div className="flex items-center gap-1 text-white/60 text-xs">
              <MapPin size={12} className="text-emerald-500" />
              <span>{artisan.location}</span>
            </div>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-2 py-1 rounded-lg flex items-center gap-1">
            <Star size={12} className="text-emerald-400 fill-emerald-400" />
            <span className="text-xs font-bold text-emerald-400">{artisan.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-white/70 line-clamp-2 mb-4 italic">
          "{artisan.bio}"
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-emerald-500/60 font-mono">
            {artisan.experienceCount} Experiences Active
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
            View Story
          </button>
        </div>
      </div>
    </div>
  );
};

export const RecommendedBadge = () => (
  <div className="flex items-center gap-1.5 bg-emerald-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(16,185,129,0.4)]">
    <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
    AI Preferred
  </div>
);
