import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Heart, Target, Calendar, MapPin } from "lucide-react";

const Teaching = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Teaching & Activism
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation through education and community-driven scientific initiatives.
            </p>
          </div>

          {/* Teaching Philosophy */}
          <Card className="glass border-primary/20 p-8 mb-12 section-glow">
            <div className="text-center">
              <div className="gradient-icon w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-16 h-16" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Teaching Philosophy</h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
                I believe that science education should be accessible, engaging, and rooted in real-world applications. 
                My approach combines rigorous academic training with practical problem-solving skills, 
                preparing students to tackle the challenges of modern scientific research.
              </p>
            </div>
          </Card>

          {/* Teaching Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="gradient-icon">
                  <Users className="w-6 h-6" />
                </div>
                Academic Teaching
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Graduate Seminars</h4>
                  <p className="text-white/70 text-sm mb-2">Harvard Medical School</p>
                  <p className="text-white/60 leading-relaxed">
                    Leading advanced seminars on protein design methodologies and computational biology approaches.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Research Mentorship</h4>
                  <p className="text-white/70 text-sm mb-2">Boston Children's Hospital</p>
                  <p className="text-white/60 leading-relaxed">
                    Supervising graduate students and postdocs in cell biology and immunology research projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="gradient-icon">
                  <BookOpen className="w-6 h-6" />
                </div>
                Science Communication
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Popular Science Writing</h4>
                  <p className="text-white/70 text-sm mb-2">Assamese Literature</p>
                  <p className="text-white/60 leading-relaxed">
                    Authored two bestselling books in Assamese, making complex scientific concepts accessible to regional audiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Conference Speaking</h4>
                  <p className="text-white/70 text-sm mb-2">International Venues</p>
                  <p className="text-white/60 leading-relaxed">
                    Regular speaker at scientific conferences and public engagement events worldwide.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Activism Projects */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Science Activism Initiatives</h2>
            
            <Card className="glass border-primary/20 p-8 mb-8 section-glow">{/* Updated border */}
              <div className="flex items-start gap-6">
                <div className="gradient-bg p-4 rounded-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Uplift Libraries Initiative</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="gradient-icon">
                          <MapPin className="w-4 h-4" />
                        </div>
                        Current Impact
                      </h4>
                      <ul className="text-white/70 space-y-1">
                        <li>• 6 active libraries in rural India</li>
                        <li>• 500+ children served regularly</li>
                        <li>• Focus on science education materials</li>
                        <li>• Community-driven sustainability model</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="gradient-icon">
                          <Target className="w-4 h-4" />
                        </div>
                        Goals & Vision
                      </h4>
                      <ul className="text-white/70 space-y-1">
                        <li>• Expand to 20 libraries by 2025</li>
                        <li>• Integrate digital learning resources</li>
                        <li>• Train local science educators</li>
                        <li>• Partner with international organizations</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    This grassroots initiative aims to democratize access to scientific knowledge in underserved communities, 
                    fostering the next generation of scientists and critical thinkers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="glass border-primary/20 p-8 text-center section-glow">{/* Updated border */}
            <div className="gradient-icon w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Calendar className="w-16 h-16" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Join the Movement</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
              Interested in collaborating on educational initiatives or supporting science activism? 
              Let's work together to make scientific knowledge accessible to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Partner With Us
              </Button>
              <Button variant="hero-outline" size="lg">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Teaching;