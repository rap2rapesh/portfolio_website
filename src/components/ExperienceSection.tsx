import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness, Calendar, Building2, Award, GraduationCap } from 'lucide-react';
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
}) => <div className="relative pl-10 pb-10">
    {!isLast && <div className="timeline-line z-10"></div>}
    <div className="absolute left-0 w-6 h-6 rounded-full bg-portfolio-primary text-white flex items-center justify-center z-20">
      {title.includes("Engineer") || title.includes("Solution") ? <BriefcaseBusiness className="w-3 h-3" /> : <GraduationCap className="w-3 h-3" />}
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
        {skills.map((skill, index) => <Badge key={index} variant="secondary" className="bg-portfolio-primary/10 text-portfolio-primary hover:bg-portfolio-primary/20">
            {skill}
          </Badge>)}
      </div>
    </div>
  </div>;
const ExperienceSection = () => {
  const experiences = [{
    year: "2024 - Present",
    title: "Diploma Program",
    company: "IIT Madras",
    description: "Currently pursuing advanced studies in data science and related technologies at the prestigious Indian Institute of Technology, Madras.",
    skills: ["Data Science", "Machine Learning", "Advanced Analytics"]
  }, {
    year: "2022 - Present",
    title: "Associate Data Engineer",
    company: "Circulants",
    description: "Working on data engineering solutions and received a Spot Award for a development project that featured rigorous unit testing.",
    skills: ["Python", "SQL", "Data Engineering", "Unit Testing"]
  }, {
    year: "2021 - 2022",
    title: "Solution Design Graduate",
    company: "Avvashya CCI Logistics Ltd",
    description: "Designed and implemented logistics solutions, optimizing supply chain processes and improving operational efficiency.",
    skills: ["Solution Design", "Logistics", "Data Analysis"]
  }, {
    year: "2017 - 2021",
    title: "Bachelor of Engineering",
    company: "University",
    description: "Completed Bachelor of Engineering with focus on technical foundations and engineering principles.",
    skills: ["Engineering", "Technical Studies", "Problem Solving"]
  }];
  return <section id="experience" className="py-[5px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Professional <span className="text-portfolio-primary">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My educational background and professional journey in data engineering and software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => <TimelineItem key={index} year={exp.year} title={exp.title} company={exp.company} description={exp.description} skills={exp.skills} isLast={index === experiences.length - 1} />)}
        </div>
      </div>
    </section>;
};
export default ExperienceSection;