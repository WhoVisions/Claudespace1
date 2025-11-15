import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-pink-400 font-mono">404</h1>
          <h2 className="text-2xl font-semibold text-gray-100">
            Page Not Found
          </h2>
          <p className="text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-pink-500 text-black font-bold py-3 px-8 rounded-md hover:bg-pink-400 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
