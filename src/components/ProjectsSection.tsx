
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Eye } from 'lucide-react';
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
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for predictive analytics with real-time data visualization and ML model integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "React", "TensorFlow", "D3.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Natural Language Processing API",
      description: "RESTful API for natural language processing tasks including sentiment analysis, entity recognition and text classification.",
      image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Flask", "BERT", "Docker"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Computer Vision Image Classifier",
      description: "Deep learning model for image classification with transfer learning and custom architecture optimization.",
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "CNN", "Transfer Learning"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Data Pipeline Orchestration",
      description: "Automated ETL workflow orchestration system with data validation and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Airflow", "Spark", "AWS", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system with real-time personalization and A/B testing framework.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Neo4j", "Redis", "FastAPI"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Time Series Forecasting",
      description: "Advanced time series forecasting model for financial data with anomaly detection capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Prophet", "LSTM", "Pandas", "Plotly"],
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
            A selection of my recent work in data science, machine learning, and software development
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
