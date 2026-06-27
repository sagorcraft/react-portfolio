import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="My Journey"
          title={<>A timeline of <span className="gradient-text">growth and impact</span></>}
          description="Each step of the journey has strengthened my ability to ship thoughtful, polished frontend experiences."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-accent-purple to-accent-blue md:left-1/2 md:-translate-x-1/2 md:block" />
          <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-accent-purple to-accent-blue md:hidden" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.14, ease: 'easeOut' }}
              className={`relative mb-8 pl-10 md:mb-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:left-1/2 md:pl-16'}`}
            >
              <motion.div
                whileHover={{ scale: 1.4, rotate: 180 }}
                className={`absolute top-8 h-6 w-6 rounded-full border-4 border-bg-primary bg-gradient-to-r from-accent-purple to-accent-blue ${index % 2 === 0 ? 'left-1 md:right-[-12px] md:left-auto' : 'left-1 md:left-[-12px]'}`}
              />

              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass card-hover rounded-[1.8rem] p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-accent-purple">
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-text-primary">{item.title}</h3>
                <p className="text-base leading-8 text-text-secondary">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
