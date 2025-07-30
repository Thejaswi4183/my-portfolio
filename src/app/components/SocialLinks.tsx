"use client";
import { Github, Youtube, Instagram, Linkedin } from "lucide-react";

type Props = {
  size?: number;
  className?: string;
  links?: Partial<{
    github: string;
    youtube: string;
    instagram: string;
    linkedin: string;
  }>;
};

const defaultLinks = {
  github: "https://github.com/Thejaswi4183",
  youtube: "https://www.youtube.com/@DefinitelyNotVoid",
  instagram: "https://www.instagram.com/_notvoid__/",
  linkedin: "https://www.linkedin.com/in/thejaswi-s-165b0a256/",
};

export default function SocialLinks({ size = 18, className = "", links = {} }: Props) {
  const l = { ...defaultLinks, ...links };
  const base = "inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 transition hover:border-white/20 hover:bg-white/10";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a className={base} href={l.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={size} /></a>
      <a className={base} href={l.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={size} /></a>
      <a className={base} href={l.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={size} /></a>
      <a className={base} href={l.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={size} /></a>
    </div>
  );
}
