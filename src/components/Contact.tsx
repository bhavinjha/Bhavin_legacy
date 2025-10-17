import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = "mailto:bhavinjha9@gmail.com";
    toast({
      title: "Opening email client",
      description: "Redirecting to your default email application",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary">
                <Mail className="h-10 w-10 text-primary-foreground" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-6">
                  I'll try to respond as soon as possible
                </p>
                <a 
                  href="mailto:bhavinjha9@gmail.com"
                  className="text-xl font-semibold text-primary hover:underline"
                >
                  bhavinjha9@gmail.com
                </a>
              </div>

              <Button
                size="lg"
                onClick={handleEmailClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Email
              </Button>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  More ways to connect coming soon! Stay tuned for social media links.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
