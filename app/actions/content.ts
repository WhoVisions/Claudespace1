'use server';

import { updateTag, revalidatePath } from 'next/cache';
import type { BaseContentItem } from '@/types';

/**
 * Server action to fetch content from Firestore
 * In production, this would fetch from actual Firestore
 */
export const fetchContent = async (collection: string): Promise<BaseContentItem[]> => {
  // Return empty array as default fallback when using local/mock data
  return [];
};

/**
 * Server action to update content
 * Uses updateTag for read-your-writes consistency
 */
export const updateContent = async (
  collection: string,
  id: string,
  data: Partial<BaseContentItem>
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Revalidate the cache for this collection
    updateTag(`content-${collection}`);
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Failed to update content:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Server action to increment view count
 */
export const incrementViewCount = async (
  collection: string,
  id: string
): Promise<void> => {
  // In production, update Firestore view count
};
