import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, BookOpen, Globe, Microscope, Users } from "lucide-react";
import rubulPortrait from "@/assets/rubul-portrait.jpg";

export const BiographyTab = () => {
  const timeline = [
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
      title: "Research Fellow - Harvard Medical School",
      description: "Currently Research Fellow at Harvard Medical School and Boston Children's Hospital, leading groundbreaking research in protein design and developing breakthrough therapies for immune system enhancement.",
      icon: Award,
      highlighted: true
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
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header with Portrait */}
      <div className="text-center animate-fade-in-up">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
          {/* Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#C41E3A]/50 shadow-2xl bg-gradient-to-br from-[#C41E3A]/20 to-[#C41E3A]/10 p-2">
                <img 
                  src={rubulPortrait} 
                  alt="Dr. Rubul Mout" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C41E3A]/20 to-[#C41E3A]/10 blur-xl -z-10"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FF0F7B] via-[#dbaf0d] to-[#dbaf0d] bg-clip-text text-transparent mb-6">Dr. Rubul Mout</h2>
            <h3 className="text-2xl font-semibold text-white mb-4">Research Fellow</h3>
            <h4 className="text-xl text-gray-300 mb-6">Harvard Medical School & Boston Children's Hospital</h4>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From humble beginnings in rural India to groundbreaking research at Harvard Medical School, Dr. Rubul Mout exemplifies the transformative power of science and education. His journey from a poor peasant family to becoming a leading researcher in protein design and cell biology inspires countless students worldwide.
            </p>
          </div>
          
          {/* Right Side Content - Key Stats */}
          <div className="lg:w-72 w-full">
            <Card className="bg-black/50 border border-gray-600 shadow-[0_0_20px_#00000030]">
              <CardContent className="p-4">
                <h4 className="text-lg font-bold text-white mb-3 text-center">At a Glance</h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FF0F7B] to-[#dbaf0d] bg-clip-text text-transparent">40+</div>
                    <div className="text-xs text-gray-300">Research Publications</div>
                  </div>
                  <Separator className="bg-[#FF0F7B]/20" />
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#FF0F7B] to-[#dbaf0d] bg-clip-text text-transparent">50K+</div>
                    <div className="text-xs text-gray-300">Books Sold</div>
                  </div>
                  <Separator className="bg-[#FF0F7B]/20" />
                  <div className="text-center">
                    <div className="text-lg font-bold bg-gradient-to-r from-[#FF0F7B] to-[#dbaf0d] bg-clip-text text-transparent">Nobel</div>
                    <div className="text-xs text-gray-300">Laureate Collaboration</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Bio */}
      <Card className="bg-black border border-gray-600 shadow-[0_0_30px_#00000040] p-8 md:p-12">
        <CardContent className="space-y-6 text-lg leading-relaxed">
          <p className="text-white font-bold">
            <strong>Dr. Rubul Mout</strong> is a Fellow (Research) at Harvard Medical School, Harvard University, 
            and the Stem Cell & Regenerative Biology Program, Boston Children's Hospital (BCH).
          </p>
          
          <p className="text-white">
            Born, and educated in India, Dr. Mout moved to the United States to pursue his PhD 
            from the University of Massachusetts, Amherst. Prior to joining Harvard/BCH, he was a Washington 
            Research Foundation Innovation Fellow at the Institute for Protein Design, University of Washington.
          </p>
          
          <p className="text-white">
            At Harvard/BCH, Dr. Mout developed soluble agonists for the Notch signaling pathway for T cell 
            development and function. These agonists promoted the development of T cells from bone marrow stem 
            cells and activated the Notch pathway in T cells during vaccination to boost cell-based immunity.
          </p>
          
          <p className="text-white">
            Currently, Dr. Mout uses computational protein design technologies to modulate signaling in immune 
            development, function, and ageing. The ultimate goal of this research is to enhance T cell function 
            to better combat cancer, autoimmune diseases, and viral infections.
          </p>
        </CardContent>
      </Card>

      {/* Timeline */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10 text-white">Career Timeline</h3>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className={`flex items-start gap-6 animate-fade-in-up ${item.highlighted ? 'bg-gradient-to-r from-[#FF0F7B]/10 via-[#dbaf0d]/5 to-[#dbaf0d]/5 p-6 rounded-lg border border-gray-600' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`flex-shrink-0 w-16 h-16 ${item.highlighted ? 'bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00]' : 'bg-gradient-to-r from-[#FF0F7B]/20 via-[#ffcc00]/10 to-[#ffcc00]/10'} rounded-full flex items-center justify-center`}>
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className={`text-sm font-semibold px-3 py-1 ${item.highlighted ? 'bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] bg-clip-text text-transparent' : 'bg-primary/10 text-primary'} rounded-full`}>
                    {item.year}
                  </span>
                  <h4 className={`text-xl font-semibold ${item.highlighted ? 'text-white font-bold' : 'text-white'}`}>{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements
      <section className="bg-secondary/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-center mb-8">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-black">{achievement}</p>
            </div>
          ))}
        </div>
      </section>*/}

      {/* Books & Writing */}
      <Card className="bg-[#8B1538] overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#8B1538]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Literary Contributions</h3>
          </div>
          
          <div className="space-y-4 text-white">
            <p>
              Dr. Mout is also the author of two books in Assamese, a memoir and a collection of short stories. His memoir depicts his journey from a poor 
              peasant's family in a far-remote corner of India, near the Assam-Arunachal border.
            </p>
            <p>
              The memoir, Moro Eta Sapon Ase, has been an instant bestseller, and since its first publication in 2017 it has 
              sold over 50,000 copies (as of January 2025), making it one of the highest-selling books 
              in the Assamese language. The book is also included in many school/college/university 
              curriculums across Assam.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};