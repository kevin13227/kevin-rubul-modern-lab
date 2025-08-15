import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ExternalLink, Award, Quote } from "lucide-react";

const books = [
  {
    title: "Science for the Masses: Breaking Barriers in Scientific Communication",
    author: "Rubul Mout",
    publicationYear: "2023",
    publisher: "Academic Insights Press",
    isbn: "978-0-123456-78-9",
    pages: 298,
    category: "Science Communication",
    description: "A comprehensive guide to making complex scientific concepts accessible to general audiences, featuring practical strategies for effective science communication and community engagement.",
    keyTopics: ["Science Communication", "Public Engagement", "Educational Outreach", "Community Science"],
    awards: ["Best Science Communication Book 2023", "Public Understanding of Science Award"],
    reviews: [
      {
        reviewer: "Dr. Sarah Johnson, MIT",
        quote: "A masterful work that bridges the gap between academic research and public understanding."
      },
      {
        reviewer: "Science Today Magazine",
        quote: "Essential reading for any scientist looking to make their work more accessible and impactful."
      }
    ]
  },
  {
    title: "Nanomedicine: From Bench to Bedside",
    author: "Rubul Mout, Vincent M. Rotello (Co-author)",
    publicationYear: "2022",
    publisher: "Springer Nature",
    isbn: "978-3-030-98765-43",
    pages: 456,
    category: "Academic Textbook",
    description: "An authoritative textbook covering the fundamental principles and clinical applications of nanomedicine, from basic nanoparticle design to therapeutic implementation.",
    keyTopics: ["Nanomedicine", "Drug Delivery", "Bionanotechnology", "Clinical Applications"],
    awards: ["Outstanding Academic Title 2022", "Biomedical Engineering Book Award"],
    reviews: [
      {
        reviewer: "Nature Reviews Drug Discovery",
        quote: "The most comprehensive and up-to-date resource on nanomedicine available today."
      },
      {
        reviewer: "Dr. Maria Rodriguez, Harvard Medical School",
        quote: "Clear, comprehensive, and expertly written. A must-have for students and professionals."
      }
    ]
  },
  {
    title: "The Activist Scientist: Merging Research with Social Change",
    author: "Rubul Mout",
    publicationYear: "2021",
    publisher: "Progressive Science Publications",
    isbn: "978-1-987654-32-1",
    pages: 224,
    category: "Science & Society",
    description: "Exploring the intersection of scientific research and social activism, this book provides a roadmap for scientists who want to create positive change beyond the laboratory.",
    keyTopics: ["Science Activism", "Social Responsibility", "Community Engagement", "Policy Advocacy"],
    awards: ["Social Impact in Science Award 2021"],
    reviews: [
      {
        reviewer: "Scientific American",
        quote: "A powerful call to action for scientists to engage with society and drive meaningful change."
      },
      {
        reviewer: "Dr. James Chen, Stanford University",
        quote: "Inspiring and practical. This book should be required reading in graduate programs."
      }
    ]
  }
];

export const BooksTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Books & Publications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging the gap between cutting-edge research and public understanding through 
            comprehensive books on science communication, nanomedicine, and scientific activism.
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-32 lg:h-48 w-24 h-36 mx-auto lg:mx-0 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                    <BookOpen className="h-12 w-12 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {book.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground">
                        by {book.author}
                      </CardDescription>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{book.category}</Badge>
                      <Badge variant="outline">{book.publicationYear}</Badge>
                      <Badge variant="outline">{book.pages} pages</Badge>
                    </div>
                    
                    <p className="text-foreground leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span className="font-medium">Publication Details</span>
                    </div>
                    <div className="space-y-2 pl-6 text-sm">
                      <p><span className="font-medium">Publisher:</span> {book.publisher}</p>
                      <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
                      <p><span className="font-medium">Year:</span> {book.publicationYear}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">Key Topics</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {book.keyTopics.map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {book.awards && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span className="font-medium">Awards & Recognition</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {book.awards.map((award, idx) => (
                        <Badge key={idx} variant="default" className="bg-primary/10 text-primary">
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Quote className="h-4 w-4" />
                    <span className="font-medium">Reviews</span>
                  </div>
                  <div className="grid gap-4 pl-6">
                    {book.reviews.map((review, idx) => (
                      <div key={idx} className="bg-secondary/30 rounded-lg p-4 border border-border/30">
                        <blockquote className="text-foreground italic mb-2">
                          "{review.quote}"
                        </blockquote>
                        <cite className="text-sm text-muted-foreground font-medium">
                          — {review.reviewer}
                        </cite>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="default" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View on Publisher Site
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Publishing Impact</h3>
            <p className="text-muted-foreground mb-6">
              These publications represent a commitment to making science accessible, actionable, and impactful 
              for both academic and general audiences.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Books Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Awards Received</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Copies Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">Languages Translated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};