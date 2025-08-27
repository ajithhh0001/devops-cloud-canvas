import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Scroll to top button */}
      <div className="absolute -top-6 right-8">
        <Button
          onClick={scrollToTop}
          size="sm"
          className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-lg animate-bounce"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>

      <div className="container-width px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                Ajith P
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Aspiring DevOps Engineer passionate about cloud automation, 
                infrastructure as code, and building scalable solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-background/80 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com/ajithhh000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-primary transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ajith--p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-primary transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:ajithhh000@gmail.com"
                    className="text-background/80 hover:text-primary transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-background/80 text-sm">
                  Kozhikode, Kerala, India
                </p>
                <p className="text-background/80 text-sm">
                  ajithhh000@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Ajith P</span>
            </div>
            <div className="flex items-center gap-6">
              <span>© 2025 Ajith P. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;