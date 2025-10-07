"use client";

import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; // new

export default function HomePage() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Background />

      <Navbar />

      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}
