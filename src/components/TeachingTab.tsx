import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Video, Users, BookOpen, Heart, Globe, Calendar, ExternalLink } from "lucide-react";

interface TeachingTabProps {
  onNavigate?: (tab: string) => void;
}

export const TeachingTab = ({ onNavigate }: TeachingTabProps) => {
  const initiatives = [
    {
      title: "Sunday Science Activism",
      description: (
        <>
          Weekly sessions (9:00-10:30 AM, EST) to meet with university students who are interested in a science career. Meetings are held through Zoom or Google Meet. Those who are interested can contact me at{" "}
          <a 
            href="mailto:rubulharvard@gmail.com" 
            className="text-primary font-medium hover:text-primary-glow transition-colors link-underline"
          >
            rubulharvard@gmail.com
          </a>
          .
        </>
      ),
      icon: Video,
      details: [
        "Interactive sessions",
        "Global student participation",
        "Science education and career guidance",
        //"Q&A sessions with aspiring scientists"
      ],
      link: "sundayScience"
    },
    {
      title: "Uplift Libraries",
      description: "Initiative to create small-scale libraries for children in rural India",
      icon: BookOpen,
      details: [
        "Currently operating 6 libraries",
        "Serving underprivileged students",
        "Focus on rural education access",
        "Educational resource distribution"
      ],
      link: "https://upliftlibraries.com/"
    }
    /*{
      title: "Educational Outreach",
      description: "Featured in various educational media and documentaries",
      icon: Globe,
      details: [
        "LabTV/NIH minidocumentary feature",
        "American Chemical Society (ACS) feature video",
        "Apple podcast appearance",
        "Scientific communication advocacy"
      ]
    }*/
  ];



  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-5xl font-bold text-white tracking-tight leading-tight mb-4">Teaching & Science Activism</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Dedicated to democratizing science education and creating opportunities for underprivileged 
          students around the world through innovative outreach programs and educational initiatives.
        </p>
      </div>

      {/* Divider */}
      <Separator className="my-8" />

      {/* Main Initiatives */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10 text-white tracking-wide">Key Initiatives</h3>
        <div className="space-y-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <initiative.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary">{initiative.title}</CardTitle>
                    <CardDescription className="text-lg mt-1 text-gray-900">{initiative.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {initiative.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-900">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {initiative.link && (
                    <div className="flex flex-col justify-center">
                      {initiative.link.startsWith('http') ? (
                        <Button 
                          asChild
                          className="w-full md:w-auto"
                        >
                          <a 
                            href={initiative.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button 
                          onClick={() => onNavigate?.(initiative.link)}
                          className="w-full md:w-auto"
                        >
                          Learn More
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <Card className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl hover:shadow-lg">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-foreground" />
          </div>
          
          <h3 className="text-2xl font-bold text-black tracking-wide mb-4">Mission & Vision</h3>
          
          <blockquote className="text-xl text-gray-900 italic leading-relaxed max-w-3xl mx-auto">
            "Science should not be a privilege limited to the few. Through education, outreach, and 
            accessible resources, we can inspire the next generation of scientists from all backgrounds 
            to pursue their curiosity and contribute to our understanding of the world."
          </blockquote>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Accessibility</h4>
              <p className="text-sm text-gray-900">
                Making science education accessible to students in remote and underserved communities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Inspiration</h4>
              <p className="text-sm text-gray-900">
                Inspiring young minds to pursue scientific careers regardless of their background.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Community</h4>
              <p className="text-sm text-gray-900">
                Building a global community of science enthusiasts and future researchers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <section className="text-center bg-secondary/30 rounded-3xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-white tracking-wide mb-4">Join the Movement</h3>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Whether you're a student, educator, or science enthusiast, there are many ways to get involved 
          in our mission to spread science education.
        </p>
        
        
      </section>
    </div>
  );
};