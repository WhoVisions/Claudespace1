'use client';

import Image from 'next/image';
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
import {
  NewspaperIcon,
  MicIcon,
  SparklesIcon,
  Gamepad2Icon,
  ShoppingBagIcon,
  YoutubeIcon,
  TicketIcon,
} from '@/components/icons';
import { FavoriteButton } from './favorite-button';

interface CardProps<T> {
  item: T;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

// Enhanced Card for Latest Updates (Pink)
export const EnhancedUpdateCard = ({ item, isFavorite, onToggleFavorite }: CardProps<UpdateItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-pink-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-pink-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.timestamp}</span>
        <NewspaperIcon className="w-4 h-4 text-pink-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for Guests (Cyan)
export const EnhancedGuestCard = ({ item, isFavorite, onToggleFavorite }: CardProps<GuestItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
        {item.category}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.timestamp}</span>
        <MicIcon className="w-4 h-4 text-cyan-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for Featured Events (Pink)
export const EnhancedFeaturedEventCard = ({ item, isFavorite, onToggleFavorite }: CardProps<FeaturedEventItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-pink-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-pink-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.timestamp}</span>
        <SparklesIcon className="w-4 h-4 text-pink-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for Blerd Culture News (Cyan)
export const EnhancedNewsCard = ({ item, isFavorite, onToggleFavorite }: CardProps<NewsItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.category}</span>
        <NewspaperIcon className="w-4 h-4 text-cyan-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for Gaming (Pink)
export const EnhancedGamingCard = ({ item, isFavorite, onToggleFavorite }: CardProps<GamingItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-pink-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-pink-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.timestamp}</span>
        <Gamepad2Icon className="w-4 h-4 text-pink-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for Merch (Cyan)
export const EnhancedMerchCard = ({ item, isFavorite, onToggleFavorite }: CardProps<MerchItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.price}</span>
        <ShoppingBagIcon className="w-4 h-4 text-cyan-400/70" />
      </div>
    </div>
  </article>
);

// Enhanced Card for YouTube Videos (Pink)
export const EnhancedVideoCard = ({ item, isFavorite, onToggleFavorite }: CardProps<VideoItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10 group">
    <div className="relative">
      <div className="relative w-full h-40">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
        <YoutubeIcon className="w-12 h-12 text-pink-500/80 opacity-75 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-pink-500 uppercase tracking-wider">
        {item.channel}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-pink-500 transition-colors">
        {item.title}
      </h3>
      <span className="text-gray-500 text-sm font-mono">{item.timestamp}</span>
    </div>
  </article>
);

// Enhanced Card for Event Info (Cyan)
export const EnhancedEventInfoCard = ({ item, isFavorite, onToggleFavorite }: CardProps<EventInfoItem>) => (
  <article className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50 transition-all duration-300 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 group">
    <div className="relative w-full h-40">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-2 right-2">
        <FavoriteButton
          id={item.id}
          isFavorite={isFavorite}
          onToggle={onToggleFavorite}
          className="bg-black/50 backdrop-blur-sm"
        />
      </div>
    </div>
    <div className="p-4">
      <span className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider">
        {item.source}
      </span>
      <h3 className="text-lg font-semibold text-gray-100 mt-1 mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
        {item.title}
      </h3>
      <div className="flex justify-between items-center text-gray-500 text-sm font-mono">
        <span>{item.timestamp}</span>
        <TicketIcon className="w-4 h-4 text-cyan-400/70" />
      </div>
    </div>
  </article>
);
