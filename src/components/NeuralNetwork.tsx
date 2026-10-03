import { useRef, useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

interface Node {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  speed: number;
  offset: number;
}

interface Connection {
  start: Node;
  end: Node;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePos = useMousePosition();
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        if (parent) {
          setDimensions({
            width: parent.clientWidth,
            height: parent.clientHeight,
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const { width, height } = dimensions;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Initialize nodes in 3D space (projected to 2D)
    const nodeCount = 30;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 100 + (i % 3) * 40; // Multiple ring radii
      const zOffset = (i % 4) * 30;

      nodes.push({
        x: (width / 2) + Math.cos(angle) * radius,
        y: (height / 2) + Math.sin(angle) * radius * 0.6,
        z: zOffset,
        baseX: (width / 2) + Math.cos(angle) * radius,
        baseY: (height / 2) + Math.sin(angle) * radius * 0.6,
        baseZ: zOffset,
        speed: 0.02 + Math.random() * 0.03,
        offset: Math.random() * Math.PI * 2,
      });
    }
    nodesRef.current = nodes;

    const render = () => {
      if (!ctx || !canvas) return;
      timeRef.current += 0.01;

      ctx.clearRect(0, 0, width, height);

      // Draw connections first (behind nodes)
      ctx.strokeStyle = "rgba(6, 182, 212, 0.15)"; // Primary color with low opacity
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];

          // Calculate 3D distance
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dz = nodeA.z - nodeB.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Only connect nearby nodes
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.3;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Draw and animate nodes
      nodes.forEach((node, i) => {
        // Parallax effect from mouse
        const mouseParallaxX = (mousePos.x - width / 2) * 0.005;
        const mouseParallaxY = (mousePos.y - height / 2) * 0.005;

        // Idle animation (breathing effect)
        const breath = Math.sin(timeRef.current + node.offset) * 3;

        // Update position with 3D rotation effect
        const rotationSpeed = 0.2;
        const rotatedX =
          node.baseX - (width / 2 - width / 2) * Math.cos(timeRef.current * rotationSpeed) +
          (node.baseZ - node.baseZ) * Math.sin(timeRef.current * rotationSpeed);
        const rotatedY = node.baseY + breath + mouseParallaxY;

        node.x = rotatedX + mouseParallaxX;
        node.y = rotatedY;

        // Draw node
        const pulse = Math.sin(timeRef.current * 2 + node.offset) * 2;
        const radius = 3 + pulse * 0.5;

        // Glow effect
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 4);
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.8)");
        gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.3)");
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};

export default NeuralNetwork;
