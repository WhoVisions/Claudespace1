// Content Item Types
export interface BaseContentItem {
  id: string;
  title: string;
  source: string;
  timestamp: string;
  image: string;
  category: string;
}

export interface UpdateItem extends BaseContentItem {
  category: 'News';
}

export interface GuestItem extends BaseContentItem {
  category: string; // 'Musical Guest' | 'Voice Actor' | 'Cosplayer' | etc.
}

export interface FeaturedEventItem extends BaseContentItem {
  category: 'Events';
}

export interface NewsItem extends BaseContentItem {
  category: string; // 'Comics' | 'Tech' | etc.
}

export interface GamingItem extends BaseContentItem {
  category: 'Gaming';
}

export interface MerchItem extends Omit<BaseContentItem, 'timestamp'> {
  price: string;
  category: 'Merch';
}

export interface VideoItem extends Omit<BaseContentItem, 'source'> {
  channel: string;
  category: 'Media';
}

export interface EventInfoItem extends BaseContentItem {
  category: 'Info';
}

// Icon Component Props
export interface IconProps {
  className?: string;
}

// Firebase Auth Types
export interface FirebaseAuthState {
  isAuthReady: boolean;
  userId: string | null;
}

// Search State
export interface SearchState {
  searchTerm: string;
  isSearching: boolean;
}

// Menu State
export interface MenuState {
  isMenuOpen: boolean;
}
