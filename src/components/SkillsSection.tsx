
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Database, Code, CircuitBoard, LineChart, Brain, Server, GitBranch, Terminal, Dock, Cloud } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => (
  <TableRow>
    <TableCell className="font-medium flex items-center gap-2 text-portfolio-dark">
      {icon}
      {title}
    </TableCell>
    <TableCell className="w-3/4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            className="bg-gray-100 hover:bg-portfolio-primary hover:text-white text-gray-700 py-1 px-3 text-xs rounded-full transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </TableCell>
  </TableRow>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 text-portfolio-primary" />,
      title: "Languages",
      skills: ["Python", "SQL", "Shell Scripting"]
    },
    {
      icon: <Database className="h-5 w-5 text-portfolio-primary" />,
      title: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MySQL"]
    },
    {
      icon: <Brain className="h-5 w-5 text-portfolio-primary" />,
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Scikit-learn"]
    },
    {
      icon: <Cloud className="h-5 w-5 text-portfolio-primary" />,
      title: "Technologies",
      skills: ["Git", "Docker", "Azure Databricks", "AWS"]
    },
    {
      icon: <LineChart className="h-5 w-5 text-portfolio-primary" />,
      title: "Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
      icon: <CircuitBoard className="h-5 w-5 text-portfolio-primary" />,
      title: "Frameworks",
      skills: ["Spark", "Unittest", "Selenium"]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 my-0 py-0">
      <div className="container mx-0 px-[16px] rounded my-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark py-[50px]">
            Technical <span className="text-portfolio-primary">Skills</span>
          </h2>
        </div>

        <div className="mb-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4 font-bold text-lg">Category</TableHead>
                <TableHead className="w-3/4 font-bold text-lg">Skills</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {skillCategories.map((category, index) => (
                <SkillCategory 
                  key={index} 
                  title={category.title} 
                  skills={category.skills} 
                  icon={category.icon} 
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
