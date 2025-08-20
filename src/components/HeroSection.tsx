import { Button } from "@/components/ui/button";
import heroMolecularBg from "@/assets/hero-molecular-bg.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Fixed to viewport */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroMolecularBg})`,
        }}
      />
      
      {/* Fixed Black Overlay - 60% opacity */}
      <div className="fixed inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed tracking-tight pb-4">
            Advancing Science Through
            <span className="block mt-4 text-[#ff4164] pb-2 leading-tight">
              Protein Design, Cancer & Immunobiology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Research Fellow at Harvard Medical School & Boston Children's Hospital, 
            pioneering breakthrough therapies through innovative computational protein design and stem cell & immunobiology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg"
              onClick={() => onNavigate('research')} 
              className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#ff4164]">
                Learn About My Research
              </span>
            </Button>
            
            <Button 
              size="lg"
              onClick={() => onNavigate('contact')} 
              className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent border-2 border-white text-white px-10 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
            >
              <span className="group-hover:text-[#ff4164]">
                Get In Touch
              </span>
            </Button>
          </div>
          
          <p className="text-lg text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed">
            Our work is published in Cell, PNAS, & Nature communications, among others; and our technology is featured in Nature, HMS News, etc.
          </p>
        </div>
      </div>
    </div>
  );
};