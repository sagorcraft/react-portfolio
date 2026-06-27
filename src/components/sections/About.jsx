import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaCode } from 'react-icons/fa';
import sagorRoy from '../../assets/images/sagor-roy.png';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200;
          const startTime = performance.now();

          const step = (timestamp) => {
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * value));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const About = () => {
  const aboutStats = [
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 20, suffix: '+', label: 'Projects Completed' },
    { value: 10, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-semibold tracking-widest text-sm mb-3 uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Know <span className="gradient-text">Who I Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-3xl blur-xl opacity-30" />
            <div className="relative glass p-2 rounded-3xl">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={sagorRoy}
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="absolute -bottom-8 -right-4 md:-right-12 glass p-6 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-white text-xl">
                  <FaCode />
                </div>
                <div>
                  <p className="text-2xl font-bold">3+</p>
                  <p className="text-text-muted text-sm">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">I'm Sagor Roy, a passionate Frontend Developer</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm a passionate Frontend Developer with a love for creating beautiful, functional, and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in React.js to build dynamic and interactive applications.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                My goal is to continuously learn and grow as a developer, staying up-to-date with the latest technologies and best practices. I believe in writing clean, maintainable code and creating intuitive user interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-accent-purple">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Location</p>
                  <p className="font-semibold">Bangladesh</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 flex items-center justify-center text-accent-purple">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email</p>
                  <p className="font-semibold">sagorroy4778@gmail.com</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-extrabold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-text-muted text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
