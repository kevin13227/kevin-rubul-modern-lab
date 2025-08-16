const patents = [
  {
    title: "Compositions and methods for T-cell development and stimulation using designed expandable notch agonists",
    inventors: "R Mout, GQ Daley",
    patentNumber: "Provisional patent application filed, Application Number. 63/800,138",
    year: "2023",
    status: "Provisional"
  },
  {
    title: "Methods and compositions for T-cell differentiation",
    inventors: "R Mout, G Daley, et al.",
    patentNumber: "Application Number: 63/413,377",
    year: "2022",
    status: "Provisional"
  },
  {
    title: "De novo design of multi-component protein hydrogel with programmable viscoelasticity",
    inventors: "R Mout, D Baker, et al.",
    patentNumber: "US Patent App. 63/353,391",
    year: "2022",
    status: "Provisional"
  },
  {
    title: "WORMS Scaffolds: Multi-scale protein complexes",
    inventors: "Y Hsia, R Mout, D Baker, et al.",
    patentNumber: "US Patent App. 17/564,467",
    year: "2021",
    status: "Pending"
  },
  {
    title: "Nanoparticle-Protein Complex for Intracellular Protein Delivery",
    inventors: "VM Rotello, R Mout",
    patentNumber: "US application (USPTO)- US20180022831A1",
    year: "2020",
    status: "Granted"
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