import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaPython,
  FaJava,
  FaRust,
  FaChrome,
} from "react-icons/fa";
import { ShineButton } from "./Button";
import { TypingText } from "./animate-ui/text/typing";
import HeroAnimation from "./HeroAnimation";
import { NavLink } from "react-router-dom";
import BeamCircle from "./lightswind/beam-circle";
const HeroSection = () => {
  const handleClick = () => {
    window.location.href = "mailto:kavyanshgupta119@gmail.com";
  };
  return (
    <>
      <motion.div
        className="flex md:flex-row max-w-screen flex-col  px-5 md:px-16   "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 7, y: 20 }}
        transition={{ duration: 1.8 }}
      >
        <div className="md:min-w-6/10 sm:w-full md:h-full md:px-13  text-gray-400">
          <h1 className="text-3xl sm:text-5xl font-extrabold  leading-tight mt-2">
            Hi, I'm <span className="text-purple-400">Kavyansh gupta </span>I
            build ideas into beautiful, fast, and scalable apps
          </h1>
          <p className="mt-4 text-gray-400 max-w-prose">
            <TypingText
              text={`I’m a full-stack developer who loves crafting smooth user
            experiences and powerful backends. Whether it’s a sleek portfolio,
            an e-commerce platform, or a complex SaaS product — I make it work
            and make it shine`}
            />
          </p>
          <div className="hidden md:block">
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <NavLink to="/projects">
                <ShineButton
                  label="See my Work"
                  size="md"
                  bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
                />
              </NavLink>
              <ShineButton
                onClick={handleClick}
                label="Let’s Work Together"
                size="md"
                bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
              />
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </div>
          <div className="md:hidden block">
            <div className="mt-6 flex gap-4">
              <NavLink to="/projects">
                <ShineButton
                  label="See my Work"
                  size="sm"
                  bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
                />
              </NavLink>
              <ShineButton
                onClick={handleClick}
                label="Let’s Work Together"
                size="sm"
                bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
              />
            </div>
            <div className="mt-6 flex items-center gap-5 text-2xl">
              <a
                className="hover:text-primary"
                href="https://www.instagram.com/code_with_kav7ansh?igsh=YWkxd3hzcDluOWYw&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:text-primary"
                href="http://youtube.com/@codewithkav7ansh?si=rLOOMHN02zUqz9Ra"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                className="hover:text-primary"
                href="https://x.com/kav7ansh_gupta?s=21"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="mt-6 flex items-center gap-5 text-4xl">
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
              <a
                className="hover:text-primary"
                href="https://www.instagram.com/code_with_kav7ansh?igsh=YWkxd3hzcDluOWYw&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:text-primary"
                href="http://youtube.com/@codewithkav7ansh?si=rLOOMHN02zUqz9Ra"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                className="hover:text-primary"
                href="https://x.com/kav7ansh_gupta?s=21"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="w-4/10 hidden md:block h-0">
          <div className="absolute left-203 bottom-0 top-[-16px]">
            <BeamCircle
              size={450}
              centerIcon={<FaReact className="text-3xl text-purple-400" />}
              orbits={[
                {
                  id: 1,
                  radiusFactor: 0.25,
                  speed: 10,
                  icon: <FaDownload className="text-blue-400" />,
                  iconSize: 24,
                  orbitColor: "rgba(0, 150, 255, 0.3)",
                  orbitThickness: 3,
                },
                {
                  id: 2,
                  radiusFactor: 0.44,
                  speed: 13,
                  icon: <FaCss3 className="text-blue-500" />,
                  iconSize: 43,
                  orbitThickness: 2,
                },
                {
                  id: 3,
                  radiusFactor: 0.44,
                  speed: 24,
                  icon: <FaHtml5 className="text-orange-400" />,
                  iconSize: 50,
                  orbitThickness: 2,
                },
                {
                  id: 4,
                  radiusFactor: 0.44,
                  speed: 38,
                  icon: <FaJs className="text-yellow-400" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 5,
                  radiusFactor: 0.62,
                  speed: 17,
                  icon: <FaReact className="text-blue-300" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 6,
                  radiusFactor: 0.62,
                  speed: 25,
                  icon: <FaFire className="text-orange-600" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 7,
                  radiusFactor: 0.62,
                  speed: 31,
                  icon: <FaDatabase className="text-green-400" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 7,
                  radiusFactor: 0.62,
                  speed: 46,
                  icon: <FaNodeJs className="text-green-400" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 8,
                  radiusFactor: 0.78,
                  speed: 17,
                  icon: <FaPython className="text-blue-600" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 9,
                  radiusFactor: 0.78,
                  speed: 25,
                  icon: <FaJava className="text-red-600" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 10,
                  radiusFactor: 0.78,
                  speed: 31,
                  icon: <FaRust className="text-red-400" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
                {
                  id: 11,
                  radiusFactor: 0.78,
                  speed: 46,
                  icon: <FaChrome className="text-black" />,
                  iconSize: 38,
                  orbitThickness: 2,
                },
              ]}
            />
          </div>
          <HeroAnimation />
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
