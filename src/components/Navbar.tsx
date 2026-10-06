import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Calendar, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Malaysian Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#160b24] via-[#211136] to-[#160b24] border-b border-[#d4af37]/20 py-1.5 px-4 text-xs text-center text-[#e2d19d] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse shrink-0" />
        <span>Best Rate Guarantee when booking directly · Luxury Stay in Ipoh, Perak</span>
        <a 
          href={`tel:${HOTEL_INFO.phone}`} 
          className="hidden md:inline-flex items-center gap-1 font-medium text-[#d4af37] hover:underline ml-2"
        >
          <Phone className="w-3 h-3" />
          {HOTEL_INFO.phone}
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d0614]/90 backdrop-blur-md shadow-2xl border-b border-[#d4af37]/30 py-3'
            : 'bg-[#0d0614]/70 backdrop-blur-sm border-b border-[#d4af37]/15 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            aria-label="Z Hotel Home"
          >
            <div className="w-10 h-10 rounded-lg gold-gradient-bg flex items-center justify-center text-[#0d0614] font-serif font-black text-xl shadow-md border border-[#f3e5ab]/50 group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#f3e5ab] transition-colors">
                Z HOTEL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-medium uppercase">
                Ipoh · Perak
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm font-medium transition-colors py-1 focus:outline-none whitespace-nowrap ${
                    isActive
                      ? 'text-[#f3e5ab] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient-bg rounded-full shadow-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-[#e2d19d] hover:text-[#f3e5ab] transition-colors px-3 py-2 rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/50"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="gold-gradient-bg hover:brightness-110 text-[#0d0614] font-medium text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-[#d4af37]/10 flex items-center gap-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#d4af37] rounded-lg border border-[#d4af37]/20 hover:bg-[#211136] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#160b24] border-b border-[#d4af37]/30 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#211136] text-[#f3e5ab] border-l-4 border-[#d4af37]'
                        : 'text-slate-200 hover:bg-[#211136]/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="text-xs text-[#d4af37] font-semibold">Active</span>}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#d4af37]/20 flex flex-col gap-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-[#e2d19d] bg-[#211136] border border-[#d4af37]/20"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
