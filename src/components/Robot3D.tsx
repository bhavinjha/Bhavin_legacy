import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const Robot3D = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        className="relative w-28 h-32 inline-block cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => setClicked(true)}
      >
        {/* Robot Body */}
        <div className="relative w-full h-full">
          {/* Head */}
          <div className="absolute bottom-[60%] left-1/2 -translate-x-1/2 w-12 h-12 bg-primary/20 rounded-full border border-primary/30 flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>

          {/* Body */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-16 h-20 bg-primary/10 rounded-xl border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-secondary rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>

          {/* Legs */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 flex justify-between">
            <div className="w-0.5 h-8 bg-primary/20 rounded" />
            <div className="w-0.5 h-8 bg-primary/20 rounded" />
          </div>
        </div>
      </div>

      {/* Information Panel */}
      {clicked && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setClicked(false)}>
          <Card className="p-6 bg-card border-primary/20 max-w-[400px] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary mx-auto">
                <Bot className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-center">ROBOTICS JOURNEY</h3>
              <p className="text-muted-foreground text-center text-sm">
                From line-following to obstacle avoidance, exploring robotics through hands-on projects.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                  <div>Line-Following Robot</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-1.5" />
                  <div>Obstacle-Avoiding Robot</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
                  <div>Light-Tracking Robot</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-1.5" />
                  <div>Remote Surveillance Robot</div>
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

export default Robot3D;
