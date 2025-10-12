import TrueFocus from "../Components/animate-ui/text/ShinyText";

export default function Projects() {
  return (
    <div className="p-12">
      <TrueFocus
        sentence="My Projects"
        manualMode={false}
        blurAmount={5}
        borderColor="purple"
        animationDuration={1.4}
        pauseBetweenAnimations={3}
      />
    </div>
  );
}
