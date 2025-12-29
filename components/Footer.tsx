export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/30 py-12 mt-20 overflow-hidden">
      {/* Animated scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.03) 2px, rgba(34, 211, 238, 0.03) 4px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with F-22 silhouette */}
        <div className="flex justify-center mb-8">
          <svg
            viewBox="0 0 200 60"
            className="w-48 h-14 text-cyan-400/30"
            fill="currentColor"
          >
            {/* Simplified F-22 top-down silhouette */}
            <path d="M100 5 L105 15 L115 20 L180 35 L185 40 L180 42 L115 38 L108 55 L100 58 L92 55 L85 38 L20 42 L15 40 L20 35 L85 20 L95 15 Z" />
            <path d="M100 15 L103 25 L100 50 L97 25 Z" className="opacity-50" />
          </svg>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Project Info */}
          <div className="md:col-span-1">
            <h3 className="text-cyan-400 text-sm font-bold mb-4 tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
              Project
            </h3>
            <p className="text-base text-cyan-100/80 font-medium">F-22 Raptor</p>
            <p className="text-sm text-cyan-200/50 mt-1">DIY RC Foam Board Plane</p>
          </div>

          {/* Specifications */}
          <div className="md:col-span-1">
            <h3 className="text-cyan-400 text-sm font-bold mb-4 tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
              Specifications
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-center md:justify-start gap-4">
                <span className="text-cyan-200/50">Wingspan</span>
                <span className="text-cyan-100/80 font-mono">500mm</span>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <span className="text-cyan-200/50">Weight</span>
                <span className="text-cyan-100/80 font-mono">~350g</span>
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <span className="text-cyan-200/50">Material</span>
                <span className="text-cyan-100/80 font-mono">Foam Board</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-cyan-400 text-sm font-bold mb-4 tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-cyan-400 animate-pulse"></span>
              Quick Links
            </h3>
            <div className="space-y-2 text-sm">
              <a href="#plans" className="block text-cyan-200/60 hover:text-cyan-400 transition-colors duration-300">
                → Download Plans
              </a>
              <a href="#build-process" className="block text-cyan-200/60 hover:text-cyan-400 transition-colors duration-300">
                → Build Process
              </a>
              <a href="#resources" className="block text-cyan-200/60 hover:text-cyan-400 transition-colors duration-300">
                → Resources
              </a>
            </div>
          </div>

          {/* Status */}
          <div className="md:col-span-1">
            <h3 className="text-cyan-400 text-sm font-bold mb-4 tracking-[0.2em] uppercase flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-green-400 animate-pulse"></span>
              Status
            </h3>
            <div className="text-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-400/10 border border-green-400/30 rounded">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400/80 font-mono text-xs">BUILD COMPLETE</span>
              </div>
              <p className="text-cyan-200/40 mt-3 text-xs">Maiden flight successful</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cyan-200/40 font-mono tracking-wide">
              © 2025 F-22 RAPTOR RC PROJECT // ALL SPECIFICATIONS SUBJECT TO MODIFICATION
            </p>
            <div className="flex items-center gap-4 text-xs text-cyan-200/40">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-cyan-400/50 rounded-full"></span>
                FOAM BOARD
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-cyan-400/50 rounded-full"></span>
                5TH GEN STEALTH
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-cyan-400/50 rounded-full"></span>
                DIY BUILD
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
