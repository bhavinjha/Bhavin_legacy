import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:bhavinjha9@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 px-4 border-t border-border relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <button
                onClick={() => scrollToTop()}
                className="flex items-center gap-3 group text-left"
                aria-label="Scroll to top"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 shadow-md group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  <img src={logoImg} alt="Khilkhila Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">
                  Bhavin Jha
                </span>
              </button>
              <p className="text-sm text-muted-foreground max-w-xs">
                Young programmer, robotics enthusiast, and technology student exploring the future of innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <nav className="flex flex-wrap gap-x-4 gap-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-muted/50 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom section */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> by Bhavin Jha
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Bhavin Jha. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;
