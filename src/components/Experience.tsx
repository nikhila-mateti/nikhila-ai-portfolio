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
      "Designed & launched new landing pages for Providers, Teachers, & Parents, increasing user engagement by 25% & improving responsiveness.",
      "Improved UI consistency across 5+ workflows by standardizing profile pictures, button styles, & navigation, resulting in a 40% more cohesive platform experience.",
      "Participated in testing & debugging of 10+ UI components across user roles, helping reduce front-end bugs by 30% through detailed issue tracking & QA collaboration."
    ]
  },
  {
    company: "SellMate.AI",
    role: "Software Engineer – Full Stack Developer (Startup)",
    location: "San Francisco, CA",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Designed & integrated an AI-powered item description generator using OpenAI APIs, reducing manual effort by 40% & accelerating product listing time by 30%.",
      "Implemented secure user authentication using Clerk with Next.js, resulting in a 98% login success rate and a 50% reduction in auth-related errors.",
      "Developed & deployed a feature enabling users to add products to eBay via SellMate, increasing seller efficiency by 35% & reducing manual listing steps by 3x.",
      "Optimized API response times to fetch user-specific eBay listings under 200ms, boosting UI responsiveness by 45%."
    ]
  },
  {
    company: "Northwest Missouri State University",
    role: "Graduate Assistant",
    location: "Maryville, MO",
    period: "Aug 2024 – Dec 2024",
    description: [
      "Mentored 60+ students in Android development & best practices for modular code structure, API design, & Git workflows.",
      "Conducted 100+ code reviews & guided students to follow CI/CD principles, object-oriented programming, & code quality standards.",
      "Maintained GitHub Classroom, automating project management tasks & ensuring 95% compliance with assignment standards."
    ]
  },
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    location: "Hyderabad, India",
    period: "Aug 2021 – Jul 2023",
    description: [
      "Built & deployed Python-based automation pipelines to process large Excel datasets into validated, well-formatted .csv files for Bread Financial’s internal reporting platform, reducing manual processing time by 30% & cutting report errors by 25%.",
      "Designed PostgreSQL database schemas & optimized SQL queries to support accurate storage & fast retrieval of financial data across departments, enabling smoother reporting & cross-team analytics.",
      "Modularized backend scripts into modular components, integrated them into CI/CD pipelines, & deployed on AWS EC2, improving reliability & scalability of reporting workflows while reducing support escalations by 20% & handling 10K+ records per execution."
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