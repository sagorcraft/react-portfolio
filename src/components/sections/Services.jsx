import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionHeading from '../ui/SectionHeading';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[rgba(30,41,59,0.3)] to-transparent">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="What I Do"
          title={<>Designing and building <span className="gradient-text">high-conversion digital products</span></>}
          description="From concept to launch, I help brands and founders create interfaces that feel premium and perform reliably."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 55, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -14, scale: 1.03, boxShadow: '0 24px 60px -16px rgba(168, 85, 247, 0.35)' }}
                className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 text-center shadow-[0_20px_80px_rgba(15,23,42,0.12)]"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0], y: [0, -6, 0] }}
                  transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-gradient-to-r from-accent-purple to-accent-blue text-3xl text-white shadow-lg"
                >
                  <Icon />
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold text-text-primary">{service.title}</h3>
                <p className="text-base leading-8 text-text-secondary">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
