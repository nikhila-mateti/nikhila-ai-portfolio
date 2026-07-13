import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, Download, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <header className="pf-section pt-20 sm:pt-28">
      <div className="pf-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-5 sm:gap-7"
        >
          <div
            aria-hidden="true"
            className="pf-mono flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-chalk bg-powder text-[22px] text-obsidian sm:h-[88px] sm:w-[88px] sm:text-[28px]"
          >
            {profile.initials}
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="pf-display text-[clamp(34px,7vw,52px)]">{profile.name}</h1>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[640px] text-[15px] leading-[1.65] text-cinder sm:text-[16px]"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <span className="inline-flex items-center gap-1.5 text-[14px] text-gravel">
            <MapPin size={14} strokeWidth={2} />
            {profile.location}
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-link"
          >
            <Linkedin size={14} strokeWidth={2} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-link"
          >
            <Github size={14} strokeWidth={2} />
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="pf-link">
            <Mail size={14} strokeWidth={2} />
            Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <a href="#experience" className="pf-pill">
            View experience
          </a>
          <a href={profile.resumeUrl} download className="pf-pill-ghost gap-2">
            <Download size={15} strokeWidth={2} />
            Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
