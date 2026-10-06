import React from 'react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { X, Users, Maximize2, Bed, Eye, Check, Calendar, Sparkles } from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBookRoom }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#160b24] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image Overlay */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160b24] via-[#160b24]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-[#0d0614]/80 text-white hover:text-[#d4af37] rounded-full border border-[#d4af37]/30 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest bg-[#0d0614]/80 px-2.5 py-1 rounded border border-[#d4af37]/30 inline-block mb-2">
                {room.category} Category
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                {room.name}
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-300 block">Nightly Rate</span>
              <span className="text-2xl font-bold font-serif gold-gradient-text">
                RM {room.priceMYR} <span className="text-xs text-slate-300 font-sans font-normal">/ night</span>
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 bg-[#0d0614] rounded-xl border border-[#d4af37]/20 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <Bed className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Bed Configuration</span>
                <strong>{room.bedType}</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-200">
              <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Capacity</span>
                <strong>Up to {room.capacity} Guests</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-200">
              <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Room Size</span>
                <strong>{room.sizeSqM} sq meters</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-200">
              <Eye className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">View</span>
                <strong>{room.view}</strong>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              About This Accomodation
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Included Amenities */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-3">
              Room Facilities & Premium Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-200 p-2 rounded-lg bg-[#211136]/50 border border-[#d4af37]/15">
                  <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Check-in policy notice */}
          <div className="text-xs text-slate-400 border-t border-[#d4af37]/20 pt-4 flex items-center justify-between">
            <span>Standard Check-in: {HOTEL_INFO.checkInTime} · Check-out: {HOTEL_INFO.checkOutTime}</span>
            <span className="text-[#d4af37]">Free Wi-Fi Included</span>
          </div>

          {/* Footer CTAs */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#d4af37]/30 text-xs font-semibold text-slate-300 hover:bg-[#211136] transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="gold-gradient-bg hover:brightness-110 text-[#0d0614] font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now (RM {room.priceMYR} / night)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
