import { SplineScene } from "./ui/splite";
import { LampContainer } from "./ui/lamp";
import { TypingText } from "./animate-ui/text/typing";

const Hero = () => {
  return (
    <div>
      <LampContainer className="absolute h-screen top-14 shadow-2xl shadow-purple-500">
        <div className=""></div>
      </LampContainer>
      <div className="relative top-14 overflow-hidden h-screen ">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className=" "
        />
        <div>
          <TypingText
            text={"Welcome to the World of Inovation"}
            duration={100}
            delay={3000}
            className="absolute left-40 top-100 text-white text-6xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
