"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="text-center py-4">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-4xl md:text-5xl font-semibold leading-tight"
      >
        Hi, I’m <span className="gradient-text">Thejaswi</span>.<br />
        I build intelligent, interactive software.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-zinc-300 max-w-2xl mx-auto"
      >
        MCA student & maker. Recent work includes a multi‑modal ML model for
        <span className="mx-1 font-medium">ancient artifact dating</span>, IoT mini‑project, and full‑stack web apps.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-6 flex justify-center gap-3"
      >
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} href="#projects" className="btn btn-primary">
          See Projects
        </motion.a>
        <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }} href="#contact" className="btn btn-outline">
          Contact
        </motion.a>
      </motion.div>

      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>
    </section>
  );
}
