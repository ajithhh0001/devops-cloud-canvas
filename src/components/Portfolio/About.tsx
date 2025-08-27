import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const softSkills = [
    { icon: <Target className="h-5 w-5" />, skill: "Problem Solving" },
    { icon: <Lightbulb className="h-5 w-5" />, skill: "Adaptability" },
    { icon: <Users className="h-5 w-5" />, skill: "Teamwork" },
    { icon: <Users className="h-5 w-5" />, skill: "Communication" },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Passionate about building and automating cloud infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                As a recent B.Tech Computer Science graduate from Government Engineering College, Wayanad, 
                I've discovered my passion for the intersection of development and operations. The world of 
                DevOps and cloud computing fascinates me because it combines technical excellence with 
                practical problem-solving.
              </p>
              <p>
                My journey into DevOps began during my final year when I realized how powerful automation 
                and cloud technologies can be in streamlining development workflows. I'm actively learning 
                and building hands-on projects with AWS, Docker, Terraform, Ansible, and CI/CD pipelines.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies. My goal 
                is to help organizations build scalable, reliable, and secure infrastructure while fostering 
                a culture of collaboration between development and operations teams.
              </p>
            </div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Education Card */}
            <Card className="project-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <h5 className="font-medium text-primary">B.Tech in Computer Science & Engineering</h5>
                  <p className="text-muted-foreground mb-3">Government Engineering College, Wayanad</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Graduated 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Kerala, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="project-card">
              <h4 className="text-xl font-semibold mb-6">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Career Objective */}
            <Card className="project-card bg-gradient-primary text-white">
              <h4 className="text-xl font-semibold mb-4">Career Objective</h4>
              <p className="text-white/90 leading-relaxed">
                To contribute to innovative DevOps practices and cloud solutions that enhance 
                development efficiency, system reliability, and operational excellence while 
                continuously growing my expertise in emerging technologies.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;