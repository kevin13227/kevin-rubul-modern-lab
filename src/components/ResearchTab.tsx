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
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Protein Design & Engineering
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                Proteins are the workhorses of cellular function, performing a myriad of essential tasks from catalyzing biochemical reactions to providing structural support. Our research focuses on understanding and manipulating these molecular machines to uncover new biological functions and develop therapeutic applications.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                We employ computational protein design approaches to engineer novel protein structures with specific functions. This includes designing proteins that can target specific cancer cell markers with high specificity and low toxicity, as well as developing new protein-protein interaction interfaces for therapeutic applications.
              </p>
              <p className="text-mutprimaryed-foreground leading-relaxed">
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
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Stem Cell Biology & Regenerative Medicine
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                Stem cells represent one of the most promising frontiers in modern medicine, offering the potential to regenerate damaged tissues and treat previously incurable diseases. Our research focuses on understanding the fundamental mechanisms that control stem cell behavior and differentiation.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                We investigate hematopoietic stem cells, which give rise to all blood cell types, and their role in immune system development. This includes studying how these cells differentiate into T-cells and other immune cells, and how this process is regulated during development and aging.
              </p>
              <p className="text-primary-foreground leading-relaxed">
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
          <h2 className="text-3xl font-bold text-white border-b-2 border-primary pb-2">
            Immunology & Aging
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                The immune system undergoes significant changes as we age, leading to increased susceptibility to infections, reduced vaccine efficacy, and higher rates of chronic inflammatory diseases. Understanding these age-related changes is crucial for developing interventions that can promote healthier aging.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                Our research focuses on characterizing the molecular and cellular changes that occur in the aging immune system. This includes studying changes in immune cell populations, alterations in cytokine production, and modifications in immune cell function and responsiveness.
              </p>
              <p className="text-primary-foreground leading-relaxed">
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
    </div>
  );
};
