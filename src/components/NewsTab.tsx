import { ExternalLink } from "lucide-react";

export const NewsTab = () => {
  const news = [
    {
      title: "AP Patni, R Mout, R Moore, AA Alghadeer, GQ Daley, D Baker, J Mathieu, H Ruohola-Baker, \"Designed Soluble Notch Agonist Drives Human Ameloblast Maturation for Tooth Regeneration\" bioRxiv, 2025, doi: https://doi.org/10.1101/2025.04.03.646929",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NpMfqDUAAAAJ&pagesize=80&citation_for_view=NpMfqDUAAAAJ:JV2RwH3_ST0C"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold text-foreground mb-4">News</h1>
            <p className="text-xl text-muted-foreground">
              Relevant scientific news articles featuring Dr. Mout
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
                        <span className="text-sm font-bold text-black ml-4">
                          {index + 1}
                        </span>
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