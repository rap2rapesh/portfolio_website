import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Database, LineChart, Cpu, GitBranch } from 'lucide-react';
import { navSpeechMessages } from './Header';
const HeroSection = () => {
  const [speechMessage, setSpeechMessage] = useState(navSpeechMessages.default);
  useEffect(() => {
    // Listen for speech message events from the Header component
    const handleSpeechMessage = (event: CustomEvent<string>) => {
      setSpeechMessage(event.detail);
    };
    window.addEventListener('speech-message', handleSpeechMessage as EventListener);
    return () => {
      window.removeEventListener('speech-message', handleSpeechMessage as EventListener);
    };
  }, []);
  return <section id="hero" className="min-h-screen relative pt-20 hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 opacity-70 px-0 py-0"></div>
      
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 py-[65px]">
        <div className="lg:w-1/2 mt-10 lg:mt-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-portfolio-dark leading-tight px-[10px] lg:text-6xl">
            Data Science & <span className="text-portfolio-primary px-0">AI Engineer</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-600 max-w-xl px-[10px]">
            Transforming data into valuable insights and building intelligent solutions. Expertise in Data Science, Machine Learning, AI, and Engineering.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {[{
            Icon: Database,
            text: "Data Engineering"
          }, {
            Icon: LineChart,
            text: "Data Science"
          }, {
            Icon: Cpu,
            text: "Machine Learning"
          }, {
            Icon: GitBranch,
            text: "AI Solutions"
          }].map((item, index) => <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <item.Icon className="w-5 h-5 text-portfolio-primary mr-2" />
                <span className="font-medium text-gray-700 text-xl">{item.text}</span>
              </div>)}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            
            
            
          </div>
        </div>
        
        <div className="lg:w-2/5 flex justify-center animate-fade-in-right">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full blur-lg opacity-20 animate-pulse-light"></div>
            <div className="relative z-10 rounded-full overflow-hidden h-72 w-72 sm:h-80 sm:w-80 border-4 border-white shadow-xl">
              <img src="/lovable-uploads/373c3925-b670-4446-bc14-e9237ff7b443.png" alt="Data Science Professional" className="object-cover w-full h-full" />
            </div>
            
            {/* Speech Bubble */}
            <div className="absolute -top-16 -right-4 md:right-0 bg-white/90 backdrop-blur-sm p-4 shadow-lg transition-all duration-300 ease-in-out max-w-[220px] rounded-3xl px-[16px] my-0 mx-[240px]">
              <div className="relative">
                <p className="text-gray-700 transition-opacity duration-300 font-bold text-base">{speechMessage}</p>
                {/* Speech bubble tail/pointer */}
                <div className="absolute bottom-[-16px] right-8 w-4 h-4 bg-white/90 backdrop-blur-sm transform rotate-45 shadow-lg"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
              <div className="bg-portfolio-primary rounded-full p-2">
                <Cpu className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-portfolio-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>;
};
export default HeroSection;