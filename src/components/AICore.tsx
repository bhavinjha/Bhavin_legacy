import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";

const AICore = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        className="relative w-24 h-24 inline-block cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => setClicked(true)}
      >
        {/* Outer rings */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
        </div>

        {/* Central core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
            <Cpu className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Information Panel */}
      {clicked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setClicked(false)}>
          <Card className="p-6 bg-card border-primary/20 max-w-[400px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary mx-auto">
                <Cpu className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-center">AI &amp; TECHNOLOGY</h3>
              <p className="text-muted-foreground text-center text-sm">
                Exploring artificial intelligence, robotics, and software engineering.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                  <div>Building intelligent automation systems</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-1.5" />
                  <div>Developing responsive web applications</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                  <div>Creating innovative robotic solutions</div>
                </div>
              </div>
              <Button size="sm" onClick={() => setClicked(false)} className="w-full">
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default AICore;
