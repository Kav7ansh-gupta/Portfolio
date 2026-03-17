import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { ShineButton } from "./Button";

import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const handleClick = () => {
    window.location.href = "mailto:kavyanshgupta119@gmail.com";
  };
  return (
    <>
      <div className="h-[85vh] w-full flex items-center justify-center">
        <div className="flex md:flex-row max-w-screen flex-col">
          <div className="md:w-5/10 sm:w-full md:h-full md:px-13 text-gray-400">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mt-2">
              Hi, I'm <span className="text-purple-400">Kavyansh gupta </span>I
              build ideas into beautiful, fast, and scalable apps
            </h1>
            <p className="mt-4 text-gray-400 max-w-prose">
              <p>
                I’m a full-stack developer who loves crafting smooth user
                experiences and powerful backends. Whether it’s a sleek
                portfolio, an e-commerce platform, or a complex SaaS product — I
                make it work and make it shine
              </p>
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
          <div className="w-5/10 hidden md:block h-0">
            <div className="absolute left-203 bottom-0 top-[-16px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
