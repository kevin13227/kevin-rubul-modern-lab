import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ResearchCard from "@/components/ResearchCard";
import AchievementCard from "@/components/AchievementCard";
import { Award, BookOpen, Heart, Beaker } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import proteinDesignImage from "@/assets/work-protein-design.jpg";
import stemCellImage from "@/assets/work-stemcell.jpg";
import immunoAgeingImage from "@/assets/work-immunoageing.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Advancing Science Through
            <br />
            <span className="gradient-text">Protein Design & Cell Biology</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Research Fellow at Harvard Medical School & Boston Children's Hospital, working in protein design, 
            hematopoietic stem & T-cell development, and immuno-ageing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Learn About My Research
            </Button>
            <Button variant="hero-outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Research Focus
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              An RNA-centric view of the cell surface: protein design, hematopoietic stem & T-cell development, and immuno-ageing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResearchCard
              title="Protein Design"
              description="Engineering and analyzing protein structures to uncover new biological functions."
              image={proteinDesignImage}
              gradientClass="from-pink-500/20 to-transparent"
            />
            <ResearchCard
              title="Hematopoietic Stem & T-Cell Development"
              description="Decoding developmental programs guiding immune cell formation and function."
              image={stemCellImage}
              gradientClass="from-blue-500/20 to-transparent"
            />
            <ResearchCard
              title="Immuno‑Ageing"
              description="Understanding age-associated immune changes to inform healthier longevity."
              image={immunoAgeingImage}
              gradientClass="from-purple-500/20 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 section-glow">{/* Updated background */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Key Achievements & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard
              title="Nobel Collaboration"
              description="Collaborated with 2024 Nobel Laureate David Baker on protein design research featured in Nature magazine."
              icon={<Award className="w-8 h-8" />}
            />
            <AchievementCard
              title="Published Author"
              description="Author of 40+ research articles and two bestselling books in Assamese, with 50,000+ copies sold."
              icon={<BookOpen className="w-8 h-8" />}
            />
            <AchievementCard
              title="Uplift Libraries"
              description="Founded an initiative creating small-scale libraries for children in rural India, currently serving 6 libraries."
              icon={<Heart className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass p-8 md:p-12 rounded-2xl border border-primary/20 section-glow">{/* Updated border */}
            <div className="gradient-icon w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Beaker className="w-16 h-16" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              I'm always open to discussing research opportunities, scientific collaborations, or speaking engagements in protein design and cell biology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get In Touch
              </Button>
              <Button variant="hero-outline" size="lg">
                View Publications
              </Button>
              <Button variant="hero-outline" size="lg">
                Join Science Activism
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
