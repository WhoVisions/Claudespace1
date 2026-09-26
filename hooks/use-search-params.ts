'use client';

import { useQueryState, parseAsString, parseAsStringEnum, parseAsBoolean } from 'nuqs';
import type { SortOption, CategoryFilter } from '@/lib/utils/filters';

const sortOptions: SortOption[] = ['newest', 'oldest', 'title-asc', 'title-desc'];
const categoryOptions: CategoryFilter[] = ['all', 'news', 'events', 'guests', 'gaming', 'merch', 'media', 'info'];

export const useSearchParams = () => {
  const [search, setSearch] = useQueryState(
    'q',
    parseAsString.withDefault('')
  );

  const [sort, setSort] = useQueryState(
    'sort',
    parseAsStringEnum<SortOption>(sortOptions).withDefault('newest')
  );

  const [category, setCategory] = useQueryState(
    'category',
    parseAsStringEnum<CategoryFilter>(categoryOptions).withDefault('all')
  );

  const [showFavoritesOnly, setShowFavoritesOnly] = useQueryState(
    'favorites',
    parseAsBoolean.withDefault(false)
  );

  return {
    search,
    setSearch,
    sort,
    setSort,
    category,
    setCategory,
    showFavoritesOnly: Boolean(showFavoritesOnly),
    setShowFavoritesOnly,
  };
};
