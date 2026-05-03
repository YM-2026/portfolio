import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Home = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Hero />
      <About />
      <Contact />
      <footer className="py-12 px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-30 mt-20">
        <span>© 2026 AGNÈS</span>
        <span>BAUHAUS MODERNISM</span>
      </footer>
    </main>
  );
};

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    initial: { y: 100, rotateX: -90, opacity: 0 },
    animate: { 
      y: 0, 
      rotateX: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden" id="hero">
      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="relative z-10"
      >
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVars}
            className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.85] italic tracking-tighter"
          >
            Welcome to
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-2">
          <motion.h2 
            variants={itemVars}
            className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.85] pl-[5vw] tracking-tighter"
          >
            Agnès's website
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-bau-navy rounded-full z-0 opacity-10 blur-3xl md:blur-none md:opacity-100"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          y: ["-50%", "-48%", "-52%", "-50%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        }}
      />
      
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4">
        <div className="h-[1px] w-24 bg-bau-navy/30" />
        <span className="text-[10px] uppercase tracking-[0.5em] font-medium opacity-50">SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-48 px-6 md:px-12 border-t border-bau-navy/10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
        <div className="md:col-span-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-6xl md:text-8xl italic mb-20 tracking-tighter"
          >
            Agnès.
          </motion.h3>
          
          <div className="space-y-32">
            {/* Work Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12 border-b border-bau-navy/10 pb-4">Work Experience</h4>
              <div className="space-y-12">
                {[
                  { role: "Senior Designer", company: "Bauhaus Studio", period: "2023 — Present" },
                  { role: "Visual Architect", company: "Artisans Collective", period: "2021 — 2023" },
                  { role: "Junior Creator", company: "Modernist Lab", period: "2019 — 2021" }
                ].map((job, i) => (
                  <div key={i} className="flex justify-between items-baseline group">
                    <div>
                      <div className="font-serif text-3xl md:text-5xl tracking-tight group-hover:italic transition-all">{job.role}</div>
                      <div className="text-sm opacity-60 mt-1 uppercase tracking-widest">{job.company}</div>
                    </div>
                    <div className="text-xs font-medium opacity-40">{job.period}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12 border-b border-bau-navy/10 pb-4">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {["Minimalist Architecture", "Analog Photography", "Swiss Typography", "Avant-garde Cinema", "Contemporary Art", "Brutalist Design", "Vinyl Collecting"].map((hobby, i) => (
                  <span key={i} className="font-serif text-2xl md:text-4xl italic opacity-80 hover:opacity-100 transition-opacity">
                    {hobby}{i !== 6 ? "," : "."}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="md:col-span-4 hidden md:block">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] bg-bau-navy border-4 border-bau-navy relative overflow-hidden"
           >
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544391439-1df5c17ad28c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1/2 h-1/2 border-2 border-bau-yellow rounded-full animate-pulse" />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

// Removed Works component as per 3-section request

const Contact = () => {
  return (
    <section className="py-64 px-6 md:px-12 border-t border-bau-navy/10 flex flex-col items-center text-center" id="contact">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] uppercase tracking-[0.5em] mb-8 opacity-50"
      >
        Have a project?
      </motion.span>
      <motion.a 
        href="mailto:studio@selflux.art"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-serif text-6xl md:text-9xl italic tracking-tighter hover:opacity-50 transition-opacity"
      >
        Get in touch
      </motion.a>
    </section>
  );
};
