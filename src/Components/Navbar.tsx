import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface SparkleNavbarProps {
  items: { name: string; path: string }[]; // updated: each item now has a name and a route path
  color?: string;
}

const SparkleNavbar: React.FC<SparkleNavbarProps> = ({
  items,
  color = "#e270c6ff",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navRef = useRef<HTMLDivElement>(null);
  const activeElementRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const getOffsetLeft = (element: HTMLAnchorElement) => {
    if (!navRef.current || !activeElementRef.current) return 0;
    const elementRect = element.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    const activeElementWidth = activeElementRef.current.offsetWidth;
    return (
      elementRect.left -
      navRect.left +
      (elementRect.width - activeElementWidth) / 2
    );
  };

  useLayoutEffect(() => {
    const activeLink = linkRefs.current[activeIndex];
    if (navRef.current && activeElementRef.current && activeLink) {
      gsap.set(activeElementRef.current, {
        x: getOffsetLeft(activeLink),
      });
      gsap.to(activeElementRef.current, {
        "--active-element-show": "1",
        duration: 0.2,
      });
    }
  }, []);

  const handleClick = (index: number) => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;
    const oldLink = linkRefs.current[activeIndex];
    const newLink = linkRefs.current[index];

    if (
      index === activeIndex ||
      !navElement ||
      !activeElement ||
      !oldLink ||
      !newLink
    ) {
      return;
    }

    const x = getOffsetLeft(newLink);
    const direction = index > activeIndex ? "after" : "before";
    const spacing = Math.abs(x - getOffsetLeft(oldLink));

    navElement.classList.add(direction);

    gsap.set(activeElement, {
      rotateY: direction === "before" ? "180deg" : "0deg",
    });

    gsap.to(activeElement, {
      keyframes: [
        {
          "--active-element-width": `${
            spacing > navElement.offsetWidth - 60
              ? navElement.offsetWidth - 60
              : spacing
          }px`,
          duration: 0.3,
          ease: "none",
        },
        {
          "--active-element-scale-x": "0",
          "--active-element-scale-y": ".25",
          "--active-element-width": "0px",
          duration: 0.3,
          onStart: () => {
            gsap.to(activeElement, {
              "--active-element-mask-position": "40%",
              duration: 0.5,
            });
            gsap.to(activeElement, {
              "--active-element-opacity": 0,
              delay: 0.45,
              duration: 0.25,
            });
          },
          onComplete: () => {
            activeElement.innerHTML = "";
            navElement.classList.remove("before", "after");
            gsap.set(activeElement, {
              x: getOffsetLeft(newLink),
              "--active-element-show": "1",
            });
            setActiveIndex(index);
          },
        },
      ],
    });

    gsap.to(activeElement, {
      x,
      "--active-element-strike-x": "-50%",
      duration: 0.5,
      ease: "none",
    });
  };

  return (
    <>
      <style>{`
        .navigation-menu {
          margin: 12px 0px;
          position: relative;
          z-index: 1
        }
        .navigation-menu ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          gap: 24px;
        }
        .navigation-menu ul li a {
          text-decoration: none;
          color: oklch(71.4% 0.203 305.504);
          font-weight: 500;
          cursor: pointer;
          transition: text-shadow 0.25s;
        }
        .navigation-menu ul li a.active {
          color: ${color};
        }
        .navigation-menu ul li:not(.active):hover a {
          text-shadow: 0 0 10px ${color}, 0 0 20px ${color};
        }
        .navigation-menu .active-element {
          --active-element-scale-x: 1;
          --active-element-scale-y: 1;
          --active-element-show: 0;
          --active-element-opacity: 0;
          --active-element-width: 0px;
          --active-element-strike-x: 0%;
          --active-element-mask-position: 0%;
          position: absolute;
          left: 0;
          top: 24px;
          height: 3px;
          width: 36px;
          border-radius: 2px;
          background-color: ${color};
          opacity: var(--active-element-show);
        }
        .navigation-menu.before .active-element {
          transform: rotateY(180deg);
        }
      `}</style>

      <header className="bg-transparent backdrop-blur-sm fixed w-full top-0 left-0 z-1">
        <nav className="flex items-center justify-between md:px-24 px-4 py-3 md:py-1">
          <div>
            <p className="text-2xl font-extrabold text-purple-400">
              Kavs<span className="text-gray-400 ">7</span>ansh
              <span className="text-gray-400 "> •</span> dev
            </p>
          </div>

          <div
            className="navigation-menu font-medium hidden md:block"
            ref={navRef}
          >
            <ul>
              {items.map((item, index) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="active-element" ref={activeElementRef} />
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
      </header>
    </>
  );
};

export default SparkleNavbar;
