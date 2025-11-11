import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="p-4 bg-primary/20 rounded-lg h-fit">
                <Briefcase className="text-primary" size={40} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Data Analyst Intern</h3>
                <p className="text-xl text-primary mb-3">Strydo Technologies</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>July 2025 – August 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Vellore, India</span>
                  </div>
                </div>

                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span>Collected, cleaned, and analyzed datasets using Excel and Power BI to generate actionable insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span>Designed interactive dashboards to visualize trends and key performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span>Supported the data analytics team in validating and organizing large datasets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span>Developed a strong understanding of data-driven decision-making processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
