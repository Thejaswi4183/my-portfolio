"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Background() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      backgroundPosition: "200% 0%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-10 bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-500 bg-[length:200%_200%]"
    />
  );
}
