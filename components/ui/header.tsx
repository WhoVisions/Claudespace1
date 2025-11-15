'use client';

import { useState } from 'react';
import { MenuIcon, XIcon, SearchIcon } from '@/components/icons';
import { AuthButton } from './auth-button';
import { MobileMenu } from './mobile-menu';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-500/30">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-100 font-mono tracking-tighter flex-shrink-0">
            <span className="text-pink-400">The</span> Blerd
          </h1>

          <div className="hidden md:flex flex-grow min-w-0 justify-center px-4">
            <div className="relative w-full max-w-sm text-gray-400 focus-within:text-pink-400">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search guests, events, games..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-pink-500 focus:bg-gray-900 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-shrink-0">
            <AuthButton />

            <button
              className="md:hidden text-gray-300 hover:text-pink-400 z-50"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};
