import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, ShieldAlert, Sun, Video } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const projects = [
  {
    icon: LineChart,
    title: "Line-Following Robot",
    description: "An autonomous robot that uses infrared sensors to detect and follow a pre-defined line path with precision.",
    technologies: ["Sensors", "Arduino", "Motor Control"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ShieldAlert,
    title: "Obstacle-Avoiding Robot",
    description: "Smart robot equipped with ultrasonic sensors to detect obstacles in its path and navigate around them autonomously.",
    technologies: ["Ultrasonic", "Navigation", "Automation"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sun,
    title: "Light-Tracking Robot",
    description: "A phototropic robot that uses light sensors to detect and move towards or away from light sources intelligently.",
    technologies: ["LDR Sensors", "Phototropism", "Control"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Video,
    title: "Remote Surveillance Robot",
    description: "Remotely controlled robot designed for observation and surveillance, potentially equipped with camera capabilities.",
    technologies: ["Remote Control", "Video", "Surveillance"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10">
        <SectionHeader
          title="My Projects"
          highlightWord="Projects"
          subtitle="Robotics projects that showcase innovation and problem-solving"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <TiltCard key={index} intensity={5}>
              <Card
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-cyan group animate-fade-in cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div
                    className={`${project.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300`}
                  >
                    <project.icon className={`h-8 w-8 ${project.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-muted text-foreground hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="pt-2 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium">Explore project</span>
                    <span className="inline-block">→</span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Future Projects - Enhanced */}
        <Card className="p-8 bg-gradient-primary text-center max-w-3xl mx-auto animate-fade-in relative overflow-hidden group cursor-pointer" style={{ animationDelay: "0.4s" }}>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 text-primary-foreground">🚀 Future Projects</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Currently exploring more advanced robotics concepts and planning to build AI-powered systems.
              Stay tuned for Python and C++ based applications that push the boundaries of what's possible!
            </p>
          </div>
        </Card>

        {/* Projects count */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground">
            <span className="text-primary font-bold text-lg">4+</span> projects completed | <span className="text-secondary font-bold text-lg">∞</span> ideas in progress
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
