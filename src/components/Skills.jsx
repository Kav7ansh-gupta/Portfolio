import React from "react";
import SectionTitle from "./SectionTitle";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";

const list = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJsSquare />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaGithub />, label: "Git/GitHub" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionTitle eyebrow="What I use" title="Skills & Tools" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
        {list.map(({ icon, label }) => (
          <div
            key={label}
            className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-glow transition"
          >
            <div className="text-3xl">{icon}</div>
            <p className="text-sm">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
