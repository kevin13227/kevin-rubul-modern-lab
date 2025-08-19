import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import workProteinImg from "@/assets/work-protein-design.jpg";
import workStemcellImg from "@/assets/work-stemcell.jpg";
import workImmunoageingImg from "@/assets/work-immunoageing.jpg";

export const ResearchTab = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center space-y-6 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-white leading-tight">My Research Focus</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring the frontiers of molecular biology, stem cell research, and immunology to advance our understanding of life and develop innovative therapeutic approaches.
        </p>
      </div>



      {/* Detailed Research Sections */}
      <section className="space-y-16">
        {/* Protein Design & Engineering */}
        <div id="protein-design" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-[#FF0F7B] pb-2">
            Protein Design & Engineering
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Proteins are the workhorses of cellular function, performing a myriad of essential tasks from catalyzing biochemical reactions to providing structural support. Our research focuses on understanding and manipulating these molecular machines to uncover new biological functions and develop therapeutic applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We employ computational protein design approaches to engineer novel protein structures with specific functions. This includes designing proteins that can target specific cancer cell markers with high specificity and low toxicity, as well as developing new protein-protein interaction interfaces for therapeutic applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work involves close collaboration with computational biologists and structural biologists to understand the relationship between protein sequence, structure, and function. We use advanced techniques including cryo-electron microscopy, X-ray crystallography, and molecular dynamics simulations to validate our designs.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={workProteinImg} 
                alt="Protein Design Techniques" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stem Cell Biology */}
        <div id="stem-cell-biology" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-[#FF0F7B] pb-2">
            Stem Cell Biology & Regenerative Medicine
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Stem cells represent one of the most promising frontiers in modern medicine, offering the potential to regenerate damaged tissues and treat previously incurable diseases. Our research focuses on understanding the fundamental mechanisms that control stem cell behavior and differentiation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We investigate hematopoietic stem cells, which give rise to all blood cell types, and their role in immune system development. This includes studying how these cells differentiate into T-cells and other immune cells, and how this process is regulated during development and aging.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work also explores the use of induced pluripotent stem cells (iPSCs) for regenerative medicine applications. We develop protocols for differentiating iPSCs into specific cell types and investigate their potential for tissue repair and regeneration, particularly in pediatric patients.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={workStemcellImg} 
                alt="Stem Cell Research Areas" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Immunology & Aging */}
        <div id="immunology-aging" className="space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-2 border-[#FF0F7B] pb-2">
            Immunology & Aging
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                The immune system undergoes significant changes as we age, leading to increased susceptibility to infections, reduced vaccine efficacy, and higher rates of chronic inflammatory diseases. Understanding these age-related changes is crucial for developing interventions that can promote healthier aging.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our research focuses on characterizing the molecular and cellular changes that occur in the aging immune system. This includes studying changes in immune cell populations, alterations in cytokine production, and modifications in immune cell function and responsiveness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are particularly interested in developing strategies to rejuvenate the aging immune system. This includes investigating the potential of various interventions, from pharmacological approaches to cellular therapies, to restore immune function in elderly populations and improve their response to vaccines and other treatments.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={workImmunoageingImg} 
                alt="Immunology & Aging Findings" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-[#FF0F7B]/20 shadow-[0_0_30px_#FF0F7B30]">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#FF0F7B] via-[#EDB753] to-[#EDD153] bg-clip-text text-transparent">Current Research Projects</h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border border-[#FF0F7B]/30 bg-slate-800/50 shadow-[0_0_15px_#FF0F7B20] hover:shadow-[0_0_25px_#FF0F7B40] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">Novel Protein Therapeutics for Cancer</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-300">Harvard Medical School</span>
                  <span className="px-2 py-1 bg-gradient-to-r from-[#FF0F7B] to-[#EDB753] text-white rounded-full text-xs font-medium">Active</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Developing engineered proteins that target specific cancer cell markers with high specificity and low toxicity. This project combines computational design with experimental validation to create novel therapeutic agents.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-[#FF0F7B]/30 bg-slate-800/50 shadow-[0_0_15px_#FF0F7B20] hover:shadow-[0_0_25px_#FF0F7B40] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white">Stem Cell-Based Regenerative Medicine</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-300">Boston Children's Hospital</span>
                  <span className="px-2 py-1 bg-gradient-to-r from-[#FF0F7B] to-[#EDB753] text-white rounded-full text-xs font-medium">Active</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
                  Investigating the use of induced pluripotent stem cells for tissue repair and regeneration in pediatric patients. Focus on developing safe and effective protocols for clinical applications.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border border-[#FF0F7B]/30 bg-slate-800/50 shadow-[0_0_15px_#FF0F7B20] hover:shadow-[0_0_25px_#FF0F7B40] transition-all duration-300 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-white">Immunoaging Interventions</CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-300">Harvard Medical School</span>
                <span className="px-2 py-1 bg-gradient-to-r from-[#EDB753] to-[#EDD153] text-slate-900 rounded-full text-xs font-medium">Planning</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Developing strategies to rejuvenate the aging immune system and improve vaccine responses in elderly populations. This project aims to identify novel therapeutic targets and develop interventions that can restore immune function.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
