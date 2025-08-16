import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Building } from "lucide-react";

export const ContactTab = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rubul.mout@childrens.harvard.edu",
      link: "mailto:rubul.mout@childrens.harvard.edu"
    },
    {
      icon: Building,
      label: "Institution",
      value: "Harvard Medical School & Boston Children's Hospital",
      description: "Stem Cell & Regenerative Biology Program"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, Massachusetts",
      description: "Cambridge/Boston Area"
    }
  ];





  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I'm always interested in meaningful collaborations, research opportunities, and 
          discussions about advancing science education. Feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            Contact Information
          </CardTitle>
          <CardDescription>
            Primary contact details and institutional affiliation
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {contactInfo.map((contact, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    className="text-primary hover:text-primary-glow transition-colors link-underline text-lg"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-foreground text-lg">{contact.value}</p>
                )}
                {contact.description && (
                  <p className="text-muted-foreground text-sm mt-1">{contact.description}</p>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>





      {/* Response Time */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Response Time</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            I typically respond to professional inquiries within 2-3 business days. For urgent 
            research collaborations or time-sensitive opportunities, please mention "URGENT" 
            in your subject line.
          </p>
          
          <Separator className="my-6 bg-white/20" />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="mailto:rubul.mout@childrens.harvard.edu" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            
            <p className="text-white/80 text-sm">
              or connect through institutional channels
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Office Hours Note */}
      <div className="text-center text-muted-foreground">
        <p className="text-sm">
          <strong>Note:</strong> Due to the nature of scientific research and international collaborations, 
          I maintain flexible communication hours. Please allow adequate time for thoughtful responses 
          to complex research inquiries.
        </p>
      </div>
    </div>
  );
};