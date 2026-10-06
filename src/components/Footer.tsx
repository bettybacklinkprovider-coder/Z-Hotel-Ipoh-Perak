import React from 'react';
import { PageId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Mail, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'facilities', label: 'Facilities & Services' },
    { id: 'gallery', label: 'Malaysian Gallery' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  return (
    <footer className="bg-[#08030d] text-slate-300 border-t border-[#d4af37]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#211136]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-[#0d0614] font-serif font-black text-xl shadow-md">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wider text-white">
                  Z HOTEL
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#d4af37] font-medium uppercase">
                  Ipoh · Perak
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Experience modern luxury and serene comfort in the heritage heart of Ipoh, Perak.
              Designed with rich purple elegance and golden craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#e2d19d]">
              <span className="px-2.5 py-1 rounded bg-[#160b24] border border-[#d4af37]/30 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                4.9 ★ Guest Rating
              </span>
              <span className="px-2.5 py-1 rounded bg-[#160b24] border border-[#d4af37]/30">
                Official Website
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-[#d4af37]/30 pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2 group text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Hotel Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-[#d4af37]/30 pb-2 inline-block">
              Hotel Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span className="leading-snug">{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#f3e5ab] text-slate-200 transition-colors font-medium">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#f3e5ab] text-slate-300 transition-colors">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-[#e2d19d]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Check-in: {HOTEL_INFO.checkInTime} · Check-out: {HOTEL_INFO.checkOutTime}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Booking Guarantee */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4 border-b border-[#d4af37]/30 pb-2 inline-block">
              Direct Reservation
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Book directly on our official website for guaranteed lowest rates, flexible cancellation, and complimentary Ipoh White Coffee welcome package.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-[#e2d19d]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Zero Hidden Booking Fees</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#e2d19d]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Instant Digital Confirmation</span>
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="w-full gold-gradient-bg hover:brightness-110 text-[#0d0614] font-semibold text-xs py-2.5 px-4 rounded-lg shadow-md transition-all text-center uppercase tracking-wider"
            >
              Reserve Room Now
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved. Currency: Malaysian Ringgit (MYR / RM).
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Ipoh Travel Guide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
