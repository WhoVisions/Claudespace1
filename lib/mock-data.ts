import type {
  UpdateItem,
  GuestItem,
  FeaturedEventItem,
  NewsItem,
  GamingItem,
  MerchItem,
  VideoItem,
  EventInfoItem,
} from '@/types';

export const mockUpdates: UpdateItem[] = [
  {
    id: 'u1',
    title: 'Blerdcon 2026 Theme: "Geek Nik"',
    source: 'Blerdcon Staff',
    timestamp: '1 hour ago',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Theme+Announced',
    category: 'News',
  },
  {
    id: 'u2',
    title: 'Registration is LIVE for 2026',
    source: 'Blerdcon Staff',
    timestamp: '5 hours ago',
    image: 'https://placehold.co/600x400/f472b6/ffffff?text=Registration+Open',
    category: 'News',
  },
  {
    id: 'u3',
    title: 'Hotel Blocks at the Hyatt & Hilton are OPEN',
    source: 'Blerdcon Staff',
    timestamp: '1 day ago',
    image: 'https://placehold.co/600x400/db2777/ffffff?text=Hotel+Blocks',
    category: 'News',
  },
];

export const mockGuests: GuestItem[] = [
  {
    id: 'g1',
    title: 'GUEST ANNOUNCED: Janelle Monáe',
    source: 'Blerdcon Guests',
    timestamp: '2 hours ago',
    image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Janelle+Monáe',
    category: 'Musical Guest',
  },
  {
    id: 'g2',
    title: 'GUEST ANNOUNCED: Phil LaMarr',
    source: 'Blerdcon Guests',
    timestamp: '6 hours ago',
    image: 'https://placehold.co/600x400/0891b2/ffffff?text=Phil+LaMarr',
    category: 'Voice Actor',
  },
  {
    id: 'g3',
    title: 'COSPLAY GUEST: SciFiCheerGirl',
    source: 'Blerdcon Guests',
    timestamp: '1 day ago',
    image: 'https://placehold.co/600x400/0e7490/ffffff?text=SciFiCheerGirl',
    category: 'Cosplayer',
  },
];

export const mockFeaturedEvents: FeaturedEventItem[] = [
  {
    id: 'b1',
    title: 'Blerdcon After Dark: The Blerdlesque',
    source: 'Blerdcon Events',
    timestamp: 'Tickets on Sale Now',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Blerdlesque',
    category: 'Events',
  },
  {
    id: 'b2',
    title: 'Blerdcon After Dark: Pajama Jammy Jam',
    source: 'Blerdcon Events',
    timestamp: 'Event Details',
    image: 'https://placehold.co/600x400/f472b6/ffffff?text=Pajama+Jam',
    category: 'Events',
  },
  {
    id: 'b3',
    title: 'Main Event: Blerdcon Prom',
    source: 'Blerdcon Events',
    timestamp: 'Event Details',
    image: 'https://placehold.co/600x400/db2777/ffffff?text=Blerdcon+Prom',
    category: 'Events',
  },
  {
    id: 'b4',
    title: 'Apply: Cosplay Contest',
    source: 'Blerdcon Events',
    timestamp: 'Applications Open',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Cosplay+Contest',
    category: 'Events',
  },
  {
    id: 'b5',
    title: 'Apply: AMV Contest',
    source: 'Blerdcon Events',
    timestamp: 'Applications Open',
    image: 'https://placehold.co/600x400/f472b6/ffffff?text=AMV+Contest',
    category: 'Events',
  },
  {
    id: 'b6',
    title: 'Apply: Blerdcon Follies (Talent Show)',
    source: 'Blerdcon Events',
    timestamp: 'Applications Open',
    image: 'https://placehold.co/600x400/db2777/ffffff?text=Talent+Show',
    category: 'Events',
  },
];

