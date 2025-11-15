'use client';

import { cn } from '@/lib/utils/cn';

interface FavoriteButtonProps {
  id: string;
  isFavorite: boolean;
  onToggle: (id: string) => void;
  className?: string;
}

export const FavoriteButton = ({
  id,
  isFavorite,
  onToggle,
  className,
}: FavoriteButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(id);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-2 rounded-full transition-all duration-200',
        'hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-950',
        className
      )}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={isFavorite ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          'transition-colors duration-200',
          isFavorite ? 'text-pink-400' : 'text-gray-500 hover:text-pink-400'
        )}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};
