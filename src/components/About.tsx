import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-card border-border p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Education</h3>
                <p className="text-lg font-medium text-foreground mb-1">
                  Bachelor of Computer Science Engineering
                </p>
                <p className="text-muted-foreground mb-2">
                  Thanthai Periyar Government Institute of Technology
                </p>
                <p className="text-primary font-semibold">CGPA: 8.19 | Expected 2026</p>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-card border-border p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Award className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Designed and developed an IQAC website for college</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Finalized among 100+ students at UCE Arni Hackathon</span>
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

export default About;
