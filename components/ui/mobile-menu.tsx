'use client';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm pt-24 overflow-y-auto">
      <nav className="flex flex-col items-center justify-center h-full space-y-6 pb-24">
        <a
          href="#updates"
          className="text-2xl font-bold text-gray-200 hover:text-pink-400"
          onClick={onClose}
        >
          Updates
        </a>
        <a
          href="#guests"
          className="text-2xl font-bold text-gray-200 hover:text-cyan-400"
          onClick={onClose}
        >
          Guests
        </a>
        <a
          href="#events"
          className="text-2xl font-bold text-gray-200 hover:text-pink-400"
          onClick={onClose}
        >
          Events
        </a>
        <a
          href="#culture"
          className="text-2xl font-bold text-gray-200 hover:text-cyan-400"
          onClick={onClose}
        >
          Culture
        </a>
        <a
          href="#gaming"
          className="text-2xl font-bold text-gray-200 hover:text-pink-400"
          onClick={onClose}
        >
          Gaming
        </a>
        <a
          href="#merch"
          className="text-2xl font-bold text-gray-200 hover:text-cyan-400"
          onClick={onClose}
        >
          Merch
        </a>
        <a
          href="#videos"
          className="text-2xl font-bold text-gray-200 hover:text-pink-400"
          onClick={onClose}
        >
          Videos
        </a>
        <a
          href="#info"
          className="text-2xl font-bold text-gray-200 hover:text-cyan-400"
          onClick={onClose}
        >
          Info
        </a>
      </nav>
    </div>
  );
};
