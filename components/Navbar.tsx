"use client";

export default function Navbar() {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "why-i-built-this", label: "Why I Built This" },
    { id: "materials", label: "Materials" },
    { id: "tools", label: "Tools" },
    { id: "plans", label: "Plans" },
    { id: "build-process", label: "Build Process" },
    { id: "electronics", label: "Electronics" },
    { id: "gallery", label: "Gallery" },
    { id: "what-i-learned", label: "What I Learned" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-sm border-b border-cyan-400/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-lg font-bold text-cyan-400 tracking-wider">
            F-22 RAPTOR
          </a>
          <div className="hidden lg:flex gap-10">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs text-cyan-200/80 hover:text-cyan-400 transition-colors uppercase tracking-wide"
              >
                {section.label}
              </a>
            ))}
          </div>
          <button className="lg:hidden text-cyan-400 border border-cyan-400/50 px-3 py-1 text-xs">
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}
