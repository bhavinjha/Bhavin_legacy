import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Bhavin Jha
          </p>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bhavin Jha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
