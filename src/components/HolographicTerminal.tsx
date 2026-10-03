import { Code2, Cpu, Bot, Globe, FileCode } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const HolographicTerminal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { label: "PROJECTS", icon: FileCode, href: "projects" },
    { label: "CODE", icon: Code2, href: "skills" },
    { label: "AI", icon: Cpu, href: "skills" },
    { label: "ROBOTICS", icon: Bot, href: "projects" },
    { label: "EXPERIMENTS", icon: Globe, href: "contact" },
  ];

  const handleSectionClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="pointer-events-auto w-[300px] max-w-[80vw]"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(6, 182, 212, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)",
        overflow: "hidden",
        fontFamily: "'Courier New', monospace",
        color: "#06b6d4",
      }}
    >
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">BHAVIN_OS</div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-2">
          {/* Prompt */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="opacity-60">&gt;</span>
            <span>BHAVIN_OS</span>
            <span className="opacity-60">:~$</span>
          </div>

          {/* Menu Items */}
          <div className="space-y-1">
            {sections.map((section, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 px-2 py-1.5 rounded hover:bg-primary/10 transition-colors w-full text-left"
                onClick={() => handleSectionClick(section.href)}
              >
                <section.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{section.label}</span>
                <span className="ml-auto text-xs opacity-60">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs opacity-60 pt-2 border-t border-primary/20">
          <span className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>READY</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HolographicTerminal;