export const mockBlerdCulture: NewsItem[] = [
  {
    id: 'c1',
    title: 'Is "Marvel Zombies" Too Gory for the MCU?',
    source: 'Blerd.com',
    timestamp: 'Culture',
    image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Marvel+Zombies',
    category: 'Comics',
  },
  {
    id: 'c2',
    title: 'Mark Phillips\' "Imagine That" is a Comic Book Universe',
    source: 'Blerd.com',
    timestamp: 'Culture',
    image: 'https://placehold.co/600x400/0891b2/ffffff?text=Imagine+That',
    category: 'Comics',
  },
  {
    id: 'c3',
    title: 'Pretending You Can Live Without AI in 2026',
    source: 'Blerd.com',
    timestamp: 'Culture',
    image: 'https://placehold.co/600x400/0e7490/ffffff?text=AI+Culture',
    category: 'Tech',
  },
];

export const mockGaming: GamingItem[] = [
  {
    id: 'g1',
    title: 'Tournaments: Street Fighter 6, Tekken 8 & MK1',
    source: 'Blerdcon Gaming',
    timestamp: 'Sign-ups Live',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Fighting+Games',
    category: 'Gaming',
  },
  {
    id: 'g2',
    title: 'Tournaments: Spades, Uno & Smash Ultimate',
    source: 'Blerdcon Gaming',
    timestamp: 'Sign-ups Live',
    image: 'https://placehold.co/600x400/f472b6/ffffff?text=Tabletop+&+Smash',
    category: 'Gaming',
  },
  {
    id: 'g3',
    title: 'Apply: Programming Application (Panels)',
    source: 'Blerdcon Events',
    timestamp: 'Applications Open',
    image: 'https://placehold.co/600x400/db2777/ffffff?text=Run+a+Panel',
    category: 'Gaming',
  },
];

export const mockMerch: MerchItem[] = [
  {
    id: 'm1',
    title: 'Blerd Con Crest Water Bottle',
    source: 'Blerdcon Store',
    price: '$35.00',
    image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Crest+Water+Bottle',
    category: 'Merch',
  },
  {
    id: 'm2',
    title: 'Blerd Con Embroidered Tie-Dye T-shirt',
    source: 'Blerdcon Store',
    price: 'From $55.00',
    image: 'https://placehold.co/600x400/0891b2/ffffff?text=Tie-Dye+T-shirt',
    category: 'Merch',
  },
  {
    id: 'm3',
    title: 'Summer Madness Tee',
    source: 'Blerdcon Store',
    price: 'From $30.00',
    image: 'https://placehold.co/600x400/0e7490/ffffff?text=Summer+Madness+Tee',
    category: 'Merch',
  },
];

export const mockVideos: VideoItem[] = [
  {
    id: 'v1',
    title: 'Blerdcon 2025: The Official Recap',
    channel: 'Blerdcon TV',
    timestamp: 'Recap',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=2025+Recap',
    category: 'Media',
  },
  {
    id: 'v2',
    title: 'Interview with The Ghost Brothers',
    channel: 'Blerd.com',
    timestamp: 'Interview',
    image: 'https://placehold.co/600x400/f472b6/ffffff?text=Ghost+Brothers',
    category: 'Media',
  },
  {
    id: 'v3',
    title: 'Apply: Media Application',
    channel: 'Blerdcon Staff',
    timestamp: 'Get a Press Pass',
    image: 'https://placehold.co/600x400/db2777/ffffff?text=Media+Pass',
    category: 'Media',
  },
];

export const mockEventInfo: EventInfoItem[] = [
  {
    id: 'e1',
    title: 'Apply: Food Truck Rally',
    source: 'Blerdcon Info',
    timestamp: 'Applications Open',
    image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Food+Trucks',
    category: 'Info',
  },
  {
    id: 'e2',
    title: 'Get Your 2026 Badge (VIP Pass Available!)',
    source: 'Blerdcon Info',
    timestamp: 'Badges',
    image: 'https://placehold.co/600x400/0891b2/ffffff?text=Buy+Badges',
    category: 'Info',
  },
  {
    id: 'e3',
    title: 'Policies: Anti-Harassment & Cosplay Safety',
    source: 'Blerdcon Info',
    timestamp: 'Rules & Safety',
    image: 'https://placehold.co/600x400/0e7490/ffffff?text=Safety',
    category: 'Info',
  },
];
