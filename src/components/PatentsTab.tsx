const patents = [
  {
    title: "Compositions and methods for intracellular delivery",
    inventors: "Rubul Mout, Vincent M. Rotello",
    patentNumber: "US Patent 10,434,130",
    year: "2019",
    status: "Granted"
  },
  {
    title: "Nanoparticle-protein conjugates for targeted therapy",
    inventors: "Rubul Mout, Vincent M. Rotello, Sarit Agasti",
    patentNumber: "US Patent Application 16/789,234",
    year: "2021",
    status: "Pending"
  },
  {
    title: "Biosensor systems using functionalized gold nanoparticles",
    inventors: "Rubul Mout, Krishnendu Saha, Vincent M. Rotello",
    patentNumber: "US Patent 9,857,367",
    year: "2018",
    status: "Granted"
  },
  {
    title: "E-tag method for intracellular protein delivery",
    inventors: "Rubul Mout, et al.",
    patentNumber: "US Patent Pending",
    year: "2020",
    status: "Pending"
  },
  {
    title: "Soluble Notch agonists for T-cell activation",
    inventors: "Rubul Mout, et al.",
    patentNumber: "US Patent Pending",
    year: "2024",
    status: "Pending"
  }
];

export const PatentsTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Patents</h1>
          <p className="text-xl text-muted-foreground">
            Patented innovations in biotechnology and nanomedicine
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Patent Portfolio</h2>
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <div key={index} className="border-b border-border/30 pb-4 last:border-b-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight">
                        {patent.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {patent.inventors}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-medium">
                          {patent.patentNumber}
                        </span>
                        <span className="text-muted-foreground">
                          {patent.year}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          patent.status === 'Granted' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {patent.status}
                        </span>
                      </div>
                    </div>
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