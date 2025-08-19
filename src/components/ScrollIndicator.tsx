import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  showOnMobile?: boolean;
}

export const ScrollIndicator = ({ showOnMobile = false }: ScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Show the arrow after a split second
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if we should show on mobile
  const shouldShowOnMobile = showOnMobile && window.innerWidth < 768;
  const shouldShowOnDesktop = !showOnMobile;

  if (!shouldShowOnMobile && !shouldShowOnDesktop) {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
        isVisible && !hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="animate-bounce">
        <ChevronDown className="w-8 h-8 text-white drop-shadow-lg" />
      </div>
    </div>
  );
};
