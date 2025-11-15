import { CardSkeleton, HeroSkeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="bg-black min-h-screen text-gray-300">
      <div className="container mx-auto max-w-6xl mt-8">
        <HeroSkeleton />

        <section className="mb-10 px-4 sm:px-0">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-6 h-6 bg-gray-800 rounded animate-pulse" />
            <div className="h-8 w-48 bg-gray-800 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
