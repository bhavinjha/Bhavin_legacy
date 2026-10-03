import { GraduationCap, MapPin, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container relative z-10">
        <SectionHeader
          title="About Me"
          highlightWord="Me"
          subtitle="A young learner passionate about technology and innovation"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am a student from Bihar who has started learning programming in Python and C++.
              I also have experience in making detailed PowerPoint presentations and have created
              several interesting projects in robotics. I have advanced to AI automation and website
              construction, building smart workflows and modern web experiences.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              My journey in technology began with curiosity about how things work, which led me
              to explore the fascinating world of robotics and programming. Every day brings new
              learning opportunities, and I'm excited to continue growing my skills.
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  description: "Class 8th Student at Scottish Public School",
                  color: "text-primary",
                  bgColor: "bg-primary/10",
                  borderColor: "border-primary/20 hover:border-primary/50"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  description: "Binodpur, Katihar, Bihar, India",
                  color: "text-secondary",
                  bgColor: "bg-secondary/10",
                  borderColor: "border-secondary/20 hover:border-secondary/50"
                },
                {
                  icon: Target,
                  title: "Future Goals",
                  description: "Mastering AI automation, advanced robotics, and production-ready websites",
                  color: "text-primary",
                  bgColor: "bg-primary/10",
                  borderColor: "border-primary/20 hover:border-primary/50"
                }
              ].map((item, idx) => (
                <TiltCard key={idx} intensity={3}>
                  <Card className={`p-4 bg-card/50 border ${item.borderColor} transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden`}>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start gap-3 relative z-10">
                      <div className={`${item.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
                  </Card>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right - Quick Facts Card */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse" />

              <TiltCard intensity={5}>
                <Card className="relative p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow-cyan">
                  <div className="space-y-6">
                    <div className="text-center pb-6 border-b border-border">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Quick Facts</h3>
                      <p className="text-xs text-muted-foreground">A snapshot of who I am</p>
                    </div>

                    <div className="space-y-5">
                      {[
                        { label: "Age Group", value: "Class 8th Student", isMain: false },
                        { label: "Main Interests", value: "Programming, Robotics & AI", isMain: false },
                        { label: "Languages", value: "Python, C++", isMain: false },
                        { label: "Projects Built", value: "4+ Robots & Websites", isMain: true }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-center pb-4 ${
                            idx !== 3 ? "border-b border-border/50" : ""
                          } animate-scale-in`}
                          style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                        >
                          <span className="text-muted-foreground text-sm">{item.label}</span>
                          <span className={`font-semibold ${item.isMain ? "text-primary" : "text-foreground"}`}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Motivational quote */}
                    <div className="pt-4 border-t border-border/50 italic text-center">
                      <p className="text-sm text-muted-foreground">
                        "Every expert was once a beginner."
                      </p>
                    </div>
                  </div>
                </Card>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
