import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  intensity = 10,
  className = ""
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = ((e.clientY - centerY) / rect.height) * intensity;
    const rotateY = ((e.clientX - centerX) / rect.width) * intensity;

    setRotation({ x: -rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
