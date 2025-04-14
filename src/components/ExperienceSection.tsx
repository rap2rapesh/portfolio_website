
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness, Calendar, Building2 } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  company, 
  description, 
  skills,
  isLast = false 
}) => (
  <div className="relative pl-10 pb-10">
    {!isLast && <div className="timeline-line z-10"></div>}
    <div className="absolute left-0 w-6 h-6 rounded-full bg-portfolio-primary text-white flex items-center justify-center z-20">
      <BriefcaseBusiness className="w-3 h-3" />
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 ml-6 card-hover">
      <div className="flex items-center text-gray-500 mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        <span className="text-sm">{year}</span>
      </div>
      <h3 className="text-xl font-semibold text-portfolio-dark">{title}</h3>
      <div className="flex items-center text-gray-600 mt-1 mb-3">
        <Building2 className="h-4 w-4 mr-2" />
        <span>{company}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Data Scientist",
      company: "TechInnovate AI",
      description: "Leading a team of data scientists to develop and deploy machine learning models for predictive analytics. Architected end-to-end ML pipelines and implemented data-driven solutions for enterprise clients.",
      skills: ["Python", "TensorFlow", "AWS", "MLOps", "Team Leadership"]
    },
    {
      year: "2020 - 2022",
      title: "Machine Learning Engineer",
      company: "DataCraft Solutions",
      description: "Designed and implemented machine learning models to solve complex business problems. Optimized data processing pipelines and collaborated with cross-functional teams to integrate ML solutions.",
      skills: ["PyTorch", "Scikit-learn", "Docker", "Kubernetes", "SQL"]
    },
    {
      year: "2018 - 2020",
      title: "Data Engineer",
      company: "Quantum Analytics",
      description: "Built scalable data infrastructure and ETL pipelines. Created data models and implemented data quality processes. Collaborated with data scientists to prepare datasets for model training.",
      skills: ["Spark", "Hadoop", "Airflow", "MongoDB", "PostgreSQL"]
    },
    {
      year: "2016 - 2018",
      title: "Software Developer",
      company: "CodeSphere Innovations",
      description: "Developed and maintained backend services and RESTful APIs. Implemented data processing algorithms and collaborated with UI/UX teams for interactive data visualizations.",
      skills: ["Java", "Spring Boot", "REST APIs", "Git", "Agile"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Professional <span className="text-portfolio-primary">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey in the field of data science and software engineering
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              skills={exp.skills}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
