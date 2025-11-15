import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conditional classes and removes duplicates
 */
export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};
