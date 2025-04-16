
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Linkedin, Github } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define speech messages for navigation items
export const navSpeechMessages = {
  default: "Welcome, have a look around.",
  skills: "Please do explore my skills.",
  experience: "My Experience strengthened me.",
  projects: "Wanna see some cool stuff I've built?",
  contact: "Let's get in touch!",
  linkedin: "Check out my LinkedIn profile",
  github: "Check out my GitHub profile"
};

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [currentHoverItem, setCurrentHoverItem] = useState<string | null>(null);

  // Create a global event dispatcher for speech bubble messages
  const dispatchSpeechEvent = (message: string) => {
    const event = new CustomEvent('speech-message', {
      detail: message
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find which section is currently in view
      const sections = ['hero', 'skills', 'experience', 'projects', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleNavHover = (itemId: string) => {
    setCurrentHoverItem(itemId);
    const message = navSpeechMessages[itemId as keyof typeof navSpeechMessages] || navSpeechMessages.default;
    dispatchSpeechEvent(message);
  };

  const handleNavLeave = () => {
    setCurrentHoverItem(null);
    dispatchSpeechEvent(navSpeechMessages.default);
  };

  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-5xl font-bold text-portfolio-primary">
          Omkar's Portfolio
        </div>
        
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-6">
            {[{
            id: 'skills',
            label: 'Skills'
          }, {
            id: 'experience',
            label: 'Experience'
          }, {
            id: 'projects',
            label: 'Projects'
          }, {
            id: 'contact',
            label: 'Contact'
          }].map(item => <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} onMouseEnter={() => handleNavHover(item.id)} onMouseLeave={handleNavLeave} className="relative font-normal text-2xl">
                  {item.label}
                  {activeSection === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary rounded-full"></span>}
                </button>
              </li>)}
          </ul>

          {/* Social media icons */}
          <div className="flex space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.linkedin.com/in/omkarshende1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleNavHover('linkedin')} 
                    onMouseLeave={handleNavLeave}
                    className="text-portfolio-primary hover:text-portfolio-primary/80 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Check out my LinkedIn profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://github.com/TylerDurden786" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleNavHover('github')} 
                    onMouseLeave={handleNavLeave}
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Check out my GitHub profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - simplified for this implementation */}
          <button className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
};

export default Header;
