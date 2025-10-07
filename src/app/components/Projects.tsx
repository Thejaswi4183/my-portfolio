"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      title: "Ancient Artifacts Dating Using Machine Learning",
      period: "11/2024 – 06/2025",
      summary:
        "Multi-modal model using ResNet50 for image features and LSTM-based NLP for notes; FastAPI backend, Next.js frontend, Supabase auth & logs.",
      tech: [
        { name: "ResNet50", link: "https://keras.io/api/applications/resnet/" },
        { name: "LSTM (NLP)", link: "https://keras.io/api/layers/recurrent_layers/lstm/" },
        { name: "FastAPI", link: "https://fastapi.tiangolo.com/" },
        { name: "Next.js", link: "https://nextjs.org/" },
        { name: "Supabase", link: "https://supabase.com/" },
      ],
      github: "https://github.com/Thejaswi4183/Ancient-Artifacts-Dating",
      featured: true,
    },
    {
      title: "Snake Game Using Arduino UNO",
      period: "03/2025 – 04/2025",
      summary:
        'Arduino UNO mini-project with SH1106 1.3" OLED (I2C) + joystick; breadboard wiring and controls.',
      tech: [
        { name: "Arduino UNO", link: "https://www.arduino.cc/" },
        { name: "SH1106 OLED", link: "https://www.buydisplay.com/1-3-inch-sh1106-oled-module" },
        { name: "Joystick", link: "https://www.sparkfun.com/products/9034" },
        { name: "C/C++", link: "https://en.cppreference.com/w/" },
      ],
      github: "https://github.com/Thejaswi4183/Snake-Game-Using-Arduino-Uno",
      featured: false,
    },
    {
      title: "AgroCulture",
      period: "12/2024 – 01/2025",
      summary: "Website connecting farmers and buyers with listings and marketplace flow.",
      tech: [
        { name: "PHP", link: "https://www.php.net/" },
        { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        { name: "MySQL", link: "https://www.mysql.com/" },
        { name: "jQuery", link: "https://jquery.com/" },
      ],
      github: "https://github.com/Thejaswi4183/AgroCulture",
      featured: false,
    },
    {
      title: "Grocery WebApp",
      period: "05/2023 – 06/2023",
      summary: "Grocery site with product listings and basic cart.",
      tech: [
        { name: "PHP", link: "https://www.php.net/" },
        { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        { name: "MySQL", link: "https://www.mysql.com/" },
      ],
      github: "https://github.com/Thejaswi4183/Grocery-Website",
      featured: false,
    },
    {
      title: "Part Picker",
      period: "12/2022 – 01/2023",
      summary: "Browse PC parts online with simple filtering.",
      tech: [
        { name: "PHP", link: "https://www.php.net/" },
        { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Bootstrap", link: "https://getbootstrap.com/" },
        { name: "MySQL", link: "https://www.mysql.com/" },
      ],
      github: "https://github.com/Thejaswi4183/PartPicker",
      featured: false,
    },
    {
      title: "Java BlueJ Project",
      period: "08/2018 – 08/2018",
      summary: "Simple Java project on BlueJ.",
      tech: [
        { name: "Java", link: "https://www.java.com/" },
        { name: "BlueJ", link: "https://www.bluej.org/" },
      ],
      github: "https://github.com/Thejaswi4183/Java-BlueJ-Project",
      featured: false,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const gap = 24; // px gap we use between cards
    const navbarHeight = 100;

    // calc function used for responsive end/x values (recomputed on refresh)
    const calcScroll = () => {
      const cards = container.querySelectorAll<HTMLElement>(".project-card");
      const totalWidth = Array.from(cards).reduce((sum, card) => sum + card.offsetWidth + gap, 0);
      const viewportWidth = window.innerWidth;
      // ensure non-negative
      return Math.max(0, totalWidth - viewportWidth + 100);
    };

    const cardsContainer = container.querySelector<HTMLElement>(".cards");
    if (!cardsContainer) return;

    // main horizontal scroll tween (x uses function so it re-evaluates on refresh)
    const horizTween = gsap.to(cardsContainer, {
      x: () => -calcScroll(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: `top-=${navbarHeight} top`,
        end: () => `+=${calcScroll() + 200}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // fade-in the cards as the pinned section begins
    const cards = container.querySelectorAll<HTMLElement>(".project-card");
    const fadeTween = gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: container,
          start: `top-=${navbarHeight} top`,
          toggleActions: "play none none none", 
        },
      }
    );

    // refresh on resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      // cleanup
      window.removeEventListener("resize", onResize);
      horizTween.kill();
      fadeTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    
    <section className="w-full overflow-hidden bg-gray-900 text-white py-12 relative z-10 ">
      <div ref={containerRef} className="relative">
        <h2 className="text-3xl font-bold text-center mb-3 sticky top-0 bg-gray-900 z-20">
          Academic Projects
        </h2>

        {/* Scroll hint */}
        <p className="text-center text-gray-400 text-sm mb-6 animate-pulse opacity-80">
          Scroll → to see all projects
        </p>

        <div className="cards flex gap-6 min-w-max px-4 cursor-grab select-none">
          {projects.map((p, idx) => (
            <div
              key={p.title}
              // small responsive widths so scroll works on narrow screens
              className={`project-card relative flex-none w-72 sm:w-80 p-6 ${
                idx === 0 ? "pt-10" : ""
              } rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:brightness-110 cursor-pointer ${
                p.featured
                  ? "bg-gradient-to-br from-cyan-700 to-indigo-800 border border-cyan-500"
                  : "bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700"
              }`}
              onClick={() => window.open(p.github, "_blank")}
            >
              {/* Featured ribbon INSIDE the card (small & contained) */}
              {idx === 0 && (
                <div
                  className="absolute top-4 right-0.25 origin-top-right rotate-12 bg-yellow-400 text-gray-900 font-bold px-3 py-0.5 rounded-sm text-[10px] shadow-md"
                  style={{ transformOrigin: "top right" }}
                >
                  FEATURED
                </div>
              )}

              <h3 className="text-xl font-semibold mb-1 text-white">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{p.period}</p>
              <p className="text-gray-300 text-sm mb-3">{p.summary}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <a
                    key={t.name}
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium bg-gray-800 text-cyan-400 px-2 py-1 rounded-full transition-all transform hover:scale-110 hover:text-white hover:shadow-md hover:shadow-cyan-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.name}
                  </a>
                ))}
              </div>

              {/* GitHub icon bottom-right inside the card */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors text-lg"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open ${p.title} on GitHub`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
