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
    <div className="glass-card rounded-3xl overflow-hidden relative group transition-all duration-500 hover:bg-white">
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl shadow-sm">
          <span className="text-solar-blue font-bold">₹{experience.price}</span>
          <span className="text-slate-500 text-[10px] ml-1 uppercase font-mono">/ Session</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            {experience.tags.map(tag => (
              <span key={tag} className="bg-solar-blue/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[9px] uppercase tracking-wider border border-white/10 font-bold">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white leading-tight drop-shadow-md">{experience.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-4 text-slate-400 text-xs font-mono uppercase tracking-tighter">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-solar-blue" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-solar-green" />
            <span>{experience.category}</span>
          </div>
        </div>

        <div className="data-tile rounded-2xl p-4 mb-5">
          <p className="text-sm text-slate-600 line-clamp-2">
            {experience.description}
          </p>
        </div>
        
        <button className="w-full group/btn relative flex items-center justify-center gap-2 bg-slate-50 border border-black/[0.03] hover:border-solar-blue/50 hover:bg-solar-blue/5 text-slate-700 py-3.5 rounded-2xl transition-all duration-300 active:scale-[0.98]">
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Initiate Booking</span>
          <ArrowRight size={16} className="text-solar-blue transition-transform group-hover/btn:translate-x-1" />
          
          {/* Subtle scanning animation line */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-solar-blue/30 w-0 group-hover/btn:w-full transition-all duration-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

