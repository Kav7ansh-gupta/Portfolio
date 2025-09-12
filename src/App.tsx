import { useEffect } from "react";
import SparkleNavbar from "./Components/Navbar";
import SmokeyCursor from "./Components/BackgroundCursor";
import HeroSection from "./Components/HeroSection";
import Skills from "./Components/Skils";
import { HexagonBackground } from "./Components/animate-ui/backgrounds/hexagon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Dock from "./Components/Dock";
import { FcHome } from "react-icons/fc";
import { GrCertificate } from "react-icons/gr";
import { SiAboutdotme, SiSkillshare } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // subtle reveal for sections
    const sections = gsap.utils.toArray("section") as HTMLElement[];

    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 40 },
        {
          opacity: 4,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
          },
        }
      );
    });

    // ✅ cleanup to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    }
  };
  const dockItems = [
    {
      icon: <GrCertificate />,
      label: "Certification",
      onClick: () => handleScroll("Certifications"),
    },
    {
      icon: <SiAboutdotme size={40} />,
      label: "About",
      onClick: () => handleScroll("About"),
    },
    {
      icon: <FcHome size={24} />,
      label: "Home",
      onClick: () => handleScroll("Home"),
    },
    {
      icon: <SiSkillshare size={40} />,
      label: "Slills",
      onClick: () => handleScroll("Skills"),
    },
    {
      icon: <GoProjectSymlink size={24} />,
      label: "My projects",
      onClick: () => handleScroll("Projects"),
    },
  ];

  return (
    <>
      <div className="">
        <HexagonBackground className="fixed " />
        <SmokeyCursor
          simulationResolution={256}
          dyeResolution={2048}
          densityDissipation={2}
          curl={5}
          splatForce={8000}
          enableShading={true}
        />
        <SparkleNavbar
          items={["Home", "Skills", "About", "Projects", "Certifications"]}
        />
        <section id="Home" className="h-screen">
          <HeroSection />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Certifications">
          <Certifications />
        </section>
        <Dock
          items={dockItems}
          position="bottom"
          panelHeight={75}
          baseItemSize={60}
        />
      </div>
    </>
  );
};

export default App;
