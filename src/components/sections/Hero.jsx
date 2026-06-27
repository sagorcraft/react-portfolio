import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import sagorRoy from '../../assets/images/sagor-roy.png';
import resume from '../../assets/resume/sagor-roy-cv.txt';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTexts = ['Frontend Developer', 'React Specialist', 'UI/UX Engineer', 'Web Designer'];

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, typingTexts]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/30 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
              <span className="text-text-secondary text-sm font-medium tracking-wide">Available for hire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="gradient-text">Sagor Roy</span>
              <br />
              <div className="h-16 mt-2">
                <span className="text-text-secondary text-3xl md:text-4xl font-medium">I'm a </span>
                <span className="text-text-primary text-3xl md:text-4xl font-bold">
                  {typingTexts[textIndex].substring(0, charIndex)}
                </span>
                <span className="w-1.5 h-10 bg-accent-blue inline-block align-middle ml-1 animate-pulse" />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Building beautiful, responsive, and performant web applications with modern technologies.
              Passionate about creating seamless user experiences and clean, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-glow px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold rounded-full flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Let's Work Together
                <FaArrowRight />
              </motion.button>
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                download="sagor-roy-cv.txt"
                className="px-8 py-4 bg-transparent text-text-primary border-2 border-[rgba(148,163,184,0.2)] font-semibold rounded-full flex items-center gap-3 hover:border-accent-purple hover:text-accent-purple transition-all duration-300"
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <p className="text-text-muted text-sm font-medium">Connect with me:</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                      whileHover={{ y: -8, scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:bg-gradient-to-r from-accent-purple to-accent-blue hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full blur-3xl opacity-40 scale-110 animate-pulse-slow" />
                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-[rgba(148,163,184,0.1)] shadow-2xl">
                  <img
                    src={sagorRoy}
                    alt="Sagor Roy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
