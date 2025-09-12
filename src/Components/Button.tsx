import React from "react";

interface ShineButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  bgColor?: string; // Can be hex or gradient
}

const sizeStyles: Record<
  NonNullable<ShineButtonProps["size"]>,
  { padding: string; fontSize: string }
> = {
  sm: { padding: "0.7rem", fontSize: "0.875rem" },
  md: { padding: "0.6rem 1.4rem", fontSize: "1rem" },
  lg: { padding: "0.8rem 1.8rem", fontSize: "1.125rem" },
};

export const ShineButton: React.FC<ShineButtonProps> = ({
  label = "Shine now",
  onClick,
  className = "",
  size = "md",
  bgColor = "linear-gradient(325deg, hsl(217 100% 56%) 0%, hsl(194 100% 69%) 55%, hsl(217 100% 56%) 90%)",
}) => {
  const { padding, fontSize } = sizeStyles[size];

  // Determine whether to use solid color or gradient
  const backgroundImage = bgColor.startsWith("linear-gradient")
    ? bgColor
    : `linear-gradient(to right, ${bgColor}, ${bgColor})`;

  return (
    <button
      onClick={onClick}
      className={`relative text-white font-medium rounded-md min-w-[120px]transition-all duration-700 ease-in-out border-none cursor-pointer focus:outline-none     
        hover:bg-[length:280%_auto] active:scale-95 ${className}`}
      style={{
        backgroundImage,
        backgroundSize: "280% auto",
        backgroundPosition: "initial",
        color: "hsl(0 0% 100%)",
        fontSize,
        padding,
        transition: "0.8s",
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLButtonElement).style.backgroundPosition = "right top")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLButtonElement).style.backgroundPosition = "initial")
      }
    >
      {label}

      {/* Shine effect */}
      <div
        className="absolute top-0 left-[-75%] w-[200%] 
      h-full bg-white/40 skew-x-[-20deg] opacity-0 
      group-hover:opacity-100 animate-shine pointer-events-none"
      />
    </button>
  );
};
