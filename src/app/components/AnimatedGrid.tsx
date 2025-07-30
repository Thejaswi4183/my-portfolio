"use client";
import { useEffect, useState } from "react";

export default function AnimatedGrid() {
  // Disable animation if prefers-reduced-motion
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setAnimate(!mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-20 opacity-[0.25]`}
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-grid ${animate ? "animate-[grid-pan_18s_linear_infinite]" : ""}`}
        style={{ maskImage: "radial-gradient(closest-side, rgba(0,0,0,0.7), transparent 75%)" }}
      />
    </div>
  );
}
