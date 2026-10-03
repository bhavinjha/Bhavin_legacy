import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Send, Copy, Check, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    window.location.href = "mailto:bhavinjha9@gmail.com";
    toast({
      title: "Opening email client",
      description: "Redirecting to your default email application",
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("bhavinjha9@gmail.com");
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-primary" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-secondary" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10">
        <SectionHeader
          title="Get In Touch"
          highlightWord="Touch"
          subtitle="Have a question or want to collaborate? Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Card */}
          <TiltCard intensity={5}>
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan group animate-fade-in relative overflow-hidden h-full">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Email Me</h3>
                  <p className="text-muted-foreground mb-4">
                    I'll try to respond as soon as possible
                  </p>
                </div>

                {/* Email with copy button */}
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border/50 group/card hover:border-primary/30 transition-colors">
                  <a
                    href="mailto:bhavinjha9@gmail.com"
                    className="text-lg font-semibold text-primary hover:underline flex-1"
                  >
                    bhavinjha9@gmail.com
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopyEmail}
                    className="shrink-0 hover:bg-primary/10"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Send Email Button */}
                <MagneticButton strength={0.2}>
                  <Button
                    size="lg"
                    onClick={handleEmailClick}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-glow-cyan group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      Send Email
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                </MagneticButton>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground pt-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Binodpur, Katihar, Bihar, India</span>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
            </Card>
          </TiltCard>

          {/* Social Links Card */}
          <TiltCard intensity={5}>
            <Card className="p-8 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-purple group animate-fade-in relative overflow-hidden h-full" style={{ animationDelay: "0.2s" }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="h-8 w-8 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Connect With Me</h3>
                  <p className="text-muted-foreground mb-4">
                    Follow my journey on social platforms
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group/link hover:bg-muted/80"
                    >
                      <div className="p-2 bg-muted rounded-lg group-hover/link:scale-110 transition-transform">
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </div>
                      <span className="font-medium text-foreground">{social.label}</span>
                      <span className="ml-auto text-muted-foreground group-hover/link:text-primary group-hover/link:translate-x-1 transition-all">→</span>
                    </a>
                  ))}
                </div>

                {/* Availability indicator */}
                <div className="flex items-center gap-2 pt-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <span className="text-sm text-muted-foreground">Available for collaborations</span>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-full group-hover:translate-x-[-100%] transform" />
            </Card>
          </TiltCard>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a project idea, a question, or just want to say hello — my inbox is always open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
