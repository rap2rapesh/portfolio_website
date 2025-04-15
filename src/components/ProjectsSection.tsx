import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Eye, Server, Database, Bot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink
}) => <div className="project-card rounded-xl overflow-hidden shadow-lg card-hover">
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
      
      <div className="flex space-x-0 mx-[85px]">
        {demoLink}
        
        {codeLink && <Button variant="outline" size="sm" className="flex items-center space-x-1 border-gray-300 text-gray-700 hover:bg-gray-100">
            <Github className="h-4 w-4" />
            <span>Code</span>
          </Button>}
      </div>
    </div>
  </div>;
const ProjectsSection = () => {
  const projects = [{
    title: "Real-Time Road Journey Pipeline",
    description: "Designed and implemented a real-time data streaming pipeline to monitor road journeys, contributing to enhanced road safety and accident prevention.",
    image: "https://private-user-images.githubusercontent.com/168437985/327924567-f6757c8a-2ab9-463e-81c8-60962c299a60.JPG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ3MjAxMDYsIm5iZiI6MTc0NDcxOTgwNiwicGF0aCI6Ii8xNjg0Mzc5ODUvMzI3OTI0NTY3LWY2NzU3YzhhLTJhYjktNDYzZS04MWM4LTYwOTYyYzI5OWE2MC5KUEc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNVQxMjIzMjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MTIyOTUwMjBiZjM0ZWQ2NmQ5NTQ4NzEzZTk0M2I3YWQ5N2E2YTNhODQzMjZjYmNkYmZmMGNlYmM5OTcyMDc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Sy0MbbSG3WrQt-1HqTVHUVUW0BUUH715pwm1RDmdQtI",
    tags: ["Kafka", "Zookeeper", "PySpark", "Docker", "AWS Redshift", "Glue"],
    demoLink: "#",
    codeLink: "#"
  }, {
    title: "AI Agentic Medical Assistant",
    description: "Implemented a multi-modal AI solution combining speech-to-text, vision, language and text-to-speech capabilities which was built with Groq, OpenAI, Meta LLM and Gradio.",
    image: "https://github.com/TylerDurden786/ai_medical_assistant/raw/main/flowchart.JPG",
    tags: ["GROQ", "OpenAI", "Gradio UI", "Meta LLM", "Python"],
    demoLink: "#",
    codeLink: "#"
  }];
  return <section id="projects" className="bg-gray-50 py-[5px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Featured <span className="text-portfolio-primary">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work in data engineering, AI, and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} demoLink={project.demoLink} codeLink={project.codeLink} />)}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default ProjectsSection;
