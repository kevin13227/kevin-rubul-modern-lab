import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Lock, Unlock } from "lucide-react";
import medschoolLogo from "@/assets/medschool-logo.png";
import medschoolLogoCompact from "@/assets/medschool-logo-compact.png";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'biography', label: 'Biography' },
  { id: 'contact', label: 'Contact' },
];

const publicationTabs = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'books', label: 'Books' },
];

const teachingTabs = [
  { id: 'teaching', label: 'Overview' },
  { id: 'courses', label: 'Courses' },
  { id: 'sundayScience', label: 'Sunday Science' }
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [teachingOpen, setTeachingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <nav className={cn(
      "z-40 shadow-lg transition-all duration-300 w-full",
      isLocked ? "fixed top-0 left-0 right-0" : "sticky top-0",
      isScrolled 
        ? "bg-[#A51C30] shadow-xl" 
        : "bg-[#A51C30]"
    )}>
      <div className="w-full px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-wider">DR. RUBUL MOUT</h1>
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1 space-x-2 relative z-50">
            {/* Lock Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLock}
              className="text-white hover:bg-white/15 hover:text-white hover:scale-105 transition-all duration-300 p-2 mr-2"
              title={isLocked ? "Unlock navigation bar" : "Lock navigation bar to top of screen"}
            >
              {isLocked ? (
                <Lock className="h-4 w-4" />
              ) : (
                <Unlock className="h-4 w-4" />
              )}
            </Button>
            
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-6 py-2 transition-all font-medium tracking-wide rounded-none",
                  activeTab === tab.id 
                    ? "bg-white text-[#A51C30] hover:bg-white/90 shadow-[0_0_20px_#A51C3080]" 
                    : "text-white hover:bg-white/15 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_#A51C3060]"
                )}
              >
                {tab.label}
              </Button>
            ))}
            
            {/* Publications Dropdown */}
            <DropdownMenu modal={false} open={publicationsOpen} onOpenChange={setPublicationsOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                                      className={cn(
                      "px-6 py-2 font-medium tracking-wide rounded-none",
                      publicationsOpen ? "transition-none" : "transition-none hover:scale-105",
                      ['publications', 'patents', 'books'].includes(activeTab)
                        ? "bg-white text-[#A51C30] hover:bg-white/90 hover:text-[#A51C30]" 
                        : "text-white hover:bg-white/15 hover:text-white"
                    )}
                >
                  Publications {publicationsOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-[#A51C30] border-0 shadow-xl rounded-lg mt-0 p-0 min-w-[200px] animate-none z-40" 
                sideOffset={0}
                align="center"
              >
                {publicationTabs.map((tab, index) => (
                  <DropdownMenuItem
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id);
                      setPublicationsOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onTabChange(tab.id);
                        setPublicationsOpen(false);
                      }
                    }}
                    className={cn(
                      "cursor-pointer transition-none px-6 py-3 focus:outline-none",
                      index === 0 ? "rounded-t-lg" : "",
                      index === publicationTabs.length - 1 ? "rounded-b-lg" : "",
                      activeTab === tab.id 
                        ? "bg-white text-[#A51C30] font-medium hover:text-[#A51C30]" 
                        : "text-white hover:bg-white/15 hover:text-white focus:bg-white/15"
                    )}
                  >
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Teaching Dropdown */}
            <DropdownMenu modal={false} open={teachingOpen} onOpenChange={setTeachingOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                                      className={cn(
                      "px-6 py-2 font-medium tracking-wide rounded-none",
                      teachingOpen ? "transition-none" : "transition-none hover:scale-105",
                      ['teaching', 'courses', 'sundayscience'].includes(activeTab)
                        ? "bg-white text-[#A51C30] hover:bg-white/90 hover:text-[#A51C30]" 
                        : "text-white hover:bg-white/15 hover:text-white"
                      )}
                  >
                    Teaching & Activism {teachingOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-[#A51C30] border-0 shadow-xl rounded-lg mt-0 p-0 min-w-[200px] animate-none z-40" 
                sideOffset={0}
                align="center"
              >
                {teachingTabs.map((tab, index) => (
                  <DropdownMenuItem
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id);
                      setTeachingOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onTabChange(tab.id);
                        setTeachingOpen(false);
                      }
                    }}
                    className={cn(
                      "cursor-pointer transition-none px-6 py-3 focus:outline-none",
                      tab.id === 'teaching' && activeTab === 'teaching' ? "rounded-t-none" : index === 0 ? "rounded-t-lg" : "",
                      index === teachingTabs.length - 1 ? "rounded-b-lg" : "",
                      activeTab === tab.id 
                        ? "bg-white text-[#A51C30] font-medium hover:text-[#A51C30]" 
                        : "text-white hover:bg-white/15 hover:text-white focus:bg-white/15"
                    )}
                  >
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {/* Med School Logo */}
          <div className="relative">
            <a 
              href="https://hms.harvard.edu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:bg-black/30 hover:scale-105 duration-300 rounded-lg p-1"
            >
              <img 
                src={medschoolLogoCompact} 
                alt="Harvard Medical School" 
                className="h-10 w-auto xl:hidden"
                style={{minWidth: 'auto', maxWidth: 'none'}}
              />
              <img 
                src={medschoolLogo} 
                alt="Harvard Medical School" 
                className="h-10 w-auto hidden xl:block"
                style={{minWidth: 'auto', maxWidth: 'none'}}
              />
            </a>
          </div>
        </div>
        

        
        {/* Mobile menu */}
        <div className="md:hidden">
          <select 
            value={activeTab}
            onChange={(e) => onTabChange(e.target.value)}
            className="bg-slate-900 text-white border border-slate-700 rounded-lg px-3 py-2 shadow-[0_0_10px_#FF0F7B40]"
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>{tab.label}</option>
            ))}
            <optgroup label="Publications">
              {publicationTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </optgroup>
            <optgroup label="Teaching & Activism">
              {teachingTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
    </nav>
  );
};