import { useState } from "react";
import AICore from "@/components/AICore";
import Robot3D from "@/components/Robot3D";
import NeuralNetwork from "@/components/NeuralNetwork";
import HolographicTerminal from "@/components/HolographicTerminal";
import GlassFolder from "@/components/ui/glass-folder-cards";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Lab = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden flex flex-col justify-between">
      {/* Top Bar */}
      <div className="w-full p-4 flex items-center justify-between z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/")}
          className="gap-2 bg-card/50 backdrop-blur border-primary/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Button>

        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent font-orbitron tracking-widest">
            BHAVIN'S LAB
          </h1>
          <p className="text-xs text-muted-foreground font-syne">Interactive Technology Experience</p>
        </div>

        <div className="w-24" /> {/* Spacer for symmetry */}
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <NeuralNetwork />
      </div>

      {/* Main 3D Interactive Scene - Centered and well-spaced */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center justify-items-center max-w-4xl mx-auto mb-12">
          {/* AI Core */}
          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-glow-cyan">
            <AICore />
            <div className="text-center space-y-1">
              <div className="text-sm font-bold text-primary flex items-center gap-1.5 justify-center font-orbitron tracking-widest">
                <Sparkles className="w-4 h-4" /> AI CORE
              </div>
              <div className="text-xs text-muted-foreground font-syne">Neural Network &amp; Neural Processing</div>
            </div>
          </div>

          {/* Robot */}
          <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-secondary/20 hover:border-secondary/50 transition-all duration-300 shadow-glow-purple">
            <Robot3D />
            <div className="text-center space-y-1">
              <div className="text-sm font-bold text-secondary flex items-center gap-1.5 justify-center font-orbitron tracking-widest">
                <Sparkles className="w-4 h-4" /> ROBOTICS UNIT
              </div>
              <div className="text-xs text-muted-foreground font-syne">Autonomous Systems &amp; Mechanics</div>
            </div>
          </div>
        </div>

        {/* Holographic Terminal - Cleanly integrated below */}
        <div className="w-full flex justify-center z-40 mt-4">
          <HolographicTerminal />
        </div>

        {/* Glass Folder Cards — 21st.dev interactive showcase */}
        <div className="w-full flex flex-col items-center z-40 mt-16 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent font-orbitron tracking-widest">
              GLASS FOLDERS
            </h2>
            <p className="text-xs text-muted-foreground font-syne mt-2">
              Hover to lean · Click to open · + to add
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-end">
            <GlassFolder
              label="My Projects"
              art="aurora"
              seed={3}
              appearDelay={0}
              files={[
                { name: "Robotics Arm", meta: "3D · WebGL", art: "ember" },
                { name: "Neural Net", meta: "Canvas · Live", art: "dusk" },
                { name: "Portfolio", meta: "React · Vite" },
              ]}
            />
            <GlassFolder
              label="Lab Archives"
              art="none"
              action="more"
              labelPlacement="top-left"
              appearDelay={140}
              files={[
                { name: "AI Core", meta: "Neural · Live", art: "dusk" },
                { name: "Experiments", meta: "12 files" },
                { name: "Hologram", meta: "Terminal UI", art: "ember" },
              ]}
              menu={[{ label: "Rename" }, { label: "Share…", danger: true }]}
            />
            <GlassFolder
              label="Khilkhila"
              art="ember"
              seed={11}
              action="none"
              labelPlacement="top-right"
              appearDelay={280}
              files={[
                { name: "Gulab Jamun", meta: "Legacy · Est. 1985", art: "verdant" },
                { name: "Recipe Notes", meta: "TXT · 2 KB" },
                { name: "Brand Assets", meta: "PNG · 4.2 MB", art: "aurora" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Footer / Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -top-32 -left-32 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] -bottom-32 -right-32 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};

export default Lab;
