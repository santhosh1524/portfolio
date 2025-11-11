import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mgsanthosh59150@gmail.com",
      href: "mailto:mgsanthosh59150@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8825458796",
      href: "tel:+918825458796"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/santhosh1524",
      href: "https://github.com/santhosh1524"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "santhosh-m2357b52a3",
      href: "https://linkedin.com/in/santhosh-m2357b52a3"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border p-8 shadow-card">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out through any of the following channels:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group"
                >
                  <Card className="bg-secondary border-border p-6 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <contact.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="text-foreground font-medium">{contact.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:mgsanthosh59150@gmail.com">Send Me an Email</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
