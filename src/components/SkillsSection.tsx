import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Database, Code, CircuitBoard, LineChart, Brain, Server, GitBranch, Terminal, Dock, Cloud } from 'lucide-react';
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}
const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills
}) => <div className="bg-white p-6 shadow-md border border-gray-100 card-hover rounded-xl px-[24px]">
    <div className="text-portfolio-primary mb-4">{icon}</div>
    <h3 className="text-xl mb-4 text-portfolio-dark font-semibold">{title}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, index) => <Badge key={index} className="bg-gray-100 hover:bg-portfolio-primary hover:text-white text-gray-700 py-1 px-3 text-xs rounded-full transition-colors">
          {skill}
        </Badge>)}
    </div>
  </div>;
interface SkillBarProps {
  name: string;
  percentage: number;
}
const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage
}) => <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700 rounded-full">{name}</span>
      <span className="text-sm font-medium text-portfolio-primary">{percentage}%</span>
    </div>
    <Progress value={percentage} className="h-2" />
  </div>;
const SkillsSection = () => {
  const technicalSkills = [{
    name: "Python",
    percentage: 95
  }, {
    name: "SQL",
    percentage: 90
  }, {
    name: "Pandas & NumPy",
    percentage: 90
  }, {
    name: "Scikit-learn",
    percentage: 85
  }, {
    name: "Docker & Git",
    percentage: 85
  }, {
    name: "AWS & Azure",
    percentage: 80
  }];
  const skillCards = [{
    icon: <Code className="h-8 w-8" />,
    title: "Languages",
    skills: ["Python", "SQL", "Shell Scripting"]
  }, {
    icon: <Database className="h-8 w-8" />,
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "MySQL"]
  }, {
    icon: <Brain className="h-8 w-8" />,
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Scikit-learn"]
  }, {
    icon: <Cloud className="h-8 w-8" />,
    title: "Technologies",
    skills: ["Git", "Docker", "Azure Databricks", "AWS"]
  }, {
    icon: <LineChart className="h-8 w-8" />,
    title: "Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly"]
  }, {
    icon: <CircuitBoard className="h-8 w-8" />,
    title: "Frameworks",
    skills: ["Spark", "Unittest", "Selenium"]
  }];
  return <section id="skills" className="bg-gray-50 my-0 py-0">
      <div className="container mx-0 px-[16px] rounded my-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark py-[50px]">
            Technical <span className="text-portfolio-primary">Skills</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCards.map((skill, index) => <SkillCard key={index} icon={skill.icon} title={skill.title} skills={skill.skills} />)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;