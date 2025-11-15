import { Suspense } from 'react';
import { EnhancedMainContent } from '@/components/ui/enhanced-main-content';
import { Footer } from '@/components/ui/footer';
import Loading from './loading';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-gray-300 font-sans">
      <Suspense fallback={<Loading />}>
        <EnhancedMainContent />
      </Suspense>
      <Footer />
    </div>
  );
}
