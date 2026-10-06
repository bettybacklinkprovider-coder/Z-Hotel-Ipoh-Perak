import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { MALAYSIAN_GALLERY_DATA } from '../data/hotelData';
import { Sparkles, MapPin, Camera, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface GalleryPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Ipoh & Heritage',
    'Hotel Rooms & Suites',
    'Malaysian Food & Coffee',
    'Limestone Caves & Nature'
  ];

  const filteredItems = selectedCategory === 'All'
    ? MALAYSIAN_GALLERY_DATA
    : MALAYSIAN_GALLERY_DATA.filter(item => item.category === selectedCategory);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160b24] border border-[#d4af37]/30 text-xs text-[#f3e5ab]">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Visual Showcase · Ipoh, Perak, Malaysia</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Malaysian Heritage & Hotel Gallery
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Explore the rich visual story of Z Hotel Ipoh Perak — from our dark purple and gold boutique suites to famous Ipoh Old Town heritage streets, limestone karst temples, and authentic Malaysian coffee delicacies.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#d4af37]/20 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
              selectedCategory === cat
                ? 'gold-gradient-bg text-[#0d0614] font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-[#160b24] text-slate-300 border border-[#d4af37]/20 hover:border-[#d4af37]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Photo Masonry/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group cursor-pointer bg-[#160b24] rounded-2xl border border-[#d4af37]/25 overflow-hidden shadow-xl hover:border-[#d4af37]/60 transition-all transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <span className="absolute top-3 left-3 bg-[#0d0614]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#f3e5ab] border border-[#d4af37]/30">
                {item.category}
              </span>

              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <div className="flex items-center gap-1 text-[11px] text-[#d4af37] font-medium">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="font-serif font-bold text-white text-base group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-4 space-y-2 bg-[#160b24]">
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                {item.description}
              </p>
              <div className="text-[11px] text-[#f3e5ab] font-medium flex items-center justify-between pt-1">
                <span>Click to expand high-res photo</span>
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#0d0614]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#160b24] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl space-y-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-6 pt-2 space-y-3 bg-[#160b24]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider bg-[#0d0614] px-3 py-1 rounded-full border border-[#d4af37]/30">
                  {activeLightboxItem.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{activeLightboxItem.location}</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-bold text-white">
                {activeLightboxItem.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#d4af37]/20">
                <span className="text-xs text-slate-400">
                  Photo {lightboxIndex! + 1} of {filteredItems.length}
                </span>

                <div className="flex items-center gap-3">
                  {activeLightboxItem.category === 'Hotel Rooms & Suites' && (
                    <button
                      onClick={() => {
                        setLightboxIndex(null);
                        onNavigate('rooms');
                      }}
                      className="px-4 py-2 rounded-xl bg-[#211136] text-xs font-semibold text-[#f3e5ab] border border-[#d4af37]/40 hover:bg-[#0d0614] transition-colors"
                    >
                      View All Rooms
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onOpenBooking();
                    }}
                    className="gold-gradient-bg text-[#0d0614] font-bold text-xs px-5 py-2 rounded-xl hover:brightness-110 transition-all flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Your Stay in Ipoh</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Bottom Cultural Teaser Banner */}
      <div className="bg-[#160b24] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
          Plan Your Ipoh Itinerary
        </span>
        <h2 className="font-serif text-3xl font-bold text-white">
          Experience Authentic Malaysian Warmth & Heritage
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Our concierge team provides personalized Ipoh food map recommendations, private transportation arrangements, and insider tips for Concubine Lane & Kek Lok Tong cave temples.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenBooking()}
            className="gold-gradient-bg text-[#0d0614] font-bold text-sm px-8 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#d4af37]/20"
          >
            Reserve Your Room at Z Hotel Ipoh
          </button>
        </div>
      </div>

    </div>
  );
};
