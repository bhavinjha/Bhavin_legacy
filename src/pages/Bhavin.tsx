import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Lightbulb, Target, Trophy, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import TiltCard from "@/components/TiltCard";
import GradientText from "@/components/GradientText";
import khilkhilaImage from "@/assets/khilkhila_gulab_jamun.png";

const Bhavin = () => {
  const [selectedQuote, setSelectedQuote] = useState(0);

  const timeline = [
    {
      year: "2024",
      title: "Started Programming Journey",
      description: "Began learning Python and C++, diving into the world of code",
      icon: Sparkles,
      color: "text-primary",
    },
    {
      year: "2024",
      title: "Built First Robot",
      description: "Created a line-following robot using sensors and Arduino",
      icon: Trophy,
      color: "text-secondary",
    },
    {
      year: "2025",
      title: "Advanced Robotics Projects",
      description: "Developed obstacle-avoiding and light-tracking robots",
      icon: Target,
      color: "text-primary",
    },
    {
      year: "2026",
      title: "Exploring AI & Web Development",
      description: "Started building websites and learning AI automation",
      icon: Lightbulb,
      color: "text-secondary",
    },
  ];

  const interests = [
    { title: "Robotics", emoji: "🤖", description: "Building intelligent machines" },
    { title: "Programming", emoji: "💻", description: "Python & C++ development" },
    { title: "AI & Automation", emoji: "🧠", description: "Smart workflows & systems" },
    { title: "Web Development", emoji: "🌐", description: "Modern web experiences" },
    { title: "Electronics", emoji: "⚡", description: "Circuits & sensors" },
    { title: "Learning", emoji: "📚", description: "Always curious" },
  ];

  const quotes = [
    {
      text: "Every expert was once a beginner.",
      author: "Helen Hayes",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
  ];

  const stats = [
    { label: "Age", value: "Class 8th", icon: Calendar },
    { label: "Location", value: "Bihar, India", icon: "🇮🇳" },
    { label: "Passion", value: "Technology", icon: Heart },
    { label: "Focus", value: "Learning", icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-48 -left-48 animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative z-10 text-center">
          <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">The Person Behind the Code</span>
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            This is <GradientText animate>Bhavin</GradientText>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A young mind passionate about building the future through technology, one project at a time.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{typeof stat.icon === "string" ? stat.icon : <stat.icon className="h-8 w-8 mx-auto text-primary" />}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-lg font-semibold text-foreground">{stat.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container relative z-10">
          <SectionHeader
            title="My Journey"
            highlightWord="Journey"
            subtitle="The milestones that shaped my path in technology"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <TiltCard key={index} intensity={3}>
                <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-6 relative z-10">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="bg-muted text-foreground">
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <SectionHeader
            title="What I Love"
            highlightWord="Love"
            subtitle="The things that inspire and drive me every day"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {interests.map((interest, index) => (
              <TiltCard key={index} intensity={5}>
                <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group cursor-pointer relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 text-center space-y-3">
                    <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                      {interest.emoji}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <SectionHeader
            title="Words That Inspire"
            highlightWord="Inspire"
            subtitle="Quotes that fuel my journey in technology"
          />

          <div className="max-w-3xl mx-auto">
            <TiltCard intensity={8}>
              <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 text-center space-y-6">
                  <div className="text-6xl text-primary/20 font-serif-display">"</div>
                  <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed italic font-serif-display">
                    {quotes[selectedQuote].text}
                  </p>
                  <p className="text-lg text-muted-foreground font-display">— {quotes[selectedQuote].author}</p>

                  <div className="flex justify-center gap-2 pt-6">
                    {quotes.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedQuote(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          selectedQuote === index
                            ? "bg-primary w-8"
                            : "bg-muted hover:bg-primary/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Khilkhila Legacy */}
      <section className="py-20 px-4 relative overflow-hidden bg-muted/20">
        <div className="container relative z-10">
          <SectionHeader
            title="The Khilkhila Legacy"
            highlightWord="Khilkhila"
            subtitle="More than just a Gulab Jamun—a part of who I am"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <TiltCard intensity={5}>
              <div className="rounded-2xl shadow-glow-purple overflow-hidden border border-secondary/20 bg-card/40 p-4 text-center animate-fade-in-out">
                 <img src={khilkhilaImage} alt="Khilkhila Gulab Jamun" className="w-full h-auto max-h-[350px] object-contain mx-auto hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer" />
              </div>
            </TiltCard>
            <Card className="p-8 bg-card/50 backdrop-blur border-secondary/20 h-full flex flex-col justify-center space-y-4 font-display">
              <Badge variant="outline" className="w-fit border-secondary/40 text-secondary font-orbitron tracking-widest uppercase">Legendary Mascot</Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground font-cinzel">khilkhila_gulab_jamun</h3>
              <p className="text-muted-foreground leading-relaxed font-syne text-lg">
                The Khilkhila Gulab Jamun legacy is deeply rooted in my personality and identity. It represents sweetness, resilience, eternal cheerfulness, and tradition, blending seamlessly with my tech and coding journey.
              </p>
              <p className="text-lg text-primary italic font-caveat">
                "Stories and lore coming soon as the legend unfolds..."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />

              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  Thank You for Visiting! 🙏
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  I'm just getting started on this incredible journey of learning and building.
                  Every project, every line of code, and every robot I build brings me one step closer
                  to my dreams. Thanks for being part of my story!
                </p>
                <div className="pt-4">
                  <Badge variant="outline" className="text-primary-foreground border-primary-foreground/50 px-6 py-2">
                    Keep Learning, Keep Building 🚀
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bhavin;
