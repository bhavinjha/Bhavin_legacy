import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, ShieldAlert, Sun, Video } from "lucide-react";

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
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Robotics projects that showcase innovation and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-cyan group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <project.icon className={`h-8 w-8 ${project.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="bg-muted text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-primary text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-3 text-primary-foreground">Future Projects</h3>
          <p className="text-primary-foreground/90 leading-relaxed">
            Currently exploring more advanced robotics concepts and planning to build AI-powered systems. 
            Stay tuned for Python and C++ based applications that push the boundaries of what's possible!
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
