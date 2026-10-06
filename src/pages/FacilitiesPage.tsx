import React from 'react';
import { PageId } from '../types';
import { FACILITIES_DATA, HOTEL_INFO } from '../data/hotelData';
import { 
  Wifi, Car, Clock, Sparkles, Coffee, Briefcase, CheckCircle2, Phone, Calendar 
} from 'lucide-react';

interface FacilitiesPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: PageId) => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onOpenBooking, onNavigate }) => {

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-7 h-7 text-[#d4af37]" />;
      case 'Car': return <Car className="w-7 h-7 text-[#d4af37]" />;
      case 'Clock': return <Clock className="w-7 h-7 text-[#d4af37]" />;
      case 'Sparkles': return <Sparkles className="w-7 h-7 text-[#d4af37]" />;
      case 'Coffee': return <Coffee className="w-7 h-7 text-[#d4af37]" />;
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-[#d4af37]" />;
      default: return <Sparkles className="w-7 h-7 text-[#d4af37]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
          Tailored Hotel Services
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Facilities & Guest Services
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          From high-speed connectivity to authentic Ipoh white coffee tastings and 24-hour concierge care, every service at Z Hotel is executed with excellence.
        </p>
      </div>

      {/* Main Showcase Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#160b24] p-8 rounded-3xl border border-[#d4af37]/30 shadow-2xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d0614] border border-[#d4af37]/30 text-xs text-[#f3e5ab]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Signature Guest Privilege</span>
          </div>

          <h2 className="font-serif text-3xl font-bold text-white">
            Ipoh White Coffee & Refreshment Lounge
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Unwind in our dark purple and gold velvet lounge after exploring Ipoh’s vibrant streets. Enjoy freshly brewed authentic local white coffee, premium tea blends, and artisanal Malaysian pastries served daily.
          </p>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Complimentary welcome set for all direct reservations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>High-speed Wi-Fi and quiet lounge workstations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              <span>Open daily from 7:00 AM to 10:00 PM</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="gold-gradient-bg text-[#0d0614] font-bold text-xs px-6 py-3 rounded-xl hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay with Lounge Perks</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#d4af37]/30 shadow-xl h-80">
          <img
            src={HOTEL_INFO.loungeImage}
            alt="Z Hotel Lounge Bar"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Comprehensive Facilities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FACILITIES_DATA.map((facility) => (
          <div
            key={facility.id}
            className="bg-[#160b24] p-8 rounded-2xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all space-y-6 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#211136] border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getFacilityIcon(facility.iconName)}
                </div>
                {facility.badge && (
                  <span className="text-xs font-semibold text-[#f3e5ab] bg-[#211136] px-3 py-1 rounded-full border border-[#d4af37]/30">
                    {facility.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  {facility.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {facility.detailedDescription}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#d4af37]/15 space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                Feature Highlights:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {facility.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Additional Services Banner */}
      <div className="bg-[#211136] border border-[#d4af37]/30 rounded-2xl p-8 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-white">
          Need Special Arrangements or Airport Transfer?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Our front desk team is delighted to assist with private taxi arrangements to Sultan Azlan Shah Airport (IPH), early morning luggage drops, or custom room setup for anniversaries.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="px-6 py-3 rounded-xl border border-[#d4af37]/40 text-xs font-bold text-[#f3e5ab] hover:bg-[#160b24] transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call Concierge: {HOTEL_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="gold-gradient-bg text-[#0d0614] font-bold text-xs px-6 py-3 rounded-xl hover:brightness-110 transition-all"
          >
            Contact Concierge Desk
          </button>
        </div>
      </div>

    </div>
  );
};
