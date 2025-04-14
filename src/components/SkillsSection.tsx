import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Database, Code, CircuitBoard, LineChart, Brain, Server, GitBranch, Terminal, Docker, Cloud } from 'lucide-react';
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description
}) => <div className="bg-white p-6 shadow-md border border-gray-100 card-hover rounded-xl px-[24px]">
    <div className="text-portfolio-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{title}</h3>
    <p className="text-gray-600">{description}</p>
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
      <span className="text-sm font-medium text-gray-700">{name}</span>
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
    description: "Python, SQL, Shell Scripting with a focus on data processing and manipulation."
  }, {
    icon: <Database className="h-8 w-8" />,
    title: "Databases",
    description: "SQL Server, PostgreSQL, MySQL for efficient data storage and retrieval."
  }, {
    icon: <Brain className="h-8 w-8" />,
    title: "Libraries",
    description: "Pandas, NumPy, Scikit-learn for data manipulation and machine learning applications."
  }, {
    icon: <Cloud className="h-8 w-8" />,
    title: "Technologies",
    description: "Git, Docker, Azure Databricks, AWS for version control and cloud computing solutions."
  }, {
    icon: <LineChart className="h-8 w-8" />,
    title: "Visualization",
    description: "Matplotlib, Seaborn for creating insightful data visualizations and reports."
  }, {
    icon: <CircuitBoard className="h-8 w-8" />,
    title: "Frameworks",
    description: "Spark, Unittest, Selenium for big data processing and testing automation."
  }];
  return <section id="skills" className="bg-gray-50 my-0 py-[5px]">
      <div className="container mx-0 px-[16px] rounded my-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Technical <span className="text-portfolio-primary">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto my-px">
            Expertise in data science, engineering, and software development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCards.map((skill, index) => <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />)}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {technicalSkills.map((skill, index) => <SkillBar key={index} name={skill.name} percentage={skill.percentage} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;