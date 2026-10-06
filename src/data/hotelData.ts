import { Room, Facility, Attraction, GalleryItem } from '../types';

import facadeGeneratedImg from '../assets/images/malaysian_z_hotel_1791281024596.jpg';
import loungeGeneratedImg from '../assets/images/ipoh_coffee_lounge_1791281041163.jpg';
import facadeImg from '../assets/images/z_hotel_facade_1791280124933.jpg';
import deluxeImg from '../assets/images/z_hotel_deluxe_1791280140830.jpg';
import suiteImg from '../assets/images/z_hotel_suite_1791280155379.jpg';
import penthouseImg from '../assets/images/z_hotel_penthouse_1791280172075.jpg';
import receptionImg from '../assets/images/z_hotel_reception_1791280198729.jpg';
import spaBathroomImg from '../assets/images/z_hotel_spa_bathroom_1791281952816.jpg';
import buffetImg from '../assets/images/z_hotel_buffet_1791281973679.jpg';

export const HOTEL_INFO = {
  name: "Z Hotel – Ipoh Perak",
  tagline: "Unrivaled Elegance & Comfort in the Heart of Heritage Ipoh",
  phone: "+60 5-253 0188",
  whatsapp: "+60152530188",
  email: "reservations@zhotelipoh.com.my",
  address: "8, Jalan Sultan Abdul Jalil, Kampung Jawa, 30450 Ipoh, Perak, Malaysia",
  city: "Ipoh",
  state: "Perak",
  postalCode: "30450",
  country: "Malaysia",
  currencySymbol: "RM",
  currencyCode: "MYR",
  checkInTime: "3:00 PM",
  checkOutTime: "12:00 PM",
  rating: 4.9,
  reviewsCount: 428,
  heroImage: facadeGeneratedImg || facadeImg,
  receptionImage: receptionImg,
  loungeImage: loungeGeneratedImg,
  spaImage: spaBathroomImg,
  buffetImage: buffetImg
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    category: 'Deluxe',
    priceMYR: 180,
    image: deluxeImg,
    galleryImages: [
      deluxeImg,
      spaBathroomImg,
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    bedType: '1 Plush King Bed',
    capacity: 2,
    sizeSqM: 28,
    view: 'Ipoh Cityscape & Heritage Park',
    shortDescription: 'Modern luxury crafted for business travelers & couples seeking serene comfort.',
    description: 'Our Deluxe Double Room blends dark velvet purples with warm gold accents. Features premium Egyptian cotton linens, a spa-inspired rain shower, silent climate control, and a dedicated workspace.',
    amenities: [
      'High-Speed Fiber Wi-Fi',
      '50" Smart TV with Netflix',
      'Rainfall Shower & Luxury Toiletries',
      'Mini Bar & Coffee/Tea Station',
      'In-Room Electronic Safe',
      'Individual Climate Control',
      'Work Desk & Ergonomic Chair'
    ],
    featured: true
  },
  {
    id: 'superior-twin',
    name: 'Superior Twin Room',
    category: 'Twin',
    priceMYR: 210,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      deluxeImg,
      spaBathroomImg,
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    bedType: '2 Single Beds',
    capacity: 2,
    sizeSqM: 30,
    view: 'Quiet Courtyard & City Skyline',
    shortDescription: 'Ideal for friends or corporate partners desiring spacious dual-bed luxury.',
    description: 'Designed with maximum space efficiency and regal aesthetic. Offers twin single beds with ultra-comfortable mattresses, ambient bedside touch controls, and high-speed connectivity.',
    amenities: [
      'High-Speed Fiber Wi-Fi',
      '50" Smart TV',
      'Walk-in Glass Rain Shower',
      'In-Room Coffee & Tea Maker',
      'Electronic Safe',
      'Soundproofed Double-Glazed Windows',
      'Daily Housekeeping Service'
    ]
  },
  {
    id: 'executive-king-suite',
    name: 'Executive King Suite',
    category: 'Suite',
    priceMYR: 280,
    image: suiteImg,
    galleryImages: [
      suiteImg,
      spaBathroomImg,
      loungeGeneratedImg,
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80'
    ],
    bedType: '1 Super King Bed',
    capacity: 3,
    sizeSqM: 42,
    view: 'Panoramic Ipoh Skyline & Balcony View',
    shortDescription: 'Spacious suite with private lounge area, executive workspace, and private balcony.',
    description: 'Elevate your stay in our Executive King Suite. Features a separated lounge area with plush velvet seating, an espresso machine, marble vanity bathroom, and panoramic city views from your private balcony.',
    amenities: [
      'Private Balcony with City View',
      'Separated Velvet Lounge Area',
      'Nespresso Espresso Coffee Machine',
      '55" 4K Smart TV with Soundbar',
      'Deep Soaking Marble Bathtub',
      'Complimentary Ipoh White Coffee Welcome Set',
      'Fluffy Bathrobes & Premium Slippers'
    ],
    featured: true
  },
  {
    id: 'premier-family-suite',
    name: 'Premier Family Suite',
    category: 'Suite',
    priceMYR: 380,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      suiteImg,
      spaBathroomImg,
      buffetImg,
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    bedType: '2 Queen Beds',
    capacity: 4,
    sizeSqM: 55,
    view: 'Ipoh Mountain Karst & City View',
    shortDescription: 'Expansive multi-bed suite perfect for family holidays and group getaways.',
    description: 'Generously proportioned suite accommodating up to 4 guests in complete luxury. Includes two queen beds, extra seating area, double vanity bathroom, and child-friendly safety features.',
    amenities: [
      'Two Comfortable Queen Beds',
      'Spacious Family Living Area',
      'Double Sink Marble Vanity',
      '55" Smart TV & Streaming Hub',
      'Mini Refrigerator & Snack Counter',
      'Interconnected Room Option',
      'High-Speed Wi-Fi for Multiple Devices'
    ],
    featured: true
  },
  {
    id: 'royal-penthouse-suite',
    name: 'Royal Penthouse Suite',
    category: 'Penthouse',
    priceMYR: 580,
    image: penthouseImg,
    galleryImages: [
      penthouseImg,
      spaBathroomImg,
      facadeGeneratedImg,
      loungeGeneratedImg,
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    bedType: '1 Super King Bed + 1 Queen Bed',
    capacity: 5,
    sizeSqM: 85,
    view: 'Top-Floor 360° Ipoh Limestone Hills & Terrace View',
    shortDescription: 'The pinnacle of luxury at Z Hotel. Private terrace, jacuzzi tub & personalized concierge.',
    description: 'Commanding the highest floor of Z Hotel, the Royal Penthouse Suite is an opulent sanctuary. Features a private outdoor terrace, marble bathroom with hydrotherapy jacuzzi tub, complimentary evening refreshments, and dedicated butler service.',
    amenities: [
      'Private Outdoor Sun Terrace',
      'Hydrotherapy Jacuzzi & Rain Shower',
      'Complimentary Daily Gourmet Breakfast',
      'Evening Refreshments & Lounge Access',
      '65" OLED Smart Home Entertainment',
      'Bespoke Gold-Accented Wardrobe',
      'VIP Airport Shuttle Transfer Included'
    ],
    featured: true
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'wifi',
    name: 'Ultra High-Speed Wi-Fi',
    iconName: 'Wifi',
    description: 'Seamless 1 Gbps fiber optic wireless network across all rooms, suites, and public areas.',
    detailedDescription: 'Whether streaming 4K media, conducting video calls, or browsing, our dedicated enterprise optical fiber ensures lightning-fast connectivity with zero dead zones.',
    badge: 'Complimentary 1 Gbps',
    features: ['Dedicated access point per room', 'Secure encrypted guest network', 'Unlimited device connections']
  },
  {
    id: 'parking',
    name: 'Secured Covered Parking',
    iconName: 'Car',
    description: 'On-site covered garage with 24/7 CCTV surveillance and touchless keycard access.',
    detailedDescription: 'Enjoy peace of mind with our private indoor parking facilities located directly beneath the hotel lobby with direct elevator access to guest floors.',
    badge: 'Free for Guests',
    features: ['24/7 Security & CCTV', 'EV Charging Stations', 'Direct elevator lobby access']
  },
  {
    id: 'reception',
    name: '24/7 Concierge & Reception',
    iconName: 'Clock',
    description: 'Round-the-clock professional front desk staff ready to assist with check-ins, taxis, and Ipoh recommendations.',
    detailedDescription: 'Our multilingual concierge team brings genuine Malaysian hospitality. From organizing private food tours to arranging late-night check-ins, we are at your service 24 hours a day.',
    image: receptionImg,
    badge: '24 Hours Duty',
    features: ['Express Keyless Check-in', 'Tour & Taxi Bookings', 'Multilingual Hospitality Team']
  },
  {
    id: 'housekeeping',
    name: 'Daily Premium Housekeeping',
    iconName: 'Sparkles',
    description: 'Meticulous daily room sanitization, towel refreshment, and evening turn-down service.',
    detailedDescription: 'Our housekeeping team enforces stringent eco-luxury hygiene standards. Rest easy with crisp sanitized linens, hypoallergenic pillows, and daily bathroom restocking.',
    badge: 'Eco-Luxury Standard',
    features: ['Evening Turn-down Service', 'Eco-friendly Linen Refresh', 'Hypoallergenic Pillow Menu']
  },
  {
    id: 'lounge',
    name: 'Refined Refreshment Lounge',
    iconName: 'Coffee',
    description: 'Exclusive lobby lounge featuring authentic Ipoh White Coffee, gourmet teas, and regional pastries.',
    detailedDescription: 'Immerse yourself in Ipoh’s celebrated coffee heritage. Relax in our velvet armchairs while sipping freshly brewed artisanal white coffee and local delicacies.',
    image: loungeGeneratedImg,
    badge: 'Artisanal Coffee',
    features: ['Authentic Ipoh White Coffee', 'Afternoon Tea & Pastries', 'Quiet Work & Reading Spaces']
  },
  {
    id: 'luggage',
    name: 'Luggage Storage & Valet',
    iconName: 'Briefcase',
    description: 'Secure luggage holding before check-in or after check-out with valet assistance.',
    detailedDescription: 'Explore Ipoh’s famous culinary spots hands-free before your room is ready or after checking out. We store your bags safely in our climate-controlled vault.',
    badge: 'Complimentary',
    features: ['Tag & Track Security', 'Climate-Controlled Vault', 'Valet Porter Service']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Uncompromised Luxury & Comfort',
    description: 'Thoughtfully designed rooms featuring dark velvet tones, golden craftsmanship, high-thread-count Egyptian cotton linens, and spa rainfall showers.'
  },
  {
    title: 'Prime Central Ipoh Location',
    description: 'Situated on Jalan Sultan Abdul Jalil in Kampung Jawa — walking distance to famous local eateries, Concubine Lane, and cultural heritage monuments.'
  },
  {
    title: 'Professional Hospitality',
    description: 'Warm, intuitive 24/7 service where every detail of your stay is curated with genuine warmth and Malaysian hospitality.'
  },
  {
    title: 'Modern Architectural Design',
    description: 'A striking fusion of dark royal purple elegance and rich brass & gold accents creating a sophisticated boutique atmosphere.'
  },
  {
    title: 'Guest-Focused Experience',
    description: 'From keyless express check-in to high-speed fiber Wi-Fi and complimentary Ipoh White Coffee welcome perks.'
  }
];

export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    name: 'Jalan Sultan Abdul Jalil Food Row',
    distance: '1 min walk (100m)',
    category: 'Dining & Food',
    description: 'Renowned food district famous for Ipoh Bean Sprout Chicken, dim sum, and local hawker delights.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Concubine Lane (Lorong Panglima)',
    distance: '3 mins drive / 12 mins walk',
    category: 'Heritage & Shopping',
    description: 'Historic heritage alley filled with boutique cafes, souvenir shops, craft stores, and famous rainbow desserts.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Ipoh Railway Station (The Taj Mahal of Ipoh)',
    distance: '5 mins drive (1.8 km)',
    category: 'Landmark',
    description: 'Iconic colonial Moorish-Victorian railway architecture surrounded by beautiful gardens.',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Perak Cave Temple & Kek Lok Tong',
    distance: '10 mins drive (5.5 km)',
    category: 'Nature & Culture',
    description: 'Breathtaking limestone caves with ancient Buddhist murals, tranquil lotus ponds, and panoramic mountain views.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Ipoh Sultan Azlan Shah Airport (IPH)',
    distance: '10 mins drive (4.2 km)',
    category: 'Transit',
    description: 'Convenient regional airport connecting Ipoh with Singapore and major domestic hubs.'
  }
];

