import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, BookOpen, Globe, Microscope, Users } from "lucide-react";

export const BiographyTab = () => {
  const timeline = [
    {
      year: "Early Life",
      title: "Born in Rural India",
      description: "Born and raised in a poor peasant family near the Assam-Arunachal border in far-remote corner of India.",
      icon: Globe
    },
    {
      year: "Education",
      title: "PhD at UMass Amherst",
      description: "Moved to the United States to pursue PhD from the University of Massachusetts, Amherst, developing the 'E-tag' method for intracellular protein delivery.",
      icon: GraduationCap
    },
    {
      year: "2017-2020",
      title: "University of Washington",
      description: "Washington Research Foundation Innovation Fellow at the Institute for Protein Design, working with 2024 Nobel Laureate David Baker.",
      icon: Microscope
    },
    {
      year: "Present",
      title: "Harvard Medical School",
      description: "Research Fellow at Harvard Medical School and Boston Children's Hospital, developing breakthrough therapies using protein design.",
      icon: Award
    }
  ];

  const achievements = [
    "Co-author of 40 research articles in leading scientific journals",
    "Inventor of numerous technologies with multiple patents",
    "Collaborated with Nobel Laureate David Baker on protein design",
    "Research featured in Nature magazine and numerous media outlets",
    "Bestselling author with 50,000+ books sold in Assamese language",
    "Founder of Uplift Libraries serving underprivileged students in rural India",
    "Weekly science activism reaching students worldwide"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground mb-4">Biography</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From a poor peasant family in rural India to the halls of Harvard Medical School - 
          a journey of scientific discovery, social impact, and cultural preservation.
        </p>
      </div>

      {/* Main Bio */}
      <Card className="glass-card p-8 md:p-12">
        <CardContent className="space-y-6 text-lg leading-relaxed">
          <p className="text-foreground">
            <strong>Dr. Rubul Mout</strong> is a Fellow (Research) at Harvard Medical School, Harvard University, 
            and the Stem Cell & Regenerative Biology Program, Boston Children's Hospital (BCH).
          </p>
          
          <p className="text-muted-foreground">
            Born, brought up, and educated in India, Dr. Mout moved to the United States to pursue his PhD 
            from the University of Massachusetts, Amherst. Prior to joining Harvard/BCH, he was a Washington 
            Research Foundation Innovation Fellow at the Institute for Protein Design, University of Washington.
          </p>
          
          <p className="text-muted-foreground">
            At Harvard/BCH, Dr. Mout developed soluble agonists for the Notch signaling pathway for T cell 
            development and function. These agonists promoted the development of T cells from bone marrow stem 
            cells and activated the Notch pathway in T cells during vaccination to boost cell-based immunity.
          </p>
          
          <p className="text-muted-foreground">
            Currently, Dr. Mout uses computational protein design technologies to modulate signaling in immune 
            development, function, and ageing. The ultimate goal of this research is to enhance T cell function 
            to better combat cancer, autoimmune diseases, and viral infections.
          </p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10">Career Timeline</h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="bg-secondary/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-center mb-8">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-muted-foreground">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Books & Writing */}
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Literary Contributions</h3>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Dr. Mout is also the author of two books—a collection of short stories and a memoir—in 
              his native language, Assamese. His memoir depicts his extraordinary journey from a poor 
              peasant's family in a far-remote corner of India, near the Assam-Arunachal border.
            </p>
            <p>
              The book has been an instant bestseller, and since its first publication in 2017, it has 
              sold over 50,000 copies (as of January 2025), making it one of the highest-selling books 
              in the Assamese language. The book is also included in many school/college/university 
              curricula across Assam.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};