import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // subtle reveal for sections
    const sections = gsap.utils.toArray("section");
    sections.forEach((sec, i) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sec, start: "top 80%", once: true },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen font-display">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
