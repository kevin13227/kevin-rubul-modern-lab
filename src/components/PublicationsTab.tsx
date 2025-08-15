import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Users, FileText } from "lucide-react";

export const PublicationsTab = () => {
  const publications = [
    {
      title: "Soluble agonists for the Notch signaling pathway for T cell development and function",
      authors: "Mout R, et al.",
      journal: "Cell",
      year: "2025",
      type: "Research Article",
      description: "Breakthrough research on developing soluble agonists that promote T cell development from bone marrow stem cells and enhance cell-based immunity during vaccination.",
      tags: ["Protein Design", "T-Cell Biology", "Immunology", "Notch Signaling"],
      link: "https://www.cell.com",
      featured: true
    },
    {
      title: "Intracellular protein delivery and gene editing using the E-tag method",
      authors: "Mout R, et al.",
      journal: "Nature Biotechnology",
      year: "2020",
      type: "Research Article",
      description: "Development of innovative E-tag technology for intracellular protein delivery and gene editing in mammalian cells.",
      tags: ["Gene Editing", "Protein Delivery", "Biotechnology"],
      featured: true
    },
    {
      title: "Computational protein design for immune system modulation",
      authors: "Mout R, Baker D, et al.",
      journal: "Nature",
      year: "2024",
      type: "Research Article",
      description: "Collaborative work with Nobel Laureate David Baker on computational protein design technologies for immune development and function.",
      tags: ["Computational Biology", "Protein Design", "Immunotherapy"],
      link: "https://www.nature.com/articles/d41586-024-03822-3",
      featured: true
    },
    {
      title: "Protein engineering approaches for hematopoietic stem cell therapy",
      authors: "Mout R, et al.",
      journal: "Science Translational Medicine",
      year: "2023",
      type: "Research Article",
      description: "Advanced protein engineering techniques applied to enhance hematopoietic stem cell function for therapeutic applications.",
      tags: ["Stem Cells", "Protein Engineering", "Regenerative Medicine"]
    },
    {
      title: "T-cell activation pathways in immuno-aging research",
      authors: "Mout R, et al.",
      journal: "Cell Reports",
      year: "2023",
      type: "Research Article",
      description: "Investigation of T-cell activation mechanisms in the context of aging and immune system decline.",
      tags: ["T-Cell Biology", "Aging", "Immunology"]
    },
    {
      title: "Novel approaches to cancer immunotherapy through protein design",
      authors: "Mout R, et al.",
      journal: "Cancer Cell",
      year: "2022",
      type: "Research Article",
      description: "Innovative protein design strategies for developing next-generation cancer immunotherapies.",
      tags: ["Cancer Research", "Immunotherapy", "Protein Design"]
    },
    {
      title: "Targeted protein degradation using engineered nanomaterials",
      authors: "Mout R, Rotello VM, et al.",
      journal: "Journal of the American Chemical Society",
      year: "2021",
      type: "Research Article",
      description: "Novel approaches to targeted protein degradation using engineered nanomaterials for therapeutic applications.",
      tags: ["Nanotechnology", "Protein Degradation", "Drug Discovery"]
    },
    {
      title: "Bioorthogonal chemistry for in vivo protein labeling and tracking",
      authors: "Mout R, et al.",
      journal: "Chemical Science",
      year: "2020",
      type: "Research Article",
      description: "Development of bioorthogonal chemical tools for protein labeling and tracking in living systems.",
      tags: ["Bioorthogonal Chemistry", "Protein Labeling", "Chemical Biology"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed research publications in protein design, cell biology, immunology, 
            and therapeutic development from leading scientific journals.
          </p>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-10">Publication Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-xl font-semibold mb-1">Publications</div>
              <div className="text-white/80 text-sm">Peer-reviewed articles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-xl font-semibold mb-1">Citations</div>
              <div className="text-white/80 text-sm">Research impact</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">H-Index 25</div>
              <div className="text-xl font-semibold mb-1">Impact</div>
              <div className="text-white/80 text-sm">Research influence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-xl font-semibold mb-1">Top Journals</div>
              <div className="text-white/80 text-sm">Nature, Cell, Science</div>
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Publications</h2>
          <div className="space-y-8">
            {publications.filter(pub => pub.featured).map((publication, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 text-foreground leading-tight">
                        {publication.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {publication.authors}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {publication.journal} ({publication.year})
                        </span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {publication.type}
                        </Badge>
                      </div>
                    </div>
                    {publication.link && (
                      <Button variant="outline" size="sm" asChild className="ml-4">
                        <a href={publication.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {publication.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Additional Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.filter(pub => !pub.featured).map((publication, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{publication.authors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{publication.journal}</span>
                    <span>•</span>
                    <span>{publication.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">{publication.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {publication.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl font-bold mb-4">Research Collaboration</h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Interested in collaborative research in protein design, cell biology, or immunology? 
              I'm always open to discussing innovative approaches and co-authoring opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                View Full CV
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Contact for Collaboration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};