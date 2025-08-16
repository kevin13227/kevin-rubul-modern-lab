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

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'research', label: 'Research' },
  { id: 'biography', label: 'Biography' },
  //{ id: 'teaching', label: 'Teaching & Activism' },
  { id: 'contact', label: 'Contact' },
];

const publicationTabs = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'books', label: 'Books' },
];

const teachingTabs = [
  { id: 'courses', label: 'Courses' },
  { id: 'sundayScience', label: 'Sunday Science' }
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="bg-[#8B1538] sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
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
                  "px-6 py-2 transition-all duration-300 font-medium tracking-wide",
                  activeTab === tab.id 
                    ? "bg-white text-[#8B1538] hover:bg-white/90" 
                    : "text-white hover:bg-white/10 hover:text-white"
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
                    "px-6 py-2 transition-all duration-300 font-medium tracking-wide",
                    ['publications', 'patents', 'books'].includes(activeTab)
                      ? "bg-white text-[#8B1538] hover:bg-white/90" 
                      : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  Publications <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200">
                {publicationTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "cursor-pointer transition-colors",
                      activeTab === tab.id 
                        ? "bg-[#8B1538]/10 text-[#8B1538] font-medium" 
                        : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    {tab.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Teaching Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "px-6 py-2 transition-all duration-300 font-medium tracking-wide",
                    ['teaching', 'courses', 'sundayscience'].includes(activeTab)
                      ? "bg-white text-[#8B1538] hover:bg-white/90" 
                      : "text-white hover:bg-white/10 hover:text-white"
                  )}
                >
                  Teaching & Activism <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200">
                <DropdownMenuItem
                  onClick={() => onTabChange('teaching')}
                  className={cn(
                    "cursor-pointer transition-colors font-medium",
                    activeTab === 'teaching'
                      ? "bg-[#8B1538]/10 text-[#8B1538] font-medium" 
                      : "hover:bg-gray-50 text-gray-700"
                  )}
                >
                  Overview
                </DropdownMenuItem>
                {teachingTabs.map((tab) => (
                  <DropdownMenuItem
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "cursor-pointer transition-colors",
                      activeTab === tab.id 
                        ? "bg-[#8B1538]/10 text-[#8B1538] font-medium" 
                        : "hover:bg-gray-50 text-gray-700"
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
              className="bg-white text-[#8B1538] border border-gray-300 rounded-lg px-3 py-2"
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
      </div>
    </nav>
  );
};