import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { profile } from './data/profile';

const navItems = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-eggshell text-obsidian">
      <nav
        className={`sticky top-0 z-30 border-b transition-colors duration-200 ${
          scrolled ? 'border-chalk bg-eggshell/90 backdrop-blur-md' : 'border-transparent bg-eggshell'
        }`}
      >
        <div className="pf-container flex h-14 items-center justify-between">
          <a href="#top" className="pf-mono text-[13px] tracking-wide text-obsidian no-underline">
            NM
          </a>
          <div className="hidden items-center gap-5 sm:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="pf-link text-[13px]">
                {item.label}
              </a>
            ))}
          </div>
          <a href={profile.resumeUrl} download className="pf-pill-ghost text-[13px]">
            Resume
          </a>
        </div>
      </nav>

      <main id="top">
        <Hero />
        <div className="pf-container">
          <div className="pf-rule" />
        </div>
        <Skills />
        <div className="pf-container">
          <div className="pf-rule" />
        </div>
        <Experience />
        <div className="pf-container">
          <div className="pf-rule" />
        </div>
        <Projects />
        <div className="pf-container">
          <div className="pf-rule" />
        </div>
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
