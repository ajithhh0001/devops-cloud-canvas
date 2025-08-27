import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GamePlan - Sports Management Platform",
      description: "A comprehensive full-stack web application for sports events management, turf bookings, and consultation services. Features real-time notifications, user authentication, and event scheduling capabilities.",
      longDescription: "GamePlan revolutionizes sports management by providing an all-in-one platform for organizing events, booking venues, and connecting with sports consultants. The application includes user role management, payment integration, and real-time chat functionality.",
      date: "March 2025",
      status: "Featured Project",
      tech: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "Authentication", "Real-time Notifications"],
      features: [
        "Real-time event notifications",
        "User authentication & authorization",
        "Turf booking system",
        "Sports consultation platform",
        "Event management dashboard",
        "Responsive design"
      ],
      githubUrl: "https://github.com/AKSHAY-PV-8/P1-GAME-PLAN",
      liveUrl: "https://github.com/AKSHAY-PV-8/P1-GAME-PLAN",
      image: "/api/placeholder/600/400",
      gradient: "bg-gradient-primary"
    },
    {
      title: "IIRG - Recipe Generator",
      description: "An intelligent recipe suggestion system that helps reduce food waste by generating recipes based on available ingredients. Features ingredient scanning, nutritional information, and sustainable cooking tips.",
      longDescription: "IIRG (Ingredients Inspired Recipe Generator) tackles food waste by intelligently suggesting recipes based on ingredients you already have. The application promotes sustainable cooking practices and helps users make the most of their kitchen inventory.",
      date: "October 2024",
      status: "Sustainability Focus",
      tech: ["HTML", "CSS", "JavaScript", "API Integration", "Local Storage", "Responsive Design"],
      features: [
        "Ingredient-based recipe matching",
        "Nutritional information display",
        "Food waste reduction tips",
        "Recipe difficulty ratings",
        "Ingredient substitution suggestions",
        "Mobile-friendly interface"
      ],
      githubUrl: "#",
      liveUrl: "#",
      image: "/api/placeholder/600/400",
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Recent projects showcasing my development skills and problem-solving approach
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative group">
                  <div className={`absolute inset-0 ${project.gradient} opacity-20 rounded-lg`}></div>
                  <div className="relative h-64 lg:h-full min-h-[300px] bg-muted/50 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 rounded-full ${project.gradient} flex items-center justify-center mb-4 mx-auto`}>
                          <Star className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-muted-foreground font-medium">Project Screenshot</p>
                        <p className="text-sm text-muted-foreground/70">Coming Soon</p>
                      </div>
                    </div>
                    
                    {/* Overlay with quick actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="skill-badge text-xs">{project.status}</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Card className="project-card bg-gradient-primary text-white">
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects to expand my skills in DevOps, cloud computing, 
                and full-stack development. Stay tuned for updates!
              </p>
              <Button 
                variant="secondary"
                onClick={() => window.open('https://github.com/ajithhh000', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                Follow on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;