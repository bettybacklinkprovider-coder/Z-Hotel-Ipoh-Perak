import React, { useState } from 'react';
import { Room } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { X, Users, Maximize2, Bed, Eye, Check, Calendar, Sparkles, ChevronLeft, ChevronRight, Images } from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose, onBookRoom }) => {
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  if (!room) return null;

  const imagesList = room.galleryImages && room.galleryImages.length > 0
    ? room.galleryImages
    : [room.image];

  const currentImg = imagesList[activeImageIdx] || room.image;

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#160b24] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image Overlay Carousel */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black group">
          <img
            src={currentImg}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160b24] via-[#160b24]/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-[#0d0614]/80 text-white hover:text-[#d4af37] rounded-full border border-[#d4af37]/30 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows for Room Photos */}
          {imagesList.length > 1 && (
            <>
              <button
                onClick={handlePrevImg}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0d0614]/70 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImg}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0d0614]/70 text-[#f3e5ab] hover:bg-[#211136] border border-[#d4af37]/40 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Photo Counter Badge */}
          <div className="absolute top-4 left-4 z-10 bg-[#0d0614]/80 text-[#f3e5ab] text-xs px-3 py-1 rounded-full border border-[#d4af37]/30 flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Photo {activeImageIdx + 1} of {imagesList.length}</span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 z-10">
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

        {/* Room Photo Thumbnails Strip */}
        {imagesList.length > 1 && (
          <div className="px-6 pt-4 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#d4af37]/30">
            {imagesList.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIdx(idx)}
                className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIdx === idx
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/50 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

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
