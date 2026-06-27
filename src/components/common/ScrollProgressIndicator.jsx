import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-purple to-accent-blue z-[1000"
      style={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgressIndicator;
