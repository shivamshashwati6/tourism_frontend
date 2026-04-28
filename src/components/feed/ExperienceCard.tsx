'use client';

import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { RecommendedBadge } from './ArtisanProfileCard';

interface ExperienceCardProps {
  experience: {
    id: string;
    title: string;
    category: string;
    price: number;
    duration: string;
    image: string;
    description: string;
    tags: string[];
  };
  isRecommended?: boolean;
}

export const ExperienceCard = ({ experience, isRecommended }: ExperienceCardProps) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-emerald-500/40">
      {isRecommended && (
        <div className="absolute top-4 left-4 z-10">
          <RecommendedBadge />
        </div>
      )}
      
      <div className="relative h-56 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-black via-tactical-black/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
          <span className="text-emerald-400 font-bold">₹{experience.price}</span>
          <span className="text-white/40 text-[10px] ml-1 uppercase">/ Session</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            {experience.tags.map(tag => (
              <span key={tag} className="bg-white/10 backdrop-blur-md text-white/80 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider border border-white/5">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">{experience.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-4 text-white/50 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-emerald-500" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-emerald-500" />
            <span>{experience.category}</span>
          </div>
        </div>

        <p className="text-sm text-white/60 line-clamp-2 mb-5">
          {experience.description}
        </p>
        
        <button className="w-full group/btn relative flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white py-3 rounded-2xl transition-all duration-300">
          <span className="text-sm font-bold uppercase tracking-widest">Initiate Booking</span>
          <ArrowRight size={16} className="text-emerald-500 transition-transform group-hover/btn:translate-x-1" />
          
          {/* Subtle scanning animation line */}
          <div className="absolute bottom-0 left-0 h-[1px] bg-emerald-500/50 w-0 group-hover/btn:w-full transition-all duration-500"></div>
        </button>
      </div>
    </div>
  );
};
