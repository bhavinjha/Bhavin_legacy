import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrollProgress = useScrollProgress();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isPage) {
      navigate(item.path || "/");
      setIsMobileMenuOpen(false);
    } else {
      // If we're not on home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation, then scroll
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const navItems = [
    { label: "Home", id: "home", isPage: false },
    { label: "Bhavin", id: "bhavin", isPage: true, path: "/bhavin" },
    { label: "Lab", id: "lab", isPage: true, path: "/lab" },
    { label: "About", id: "about", isPage: false },
    { label: "Skills", id: "skills", isPage: false },
    { label: "Projects", id: "projects", isPage: false },
    { label: "Contact", id: "contact", isPage: false },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted/20">
        <div
          className="h-full bg-gradient-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with magnetic effect */}
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => scrollToSection("home"), 100);
              }}
              className="relative text-2xl md:text-3xl font-bold group"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                BJ
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-full" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigation(item)}
                  className={`relative text-foreground hover:text-primary transition-colors ${
                    (!item.isPage && activeSection === item.id) || (item.isPage && location.pathname === item.path)
                      ? "text-primary"
                      : ""
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  {((!item.isPage && activeSection === item.id) || (item.isPage && location.pathname === item.path)) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                  )}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-slide-in-right">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigation(item)}
                  className={`w-full justify-start transition-colors ${
                    (!item.isPage && activeSection === item.id) || (item.isPage && location.pathname === item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
