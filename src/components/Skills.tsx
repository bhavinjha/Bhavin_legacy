import { Code2, Cpu, Presentation, FileCode, Bot, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

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
    icon: Bot,
    title: "AI Automation",
    description: "Building smart automated workflows using AI tools",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20 hover:border-secondary/50",
  },
  {
    icon: Globe,
    title: "Website Construction",
    description: "Creating modern, responsive websites and web applications",
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
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10">
        <SectionHeader
          title="My Skills"
          highlightWord="Skills"
          subtitle="Technologies and areas I'm passionate about"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <TiltCard key={index} intensity={5}>
              <Card
                className={`p-6 bg-card/50 backdrop-blur border ${skill.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan group animate-fade-in cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div
                    className={`${skill.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300`}
                  >
                    <skill.icon className={`h-7 w-7 ${skill.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold">{skill.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="pt-2 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium">Learn more</span>
                    <span className="inline-block">→</span>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
              </Card>
            </TiltCard>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm constantly learning and exploring new technologies. Every skill is a stepping stone to innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
