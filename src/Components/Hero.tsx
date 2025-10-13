import { SplineScene } from "./ui/splite";
import { LampContainer } from "./ui/lamp";
import { TypingText } from "./animate-ui/text/typing";
import { FaArrowCircleDown, FaArrowDown, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Delay showing the arrow by 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <LampContainer className="absolute h-screen top-14  animate-hero-glow">
        <div className=""></div>
      </LampContainer>
      <div className="relative top-14 overflow-hidden h-screen ">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className=" "
        />
        <div className="hidden md:block">
          <TypingText
            text={"Welcome to the"}
            duration={100}
            delay={3000}
            className="absolute left-70 top-110 text-white text-5xl shadow-2xl"
          />
          <TypingText
            text={"World"}
            duration={100}
            delay={4700}
            className="absolute left-168 top-110 text-purple-500 text-5xl shadow-2xl"
          />
          <TypingText
            text={" of Inovation"}
            duration={100}
            delay={5100}
            className="absolute left-206 top-110 text-white text-5xl shadow-2xl"
          />
          <TypingText
            text={"Continue to"}
            duration={100}
            delay={7000}
            className="absolute left-130 top-124 text-white text-3xl shadow-2xl"
          />
          <TypingText
            text={"Explore"}
            duration={100}
            delay={8400}
            className="absolute left-174 top-124 text-purple-500 text-3xl shadow-2xl"
          />
        </div>
        <div>
          <FaGithub />
          <FaArrowCircleDown
            size={100}
            className="text-white relative top-100"
          />
        </div>
      </div>
      <style>{`
  @keyframes hero-glow {
    0% {
      transform: scale(1);
      box-shadow: 0 10px 20px rgba(183, 104, 230, 0.87);
    }
    50% {
      transform: scale(1);
      box-shadow: 0 15px 25px rgba(206, 53, 198, 0.97);
      }
    100% {
      transform: scale(1);
      box-shadow: 0 20px 30px rgba(160, 17, 60, 0.5);
      }
      }
      
      .animate-hero-glow {
        animation: hero-glow 4s ease-in-out infinite;
        }
        `}</style>
      <div className="md:hidden block">
        <TypingText
          text={"Welcome to the"}
          duration={100}
          delay={3000}
          className="absolute left-20 top-110 text-white text-5xl shadow-2xl"
        />
        <TypingText
          text={"World"}
          duration={100}
          delay={4700}
          className="absolute left-43 top-122 text-purple-500 text-5xl shadow-2xl"
        />
        <TypingText
          text={" of Inovation"}
          duration={100}
          delay={5100}
          className="absolute left-20 top-134 text-white text-5xl shadow-2xl"
        />
      </div>
      {showArrow && (
        <motion.div
          initial={{ opacity: 100, y: 100 }}
          animate={{ opacity: 100, y: [0, 20, 0] }} // move up and down
          transition={{
            duration: 1.5, // smooth up-down animation
            repeat: Infinity, // loop forever
            ease: "easeInOut",
          }}
        >
          <FaArrowDown
            size={80}
            className="text-purple-400 bg-purple-300/10 rounded-full p-3 relative bottom-20 md:left-158  left-36 shadow-purple-400 shadow-md "
          />
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
