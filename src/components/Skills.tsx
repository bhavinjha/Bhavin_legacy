import { Code2, Cpu, Presentation, FileCode } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Python Programming",
    description: "Building applications and solving problems with Python",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20 hover:border-primary/50",
  },
  {
    icon: FileCode,
    title: "C++ Programming",
    description: "Learning system programming and algorithms",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20 hover:border-secondary/50",
  },
  {
    icon: Cpu,
    title: "Robotics",
    description: "Designing and building functional robots with sensors",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20 hover:border-primary/50",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    description: "Creating detailed and engaging PowerPoint presentations",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20 hover:border-secondary/50",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and areas I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur border ${skill.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${skill.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className={`h-7 w-7 ${skill.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
