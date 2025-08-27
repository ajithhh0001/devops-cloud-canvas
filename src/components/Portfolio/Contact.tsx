import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ajithhh000@gmail.com",
      href: "mailto:ajithhh000@gmail.com",
      color: "text-tech-blue"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-9562459210",
      href: "tel:+919562459210",
      color: "text-tech-purple"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Kozhikode, Kerala",
      href: "https://maps.google.com/?q=Kozhikode,Kerala",
      color: "text-tech-indigo"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/ajithhh000",
      color: "hover:text-tech-blue"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ajith--p",
      color: "hover:text-tech-purple"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about DevOps and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss DevOps opportunities, 
                or just want to connect with a fellow tech enthusiast, I'd love to hear from you. 
                Let's build something amazing together!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="tech-card">
                  <a 
                    href={info.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className={`p-3 bg-primary/10 rounded-lg ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground/80">{info.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-muted/50 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-primary/10 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time with enhanced design */}
            <Card className="project-card bg-gradient-secondary text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-mesh opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <div className="p-2 glass-card group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-white/90" />
                </div>
                <div>
                  <h4 className="font-semibold">Quick Response Time</h4>
                  <p className="text-white/90 text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="project-card">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                </div>
                <p className="text-muted-foreground">
                  Drop me a line and I'll get back to you as soon as possible
                </p>
              </div>

              <form action="https://formsubmit.co/ajithhh000@gmail.com" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={6}
                    required
                    className="focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                {/* Hidden formsubmit fields */}
                <input type="hidden" name="_next" value="https://ajithhh000.github.io/portfolio" />
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                <input type="hidden" name="_captcha" value="false" />

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Your information is secure and will never be shared</span>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;