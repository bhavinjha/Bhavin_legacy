import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  animate = false
}) => {
  return (
    <span
      className={`bg-gradient-primary bg-clip-text text-transparent ${
        animate ? "bg-[length:200%_auto] animate-shimmer" : ""
      } ${className}`}
      style={{
        backgroundImage: animate
          ? "linear-gradient(90deg, hsl(189 100% 50%), hsl(263 70% 60%), hsl(189 100% 50%))"
          : undefined
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
