'use client';

import { useState } from 'react';
import { Header } from './header';
import { HeroSection } from '../sections/hero-section';
import { ContentSection } from '../sections/content-section';
import {
  UpdateCard,
  GuestCard,
  FeaturedEventCard,
  NewsCard,
  GamingCard,
  MerchCard,
  VideoCard,
  EventInfoCard,
} from './cards';
import {
  NewspaperIcon,
  UsersIcon,
  SparklesIcon,
  Gamepad2Icon,
  ShoppingBagIcon,
  YoutubeIcon,
  TicketIcon,
} from '@/components/icons';
import {
  mockUpdates,
  mockGuests,
  mockFeaturedEvents,
  mockBlerdCulture,
  mockGaming,
  mockMerch,
  mockVideos,
  mockEventInfo,
} from '@/lib/mock-data';

export const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const lowerSearchTerm = searchTerm.toLowerCase();

  const filterItems = <T extends { title: string; source?: string; channel?: string; category?: string; price?: string; timestamp?: string }>(
    items: T[]
  ): T[] => {
    return items.filter((item) => {
      const searchableFields = [
        item.title,
        item.source,
        item.channel,
        item.category,
        item.price,
        item.timestamp,
      ].filter(Boolean);

      return searchableFields.some((field) =>
        field?.toLowerCase().includes(lowerSearchTerm)
      );
    });
  };

  const filteredUpdates = filterItems(mockUpdates);
  const filteredGuests = filterItems(mockGuests);
  const filteredEvents = filterItems(mockFeaturedEvents);
  const filteredCulture = filterItems(mockBlerdCulture);
  const filteredGaming = filterItems(mockGaming);
  const filteredMerch = filterItems(mockMerch);
  const filteredVideos = filterItems(mockVideos);
  const filteredInfo = filterItems(mockEventInfo);

  const allFilteredItems = [
    ...filteredUpdates,
    ...filteredGuests,
    ...filteredEvents,
    ...filteredCulture,
    ...filteredGaming,
    ...filteredMerch,
    ...filteredVideos,
    ...filteredInfo,
  ];

  const hasNoResults = allFilteredItems.length === 0 && searchTerm.length > 0;

  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="container mx-auto max-w-6xl mt-8">
        {searchTerm.length === 0 && <HeroSection />}

        {hasNoResults && (
          <div className="text-center text-gray-500 text-xl py-20 px-4">
            No results found for &quot;{searchTerm}&quot;.
          </div>
        )}

        {filteredUpdates.length > 0 && (
          <ContentSection
            title="Latest Updates"
            icon={<NewspaperIcon className="w-6 h-6 text-pink-400" />}
            id="updates"
          >
            {filteredUpdates.map((item) => (
              <UpdateCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredGuests.length > 0 && (
          <ContentSection
            title="Guest Announcements"
            icon={<UsersIcon className="w-6 h-6 text-cyan-400" />}
            id="guests"
          >
            {filteredGuests.map((item) => (
              <GuestCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredEvents.length > 0 && (
          <ContentSection
            title="Featured Events & Apps"
            icon={<SparklesIcon className="w-6 h-6 text-pink-400" />}
            id="events"
          >
            {filteredEvents.map((item) => (
              <FeaturedEventCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredCulture.length > 0 && (
          <ContentSection
            title="Blerd Culture & News"
            icon={<NewspaperIcon className="w-6 h-6 text-cyan-400" />}
            id="culture"
          >
            {filteredCulture.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredGaming.length > 0 && (
          <ContentSection
            title="Gaming & Panels"
            icon={<Gamepad2Icon className="w-6 h-6 text-pink-400" />}
            id="gaming"
          >
            {filteredGaming.map((item) => (
              <GamingCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredMerch.length > 0 && (
          <ContentSection
            title="Blerdcon Store"
            icon={<ShoppingBagIcon className="w-6 h-6 text-cyan-400" />}
            id="merch"
          >
            {filteredMerch.map((item) => (
              <MerchCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredVideos.length > 0 && (
          <ContentSection
            title="Blerd TV & Recaps"
            icon={<YoutubeIcon className="w-6 h-6 text-pink-400" />}
            id="videos"
          >
            {filteredVideos.map((item) => (
              <VideoCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}

        {filteredInfo.length > 0 && (
          <ContentSection
            title="Event Info"
            icon={<TicketIcon className="w-6 h-6 text-cyan-400" />}
            id="info"
          >
            {filteredInfo.map((item) => (
              <EventInfoCard key={item.id} item={item} />
            ))}
          </ContentSection>
        )}
      </main>
    </>
  );
};
