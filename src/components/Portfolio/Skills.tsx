import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Database, 
  Code, 
  Settings, 
  Server,
  Globe,
  Wrench
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps Tools",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-tech-blue/10 text-tech-blue border-tech-blue/20",
      skills: ["GitHub Actions", "Jenkins (learning)", "Ansible (learning)", "Git", "GitHub", "Linux (Ubuntu)", "Jira"]
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-tech-purple/10 text-tech-purple border-tech-purple/20",
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS CLI", "Cloud Computing Basics"]
    },
    {
      title: "Infrastructure as Code",
      icon: <Server className="h-6 w-6" />,
      color: "bg-tech-indigo/10 text-tech-indigo border-tech-indigo/20",
      skills: ["Terraform (learning)", "Infrastructure Automation", "Configuration Management"]
    },
    {
      title: "Containerization",
      icon: <Container className="h-6 w-6" />,
      color: "bg-primary/10 text-primary border-primary/20",
      skills: ["Docker", "Kubernetes (basics)", "Container Orchestration"]
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      color: "bg-accent/10 text-accent border-accent/20",
      skills: ["Python (basic)", "Java", "C", "JavaScript", "Node.js", "Express.js"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-secondary/10 text-secondary-foreground border-secondary/20",
      skills: ["HTML", "CSS", "Tailwind CSS", "Responsive Design", "Frontend Development"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-6 w-6" />,
      color: "bg-muted/10 text-muted-foreground border-muted/20",
      skills: ["SQL", "Database Management", "Version Control", "API Development"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            A comprehensive toolkit for modern DevOps and cloud development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="tech-card animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-badge animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Progress Section */}
        <div className="mt-16">
          <Card className="project-card bg-gradient-secondary text-white">
            <div className="text-center">
              <Wrench className="h-12 w-12 mx-auto mb-4 text-white/90" />
              <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Actively expanding my knowledge in advanced DevOps practices and cloud technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Jenkins CI/CD",
                  "Ansible Automation",
                  "Terraform IaC",
                  "Kubernetes Orchestration",
                  "AWS Advanced Services",
                  "Monitoring & Logging"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;