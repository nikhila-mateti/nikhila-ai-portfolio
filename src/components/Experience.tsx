import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Mindly Care",
    role: "Full Stack Engineer Intern (Startup)",
    location: "Fremont, CA",
    period: "May 2025 - Present",
    description: [
      "Architected secure backend system using Node.js and Firebase Functions, enabling real-time user profile verification for 500+ registered users with 99.8% uptime.",
      "Delivered responsive landing page redesign resulting in 25% increase in user engagement and 40% improvement in mobile responsiveness across all device types.",
      "Implemented secure authentication system using AWS Cognito for sign-in/sign-up workflows, achieving 99.5% authentication success rate and enhancing user security with multi-factor authentication.",
      "Standardized UI component library across 5+ critical user workflows, achieving 40% improvement in platform-wide visual consistency and reducing development time by 30%."
    ]
  },
  {
    company: "SellMate.AI",
    role: "Software Engineer – Full Stack Developer (Startup)",
    location: "San Francisco, CA",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Built AI-powered product description generator using OpenAI APIs, reducing manual content creation effort by 40% and accelerating product listing time by 30% for 200+ active sellers.",
      "Engineered robust authentication system with Clerk & Next.js, achieving 98% login success rate & reducing authentication-related support tickets by 50%.",
      "Developed eBay marketplace integration enabling seamless product uploads, increasing seller efficiency by 35% & reducing manual listing steps by 3x."
    ]
  },
  {
    company: "Northwest Missouri State University",
    role: "Graduate Assistant",
    location: "Maryville, MO",
    period: "Aug 2024 – Dec 2024",
    description: [
      "Mentored 60+ students in Android development and best practices for modular code structure, API design, and Git workflows, improving student project quality by 40%.",
      "Conducted 100+ code reviews and guided students to follow CI/CD principles, object-oriented programming, and code quality standards, achieving 95% assignment compliance rate."
    ]
  },
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Aug 2021 – Jul 2023",
    description: [
      "Automated financial data processing pipeline using Python, transforming Excel datasets into validated CSV files for Bread Financial, reducing manual processing time by 30% and cutting report errors by 25%.",
      "Designed PostgreSQL database schemas supporting multi-departmental financial reporting for enterprise client, enabling faster data retrieval and cross-team analytics for 50+ stakeholders.",
      "Deployed scalable backend solutions on AWS EC2 with CI/CD integration, processing 10,000+ records per execution while reducing support escalations by 20% and improving system reliability by 35%."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-6"
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
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="text-purple-300">{exp.role}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 