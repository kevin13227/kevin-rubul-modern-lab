import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, LinkedinIcon, TwitterIcon } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Let's discuss research collaborations, speaking opportunities, or science activism initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="gradient-bg p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-white/70">rubul.mout@harvard.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="gradient-bg p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <p className="text-white/70">Boston, MA, USA</p>
                      <p className="text-white/60 text-sm">Harvard Medical School & Boston Children's Hospital</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="gradient-bg p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Office</h3>
                      <p className="text-white/70">Available upon request</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
                <h2 className="text-2xl font-bold text-white mb-6">Social Media</h2>
                <div className="flex gap-4">
                  <Button variant="hero-outline" size="icon">
                    <LinkedinIcon className="w-5 h-5" />
                  </Button>
                  <Button variant="hero-outline" size="icon">
                    <TwitterIcon className="w-5 h-5" />
                  </Button>
                  <Button variant="hero-outline" size="icon">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </Card>

              <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
                <h2 className="text-2xl font-bold text-white mb-4">Research Interests</h2>
                <p className="text-white/70 leading-relaxed">
                  I'm particularly interested in discussing:
                </p>
                <ul className="mt-4 space-y-2 text-white/60">
                  <li>• Protein design methodologies</li>
                  <li>• Hematopoietic stem cell research</li>
                  <li>• T-cell development mechanisms</li>
                  <li>• Immuno-ageing studies</li>
                  <li>• Science education initiatives</li>
                  <li>• Community outreach programs</li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass border-primary/20 p-8 section-glow">{/* Updated border */}
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      className="bg-black/30 border-primary/30 text-white placeholder:text-white/50 focus:border-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      className="bg-black/30 border-primary/30 text-white placeholder:text-white/50 focus:border-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    className="bg-black/30 border-primary/30 text-white placeholder:text-white/50 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    className="bg-black/30 border-primary/30 text-white placeholder:text-white/50 focus:border-primary"
                    placeholder="Research collaboration opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="bg-black/30 border-primary/30 text-white placeholder:text-white/50 resize-none focus:border-primary"
                    placeholder="Tell me about your research interests, collaboration ideas, or how we can work together..."
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;