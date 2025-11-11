import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      
      <div className="container mx-auto text-center relative z-10 animate-in fade-in duration-1000">
        <div className="mb-6">
          <h1 style={{   padding: '20px' }} className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Santhosh Mahalingam

          </h1>
         
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Full-Stack Developer & Data Analyst
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science Engineering Student passionate about building innovative web applications
            and transforming data into actionable insights
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/santhosh1524"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/santhosh-m2357b52a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:mgsanthosh59150@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={28} />
          </a>
          <a 
            href="tel:+918825458796"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <FileText size={28} />
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
