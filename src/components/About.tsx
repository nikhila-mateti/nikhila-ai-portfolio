import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Heart } from 'lucide-react';
import profilePic from '../assets/images/Nikki.jpeg';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's in Computer Science @ Northwest Missouri State University, Maryville, MO, USA"
    },
    {
      icon: Award,
      title: "Experience",
      description: "Hands-on experience in full-stack development and system optimization"
    },
    {
      icon: Target,
      title: "Goals",
      description: "My goal is to build impactful software solutions that serve and empower a wide range of users, solving real-world problems at scale."
    },
    {
      icon: Heart,
      title: "Interests",
      description: "Software development, AI Agents, MLOps, web development, Android development"
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
            I'm a passionate software developer with a strong foundation in computer science 
            and a keen interest in leveraging technology to create meaningful solutions.
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
            With a strong background in computer science and experience across startups and enterprise systems, I’m passionate about building technology
            that creates real impact. At LTIMindtree, I developed backend automation workflows to streamline financial data processing for enterprise reporting. 
            At SellMate.AI, I led full-stack development of AI-powered tools for e-commerce.At Mindly Care, I contributed to refining multi-role workflows, 
            enhancing UI consistency, and improving the overall user experience across the platform.
            
            </p>
            
            <p className="text-gray-300 leading-relaxed">
            As a graduate assistant, I mentored over 60 students in Android development, conducting code reviews, teaching modular design principles, 
            and introducing CI/CD best practices to strengthen their skills as Android developers.
            </p>
            <p className="text-gray-300 leading-relaxed">
            I approach every project, whether it's a solo prototype or a team-driven sprint with enthusiasm, creativity, and 
            attention to detail. I'm always exploring new technologies, contributing to open-source, and collaborating with 
            people who share a passion for impactful, user-centric solutions. For me, software is more than just code, it's a 
            way to connect, empower, and keep pushing the boundaries of what's possible.
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