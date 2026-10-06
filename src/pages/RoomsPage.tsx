import React, { useState } from 'react';
import { Room } from '../types';
import { ROOMS_DATA } from '../data/hotelData';
import { Users, Bed, Maximize2, Check, Eye, Calendar, Sparkles, Scale } from 'lucide-react';

interface RoomsPageProps {
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetail: (room: Room) => void;
  onOpenCompare: () => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking, onViewRoomDetail, onOpenCompare }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Deluxe', 'Suite', 'Penthouse', 'Twin'];

  const filteredRooms = filter === 'All' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
          Exclusive Accommodations
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Rooms & Suites at Z Hotel
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          Designed with dark purple velvet undertones, champagne gold accents, and state-of-the-art room controls. Select your ideal stay in Ipoh.
        </p>
      </div>

      {/* Filter Tabs & Compare Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-6">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all ${
                filter === cat
                  ? 'gold-gradient-bg text-[#0d0614] font-bold shadow-md'
                  : 'bg-[#160b24] text-slate-300 border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              {cat === 'All' ? 'All Accommodations' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Compare Rooms Trigger */}
        <button
          onClick={onOpenCompare}
          className="px-4 py-2 rounded-xl bg-[#211136] border border-[#d4af37]/40 text-xs font-medium text-[#f3e5ab] hover:bg-[#160b24] transition-colors flex items-center gap-2"
        >
          <Scale className="w-4 h-4 text-[#d4af37]" />
          <span>Compare All Rooms</span>
        </button>

      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-[#160b24] rounded-2xl border border-[#d4af37]/25 overflow-hidden shadow-2xl hover:border-[#d4af37]/60 transition-all group flex flex-col justify-between"
          >
            <div>
              {/* Room Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden cursor-pointer" onClick={() => onViewRoomDetail(room)}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160b24] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 bg-[#0d0614]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#f3e5ab] border border-[#d4af37]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>{room.category} Class</span>
                  {room.galleryImages && room.galleryImages.length > 1 && (
                    <span className="text-[10px] text-slate-300 ml-1 bg-[#211136] px-1.5 py-0.5 rounded-full border border-[#d4af37]/20">
                      {room.galleryImages.length} Photos
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 bg-[#0d0614]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-white border border-[#d4af37]/40 font-serif">
                  <span className="gold-gradient-text">RM {room.priceMYR}</span> <span className="text-[10px] text-slate-300 font-sans font-normal">/ night</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="font-serif text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors drop-shadow">
                    {room.name}
                  </h2>
                </div>
              </div>

              {/* Room Description & Specs */}
              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {room.description}
                </p>

                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-[#0d0614] rounded-xl border border-[#d4af37]/20 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Bed className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="truncate">{room.bedType}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Users className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>Up to {room.capacity} Guests</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Maximize2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{room.sizeSqM} m²</span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div>
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block mb-2">
                    Included Amenities:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-0 flex items-center justify-between gap-4">
              <button
                onClick={() => onViewRoomDetail(room)}
                className="w-1/2 py-3 rounded-xl border border-[#d4af37]/30 text-xs font-semibold text-slate-200 hover:bg-[#211136] transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>View Full Details</span>
              </button>

              <button
                onClick={() => onOpenBooking(room.id)}
                className="w-1/2 gold-gradient-bg text-[#0d0614] font-bold text-xs py-3 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#d4af37]/15"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Now (RM {room.priceMYR})</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
