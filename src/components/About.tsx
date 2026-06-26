import { GraduationCap, MapPin, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A young learner passionate about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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

            <div className="space-y-4 pt-4">
              <Card className="p-4 bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Class 8th Student at Scottish Public School
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Binodpur, Katihar, Bihar, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Future Goals</h3>
                    <p className="text-sm text-muted-foreground">
                      Mastering AI automation, advanced robotics, and building production-ready websites
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <Card className="relative p-8 bg-card/50 backdrop-blur border-primary/20">
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-border">
                    <h3 className="text-2xl font-bold mb-2">Quick Facts</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Age Group</span>
                      <span className="font-semibold">Class 8th Student</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Main Interests</span>
                      <span className="font-semibold">Programming & Robotics</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Languages</span>
                      <span className="font-semibold">Python, C++</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Projects Built</span>
                      <span className="font-semibold text-primary">4+ Robots</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
