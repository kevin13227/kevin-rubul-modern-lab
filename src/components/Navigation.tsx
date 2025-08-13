import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'biography', label: 'Biography' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching', label: 'Teaching & Activism' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">RM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dr. Rubul Mout</h1>
              <p className="text-sm text-muted-foreground">Research Fellow, Harvard Medical School</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-6 py-2 transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <select 
              value={activeTab}
              onChange={(e) => onTabChange(e.target.value)}
              className="bg-secondary text-secondary-foreground border border-border rounded-lg px-3 py-2"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>{tab.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};