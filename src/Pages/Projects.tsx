import TrueFocus from "../Components/animate-ui/text/TureFocus";

export default function Projects() {
  return (
    <div className="dark:text-white text-black px-5 md:px-16 ">
      <TrueFocus
        sentence="Project Showcase"
        manualMode={false}
        blurAmount={5}
        borderColor="purple"
        animationDuration={1.4}
        pauseBetweenAnimations={3}
      />
      <div>
      </div>
    </div>
  );
}
