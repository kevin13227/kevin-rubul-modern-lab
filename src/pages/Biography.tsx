import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const Biography = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Biography
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Learn about my journey in protein design, cell biology, and scientific research.
            </p>
          </div>

          {/* Biography Content */}
          <div className="space-y-8">
            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="gradient-icon">
                  <GraduationCap className="w-6 h-6" />
                </div>
                Academic Background
              </h2>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-4">
                  <div className="gradient-bg p-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Research Fellow</h3>
                    <p className="text-white/70">Harvard Medical School & Boston Children's Hospital</p>
                    <p className="text-sm text-white/60">2020 - Present</p>
                  </div>
                </div>
                {/* Add more academic entries as needed */}
              </div>
            </Card>

            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="gradient-icon">
                  <Briefcase className="w-6 h-6" />
                </div>
                Research Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Primary Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Protein Design</Badge>
                    <Badge variant="secondary">Cell Biology</Badge>
                    <Badge variant="secondary">Immunology</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Specialized Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Stem Cell Development</Badge>
                    <Badge variant="outline">T-Cell Biology</Badge>
                    <Badge variant="outline">Immuno-Ageing</Badge>
                  </div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                My research focuses on understanding the fundamental mechanisms of protein design and cellular development, 
                with particular emphasis on hematopoietic stem cells and T-cell development processes. 
                I collaborate extensively with Nobel Laureate David Baker on cutting-edge protein design research.
              </p>
            </Card>

            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="gradient-icon">
                  <MapPin className="w-6 h-6" />
                </div>
                Community Impact
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Beyond academic research, I am deeply committed to science education and community development. 
                I have authored bestselling books in Assamese and founded the Uplift Libraries initiative, 
                which has established 6 libraries serving children in rural India.
              </p>
              <p className="text-white/70 leading-relaxed">
                My work bridges the gap between cutting-edge scientific research and community outreach, 
                ensuring that scientific knowledge benefits society at large.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Biography;