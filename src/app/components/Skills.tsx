"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Monitor,
  Palette,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: "foundations", title: "Foundations", items: ["Data Structures", "Algorithms"] },
  { key: "languages", title: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { key: "frontend", title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { key: "backend", title: "Backend", items: ["Node.js", "Express.js", "Java EE (JSP, Servlets, JDBC)", "PHP"] },
  { key: "databases", title: "Databases & Cloud", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { key: "ai", title: "AI & Analytics", items: ["Machine Learning", "Data Analysis"] },
  { key: "tools", title: "Tools & IDEs", items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "IntelliJ IDEA"] },
  { key: "other", title: "Other", items: ["Mobile App Development", "Adobe Premiere Pro"] },
  { key: "os", title: "Operating Systems", items: ["Linux"] },
];

const iconFor: Record<string, any> = {
  foundations: BookOpen,
  languages: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  ai: Brain,
  tools: Wrench,
  os: Monitor,
  other: Palette,
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.utils.toArray(".skill-tag").forEach((tag: any) => {
        gsap.from(tag, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: tag,
            start: "top 90%",
            once: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6 bg-white/5 backdrop-blur-lg">
      <h2 className="text-3xl font-semibold mb-12 text-center">Technical Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => {
          const Icon = iconFor[cat.key] ?? Code2;

          return (
            <div
              key={cat.key}
              className="skill-card relative p-6 rounded-xl border border-white/20 backdrop-blur-md bg-white/10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag cursor-default px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-sm font-medium text-white transition transform hover:scale-110 hover:bg-cyan-600 hover:text-white hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
