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
            start: "top 80%",
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

  return (
    <>
      <div className="">
        {/* Background */}
        <HexagonBackground className="fixed inset-0 flex items-center justify-center rounded-xl" />

        {/* Cursor effect */}
        <SmokeyCursor
          simulationResolution={256}
          dyeResolution={2048}
          densityDissipation={2}
          curl={5}
          splatForce={8000}
          enableShading={true}
        />

        {/* Navbar */}
        <SparkleNavbar
          items={[
            "Home",
            "About",
            "Skills",
            "Certifications",
            "Projects",
            "Contact",
          ]}
        />

        {/* Sections */}
        <section id="home">
          <HeroSection />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>

        {/* Add more sections here to see the scroll reveal effect */}
        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Certifications />
        </section>
      </div>
    </>
  );
};

export default App;
