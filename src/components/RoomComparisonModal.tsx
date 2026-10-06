import React from 'react';
import { ROOMS_DATA } from '../data/hotelData';
import { X, Check, Calendar } from 'lucide-react';

interface RoomComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomComparisonModal: React.FC<RoomComparisonModalProps> = ({ isOpen, onClose, onBookRoom }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#160b24] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden my-8 p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d4af37]/30 pb-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">Compare Rooms & Suites</h2>
            <p className="text-xs text-[#d4af37]">Find the perfect accommodation for your Ipoh stay</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-[#211136] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#d4af37]/30">
                <th className="p-3 text-slate-400 font-medium w-36">Feature</th>
                {ROOMS_DATA.map((r) => (
                  <th key={r.id} className="p-3 min-w-[160px] text-center bg-[#211136]/40 rounded-t-lg">
                    <span className="font-serif font-bold text-white text-sm block">{r.name}</span>
                    <span className="gold-gradient-text text-base font-bold block mt-1">RM {r.priceMYR} / night</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4af37]/15">
              
              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Category</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-200">{r.category}</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Bed Type</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-200">{r.bedType}</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Max Capacity</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-200">{r.capacity} Guests</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Room Area</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-200">{r.sizeSqM} m²</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">View</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-300 text-[11px]">{r.view}</td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">High-Speed Fiber Wi-Fi</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-emerald-400">
                    <Check className="w-4 h-4 mx-auto" />
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Balcony / Terrace</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-300">
                    {r.category === 'Suite' || r.category === 'Penthouse' ? (
                      <Check className="w-4 h-4 mx-auto text-emerald-400" />
                    ) : (
                      '—'
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Marble Bathtub</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center text-slate-300">
                    {r.category === 'Suite' || r.category === 'Penthouse' ? (
                      <Check className="w-4 h-4 mx-auto text-emerald-400" />
                    ) : (
                      '—'
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-medium text-[#d4af37]">Action</td>
                {ROOMS_DATA.map((r) => (
                  <td key={r.id} className="p-3 text-center">
                    <button
                      onClick={() => {
                        onClose();
                        onBookRoom(r.id);
                      }}
                      className="w-full gold-gradient-bg text-[#0d0614] font-bold text-xs py-2 px-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book Now</span>
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
