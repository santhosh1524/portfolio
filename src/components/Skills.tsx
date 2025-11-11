import { Card } from "@/components/ui/card";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "JavaScript", "C", "Java"]
    },
    {
      icon: Layout,
      title: "Frontend",
      skills: ["React.js", "HTML5/CSS3", "Tailwind CSS"]
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/20 rounded-lg mb-4">
                  <category.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
