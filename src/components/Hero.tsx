import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { Badge } from "@/components/ui/badge";
import MagneticButton from "./MagneticButton";
import GradientText from "./GradientText";
import TypewriterText from "./TypewriterText";
import TiltCard from "./TiltCard";
import OrbitalRings from "./OrbitalRings";
import ParticleCanvas from "./ParticleCanvas";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Tech Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(189 100% 50% / 0.03) 1px, transparent 1px), linear-gradient(to bottom, hsl(189 100% 50% / 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-48 -left-48 animate-pulse" />
        <div
          className="absolute w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
        />
      </div>

      {/* Floating Particles */}
      <ParticleCanvas particleCount={60} />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 border-primary/30 hover:border-primary/50 transition-colors">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hello, I'm{" "}
            <GradientText animate>
              Bhavin Jha
            </GradientText>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground font-medium min-h-[2.5rem]">
            <TypewriterText
              words={[
                "Young Programmer",
                "Robotics Enthusiast",
                "AI Explorer",
                "Technology Student",
                "Future Innovator"
              ]}
              loop
              typeSpeed={80}
              deleteSpeed={50}
              delayBetweenWords={2000}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A passionate Class 8th student from Bihar, India, exploring the exciting
            worlds of programming, robotics, and technology. Building the future, one
            project at a time.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow-cyan transition-all duration-300 group relative overflow-hidden"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </MagneticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Robots Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Ideas</div>
            </div>
          </div>
        </div>

        {/* Right - Enhanced Profile */}
        <div className="relative lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse-glow" />

            {/* Orbital rings */}
            <OrbitalRings className="scale-110" />

            {/* Profile image with tilt */}
            <TiltCard intensity={8} className="relative z-10">
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <img
                  src={profileImage}
                  alt="Bhavin Jha - Young Programmer and Robotics Enthusiast"
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 translate-x-full hover:translate-x-[-100%] transform" />
              </div>
            </TiltCard>

            {/* Floating code symbols */}
            <div className="absolute -top-8 -right-8 text-primary/20 text-6xl font-bold animate-float">
              &lt;/&gt;
            </div>
            <div
              className="absolute -bottom-8 -left-8 text-secondary/20 text-6xl font-bold animate-float"
              style={{ animationDelay: "1s" }}
            >
              &#123; &#125;
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
