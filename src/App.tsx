import SparkleNavbar from "./Components/Navbar";
import Skills from "./Pages/Skils";
import About from "./Pages/About";
import Certifications from "./Pages/Certifications";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";

const App = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Cerification", path: "/certification" },
  ];

  return (
    <>
      <div className="">
        <SparkleNavbar items={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
