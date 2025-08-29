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
          {/* <p className="text-primary font-semibold">Hi, I’m Kavyansh 👋</p> */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
            Hi, I'm <span className="text-accent">Kavyansh gupta </span>I build
            ideas into beautiful, fast, and scalable apps
          </h1>
          <p className="mt-4 text-slate-300 max-w-prose">
            I’m a full-stack developer who loves crafting smooth user
            experiences and powerful backends. Whether it’s a sleek portfolio,
            an e-commerce platform, or a complex SaaS product — I make it work
            and make it shine
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-primary text-slate-950 font-medium shadow-glow hover:shadow-soft transition"
            >
              See My Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 transition"
            >
              Let’s Work Together
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
          <div className="flex aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-primary/30 via-accent/30 to-pink-500/30 p-1 justify-center ">
            <img
              src="https://avatars.githubusercontent.com/u/192176181?s=400&u=c62746a2f06d3faa4c45e18ef2b259f7e3c68351&v=4"
              className="rounded-3xl h-full w-full bg-slate-900/60 border border-white/10"
            />
            <div className="flex flex-col items-center absolute top-60">
              <p className="text-sm uppercase tracking-widest text-slate-200">
                Available for work
              </p>
              <p className="text-2xl font-semibold mt-1 ">
                Fullstack Developer/Freelancer
              </p>
              <p className="text-slate-200 mt-1">Remote • India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
