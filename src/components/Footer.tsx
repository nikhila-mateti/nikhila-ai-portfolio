import { Mail, Phone } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer id="contact" className="pf-section pb-20 pt-10">
      <div className="pf-container">
        <div className="pf-rule mb-10" />
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pf-mono m-0 text-[12px] tracking-wider text-fog">CONTACT</p>
            <h2 className="pf-display m-0 mt-2 text-[clamp(22px,3vw,28px)]">
              Let&apos;s work together
            </h2>
            <p className="m-0 mt-2 max-w-md text-[15px] leading-relaxed text-gravel">
              Open to full-stack roles and product-focused engineering work.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <a href={`mailto:${profile.email}`} className="pf-link">
              <Mail size={14} strokeWidth={2} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`} className="pf-link">
              <Phone size={14} strokeWidth={2} />
              {profile.phone}
            </a>
          </div>
        </div>

        <p className="pf-mono m-0 mt-12 text-[12px] text-fog">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
