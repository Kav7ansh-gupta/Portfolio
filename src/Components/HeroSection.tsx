import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <motion.div>
        <div className="md:h-[88vh] w-screen h-[80vh] md:px-16 md:py-1.5 px-4 py-5">
          <div className=" rounded-2xl h-full w-full ">
            <div className="md:px-13 h-full w-full flex flex-col justify-center md:justify-start">
              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ ease: "linear", duration: 1.3 }}
                animate={{ opacity: 1, filter: "none" }}
                className="text-6xl md:text-[11rem] font-extrabold uppercase"
              >
                <span className="hero-title">Kavyansh</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ ease: "linear", duration: 1.7, delay: 1.3 }}
                animate={{ opacity: 1, filter: "none" }}
                className="text-6xl md:text-[11rem] text-[#e25cc1] font-extrabold uppercase"
              >
                gupta
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ ease: "linear", duration: 1.7, delay: 2.5 }}
                animate={{ opacity: 1, filter: "none" }}
                className="text-3xl font-medium text-gray-400 mt-4"
              >
                Software Developer
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
