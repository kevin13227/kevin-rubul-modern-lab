import { ExternalLink } from "lucide-react";

export const PublicationsTab = () => {
  const publications = [
    {
      title: "Soluble agonists for the Notch signaling pathway for T cell development and function",
      authors: "Mout R, et al.",
      journal: "Cell",
      year: "2025",
      link: "https://www.cell.com"
    },
    {
      title: "Intracellular protein delivery and gene editing using the E-tag method",
      authors: "Mout R, et al.",
      journal: "Nature Biotechnology",
      year: "2020"
    },
    {
      title: "Computational protein design for immune system modulation",
      authors: "Mout R, Baker D, et al.",
      journal: "Nature",
      year: "2024",
      link: "https://www.nature.com/articles/d41586-024-03822-3"
    },
    {
      title: "Protein engineering approaches for hematopoietic stem cell therapy",
      authors: "Mout R, et al.",
      journal: "Science Translational Medicine", 
      year: "2023"
    },
    {
      title: "T-cell activation pathways in immuno-aging research",
      authors: "Mout R, et al.",
      journal: "Cell Reports",
      year: "2023"
    },
    {
      title: "Novel approaches to cancer immunotherapy through protein design",
      authors: "Mout R, et al.",
      journal: "Cancer Cell",
      year: "2022"
    },
    {
      title: "Targeted protein degradation using engineered nanomaterials",
      authors: "Mout R, Rotello VM, et al.",
      journal: "Journal of the American Chemical Society",
      year: "2021"
    },
    {
      title: "Bioorthogonal chemistry for in vivo protein labeling and tracking",
      authors: "Mout R, et al.",
      journal: "Chemical Science",
      year: "2020"
    },
    {
      title: "Nanoparticle-mediated delivery of proteins and peptides for therapeutic applications",
      authors: "Mout R, et al.",
      journal: "Bioconjugate Chemistry",
      year: "2019"
    },
    {
      title: "Engineering protein-nanoparticle interactions for biomedical applications",
      authors: "Mout R, Rotello VM",
      journal: "ACS Nano",
      year: "2018"
    },
    {
      title: "Supramolecular approaches to protein delivery and gene editing",
      authors: "Mout R, et al.",
      journal: "Chemical Reviews",
      year: "2017"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Peer-reviewed research publications in leading scientific journals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Research Articles</h2>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <div key={index} className="border-b border-border/30 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight">
                        {publication.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {publication.authors}
                      </p>
                      <p className="text-primary font-medium text-sm">
                        {publication.journal} ({publication.year})
                      </p>
                    </div>
                    {publication.link && (
                      <a 
                        href={publication.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors flex items-center gap-1 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};