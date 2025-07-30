import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/lib/projects";
import Skills from "./components/Skills";
import { skillsByCategory } from "@/lib/skills";
export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="projects" title="Academic Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
         <Skills categories={skillsByCategory} />
      </Section>

      <Section id="contact" title="Contact">
        <div className="card p-6 text-center">
          <p className="text-zinc-300">
            Want to collaborate or have questions? Reach out:
          </p>
          <div className="mt-3 flex justify-center gap-4">
            <a
              href="mailto:thejaswi4uns@gmail.com"
              className="underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/thejaswi-s-165b0a256/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
