import { BookOpen } from "lucide-react";
//import projectStemCells from "../assets/project-stem-cells.jpg";

const books = [
  {
    title: "Dhuxorotat Xonghoto Shrawan",
    author: "Rubul Mout",
    year: "2015",
    language: "Assamese",
    description: "A collection of short stories.",
    imageUrl: "",
    link: "https://www.amazon.com/dp/example1"
  },
  {
    title: "Moro Eta Sapon Ase",
    author: "Rubul Mout",
    year: "2017",
    language: "Assamese",
    description: "A bestselling memoir depicting Dr. Mout's journey from a poor peasant family in rural Assam to Harvard Medical School. Over 50,000 copies have been sold.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595491894i/54645343.jpg",
    link: "https://www.goodreads.com/book/show/54645343-moro-eata-sapon-ase"
  }
  
];

export const BooksTab = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight mb-4">Books</h1>
          <p className="text-xl text-muted-foreground">
            Published literary works in Assamese language
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-200/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-6">Published Works</h2>
            <div className="space-y-8">
              {books.map((book, index) => (
                <div key={index} className="border-b border-border/30 pb-6 last:border-b-0">
                  <div className="flex items-start gap-6">
                    <div className="w-40 h-60 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={book.imageUrl}
                        alt={`Cover of ${book.title}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">
                        <a 
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-red-600 transition-colors duration-200 hover:underline"
                        >
                          {book.title}
                        </a>
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
                        <span>by {book.author}</span>
                        <span>•</span>
                        <span>{book.year}</span>
                        <span>•</span>
                        <span>{book.language}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};