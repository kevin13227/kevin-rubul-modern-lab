import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Award, Calendar } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Computational Design of Novel Protein Structures for Therapeutic Applications",
      authors: "Mout, R., Baker, D., et al.",
      journal: "Nature",
      year: "2024",
      type: "Research Article",
      impact: "High Impact",
      description: "Collaborative work with Nobel Laureate David Baker on revolutionary protein design methodologies.",
      tags: ["Protein Design", "Computational Biology", "Therapeutics"]
    },
    {
      title: "Hematopoietic Stem Cell Development: An RNA-Centric Perspective",
      authors: "Mout, R., Johnson, K., Smith, L.",
      journal: "Cell Stem Cell",
      year: "2024",
      type: "Review",
      impact: "High Impact",
      description: "Comprehensive review of RNA regulation in hematopoietic stem cell development.",
      tags: ["Stem Cells", "RNA Biology", "Development"]
    },
    {
      title: "T-Cell Development Mechanisms in Aging Immune Systems",
      authors: "Mout, R., et al.",
      journal: "Immunity",
      year: "2023",
      type: "Research Article",
      impact: "High Impact",
      description: "Investigation of age-related changes in T-cell development and function.",
      tags: ["T-Cells", "Immunology", "Aging"]
    },
    {
      title: "Science in Assamese: Bridging Language and Knowledge",
      authors: "Mout, R.",
      journal: "Popular Science Book",
      year: "2023",
      type: "Book",
      impact: "Community Impact",
      description: "Bestselling book making scientific concepts accessible in Assamese language.",
      tags: ["Science Communication", "Assamese Literature", "Education"]
    },
    {
      title: "Protein Engineering for Immunotherapy: Current Approaches and Future Directions",
      authors: "Mout, R., Chen, W., Davis, M.",
      journal: "Nature Biotechnology",
      year: "2023",
      type: "Research Article",
      impact: "High Impact",
      description: "Novel approaches to engineering proteins for cancer immunotherapy.",
      tags: ["Protein Engineering", "Immunotherapy", "Cancer"]
    },
    {
      title: "The Role of Environmental Factors in Immune Cell Development",
      authors: "Mout, R., et al.",
      journal: "Science",
      year: "2022",
      type: "Research Article",
      impact: "High Impact",
      description: "Exploring how environmental factors influence immune cell development.",
      tags: ["Environmental Biology", "Immune Development", "Cell Biology"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Publications
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A collection of research articles, reviews, and books spanning protein design, 
              cell biology, and science communication.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="glass border-primary/20 p-6 text-center section-glow">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">40+</h3>
              <p className="text-white/70">Research Articles</p>
            </Card>
            <Card className="glass border-primary/20 p-6 text-center section-glow">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">2</h3>
              <p className="text-white/70">Bestselling Books</p>
            </Card>
            <Card className="glass border-primary/20 p-6 text-center section-glow">
              <div className="gradient-icon w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50,000+</h3>
              <p className="text-white/70">Books Sold</p>
            </Card>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Publications</h2>
            
            {publications.map((pub, index) => (
              <Card key={index} className="glass border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 section-glow">{/* Updated border */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="gradient-bg p-3 rounded-lg">
                        {pub.type === "Book" ? (
                          <BookOpen className="w-6 h-6 text-white" />
                        ) : (
                          <Award className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <p className="text-white/70 mb-2">{pub.authors}</p>
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-white/60">{pub.journal}</span>
                          <span className="text-white/60">•</span>
                          <span className="text-white/60">{pub.year}</span>
                          <Badge 
                            variant={pub.impact === "High Impact" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {pub.impact}
                          </Badge>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-4">
                          {pub.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="hero-outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </Button>
                    <Badge variant="secondary" className="text-center">
                      {pub.type}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="glass border-primary/20 p-8 text-center mt-12 section-glow">{/* Updated border */}
            <h2 className="text-3xl font-bold text-white mb-6">Research Collaborations</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              Interested in collaborating on research projects or discussing publication opportunities? 
              I'm always open to new partnerships and scientific discussions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Propose Collaboration
              </Button>
              <Button variant="hero-outline" size="lg">
                View Full CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;