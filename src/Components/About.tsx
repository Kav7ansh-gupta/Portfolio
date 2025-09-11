import React from "react";

export default function About() {
  return (
    <section id="about" className="p-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="prose prose-invert max-w-none">
          <p>
            I’m a React developer focused on building elegant, performant
            interfaces. I care about interaction details, motion, and
            accessibility.
          </p>
          <p>
            My toolkit includes <b>React</b>, <b>TypeScript</b>,{" "}
            <b>Tailwind CSS</b>, <b>GSAP</b>, <b>Framer Motion</b>, and modern
            tooling like <b>Vite</b>.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            "Responsive, mobile‑first design",
            "Accessibility-first (WCAG)",
            "Reusable component systems",
            "Performance budgeting",
            "Animation choreography",
            "API integration & state mgmt.",
          ].map((i) => (
            <li
              key={i}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
