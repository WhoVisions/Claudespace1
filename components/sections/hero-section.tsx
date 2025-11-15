export const HeroSection = () => {
  return (
    <div className="relative bg-gray-950 border border-pink-500/50 rounded-lg overflow-hidden p-6 md:p-10 mb-10 mx-4 sm:mx-0">
      <div className="absolute inset-0 bg-pink-500/10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_100%)]"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-3 tracking-tighter">
          Blerdcon 2026: Geek Nik
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          The official hub for all Blerdcon news, guest announcements, event schedules, and Blerd culture.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#"
            className="bg-pink-500 text-black font-bold py-3 px-6 rounded-md hover:bg-pink-400 transition-colors duration-200"
          >
            Get 2026 Badges
          </a>
          <a
            href="#"
            className="bg-gray-800 text-gray-200 font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            Book Hotel
          </a>
        </div>
      </div>
    </div>
  );
};
