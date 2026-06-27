import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-purple font-semibold tracking-widest text-sm mb-3 uppercase">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-purple to-accent-blue rounded-full hidden md:block" />
          <div className="absolute left-4 w-1 h-full bg-gradient-to-b from-accent-purple to-accent-blue rounded-full md:hidden" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                y: 60,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              className={`relative mb-16 ${
                index % 2 === 0
                  ? 'md:text-right md:pr-16 pl-12 md:pl-0'
                  : 'md:left-1/2 md:pl-16 pl-12'
              }`}
            >
              {/* Timeline Marker */}
              <motion.div
                whileHover={{ scale: 1.5, rotate: 180 }}
                className={`absolute top-8 w-6 h-6 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full border-4 border-bg-primary z-10 ${
                  index % 2 === 0
                    ? 'md:right-[-12px] left-4 md:left-auto'
                    : 'md:left-[-12px] left-4'
                }`}
              />

              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass card-hover p-8 rounded-3xl"
              >
                <p className="text-accent-blue font-semibold text-sm mb-2">{item.date}</p>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
