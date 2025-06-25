import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import Screen3D from './components/Screen3D';

export type Section = 'hero' | 'about' | 'projects' | 'skills' | 'contact' | 'experience';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setCurrentSection(section.id as Section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black to-indigo-900 text-white overflow-x-hidden relative">
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
          },
        }}
      />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="fixed inset-0 z-0">
              <Canvas>
                <Screen3D currentSection={currentSection} />
              </Canvas>
            </div>

            <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />

            <main className="relative z-10">
              <section id="hero">
                <Hero onNavigate={setCurrentSection} />
              </section>

              <div className="md:pl-28 lg:pl-32">
                <section id="about">
                  <About />
                </section>
                <section id="experience">
                  <Experience />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                
                <section id="contact">
                  <Contact />
                </section>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;