import HeroSection from "@/Components/HeroSection";
import About from "./About";
import Skills from "./Skils";
import Projects from "./Projects";
import Certifications from "./Certifications";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />

        <About />

        <Skills />

        <Projects />

        <Certifications />
      </div>
    </div>
  );
};

export default Home;
