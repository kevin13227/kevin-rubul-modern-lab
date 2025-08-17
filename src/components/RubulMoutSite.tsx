import { useState } from "react";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { HomeTab } from "./HomeTab";
import { BiographyTab } from "./BiographyTab";
import { PublicationsTab } from "./PublicationsTab";
import { TeachingTab } from "./TeachingTab";
import { ContactTab } from "./ContactTab";
import { PatentsTab } from "./PatentsTab";
import { BooksTab } from "./BooksTab";
import { CoursesTab } from "./CoursesTab";
import { SundayScienceTab } from "./SundayScienceTab";


export const RubulMoutSite = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Smooth scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onNavigate={handleTabChange} />;
      case 'biography':
        return <BiographyTab />;
      case 'publications':
        return <PublicationsTab />;
      case 'patents':
        return <PatentsTab />;
      case 'books':
        return <BooksTab />;
      case 'teaching':
        return <TeachingTab onNavigate={handleTabChange} />;
      case 'contact':
        return <ContactTab />;
      case 'courses':
        return <CoursesTab />;
      case 'sundayScience':
        return <SundayScienceTab />;
      default:
        return <HomeTab onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Hero Section - only show on home page */}
      {activeTab === 'home' && (
        <HeroSection onNavigate={handleTabChange} />
      )}
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {renderActiveTab()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Dr. Rubul Mout</h3>
              <p className="text-gray-300 leading-relaxed">
                Research Fellow at Harvard Medical School & Boston Children's Hospital, 
                advancing protein design and cell biology for therapeutic applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => handleTabChange('home')}
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Research Projects
                </button>
                <button 
                  onClick={() => handleTabChange('biography')}
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Biography
                </button>
                <button 
                  onClick={() => handleTabChange('publications')}
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Publications & Patents
                </button>
                <button 
                  onClick={() => handleTabChange('teaching')}
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Science Activism
                </button>
                <button 
                  onClick={() => handleTabChange('contact')}
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">External Links</h4>
              <div className="space-y-2">
                <a 
                  href="https://upliftlibraries.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Uplift Libraries
                </a>
                <a 
                  href="https://research.childrenshospital.org/rubulmout/Science-activism" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Sunday Science Activism
                </a>
                <a 
                  href="https://research.childrenshospital.org/rubulmout/publications-0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-primary transition-colors link-underline"
                >
                  Publications
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Dr. Rubul Mout. All rights reserved. | Harvard Medical School & Boston Children's Hospital</p>
          </div>
        </div>
      </footer>
    </div>
  );
};