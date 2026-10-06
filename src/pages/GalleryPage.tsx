import React, { useState, useMemo } from 'react';
import { PageId, GalleryItem } from '../types';
import { MALAYSIAN_GALLERY_DATA } from '../data/hotelData';
import { Sparkles, MapPin, Camera, X, ChevronLeft, ChevronRight, Calendar, Search, Tag, Grid, Maximize, Share2, Layers } from 'lucide-react';

interface GalleryPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories = [
    'All',
    'Ipoh & Heritage',
    'Hotel Rooms & Suites',
    'Malaysian Food & Coffee',
    'Limestone Caves & Nature',
    'Boutique Amenities & Spa',
    'Nightlife & Twilight'
  ];

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    MALAYSIAN_GALLERY_DATA.forEach(item => {
      item.tags?.forEach(tag => set.add(tag));
    });
    return Array.from(set).slice(0, 12);
  }, []);

  const filteredItems = useMemo(() => {
    return MALAYSIAN_GALLERY_DATA.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesTag = !selectedTag || item.tags?.includes(selectedTag);
      const matchesSearch = !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

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

  const handleShare = (title: string) => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#160b24] border border-[#d4af37]/30 text-xs text-[#f3e5ab]">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Exclusive Visual Collection · {MALAYSIAN_GALLERY_DATA.length} High-Res Photos</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Malaysian Heritage & Hotel Gallery
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Immerse yourself in our complete photo collection — from opulent dark purple velvet suites and marble rain showers to historical Concubine Lane, limestone quarry lakes, and authentic Ipoh white coffee moments.
        </p>
      </div>

      {/* Controls & Filter Bar */}
      <div className="bg-[#160b24] p-5 rounded-2xl border border-[#d4af37]/30 space-y-4 shadow-xl">
        
        {/* Top Controls Row: Search Bar & View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#d4af37] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search photos (e.g. coffee, spa, cave, suite)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#0d0614] text-white placeholder-slate-400 text-xs rounded-xl border border-[#d4af37]/30 focus:outline-none focus:border-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Stats & View Mode Toggle */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
            <span className="text-xs text-[#f3e5ab] font-medium">
              Showing <strong>{filteredItems.length}</strong> of <strong>{MALAYSIAN_GALLERY_DATA.length}</strong> photos
            </span>

            <div className="flex items-center bg-[#0d0614] p-1 rounded-xl border border-[#d4af37]/30">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'grid' ? 'gold-gradient-bg text-[#0d0614] font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
                <span className="hidden md:inline text-[11px]">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('large')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'large' ? 'gold-gradient-bg text-[#0d0614] font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Large Showcase View"
              >
                <Layers className="w-4 h-4" />
                <span className="hidden md:inline text-[11px]">Showcase</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#d4af37]/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                selectedCategory === cat && !selectedTag
                  ? 'gold-gradient-bg text-[#0d0614] font-bold shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#0d0614] text-slate-300 border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Tags Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 text-[11px] flex items-center gap-1 shrink-0">
            <Tag className="w-3 h-3 text-[#d4af37]" /> Popular Tags:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                selectedTag === tag
                  ? 'bg-[#d4af37] text-[#0d0614] font-bold'
                  : 'bg-[#0d0614]/80 text-slate-300 border border-[#d4af37]/20 hover:border-[#d4af37]/40'
              }`}
            >
              #{tag}
            </button>
          ))}
          {(selectedTag || searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="text-[11px] text-[#d4af37] underline hover:text-[#f3e5ab] ml-2"
            >
              Reset Filters
            </button>
          )}
        </div>

      </div>

      {/* Gallery Photo Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#160b24] rounded-3xl border border-[#d4af37]/20 space-y-3">
          <Camera className="w-10 h-10 text-[#d4af37] mx-auto opacity-50" />
          <h3 className="font-serif text-xl font-bold text-white">No Photos Matched Your Filter</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try clearing your search terms or selecting a different category to view photos.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedTag(null);
              setSearchQuery('');
            }}
            className="gold-gradient-bg text-[#0d0614] font-bold text-xs px-5 py-2 rounded-xl mt-2"
          >
            Show All Gallery Photos
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "grid grid-cols-1 md:grid-cols-2 gap-8"
          }
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer bg-[#160b24] rounded-2xl border border-[#d4af37]/25 overflow-hidden shadow-xl hover:border-[#d4af37]/70 transition-all transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className={`relative overflow-hidden ${viewMode === 'large' ? 'h-80' : 'h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614] via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                <span className="absolute top-3 left-3 bg-[#0d0614]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#f3e5ab] border border-[#d4af37]/30">
                  {item.category}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(idx);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] opacity-0 group-hover:opacity-100 transition-opacity border border-[#d4af37]/30"
                  title="Expand photo"
                >
                  <Maximize className="w-3.5 h-3.5" />
                </button>

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

              <div className="p-4 space-y-3 bg-[#160b24]">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Photo Tags Row */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[10px] text-slate-400 bg-[#0d0614] px-2 py-0.5 rounded border border-[#d4af37]/15">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="text-[11px] text-[#f3e5ab] font-medium flex items-center justify-between pt-2 border-t border-[#d4af37]/15">
                  <span>Click to expand high-res photo</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-[#0d0614]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#160b24] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 max-h-[92vh] flex flex-col justify-between"
          >
            {/* Header Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => handleShare(activeLightboxItem.title)}
                className="p-2.5 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors flex items-center gap-1.5 text-xs px-3.5"
              >
                <Share2 className="w-4 h-4 text-[#d4af37]" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0d0614]/80 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Viewport */}
            <div className="relative h-[50vh] sm:h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="p-6 pt-2 space-y-3 bg-[#160b24] overflow-y-auto">
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

              {/* Tags list in Lightbox */}
              {activeLightboxItem.tags && activeLightboxItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeLightboxItem.tags.map((t) => (
                    <span key={t} className="text-xs text-[#f3e5ab] bg-[#0d0614] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#d4af37]/20">
                <span className="text-xs text-slate-400">
                  Photo {lightboxIndex! + 1} of {filteredItems.length}
                </span>

                <div className="flex items-center gap-3">
                  {(activeLightboxItem.category === 'Hotel Rooms & Suites' || activeLightboxItem.category === 'Boutique Amenities & Spa') && (
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
                    className="gold-gradient-bg text-[#0d0614] font-bold text-xs px-5 py-2.5 rounded-xl hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-[#d4af37]/20"
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

      {/* Bottom Photo Showcase Footer */}
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