export const MALAYSIAN_GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Historic Concubine Lane, Ipoh',
    category: 'Ipoh & Heritage',
    location: 'Old Town Ipoh, Perak',
    description: 'Charming 1900s heritage lane bustling with vibrant artisanal shops, heritage mural art, and traditional tea stalls.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    tags: ['Heritage', 'Old Town', 'Shopping', 'Architecture'],
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Authentic Ipoh White Coffee & Pastries',
    category: 'Malaysian Food & Coffee',
    location: 'Z Hotel Refreshment Lounge',
    description: 'Slow-roasted coffee beans with palm oil margarine served piping hot alongside crispy toasted Hainanese kaya bread.',
    image: loungeGeneratedImg,
    tags: ['Ipoh Coffee', 'Breakfast', 'Lounge', 'Malaysian Food'],
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Z Hotel Royal Dusk Facade',
    category: 'Nightlife & Twilight',
    location: 'Jalan Sultan Abdul Jalil, Ipoh',
    description: 'Our iconic boutique hotel facade combining deep purple twilight hues, warm exterior lighting, and Malaysian tropical greenery.',
    image: facadeGeneratedImg,
    tags: ['Facade', 'Twilight', 'Architecture', 'Boutique'],
    featured: true
  },
  {
    id: 'gal-4',
    title: 'Kek Lok Tong Limestone Cave Temple',
    category: 'Limestone Caves & Nature',
    location: 'Gunung Rapat, Ipoh, Perak',
    description: 'Majestic 12-acre natural limestone cave chamber featuring serene Zen gardens, lotus ponds, and natural stalactite formations.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Limestone Caves', 'Nature', 'Temple', 'Scenery'],
    featured: true
  },
  {
    id: 'gal-5',
    title: 'Royal Penthouse Suite Master Bedroom',
    category: 'Hotel Rooms & Suites',
    location: 'Top Floor, Z Hotel Ipoh',
    description: 'Opulent super-king bed with gold-threaded headboard, plush velvet throw, and private glass sun terrace.',
    image: penthouseImg,
    tags: ['Penthouse', 'Luxury Room', 'King Bed', 'City View'],
    featured: true
  },
  {
    id: 'gal-6',
    title: 'Marble Spa Bathroom & Hydrotherapy Rain Shower',
    category: 'Boutique Amenities & Spa',
    location: 'Z Hotel Suites',
    description: 'Spa-inspired marble bathroom featuring gold brass fittings, rain shower, and organic botanical bath products.',
    image: spaBathroomImg,
    tags: ['Spa Bathroom', 'Rain Shower', 'Marble', 'Relaxation'],
    featured: true
  },
  {
    id: 'gal-7',
    title: 'Boutique Breakfast Buffet Spread',
    category: 'Malaysian Food & Coffee',
    location: 'Z Hotel Dining Lounge',
    description: 'Daily morning spread featuring hot local dishes, dim sum, fresh tropical juices, artisanal breads, and custom coffee.',
    image: buffetImg,
    tags: ['Buffet', 'Dining', 'Breakfast', 'Tropical Fruits'],
    featured: true
  },
  {
    id: 'gal-8',
    title: 'Ipoh Colonial Railway Station',
    category: 'Ipoh & Heritage',
    location: 'Ipoh City Center, Perak',
    description: 'Affectionately called "The Taj Mahal of Ipoh", this grand Moorish-style colonial station was completed in 1917.',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
    tags: ['Colonial Architecture', 'Landmark', 'History']
  },
  {
    id: 'gal-9',
    title: 'Ipoh Famous Dim Sum & Bean Sprout Delights',
    category: 'Malaysian Food & Coffee',
    location: 'Kampung Jawa Food District, Ipoh',
    description: 'Succulent steamed dim sum baskets and crispy poached chicken with crunchy Ipoh bean sprouts grown in mineral limestone water.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dim Sum', 'Ipoh Eats', 'Street Food', 'Culinary']
  },
  {
    id: 'gal-10',
    title: 'Executive King Suite Lounge Area',
    category: 'Hotel Rooms & Suites',
    location: 'Z Hotel Executive Floor',
    description: 'Refined private sitting room with velvet armchair, marble coffee table, and Nespresso espresso bar.',
    image: suiteImg,
    tags: ['Suite', 'Lounge Area', 'Velvet Decor', 'Executive']
  },
  {
    id: 'gal-11',
    title: 'Kellie\'s Castle Historic Mansion',
    category: 'Ipoh & Heritage',
    location: 'Batu Gajah, Perak (15 mins away)',
    description: 'Unfinished Scottish castle mansion built in 1915 surrounded by lush Malaysian rainforest and rubber plantations.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    tags: ['Castle', 'Rainforest', 'History', 'Sightseeing']
  },
  {
    id: 'gal-12',
    title: 'Ipoh Limestone Hills & Karst Mountains',
    category: 'Limestone Caves & Nature',
    location: 'Kinta Valley, Ipoh, Perak',
    description: 'Dramatic ancient limestone monoliths rising abruptly above emerald green valleys and morning tropical mist.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tags: ['Mountains', 'Limestone Karst', 'Valley', 'Nature']
  },
  {
    id: 'gal-13',
    title: 'Deluxe Double Suite Bedroom View',
    category: 'Hotel Rooms & Suites',
    location: 'Z Hotel Deluxe Wing',
    description: 'Plush king bed with dark purple headboard, warm gold mood lighting, and high-speed fiber Wi-Fi workstation.',
    image: deluxeImg,
    tags: ['Deluxe', 'King Bed', 'Comfort', 'Interior Design']
  },
  {
    id: 'gal-14',
    title: '24/7 Concierge Reception Desk',
    category: 'Boutique Amenities & Spa',
    location: 'Z Hotel Lobby',
    description: 'Elegantly styled reception desk staffed round-the-clock by warm, multilingual hospitality professionals.',
    image: receptionImg,
    tags: ['Reception', 'Concierge', 'Lobby', 'Hospitality']
  },
  {
    id: 'gal-15',
    title: 'Classic Malaysian Nasi Lemak Welcome Dish',
    category: 'Malaysian Food & Coffee',
    location: 'Ipoh Culinary Route',
    description: 'Fragrant coconut jasmine rice served with spicy sambal, crispy anchovies, boiled eggs, and roasted peanuts.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    tags: ['Nasi Lemak', 'Malaysian Food', 'Sambal', 'Traditional']
  },
  {
    id: 'gal-16',
    title: 'Ipoh Heritage Street Art Murals',
    category: 'Ipoh & Heritage',
    location: 'Market Lane, Ipoh Old Town',
    description: 'Vibrant hand-painted murals depicting old Ipoh tin mining history and traditional coffee shop culture.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    tags: ['Street Art', 'Murals', 'Culture', 'Old Town']
  },
  {
    id: 'gal-17',
    title: 'Superior Twin Guest Sanctuary',
    category: 'Hotel Rooms & Suites',
    location: 'Z Hotel Twin Wing',
    description: 'Comfortable dual-bed setup crafted for travel companions, equipped with individual reading lights and safe.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    tags: ['Twin Beds', 'Friends Stay', 'Boutique Room']
  },
  {
    id: 'gal-18',
    title: 'Twilight Reflections over Kinta Riverfront',
    category: 'Nightlife & Twilight',
    location: 'Kinta Riverwalk, Ipoh',
    description: 'Romantic evening riverwalk illuminated by festive neon lights and lined with alfresco dining spots.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    tags: ['Riverwalk', 'Nightlife', 'Evening Stroll', 'Ipoh Lights']
  },
  {
    id: 'gal-19',
    title: 'Premier Family Suite Living Lounge',
    category: 'Hotel Rooms & Suites',
    location: 'Z Hotel Premier Wing',
    description: 'Expansive family suite with two queen beds, extra lounge sofa, and room for up to 4 guests.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Family Suite', 'Spacious', 'Queen Beds']
  },
  {
    id: 'gal-20',
    title: 'Mirror Lake (Tasik Cermin) Secret Quarry',
    category: 'Limestone Caves & Nature',
    location: 'Gunung Rapat, Ipoh',
    description: 'Crystal-clear hidden lake enclosed by towering karst cliffs, accessible through a scenic rock tunnel.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tasik Cermin', 'Hidden Gem', 'Limestone Lake']
  },
  {
    id: 'gal-21',
    title: 'Evening Cocktail & Coffee Lounge Vibes',
    category: 'Nightlife & Twilight',
    location: 'Z Hotel Velvet Bar',
    description: 'Unwind at dusk with craft botanical cocktails, Ipoh cold brew espressos, and ambient mood lighting.',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cocktails', 'Night Lounge', 'Evening Drinks', 'Bar']
  },
  {
    id: 'gal-22',
    title: 'Artisanal Teatime & Hainanese Kaya Toast',
    category: 'Malaysian Food & Coffee',
    location: 'Ipoh Old Town Kopitiam',
    description: 'Golden toasted bread stuffed with creamy butter and homemade pandan kaya served alongside half-boiled eggs.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kaya Toast', 'Kopitiam', 'Teatime', 'Ipoh Specialty']
  },
  {
    id: 'gal-23',
    title: 'Gourmet In-Room Coffee & Tea Selection',
    category: 'Boutique Amenities & Spa',
    location: 'Z Hotel Guestrooms',
    description: 'Premium Nespresso pods, organic chamomile infusions, and complimentary bottled mineral water in every room.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    tags: ['Nespresso', 'In-Room Amenities', 'Tea & Coffee']
  },
  {
    id: 'gal-24',
    title: 'Perak Herbal Tea & Wellness Corner',
    category: 'Boutique Amenities & Spa',
    location: 'Z Hotel Refreshment Corner',
    description: 'Relaxation corner offering herbal infusions brewed from local Ipoh lemongrass, ginger, and pandan leaves.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Herbal Tea', 'Wellness', 'Lemongrass', 'Relaxing']
  }
];

export const FAQS = [
  {
    question: "What are the check-in and check-out times at Z Hotel?",
    answer: "Standard check-in time is 3:00 PM and check-out time is 12:00 PM (noon). Early check-in or late check-out can be requested and is subject to availability."
  },
  {
    question: "Is private parking available for guests?",
    answer: "Yes! We offer complimentary secured covered parking with 24/7 CCTV surveillance for all registered guests stay at Z Hotel."
  },
  {
    question: "Is Wi-Fi included in the room rate?",
    answer: "Yes, high-speed 1 Gbps fiber optic Wi-Fi is complimentary throughout the entire hotel property."
  },
  {
    question: "How close is Z Hotel to Ipoh's famous food streets?",
    answer: "Z Hotel is located right on Jalan Sultan Abdul Jalil in Kampung Jawa, surrounded by top Ipoh food stops including bean sprout chicken rice, dim sum, and white coffee cafes within 2 to 5 minutes walk."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation is available up to 24 hours prior to check-in date. Cancellations made within 24 hours may incur a 1-night charge."
  }
];

