"use client";
import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; size: number };

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      c.width = Math.floor(innerWidth * dpr);
      c.height = Math.floor(innerHeight * dpr);
      c.style.width = innerWidth + "px";
      c.style.height = innerHeight + "px";
    };
    resize();

    const N = Math.floor(80 * (innerWidth / 1440));
    const parts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.08 * dpr,
      vy: (Math.random() - 0.5) * 0.08 * dpr,
      size: (Math.random() * 1.2 + 0.4) * dpr,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(255,255,255,0.7)";

      for (const p of parts) {
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          // stronger, but still gentle
          const force = Math.min(0.012 * dpr, 40 / dist);
          p.vx += (dx / dist) * force * 0.45;
          p.vy += (dy / dist) * force * 0.45;
        }

        p.x += p.vx;
        p.y += p.vy;

        // soft bounds
        if (p.x < 0 || p.x > c.width) p.vx *= -1;
        if (p.y < 0 || p.y > c.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX * dpr, y: e.clientY * dpr, active: true };
    };
    const onLeave = () => (mouse.current.active = false);

    const onClick = (e: MouseEvent) => {
      const cx = e.clientX * dpr,
        cy = e.clientY * dpr;
      for (const p of parts) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 * dpr) {
          // radial impulse
          const f = (1 - dist / (160 * dpr)) * 2.2;
          p.vx += (dx / (dist || 1)) * f;
          p.vy += (dy / (dist || 1)) * f;
        }
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick);

    raf.current = requestAnimationFrame(tick);

    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-40"
      aria-hidden
    />
  );
}
