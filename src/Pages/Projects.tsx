import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="md:px-16 my-20 px-6"
    >
      <div>
        <h1 className="text-5xl font-semibold mb-10">Project</h1>
        <div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
