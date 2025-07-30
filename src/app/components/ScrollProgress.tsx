"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-[--color-primary]"
      style={{ scaleX: scrollYProgress, transformOrigin: "0 0" }}
    />
  );
}
