"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contacts = [
  {
    title: "Email",
    icon: FaEnvelope,
    link: "mailto:thejaswi4uns@gmail.com",
    bg: "bg-gradient-to-br from-purple-700 to-indigo-800",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/thejaswi-s-165b0a256",
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Thejaswi4183",
    bg: "bg-gradient-to-br from-gray-800 to-gray-700",
  },
  {
    title: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/users/586373273160253453",
    bg: "bg-gradient-to-br from-indigo-700 to-purple-700",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 bg-gray-900 text-white"
    >
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-card p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer ${c.bg} hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform`}
            >
              <Icon size={32} className="mb-3" />
              <span className="text-lg font-medium">{c.title}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
