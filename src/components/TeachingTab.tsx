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
            className="text-primary hover:underline font-medium"
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
    },
    {
      title: "Educational Outreach",
      description: "Featured in various educational media and documentaries",
      icon: Globe,
      details: [
        "LabTV/NIH minidocumentary feature",
        "American Chemical Society (ACS) feature video",
        "Apple podcast appearance",
        "Scientific communication advocacy"
      ]
    }
  ];

  const impact = [
    { metric: "6", label: "Libraries Established", description: "Serving rural communities in India" },
    { metric: "50,000+", label: "Books Sold", description: "Bestselling memoir in Assamese" },
    { metric: "Weekly", label: "Science Sessions", description: "Sunday Science Activism program" },
    { metric: "Global", label: "Student Reach", description: "International educational outreach" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-foreground mb-4">Teaching & Science Activism</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Dedicated to democratizing science education and creating opportunities for underprivileged 
          students around the world through innovative outreach programs and educational initiatives.
        </p>
      </div>

      {/* Impact Statistics */}
      <section className="bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] rounded-3xl p-8 md:p-12 text-white">
        <h3 className="text-3xl font-bold text-center mb-10">Educational Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impact.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{item.metric}</div>
              <div className="text-xl font-semibold mb-1">{item.label}</div>
              <div className="text-white/80 text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Initiatives */}
      <section>
        <h3 className="text-3xl font-bold text-center mb-10">Key Initiatives</h3>
        <div className="space-y-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] rounded-lg flex items-center justify-center">
                    <initiative.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                    <CardDescription className="text-lg mt-1">{initiative.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {initiative.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
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
      <Card className="glass-card border-2 border-primary/20">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#FF0F7B] via-[#ffcc00] to-[#ffcc00] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Mission & Vision</h3>
          
          <blockquote className="text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
            "Science should not be a privilege limited to the few. Through education, outreach, and 
            accessible resources, we can inspire the next generation of scientists from all backgrounds 
            to pursue their curiosity and contribute to our understanding of the world."
          </blockquote>
          
          <Separator className="my-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2 text-primary">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                Making science education accessible to students in remote and underserved communities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Inspiration</h4>
              <p className="text-sm text-muted-foreground">
                Inspiring young minds to pursue scientific careers regardless of their background.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-primary">Community</h4>
              <p className="text-sm text-muted-foreground">
                Building a global community of science enthusiasts and future researchers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <section className="text-center bg-secondary/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Whether you're a student, educator, or science enthusiast, there are many ways to get involved 
          in our mission to spread science education.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 

            <span className="group-hover:bg-gradient-to-r group-hover:from-[#FF0F7B] group-hover:via-[#ffcc00] group-hover:to-[#ffcc00] group-hover:bg-clip-text group-hover:text-transparent flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Join Sunday Science Sessions
            </span>
          </Button>
          
          <Button 
            size="lg" 
            className="bg-black hover:bg-black focus:bg-black active:bg-black border-2 border-white text-white px-8 py-4 text-lg font-medium group transition-transform duration-300 hover:scale-105"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-[#FF0F7B] group-hover:via-[#ffcc00] group-hover:to-[#ffcc00] group-hover:bg-clip-text group-hover:text-transparent flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Support Uplift Libraries
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};