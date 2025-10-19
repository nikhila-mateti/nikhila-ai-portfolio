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
    company: "Stealth Startup",
    role: "Founding Engineer (Part Time)",
    location: "San Francisco, CA",
    period: "Jul 2025 – Present",
    description: [
      "Designed and implemented a React/Node/AWS Cognito MVP achieving <1s response times and 99% uptime, making the platform ready for pilot users and internal testing.",
      "Built an AI-powered RAG pipeline (LangChain + OpenAI + DynamoDB/S3) that delivered sub-second responses across 1K+ documents, improving knowledge retrieval for demos and early product validation.",
      "Collaborated with product and design teams under tight deadlines, accelerating MVP delivery and positioning the platform for adoption."
    ]
  },
  {
    company: "Mindly Care",
    role: "Software Engineer Intern (Part Time)",
    location: "Fremont, CA",
    period: "May 2025 – Aug 2025",
    description: [
      "Built a secure Node.js + Firebase backend endpoint for profile retrieval/decryption from Vault, enabling dynamic UI flows and reducing data errors by 40%.",
      "Designed & deployed responsive React landing pages, boosting engagement by 25% and cutting bounce rate by 30%.",
      "Standardized shared UI components (profile images, buttons, navigation) across 5+ workflows, improving visual consistency by 40%."
    ]
  },
  {
    company: "SellMate.AI",
    role: "Software Engineer (Full-Stack Developer)",
    location: "San Francisco, CA",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Developed an AI-powered product description generator with Next.js + OpenAI, reducing manual seller effort by 40% and accelerating listing speed by 30%.",
      "Implemented Clerk + Next.js auth, increasing login success rate to 98% & cutting auth-related errors by 50%.",
      "Built and deployed APIs to enable direct eBay product uploads, increasing seller efficiency by 35% and reducing listing steps by 3x.",
      "Optimized API performance to serve eBay listings in <200ms, improving UI responsiveness by 45%."
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
      "Built and deployed Python pipelines to transform Excel datasets into validated CSVs for Bread Financial's reporting platform, reducing manual processing time by 30% and report errors by 25%.",
      "Designed PostgreSQL schemas and optimized SQL queries, enabling faster cross-team reporting and analytics.",
      "Modularized backend scripts, integrated them into CI/CD pipelines, and deployed on AWS EC2, improving reliability while reducing support escalations by 20% and processing 10K+ records per execution."
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