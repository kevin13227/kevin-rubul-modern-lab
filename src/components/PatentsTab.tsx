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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <div key={index} className="bg-gray-300/80 border-border/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-3">{patent.title}</h3>
                  <p className="text-gray-700 mb-2">Inventors: {patent.inventors}</p>
                  <span className="text-red-600 font-mono text-sm">{patent.patentNumber}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};