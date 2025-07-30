"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
import type { SkillCategory } from "@/lib/skills";

const iconFor: Record<string, React.ElementType> = {
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

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((cat, idx) => {
        const Icon = iconFor[cat.key] ?? Code2;

        return (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.05 }}
            className="card p-5 hover:shadow-[0_8px_30px_rgb(0_0_0_/_.25)] hover:border-white/20 transition hover-shine"
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mx", `${e.clientX - r.left}px`);
              el.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                <Icon size={18} />
              </span>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.05 + i * 0.03 }}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm font-medium
                             hover:scale-105 hover:border-[--color-primary]/50 hover:text-[--color-primary] transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
