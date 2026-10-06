import React, { useState } from 'react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { X, Calendar, Users, Coffee, Car, Clock, CheckCircle2, Download, Printer, ShieldCheck, Sparkles, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoomId }) => {
  if (!isOpen) return null;

  // Initial values
  const defaultRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(defaultRoom.id);
  const [checkIn, setCheckIn] = useState<string>(formatDateForInput(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDateForInput(dayAfter));
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [addOns, setAddOns] = useState({
    breakfast: true, // RM 25/day
    airportTransfer: false, // RM 35
    lateCheckOut: false, // RM 50
  });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const room = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculations in MYR
  const roomTotal = room.priceMYR * nights;
  const breakfastTotal = addOns.breakfast ? 25 * nights * guests : 0;
  const transferTotal = addOns.airportTransfer ? 35 : 0;
  const lateCheckOutTotal = addOns.lateCheckOut ? 50 : 0;

  const subtotal = roomTotal + breakfastTotal + transferTotal + lateCheckOutTotal;
  const tax = Math.round(subtotal * 0.06);
  const grandTotalMYR = subtotal + tax;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }
    const generatedRef = `ZH-IPH-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefNumber(generatedRef);
    setIsConfirmed(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-[#0] z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#160b24] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#211136] via-[#160b24] to-[#211136] p-6 border-b border-[#d4af37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center text-[#0d0614] font-serif font-black text-lg">
              Z
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-white">
                {isConfirmed ? 'Reservation Confirmed' : 'Reserve Your Stay at Z Hotel'}
              </h2>
              <p className="text-xs text-[#d4af37]">
                {HOTEL_INFO.address}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#211136] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isConfirmed ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-6">
            
            {/* Step 1: Room & Dates Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Room Choice */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
                  Select Room or Suite
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {ROOMS_DATA.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — RM {r.priceMYR} / night ({r.bedType}, max {r.capacity} guests)
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  min={formatDateForInput(today)}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  Check-Out Date ({nights} {nights === 1 ? 'Night' : 'Nights'})
                </label>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  required
                />
              </div>

              {/* Guests */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                >
                  {Array.from({ length: room.capacity }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Guest' : 'Guests'} (Capacity limit: {room.capacity})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Optional Add-ons */}
            <div className="bg-[#0d0614]/80 p-4 rounded-xl border border-[#d4af37]/20 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
                Enhance Your Stay (Optional Add-ons)
              </span>

              <label className="flex items-center justify-between text-sm cursor-pointer p-2 rounded-lg hover:bg-[#211136]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addOns.breakfast}
                    onChange={(e) => setAddOns({ ...addOns, breakfast: e.target.checked })}
                    className="w-4 h-4 accent-[#d4af37]"
                  />
                  <div>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Coffee className="w-4 h-4 text-[#d4af37]" />
                      Authentic Ipoh White Coffee & Pastry Breakfast
                    </span>
                    <span className="text-xs text-slate-400 block">Served daily in lounge</span>
                  </div>
                </div>
                <span className="text-xs text-[#f3e5ab] font-medium">
                  RM 25 / person / day
                </span>
              </label>

              <label className="flex items-center justify-between text-sm cursor-pointer p-2 rounded-lg hover:bg-[#211136]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addOns.airportTransfer}
                    onChange={(e) => setAddOns({ ...addOns, airportTransfer: e.target.checked })}
                    className="w-4 h-4 accent-[#d4af37]"
                  />
                  <div>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-[#d4af37]" />
                      Airport Shuttle Pickup / Drop-off
                    </span>
                    <span className="text-xs text-slate-400 block">Sultan Azlan Shah Airport (IPH)</span>
                  </div>
                </div>
                <span className="text-xs text-[#f3e5ab] font-medium">
                  RM 35 one-way
                </span>
              </label>

              <label className="flex items-center justify-between text-sm cursor-pointer p-2 rounded-lg hover:bg-[#211136]/50">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={addOns.lateCheckOut}
                    onChange={(e) => setAddOns({ ...addOns, lateCheckOut: e.target.checked })}
                    className="w-4 h-4 accent-[#d4af37]"
                  />
                  <div>
                    <span className="text-white font-medium flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                      Guaranteed Late Check-Out (2:00 PM)
                    </span>
                    <span className="text-xs text-slate-400 block">Standard is 12:00 PM</span>
                  </div>
                </div>
                <span className="text-xs text-[#f3e5ab] font-medium">
                  RM 50 flat
                </span>
              </label>
            </div>

            {/* Guest Contact Information */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
                Guest Contact Details
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (e.g., +60123456789) *"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] md:col-span-2"
                  required
                />
                <textarea
                  placeholder="Special requests or arrival estimated time (optional)"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] md:col-span-2"
                />
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="bg-[#211136]/80 p-4 rounded-xl border border-[#d4af37]/30 space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>{room.name} ({nights} nights x RM {room.priceMYR})</span>
                <span>RM {roomTotal}</span>
              </div>
              {addOns.breakfast && (
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Ipoh White Coffee Breakfast ({guests} guests x {nights} days)</span>
                  <span>RM {breakfastTotal}</span>
                </div>
              )}
              {addOns.airportTransfer && (
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Airport Shuttle Transfer</span>
                  <span>RM {transferTotal}</span>
                </div>
              )}
              {addOns.lateCheckOut && (
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Late Check-Out Extension (2:00 PM)</span>
                  <span>RM {lateCheckOutTotal}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-slate-400">
                <span>Malaysian Tourism Tax & Service Fee (6%)</span>
                <span>RM {tax}</span>
              </div>

              <div className="pt-2 border-t border-[#d4af37]/30 flex justify-between items-center text-base font-bold text-white">
                <span className="font-serif">Total Payable (MYR)</span>
                <span className="text-xl gold-gradient-text">RM {grandTotalMYR}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Pay at Hotel upon check-in · Free Cancellation</span>
              </div>
              <button
                type="submit"
                className="gold-gradient-bg hover:brightness-110 text-[#0d0614] font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 whitespace-nowrap"
              >
                Confirm Reservation (RM {grandTotalMYR})
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Slip Screen */
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37] animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-widest block mb-1">
                Booking Reference: <strong className="text-white text-sm">{refNumber}</strong>
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Thank You, {guestName}!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your luxury stay at <strong>Z Hotel – Ipoh Perak</strong> is confirmed. A confirmation copy has been sent to <strong>{guestEmail}</strong>.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="bg-[#0d0614] border border-[#d4af37]/40 rounded-xl p-6 text-left max-w-lg mx-auto space-y-3 relative">
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">{room.name}</h4>
                  <span className="text-xs text-[#d4af37]">{nights} Night(s) · {guests} Guest(s)</span>
                </div>
                <div className="w-12 h-12 bg-white rounded p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[8px] font-mono text-white tracking-tighter text-center">
                    QR-{refNumber}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block">Check-In:</span>
                  <strong className="text-white">{checkIn} ({HOTEL_INFO.checkInTime})</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Check-Out:</span>
                  <strong className="text-white">{checkOut} ({HOTEL_INFO.checkOutTime})</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Guest Name:</span>
                  <strong className="text-white">{guestName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Phone:</span>
                  <strong className="text-white">{guestPhone}</strong>
                </div>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/20 flex justify-between items-center text-sm">
                <span className="text-slate-300">Total Amount Due at Hotel:</span>
                <span className="font-bold text-[#f3e5ab] text-base">RM {grandTotalMYR}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl border border-[#d4af37]/40 text-sm font-medium text-[#e2d19d] hover:bg-[#211136] transition-colors flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-[#d4af37]" />
                Print Confirmation Slip
              </button>

              <button
                onClick={onClose}
                className="gold-gradient-bg text-[#0d0614] font-bold text-sm px-6 py-2.5 rounded-xl transition-all shadow-md"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
