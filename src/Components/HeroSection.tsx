import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <motion.div>
        <div className="h-screen w-screen  md:px-16 md:py-10 px-4 py-2">
          <div className="bg-white/10 rounded-2xl h-full w-full border-1">
            <div className="md:px-13 h-full w-full flex flex-col items-center justify-center gap-7">
              <h1 className="text-3xl text-center md:text-7xl font-extrabold uppercase">
                Hi, I'm <span className="text-purple-400">Kavyansh gupta </span>
              </h1>
              <h2 className="text-3xl text-center md:text-5xl font-extrabold uppercase">
                Welcome Into New Inovation
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
