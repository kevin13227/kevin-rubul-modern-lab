import { Button } from "@/components/ui/button";
import heroMolecularBg from "@/assets/hero-molecular-bg.jpg";
interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}
export const HeroSection = ({
  onNavigate
}: HeroSectionProps) => {
  return <section className="relative min-h-[70vh] flex items-center justify-center hero-molecular-bg" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroMolecularBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advancing Science Through
            <span className="bg-gradient-to-r from-primary-glow to-scientific-accent bg-clip-text text-transparent block mt-2">
              Protein Design & Cell Biology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Research Fellow at Harvard Medical School & Boston Children's Hospital, 
            working in protein design, hematopoietic stem & T-cell development, and immuno-ageing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => onNavigate('biography')} className="btn-hero px-8 py-4 text-lg font-semibold animate-glow">
              Learn About My Research
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')} className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            
            
          </div>
        </div>
      </div>
    </section>;
};