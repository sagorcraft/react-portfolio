import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Ava Thompson',
    role: 'Founder, Northstar Studio',
    content: 'Sagor transformed our product vision into an interface that feels premium, intuitive, and conversion-ready from the very first interaction.',
    rating: 5,
    avatar: 'AT',
  },
  {
    id: 2,
    name: 'Noah Patel',
    role: 'Product Lead, BrightLane',
    content: 'The collaboration felt effortless. He combines strong UI sensibility with solid technical execution and delivered ahead of schedule.',
    rating: 5,
    avatar: 'NP',
  },
  {
    id: 3,
    name: 'Lina Alvarez',
    role: 'CTO, Nova Commerce',
    content: 'His React work is polished, accessible, and thoughtfully structured. He brings both craft and speed to the table.',
    rating: 5,
    avatar: 'LA',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-[rgba(30,41,59,0.3)]">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What collaborators <span className="gradient-text">have to say</span></>}
          description="Trusted by founders and teams who want thoughtful interfaces and reliable execution."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.11 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass card-hover rounded-[1.8rem] p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="text-4xl text-accent-purple/80">
                  <FaQuoteLeft />
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-accent-cyan" />
                  ))}
                </div>
              </div>
              <p className="text-base leading-8 text-text-secondary">{item.content}</p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent-purple to-accent-blue font-semibold text-white">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{item.name}</h4>
                  <p className="text-sm text-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
