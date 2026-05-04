import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Index', id: 'hero' },
  { name: 'About Me', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveTab(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-bau-navy/5 backdrop-blur-md border border-bau-navy/10 rounded-full py-2 px-3 flex gap-2"
        id="navbar-pill"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer whitespace-nowrap",
                isActive 
                  ? "bg-bau-navy text-bau-yellow" 
                  : "hover:bg-bau-navy/10 text-bau-navy"
              )}
              id={`nav-link-${item.name.toLowerCase()}`}
            >
              {item.name}
            </button>
          );
        })}
      </motion.div>
    </nav>
  );
};
