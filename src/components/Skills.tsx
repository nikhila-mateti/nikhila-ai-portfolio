import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Globe, Cpu, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Skills",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 80 },
        { name: "Java", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Angular", level: 75 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 70 },
        { name: "Spring Boot", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Flask", level: 75 },
        { name: "OpenCV", level: 70 },
        { name: "Pandas", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS EC2", level: 75 },
        { name: "AWS Amplify", level: 70 },
        { name: "AWS Cognito", level: 70 },
        { name: "GCP", level: 70 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Docker (Learning)", level: 50 },
        { name: "Git", level: 90 },
        { name: "Agile Development", level: 85 }
      ]
    },
    {
      title: "Data & AI",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "OpenAI APIs", level: 80 },
        { name: "MLflow", level: 75 },
        { name: "XGBoost", level: 70 },
        { name: "LangChain", level: 70 },
        { name: "Machine Learning", level: 80 },
        { name: "RAG Systems", level: 65 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 70 },
        { name: "Neo4j", level: 65 },
        { name: "Tableau", level: 75 },
        { name: "Streamlit", level: 70 },
        { name: "Postman", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Confluence", level: 75 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability"
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiencies 
            across various domains of software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-br ${category.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 + skillIndex * 0.1 }}
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Palette size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-800/20 to-gray-900/20 rounded-xl p-4 text-center border border-purple-500/30"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
