import TrueFocus from "../Components/animate-ui/text/TureFocus";
import ProfileCard from "../Components/ProfileCard";
import { Profile } from "../Assets/assets";
import OrbitCard from "@/Components/lightswind/orbit-card";

export default function About() {
  return (
    <div className="dark:text-white text-black px-5 md:px-16 ">
      <TrueFocus
        sentence="About Me"
        manualMode={false}
        blurAmount={5}
        borderColor="purple"
        animationDuration={1.4}
        pauseBetweenAnimations={3}
      />
      <div className="hidden md:block max-w-screen">
        <div className="flex justify-between ">
          <OrbitCard className="max-w-7/10 rounded-3xl shadow-xl mr-10 ">
            <p className="p-2">
              Hi, I’m <span className="text-purple-300">Kavyansh Gupta</span> —
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
            <h1 className="text-3xl text-purple-300">💻 What I do:</h1>
            <ul className="list-disc p-2 px-4">
              <li>Develop and design software projects</li>
              <li>Explore modern programming languages and frameworks</li>
              <li>Build intuitive and user-friendly applications</li>
            </ul>
            <br />
            <h1 className="text-3xl text-purple-300">🎯 My Vision:</h1>
            <p className="p-2">
              To grow as a versatile developer, contribute to impactful
              projects, and keep pushing my boundaries as I learn and create.
            </p>
          </OrbitCard>
          <div className="max-w-3/10">
            <div className="">
              <div>
                <ProfileCard
                  name="Kavyansh Gupta"
                  title="Software Engineer"
                  handle="Codewithkav7ansh"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl={Profile.profile}
                  miniAvatarUrl={Profile.miniProfile}
                  iconUrl={Profile.profileBg}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center">
          <div>
            <div>
              <ProfileCard
                name="Kavyansh Gupta"
                title="Software Engineer"
                handle="Codewithkav7ansh"
                status="Online"
                contactText="Contact Me"
                avatarUrl={Profile.profile}
                miniAvatarUrl={Profile.miniProfile}
                iconUrl={Profile.profileBg}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                className=" "
              />
            </div>
          </div>
        </div>
        <div className=" mt-13 backdrop-opacity-90 border-2 border-purple-400 rounded-3xl p-4 shadow-2xl ">
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
    </div>
  );
}
