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
  };
}

export const ArtisanProfileCard = ({ artisan }: ArtisanProfileCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-tactical-emerald/40 shadow-sm hover:shadow-terra">

      
      <div className="relative h-48">
        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-slate-800 bg-white/40 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/40 shadow-sm w-fit">
              <MapPin size={14} className="text-tactical-emerald" />
              <span className="text-xs font-bold tracking-tight">{artisan.location}</span>
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
        
        <div className="flex justify-end pt-2">
          <button className="flex items-center gap-2 bg-white border border-tactical-emerald/30 hover:border-tactical-emerald px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md group/btn">
            {artisan.isVerified ? (
              <CheckCircle2 size={14} className="text-tactical-emerald" />
            ) : (
              <Star size={14} className="text-tactical-emerald" />
            )}
            <span className="text-[12px] font-semibold uppercase tracking-wider text-slate-900 font-mono">
              {artisan.name}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};


