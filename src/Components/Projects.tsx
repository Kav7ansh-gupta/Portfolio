import TrueFocus from "./animate-ui/text/ShinyText";

const projects = [
  {
    title: "Animated SaaS Landing",
    desc: "Marketing site with GSAP scroll animations, Framer Motion cards, and Tailwind components.",
    link: "https://example.com",
    tags: ["React", "GSAP", "Tailwind"],
  },
  {
    title: "E‑commerce UI",
    desc: "Product listing, filters, cart drawer, and Stripe-like checkout UI.",
    link: "https://example.com",
    tags: ["React", "Zustand", "Tailwind"],
  },
  {
    title: "Portfolio v2",
    desc: "Portfolio with 3D hover effects, particles, and blazing performance.",
    link: "https://example.com",
    tags: ["React", "Framer Motion", "GSAP"],
  },
];

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
