import { Button } from "@/components/ui/button";
import heroMolecularBg from "@/assets/hero-molecular-bg.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroMolecularBg})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed tracking-tight pb-4">
            Advancing Science Through
            <span className="block mt-4 bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] bg-clip-text text-transparent">
              Protein Design & Cell Biology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Research Fellow at Harvard Medical School & Boston Children's Hospital, 
            working in protein design, hematopoietic stem & T-cell development, and immuno-ageing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate('research')} 
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-[#FF0F7B] group-hover:via-[#ffcc00] group-hover:to-[#ffcc00] group-hover:bg-clip-text group-hover:text-transparent">
                Learn About My Research
              </span>
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => onNavigate('contact')} 
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-[#FF0F7B] group-hover:via-[#ffcc00] group-hover:to-[#ffcc00] group-hover:bg-clip-text group-hover:text-transparent">
                Get In Touch
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};