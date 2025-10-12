"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLDivElement | null>,
  spring: { mass: number; stiffness: number; damping: number }
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  return useSpring(targetSize, spring);
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
}

function DockItem({
  icon,
  label,
  to,
  mouseX,
  baseItemSize,
  magnification,
  distance,
  spring,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring
  );
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) =>
      setShowLabel(value === 1)
    );
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative inline-flex items-center justify-center rounded-full shadow-md bg-gradient-to-br 
        from-purple-400 from-40% bg-pink-400 backdrop-blur-3xl transition-transform ${
          isActive ? "ring-2 ring-purple-500 scale-110" : ""
        }`
      }
    >
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onHoverStart={() => isHovered.set(1)}
        onHoverEnd={() => isHovered.set(0)}
        className="flex items-center justify-center text-black dark:text-amber-50"
      >
        {icon}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md 
                border px-2 py-0.5 text-xs text-black dark:text-white"
              style={{ x: "-50%" }}
              role="tooltip"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </NavLink>
  );
}

interface DockItemConfig {
  icon: React.ReactNode;
  label: string;
  to: string;
}

interface DockProps {
  items: DockItemConfig[];
  className?: string;
  spring?: { mass: number; stiffness: number; damping: number };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
  position?: "bottom" | "top";
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring
  );

  return (
    <div className="block md:hidden">
      <motion.div
        style={{ height: animatedHeight }}
        className="flex max-w-full items-center"
      >
        <motion.div
          onMouseMove={({ pageX }) => {
            isHovered.set(1);
            mouseX.set(pageX);
          }}
          onMouseLeave={() => {
            isHovered.set(0);
            mouseX.set(Infinity);
          }}
          className={`fixed w-screen bottom-0 transform flex justify-around items-center gap-3 border-purple-400 border-t-1 backdrop-blur-sm ${className}`}
          style={{ height: panelHeight }}
        >
          {items.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              mouseX={mouseX}
              baseItemSize={baseItemSize}
              magnification={magnification}
              distance={distance}
              spring={spring}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
