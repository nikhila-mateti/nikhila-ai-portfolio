import React from 'react';
import { motion } from 'framer-motion';
import { 
    Github, 
    MessageSquare, 
    Server, 
    Gamepad, 
    Plane, 
    Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    
      {
        title: "InterviewBot",
        description: "RAG-powered chatbot combining Neo4j, LangChain, and LlamaIndex to deliver context-aware answers from graph databases using natural language.",
        tech: ["Python", "Neo4j", "LlamaIndex", "LangChain", "OpenAI GPT"],
        icon: MessageSquare,
        color: "from-purple-500 to-pink-500",
        githubUrl: "https://github.com/nikhila-mateti/InterviewBot",
        features: [
          "RAG-based chatbot with semantic graph search",
          "Graph data ingestion and Cypher query execution",
          "LLM-augmented responses via LangChain and OpenAI",
          "Custom retrievers over VectorStoreIndex",
          "Contextual conversation over structured knowledge"
        ]
      },
      {
        title: "Airline Reservation System",
        description: "Domestic flight booking platform with seat selection, secure payments, and automated ticketing for Indian routes.",
        tech: ["Angular", "Node.js", "Spring", "PostgreSQL", "JavaScript", "HTML", "CSS"],
        icon: Plane,
        color: "from-purple-500 to-pink-500",
        githubUrl: "https://github.com/nikhila-mateti/AirlineReservations",
        features: [
          "Visual seat selection with real-time availability",
          "Secure payment gateway integration",
          "Automated PDF ticket generation & email delivery",
          "Route-based flight search",
          "Redundancy-free booking experience"
        ]
      },
      {
        title: "Eye Protection Mode",
        description: "Real-time webcam monitoring script that detects if a user is too close to the screen and locks the workstation to promote eye safety.",
        tech: ["Python", "OpenCV", "NumPy"],
        icon: Eye,
        color: "from-purple-500 to-pink-500",
        githubUrl: "https://github.com/nikhila-mateti/Eye_Protection_Mode",
        features: [
          "Real-time face detection using webcam",
          "Distance estimation from face height in pixels",
          "Automatic workstation lock if too close",
          "Lightweight and easy to run locally"
        ]
      },
      {
        title: "Customer Churn MLOps",
        description: "End-to-end churn prediction pipeline with CI/CD, automated retraining, and cloud deployment using MLOps best practices.",
        tech: ["XGBoost", "MLflow", "Docker", "Flask", "AWS", "Terraform", "Airflow", "PostgreSQL", "Grafana"],
        icon: Server,
        color: "from-purple-500 to-pink-500",
        // githubUrl: "https://github.com/yourusername/customer-churn-mlops",
        features: [
          "Model versioning & registry with MLflow",
          "CI/CD via GitHub Actions & Docker",
          "Scheduled retraining with Airflow",
          "Infrastructure as Code using Terraform",
          "Performance monitoring with Grafana"
        ]
      },
      {
        title: "Precipitation Quest",
        description: "Point-and-click educational game that teaches students how to identify precipitate reactions using a solubility chart.",
        tech: ["Godot 4", "Piskel", "Firebase"],
        icon: Gamepad,
        color: "from-purple-500 to-pink-500",
        githubUrl: "https://github.com/SaiUjwal296/Precipitation",
        features: [
          "Interactive gameplay with chemistry-based puzzles",
          "Multiple difficulty levels for progressive learning",
          "Playable via itch.io or standalone installables"
        ]
      },
      
    
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
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise through various projects spanning 
            web development, data analysis, and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-br ${project.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      {/* <motion.button
                        className="p-2 bg-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.button> */}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          {/* <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;