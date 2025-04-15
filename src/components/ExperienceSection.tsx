import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness, Calendar, Building2, GraduationCap } from 'lucide-react';
interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  description,
  skills
}) => <div className="flex mb-4">
    <div className="relative mr-4 flex-shrink-0">
      <div className="h-full w-0.5 bg-portfolio-primary mx-auto"></div>
      <div className="absolute top-0 w-6 h-6 rounded-full bg-portfolio-primary text-white flex items-center justify-center">
        {title.includes("Engineer") || title.includes("Solution") ? <BriefcaseBusiness className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
        <h3 className="font-semibold text-portfolio-dark text-xl">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{year}</span>
        </div>
      </div>
      
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <Building2 className="h-3 w-3 mr-1" />
        <span className="text-lg">{company}</span>
      </div>
      
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      
      <div className="flex flex-wrap gap-1">
        {skills.map((skill, index) => <Badge key={index} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20 text-xs">
            {skill}
          </Badge>)}
      </div>
    </div>
  </div>;
const ExperienceSection = () => {
  const experiences = [{
    year: "2024 - Present",
    title: "Diploma",
    company: "IIT Madras | CGPA: 7.13",
    description: "Data Science & Business Applications",
    skills: ["Data Science", "Machine Learning", "Business Analytics"]
  }, {
    year: "2022 - Present",
    title: "Associate Data Engineer",
    company: "Circulants",
    description: "Data Pipelines with cloud services",
    skills: ["Python", "SQL", "Spark", "AWS", "Databricks"]
  }, {
    year: "2021 - 2022",
    title: "Solution Design Graduate",
    company: "Avvashya CCI Logistics Ltd",
    description: "Data Gathering",
    skills: ["Excel", "Data Analysis"]
  }, {
    year: "2017 - 2021",
    title: "Bachelor of Engineering",
    company: "Mumbai University | CGPA: 9.22",
    description: "Technical foundations of engineering principles.",
    skills: ["Mechanical", "Mathematics", "Statistics"]
  }];
  return <section id="experience" className="py-[20px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Professional <span className="text-portfolio-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => <TimelineItem key={index} year={exp.year} title={exp.title} company={exp.company} description={exp.description} skills={exp.skills} />)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;