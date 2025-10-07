"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const lines = headingRef.current.querySelectorAll(".line");
    lines.forEach((line) => {
      const text = line.textContent || "";
      line.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char; // preserve spaces
        span.className = "inline-block";
        line.appendChild(span);
      });
    });

    const letters = headingRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
      }
    );

    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 z-10 pointer-events-none"></div>

      {/* Blurred floating gradient shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl animate-float-slow z-0"></div>
      <div className="absolute top-20 right-[-10rem] w-96 h-96 rounded-full bg-cyan-400 opacity-20 blur-3xl animate-float-slow delay-2s z-0"></div>
      <div className="absolute bottom-[-12rem] left-[-10rem] w-[28rem] h-[28rem] rounded-full bg-pink-400 opacity-15 blur-3xl animate-float-slow delay-1s z-0"></div>

      {/* Heading */}
      <h1
        ref={headingRef}
        className="relative z-20 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-snug"
      >
        <div className="line">Hi, I’m Thejaswi.</div>
        <div className="line">I build intelligent, interactive software.</div>
        <div className="line">MCA student & maker.</div>
      </h1>

      {/* Paragraph */}
      <p
        ref={paraRef}
        className="relative z-20 mt-6 text-gray-200 max-w-2xl text-lg"
      >
        Recent work includes a multi‑modal ML model for ancient artifact
        dating, IoT mini‑project, and full‑stack web apps.
      </p>
    </section>
  );
}
