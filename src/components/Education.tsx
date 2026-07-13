import { motion } from 'framer-motion';
import { education } from '../data/profile';

const Education = () => {
  return (
    <section id="education" className="pf-section">
      <div className="pf-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex items-baseline gap-3.5"
        >
          <span className="pf-mono text-[13px] tracking-wider text-fog">01</span>
          <h2 className="pf-display text-[clamp(24px,3vw,30px)] m-0">Education</h2>
        </motion.div>

        <div>
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`grid grid-cols-1 gap-2 border-t border-chalk py-7 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8 ${
                index === 0 ? 'border-t-0 pt-0' : ''
              }`}
            >
              <div className="pf-mono text-[13px] leading-relaxed text-gravel">{item.period}</div>
              <div>
                <h3 className="pf-display m-0 text-[19px] leading-snug">{item.school}</h3>
                <p className="m-0 mt-1.5 text-[15px] text-gravel">{item.degree}</p>
                <p className="m-0 mt-2 text-[13.5px] text-slateish">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
