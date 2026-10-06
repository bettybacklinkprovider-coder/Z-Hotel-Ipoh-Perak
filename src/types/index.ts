export type PageId = 'home' | 'rooms' | 'facilities' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: 'Deluxe' | 'Suite' | 'Penthouse' | 'Twin';
  priceMYR: number;
  image: string;
  bedType: string;
  capacity: number;
  sizeSqM: number;
  description: string;
  shortDescription: string;
  amenities: string[];
  featured?: boolean;
  view: string;
}

export interface Facility {
  id: string;
  name: string;
  iconName: string;
  description: string;
  detailedDescription: string;
  image?: string;
  badge?: string;
  features: string[];
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  addOns: {
    breakfast: boolean; // RM 25 / day
    airportTransfer: boolean; // RM 35
    lateCheckOut: boolean; // RM 50
  };
  referenceNumber?: string;
}

export interface Attraction {
  name: string;
  distance: string;
  category: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ipoh & Heritage' | 'Hotel Rooms & Suites' | 'Malaysian Food & Coffee' | 'Limestone Caves & Nature';
  location: string;
  description: string;
  image: string;
  featured?: boolean;
}
