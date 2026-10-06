import React from 'react';
import { PageId, Room } from '../types';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA, WHY_CHOOSE_US, NEARBY_ATTRACTIONS, MALAYSIAN_GALLERY_DATA } from '../data/hotelData';
import { 
  Calendar, ArrowRight, ShieldCheck, MapPin, Phone, Mail, Clock, Star, Wifi, 
  Car, Sparkles, Coffee, Briefcase, Award, CheckCircle2, Camera 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetail: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking, onViewRoomDetail }) => {
  const featuredRooms = ROOMS_DATA.filter((r) => r.featured).slice(0, 3);

  // Map icon name to component
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#d4af37]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#d4af37]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#d4af37]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#d4af37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <div className="space-y-24 pb-12">
      
      {/* SECTION 1: LUXURY HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-6">
        {/* Hero Background Image with Darkness Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.heroImage}
            alt="Z Hotel Ipoh Perak Facade"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614] via-[#0d0614]/70 to-[#0d0614]/40" />
          <div className="absolute inset-0 bg-[#160b24]/40 mix-blend-multiply" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 pt-12">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#160b24]/80 backdrop-blur-md border border-[#d4af37]/40 text-xs text-[#f3e5ab] shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Welcome to Z Hotel – Ipoh Perak, Malaysia</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight text-balance">
            Dark Purple Luxury & <br className="hidden sm:block" />
            <span className="gold-gradient-text">Golden Elegance</span> in Ipoh
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Experience serene comfort, sophisticated design, and world-class hospitality in Perak’s heritage capital. Ideally located on Jalan Sultan Abdul Jalil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto gold-gradient-bg hover:brightness-110 text-[#0d0614] font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-[#d4af37]/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-[#160b24]/80 hover:bg-[#211136] text-white font-medium text-base px-8 py-4 rounded-xl border border-[#d4af37]/40 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          {/* Quick Stats Trust Bar */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left border-t border-[#d4af37]/20">
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">4.9 ★</span>
              <span className="text-xs text-[#e2d19d]">Verified Guest Reviews</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">1 Gbps</span>
              <span className="text-xs text-[#e2d19d]">Complimentary Fiber Wi-Fi</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">24/7</span>
              <span className="text-xs text-[#e2d19d]">Concierge & Reception</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">Prime</span>
              <span className="text-xs text-[#e2d19d]">Jalan Sultan Abdul Jalil</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT Z HOTEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block">
                Boutique Hospitality in Perak
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-snug">
                An Oasis of Comfort & Regal Distinction in Ipoh
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>Z Hotel – Ipoh Perak</strong> is crafted for travelers who appreciate refined craftsmanship, quiet luxury, and seamless modern convenience. Set in Kampung Jawa, our hotel provides an intimate retreat surrounded by Ipoh’s celebrated culinary heritage, colonial architecture, and limestone hills.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Every detail — from our plush Egyptian cotton bedding and rainfall showers to our artisanal Ipoh White Coffee lounge — has been designed to elevate your stay whether you are visiting for business, a romantic escape, or a family getaway.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-[#160b24] border border-[#d4af37]/25 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-white text-xs">Heritage Location</h4>
                  <p className="text-[11px] text-slate-400">Walk to top Ipoh food spots</p>
                </div>
              </div>

              <div className="p-3 bg-[#160b24] border border-[#d4af37]/25 rounded-xl flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-white text-xs">Secured Parking</h4>
                  <p className="text-[11px] text-slate-400">Complimentary guest garage</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('facilities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#f3e5ab] hover:text-white transition-colors group"
              >
                <span>Learn More About Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Grid Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#d4af37]/30 shadow-2xl group">
                <img
                  src={HOTEL_INFO.receptionImage}
                  alt="Z Hotel Reception Desk"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#160b24] rounded-2xl border border-[#d4af37]/20 text-center">
                <Award className="w-6 h-6 text-[#d4af37] mx-auto mb-1" />
                <span className="font-serif font-bold text-white text-sm block">Top Rated Choice</span>
                <span className="text-[11px] text-slate-400">Ipoh Luxury Boutique Hotels</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 bg-[#211136] rounded-2xl border border-[#d4af37]/30">
                <span className="text-2xl font-serif font-bold gold-gradient-text block">100%</span>
                <span className="text-xs text-slate-300 font-medium block">Guest Satisfaction Focus</span>
                <p className="text-[11px] text-slate-400 mt-1">24-hour dedicated housekeeping & concierge care.</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#d4af37]/30 shadow-2xl group">
                <img
                  src={HOTEL_INFO.loungeImage}
                  alt="Z Hotel Refreshment Lounge"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: ROOMS & SUITES PREVIEW */}
      <section className="bg-[#160b24]/50 border-y border-[#d4af37]/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                Luxury Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Rooms & Suites Preview
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#f3e5ab] hover:underline"
            >
              <span>View All Categories ({ROOMS_DATA.length})</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-[#160b24] rounded-2xl border border-[#d4af37]/25 overflow-hidden shadow-xl hover:border-[#d4af37]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0d0614]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#f3e5ab] border border-[#d4af37]/40">
                      RM {room.priceMYR} / night
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                      {room.category} · {room.sizeSqM} m²
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {room.shortDescription}
                    </p>

                    <div className="pt-2 text-xs text-slate-400 space-y-1">
                      <div>Bed: <strong className="text-slate-200">{room.bedType}</strong></div>
                      <div>Capacity: <strong className="text-slate-200">Up to {room.capacity} Guests</strong></div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onViewRoomDetail(room)}
                    className="w-1/2 py-2.5 rounded-xl border border-[#d4af37]/30 text-xs font-semibold text-slate-300 hover:bg-[#211136] transition-colors text-center"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-1/2 gold-gradient-bg text-[#0d0614] font-bold text-xs py-2.5 rounded-xl hover:brightness-110 transition-all text-center"
                  >
                    Book Room
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: HOTEL FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block">
            Designed for Your Convenience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Hotel Facilities & Services
          </h2>
          <p className="text-sm text-slate-400">
            Enjoy modern luxury amenities curated to make your Ipoh experience seamless and relaxing.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-[#160b24] p-6 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#211136] border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getFacilityIcon(facility.iconName)}
                </div>
                {facility.badge && (
                  <span className="text-[10px] font-semibold text-[#f3e5ab] bg-[#211136] px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                    {facility.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-white mb-1">
                  {facility.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <ul className="space-y-1 text-[11px] text-slate-400 pt-2 border-t border-[#d4af37]/15">
                {facility.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4.5: MALAYSIAN HERITAGE & EXPERIENCE SHOWCASE */}
      <section className="bg-[#160b24]/80 border-y border-[#d4af37]/25 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#211136] border border-[#d4af37]/30 text-xs text-[#f3e5ab]">
                <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Malaysian Heritage & Local Culture</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Discover Heritage Ipoh & Local Flavors
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#f3e5ab] hover:underline"
            >
              <span>Explore Full Malaysian Gallery ({MALAYSIAN_GALLERY_DATA.length} Photos)</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

          {/* Featured Malaysian Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MALAYSIAN_GALLERY_DATA.filter(item => item.featured).slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer bg-[#0d0614] rounded-2xl border border-[#d4af37]/20 overflow-hidden shadow-xl hover:border-[#d4af37]/60 transition-all flex flex-col justify-between"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-[#160b24]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#f3e5ab] border border-[#d4af37]/30">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] text-[#d4af37]">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-sm group-hover:text-[#f3e5ab] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE Z HOTEL */}
      <section className="bg-gradient-to-b from-[#160b24] via-[#211136] to-[#160b24] py-16 border-y border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block">
              The Z Hotel Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Choose Z Hotel – Ipoh Perak
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-[#0d0614]/80 p-6 rounded-2xl border border-[#d4af37]/20 space-y-3 relative hover:border-[#d4af37]/60 transition-colors"
              >
                <div className="font-serif text-3xl font-bold gold-gradient-text">
                  0{index + 1}
                </div>
                <h3 className="font-serif font-bold text-base text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: LOCATION & CONTACT / BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#160b24] rounded-3xl border border-[#d4af37]/30 p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Location Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                  Prime Central Location
                </span>
                <h2 className="font-serif text-3xl font-bold text-white mb-2">
                  Z Hotel – Ipoh Perak
                </h2>
                <p className="text-sm text-slate-300">
                  8, Jalan Sultan Abdul Jalil, Kampung Jawa, 30450 Ipoh, Perak, Malaysia
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-slate-200">Phone: <strong>+60 5-253 0188</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-slate-200">Email: <strong>reservations@zhotelipoh.com.my</strong></span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                  Nearby Landmarks & Walking Distance:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {NEARBY_ATTRACTIONS.slice(0, 4).map((att, idx) => (
                    <div key={idx} className="bg-[#0d0614] p-2.5 rounded-lg border border-[#d4af37]/15">
                      <strong className="text-white block">{att.name}</strong>
                      <span className="text-[#f3e5ab] text-[11px]">{att.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="gold-gradient-bg hover:brightness-110 text-[#0d0614] font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-[#d4af37]/20 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl border border-[#d4af37]/30 text-xs font-semibold text-slate-200 hover:bg-[#211136] transition-colors"
                >
                  Full Location Details & Contact Page
                </button>
              </div>
            </div>

            {/* Right Map Visual Card */}
            <div className="lg:col-span-5 bg-[#0d0614] rounded-2xl border border-[#d4af37]/30 p-6 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center text-[#0d0614] mx-auto shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg">Ipoh Heritage Zone</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Centrally located near Jalan Sultan Abdul Jalil food district and Concubine Lane.
                </p>
              </div>

              <div className="h-44 rounded-xl overflow-hidden border border-[#d4af37]/20 relative">
                <img
                  src={HOTEL_INFO.heroImage}
                  alt="Z Hotel Ipoh Perak"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0614] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#160b24]/90 backdrop-blur-sm p-2 rounded-lg border border-[#d4af37]/30 text-[#f3e5ab] font-medium">
                  📍 8, Jalan Sultan Abdul Jalil, 30450 Ipoh
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
