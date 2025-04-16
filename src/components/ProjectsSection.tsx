import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Eye, Server, Database, Bot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  codeLink?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  codeLink
}) => {
  const handleCardClick = () => {
    if (codeLink) {
      window.open(codeLink, '_blank', 'noopener,noreferrer');
    }
  };
  return <div className="project-card rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer" onClick={handleCardClick}>
      <div className="h-56 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => <Badge key={index} variant="outline" className="bg-portfolio-primary/5 text-portfolio-primary border-portfolio-primary/20">
              {tag}
            </Badge>)}
        </div>
        
        {codeLink && <Button variant="outline" size="sm" className="flex items-center gap-1 border-gray-300 text-gray-700 hover:bg-gray-100" onClick={e => {
        e.stopPropagation(); // Prevent the card click from triggering
        window.open(codeLink, '_blank', 'noopener,noreferrer');
      }}>
            <Github className="h-4 w-4" />
            <span>Code</span>
          </Button>}
      </div>
    </div>;
};
const ProjectsSection = () => {
  const projects = [{
    title: "Real-Time Road Journey Pipeline",
    description: "Designed and implemented a real-time data streaming pipeline to monitor road journeys, contributing to enhanced road safety and accident prevention.",
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/5/QU/MP/VU/19587890/product-jpeg.jpg",
    tags: ["Kafka", "Zookeeper", "PySpark", "Docker", "AWS Redshift", "Glue"],
    codeLink: "https://github.com/TylerDurden786/Rush_Hour"
  }, {
    title: "AI Agentic Medical Assistant",
    description: "Implemented a multi-modal AI solution combining speech-to-text, vision, language and text-to-speech capabilities which was built with Groq, OpenAI, Meta LLM and Gradio.",
    image: "https://img.freepik.com/free-vector/hand-drawn-ai-healthcare-illustration_52683-156475.jpg?semt=ais_hybrid&w=740",
    tags: ["GROQ", "OpenAI", "Gradio UI", "Meta LLM", "Python"],
    codeLink: "https://github.com/TylerDurden786/ai_medical_assistant"
  }];
  return <section id="projects" className="bg-gray-50 py-[5px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark py-0 my-[40px]">
            Featured <span className="text-portfolio-primary">Projects</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} codeLink={project.codeLink} />)}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default ProjectsSection;