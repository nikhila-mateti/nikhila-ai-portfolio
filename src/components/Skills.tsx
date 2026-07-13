import { motion } from 'framer-motion';
import { skillGroups } from '../data/profile';

const Skills = () => {
  return (
    <section id="skills" className="pf-section">
      <div className="pf-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex items-baseline gap-3.5"
        >
          <span className="pf-mono text-[13px] tracking-wider text-fog">02</span>
          <h2 className="pf-display text-[clamp(24px,3vw,30px)] m-0">Skills</h2>
        </motion.div>

        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <h3 className="pf-display m-0 mb-3 text-[16px] leading-snug text-obsidian">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span key={skill} className="pf-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
