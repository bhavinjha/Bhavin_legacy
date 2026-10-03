import React, { useState, useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.3
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

export default MagneticButton;
