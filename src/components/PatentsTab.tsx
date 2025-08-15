import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, ExternalLink } from "lucide-react";

const patents = [
  {
    title: "Compositions and methods for intracellular delivery",
    inventors: "Rubul Mout, Vincent M. Rotello",
    patentNumber: "US Patent 10,434,130",
    applicationDate: "2016-12-15",
    publicationDate: "2019-10-08",
    assignee: "University of Massachusetts",
    status: "Granted",
    abstract: "The present invention provides compositions and methods for intracellular delivery of biomolecules including proteins, nucleic acids, and other therapeutic agents using engineered nanoparticles with targeting capabilities.",
    fieldOfInvention: "Biomedical Engineering, Drug Delivery"
  },
  {
    title: "Nanoparticle-protein conjugates for targeted therapy",
    inventors: "Rubul Mout, Vincent M. Rotello, Sarit Agasti",
    patentNumber: "US Patent Application 16/789,234",
    applicationDate: "2020-02-12",
    publicationDate: "2021-08-19",
    assignee: "University of Massachusetts",
    status: "Pending",
    abstract: "Novel nanoparticle-protein conjugates designed for specific cellular targeting and therapeutic delivery with enhanced biocompatibility and reduced toxicity.",
    fieldOfInvention: "Nanotechnology, Therapeutics"
  },
  {
    title: "Biosensor systems using functionalized gold nanoparticles",
    inventors: "Rubul Mout, Krishnendu Saha, Vincent M. Rotello",
    patentNumber: "US Patent 9,857,367",
    applicationDate: "2015-09-28",
    publicationDate: "2018-01-02",
    assignee: "University of Massachusetts",
    status: "Granted",
    abstract: "Biosensor systems utilizing functionalized gold nanoparticles for rapid detection and quantification of biological molecules with high sensitivity and specificity.",
    fieldOfInvention: "Biosensors, Diagnostics"
  }
];

export const PatentsTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Patents & Intellectual Property</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovation in nanotechnology, drug delivery, and biosensor development with practical applications 
            for advancing human health and scientific discovery.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {patents.map((patent, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {patent.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {patent.patentNumber}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={patent.status === 'Granted' ? 'default' : 'secondary'}
                    className="shrink-0"
                  >
                    {patent.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  {patent.abstract}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">Inventors:</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">
                      {patent.inventors}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">Field:</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">
                      {patent.fieldOfInvention}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Application Date:</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">
                      {new Date(patent.applicationDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">Publication Date:</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">
                      {new Date(patent.publicationDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-medium">Assignee:</span>
                    </div>
                    <p className="text-sm text-foreground pl-6">
                      {patent.assignee}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Innovation Impact</h3>
            <p className="text-muted-foreground mb-6">
              These patents represent breakthrough innovations in nanomedicine and biosensor technology, 
              with applications ranging from targeted drug delivery to rapid diagnostic systems.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Patents Filed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Patents Granted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Applications in Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};