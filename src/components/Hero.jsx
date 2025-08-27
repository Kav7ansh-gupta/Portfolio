import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="pt-14 sm:pt-20 md:pt-28 pb-20 relative">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-semibold">Hi, I’m Kavyansh 👋</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
            Web Developer crafting <span className="text-accent">smooth</span>{" "}
            UI & delightful UX
          </h1>
          <p className="mt-4 text-slate-300 max-w-prose">
            I build fast, accessible, and animated web experiences using React,
            Tailwind, GSAP and Framer Motion.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-primary text-slate-950 font-medium shadow-glow hover:shadow-soft transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xl">
            <a
              className="hover:text-primary"
              href="https://github.com/Kav7ansh-gupta"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-primary"
              href="https://linkedin.com/in/Kav7ansh-gupta"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-pink-500/30 p-1">
            <div className="rounded-3xl h-full w-full bg-slate-900/60 border border-white/10 backdrop-blur flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Available for work
                </p>
                <p className="text-2xl font-semibold mt-2">Front‑end / React</p>
                <p className="text-slate-400 mt-2">Remote • India</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
