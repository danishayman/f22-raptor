export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="border-4 border-cyan-400/50 p-16 max-w-5xl mx-auto bg-blueprint-blue/10">
          <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-wider mb-6">
            F-22 RAPTOR RC AIRCRAFT
          </h1>
          <div className="text-2xl md:text-3xl text-cyan-200/80 tracking-widest mb-8">
            TECHNICAL CONSTRUCTION GUIDE
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-base text-cyan-200/60">
            <span className="flex flex-col md:flex-row md:gap-1">
              <span>PROJECT ID:</span>
              <span>F22-RAPTOR</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span>STATUS: BLUEPRINT</span>
            <span className="hidden md:inline">|</span>
            <span>VERSION: 1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
