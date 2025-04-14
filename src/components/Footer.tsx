
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">Portfolio</span>
            <span className="text-portfolio-primary">.</span>
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Data Science, Machine Learning, and AI solutions. 
            I build intelligent systems that solve real-world problems.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            {["Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-portfolio-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Data Science Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
