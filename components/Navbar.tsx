"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "why-i-built-this", label: "Why I Built This" },
    { id: "tools", label: "Tools" },
    { id: "materials", label: "Materials" },
    { id: "electronics", label: "Electronics" },
    { id: "plans", label: "Plans" },
    { id: "cad-images", label: "CAD Images" },
    { id: "build-process", label: "Build Process" },
    { id: "gallery", label: "Gallery" },
    { id: "what-i-learned", label: "What I Learned" },
    { id: "resources", label: "Resources" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-sm border-b border-cyan-400/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wider">
            F-22 RAPTOR
          </a>
          <div className="hidden lg:flex gap-10">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-cyan-200/80 hover:text-cyan-400 transition-colors uppercase tracking-wide"
              >
                {section.label}
              </a>
            ))}
          </div>
          <button
            className="lg:hidden text-cyan-400 border border-cyan-400/50 px-4 py-2 text-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A1A2F]/98 border-t border-cyan-400/30">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={handleLinkClick}
                className="text-sm text-cyan-200/80 hover:text-cyan-400 transition-colors uppercase tracking-wide py-2 border-b border-cyan-400/10"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
