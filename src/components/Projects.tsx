import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/profile';

const Projects = () => {
  return (
    <section id="projects" className="pf-section">
      <div className="pf-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex items-baseline gap-3.5"
        >
          <span className="pf-mono text-[13px] tracking-wider text-fog">03</span>
          <h2 className="pf-display text-[clamp(24px,3vw,30px)] m-0">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-1">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="border-t border-chalk pt-7 first:border-t-0 first:pt-0"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="pf-mono text-[12px] tracking-wider text-fog">{project.number}</span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-link"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <ExternalLink size={14} strokeWidth={2} />
                  </a>
                )}
              </div>

              <h3 className="pf-display m-0 mt-3.5 text-[20px] leading-snug">{project.title}</h3>

              {project.bullets.length > 0 ? (
                <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                  {project.bullets.map((bullet) => (
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
              ) : (
                <p className="m-0 mt-2.5 text-[15px] leading-relaxed text-gravel">
                  {project.description}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span key={tag} className="pf-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
