'use client';

import { useEffect, useState } from 'react';
import {
  signInAnonymously,
  signInWithCustomToken,
  onAuthStateChanged,
  signOut,
  type User
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { LogInIcon, LogOutIcon } from '@/components/icons';

export const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        try {
          await signInAnonymously(auth);
        } catch (error) {
          console.error('Error signing in:', error);
        }
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (!auth) return;

    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleLogin = async () => {
    if (!auth) return;

    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  if (!isAuthReady) {
    return (
      <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
        <div
          className="w-5 h-5 border-2 border-dashed border-gray-600 rounded-full animate-spin"
          title="Loading user..."
        ></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
        <button
          onClick={handleLogin}
          className="p-2 text-gray-300 hover:text-pink-400"
          title="Login"
        >
          <LogInIcon className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
      <span className="hidden sm:inline" title={user.uid}>
        {user.uid.slice(0, 8)}...
      </span>
      <span className="sm:hidden">Logged In</span>
      <button
        onClick={handleLogout}
        className="p-2 text-gray-300 hover:text-pink-400 flex-shrink-0"
        title="Logout"
      >
        <LogOutIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
