"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Thejaswi S. All rights reserved.</p>

        {/* Right - social icons */}
        <div className="flex gap-4">
          <a href="mailto:thejaswi4uns@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/Thejaswi4183" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thejaswi-s-165b0a256" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://discord.com/users/586373273160253453" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaDiscord size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
