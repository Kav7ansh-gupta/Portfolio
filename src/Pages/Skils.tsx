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
import TrueFocus from "../Components/animate-ui/text/ShinyText";

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
    <div className="py-16 px-12 ">
      <TrueFocus
        sentence="My Skills"
        manualMode={false}
        blurAmount={5}
        borderColor="purple"
        animationDuration={1.4}
        pauseBetweenAnimations={3}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
        {list.map(({ icon, label }) => (
          <div
            key={label}
            className="p-4 rounded-xl bg-gray-400/20 backdrop-blur-3xl border border-gray-400 flex flex-col items-center gap-2 hover:-translate-y-1 hover:shadow-blue-300 transition"
          >
            <div className="text-3xl dark:text-white text-black">{icon}</div>
            <p className="text-sm dark:text-white text-black ">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
