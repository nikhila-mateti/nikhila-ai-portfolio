import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Server,Activity,Cloud, Database, Globe, Cpu, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
        title: "Frontend Development",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "React.js", level: 90 },
          { name: "Next.js", level: 70 },
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "HTML", level: 95 },
          { name: "CSS", level: 95 },
          { name: "JSON", level: 90 }
        ]
      },
      {
        title: "Backend Development",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "Java", level: 90 },
          { name: "Python", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Spring Boot", level: 80 },
          { name: "REST APIs", level: 90 },
          { name: "Microservices", level: 85 },
          { name: "SQL", level: 85 },
          { name: "C", level: 70 },
          { name: "C++", level: 70 }
        ]
      },
      {
        title: "Cloud & DevOps",
        icon: Cloud,
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "AWS", level: 75 },
          { name: "Azure", level: 65 },
          { name: "Docker", level: 80 },
          { name: "Jenkins", level: 75 },
          { name: "Git", level: 92 },
          { name: "GitHub Actions", level: 78 },
          { name: "Kubernetes", level: 65 },
          { name: "Terraform", level: 70 },
          { name: "CI/CD", level: 85 },
          { name: "Agile", level: 85 }
        ]
      },
      {
        title: "MLOps & Data",
        icon: Cpu,
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "MLflow", level: 80 },
          { name: "Pandas", level: 90 },
          { name: "OpenAI APIs", level: 80 },
          { name: "LangChain", level: 75 },
          { name: "Generative AI", level: 75 },
          { name: "Oracle", level: 75 },
          { name: "MySQL", level: 78 },
          { name: "PostgreSQL", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "Firebase", level: 70 }
        ]
      },
      {
        title: "Other",
        icon: Zap,
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "Prometheus", level: 50},
          { name: "Grafana", level: 50 },
          { name: "RabbitMQ (Pub/Sub)", level: 65 },
          { name: "Kafka", level: 60 }
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