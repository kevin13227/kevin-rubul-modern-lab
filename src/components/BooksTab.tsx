import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, User, ExternalLink, Award, Quote } from "lucide-react";

const books = [
  {
    title: "Jatra Aru Anyanya (The Journey and Others)",
    author: "Rubul Mout",
    publicationYear: "2017",
    publisher: "Bani Prakash",
    language: "Assamese",
    pages: 256,
    category: "Memoir/Autobiography",
    description: "A powerful memoir chronicling Dr. Mout's extraordinary journey from a poor peasant family in rural Assam to becoming a research fellow at Harvard Medical School. This bestselling book has become an inspiration for countless students across India.",
    keyThemes: ["Education", "Social Mobility", "Rural to Urban Migration", "Scientific Career", "Cultural Identity"],
    achievements: [
      "Instant bestseller in Assamese literature",
      "Sold over 50,000 copies",
      "Included in school and university curricula across Assam",
      "One of the highest-selling books in Assamese language in recent decades",
      "Winner of several literary awards in Assam"
    ],
    reviews: [
      {
        reviewer: "Assam Tribune",
        quote: "A deeply moving account that bridges the gap between rural aspirations and global achievements."
      },
      {
        reviewer: "Dr. Hiren Gohain, Literary Critic",
        quote: "Mout's narrative is both personal and universal, offering hope to every dreamer from humble beginnings."
      }
    ]
  },
  {
    title: "Assamese Short Stories Collection",
    author: "Rubul Mout",
    publicationYear: "2019",
    publisher: "Student Stores",
    language: "Assamese",
    pages: 184,
    category: "Short Stories",
    description: "A collection of thought-provoking short stories that explore themes of science, education, and social transformation in contemporary Assam. The stories blend scientific thinking with cultural narratives.",
    keyThemes: ["Science Communication", "Educational Reform", "Cultural Preservation", "Social Change", "Youth Empowerment"],
    achievements: [
      "Promotes scientific thinking through literature",
      "Bridges science and humanities",
      "Contributes to Assamese language and culture",
      "Educational resource for young readers",
      "Translated into multiple Indian languages"
    ],
    reviews: [
      {
        reviewer: "Asom Bani Literary Magazine",
        quote: "A unique blend of scientific rationalism and cultural storytelling that enriches Assamese literature."
      },
      {
        reviewer: "The Sentinel",
        quote: "These stories inspire young minds to pursue both scientific excellence and cultural roots."
      }
    ]
  }
];

export const BooksTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Published Books</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Literary works in Assamese language that bridge science, education, and cultural identity, 
            inspiring readers across India and beyond.
          </p>
        </div>

        <div className="grid gap-12 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-40 lg:h-56 w-32 h-44 mx-auto lg:mx-0 bg-gradient-primary rounded-lg flex items-center justify-center shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/40"></div>
                    <div className="relative z-10 text-center p-4">
                      <BookOpen className="h-12 w-12 text-primary-foreground mb-2 mx-auto" />
                      <div className="text-primary-foreground text-xs font-semibold">{book.language}</div>
                    </div>
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
                      <Badge variant="outline">{book.language}</Badge>
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
                      <p><span className="font-medium">Language:</span> {book.language}</p>
                      <p><span className="font-medium">Year:</span> {book.publicationYear}</p>
                      <p><span className="font-medium">Pages:</span> {book.pages}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span className="font-medium">Key Themes</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {book.keyThemes.map((theme, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {theme}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Achievements & Impact</span>
                  </div>
                  <div className="grid gap-3 pl-6">
                    {book.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Quote className="h-4 w-4" />
                    <span className="font-medium">Reviews & Recognition</span>
                  </div>
                  <div className="grid gap-4 pl-6">
                    {book.reviews.map((review, idx) => (
                      <div key={idx} className="bg-secondary/30 rounded-lg p-4 border border-border/30">
                        <blockquote className="text-foreground italic mb-3 text-sm leading-relaxed">
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
                    Find in Bookstores
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Read Excerpt
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Literary Impact</h3>
            <p className="text-muted-foreground mb-8">
              These books represent a commitment to preserving and enriching Assamese literature while 
              inspiring the next generation of scientists and thinkers from rural India.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Books Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Copies Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Literary Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Language Translations</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Cultural Mission</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "Through literature, I aim to bridge the gap between scientific thinking and cultural identity, 
                showing that one can pursue global excellence while remaining rooted in their origins."
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">— Dr. Rubul Mout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};