'use client';

import { cn } from '@/lib/utils/cn';
import type { SortOption, CategoryFilter } from '@/lib/utils/filters';

interface FiltersProps {
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  category: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'title-asc', label: 'Title (A-Z)' },
  { value: 'title-desc', label: 'Title (Z-A)' },
];

const categoryOptions: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'news', label: 'News' },
  { value: 'events', label: 'Events' },
  { value: 'guests', label: 'Guests' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'merch', label: 'Merch' },
  { value: 'media', label: 'Media' },
  { value: 'info', label: 'Info' },
];

export const Filters = ({
  sort,
  onSortChange,
  category,
  onCategoryChange,
  showFavoritesOnly,
  onToggleFavorites,
}: FiltersProps) => {
  return (
    <div className="bg-gray-950 border border-gray-800/50 rounded-lg p-4 mb-6 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-400 mb-2">
            Category
          </label>
          <select
            id="category-filter"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value as CategoryFilter)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-pink-500 transition-colors"
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Option */}
        <div className="flex-1">
          <label htmlFor="sort-option" className="block text-sm font-medium text-gray-400 mb-2">
            Sort By
          </label>
          <select
            id="sort-option"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-pink-500 transition-colors"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Favorites Toggle */}
        <div className="flex items-end">
          <button
            onClick={onToggleFavorites}
            className={cn(
              'px-4 py-2 rounded-md font-medium transition-colors duration-200',
              showFavoritesOnly
                ? 'bg-pink-500 text-black hover:bg-pink-400'
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            )}
            aria-pressed={showFavoritesOnly}
          >
            ⭐ Favorites {showFavoritesOnly ? 'Only' : ''}
          </button>
        </div>
      </div>
    </div>
  );
};
