import React, { useState } from 'react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS, FAQS } from '../data/hotelData';
import { 
  MapPin, Phone, Mail, Clock, Calendar, Send, CheckCircle2, 
  MessageSquare, ChevronDown, ChevronUp, Sparkles, Navigation 
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Inquiry',
    checkInDate: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] block">
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Contact Z Hotel – Ipoh Perak
        </h1>
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          We are here to assist with room reservations, special requests, and travel inquiries. Contact our 24/7 front desk team.
        </p>
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Direct Details & Check-In Times */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#160b24] p-8 rounded-3xl border border-[#d4af37]/30 space-y-6 shadow-2xl">
            <h2 className="font-serif text-2xl font-bold text-white border-b border-[#d4af37]/25 pb-3">
              Hotel Location & Details
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#211136] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <strong className="text-white block font-serif">Address:</strong>
                  <p className="text-slate-300 leading-snug mt-1">
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#211136] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <strong className="text-white block font-serif">Front Desk Phone:</strong>
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="text-[#f3e5ab] hover:underline font-medium text-base block"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#211136] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <strong className="text-white block font-serif">Email Address:</strong>
                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Check-In / Check-Out Policy Box */}
            <div className="p-4 bg-[#0d0614] rounded-2xl border border-[#d4af37]/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#d4af37] font-semibold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Check-In & Check-Out Schedule</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
                <div>
                  <span className="text-slate-500 block">Check-In Time:</span>
                  <strong className="text-white text-sm">3:00 PM</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Check-Out Time:</span>
                  <strong className="text-white text-sm">12:00 PM (Noon)</strong>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Early check-in and late check-out available upon request (subject to availability).
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full gold-gradient-bg text-[#0d0614] font-bold text-sm py-3.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/15"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay Directly</span>
            </button>

          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#160b24] p-8 rounded-3xl border border-[#d4af37]/30 shadow-2xl">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-300 mb-6">
              Have a special request or inquiry about group bookings? Fill out the form below and our team will get back to you promptly.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+60123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Room Inquiry">Room Inquiry</option>
                      <option value="Group Booking">Group / Event Booking</option>
                      <option value="Airport Shuttle">Airport Shuttle Pickup</option>
                      <option value="Special Assistance">Special Request / Assistance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can Z Hotel make your Ipoh stay unforgettable?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0d0614] border border-[#d4af37]/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-[#0d0614] font-bold text-sm py-3.5 rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Z Hotel</span>
                </button>
              </form>
            ) : (
              <div className="bg-[#0d0614] p-8 rounded-2xl border border-[#d4af37]/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our front desk team at Z Hotel – Ipoh Perak will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-xl bg-[#211136] text-xs text-[#f3e5ab] border border-[#d4af37]/30"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Map & Landmark Guide Section */}
      <div className="bg-[#160b24] p-8 rounded-3xl border border-[#d4af37]/30 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block">
              Ipoh Location & Map
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Centrally Located in Kampung Jawa, Ipoh
            </h2>
          </div>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#211136] border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab] hover:bg-[#0d0614] transition-colors"
          >
            <Navigation className="w-4 h-4 text-[#d4af37]" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Interactive Simulated Map Box */}
        <div className="bg-[#0d0614] rounded-2xl border border-[#d4af37]/25 p-6 relative overflow-hidden text-center space-y-4">
          <div className="max-w-md mx-auto space-y-2">
            <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-[#0d0614] mx-auto shadow-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Z Hotel – Ipoh Perak</h3>
            <p className="text-xs text-slate-300">
              8, Jalan Sultan Abdul Jalil, Kampung Jawa, 30450 Ipoh, Perak, Malaysia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-[#d4af37]/15 text-left text-xs">
            {NEARBY_ATTRACTIONS.map((att, i) => (
              <div key={i} className="p-3 bg-[#160b24] rounded-xl border border-[#d4af37]/20">
                <span className="text-[10px] text-[#d4af37] font-semibold uppercase block">{att.category}</span>
                <strong className="text-white block font-serif mt-0.5">{att.name}</strong>
                <span className="text-slate-400 block text-[11px]">{att.distance}</span>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{att.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] block">
            Common Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#160b24] border border-[#d4af37]/25 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-white hover:text-[#f3e5ab] transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#d4af37] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#d4af37] shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-[#d4af37]/15 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
