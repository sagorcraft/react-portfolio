import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[rgba(30,41,59,0.3)] to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-semibold tracking-widest text-sm mb-3 uppercase">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                whileHover={{
                  y: -20,
                  scale: 1.08,
                  boxShadow: '0 30px 60px -15px rgba(168, 85, 247, 0.4)',
                }}
                className="glass card-hover p-8 rounded-2xl text-center group hover:border-accent-purple/50 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-white text-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon />
                </motion.div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
