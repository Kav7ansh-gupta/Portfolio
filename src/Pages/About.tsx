import ProfileCard from "../Components/ProfileCard";
import { Profile } from "../Assets/assets";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="dark:text-white text-black px-5 md:px-16 my-20"
    >
      <div className="hidden md:block max-w-screen">
        <h2 className="text-5xl font-semibold mb-10">About Me</h2>
        <div className="flex justify-between gap-9 ">
          <div className="bg-white/20 border p-5 rounded-3xl  shadow-violet-600">
            <p className="p-2">
              Hi, I’m <span className="text-purple-400">Kavyansh Gupta</span> —
              a passionate BCA student, software developer, and tech enthusiast
              who loves building creative solutions through programming. I enjoy
              experimenting with new technologies, solving problems, and
              continuously learning to stay ahead in the ever-evolving world of
              software development. <br />
              <br />
              Beyond coding, I’m also a gamer and a sports enthusiast, which
              helps me maintain a balance of creativity, strategy, and
              discipline in life. Whether it’s working on a project, competing
              on the field, or exploring a new game, I always give my best with
              focus and dedication.
            </p>
            <br />
            <h1 className="text-3xl text-purple-400">💻 What I do:</h1>
            <ul className="list-decimal p-2 px-4">
              <li>Develop and design software projects</li>
              <li>Explore modern programming languages and frameworks</li>
              <li>Build intuitive and user-friendly applications</li>
            </ul>
            <br />
            <h1 className="text-3xl text-purple-400">🎯 My Vision:</h1>
            <p className="p-2">
              To grow as a versatile developer, contribute to impactful
              projects, and keep pushing my boundaries as I learn and create.
            </p>
          </div>
          <motion.div className="max-w-3/10 ">
            <ProfileCard
              name="Kavyansh Gupta"
              title="Software Developer"
              handle="Codewithkav7ansh"
              status="Online"
              contactText="Contact Me"
              avatarUrl={Profile.profile}
              miniAvatarUrl={Profile.profile}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
            />
          </motion.div>
        </div>
      </div>
      <div className="block md:hidden my-20">
        <div className="flex justify-center mb-15">
          <ProfileCard
            name="Kavyansh Gupta"
            title="Software Developer"
            handle="Codewithkav7ansh"
            status="Online"
            contactText="Contact Me"
            avatarUrl={Profile.profile}
            miniAvatarUrl={Profile.profile}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            className=" "
          />
        </div>
        <h2 className="text-5xl font-semibold mb-10">About Me</h2>
        <div className="bg-white/20 border-2 p-5 rounded-3xl shadow-3xl shadow-violet-600">
          <p className="text-sm">
            Hi, I’m Kavyansh Gupta — a passionate BCA student, software
            developer, and tech enthusiast who loves building creative solutions
            through programming. I enjoy experimenting with new technologies,
            solving problems, and continuously learning to stay ahead in the
            ever-evolving world of software development. <br />
            <br />
            Beyond coding, I’m also a gamer and a sports enthusiast, which helps
            me maintain a balance of creativity, strategy, and discipline in
            life. Whether it’s working on a project, competing on the field, or
            exploring a new game, I always give my best with focus and
            dedication.
          </p>
          <br />
          <h1 className="text-2xl text-purple-300">💻 What I do:</h1>
          <ul className="list-disc text-[13px] p-2 px-4">
            <li>Develop and design software projects</li>
            <li>Explore modern programming languages and frameworks</li>
            <li>Build intuitive and user-friendly applications</li>
          </ul>
          <br />
          <h1 className="text-2xl text-purple-300">🎯 My Vision:</h1>
          <p className="text-sm  p-2">
            To grow as a versatile developer, contribute to impactful projects,
            and keep pushing my boundaries as I learn and create.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
