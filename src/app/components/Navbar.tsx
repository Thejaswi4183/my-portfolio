"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/20 border-b border-white/10">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="gradient-text">Thejaswi's Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:opacity-80" href="#projects">Projects</a>
          <a className="hover:opacity-80" href="#skills">Skills</a>
          <a className="hover:opacity-80" href="#contact">Contact</a>
          <SocialLinks className="ml-2" />
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden px-3 py-1 rounded border border-white/15"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </nav>

      {open && (
        <motion.div
          id="mobile-nav"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.25 }}
          className="md:hidden border-t border-white/10"
        >
          <ul className="container py-3 space-y-3">
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
            <li className="pt-2"><SocialLinks /></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
