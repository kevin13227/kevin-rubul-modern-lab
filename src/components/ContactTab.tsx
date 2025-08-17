@ -1,27 +1,38 @@
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
      description: "Stem Cell & Regenerative Biology Program",
      links: [
        {
          text: "Harvard Medical School",
          url: "https://hms.harvard.edu/"
        },
        {
          text: "Boston Children's Hospital",
          url: "https://www.childrenshospital.org/"
        }
      ]
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, Massachusetts",
      description: "Cambridge/Boston Area"
      description: "Cambridge/Boston Area",
      mapLink: "https://maps.google.com/?q=Boston+Massachusetts"
    }
  ];

@ -62,41 +73,66 @@
                  >
                    {contact.value}
                  </a>
                ) : contact.links ? (
                  <div className="text-foreground text-lg">
                    {contact.links.map((link, linkIndex) => (
                      <span key={linkIndex}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-glow transition-colors link-underline"
                        >
                          {link.text}
                        </a>
                        {linkIndex < contact.links.length - 1 && " & "}
                      </span>
                    ))}
                  </div>
                ) : contact.mapLink ? (
                  <a 
                    href={contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
                {/* Add Send Email button underneath the Email section */}
                {contact.label === "Email" && (
                  <div className="mt-4">
                    <Button 
                      size="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href="mailto:rubul.mout@childrens.harvard.edu" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
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