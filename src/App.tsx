import SparkleNavbar from "./Components/Navbar";
import SmokeyCursor from "./Components/BackgroundCursor";
import HeroSection from "./Components/HeroSection";
import Skills from "./Pages/Skils";
import { HexagonBackground } from "./Components/animate-ui/backgrounds/hexagon";
import About from "./Pages/About";
import Certifications from "./Pages/Certifications";
import Dock from "./Components/Dock";
import { FcHome } from "react-icons/fc";
import { GrCertificate } from "react-icons/gr";
import { SiAboutdotme, SiSkillshare } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Hero from "./Components/Hero";

const App = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Cerification", path: "/certification" },
  ];

  const dockItems = [
    { icon: <FcHome />, label: "Home", to: "/" },
    { icon: <SiAboutdotme />, label: "About", to: "/about" },
    { icon: <SiSkillshare />, label: "Skills", to: "/skills" },
    { icon: <GoProjectSymlink />, label: "Project", to: "/projects" },
    { icon: <GrCertificate />, label: "Certification", to: "/certification" },
  ];

  return (
    <>
      <div className="relative">
        <HexagonBackground className="fixed" />
        <SmokeyCursor
          simulationResolution={256}
          dyeResolution={2048}
          densityDissipation={2}
          curl={5}
          splatForce={8000}
          enableShading={true}
        />
        <SparkleNavbar items={navItems} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <HeroSection />

                <About />

                <Skills />

                <Projects />

                <Certifications />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certifications />} />
        </Routes>
        <Dock
          items={dockItems}
          position="bottom"
          panelHeight={75}
          baseItemSize={50}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
