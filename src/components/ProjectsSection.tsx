
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Eye, Server, Database, Robot } from 'lucide-react';
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
}) => (
  <div className="project-card rounded-xl overflow-hidden shadow-lg card-hover">
    <div className="h-56 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="bg-portfolio-primary/5 text-portfolio-primary border-portfolio-primary/20">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex space-x-3">
        {demoLink && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center space-x-1 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
          >
            <Eye className="h-4 w-4" />
            <span>Live Demo</span>
          </Button>
        )}
        
        {codeLink && (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center space-x-1 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </Button>
        )}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-Time Road Journey Pipeline",
      description: "Designed and implemented a real-time data streaming pipeline to monitor road journeys, contributing to enhanced road safety and accident prevention.",
      image: "https://images.unsplash.com/photo-1668876303651-0a9332febcba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Kafka", "Zookeeper", "PySpark", "Docker", "AWS Redshift", "Glue"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Agentic Medical Assistant",
      description: "Implemented a multi-modal AI solution combining speech-to-text, vision, language and text-to-speech capabilities which was built with Groq, OpenAI, Meta LLM and Gradio.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["GROQ", "OpenAI", "Gradio UI", "Meta LLM", "Python"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Data Processing Framework",
      description: "Built a scalable data processing framework that handles large volumes of data with efficient ETL processes and data quality checks.",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "SQL", "Airflow", "AWS", "Docker"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Automated Testing Suite",
      description: "Developed a comprehensive automated testing suite using Selenium and Unittest to ensure software quality and reliability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Selenium", "Unittest", "Python", "CI/CD", "GitHub Actions"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Logistics Optimization System",
      description: "Created a system to optimize logistics operations using advanced algorithms and data-driven decision making.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["Python", "Optimization Algorithms", "Pandas", "Matplotlib"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Database Migration Tool",
      description: "Built a tool to facilitate seamless migration between different database systems while preserving data integrity.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      tags: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "Python"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
