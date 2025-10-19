import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';
import profilePic from '../assets/images/Nikki.jpeg';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "MS in Computer Science (GPA: 4.0/4.0) from Northwest Missouri State University, Maryville, MO | B.Tech in CS (GPA: 3.6/4.0) from JNTU, Hyderabad, India"
    },
    {
      icon: Award,
      title: "Experience",
      description: "3 years of full-stack development across fintech, healthcare, and e-commerce with expertise in building scalable systems"
    },
    {
      icon: Target,
      title: "Specialization",
      description: "Backend systems, AI/ML integration, cloud architecture (AWS), and building low-latency APIs with 99% uptime"
    },
    {
      icon: Heart,
      title: "Interests",
      description: "AI-assisted development, RAG systems, microservices architecture, and leveraging Cursor/Claude Code for rapid iteration"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Software Engineer with 3 years of experience building backend and full-stack systems across fintech, healthcare, and e-commerce. 
            Skilled in Python, Java, TypeScript, React, SQL/NoSQL, and AWS, with a proven ability to deliver low-latency APIs (&lt;200ms), 
            improve system uptime to 99%, and create scalable pipelines and web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
            Currently working as a Founding Engineer at a stealth startup, where I'm building scalable React/Node/AWS systems 
            and implementing AI-powered RAG pipelines that deliver sub-second responses. My journey has taken me through 
            diverse environments—from enterprise systems at LTIMindtree to fast-paced startups like SellMate.AI and Mindly Care.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
            At LTIMindtree, I built Python pipelines and PostgreSQL schemas that automated financial data processing for 
            enterprise clients. At SellMate.AI, I developed AI-powered tools using OpenAI APIs and Next.js that reduced 
            manual seller effort by 40%. At Mindly Care, I created secure backend systems with Firebase and standardized 
            UI components across multiple workflows.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
            I'm passionate about leveraging modern dev tools like Cursor, Claude Code, and AI-assisted development to iterate 
            quickly and deliver reliable features. Whether it's optimizing API performance to &lt;200ms or building systems 
            with 99% uptime, I focus on creating solutions that make a real impact. I thrive in collaborative environments 
            where I can ship features fast, debug thoughtfully, and continuously push the boundaries of what's possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-700/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="w-80 h-80 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-purple-400/30 shadow-lg">
                  <img 
                    src={profilePic} 
                    alt="Nikhila Mateti" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Nikhila Mateti</h4>
                <p className="text-purple-300 mb-4">Software Developer</p>
                <div className="flex justify-center gap-4 text-sm text-gray-400">
                <span>🌍 San Francisco, CA</span>
                  <span>🎓 Computer Science</span>
                  <span>💻 Full-Stack Dev</span>
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;