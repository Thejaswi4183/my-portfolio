"use client";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className="block card p-5 hover:shadow-[0_8px_30px_rgb(0_0_0_/_.25)] hover:border-white/20 transition hover-shine"
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        {project.featured && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
            Featured
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-400 mt-0.5">{project.period}</p>
      <p className="mt-2 text-zinc-200">{project.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs">
        {project.tech.map((t) => (
          <li key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10">{t}</li>
        ))}
      </ul>
    </motion.a>
  );
}
