import { ExternalLink } from "lucide-react";

export const NewsTab = () => {
  const news = [
    {
      title: "Nature, \"Notching up a win: fresh tools for activating Notch\" 2024",
      link: "https://www.nature.com/articles/d41586-024-03822-3"
    },
    {
      title: "Harvard News, \"AI-Designed Proteins Can Boost Production of T Cells\" 2025",
      link: "https://hms.harvard.edu/news/ai-designed-proteins-can-boost-production-t-cells"
    },
    {
      title: "UW News, \"Using computers to design proteins allows researchers to make tunable hydrogels that can form both inside and outside of cells\" 2024",
      link: "https://www.washington.edu/news/2024/01/30/using-computers-to-design-proteins-allows-researchers-to-make-tunable-hydrogels-that-can-form-both-inside-and-outside-of-cells/"
    },
    {
      title: "Phys.org, \"Overcoming hurdles in CRISPR gene editing to improve treatment\" 2017",
      link: "https://phys.org/news/2017-02-hurdles-crispr-gene-treatment.html"
    },
    {
      title: "GEN (Genetic Enginnering and Biotechnology News), \"AI-Designed Notch Agonists Boost T-Cell Differentiation\" 2025",
      link: "https://www.genengnews.com/topics/artificial-intelligence/ai-designed-notch-agonists-boost-t-cell-differentiation/"
    },
    {
      title: "The Sentinel, \"Dr. Rubul Mout: Assam’s scientist and the AI-engineered proteins for cancer therapy\" 2025",
      link: "https://www.sentinelassam.com/more-news/editorial/dr-rubul-mout-assams-scientist-and-the-ai-engineered-proteins-for-cancer-therapy"
    },
    {
      title: "Pratadin Time, \"Renowned Biotechnologist Rubul Mout Inspires Students at Assam Down Town University\" 2024",
      link: "https://www.pratidintime.com/guwahati-news-breaking-latest/renowned-biotechnologist-rubul-mout-inspires-students-at-assam-down-town-university"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">News</h1>
            <p className="text-xl text-muted-foreground">
              Relevant news articles celebrating scientific breakthroughs
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {news.map((publication, index) => (
                <div key={index} className="bg-[#f2f2f2] border-border/50 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-base font-medium leading-tight mb-4 line-clamp-6 text-black">
                        {(() => {
                          const titleMatch = publication.title.match(/"([^"]+)"/);
                          if (titleMatch) {
                            const quotedTitle = titleMatch[1];
                            const restOfCitation = publication.title.replace(/"([^"]+)"/, '').trim();
                            return (
                              <>
                                <div className="text-lg font-bold mb-2 text-black">
                                  "{quotedTitle}"
                                </div>
                                <div className="text-sm text-gray-700">
                                  {restOfCitation}
                                </div>
                              </>
                            );
                          }
                          return publication.title;
                        })()}
                      </h3>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <div className="flex justify-between items-center">
                        <div>
                          {publication.link === null ? (
                            <span className="text-black text-sm font-medium">
                              Manuscript in Preparation
                            </span>
                          ) : publication.link === "placeholder" ? (
                            <span className="text-gray-700 text-sm font-medium">
                              Placeholder
                            </span>
                          ) : (
                            <a 
                              href={publication.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2 text-sm font-medium group"
                              title="View Publication"
                            >
                              <span>View Publication</span>
                              <ExternalLink className="w-4 h-4 group-hover:scale-100 transition-transform" />
                            </a>
                          )}
                        </div>
                        {/*<span className="text-sm font-bold text-black ml-4">
                          {index + 1}
                        </span>*/}
                      </div>
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