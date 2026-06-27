import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';
import sagorRoy from '../../assets/images/sagor-roy.png';
import resume from '../../assets/resume/sagor-roy-cv.txt';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTexts = ['Frontend Developer', 'React Specialist', 'UI/UX Engineer', 'Problem Solver'];

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const typeSpeed = isDeleting ? 45 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pb-24 pt-24 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_36%)]" />
      <div className="floating-shape floating-shape--one absolute left-[-8%] top-20 h-36 w-36 rounded-full bg-accent-purple/20 blur-3xl" />
      <div className="floating-shape floating-shape--two absolute bottom-12 right-[4%] h-40 w-40 rounded-full bg-accent-blue/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-gradient-to-r from-accent-purple/15 to-accent-blue/15 px-4 py-2 backdrop-blur"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent-purple" />
              <span className="text-sm font-semibold tracking-[0.2em] text-text-secondary uppercase">
                Available for freelance & full-time roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-black leading-[0.95] sm:text-5xl lg:text-7xl"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Sagor Roy</span>
              <br />
              <span className="mt-4 block text-2xl font-semibold text-text-secondary sm:text-3xl lg:text-5xl">
                I build{' '}
                <span className="font-bold text-text-primary">
                  {typingTexts[textIndex].substring(0, charIndex)}
                </span>
                <span className="ml-1 inline-block h-8 w-1.5 animate-pulse bg-accent-blue align-middle sm:h-10" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-7 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8 lg:text-xl"
            >
              I create polished, conversion-focused web experiences with modern React architecture,
              thoughtful UI detail, and accessibility-first design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-glow flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-8 py-4 font-semibold text-white shadow-[0_20px_60px_rgba(168,85,247,0.25)] sm:justify-start"
              >
                Hire Me
                <FaArrowRight />
              </motion.button>
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                download="sagor-roy-cv.txt"
                className="flex items-center justify-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.10] px-8 py-4 font-semibold text-text-primary backdrop-blur transition-all duration-300 hover:border-accent-purple/40 hover:text-accent-purple sm:justify-start"
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-text-muted">Connect</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.08, duration: 0.7 }}
                      whileHover={{ y: -7, scale: 1.08, rotate: 3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.10] text-text-secondary transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-blue hover:text-white"
                      aria-label={`Visit ${link.name}`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl px-2 sm:px-0"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 blur-3xl" />
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur"
            >
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10">
                <img src={sagorRoy} alt="Sagor Roy smiling" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur sm:block"
            >
              3+ years crafting interfaces
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="absolute -bottom-4 right-5 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur sm:block"
            >
              React • Tailwind • Framer Motion
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
