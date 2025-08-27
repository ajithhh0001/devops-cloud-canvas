import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container-width section-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <p className="text-white/80 text-lg mb-4 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Ajith P
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 font-medium">
                Aspiring DevOps Engineer
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                Cloud & Automation Enthusiast. Recent B.Tech CS graduate passionate about 
                DevOps, cloud automation, and infrastructure as code.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  onClick={scrollToProjects}
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-lg font-semibold"
                >
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold"
                >
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/ajithhh000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/ajith--p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:ajithhh000@gmail.com"
                  className="text-white/70 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="animate-fade-in">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute -inset-4 bg-gradient-primary opacity-75 blur-lg rounded-full animate-glow"></div>
                
                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://i.postimg.cc/B6Qs1Q54/photo-1.jpg"
                    alt="Ajith P - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating tech icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-bold text-xs">Docker</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-white font-bold text-xs">K8s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;