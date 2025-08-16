import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import workProteinImg from "@/assets/work-protein-design.jpg";
import workStemcellImg from "@/assets/work-stemcell.jpg";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";

interface HomeTabProps {
  onNavigate: (tab: string) => void;
}

export const HomeTab = ({ onNavigate }: HomeTabProps) => {
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
      {/* Research Focus */}
      <section className="animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#8B1538] mb-4">Research Focus</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            An RNA-centric view of the cell surface: protein design, hematopoietic stem & T-cell development, and immuno-ageing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <Card 
              className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer hover:bg-card/70"
              onClick={() => onNavigate('research', 'protein-design')}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={workProteinImg} 
                  alt="Protein Design" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Protein Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Engineering and analyzing protein structures to uncover new biological functions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Card 
              className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer hover:bg-card/70"
              onClick={() => onNavigate('research', 'stem-cell-biology')}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={workStemcellImg} 
                  alt="Hematopoietic Stem & T-Cell Development" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Hematopoietic Stem & T-Cell Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Decoding developmental programs guiding immune cell formation and function.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card 
              className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer hover:bg-card/70"
              onClick={() => onNavigate('research', 'immunology-aging')}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={workImmunoageingImg} 
                  alt="Immuno-Ageing" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Immuno‑Ageing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Understanding age-associated immune changes to inform healthier longevity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
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
            onClick={() => onNavigate('publications')}
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            View Publications
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