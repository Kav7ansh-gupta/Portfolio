"use client";

import { motion } from "framer-motion";

export default function CuteAvatarPlaceholder() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-110 h-90 rounded-[60%] bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 shadow-xl hidden md:block"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 40% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
