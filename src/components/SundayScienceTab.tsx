import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Video, Users, BookOpen, Heart, Globe, Calendar, ExternalLink } from "lucide-react";

export const SundayScienceTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sunday Science Activism</h1>
          <p className="text-xl text-muted-foreground">
            Weekly science education sessions for university students
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Sunday Science Sessions</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every Sunday, I set aside one and a half hours (9:00-10:30 AM, EST) to talk to university students about science and science careers. Meetings are held through Zoom or Google Meet. Those who are interested can contact me at{" "}
          <a 
            href="mailto:rubulharvard@gmail.com" 
            className="text-primary hover:underline font-medium"
          >
            rubulharvard@gmail.com
          </a>
          . Students should be in a group and they must be highly interested in a science career. Note that, due to the high volume of emails I receive, I will NOT be able to answer any other science or non-science related questions through email. I cannot help with internship inquiries. If interested, please email me or have your teachers/professors contact me.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Email Requirements</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• College/university affiliation</li>
                  <li>• Group size</li>
                  <li>• Study disciplines</li>
                  <li>• Brief explanation of what you expect to learn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};