import { Button } from "@/components/ui/button";
import heroMolecularBg from "@/assets/hero-molecular-bg.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed tracking-tight pb-4">
            Advancing Science Through
            <span className="block mt-4 text-[#ff4164] pb-2 leading-tight">
              Protein Design & Cell Biology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Research Fellow at Harvard Medical School & Boston Children's Hospital, 
            pioneering breakthrough therapies through innovative protein design and 
            computational biology approaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('research')} 
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#f5dc50]">
                Learn About My Research
              </span>
            </Button>
            
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')} 
              className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#f5dc50]">
                Get In Touch
              </span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};