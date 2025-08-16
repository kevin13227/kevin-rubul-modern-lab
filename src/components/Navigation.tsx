import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import harvardLogo from "@/assets/harvard-logo.svg";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'biography', label: 'Biography' },
  { id: 'teaching', label: 'Teaching & Activism' },
  { id: 'contact', label: 'Contact' },
];

const publicationTabs = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'books', label: 'Books' },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="bg-[#A51C30] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center shadow-md">
              <img 
                src={harvardLogo} 
                alt="Harvard University" 
                className="w-8 h-8"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-wider">DR. RUBUL MOUT</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-6 py-2 transition-all duration-300 font-medium tracking-wide relative",
                  activeTab === tab.id 
                    ? "bg-white text-[#A51C30] hover:bg-white/90 shadow-[0_0_20px_#FF0F7B80]" 
                    : "text-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_#FF0F7B60]"
                )}
              >
                {tab.label}
              </Button>
            ))}
            
            {/* Publications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "px-6 py-2 transition-all duration-300 font-medium tracking-wide relative",
                    ['publications', 'patents', 'books'].includes(activeTab)
                      ? "bg-white text-[#A51C30] hover:bg-white/90 shadow-[0_0_20px_#FF0F7B80]" 
                      : "text-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_#FF0F7B60]"
                  )}
                >
                  Publications <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-900 border border-slate-700 text-white">
                {publicationTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "cursor-pointer transition-colors",
                      activeTab === tab.id 
                        ? "bg-gradient-to-r from-[#FF0F7B] via-[#EDB753] to-[#EDD153] text-white font-medium" 
                        : "hover:bg-slate-800 text-white hover:shadow-[0_0_10px_#FF0F7B40]"
                    )}
                  >
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};