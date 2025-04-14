import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-portfolio-primary">
          <span className="text-portfolio-accent">.</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
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
                <button onClick={() => scrollToSection(item.id)} className={cn("text-base font-medium relative px-1 py-2 transition-colors", activeSection === item.id ? "text-portfolio-primary" : "text-gray-600 hover:text-portfolio-primary")}>
                  {item.label}
                  {activeSection === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-primary rounded-full"></span>}
                </button>
              </li>)}
          </ul>
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