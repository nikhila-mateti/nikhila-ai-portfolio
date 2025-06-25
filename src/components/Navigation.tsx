import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Wrench, Menu, X } from 'lucide-react';
import type { Section } from '../App';

interface NavigationProps {
  currentSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'hero' as Section, icon: Home, label: 'Home' },
    { id: 'about' as Section, icon: User, label: 'About' },
    { id: 'experience' as Section, icon: Briefcase, label: 'Experience' },
    { id: 'projects' as Section, icon: Wrench, label: 'Projects' },
    { id: 'skills' as Section, icon: Code, label: 'Skills' },
    { id: 'contact' as Section, icon: Mail, label: 'Contact' },
  ];

  const handleClick = (section: Section) => {
    onSectionChange(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-20"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <li key={item.id}>
                  <motion.button
                    onClick={() => handleClick(item.id)}
                    className={`relative p-3 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    
                    {/* Tooltip */}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap pointer-events-none"
                    >
                      {item.label}
                    </motion.span>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        {/* Hamburger Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-t border-white/20 z-40 p-4"
          >
            <ul className="flex justify-around items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors duration-300 ${
                        isActive ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;