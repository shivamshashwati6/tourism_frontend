'use client';

import React from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';


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
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden relative group transition-all duration-500 hover:border-tactical-emerald/40 shadow-sm hover:shadow-terra">

      
      <div className="relative h-56 overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-tactical-emerald/20 px-3 py-1.5 rounded-xl shadow-sm">
          <span className="text-tactical-emerald font-bold">₹{experience.price}</span>
          <span className="text-slate-500 text-[10px] ml-1 uppercase">/ Session</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            {experience.tags.map(tag => (
              <span key={tag} className="bg-tactical-emerald/10 backdrop-blur-md text-tactical-emerald px-2 py-0.5 rounded text-[9px] uppercase tracking-wider border border-tactical-emerald/20 font-bold">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">{experience.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-4 text-slate-500 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-tactical-emerald" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={14} className="text-tactical-emerald" />
            <span>{experience.category}</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 line-clamp-2 mb-5">
          {experience.description}
        </p>
        
        <button className="w-full group/btn relative flex items-center justify-center gap-2 bg-tactical-emerald/5 border border-tactical-emerald/20 hover:border-tactical-emerald hover:bg-tactical-emerald/10 text-tactical-emerald py-3 rounded-2xl transition-all duration-300">
          <span className="text-sm font-bold uppercase tracking-widest">Initiate Booking</span>
          <ArrowRight size={16} className="text-tactical-emerald transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
