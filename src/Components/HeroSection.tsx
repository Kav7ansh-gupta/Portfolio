import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { ShineButton } from "./Button";
import { TypingText } from "./animate-ui/text/typing";
import HeroAnimation from "./HeroAnimation";
const HeroSection = () => {
  const handleClick = () => {
    window.location.href = "mailto:kavyanshgupta119@gmail.com";
  };
  return (
    <>
      <motion.div
        className="flex md:flex-row max-w-screen flex-col px-11 md:pt-34 pt-18   "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 7, y: 20 }}
        transition={{ duration: 1.8 }}
      >
        <div className="md:min-w-6/10 sm:w-full md:h-full h-screen md:px-13  text-gray-400">
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
              <a href="#Projects">
                <ShineButton
                  label="See my Projects"
                  size="md"
                  bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
                />
              </a>
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
              <a href="#Projects">
                <ShineButton
                  label="See my Projects"
                  size="sm"
                  bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
                />
              </a>
              <ShineButton
                onClick={handleClick}
                label="Let’s Work Together"
                size="sm"
                bgColor="linear-gradient(325deg, hsla(315, 49%, 43%, 1.00) 0%, hsla(286, 90%, 41%, 1.00) 55%, hsla(313, 42%, 58%, 1.00) 90%)"
              />
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
            </div>
          </div>
        </div>
        <div className="w-4/10 hidden md:block">
          <HeroAnimation />
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
