import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Web Application with Real-Time Data Visualization",
      description: "A real-time data visualization app fetching live data from external APIs (stock prices, weather) with dynamic interactive charts.",
      technologies: ["React.js", "MongoDB", "SQL", "JavaScript", "D3.js", "Chart.js"],
      highlights: [
        "Implemented dynamic data charts using D3.js and Chart.js",
        "Built responsive front-end with React.js",
        "Integrated MongoDB and SQL for efficient data storage",
        "Deployed on AWS/Heroku with high scalability"
      ],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Personal Finance Management Tool",
      description: "A comprehensive finance management tool for tracking expenses, income, and savings goals with AI-powered budgeting recommendations.",
      technologies: ["React.js", "MongoDB", "SQL", "Python", "Chart.js"],
      highlights: [
        "Integrated Python for data analytics and insights",
        "Created interactive UI with React.js",
        "Implemented data visualizations for spending habits",
        "Provided budgeting recommendations based on user data"
      ],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "E-commerce Website with AI-Powered Chatbot",
      description: "Full-stack e-commerce platform with AI chatbot for real-time customer support, product recommendations, and order tracking.",
      technologies: ["React.js", "PostgreSQL", "Python", "Dialogflow", "Tailwind CSS"],
      highlights: [
        "Built full shopping cart and secure checkout system",
        "Integrated Dialogflow for AI-powered customer support",
        "Created responsive UI with React.js and Tailwind CSS",
        "Implemented PostgreSQL for efficient data management"
      ],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 style={{ 
      padding: '20px' 
    }} className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Projects


  
        </h2>
       
           
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">Key Highlights:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button 
                  asChild
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={project.links.live} className="flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    Live
                  </a>
                </Button>
                <Button 
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary text-foreground hover:bg-primary/10"
                >
                  <a href={project.links.github} className="flex items-center justify-center gap-2">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
