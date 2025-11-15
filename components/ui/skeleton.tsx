import { cn } from '@/lib/utils/cn';

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-800/50',
        className
      )}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-gray-950 rounded-md overflow-hidden border border-gray-800/50">
      <Skeleton className="w-full h-40" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-3/4" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="relative bg-gray-950 border border-pink-500/50 rounded-lg overflow-hidden p-6 md:p-10 mb-10 mx-4 sm:mx-0">
      <div className="relative z-10 text-center space-y-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto" />
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  );
};
