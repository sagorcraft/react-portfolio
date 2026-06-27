import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
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

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-2xl border-b border-[rgba(148,163,184,0.1)] py-3'
          : ''
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-extrabold"
        >
          <span className="gradient-text">SR</span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-text-secondary font-medium text-sm tracking-wide hover:text-text-primary relative transition-all duration-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            </motion.li>
          ))}
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: navLinks.length * 0.1 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-text-primary hover:text-accent-blue transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: navLinks.length * 0.1 + 0.05 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-glow px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-full text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </div>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-primary"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
              aria-label="Close mobile menu"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-full w-4/5 bg-gradient-to-br from-bg-secondary to-bg-primary backdrop-blur-3xl border-l border-[rgba(148,163,184,0.1)] p-10 flex flex-col gap-8 z-50"
            >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(link.id)}
                className="text-text-secondary font-medium text-lg tracking-wide hover:text-text-primary transition-all duration-300 text-left"
              >
                {link.label}
              </motion.button>
            ))}
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-2xl text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
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
