"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { name: "Home", id: "home" },
    { name: "Academic Projects", id: "projects" },
    { name: "Technical Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500"
        >
          Thejaswi&apos;s Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="relative px-3 py-1 text-gray-300 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-300 hover:to-purple-500"
            >
              {sec.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 flex flex-col space-y-2">
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="text-gray-300 py-2 hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {sec.name}
            </a>
          ))}
        </div>
      )}

      {/* Smooth scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
}
