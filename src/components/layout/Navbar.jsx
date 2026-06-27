import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 py-3 transition-all duration-500 ${
        isScrolled ? 'glass shadow-[0_20px_70px_rgba(15,23,42,0.22)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.25em] text-text-primary backdrop-blur"
          aria-label="Go to home section"
        >
          SR<span className="ml-1 gradient-text">.</span>
        </motion.button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => scrollToSection(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`relative text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activeSection === link.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-0.5 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue transition-all duration-300 group-hover:w-full" style={{ width: activeSection === link.id ? '100%' : '0%' }} />
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-text-primary backdrop-blur transition-all duration-300 hover:border-accent-purple/40"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-glow hidden rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(168,85,247,0.25)] md:inline-flex"
          >
            Hire Me
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-text-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
              aria-label="Close mobile menu"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 180 }}
              className="fixed right-0 top-0 z-50 flex h-full w-4/5 flex-col gap-6 border-l border-white/10 bg-gradient-to-br from-bg-secondary to-bg-primary p-8 pt-20 shadow-2xl md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ x: 4 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-medium tracking-[0.2em] uppercase transition-colors ${
                    activeSection === link.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="mt-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3 text-sm font-semibold text-white shadow-lg"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
