import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import sagorRoy from '../../assets/images/sagor-roy.png';
import SectionHeading from '../ui/SectionHeading';

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
    { value: 3, suffix: '+', label: 'Years building interfaces' },
    { value: 20, suffix: '+', label: 'Projects shipped' },
    { value: 10, suffix: '+', label: 'Clients delighted' },
  ];

  const highlights = [
    'Frontend Developer',
    'Problem Solver',
    'Fast Learner',
    'Clean Code',
    'Responsive Design',
    'Accessible UX',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title={<>Crafting thoughtful web experiences with <span className="gradient-text">clarity and speed</span></>}
          description="I blend visual design intuition with engineering discipline to create products that feel premium, load fast, and convert visitors into customers."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-accent-purple/25 to-accent-blue/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-[0_25px_90px_rgba(15,23,42,0.22)]">
              <img src={sagorRoy} alt="Sagor Roy portrait" className="h-full w-full rounded-[1.5rem] object-cover" loading="lazy" decoding="async" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 25, x: -12 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative mt-6 rounded-[1.35rem] border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur sm:absolute sm:-bottom-7 sm:-right-4 sm:mt-0 md:-right-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-xl text-white">
                  <FaCode />
                </div>
                <div>
                  <p className="text-2xl font-bold">3+</p>
                  <p className="text-sm text-text-muted">Years of experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass rounded-[2rem] p-6 sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-blue">
                Why clients choose me
              </p>
              <h3 className="text-2xl font-semibold text-text-primary sm:text-3xl">
                I turn ideas into refined digital experiences that feel effortless.
              </h3>
              <p className="mt-4 text-lg leading-8 text-text-secondary">
                I’m a frontend developer focused on building high-performance interfaces with a strong emphasis on usability, motion, and maintainable code. Every element is crafted to feel deliberate, polished, and conversion-ready.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 6, y: -3 }}
                  className="rounded-[1.2rem] border border-white/10 bg-gradient-to-r from-white/8 to-white/5 p-4 text-center sm:text-left"
                >
                  <p className="text-sm font-semibold text-text-primary">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass rounded-[1.5rem] p-6">
                <div className="mb-3 flex items-center gap-3 text-accent-purple">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Location</span>
                </div>
                <p className="text-lg font-semibold text-text-primary">Bangladesh</p>
              </div>
              <div className="glass rounded-[1.5rem] p-6">
                <div className="mb-3 flex items-center gap-3 text-accent-blue">
                  <FaEnvelope />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">Email</span>
                </div>
                <p className="text-lg font-semibold text-text-primary">sagorroy4778@gmail.com</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-5 text-center"
                >
                  <p className="text-3xl font-black gradient-text sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
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
