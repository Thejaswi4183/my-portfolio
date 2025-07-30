"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Star = {
  delay: number; startX: number; endX: number; startY: number; endY: number; duration: number; repeatDelay: number;
};

export default function ShootingStars() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stars = useMemo<Star[]>(() => {
    if (!mounted) return [];
    return Array.from({ length: 6 }, (_, i) => {
      const duration = 3 + Math.random() * 2;
      const startX = -10 - Math.random() * 20;
      const endX = 110 + Math.random() * 10;
      const startY = Math.random() * 40;
      const endY = startY + 30 + Math.random() * 20;
      const repeatDelay = 8 + Math.random() * 8;
      return { delay: i * 1.2, startX, endX, startY, endY, duration, repeatDelay };
    });
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed -z-10 h-[2px] w-28"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.85) 20%, rgba(255,255,255,0) 100%)",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,.6))",
          }}
          initial={{ x: `${s.startX}vw`, y: `${s.startY}vh`, rotate: 20, opacity: 0 }}
          animate={{ x: `${s.endX}vw`, y: `${s.endY}vh`, opacity: [0, 1, 0] }}
          transition={{ delay: s.delay, duration: s.duration, repeat: Infinity, repeatDelay: s.repeatDelay, ease: "linear" }}
          aria-hidden
        />
      ))}
    </>
  );
}
