import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, TechCorp',
      content: 'Sagor is an exceptional Frontend Developer. His attention to detail and ability to create beautiful, responsive designs is outstanding.',
      rating: 5,
      avatar: 'JD',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Product Manager, StartupX',
      content: 'Working with Sagor was a pleasure. He delivered our project on time and exceeded our expectations in every way.',
      rating: 5,
      avatar: 'JS',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'CTO, InnovateTech',
      content: "Sagor's expertise in React and modern frontend technologies is top-notch. Highly recommended for any web development project.",
      rating: 5,
      avatar: 'MJ',
    },
  ];

  const activeTestimonial = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-[rgba(30,41,59,0.3)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-cyan font-semibold tracking-widest text-sm mb-3 uppercase">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What People <span className="gradient-text">Say About Me</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="glass card-hover p-10 rounded-3xl mx-auto max-w-3xl"
          >
            <div className="flex items-center justify-between mb-6">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="text-accent-purple text-5xl opacity-70"
              >
                <FaQuoteLeft />
              </motion.div>
              <div className="flex gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={14} className="text-accent-cyan" />
                ))}
              </div>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {activeTestimonial.content}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-[rgba(148,163,184,0.1)]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm">
                {activeTestimonial.avatar}
              </div>
              <div>
                <h4 className="text-base font-bold text-text-primary">{activeTestimonial.name}</h4>
                <p className="text-xs text-text-muted">{activeTestimonial.role}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-primary hover:text-accent-blue transition-colors duration-300"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-accent-blue' : 'bg-text-muted/50'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-primary hover:text-accent-blue transition-colors duration-300"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
