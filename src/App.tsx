import React, { useState, useEffect } from 'react';
import { PageId, Room } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { RoomComparisonModal } from './components/RoomComparisonModal';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<Room | null>(null);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'rooms', 'facilities', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleViewRoomDetail = (room: Room) => {
    setSelectedRoomDetail(room);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0614] text-slate-100 selection:bg-[#d4af37] selection:text-[#0d0614]">
      
      {/* Navbar Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenBooking={handleOpenBooking}
            onViewRoomDetail={handleViewRoomDetail}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onOpenBooking={handleOpenBooking}
            onViewRoomDetail={handleViewRoomDetail}
            onOpenCompare={() => setCompareModalOpen(true)}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            onOpenBooking={handleOpenBooking}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenBooking={handleOpenBooking}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={handleOpenBooking}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoomId={selectedRoomId}
      />

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
      />

      {/* Room Comparison Modal */}
      <RoomComparisonModal
        isOpen={compareModalOpen}
        onClose={() => setCompareModalOpen(false)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
      />

    </div>
  );
}
