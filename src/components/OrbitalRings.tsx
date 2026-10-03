import React from "react";

interface OrbitalRingsProps {
  className?: string;
}

const OrbitalRings: React.FC<OrbitalRingsProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Ring 1 */}
      <div
        className="absolute inset-0 rounded-full border border-primary/20 animate-spin"
        style={{ animationDuration: "20s" }}
      />

      {/* Ring 2 */}
      <div
        className="absolute inset-4 rounded-full border border-secondary/20 animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />

      {/* Ring 3 */}
      <div
        className="absolute inset-8 rounded-full border border-primary/10 animate-spin"
        style={{ animationDuration: "25s" }}
      />

      {/* Orbital dots */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />
    </div>
  );
};

export default OrbitalRings;
