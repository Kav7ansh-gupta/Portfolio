"use client";

import React from "react";

type OrbitCardProps = {
  children: React.ReactNode;
  className?: string;
};

const OrbitCard: React.FC<OrbitCardProps> = ({ children, className }) => {
  return (
    <div className={`relative ${className} rounded-xl`}>
      {/* Glowing shadow background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center rounded-xl bg-background">
        <div className="absolute h-full w-full animate-orbit-glow rounded-xl">
          <div className="h-full w-full rounded-xl bg-transparent shadow-[0_0_30px_10px_rgba(239,127,206,0.5)]"></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative z-10 rounded-xl bg-background p-6 ">
        {children}
      </div>

      {/* Keyframes for glowing effect */}
      <style>{`
        @keyframes orbit-glow {
          0% {
      transform: scale(1);
      box-shadow: 0 10px 20px rgba(183, 104, 230, 0.87);
    }
    50% {
      transform: scale(1);
      box-shadow: 0 15px 25px rgba(206, 53, 198, 0.97);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 20px 30px rgba(160, 17, 60, 0.5);
    }
        }
        .animate-orbit-glow {
          animation: orbit-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default OrbitCard;
