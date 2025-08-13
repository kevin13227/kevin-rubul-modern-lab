import { ProjectCard } from "./ProjectCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import stemCellsImg from "@/assets/project-stem-cells.jpg";
import proteinDesignImg from "@/assets/project-protein-design.jpg";
import notchSignalingImg from "@/assets/project-notch-signaling.jpg";

interface HomeTabProps {
  onNavigate: (tab: string) => void;
}

export const HomeTab = ({ onNavigate }: HomeTabProps) => {
  const projects = [
    {
      title: "Notch Signaling Agonists for T-Cell Development",
      description: "Developed soluble agonists for the Notch signaling pathway to promote T cell development from bone marrow stem cells and enhance cell-based immunity during vaccination.",
      image: notchSignalingImg,
      tags: ["Protein Design", "T-Cell Biology", "Immunology"],
      link: "https://www.cell.com"
    },
    {
      title: "Computational Protein Design for Immune Function",
      description: "Using cutting-edge computational technologies to modulate signaling pathways in immune development, function, and aging to enhance T cell function against cancer and infections.",
      image: proteinDesignImg,
      tags: ["Computational Biology", "Protein Engineering", "Immunotherapy"],
    },
    {
      title: "Hematopoietic Stem Cell Engineering",
      description: "Research into bone marrow stem cell development and function, focusing on enhancing their ability to generate functional T cells for therapeutic applications.",
      image: stemCellsImg,
      tags: ["Stem Cells", "Cell Biology", "Regenerative Medicine"],
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Nobel Collaboration",
      description: "Collaborated with 2024 Nobel Laureate David Baker on protein design research featured in Nature magazine."
    },
    {
      icon: BookOpen,
      title: "Published Author",
      description: "Author of 40+ research articles and two bestselling books in Assamese, with 50,000+ copies sold."
    },
    {
      icon: Users,
      title: "Uplift Libraries",
      description: "Founded an initiative creating small-scale libraries for children in rural India, currently serving 6 libraries."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Current Research Projects */}
      <section className="animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">Current Research Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of protein design, cell biology, and immunology to develop 
            breakthrough therapies for cancer, autoimmune diseases, and viral infections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="bg-secondary/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-center mb-10">Key Achievements & Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 hover:bg-card transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
        <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          I'm always open to discussing research opportunities, scientific collaborations, 
          or speaking engagements in protein design and cell biology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('contact')}
            className="bg-white text-primary hover:bg-white/90"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => onNavigate('teaching')}
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            Join Science Activism
          </Button>
        </div>
      </section>
    </div>
  );
};