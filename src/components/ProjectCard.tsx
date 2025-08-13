import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export const ProjectCard = ({ title, description, image, tags, link }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 glass-card overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed mb-4">
          {description}
        </CardDescription>
        
        {link && (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Learn More
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};