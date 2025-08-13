import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Award, ExternalLink, Calendar, Users } from "lucide-react";

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
    }
  ];

  const books = [
    {
      title: "Jatra Aru Anyanya (The Journey and Others)",
      description: "A bestselling memoir depicting Dr. Mout's extraordinary journey from a poor peasant family in rural Assam to Harvard Medical School.",
      language: "Assamese",
      year: "2017",
      sales: "50,000+ copies",
      type: "Memoir",
      achievements: [
        "Instant bestseller in Assamese literature",
        "Included in school/college/university curricula across Assam",
        "One of the highest-selling books in Assamese language",
        "Depicts journey from rural India to Harvard Medical School"
      ]
    },
    {
      title: "Assamese Short Stories Collection",
      description: "A collection of short stories exploring themes of science, education, and social transformation in contemporary Assam.",
      language: "Assamese",
      year: "2019",
      type: "Short Stories",
      achievements: [
        "Cultural preservation through literature",
        "Bridges science and humanities",
        "Promotes Assamese language and culture",
        "Educational themes for young readers"
      ]
    }
  ];

  const patents = [
    {
      title: "E-tag Method for Intracellular Protein Delivery",
      patentNumber: "US Patent Pending",
      description: "Revolutionary method for delivering proteins directly into mammalian cells for research and therapeutic applications.",
      inventors: "Mout R, et al.",
      year: "2020",
      applications: ["Gene Editing", "Protein Therapy", "Research Tools"]
    },
    {
      title: "Soluble Notch Agonists for T-Cell Activation",
      patentNumber: "US Patent Pending",
      description: "Novel protein-based agonists that activate Notch signaling pathways for enhanced T-cell development and function.",
      inventors: "Mout R, et al.",
      year: "2024",
      applications: ["Immunotherapy", "Cell Therapy", "Vaccine Enhancement"]
    },
    {
      title: "Computational Protein Design Platform",
      patentNumber: "US Patent Pending",
      description: "Advanced computational methods for designing proteins with specific biological functions for therapeutic applications.",
      inventors: "Mout R, Baker D, et al.",
      year: "2023",
      applications: ["Drug Discovery", "Protein Engineering", "Therapeutics"]
    }
  ];

  const stats = [
    { number: "40+", label: "Research Papers", description: "Peer-reviewed publications" },
    { number: "50,000+", label: "Books Sold", description: "Bestselling memoir in Assamese" },
    { number: "Multiple", label: "Patents", description: "Innovative biotechnology" },
    { number: "2", label: "Published Books", description: "Literature in native language" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground mb-4">Publications & Patents</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          A comprehensive overview of research publications, literary works, and patented innovations 
          spanning protein design, cell biology, immunology, and educational literature.
        </p>
      </div>

      {/* Statistics */}
      <section className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
        <h3 className="text-3xl font-bold text-center mb-10">Publication Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-white/80 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Publications */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10">Featured Research Publications</h3>
        <div className="space-y-6">
          {publications.filter(pub => pub.featured).map((publication, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-foreground leading-tight">
                      {publication.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {publication.authors}
                      </span>
                      <span className="flex items-center gap-1">
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
                <CardDescription className="text-muted-foreground leading-relaxed">
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
      <section>
        <h3 className="text-3xl font-bold text-center mb-10">Additional Research Publications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.filter(pub => !pub.featured).map((publication, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{publication.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{publication.journal}</span>
                  <span>•</span>
                  <span>{publication.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-3">{publication.description}</CardDescription>
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

      {/* Books */}
      <section className="bg-secondary/30 rounded-3xl p-8 md:p-12">
        <div className="flex items-center justify-center gap-3 mb-10">
          <BookOpen className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-bold">Published Books</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{book.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{book.language}</span>
                      <span>•</span>
                      <span>{book.year}</span>
                      <span>•</span>
                      <span>{book.type}</span>
                    </div>
                    {book.sales && (
                      <div className="mt-2">
                        <Badge className="bg-primary/10 text-primary">{book.sales}</Badge>
                      </div>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed mt-3">
                  {book.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {book.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Patents */}
      <section>
        <div className="flex items-center justify-center gap-3 mb-10">
          <Award className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-bold">Patents & Innovations</h3>
        </div>
        
        <div className="space-y-6">
          {patents.map((patent, index) => (
            <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{patent.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{patent.patentNumber}</span>
                      <span>•</span>
                      <span>{patent.year}</span>
                      <span>•</span>
                      <span>{patent.inventors}</span>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {patent.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-muted-foreground mr-2">Applications:</span>
                  {patent.applications.map((app, appIndex) => (
                    <Badge key={appIndex} variant="outline" className="text-xs">
                      {app}
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
          <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            I'm always open to research collaborations, co-authoring opportunities, and discussions 
            about innovative approaches in protein design, cell biology, and immunology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              View Full Publication List
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Request Collaboration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};