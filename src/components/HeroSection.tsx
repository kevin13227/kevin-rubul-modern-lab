import { Button } from "@/components/ui/button";
import heroMolecularBg from "@/assets/hero-molecular-bg.jpg";
import rubulPortrait from "@/assets/rubul-portrait.jpg";

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
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              Advancing Science Through
              <span className="block mt-4 bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] bg-clip-text text-transparent">
                Protein Design & Cell Biology
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
              Research Fellow at Harvard Medical School & Boston Children's Hospital, 
              working in protein design, hematopoietic stem & T-cell development, and immuno-ageing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => onNavigate('biography')} 
                className="bg-gradient-to-r from-[#FF0F7B] via-[#dbaf0d] to-[#dbaf0d] hover:shadow-[0_0_30px_#FF0F7B80] text-white px-10 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Learn About My Research
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => onNavigate('contact')} 
                className="border-2 border-white/80 text-white hover:bg-white/10 hover:shadow-[0_0_20px_#FF0F7B60] px-10 py-4 text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-[#FF0F7B]/20 to-[#dbaf0d]/20 p-2">
                <img 
                  src={rubulPortrait} 
                  alt="Dr. Rubul Mout" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF0F7B]/30 to-[#dbaf0d]/30 blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};