import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface SparkleNavbarProps {
  items: { name: string; path: string }[];
}

const SparkleNavbar: React.FC<SparkleNavbarProps> = ({ items }) => {
  return (
    <>
      <style>{`
        .navigation-menu {
          margin: 12px 0px;
          z-index: 1
          display: flex;
        }
        .navigation-menu ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          gap: 16px;
          color:#e25cc1;
        }
      `}</style>

      <div className="h-20"></div>
      <motion.header className="fixed w-full top-0 md:top-2 left-0 z-1 flex md:justify-center ">
        <nav className="flex items-center justify-between bg-white/30 md:rounded-full md:px-24 px-4 py-6 md:py-1 md:border border-b md:w-310 w-full">
          <div>
            <p className="md:text-3xl uppercase drop-shadow-md drop-shadow-white text-[#e25cc1] nav-title">
              Kavs<span className="text-gray-400  nav-title">7</span>
              ansh
              <span className="text-gray-400 nav-title"> •</span> dev
            </p>
          </div>

          <div className="navigation-menu font-medium hidden md:block">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden block">
            <div className="flex items-center gap-5 text-white text-2xl">
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
        </nav>
      </motion.header>
    </>
  );
};

export default SparkleNavbar;
