import { Button } from "@/components/ui/button";
import proteinMoleculeBg from "@/assets/protein-molecule-ai.png";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed background that stays in place when scrolling */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${proteinMoleculeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Background overlay - very light to make image much brighter */}
      <div className="fixed inset-0 bg-black/5" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-relaxed tracking-tight pb-4">
            Fighting Cancer & Aging
            <span className="block mt-4 text-[#ff4164] pb-2 leading-tight">
              with Protein Design & Immunobiology
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
          
          <div className="mt-12 pt-8 border-t border-gray-600/30">
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed opacity-90">
              My work is published in <a href="https://www.cell.com/cell/abstract/S0092-8674(25)00798-6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">Cell</a>, <a href="https://www.pnas.org/doi/abs/10.1073/pnas.2309457121" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">PNAS</a>, &amp; <a href="https://www.nature.com/articles/s41467-021-22276-z" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">Nature communications</a>, <a href="https://pubs.acs.org/doi/abs/10.1021/acsnano.6b07600" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">ACS Nano</a>, and other journals; and our technologies are featured in <a href="https://www.nature.com/articles/d41586-024-03822-3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">Nature</a>, <a href="https://hms.harvard.edu/news/ai-designed-proteins-can-boost-production-t-cells" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">Harvard News</a>, <a href="https://www.washington.edu/news/2024/01/30/using-computers-to-design-proteins-allows-researchers-to-make-tunable-hydrogels-that-can-form-both-inside-and-outside-of-cells/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff4164] underline transition-colors duration-300">UW News</a>, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};