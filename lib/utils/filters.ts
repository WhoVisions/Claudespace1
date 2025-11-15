import type { BaseContentItem } from '@/types';

export type SortOption = 'newest' | 'oldest' | 'title-asc' | 'title-desc';
export type CategoryFilter = 'all' | 'news' | 'events' | 'guests' | 'gaming' | 'merch' | 'media' | 'info';

/**
 * Filter items by search term across multiple fields
 */
export const filterBySearch = <T extends Partial<BaseContentItem & { channel?: string; price?: string }>>(
  items: T[],
  searchTerm: string
): T[] => {
  if (!searchTerm.trim()) return items;

  const lowerSearch = searchTerm.toLowerCase();

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
      field?.toLowerCase().includes(lowerSearch)
    );
  });
};

/**
 * Sort items by the specified option
 */
export const sortItems = <T extends Partial<BaseContentItem>>(
  items: T[],
  sortBy: SortOption
): T[] => {
  const sorted = [...items];

  switch (sortBy) {
    case 'newest':
      // Note: In a real app, you'd have actual timestamps to sort by
      return sorted;
    case 'oldest':
      return sorted.reverse();
    case 'title-asc':
      return sorted.sort((a, b) =>
        (a.title || '').localeCompare(b.title || '')
      );
    case 'title-desc':
      return sorted.sort((a, b) =>
        (b.title || '').localeCompare(a.title || '')
      );
    default:
      return sorted;
  }
};

/**
 * Filter items by category
 */
export const filterByCategory = <T extends Partial<BaseContentItem>>(
  items: T[],
  category: CategoryFilter
): T[] => {
  if (category === 'all') return items;

  const categoryMap: Record<CategoryFilter, string[]> = {
    all: [],
    news: ['News', 'Comics', 'Tech'],
    events: ['Events'],
    guests: ['Musical Guest', 'Voice Actor', 'Cosplayer'],
    gaming: ['Gaming'],
    merch: ['Merch'],
    media: ['Media'],
    info: ['Info'],
  };

  const validCategories = categoryMap[category];
  return items.filter((item) =>
    validCategories.includes(item.category || '')
  );
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
