"use client";
import { useEffect, useRef, useState } from "react";

// Softer spotlight that fades when idle and hides over interactive elements.
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current!;
    let raf = 0;
    let idleTimer: number | undefined;

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const target = { ...pos };

    const setVar = () => {
      el.style.setProperty("--mx", `${pos.x}px`);
      el.style.setProperty("--my", `${pos.y}px`);
    };

    const loop = () => {
      // faster easing -> less laggy “dragging” feel
      pos.x += (target.x - pos.x) * 0.25;
      pos.y += (target.y - pos.y) * 0.25;
      setVar();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      // Hide spotlight on interactive controls to keep cursor clean
      const interactive = (e.target as HTMLElement | null)?.closest(
        "a,button,input,textarea,select,[role='button']"
      );
      const shouldHide = !!interactive;

      // show on move, then auto‑hide after 1.2s of inactivity (if not over UI)
      setVisible(!shouldHide);
      clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setVisible(false), 1200);
    };

    const onLeave = () => setVisible(false);
    const onResize = () => setVar();

    setVar();
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Smaller radius, lower opacity, NO blend mode to avoid color inversion
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-200"
      style={{
        opacity: visible ? 0.35 : 0, // softer
        background:
          "radial-gradient(400px 400px at var(--mx,50%) var(--my,50%), rgba(99,102,241,.16), transparent 60%)",
        // mixBlendMode: "plus-lighter", // <- removed to prevent odd cursor halo
      }}
    />
  );
}
