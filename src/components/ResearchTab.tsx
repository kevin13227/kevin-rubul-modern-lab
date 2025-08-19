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
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-[#f2f2f2] bg-clip-text text-transparent">Research</h1>
      </div>



      {/* Detailed Research Sections */}
      <section className="space-y-16">
                     {/* Protein Design & Engineering */}
             <div id="protein-design" className="space-y-6">
               <div className="flex items-center justify-between">
                                 <h2 className="text-3xl font-bold text-white border-b-2 border-[#A51C30] pb-2">
                  Protein Design & Engineering
                </h2>
                 <div className="w-32 h-32 overflow-hidden rounded-lg bg-gradient-to-br from-[#FF0F7B]/20 to-[#EDB753]/20 border border-[#FF0F7B]/30 flex-shrink-0 shadow-[0_0_20px_#FF0F7B40]">
                   <div className="w-full h-full flex items-center justify-center">
                     <div className="text-center space-y-2">
                       <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#FF0F7B] to-[#EDB753] rounded-full flex items-center justify-center">
                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                         </svg>
                       </div>
                       <div>
                         <p className="text-xs text-muted-foreground">Molecular Structure</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-primary-foreground leading-relaxed">
                Proteins are the workhorses of cellular function, performing a myriad of essential tasks from catalyzing biochemical reactions to providing structural support. Our research focuses on understanding and manipulating these molecular machines to uncover new biological functions and develop therapeutic applications.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                We employ computational protein design approaches to engineer novel protein structures with specific functions. This includes designing proteins that can target specific cancer cell markers with high specificity and low toxicity, as well as developing new protein-protein interaction interfaces for therapeutic applications.
              </p>
              <p className="text-primary-foreground leading-relaxed">
                Our work involves close collaboration with computational biologists and structural biologists to understand the relationship between protein sequence, structure, and function. We use advanced techniques including cryo-electron microscopy, X-ray crystallography, and molecular dynamics simulations to validate our designs.
              </p>
            </div>
            <div className="space-y-4">
              <Card className="bg-slate-800/100 border border-[#000000]/30 shadow-[0_0_15px_#00000030">
                <CardHeader>
                  <CardTitle className="text-lg bg-white bg-clip-text text-transparent">Key Techniques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-[#f2f2f2}">
                  <div className="items-center">
                    <li>Computational protein design</li>
                    <li>Structure-function analysis</li>
                    <li>Protein-protein interaction engineering</li>
                    <li>Therapeutic protein development</li>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

                       {/* Stem Cell Biology */}
               <div id="stem-cell-biology" className="space-y-6">
                 <div className="flex items-center justify-between">
                                     <h2 className="text-3xl font-bold text-white border-b-2 border-[#A51C30] pb-2">
                    Stem Cell Biology & Regenerative Medicine
                  </h2>
                   <div className="w-32 h-32 overflow-hidden rounded-lg bg-gradient-to-br from-[#FF0F7B]/20 to-[#EDB753]/20 border border-[#FF0F7B]/30 flex-shrink-0 shadow-[0_0_20px_#FF0F7B40]">
                     <div className="w-full h-full flex items-center justify-center">
                       <div className="text-center space-y-2">
                         <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#FF0F7B] to-[#EDB753] rounded-full flex items-center justify-center">
                           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                           </svg>
                         </div>
                         <div>
                           <p className="text-xs text-muted-foreground">Regeneration</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
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
              <Card className="bg-slate-800/100 border border-[#000000]/30 shadow-[0_0_15px_#00000030">
                <CardHeader>
                  <CardTitle className="text-lg bg-white bg-clip-text text-transparent">Research Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="items-center text-[#f2f2f2]">
                    <li>Hematopoietic stem cell biology</li>
                    <li>T-cell development</li>
                    <li>iPSC differentiation protocols</li>
                    <li>Tissue engineering</li>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

                       {/* Immunology & Aging */}
               <div id="immunology-aging" className="space-y-6">
                 <div className="flex items-center justify-between">
                   <h2 className="text-3xl font-bold text-white border-b-2 border-[#A51C30] pb-2">
                     Immunology & Aging
                   </h2>
                   <div className="w-32 h-32 overflow-hidden rounded-lg bg-gradient-to-br from-[#FF0F7B]/20 to-[#EDB753]/20 border border-[#FF0F7B]/30 flex-shrink-0 shadow-[0_0_20px_#FF0F7B40]">
                     <div className="w-full h-full flex items-center justify-center">
                       <div className="text-center space-y-2">
                         <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#FF0F7B] to-[#EDB753] rounded-full flex items-center justify-center">
                           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                           </svg>
                         </div>
                         <div>
                           <p className="text-xs text-muted-foreground">Immune Health</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
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
              <Card className="bg-slate-800/100 border border-[#000000]/30 shadow-[0_0_15px_#00000030">
                <CardHeader>
                  <CardTitle className="text-lg bg-white bg-clip-text text-transparent">Key Findings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="items-center text-[#f2f2f2]">
                    <li>Age-related immune dysfunction</li>
                    <li>Immunotherapeutic strategies</li>
                    <li>Vaccine response optimization</li>
                    <li>Inflammation and aging</li>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
