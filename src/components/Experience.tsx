import { motion } from 'framer-motion';
import { experience } from '../data/profile';

const Experience = () => {
  return (
    <section id="experience" className="pf-section">
      <div className="pf-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex items-baseline gap-3.5"
        >
          <span className="pf-mono text-[13px] tracking-wider text-fog">03</span>
          <h2 className="pf-display text-[clamp(24px,3vw,30px)] m-0">Experience</h2>
        </motion.div>

        <div>
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`grid grid-cols-1 gap-3 border-t border-chalk py-8 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8 ${
                index === 0 ? 'border-t-0 pt-0' : ''
              }`}
            >
              <div className="pf-mono text-[13px] leading-relaxed text-gravel">{job.period}</div>
              <div>
                <h3 className="pf-display m-0 text-[19px] leading-snug">{job.company}</h3>
                <p className="m-0 mt-1.5 text-[15px] text-gravel">{job.role}</p>

                <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 48)}
                      className="flex gap-3 text-[15px] leading-relaxed text-cinder"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-fog"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tech.map((tag) => (
                    <span key={tag} className="pf-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
