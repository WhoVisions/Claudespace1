'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-pink-400 font-mono">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-100">
            Something went wrong
          </h2>
          <p className="text-gray-400">
            We encountered an unexpected error. Please try again.
          </p>
        </div>

        {error.digest && (
          <p className="text-xs text-gray-500 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-pink-500 text-black font-bold py-3 px-6 rounded-md hover:bg-pink-400 transition-colors duration-200"
          >
            Try Again
          </button>
          <a
            href="/"
            className="bg-gray-800 text-gray-200 font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            Go Home
          </a>
        </div>

        <details className="text-left bg-gray-950 p-4 rounded-md border border-gray-800">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
            Error Details
          </summary>
          <pre className="mt-2 text-xs text-gray-500 overflow-auto">
            {error.message}
          </pre>
        </details>
      </div>
    </div>
  );
}
