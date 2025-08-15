import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Jatra Aru Anyanya (The Journey and Others)",
    author: "Rubul Mout",
    year: "2017",
    publisher: "Bani Prakash",
    language: "Assamese",
    description: "A bestselling memoir depicting Dr. Mout's extraordinary journey from a poor peasant family in rural Assam to Harvard Medical School."
  },
  {
    title: "Assamese Short Stories Collection",
    author: "Rubul Mout",
    year: "2019",
    publisher: "Student Stores", 
    language: "Assamese",
    description: "A collection of short stories exploring themes of science, education, and social transformation in contemporary Assam."
  }
];

export const BooksTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Books</h1>
          <p className="text-xl text-muted-foreground">
            Published literary works in Assamese language
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Published Works</h2>
            <div className="space-y-8">
              {books.map((book, index) => (
                <div key={index} className="border-b border-border/30 pb-6 last:border-b-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-20 bg-gradient-primary rounded flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {book.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>by {book.author}</span>
                        <span>•</span>
                        <span>{book.publisher}</span>
                        <span>•</span>
                        <span>{book.year}</span>
                        <span>•</span>
                        <span>{book.language}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Impact</h4>
              <p className="text-sm text-muted-foreground">
                "Jatra Aru Anyanya" became an instant bestseller with over 50,000 copies sold and is now included in educational curricula across Assam, inspiring countless students from rural backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};