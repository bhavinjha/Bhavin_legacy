import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-primary mb-4">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bhavin Jha
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Young Programmer & Robotics Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            A passionate Class 7 student from Bihar, India, exploring the exciting worlds 
            of programming, robotics, and technology. Building the future, one project at a time.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="relative lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-cyan">
              <img 
                src={profileImage} 
                alt="Bhavin Jha - Young Programmer and Robotics Enthusiast" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
