
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Database, Code, CircuitBoard, LineChart, Brain, Server, Cog, Wrench } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 card-hover">
    <div className="text-portfolio-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-sm font-medium text-portfolio-primary">{percentage}%</span>
    </div>
    <Progress value={percentage} className="h-2" />
  </div>
);

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", percentage: 95 },
    { name: "SQL & NoSQL Databases", percentage: 90 },
    { name: "Machine Learning", percentage: 85 },
    { name: "Deep Learning", percentage: 80 },
    { name: "Data Visualization", percentage: 90 },
    { name: "Big Data Technologies", percentage: 85 }
  ];

  const skillCards = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Building robust data pipelines and infrastructure to collect, process and store data efficiently."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Analysis",
      description: "Transforming raw data into actionable insights using statistical methods and visualization."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Developing models that can learn patterns from data and make accurate predictions."
    },
    {
      icon: <CircuitBoard className="h-8 w-8" />,
      title: "Deep Learning",
      description: "Building neural networks for complex tasks like computer vision and natural language processing."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Creating clean, maintainable code and robust applications to deliver data products."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalable data processing and ML model deployment."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Technical <span className="text-portfolio-primary">Skills</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Expertise in various data science, machine learning, and software development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCards.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
