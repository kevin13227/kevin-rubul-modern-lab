import { Card } from "@/components/ui/card";

interface ResearchCardProps {
  title: string;
  description: string;
  image: string;
  gradientClass: string;
}

const ResearchCard = ({ title, description, image, gradientClass }: ResearchCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 section-glow">{/* Removed animate-float */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${gradientClass}`} />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default ResearchCard;