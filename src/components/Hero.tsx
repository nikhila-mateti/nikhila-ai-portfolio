import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import type { Section } from '../App';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black to-indigo-900 to-black"
    >
        <div className="absolute inset-0 z-0 pointer-events-none">
  <div className="w-full h-full bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
</div>
<div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Nikhila Mateti
            </span>
          </h1>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            <span className="block">Software Developer</span>
            
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building real-world solutions at the intersection of software, AI, and cloud. 
          From full-stack apps to intelligent agents, I love turning complex ideas into impactful, 
          user-focused products. Let's create something meaningful together.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.button
            onClick={() => {
              onNavigate('experience');
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href="/Nikhila_M_Resume.pdf"
            download
            className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://github.com/nikhila-mateti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/nikhila-mateti/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Linkedin size={24} />
          </motion.a>
          
          <motion.a
            href="mailto:nikhila.mateti12@gmail.com"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => {
              onNavigate('about');
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;