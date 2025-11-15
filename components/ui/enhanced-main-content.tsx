'use client';

import { useMemo } from 'react';
import { Header } from './header';
import { HeroSection } from '../sections/hero-section';
import { ContentSection } from '../sections/content-section';
import { Filters } from './filters';
import {
  EnhancedUpdateCard,
  EnhancedGuestCard,
  EnhancedFeaturedEventCard,
  EnhancedNewsCard,
  EnhancedGamingCard,
  EnhancedMerchCard,
  EnhancedVideoCard,
  EnhancedEventInfoCard,
} from './enhanced-cards';
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
import { useSearchParams } from '@/hooks/use-search-params';
import { useFavorites } from '@/hooks/use-favorites';
import { filterBySearch, sortItems, filterByCategory } from '@/lib/utils/filters';

export const EnhancedMainContent = () => {
  const { search, setSearch, sort, setSort, category, setCategory, showFavoritesOnly, setShowFavoritesOnly } = useSearchParams();
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();

  // Apply filters and sorting
  const allItems = useMemo(() => [
    ...mockUpdates.map(item => ({ ...item, type: 'update' as const })),
    ...mockGuests.map(item => ({ ...item, type: 'guest' as const })),
    ...mockFeaturedEvents.map(item => ({ ...item, type: 'event' as const })),
    ...mockBlerdCulture.map(item => ({ ...item, type: 'culture' as const })),
    ...mockGaming.map(item => ({ ...item, type: 'gaming' as const })),
    ...mockMerch.map(item => ({ ...item, type: 'merch' as const })),
    ...mockVideos.map(item => ({ ...item, type: 'video' as const })),
    ...mockEventInfo.map(item => ({ ...item, type: 'info' as const })),
  ], []);

  const filteredItems = useMemo(() => {
    let items = allItems;

    // Filter by search
    if (search) {
      items = filterBySearch(items, search);
    }

    // Filter by category
    if (category && category !== 'all') {
      items = filterByCategory(items, category);
    }

    // Filter by favorites
    if (showFavoritesOnly && isLoaded) {
      items = items.filter(item => isFavorite(item.id));
    }

    // Sort items
    items = sortItems(items, sort);

    return items;
  }, [allItems, search, category, showFavoritesOnly, sort, isFavorite, isLoaded]);

  // Group filtered items by type
  const groupedItems = useMemo(() => {
    return {
      updates: filteredItems.filter(item => item.type === 'update'),
      guests: filteredItems.filter(item => item.type === 'guest'),
      events: filteredItems.filter(item => item.type === 'event'),
      culture: filteredItems.filter(item => item.type === 'culture'),
      gaming: filteredItems.filter(item => item.type === 'gaming'),
      merch: filteredItems.filter(item => item.type === 'merch'),
      videos: filteredItems.filter(item => item.type === 'video'),
      info: filteredItems.filter(item => item.type === 'info'),
    };
  }, [filteredItems]);

  const hasNoResults = filteredItems.length === 0;

  return (
    <>
      <Header searchTerm={search || ''} onSearchChange={setSearch} />

      <main className="container mx-auto max-w-6xl mt-8">
        {!search && !category && !showFavoritesOnly && <HeroSection />}

        <div className="px-4 sm:px-0">
          <Filters
            sort={sort}
            onSortChange={setSort}
            category={category}
            onCategoryChange={setCategory}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
          />
        </div>

        {hasNoResults && (
          <div className="text-center text-gray-500 text-xl py-20 px-4">
            {showFavoritesOnly
              ? "No favorites yet. Click the heart icon on any item to add it to your favorites!"
              : `No results found for "${search}".`
            }
          </div>
        )}

        {groupedItems.updates.length > 0 && (
          <ContentSection
            title="Latest Updates"
            icon={<NewspaperIcon className="w-6 h-6 text-pink-400" />}
            id="updates"
          >
            {groupedItems.updates.map((item) => (
              <EnhancedUpdateCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.guests.length > 0 && (
          <ContentSection
            title="Guest Announcements"
            icon={<UsersIcon className="w-6 h-6 text-cyan-400" />}
            id="guests"
          >
            {groupedItems.guests.map((item) => (
              <EnhancedGuestCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.events.length > 0 && (
          <ContentSection
            title="Featured Events & Apps"
            icon={<SparklesIcon className="w-6 h-6 text-pink-400" />}
            id="events"
          >
            {groupedItems.events.map((item) => (
              <EnhancedFeaturedEventCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.culture.length > 0 && (
          <ContentSection
            title="Blerd Culture & News"
            icon={<NewspaperIcon className="w-6 h-6 text-cyan-400" />}
            id="culture"
          >
            {groupedItems.culture.map((item) => (
              <EnhancedNewsCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.gaming.length > 0 && (
          <ContentSection
            title="Gaming & Panels"
            icon={<Gamepad2Icon className="w-6 h-6 text-pink-400" />}
            id="gaming"
          >
            {groupedItems.gaming.map((item) => (
              <EnhancedGamingCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.merch.length > 0 && (
          <ContentSection
            title="Blerdcon Store"
            icon={<ShoppingBagIcon className="w-6 h-6 text-cyan-400" />}
            id="merch"
          >
            {groupedItems.merch.map((item) => (
              <EnhancedMerchCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.videos.length > 0 && (
          <ContentSection
            title="Blerd TV & Recaps"
            icon={<YoutubeIcon className="w-6 h-6 text-pink-400" />}
            id="videos"
          >
            {groupedItems.videos.map((item) => (
              <EnhancedVideoCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}

        {groupedItems.info.length > 0 && (
          <ContentSection
            title="Event Info"
            icon={<TicketIcon className="w-6 h-6 text-cyan-400" />}
            id="info"
          >
            {groupedItems.info.map((item) => (
              <EnhancedEventInfoCard
                key={item.id}
                item={item}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </ContentSection>
        )}
      </main>
    </>
  );
};
